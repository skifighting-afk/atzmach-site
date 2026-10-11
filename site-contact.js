(()=>{
 'use strict';
 const EMAIL='skifighting@gmail.com',KAKAO='https://pf.kakao.com/_yynFX/chat',endpoint='https://formsubmit.co/ajax/'+EMAIL;
 const script=document.currentScript,base=new URL('.',script.src),privacy=new URL('privacy.html',base).href;
 const labels={program:'프로그램 개발',web:'홈페이지 제작',platform:'앱·플랫폼 개발',app:'앱 개발',academy:'창업 상담'};
 const page=location.pathname.split('/').pop().replace('.html','')||'index';
 const archive=window.atzIntake,inflight=new Map();
 function clean(v,max=30000){return String(v??'').trim().slice(0,max);}
 function no(){return 'ATZ-'+new Date().toISOString().slice(0,10).replaceAll('-','')+'-'+crypto.randomUUID().slice(0,8).toUpperCase();}
 async function send(p){
  const id=p.no||no();
  if(p.hp)return {ok:false,no:id,error:'spam'};
  if(!p.consent)return {ok:false,no:id,error:'동의가 필요합니다.'};
  if(!clean(p.phone||p.contact))return {ok:false,no:id,error:'연락처가 필요합니다.'};
  const fields={_subject:`[ATZ MACH 신규 문의] ${clean(p.type||labels[p.line]||'상담',70)} · ${clean(p.name||'문의 고객',60)}`,_template:'table',_captcha:'false',접수번호:id,접수시각:new Date().toLocaleString('ko-KR',{timeZone:'Asia/Seoul'}),이름:clean(p.name,60)||'미기재',연락처:clean(p.phone||p.contact,200),요청분야:clean(p.type||labels[p.line]||p.line,100)||'상담',업체명:clean(p.company,120)||'미기재',문의내용:clean(p.idea)||'미기재',접수페이지:location.origin+location.pathname};
  const extra=p.fields||p.meta||{};
  const names={org:'사용 대상',type:'제작 유형',via:'희망 연락 방법',want:'희망 상담 분야',industry:'업종',employees:'직원 수',fit:'진단 결과',likes:'좋아하는 것',goods:'잘하는 것',customRequirements:'제작 요청사항',contactWhen:'희망 연락 시간',tools:'사용 중인 도구',locations:'매장 수'};
  function append(obj,prefix=''){for(const [key,value] of Object.entries(obj||{})){if(value==null||/password|token|secret|^hp$/i.test(key))continue;const label=prefix+(names[key]||key);if(Array.isArray(value))fields[label]=value.map(v=>typeof v==='object'?JSON.stringify(v):v).join(' · ')||'미선택';else if(typeof value==='object')append(value,label+' / ');else fields[label]=clean(value)||'미기재';}}
  append(extra);fields['개인정보 수집·이용 동의']=p.consent?'동의':'미동의';
  const contact=clean(p.contact);if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact))fields._replyto=contact;
  try{const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(fields),signal:AbortSignal.timeout(20000)});const result=await response.json();
   if(!response.ok||!(result.success===true||result.success==='true')){console.warn('ATZ mail service:',response.status,String(result.message||''));return {ok:false,no:id,error:'전송하지 못했습니다. 잠시 후 다시 시도하거나 카카오 채널로 문의해 주세요.'};}
   if(archive)Promise.resolve(archive({...p,no:id})).catch(()=>{});
   return {ok:true,no:id};
  }catch{return {ok:false,no:id,error:'연결이 원활하지 않습니다. 다시 시도하거나 카카오 채널로 문의해 주세요.'};}
 }
 window.atzIntake=p=>{const key=p.no||JSON.stringify([p.name,p.phone,p.contact,p.idea]);if(inflight.has(key))return inflight.get(key);const task=send(p).finally(()=>inflight.delete(key));inflight.set(key,task);return task;};
 const dock=document.createElement('aside');dock.className='atz-contact-dock';dock.setAttribute('aria-label','빠른 상담');dock.innerHTML='<button type="button" data-atz-inquiry><span class="atz-contact-icon" aria-hidden="true">↗</span>바로 문의하기</button><a href="'+KAKAO+'" target="_blank" rel="noopener"><span class="atz-contact-icon" aria-hidden="true">●</span>카카오 채널 상담</a>';document.body.append(dock);
 const targets={index:'#diagnosis',platform:'#apply',app:'#apply',academy:'#apply',web:'#make'};
 function destination(){const hash=targets[page];return hash||new URL('index.html#diagnosis',base).href;}
 async function open(){const dest=destination();if(dest.startsWith('#')){let target=document.querySelector(dest);for(let attempt=0;!target&&attempt<30;attempt++){await new Promise(resolve=>setTimeout(resolve,100));target=document.querySelector(dest);}if(!target)return;history.replaceState(null,'',dest);target.style.scrollMarginTop='130px';target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}else location.href=dest;}
 dock.querySelector('button').onclick=open;
 async function submit(form,p){
  if(form.dataset.atzSending)return;form.dataset.atzSending='1';const buttons=[...form.querySelectorAll('[type="submit"]')],previous=buttons.map(b=>b.disabled);buttons.forEach(b=>b.disabled=true);
  let status=form.querySelector('.atz-contact-status');if(!status){status=document.createElement('div');status.className='atz-contact-status';status.setAttribute('role','status');form.append(status);}status.dataset.error='false';status.textContent='문의 보내는 중…';
  try{const result=await window.atzIntake(p);status.dataset.error=String(!result.ok);status.textContent=result.ok?`문의가 접수됐습니다. ${result.no} · 확인 후 연락드립니다.`:result.error;if(result.ok){form.reset();form.dispatchEvent(new CustomEvent('atz:submitted',{bubbles:true,detail:{no:result.no}}));}}
  finally{delete form.dataset.atzSending;buttons.forEach((b,i)=>b.disabled=previous[i]);}
 }
 function validContact(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||/^[+\d][\d\s()-]{7,25}$/.test(v)||/^.{2,60}$/.test(v)&&!v.includes('@')&&!/^[\d\s()+-]+$/.test(v);}
 // Existing business forms use the same email transport; demo forms are excluded.
 document.addEventListener('submit',e=>{
  const f=e.target;if(!(f instanceof HTMLFormElement)||!f.matches('#lead,#f'))return;
  e.preventDefault();e.stopImmediatePropagation();
  if(!f.reportValidity())return;
  const value=ids=>{for(const id of ids){const x=f.querySelector('#'+id)||f.querySelector(`[name="${id}"]`);if(x&&clean(x.value))return clean(x.value);}return '';};
  const contact=value(['f-phone','fP','f_ph','cf_ph','phone','contact','rqVal','a-phone','f-contact','tel']);
  const consent=[...f.querySelectorAll('input[type="checkbox"]')].some(x=>x.checked&&(/agree|consent|ok/i.test(x.id+x.name)||['fC','rqAgree'].includes(x.id)||x.required));
  let status=f.querySelector('.atz-contact-status');if(!status){status=document.createElement('div');status.className='atz-contact-status';status.setAttribute('role','status');f.append(status);}
  if(!contact||!validContact(contact)){status.textContent='연락처를 확인해 주세요.';status.dataset.error='true';return;}if(!consent){status.textContent='개인정보 수집·이용에 동의해 주세요.';status.dataset.error='true';return;}
  const fields={},groupNames={org:'어디에서 쓰시나요?',type:'무엇을 만들까요?',via:'희망 연락 방법',want:'희망 상담 분야'};
  for(const x of f.querySelectorAll('input,textarea,select')){
   if(x.disabled||['hidden','submit','button','password','file'].includes(x.type))continue;
   if(['checkbox','radio'].includes(x.type)&&!x.checked)continue;
   const ownLabel=x.labels?.[0]?.textContent?.trim();
   const label=groupNames[x.name]||x.getAttribute('aria-label')||ownLabel||x.name||x.id;
   const val=x.type==='checkbox'?(ownLabel||x.value||'선택'):x.tagName==='SELECT'?[...x.selectedOptions].map(o=>o.textContent).join(' · '):x.value;
   if(label)fields[label]=fields[label]?fields[label]+' · '+clean(val):clean(val)||'미기재';
  }
  if(page==='academy'&&typeof S!=='undefined'){fields['좋아하는 것']=S.likes||'미기재';fields['잘하는 것']=S.goods||'미기재';}

  submit(f,{line:page,type:f.querySelector('input[name=type]:checked')?.value||labels[page==='index'?'program':page]||'상담 문의',name:value(['f-name','fN','cf_name','name','a-name']),phone:contact,contact,company:value(['cf_co','company','f-company']),idea:fields['아이디어 (1~5줄)']||fields['당신의 이야기를 들려주세요']||value(['f-idea','cf_memo']),fields,consent:true});
 },true);
 // First visit to the site in this browser session.
 let first=true;try{first=!sessionStorage.getItem('atz-welcome-v1');}catch{}
 if(first){const welcome=document.createElement('dialog');welcome.className='atz-contact-dialog atz-welcome';welcome.setAttribute('aria-labelledby','atz-welcome-title');welcome.innerHTML='<div class="atz-contact-top"><span>ATZ MACH</span><button type="button" class="atz-contact-close" aria-label="안내 닫기">×</button></div><span class="atz-welcome-stamp">선착순 100팀</span><h2 id="atz-welcome-title">모든 작업,<br><em>14일 이내 완료.</em></h2><div class="atz-welcome-offer"><strong>1<small>시간 이내</small></strong><div><b>무료 1차 시안 제작</b><span>화면 · 방향성 검증</span></div></div><div class="atz-welcome-values"><span>전국 최저가</span><span>최고 품질</span></div><button type="button" class="atz-welcome-cta">무료 1차 시안 문의하기 ↗</button><button type="button" class="atz-welcome-dismiss">지금은 둘러볼게요</button>';document.body.append(welcome);const close=()=>{welcome.close();try{sessionStorage.setItem('atz-welcome-v1','1');}catch{}};welcome.querySelector('.atz-contact-close').onclick=close;welcome.querySelector('.atz-welcome-dismiss').onclick=close;welcome.querySelector('.atz-welcome-cta').onclick=()=>{close();open();};welcome.addEventListener('cancel',close);welcome.showModal();}
})();
