(()=>{
 'use strict';
 const EMAIL='skifighting@gmail.com',KAKAO='https://pf.kakao.com/_yynFX/chat',endpoint='https://formsubmit.co/ajax/'+EMAIL;
 const script=document.currentScript,base=new URL('.',script.src),privacy=new URL('privacy.html',base).href;
 const labels={program:'프로그램 개발',web:'홈페이지 제작',platform:'앱·플랫폼 개발',app:'앱 개발',academy:'창업 상담',enterprise:'기업 AI 전환'};
 const page=location.pathname.split('/').pop().replace('.html','')||'index';
 const archive=window.atzIntake,inflight=new Map();
 function clean(v,max=4000){return String(v??'').trim().slice(0,max);}
 function no(){return 'ATZ-'+new Date().toISOString().slice(0,10).replaceAll('-','')+'-'+crypto.randomUUID().slice(0,8).toUpperCase();}
 async function send(p){
  const id=p.no||no();
  if(p.hp)return {ok:false,no:id,error:'spam'};
  if(!p.consent)return {ok:false,no:id,error:'동의가 필요합니다.'};
  if(!clean(p.phone||p.contact))return {ok:false,no:id,error:'연락처가 필요합니다.'};
  const fields={_subject:`[ATZ MACH 신규 문의] ${clean(p.type||labels[p.line]||'상담',70)} · ${clean(p.name||'문의 고객',60)}`,_template:'table',_captcha:'false',접수번호:id,접수시각:new Date().toLocaleString('ko-KR',{timeZone:'Asia/Seoul'}),이름:clean(p.name,60)||'미기재',연락처:clean(p.phone||p.contact,200),요청분야:clean(p.type||labels[p.line]||p.line,100)||'상담',업체명:clean(p.company,120)||'미기재',문의내용:clean(p.idea)||'미기재',접수페이지:location.origin+location.pathname};
  const contact=clean(p.contact);if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact))fields._replyto=contact;
  try{const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(fields),signal:AbortSignal.timeout(20000)});const result=await response.json();
   if(!response.ok||!(result.success===true||result.success==='true')){console.warn('ATZ mail service:',response.status,String(result.message||''));return {ok:false,no:id,error:'전송하지 못했습니다. 잠시 후 다시 시도하거나 카카오 채널로 문의해 주세요.'};}
   if(archive)Promise.resolve(archive({...p,no:id})).catch(()=>{});
   return {ok:true,no:id};
  }catch{return {ok:false,no:id,error:'연결이 원활하지 않습니다. 다시 시도하거나 카카오 채널로 문의해 주세요.'};}
 }
 window.atzIntake=p=>{const key=p.no||JSON.stringify([p.name,p.phone,p.contact,p.idea]);if(inflight.has(key))return inflight.get(key);const task=send(p).finally(()=>inflight.delete(key));inflight.set(key,task);return task;};
 const dock=document.createElement('aside');dock.className='atz-contact-dock';dock.setAttribute('aria-label','빠른 상담');dock.innerHTML='<button type="button" data-atz-inquiry><span class="atz-contact-icon" aria-hidden="true">↗</span>바로 문의하기</button><a href="'+KAKAO+'" target="_blank" rel="noopener"><span class="atz-contact-icon" aria-hidden="true">●</span>카카오 채널 상담</a>';document.body.append(dock);
 const modal=document.createElement('dialog');modal.className='atz-contact-dialog';modal.setAttribute('aria-labelledby','atz-contact-title');
 modal.innerHTML=`<div class="atz-contact-top"><span>ATZ MACH</span><button class="atz-contact-close" type="button" aria-label="문의 창 닫기">×</button></div><h2 id="atz-contact-title">무엇을 만들까요?</h2><p>필요한 내용을 남겨 주세요. 확인 후 연락드립니다.</p><form class="atz-contact-form"><label>이름<input name="name" autocomplete="name" maxlength="60" required></label><label>연락처<input name="contact" autocomplete="tel" placeholder="휴대폰 번호 또는 이메일" maxlength="100" required></label><label>문의 분야<select name="service"><option>프로그램 개발</option><option>앱·플랫폼 개발</option><option>홈페이지 제작</option><option>기업 AI 전환</option><option>창업 상담</option><option>기타 문의</option></select></label><label>업체명 · 브랜드명 (선택)<input name="company" autocomplete="organization" maxlength="120"></label><label>문의 내용<textarea name="idea" rows="3" maxlength="4000" placeholder="만들고 싶은 기능이나 현재 고민을 적어 주세요." required></textarea></label><label class="atz-contact-trap" aria-hidden="true">Website<input name="hp" tabindex="-1" autocomplete="off"></label><label class="atz-contact-consent"><input name="consent" type="checkbox" required><span>문의 응대를 위한 이름·연락처·문의 내용 수집 및 이용에 동의합니다. <a href="${privacy}" target="_blank" rel="noopener">개인정보처리방침</a></span></label><button class="atz-contact-submit" type="submit">문의 보내기 ↗</button><div class="atz-contact-status" role="status" aria-live="polite"></div></form>`;document.body.append(modal);
 const form=modal.querySelector('form');
 function open(){if(!modal.open){const value=labels[page==='index'?'program':page];if(value)form.elements.service.value=value;modal.showModal();}}
 dock.querySelector('button').onclick=open;modal.querySelector('.atz-contact-close').onclick=()=>modal.close();modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
 async function submit(form,p){
  if(form.dataset.atzSending)return;form.dataset.atzSending='1';const buttons=[...form.querySelectorAll('[type="submit"]')],previous=buttons.map(b=>b.disabled);buttons.forEach(b=>b.disabled=true);
  let status=form.querySelector('.atz-contact-status');if(!status){status=document.createElement('div');status.className='atz-contact-status';status.setAttribute('role','status');form.append(status);}status.dataset.error='false';status.textContent='문의 보내는 중…';
  try{const result=await window.atzIntake(p);status.dataset.error=String(!result.ok);status.textContent=result.ok?`문의가 접수됐습니다. ${result.no} · 확인 후 연락드립니다.`:result.error;if(result.ok){form.reset();form.dispatchEvent(new CustomEvent('atz:submitted',{bubbles:true,detail:{no:result.no}}));}}
  finally{delete form.dataset.atzSending;buttons.forEach((b,i)=>b.disabled=previous[i]);}
 }
 form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),contact=clean(d.get('contact'));if(!validContact(contact)){form.querySelector('.atz-contact-status').textContent='휴대폰 번호 또는 이메일 주소를 확인해 주세요.';return;}submit(form,{line:page,type:d.get('service'),name:d.get('name'),contact,company:d.get('company'),idea:d.get('idea'),consent:d.get('consent')==='on',hp:d.get('hp')});});
 function validContact(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||/^[+\d][\d\s()-]{7,25}$/.test(v)||/^.{2,60}$/.test(v)&&!v.includes('@')&&!/^[\d\s()+-]+$/.test(v);}
 // Existing business forms use the same email transport; demo forms are excluded.
 document.addEventListener('submit',e=>{
  const f=e.target;if(!(f instanceof HTMLFormElement)||!f.matches('#lead,#f,#rqForm,#contact-form'))return;
  e.preventDefault();e.stopImmediatePropagation();
  if(!f.reportValidity())return;
  const value=ids=>{for(const id of ids){const x=f.querySelector('#'+id)||f.querySelector(`[name="${id}"]`);if(x&&clean(x.value))return clean(x.value);}return '';};
  const contact=value(['f-phone','fP','f_ph','cf_ph','phone','contact','rqVal','a-phone','f-contact','tel']);
  const consent=[...f.querySelectorAll('input[type="checkbox"]')].some(x=>x.checked&&(/agree|consent|ok/i.test(x.id+x.name)||['fC','rqAgree'].includes(x.id)||x.required));
  let status=f.querySelector('.atz-contact-status');if(!status){status=document.createElement('div');status.className='atz-contact-status';status.setAttribute('role','status');f.append(status);}
  if(!contact||!validContact(contact)){status.textContent='연락처를 확인해 주세요.';status.dataset.error='true';return;}if(!consent){status.textContent='개인정보 수집·이용에 동의해 주세요.';status.dataset.error='true';return;}
  const detail=[...f.querySelectorAll('input,textarea,select')].filter(x=>!['checkbox','radio','hidden','submit','password'].includes(x.type)&&x.value).map(x=>{const label=f.querySelector(`label[for="${x.id}"]`)?.textContent||x.closest('label')?.querySelector('span')?.textContent||x.name||x.id;return `${clean(label,80)}: ${clean(x.value)}`;}).join('\n');
  submit(f,{line:page,type:f.querySelector('input[name=type]:checked')?.value||labels[page==='index'?'program':page]||'상담 문의',name:value(['f-name','fN','cf_name','name','a-name']),phone:contact,contact,company:value(['cf_co','company','f-company']),idea:detail,consent:true});
 },true);
 // First visit to the site in this browser session.
 let first=true;try{first=!sessionStorage.getItem('atz-welcome-v1');}catch{}
 if(first){const welcome=document.createElement('dialog');welcome.className='atz-contact-dialog atz-welcome';welcome.setAttribute('aria-labelledby','atz-welcome-title');welcome.innerHTML='<div class="atz-contact-top"><span>ATZ MACH</span><button type="button" class="atz-contact-close" aria-label="안내 닫기">×</button></div><span class="atz-welcome-stamp">선착순 100팀</span><h2 id="atz-welcome-title">모든 작업,<br><em>14일 이내 완료.</em></h2><div class="atz-welcome-offer"><strong>1<small>시간 이내</small></strong><div><b>무료 1차 시안 제작</b><span>화면 · 방향성 검증</span></div></div><div class="atz-welcome-values"><span>전국 최저가</span><span>최고 품질</span></div><button type="button" class="atz-welcome-cta">무료 1차 시안 문의하기 ↗</button><button type="button" class="atz-welcome-dismiss">지금은 둘러볼게요</button>';document.body.append(welcome);const close=()=>{welcome.close();try{sessionStorage.setItem('atz-welcome-v1','1');}catch{}};welcome.querySelector('.atz-contact-close').onclick=close;welcome.querySelector('.atz-welcome-dismiss').onclick=close;welcome.querySelector('.atz-welcome-cta').onclick=()=>{close();open();};welcome.addEventListener('cancel',close);welcome.showModal();}
})();
