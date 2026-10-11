(()=>{
 const section=document.querySelector('#dirs'),row=section?.querySelector('.d3-row');
 if(!row)return;
 const cards=[...row.children],count=cards.length,reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let position=location.hash==='#design-new'?3:0,velocity=0,target=null,visible=false,raf=0,last=0,mobile=false,step=245,pointer=null,suppressClick=false,accessIndex=-1;
 row.classList.add('fan-ready');row.tabIndex=0;row.setAttribute('role','group');row.setAttribute('aria-roledescription','슬라이더');row.setAttribute('aria-label','예약 디자인 8종. 좌우로 드래그하거나 방향키로 넘기기');
 function distance(i){return ((i-position+count*2+count/2)%count)-count/2;}
 function paint(){
  const nearest=((Math.round(position)%count)+count)%count;
  cards.forEach((card,i)=>{const d=distance(i),a=Math.abs(d),shown=a<2.8;
   card.style.setProperty('--fan-x',`${d*step}px`);card.style.setProperty('--fan-y',`${a*(mobile?25:24)}px`);card.style.setProperty('--fan-r',`${d*9}deg`);
   card.style.setProperty('--fan-s',String((mobile?.73:.81)-Math.min(a,3)*.065));
   card.style.setProperty('--fan-opacity',String(a<1?1-a*.25:a<2?.75-(a-1)*.4:Math.max(0,.35*(2.8-a)/.8)));
   card.style.setProperty('--fan-visible',shown?'visible':'hidden');card.style.setProperty('--fan-z',String(100-Math.round(a*20)));
   if(nearest!==accessIndex){card.tabIndex=i===nearest?0:-1;card.setAttribute('aria-current',String(i===nearest));}
   card.setAttribute('aria-hidden',String(!shown));
  });accessIndex=nearest;
 }
 function frame(now){raf=0;const dt=last?Math.min((now-last)/1000,.04):0;last=now;
  if(!pointer){
   if(target!==null){const delta=target-position;position+=delta*(1-Math.exp(-10*dt));if(Math.abs(delta)<.002){position=target;target=null;}}
   else if(Math.abs(velocity)>.015){position+=velocity*dt;velocity*=Math.exp(-3.2*dt);}
   else{velocity=0;if(!reduced.matches)position+=dt*.14;}
  }
  if(Math.abs(position)>count*4){const shift=Math.trunc(position/count)*count;position-=shift;if(target!==null)target-=shift;}
  paint();if(visible&&!document.hidden&&(pointer||target!==null||velocity||!reduced.matches))raf=requestAnimationFrame(frame);
 }
 function run(){if(!visible||document.hidden){cancelAnimationFrame(raf);raf=0;last=0;return;}if(!raf){last=0;raf=requestAnimationFrame(frame);}}
 function focusCard(i){target=position+distance(i);velocity=0;run();}
 cards.forEach((card,i)=>{card.setAttribute('aria-label',`${i+1} / ${count} ${card.querySelector('.d3-cap')?.textContent.trim()||'디자인'}`);card.addEventListener('click',()=>{if(!suppressClick)focusCard(i);});card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();focusCard(i);}});});
 row.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();target=Math.round(target??position)+(e.key==='ArrowRight'?1:-1);velocity=0;run();}});
 row.addEventListener('dragstart',e=>e.preventDefault());
 row.addEventListener('pointerdown',e=>{if(e.button!==0||pointer)return;suppressClick=false;pointer={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,time:e.timeStamp,start:position,drag:false};target=null;velocity=0;run();});
 row.addEventListener('pointermove',e=>{
  if(!pointer||e.pointerId!==pointer.id)return;
  const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;
  if(!pointer.drag){if(Math.abs(dx)<5)return;if(e.pointerType==='touch'&&Math.abs(dy)>Math.abs(dx)){pointer=null;run();return;}pointer.drag=true;row.classList.add('is-dragging');row.setPointerCapture(e.pointerId);}
  position=pointer.start-dx/step;const elapsed=e.timeStamp-pointer.time;
  if(elapsed>0){const speed=-(e.clientX-pointer.lastX)/step/(elapsed/1000);velocity=Math.max(-14,Math.min(14,velocity*.25+speed*.75));}
  pointer.lastX=e.clientX;pointer.time=e.timeStamp;suppressClick=true;paint();
 });
 function release(e){if(!pointer||e.pointerId!==pointer.id)return;if(e.type==='pointercancel'||e.timeStamp-pointer.time>120)velocity=0;pointer=null;row.classList.remove('is-dragging');if(row.hasPointerCapture(e.pointerId))row.releasePointerCapture(e.pointerId);run();}
 window.addEventListener('pointerup',release);row.addEventListener('pointercancel',release);row.addEventListener('lostpointercapture',release);
 document.addEventListener('visibilitychange',run);reduced.addEventListener('change',run);
 function size(){mobile=section.clientWidth<600;step=mobile?152:245;paint();}window.addEventListener('resize',size);size();
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;run();},{threshold:.1}).observe(row);
})();
