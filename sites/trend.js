/* ATZ TREND 시안: 스크롤 위치로 영상 시간을 맞추고(스크럽), 구간마다 문구·3D 효과를 켠다 */
(() => {
  const sc = document.querySelector('.scrub'), st = sc && sc.querySelector('.stage'), v = st && st.querySelector('video');
  const chs = st ? [...st.querySelectorAll('.ch')] : [], hud = st && st.querySelector('[data-hud]');
  const hz = document.querySelector('.hz'), hzT = hz && hz.querySelector('.hz__t');
  let want = 0, have = 0, ready = false;
  if (v) {
    v.muted = true; v.playsInline = true;
    // iOS는 한 번 재생해야 currentTime 이동이 화면에 반영된다
    v.addEventListener('loadedmetadata', () => { ready = true; const p = v.play(); p && p.then(() => v.pause()).catch(() => {}) }, { once: true });
    if (v.readyState >= 1) v.dispatchEvent(new Event('loadedmetadata'));
  }
  const clamp = x => Math.min(1, Math.max(0, x));
  function onScroll() {
    if (sc) {
      const r = sc.getBoundingClientRect(), p = clamp(-r.top / (r.height - innerHeight));
      st.style.setProperty('--p', p.toFixed(4));
      if (ready && v.duration) want = p * (v.duration - .05);
      chs.forEach(c => c.classList.toggle('on', p >= +c.dataset.from && p < +c.dataset.to));
      if (hud) hud.textContent = String(Math.min(chs.length, 1 + Math.floor(p * chs.length))).padStart(2, '0') + ' / ' + String(chs.length).padStart(2, '0');
    }
    if (hz) {
      const r = hz.getBoundingClientRect(), p = clamp(-r.top / (r.height - innerHeight));
      hzT.style.setProperty('--h', (p * Math.max(0, hzT.scrollWidth - innerWidth + 64)).toFixed(1));
    }
  }
  // 영상은 목표 시간까지 부드럽게 따라간다(탐색 중엔 다음 프레임을 기다림)
  (function tick() {
    if (ready && !v.seeking && Math.abs(want - have) > .02) { have += (want - have) * .18; v.currentTime = have }
    requestAnimationFrame(tick);
  })();
  addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();
  // 카드: 마우스 따라 기울기
  document.querySelectorAll('.card').forEach(c => {
    c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.setProperty('--ry', (x - .5) * 16 + 'deg'); c.style.setProperty('--rx', (.5 - y) * 16 + 'deg'); c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%') });
    c.addEventListener('pointerleave', () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg') });
  });
  // 화면에 들어온 반복 영상만 재생
  const io = 'IntersectionObserver' in window && new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()));
  document.querySelectorAll('video[data-loop]').forEach(x => io ? io.observe(x) : x.play());
})();
