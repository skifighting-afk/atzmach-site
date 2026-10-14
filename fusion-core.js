(()=>{'use strict';const stage=document.getElementById('fusion-stage'),label=document.getElementById('fusion-state'),status=document.getElementById('speech-status');if(!stage||!label)return;let timer;
function set(mode){stage.classList.toggle('fusion-active',mode!=='idle');stage.classList.toggle('fusion-speaking',mode==='speaking');label.textContent=mode==='speaking'?'AI 브리핑 중':mode==='thinking'?'운영 시나리오 분석 중':'AI 대기 중'}
document.addEventListener('click',e=>{if(e.target.closest?.('[data-question]')){clearTimeout(timer);set('thinking');timer=setTimeout(()=>set('idle'),1800)}});
if(status)new MutationObserver(()=>{const s=status.textContent;if(!s.trim())return;if(s.includes('읽고 있습니다')){clearTimeout(timer);set('speaking')}else if(!s.includes('버튼을 누르면')){clearTimeout(timer);set('idle')}}).observe(status,{childList:true,subtree:true,characterData:true});
if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>stage.classList.toggle('core-visible',e.isIntersecting&&!document.hidden)),{threshold:.1});io.observe(stage)}else stage.classList.add('core-visible');document.addEventListener('visibilitychange',()=>{if(document.hidden){stage.classList.remove('core-visible');clearTimeout(timer);set('idle')}else{const r=stage.getBoundingClientRect();stage.classList.toggle('core-visible',r.bottom>0&&r.top<innerHeight)}});
})();

