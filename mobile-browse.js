/* Small-screen browsing helpers. Desktop pages never initialize this module. */
(() => {
 'use strict';
 if(!matchMedia('(max-width:760px)').matches)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
 const button=(text,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.addEventListener('click',fn);return b};
 const tools=()=>{const d=document.createElement('div');d.className='mobile-tools';return d};
 // 1. Price inclusion lists stay available without three screenfuls per plan.
 all('.pkc').forEach(card=>{
  const first=card.querySelector('.pkc__h');if(!first)return;
  const detail=document.createElement('details');detail.className='mobile-price-details';
  const summary=document.createElement('summary');summary.textContent='포함 항목 · 한도 자세히';detail.append(summary);
  while(first.nextSibling)detail.append(first.nextSibling);
  detail.insertBefore(first,summary.nextSibling);card.append(detail);
 });
 // 2. Expand all plans for an honest side-by-side scope comparison.
 const plans=$('.pk');if(plans){const bar=tools();bar.append(button('포함 항목 모두 펼치기',e=>{const open=all('.mobile-price-details').some(x=>!x.open);all('.mobile-price-details').forEach(x=>x.open=open);e.currentTarget.textContent=open?'포함 항목 모두 접기':'포함 항목 모두 펼치기'}));plans.before(bar)}
 // 3–4. Fold advanced ERP filters and reset them in one tap.
 const filters=$('.pfx-fs');if(filters){
  filters.classList.add('mobile-filter-fold');filters.hidden=true;
  const toggle=button('세부 조건 펼치기',()=>{filters.hidden=!filters.hidden;toggle.textContent=filters.hidden?'세부 조건 펼치기':'세부 조건 접기';toggle.setAttribute('aria-expanded',String(!filters.hidden))});toggle.className='mobile-filter-toggle';toggle.setAttribute('aria-expanded','false');filters.before(toggle);
  const bar=tools();bar.append(button('조건 초기화',()=>{filters.querySelectorAll('select').forEach(s=>{s.selectedIndex=0;s.dispatchEvent(new Event('change',{bubbles:true}))});const q=filters.querySelector('input');if(q){q.value='';q.dispatchEvent(new Event('input',{bubbles:true}))}const first=$('.pfx-cats button');if(first)first.click()}));filters.after(bar);
 }
 // 5. Chosen categories remain visible in long horizontal chip lists.
 document.addEventListener('click',e=>{const chip=e.target.closest('.chips button,.pfx-cats button,.tabs button');if(!chip)return;const p=chip.parentElement;if(p.scrollWidth>p.clientWidth)p.scrollTo({left:chip.offsetLeft-p.offsetLeft-(p.clientWidth-chip.clientWidth)/2,behavior:reduced.matches?'auto':'smooth'})});
 // 6. Keep the active section visible in the small section navigation.
 const anchors=all('.sub a[href^="#"]');const sections=anchors.map(a=>({a,target:document.getElementById(a.hash.slice(1))})).filter(x=>x.target);
 if(sections.length){const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){const current=sections.find(x=>x.target===e.target);sections.forEach(x=>x.a.classList.toggle('mobile-current',x===current));const p=current.a.parentElement;if(p.scrollWidth>p.clientWidth)p.scrollTo({left:current.a.offsetLeft-p.offsetLeft-8,behavior:reduced.matches?'auto':'smooth'})}},{rootMargin:'-10% 0px -65% 0px'});sections.forEach(x=>io.observe(x.target))}
 // 7. A slim reading-progress line needs no extra screen space.
 const progress=document.createElement('div');progress.className='mobile-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);let frame=0;
 const update=()=>{frame=0;const d=document.documentElement;progress.style.width=(100*scrollY/Math.max(1,d.scrollHeight-innerHeight))+'%'};
 addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update)},{passive:true});update();
 // 8. FAQ answers behave as a single compact accordion.
 document.addEventListener('toggle',e=>{const d=e.target;if(d.matches?.('#fqL details,.faq details')&&d.open)all('#fqL details[open],.faq details[open]').forEach(x=>{if(x!==d)x.open=false})},true);
 // 9. Swipe case previews without fighting their vertical scrolling.
 const modal=$('#cd');if(modal){let start=null;modal.addEventListener('pointerdown',e=>{if(e.target.closest('button,input,a,select'))return;start={x:e.clientX,y:e.clientY}});modal.addEventListener('pointerup',e=>{if(!start)return;const dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.6){const controls=modal.querySelectorAll('.cd__nav button:not(.x)');const b=controls[dx<0?1:0];if(b&&!b.disabled)b.click()}});modal.addEventListener('pointercancel',()=>start=null)}
 // 10. Explicit gallery movement controls; animation pauses while reading.
 const grid=$('#grid.mqs');if(grid&&typeof MQ!=='undefined'){
  const bar=tools();const previous=button('← 이전',()=>step(1)),next=button('다음 →',()=>step(-1));
  const pause=button('이동 멈추기',()=>{MQ.mobilePaused=!MQ.mobilePaused;pause.textContent=MQ.mobilePaused?'천천히 이동':'이동 멈추기';pause.setAttribute('aria-pressed',String(MQ.mobilePaused));mqWake()});pause.setAttribute('aria-pressed','false');
  function step(dir){MQ.mobilePaused=true;pause.textContent='천천히 이동';pause.setAttribute('aria-pressed','true');MQ.rows.forEach(r=>{r.x+=dir*183;mqSet(r)})}
  bar.append(previous,pause,next);const hint=document.createElement('span');hint.className='mobile-hint';hint.textContent='밀어서도 볼 수 있어요';bar.append(hint);grid.before(bar);
  grid.addEventListener('focusin',()=>MQ.mobileReading=true);grid.addEventListener('focusout',()=>MQ.mobileReading=false);
  grid.addEventListener('pointerdown',()=>MQ.mobileResume=performance.now()+5000,{passive:true});
 }
 addEventListener('resize',()=>{const desktop=innerWidth>760;all('.mobile-price-details').forEach(d=>{if(desktop)d.open=true});if(filters&&desktop)filters.hidden=false});
})();
