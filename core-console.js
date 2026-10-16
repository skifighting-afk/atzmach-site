/* ATZ CORE 브리핑 연출: 질문이 타이핑되고 → 코어가 분석 → 울리며 답변이 써진다. 화면 밖이면 멈춤. */
(() => {
  'use strict';
  const root = document.querySelector('.ac'); if (!root) return;
  const $q = root.querySelector('[data-ac-q]'), $a = root.querySelector('[data-ac-a]'), $st = root.querySelector('[data-ac-state]');
  const cards = [...root.querySelectorAll('.ac-card')], bars = [...root.querySelectorAll('.ac-wave i')];
  const S = [
    { q: '오늘 전체 상황, 브리핑해줘.', c: 0, a: '<b>전사 매출 2억 8,460만 원</b>, 어제보다 <em>12.8% 상승</em>했습니다. 8개 브랜드 중 7곳은 정상이고, <span class="w">리테일 B의 재고 점검 1건</span>만 먼저 확인하시면 됩니다.<span class="src">근거 · 계열사별 당일 매출 · 지점 운영 보고</span>' },
    { q: '리테일 B는 왜 재고가 쌓였어?', c: 2, a: '이번 주 <b>판매 속도가 지난달보다 18% 느린데</b>, 발주는 그대로 들어갔습니다. 3개 품목이 <span class="w">재고 21일치</span>로 늘었습니다. <em>다음 발주를 30% 줄이고 프로모션 1건</em>을 권합니다.<span class="src">근거 · 판매 기록 · 발주 내역 · 창고 재고</span>' },
    { q: '다음 주에 먼저 챙길 곳은 어디야?', c: 3, a: '<b>외식 브랜드 A</b>입니다. 원재료 단가가 오르는 흐름이라 그대로면 이익이 <span class="w">주 420만 원</span> 줄어들 수 있습니다. <em>거래처 2곳 단가 비교</em>를 오늘 올려 두겠습니다.<span class="src">근거 · 매입 단가 이력 · 7일 전망(예시)</span>' },
    { q: '이번 달 목표, 달성 가능해?', c: 1, a: '현재 속도면 <b>목표 대비 96%</b>입니다. 남은 9일 동안 <em>주말 매출이 지난달 수준</em>만 나오면 달성합니다. 가장 여력이 큰 곳은 <b>레저 브랜드 C</b>입니다.<span class="src">근거 · 목표 대비 누적 매출 · 예약 현황</span>' },
  ];
  const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
  let visible = false, run = 0;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const until = async () => { while (!visible || document.hidden) await wait(300) };
  const mode = (m, t) => { root.dataset.mode = m; $st.textContent = t };
  const glow = i => cards.forEach((c, k) => c.classList.toggle('on', k === i));
  let waveT = 0;
  const wave = on => {
    cancelAnimationFrame(waveT);
    if (!on) { bars.forEach(b => b.style.height = '6px'); return }
    const tick = t => { bars.forEach((b, i) => b.style.height = (6 + Math.abs(Math.sin(t / 120 + i * .9)) * 22 * (0.5 + Math.random() * .5)) + 'px'); waveT = requestAnimationFrame(tick) };
    waveT = requestAnimationFrame(tick);
  };
  // HTML 답변을 글자 단위로 써 내려간다(태그는 한 번에)
  async function typeHTML(el, html, speed) {
    const parts = html.match(/<[^>]+>|[^<]/g); let out = '';
    for (const p of parts) { out += p; if (p[0] !== '<') { el.innerHTML = out; await wait(speed); await until() } }
    el.innerHTML = html;
  }
  if (reduced) { const s = S[0]; $q.textContent = s.q; $a.innerHTML = s.a; glow(s.c); mode('speak', 'AI 브리핑'); return }
  async function loop() {
    const my = ++run; let i = 0;
    while (my === run) {
      const s = S[i++ % S.length];
      await until(); $a.innerHTML = ''; $q.textContent = ''; glow(-1); mode('type', '듣는 중');
      for (const ch of s.q) { $q.textContent += ch; await wait(70 + Math.random() * 60); await until() }
      await wait(350); mode('think', '분석 중'); glow(s.c); await wait(1100);
      mode('speak', 'AI 브리핑 중'); wave(true); await typeHTML($a, s.a, 22); wave(false);
      mode('idle', '대기 중'); await wait(3200);
    }
  }
  if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => visible = e.isIntersecting), { threshold: .2 }).observe(root); else visible = true;
  loop();
})();
