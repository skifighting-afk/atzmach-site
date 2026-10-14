/* 30: Accessible, stable mobile browsing helpers, including resize handling. */
(()=>{
 'use strict';
 const mq=matchMedia('(max-width:760px)');
 const sync=()=>document.body.classList.toggle('mc',mq.matches);
 sync();mq.addEventListener('change',sync);
 let queued=false;
 function enhance(){
  queued=false;if(!mq.matches)return;
  const target=document.querySelector('#main,main,#top');
  if(target&&!document.querySelector('.mc-skip')){
   if(!target.id)target.id='mc-main';
   const a=document.createElement('a');a.className='mc-skip';a.href='#'+target.id;a.textContent='본문으로 바로가기';document.body.prepend(a);
  }
  document.querySelectorAll('table').forEach(t=>{
   if(t.closest('.mc-table-scroll,.cd,.mo,dialog'))return;
   const wrap=document.createElement('div');wrap.className='mc-table-scroll';wrap.tabIndex=0;wrap.setAttribute('role','region');wrap.setAttribute('aria-label',(t.caption?.textContent||'비교표')+' — 좌우로 밀어 보기');t.before(wrap);wrap.append(t);
  });
  document.querySelectorAll('img:not([data-mc-image])').forEach(img=>{
   img.dataset.mcImage='1';const r=img.getBoundingClientRect();
   if(r.top>innerHeight*1.5&&!img.closest('#top,.nav')){img.loading='lazy';img.decoding='async'}
  });
  document.querySelectorAll('.mo__x,.atz-contact-close').forEach(b=>{if(!b.hasAttribute('aria-label'))b.setAttribute('aria-label','미리보기 닫기')});
  const grid=document.querySelector('#grid');
  if(grid&&!document.querySelector('.mc-gallery-note')){const p=document.createElement('p');p.className='mc-gallery-note';p.textContent='사례를 밀어서 살펴보고, 궁금한 화면을 눌러보세요.';grid.before(p)}
 }
 function schedule(){if(!queued){queued=true;requestAnimationFrame(enhance)}}
 const observer=new MutationObserver(schedule);observer.observe(document.body,{childList:true,subtree:true});
 mq.addEventListener('change',schedule);enhance();
})();
