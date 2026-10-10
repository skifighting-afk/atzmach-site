/* ID e — 무역·해외직구·건강식품·영상제작 12 screens */
(function(){
"use strict";
var LX=window.LX=window.LX||{};
function H(t,s,r){return '<div class="hd"><h4>'+t+'<small>'+s+'</small></h4>'+(r||'')+'</div>'}
function FT(a,b){return '<div class="ft">'+(a?'<span class="b2" data-tap="'+a[1]+'">'+a[0]+'</span>':'')+'<span class="b1" data-tap="'+b[1]+'">'+b[0]+'</span></div>'}

/* 01 수입 통관 서류 관리 */
LX["수입 통관 서류 관리"]={cls:"s-e01",time:"9:12",cap:"컨테이너 한 건의 통관 단계와 서류 현황",
body:function(){
 var st=[["선적","10/02",1],["운송","10/06",1],["입항","10/12",2],["심사","",0],["반출","",0]];
 var docs=[["INV","상업송장 Invoice","CI-2610-0417","ok","확인"],["PL","포장명세서 Packing List","PL-2610-0417","ok","확인"],["B/L","선하증권 B/L","BUSN26100391","ok","확인"],["C/O","원산지증명서 FTA","미제출 · 수출자 요청 필요","bad","누락"]];
 return H("통관 서류","수입신고 2건 진행 중 · 10월 11일",'<span class="ch" data-tap="알림 3건을 확인했어요">알림 3</span>')+
 '<div class="ph"><img src="lx/img/port-containers.jpg" alt=""><span class="tg">부산신항 · 4부두</span><div class="cap"><div><b class="num">MSKU 774129-8</b><span>40ft HC · 가공식품 18,400kg</span></div><span class="eta"><i>입항까지</i><b class="num">D-1</b></span></div></div>'+
 '<div class="stp">'+st.map(function(s,i){return '<div class="'+(s[2]==1?'dn':s[2]==2?'nw':'')+'"><i>'+(s[2]==1?'✓':i+1)+'</i><b>'+s[0]+'</b><small class="num">'+(s[1]||'-')+'</small></div>'}).join('')+'</div>'+
 '<div class="dc"><h5>필수 서류 <small>3 / 4 확인</small></h5>'+docs.map(function(d){return '<div class="dr" data-tap="'+d[1].split(' ')[0]+' 상세를 열었어요"><span class="ik '+d[3]+'">'+d[0]+'</span><p>'+d[1]+'<small class="num">'+d[2]+'</small></p><em class="'+d[3]+'">'+d[4]+'</em></div>'}).join('')+'</div>'+
 '<div class="tx"><div><small>예상 관세·부가세</small><b class="num">₩3,284,500</b></div><div><small>납부 기한</small><b class="num">10/14 (화)</b></div></div>'},
foot:function(){return FT(["서류 요청","수출자에게 누락 서류를 요청했어요"],["수입신고서 제출","수입신고서를 제출했어요"])}};

/* 02 해외 배송비·관세 견적 */
LX["해외 배송비·관세 견적"]={cls:"s-e02",time:"14:03",cap:"국가·무게로 배송비와 관세를 한 번에",
body:function(){
 var cs=[["미국",1],["일본",0],["독일",0],["호주",0]];
 var op=[["특송","2~4일 · 문앞배송","38,400",1],["항공소포","6~9일 · 추적가능","24,900",0],["해상혼적","25~30일 · 대형","14,200",0]];
 return '<div class="top">'+H("직구 견적","오늘 환율 US$1 = ₩1,382",'<span class="av">김</span>')+
  '<div class="cn">'+cs.map(function(c){return '<span class="'+(c[1]?'on':'')+'" data-tap="'+c[0]+' 기준으로 다시 계산했어요">'+c[0]+'</span>'}).join('')+'</div></div>'+
 '<div class="sheet"><div class="it"><span class="th"><img src="lx/img/parcels.jpg" alt=""></span><p>미국 → 한국 · 박스 2개<small class="num">3.2kg · 40×30×25cm · 부피무게 5.0kg</small></p><span class="ed" data-tap="상품 정보를 수정할게요">수정</span></div>'+
 '<div class="vl"><div><small>물품가액</small><b class="num">US$ 186</b></div><div><small>HS코드</small><b class="num">6110.20</b></div><div><small>관세율</small><b class="num">13%</b></div></div>'+
 '<div class="op">'+op.map(function(o){return '<div class="'+(o[3]?'on':'')+'" data-tap="'+o[0]+' 배송을 선택했어요"><i></i><p>'+o[0]+'<small>'+o[1]+'</small></p><b class="num">₩'+o[2]+'</b></div>'}).join('')+'</div>'+
 '<div class="rc"><div><span>국제운임 (5.0kg)</span><b class="num">₩31,200</b></div><div><span>유류할증료</span><b class="num">₩5,100</b></div><div><span>관세 13%</span><b class="num">₩33,400</b></div><div><span>부가세 10%</span><b class="num">₩29,000</b></div><div class="tt"><span>예상 총 비용</span><b class="num">₩98,700</b></div></div></div>'+
 '<div class="tip"><i>💡</i><p>US$150 이하는 <b>목록통관</b>으로 관세 면제<small>일반통관 대상 · 분할 배송 시 절세</small></p></div>'},
foot:function(){return FT(["공유","견적 링크를 복사했어요"],["견적서 발급","견적서를 발급했어요"])}};

/* 03 환율 원가 계산기 */
LX["환율 원가 계산기"]={cls:"s-e03",time:"9:30",cap:"환율 변동에 따른 개당 원가와 마진",
body:function(){
 var pts=[40,44,42,47,52,49,55,58,54,60,66,63,69,74,70,76,82,79,85,80,88,92,86,90,95,91,97,102,98,104];
 var w=330,h=92,lo=36,hi=108,d=pts.map(function(v,i){return (i?'L':'M')+(i*w/29).toFixed(1)+' '+(h-(v-lo)/(hi-lo)*h).toFixed(1)}).join('');
 var ex=w,ey=h-(104-lo)/(hi-lo)*h;
 return H("원가 계산기","USD/KRW 실시간 · 09:30",'<span class="ch" data-tap="환율 알림을 설정했어요">🔔 1,400</span>')+
 '<div class="rt"><div><small>US$ 1</small><b class="num">1,382.40</b></div><em class="num">▲ 6.20 (+0.45%)</em></div>'+
 '<svg class="ln" viewBox="0 0 330 100" preserveAspectRatio="none"><defs><linearGradient id="e3g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C6F432" stop-opacity=".35"/><stop offset="1" stop-color="#C6F432" stop-opacity="0"/></linearGradient></defs><path d="M0 46H330" stroke="rgba(255,255,255,.2)" stroke-dasharray="3 4"/><path d="'+d+'L330 100L0 100Z" fill="url(#e3g)"/><path d="'+d+'" fill="none" stroke="#C6F432" stroke-width="2"/><circle cx="'+(ex-4)+'" cy="'+ey.toFixed(1)+'" r="4" fill="#0B0F14" stroke="#C6F432" stroke-width="2"/></svg>'+
 '<div class="rg"><span>1주</span><span class="on">1개월</span><span>3개월</span><em>30일 평균 1,361</em></div>'+
 '<div class="in"><div><small>매입 단가</small><b class="num">US$ 18.50</b></div><span>×</span><div><small>수량</small><b class="num">2,000</b></div><span>=</span><div><small>상품 대금</small><b class="num">₩51.1M</b></div></div>'+
 '<div class="cs"><h5>개당 원가 <b class="num">₩31,240</b></h5><div class="bar"><i style="width:82%;background:#C6F432"></i><i style="width:8%;background:#5AD1FF"></i><i style="width:6%;background:#FF9F43"></i><i style="width:4%;background:#B28CFF"></i></div>'+
 '<div class="lg"><span><s style="background:#C6F432"></s>상품 25,580</span><span><s style="background:#5AD1FF"></s>운임 2,500</span><span><s style="background:#FF9F43"></s>관세 1,870</span><span><s style="background:#B28CFF"></s>기타 1,290</span></div></div>'+
 '<div class="mg"><div class="rn"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="none" stroke="#222B36" stroke-width="4"/><circle cx="18" cy="18" r="15" fill="none" stroke="#C6F432" stroke-width="4" stroke-linecap="round" stroke-dasharray="35.3 94.2" transform="rotate(-90 18 18)"/></svg><b class="num">37.4<small>%</small></b></div>'+
 '<div class="sn"><small>환율별 마진 (판매가 ₩49,900)</small><div><span>1,350 <b class="num">39.0%</b></span><span class="on">1,382 <b class="num">37.4%</b></span><span>1,420 <b class="num">35.6%</b></span></div></div></div>'+
 '<div class="al"><i>⚠</i><p>환율 1,400 도달 시 <b>개당 원가 +₩360</b><small>마진 37.4% → 36.7% · 알림 설정됨</small></p></div>'},
foot:function(){return FT(["공유","원가표를 공유했어요"],["원가표 저장","원가표를 저장했어요"])}};

/* 04 해외 고객 문의 응답 */
LX["해외 고객 문의 응답"]={cls:"s-e04",time:"22:47",cap:"영어 문의를 한국어로 읽고 영어로 답변",
body:function(){return ''+
 '<div class="hd"><span class="bk">‹</span><span class="av">EW</span><h4>Emma W.<small>🇺🇸 Seattle · 영어 → 한국어 자동번역</small></h4><span class="ch" data-tap="번역 설정을 열었어요">KO ⇄ EN</span></div>'+
 '<div class="th"><div class="dy">오늘 22:31 (현지 06:31)</div>'+
 '<div class="m cu"><p>Hi! My order #KR-20817 arrived but one jar is leaking. Can I get a replacement?</p><span class="tr">안녕하세요! 주문 #KR-20817이 도착했는데 병 하나가 새고 있어요. 교환받을 수 있을까요?</span></div>'+
 '<div class="oc"><img src="lx/img/food-kimchi.jpg" alt=""><p>#KR-20817<small>포기김치 1kg × 2 · US$ 48.00</small></p><em>배송완료</em></div>'+
 '<div class="m cu"><p>Here is a photo. Shipping to Seattle again?</p><span class="tr">사진 첨부합니다. 시애틀로 다시 보내주실 수 있나요?</span></div>'+
 '<div class="m me"><p>Hello Emma, I\'m so sorry about that! We will ship a replacement jar free of charge.</p><span class="tr">안녕하세요 Emma님, 정말 죄송합니다! 교환 상품을 무료로 보내드릴게요.</span></div></div>'+
 '<div class="qk"><span data-tap="환불 안내 문구를 넣었어요">환불 안내</span><span data-tap="배송 조회 문구를 넣었어요">배송 조회</span><span data-tap="관세 안내 문구를 넣었어요">관세 안내</span><span data-tap="사과 문구를 넣었어요">사과</span></div>'+
 '<div class="ai"><div class="ah"><b>✦ 추천 답변</b><span class="tg2" data-tap="톤을 부드럽게 바꿨어요">부드럽게</span></div><p>Your replacement ships tomorrow (EMS, 5–7 days). Tracking will follow by email.</p><span class="tr">교환품은 내일 발송됩니다 (EMS, 5~7일). 운송장은 이메일로 보내드릴게요.</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="사진을 첨부했어요">＋</span><span class="inp">한국어로 입력하세요…</span><span class="b1" data-tap="영어로 번역해 전송했어요">영어로 전송</span></div>'}};

/* 05 정기배송 구독 관리 */
LX["정기배송 구독 관리"]={cls:"s-e05",time:"11:20",cap:"내 정기배송 일정과 구독 상품",
body:function(){
 var wk=[["일",12],["월",13],["화",14,1],["수",15],["목",16],["금",17],["토",18]];
 var it=[["오메가3 rTG","2주마다 · 60정","29,900",1],["멀티비타민 데일리","4주마다 · 90정","24,500",1],["유산균 프리미엄","4주마다 · 30포","32,000",0]];
 return H("내 정기배송","프리미엄 구독 4회차 · 10% 할인 적용",'<span class="ch" data-tap="배송지를 확인했어요">배송지</span>')+
 '<div class="ph"><img src="lx/img/supplements.jpg" alt=""><div class="cap"><div><small>다음 배송</small><b>10월 14일 (화)</b><span>오전 도착 · CJ형 택배 · 3일 남음</span></div><span class="dd num">D-3</span></div></div>'+
 '<div class="wk">'+wk.map(function(w){return '<div class="'+(w[2]?'on':'')+'"><small>'+w[0]+'</small><b class="num">'+w[1]+'</b>'+(w[2]?'<i></i>':'')+'</div>'}).join('')+'</div>'+
 '<div class="sl"><h5>구독 상품 <small>3개</small></h5>'+it.map(function(x){return '<div class="rw"><span class="bt"><i></i></span><p>'+x[0]+'<small>'+x[1]+'</small></p><b class="num">₩'+x[2]+'</b><span class="sw'+(x[3]?'':' off')+'" data-sw></span></div>'}).join('')+'</div>'+
 '<div class="sm"><div><small>이번 회차 결제 예정</small><b class="num">₩75,060</b></div><span data-tap="배송일을 변경할게요">배송일 변경</span></div>'},
foot:function(){return FT(["건너뛰기","이번 회차를 건너뛰었어요"],["다음 배송 확정","다음 배송을 확정했어요"])}};

/* 06 해지 방어 메시지 */
LX["해지 방어 메시지"]={cls:"s-e06",time:"16:08",cap:"해지 위험 고객에게 맞춤 혜택 보내기",
body:function(){
 var of=[["다음 2회 10% 할인","₩5,980 절약",1],["1회 무료 증정(샘플 3종)","원가 ₩4,200",0],["배송 주기 4주로 변경","부담 낮추기",0]];
 return H("해지 방어","이번 주 해지 위험 14명",'<span class="ch" data-tap="방어 성공 9건을 확인했어요">방어 9</span>')+
 '<div class="tb"><span class="on">위험 14</span><span>진행 5</span><span>성공 9</span></div>'+
 '<div class="cu"><span class="av">박</span><p>박○○ · 5개월차<small>오메가3 + 비타민 · 월 ₩54,400</small></p><div class="rk"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="none" stroke="#33263F" stroke-width="4"/><circle cx="18" cy="18" r="15" fill="none" stroke="#FF7A59" stroke-width="4" stroke-linecap="round" stroke-dasharray="77.3 94.2" transform="rotate(-90 18 18)"/></svg><b class="num">82</b></div></div>'+
 '<div class="sg"><span>배송 3회 연속 건너뜀</span><span>카드 결제 실패 1회</span><span>"가격이 부담돼요" 문의</span></div>'+
 '<div class="of"><h5>혜택 선택 <small>방어 확률 61%</small></h5>'+of.map(function(o){return '<div class="'+(o[2]?'on':'')+'" data-tap="'+o[0]+' 혜택을 선택했어요"><i></i><p>'+o[0]+'</p><small>'+o[1]+'</small></div>'}).join('')+'</div>'+
 '<div class="pv"><small>알림톡 미리보기</small><div class="bb"><b>[건강한하루]</b> 박○○님, 5개월째 함께해 주셔서 감사해요.<br>다음 2회 배송을 <b>10% 할인</b>해 드릴게요. 부담 없이 쉬어가도 좋아요.<span class="bn">혜택 받기</span></div></div>'},
foot:function(){return FT(["문구 수정","문구를 수정할게요"],["혜택 메시지 발송","박○○님께 혜택 메시지를 보냈어요"])}};

/* 07 구독 수량 기준 발주 */
LX["구독 수량 기준 발주"]={cls:"s-e07",time:"8:50",cap:"구독자 수요로 계산한 4주 발주 수량",
body:function(){
 var b=[[420,380],[445,380],[472,380],[498,380]],mx=560;
 var bars=b.map(function(v,i){var x=14+i*76,h1=v[0]/mx*100;return '<rect x="'+x+'" y="'+(110-h1)+'" width="40" height="'+h1+'" rx="5" fill="'+(i==0?'#0E9F8E':'#9ED8D0')+'"/><text x="'+(x+20)+'" y="'+(104-h1)+'" text-anchor="middle" font-size="11" font-weight="700" fill="#10201E" class="num">'+v[0]+'</text><text x="'+(x+20)+'" y="126" text-anchor="middle" font-size="10" fill="#7A8886">'+(i+1)+'주차</text>'}).join('');
 var sk=[["오메가3 rTG","312","190","+260"],["멀티비타민","268","340","+0"],["유산균 프리미엄","176","85","+150"],["콜라겐 스틱","98","120","+60"]];
 return H("자동 발주","구독 3,120명 · 10/13 ~ 11/09 수요",'<span class="ch" data-tap="예측 기준을 확인했어요">AI 예측</span>')+
 '<div class="cd"><div class="t"><b>주간 출고 예측 (개)</b><span><s></s>안전재고 380</span></div><svg viewBox="0 0 330 134" preserveAspectRatio="none" class="gr"><path d="M0 40H330M0 80H330" stroke="#E4EDEB"/>'+bars+'<path d="M0 '+(110-380/mx*100)+'H330" stroke="#F0634E" stroke-dasharray="4 4"/>'+
 '<g transform="translate(14 0)"><path d="M0 0" /></g></svg><p class="no">3주차부터 <b>신규 구독 +6%</b> 반영 · 해지 예상 -2.1%</p></div>'+
 '<div class="tbl"><div class="th2"><span>상품</span><span>구독</span><span>재고</span><span>발주</span></div>'+sk.map(function(s){var z=s[3]=="+0";return '<div class="tr2"><p>'+s[0]+'<small>납기 10/18</small></p><span class="num">'+s[1]+'</span><span class="num '+(s[2]<200?'lo':'')+'">'+s[2]+'</span><span class="stp"><i data-tap="수량을 줄였어요">−</i><b class="num '+(z?'z':'')+'">'+(z?'0':s[3].slice(1))+'</b><i data-tap="수량을 늘렸어요">＋</i></span></div>'}).join('')+'</div>'+
 '<div class="tot"><div><small>발주 합계 470개</small><b class="num">₩7,250,000</b></div><span>제조사 4곳 · 입고 10/18</span></div>'},
foot:function(){return FT(["엑셀","발주 내역을 엑셀로 저장했어요"],["발주서 4건 전송","발주서 4건을 전송했어요"])}};

/* 08 상담 기록 요약 */
LX["상담 기록 요약"]={cls:"s-e08",time:"10:19",cap:"통화 녹취를 3줄 요약과 할 일로",
body:function(){
 var wv="",hs=[4,9,6,14,8,17,11,6,13,19,9,5,12,16,7,10,18,12,6,9,15,8,5,11,14,7,4,9,13,6,8,12,17,9,5,10,14,6,4,8];
 wv=hs.map(function(h,i){return '<i class="'+(i>=13&&i<=19?'hl':i<9?'pl':'')+'" style="height:calc('+h+'*var(--u))"></i>'}).join('');
 return H("상담 요약","통화 04:32 · 10:12 · 최○○ 고객",'<span class="ch" data-tap="상담 이력을 열었어요">이력 6</span>')+
 '<div class="au"><span class="pb" data-tap="재생을 시작했어요">▶</span><div class="wv">'+wv+'</div><small class="num">01:08 / 04:32</small></div>'+
 '<div class="sm"><div class="lb"><b>✦ AI 3줄 요약</b><span>자동 생성</span></div><ol><li><b>문의</b> 유산균 복용 후 속이 더부룩하다는 불편 호소</li><li><b>안내</b> 공복 복용 중단, 식후 30분 복용으로 변경 권장</li><li><b>결과</b> 1주 더 복용 후 경과 확인, 불만 시 환불 안내</li></ol></div>'+
 '<div class="qt"><small class="num">01:08 · 고객</small>“먹고 나면 <mark>속이 좀 더부룩</mark>해서요… 계속 먹어도 되나 싶어서 전화드렸어요.”</div>'+
 '<div class="sn"><small>고객 감정</small><div class="mt"><i></i><em style="left:68%"></em></div><div class="ax"><span>불만</span><span>보통</span><span>만족</span></div></div>'+
 '<div class="td"><h5>후속 조치 <small>2 / 3</small></h5><div class="ck dn"><i>✓</i><p>복용법 안내문 문자 발송</p></div><div class="ck dn"><i>✓</i><p>상담 내용 CRM 기록</p></div><div class="ck" data-tap="일정을 추가했어요"><i></i><p>10/18 경과 확인 전화 <small>담당 이○○</small></p></div></div>'},
foot:function(){return FT(["원문 보기","통화 원문을 열었어요"],["CRM에 저장","상담 요약을 CRM에 저장했어요"])}};

/* 09 촬영 스케줄·장비 배정 */
LX["촬영 스케줄·장비 배정"]={cls:"s-e09",time:"7:05",cap:"촬영일 콜시트와 장비·인원 배정",
body:function(){
 var ev=[["06:30","스태프 집합","주차장 B","김○○ 외 8","dn"],["08:00","장비 셋업 · 리허설","스튜디오 B","A캠 · 조명","dn"],["10:30","씬 1~4 촬영","메인 세트","돌리 트랙","nw"],["14:00","점심 · 로케 이동","성수 옥상","차량 2대",""],["16:30","씬 5~7 · 드론","성수 옥상","드론 · 짐벌",""]];
 var eq=[["A캠 FX6","김○○","ok"],["B캠 A7S3","이○○","ok"],["짐벌 RS3","미배정","bad"],["LED 조명","박○○","ok"]];
 return H("촬영 일정","10월 13일 (월) · 브랜드 필름 3편",'<span class="ch" data-tap="콜시트를 공유했어요">콜시트</span>')+
 '<div class="ph"><img src="lx/img/film-set.jpg" alt=""><span class="tg">D-2</span><div class="cap"><b>스튜디오 B + 성수 옥상</b><span>스태프 11명 · 장비 14종</span></div></div>'+
 '<div class="cl">'+ev.map(function(e){return '<div class="ev '+e[4]+'"><time class="num">'+e[0]+'</time><i></i><p>'+e[1]+'<small>'+e[2]+'</small></p><span>'+e[3]+'</span></div>'}).join('')+'</div>'+
 '<div class="eq"><h5>장비 배정 <small>3 / 4</small></h5><div>'+eq.map(function(q){return '<span class="'+q[2]+'" data-tap="'+q[0]+' 배정을 변경할게요"><b>'+q[0]+'</b>'+q[1]+'</span>'}).join('')+'</div></div>'},
foot:function(){return FT(["충돌 확인","장비 충돌 1건을 확인했어요"],["배정 확정","촬영 배정을 확정했어요"])}};

/* 10 납품 기한 관리 */
LX["납품 기한 관리"]={cls:"s-e10",time:"13:40",cap:"이번 주 납품 마감과 단계별 진행률",
body:function(){
 var dy=[["월",6],["화",7],["수",8],["목",9],["금",10],["토",11,2],["일",12]];
 var dots={8:"#FF4D6A",9:"#FFB020",10:"#FFB020",11:"#FF4D6A",12:"#23C48E"};
 var cs=[["유메 브랜드 필름 본편","한빛식품","D-1","bad",4,"검수 중 · 1차 수정 반영","10/12 18:00"],["제품 소개 숏폼 6종","리본코스메틱","D-3","wt",3,"사운드 믹스 진행","10/14 12:00"],["교육 영상 12강 자막본","새싹아카데미","D-6","ok",2,"컬러 보정 대기","10/17 17:00"],["인터뷰 컷편집 4편","미래건설","D-8","ok",1,"1차 편집 진행","10/19 15:00"]];
 var sg=["편집","컬러","사운드","검수","납품"];
 return '<div class="top">'+H("납품 관리","이번 주 마감 4건 · 지연 위험 1건",'<span class="ch" data-tap="이번 주 일정을 열었어요">10월 ▾</span>')+
  '<div class="wk">'+dy.map(function(d){return '<div class="'+(d[2]?'on':'')+'"><small>'+d[0]+'</small><b class="num">'+d[1]+'</b></div>'}).join('')+'</div></div>'+
 '<div class="ls">'+cs.map(function(c){return '<div class="cd" data-tap="'+c[0]+' 상세를 열었어요"><div class="r1"><p>'+c[0]+'<small>'+c[1]+' · 마감 '+c[6]+'</small></p><b class="dd '+c[3]+' num">'+c[2]+'</b></div>'+
  '<div class="pg">'+sg.map(function(s,i){return '<i class="'+(i<c[4]?'f':i==c[4]?'n':'')+'"></i>'}).join('')+'</div><div class="lb">'+sg.map(function(s,i){return '<span class="'+(i==c[4]-1?'on':'')+'">'+s+'</span>'}).join('')+'</div><small class="st">'+c[5]+'</small></div>'}).join('')+'</div>'},
foot:function(){return FT(["연장 요청","납품 기한 연장을 요청했어요"],["납품 파일 전송","납품 파일을 전송했어요"])}};

/* 11 자막·번역 작업 관리 */
LX["자막·번역 작업 관리"]={cls:"s-e11",time:"21:15",cap:"자막 타임라인 편집기 느낌의 번역 작업",
body:function(){
 function trk(items,cl){return '<div class="tk">'+items.map(function(i){return '<span class="'+cl+(i[3]?' sel':'')+'" style="left:'+i[0]+'%;width:'+i[1]+'%">'+i[2]+'</span>'}).join('')+'</div>'}
 var wv=[];for(var i=0;i<70;i++)wv.push('<i style="height:'+(18+((i*53)%70))+'%"></i>');
 return '<div class="hd"><span class="bk">‹</span><h4>떡볶이 레시피 EP.12<small>자막 3개 언어 · 03:24</small></h4><span class="ch" data-tap="프로젝트 설정을 열었어요">⋯</span></div>'+
 '<div class="pr"><img src="lx/img/cook-video.jpg" alt=""><div class="sb"><b>3분이면 끝나요</b><span>It only takes three minutes</span></div><span class="tc num">00:41:12</span></div>'+
 '<div class="lg"><span class="on">KO <b class="num">100%</b></span><span>EN <b class="num">82%</b></span><span>JA <b class="num">40%</b></span><span class="ad" data-tap="언어를 추가했어요">＋</span></div>'+
 '<div class="tl"><div class="rl num"><span>00:30</span><span>00:40</span><span>00:50</span><span>01:00</span></div><div class="ph2"></div>'+
  '<div class="tk au">'+wv.join('')+'</div>'+
  trk([[2,20,"고추장 두 큰술"],[24,26,"3분이면 끝나요",1],[53,18,"불을 줄여요"],[74,22,"국물이 졸아들면"]],'ko')+
  trk([[2,20,"gochujang"],[24,26,"Only three minutes",1],[53,18,"Lower heat"]],'en')+
  trk([[2,20,"コチュジャン"],[24,26,"3分で完成"]],'ja')+'</div>'+
 '<div class="ed"><div class="eh"><b class="num">#18 · 00:38.4 → 00:41.9</b><span class="wn">초당 17자 · 길어요</span></div><div class="fl"><small>KO</small>이거 3분이면 끝나요</div><div class="fl en"><small>EN</small>It only takes three minutes<span class="cur"></span></div></div>'+
 '<div class="tm"><span><i class="en"></i>EN 김○○ · 검수 중</span><span><i class="ja"></i>JA 이○○ · 번역 중</span><span class="num">마감 10/14</span></div>'+
 '<div class="qc"><span><b class="num">0</b>겹침</span><span><b class="num">2</b>줄 길이</span><span class="w"><b class="num">1</b>오탈자</span><span><b class="num">98%</b>싱크</span></div>'},
foot:function(){return FT(["번역 요청","번역가에게 JA 번역을 요청했어요"],["영문 자막 내보내기","영문 자막 SRT를 내보냈어요"])}};

/* 12 제작비 정산 */
LX["제작비 정산"]={cls:"s-e12",time:"17:36",cap:"프로젝트 예산 대비 집행 정산서",
body:function(){
 var cat=[["인건비","#2F3A4B",41.9,"40.0","37.8"],["장비·렌탈","#E8603C",25.6,"22.0","23.1"],["로케이션","#F2B24A",14.0,"13.0","12.6"],["후반작업","#4C9F8E",12.6,"14.0","11.4"],["기타","#B9B2A6",5.9,"7.0","5.3"]];
 var C=2*Math.PI*15,off=0,ar=cat.map(function(c){var l=c[2]/100*C,s='<circle cx="18" cy="18" r="15" fill="none" stroke="'+c[1]+'" stroke-width="5" stroke-dasharray="'+(l-.6).toFixed(2)+' '+(C-l+.6).toFixed(2)+'" stroke-dashoffset="'+(-off).toFixed(2)+'" transform="rotate(-90 18 18)"/>';off+=l;return s}).join('');
 return H("제작비 정산","브랜드 필름 3편 · 마감 10/15",'<span class="ch" data-tap="프로젝트를 변경할게요">PRJ-0412</span>')+
 '<div class="pp"><div class="dn1"><svg viewBox="0 0 36 36">'+ar+'</svg><div><small>집행률</small><b class="num">94<em>%</em></b></div></div>'+
 '<div class="sm"><div><small>총 예산</small><b class="num">₩ 96,000,000</b></div><div><small>집행 합계</small><b class="num">₩ 90,240,000</b></div><div class="rm"><small>잔액</small><b class="num">₩ 5,760,000</b></div></div></div>'+
 '<div class="ct">'+cat.map(function(c){var bd=parseFloat(c[3]),ac=parseFloat(c[4]),ov=ac>bd;return '<div class="rw" data-tap="'+c[0]+' 내역을 열었어요"><s style="background:'+c[1]+'"></s><p>'+c[0]+'<small class="num">예산 '+c[3]+'M</small></p><div class="br"><i style="width:'+Math.min(100,ac/bd*100)+'%;background:'+(ov?'#E8603C':c[1])+'"></i></div><b class="num'+(ov?' ov':'')+'">'+c[4]+'M</b></div>'}).join('')+'</div>'+
 '<div class="rc"><h5>최근 지출 증빙 <small>영수증 34건</small></h5><div><span>10/10 · 성수 옥상 대관</span><b class="num">−₩2,800,000</b></div><div class="wn"><span>⚠ 장비·렌탈 예산 초과 ₩1.1M</span><b>승인 필요</b></div></div>'},
foot:function(){return FT(["지출 추가","지출 내역을 추가할게요"],["정산서 PDF 발행","정산서 PDF를 발행했어요"])}};
})();
