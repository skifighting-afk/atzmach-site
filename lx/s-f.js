(function(){
"use strict";
var LX=window.LX=window.LX||{};
var P={rc:"M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",ck:"M5 12.5l4.5 4.5L19 7",bell:"M6 16v-5a6 6 0 0112 0v5l1.5 2h-15zM10 20h4",cal:"M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",sr:"M11 4a7 7 0 100 14 7 7 0 000-14zM16 16l5 5",pl:"M12 5v14M5 12h14",cam:"M3 8h4l2-3h6l2 3h4v12H3zM12 10a4 4 0 100 8 4 4 0 000-8z",pin:"M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z",wind:"M3 9h11a3 3 0 10-3-3M3 14h15a3 3 0 11-3 3M3 19h7",eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 100 6 3 3 0 000-6z",sig:"M12 20v.01M8 16a6 6 0 018 0M5 12.5a10 10 0 0114 0",card:"M3 6h18v12H3zM3 10h18M6 15h4",clk:"M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2",warn:"M12 3l10 18H2zM12 10v5M12 18v.01",doc:"M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6",clip:"M20 11l-8 8a5 5 0 01-7-7l9-9a3.5 3.5 0 015 5l-9 9a2 2 0 01-3-3l8-8",pen:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",spk:"M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z",shr:"M12 15V4M8 8l4-4 4 4M5 13v7h14v-7",bk:"M15 5l-7 7 7 7",dn:"M6 9l6 6 6-6",sun:"M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5",qr:"M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2",send:"M3 11l18-8-8 18-2-8z",bus:"M5 4h14v13H5zM5 11h14M8 20v-3M16 20v-3M8 14v.01M16 14v.01",ref:"M20 12a8 8 0 11-2.5-5.8M20 4v5h-5",bat:"M3 8h16v8H3zM21 11v2",lk:"M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7L12 6.3M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7L12 17.7",cal2:"M3 5h18v16H3zM3 10h18M8 2v5M16 2v5M7 14h2M11 14h2M15 14h2",x:"M6 6l12 12M18 6L6 18",dl:"M12 4v11M7 11l5 5 5-5M5 20h14",ed:"M12 20h9M16.5 3.5l4 4L8 20l-5 1 1-5z"};
function I(n){return '<svg class="i" viewBox="0 0 24 24"><path d="'+P[n]+'"/></svg>'}
function BH(n,name,r){return '<div class="bh"><img src="lx/img/ic/'+n+'.jpg" alt=""><b>'+name+'</b>'+(r?'<span class="r">'+r+'</span>':'')+'</div>'}
function H(t,s,r){return '<div class="hd"><h4>'+t+'<small>'+s+'</small></h4>'+(r||'')+'</div>'}

/* 01 헌금 — 은혜장부 */
LX["헌금·기부금 관리"]={cls:"s-f01",time:"12:20",cap:"헌금 기록과 기부금영수증 발급",
body:function(){return ''+
BH(73,'은혜장부','<span class="rc" data-tap="영수증 보관함을 열었어요">'+I('rc')+'</span>')+
H('헌금 관리','2026.10 · 주일예배 헌금 집계')+
'<div class="sum"><span class="lb">10월 헌금 합계</span><b class="num">₩18,420,000</b><em class="num">지난달 대비 +6.4%</em>'+
 [["십일조",52,"9,578,400"],["감사",24,"4,420,800"],["주일",14,"2,578,800"],["선교",10,"1,842,000"]].map(function(v){return '<div class="cr"><span>'+v[0]+'</span><i><u style="width:'+v[1]*1.8+'%"></u></i><b class="num">'+v[2]+'</b></div>'}).join('')+'</div>'+
'<div class="tabs"><span class="on" data-tap="헌금 기록 탭">헌금 기록</span><span data-tap="기부금영수증 탭">기부금영수증</span></div>'+
'<div class="li"><em class="tg">십일조</em><p>김○○ 성도<small>계좌이체 · 10.11 11:40</small></p><b class="num">300,000</b></div>'+
'<div class="li"><em class="tg">감사</em><p>이○○ 집사<small>현금봉투 · 10.11 11:52</small></p><b class="num">100,000</b></div>'+
'<div class="li"><em class="tg">선교</em><p>박○○ 권사<small>카드 · 10.11 12:03</small></p><b class="num">50,000</b></div>'+
'<div class="li"><em class="tg">십일조</em><p>정○○ 장로<small>계좌이체 · 10.11 12:10</small></p><b class="num">500,000</b></div>'+
'<div class="rcp"><div class="rh"><b>기부금 영수증</b><small class="num">제 2026-0187호</small></div>'+
 '<dl><dt>기부자</dt><dd>최○○ (주민번호 앞 6자리 ******)</dd><dt>기간</dt><dd class="num">2026.01.01 ~ 2026.10.11</dd><dt>합계</dt><dd class="num big">₩4,860,000</dd></dl>'+
 '<span class="seal">교회<br>직인</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="헌금 봉투를 스캔했어요">봉투 스캔</span><span class="b1" data-tap="기부금영수증 124건을 발급했어요">기부금영수증 일괄 발급</span></div>'}};

/* 02 출석 — 함께예배 */
(function(){
var N=["김○○","이○○","박○○","최○○","정○○","강○○","조○○","윤○○","장○○","임○○","한○○","오○○","서○○","신○○","권○○","황○○","안○○","송○○","류○○","홍○○"];
var S=[1,1,1,0,1,1,2,1,1,0,1,1,1,0,1,2,1,1,0,1];
LX["교인 출석 체크"]={cls:"s-f02",time:"11:05",cap:"주일 2부 예배 출석 체크",
body:function(){return ''+
'<div class="ph"><img src="lx/img/church.jpg" alt=""><div class="ov">'+BH(74,'함께예배','<span class="tg">2부 예배 진행 중</span>')+
 '<div class="ttl"><div><h4>교인 출석</h4><small>10월 11일 주일 · 11:00 대예배</small></div>'+
 '<div class="rg"><svg viewBox="0 28 64 34"><path d="M6 58A26 26 0 0158 58" stroke="rgba(255,255,255,.22)" stroke-width="3" fill="none"/><path d="M6 58A26 26 0 0158 58" stroke="#E7B75A" stroke-width="3" fill="none" stroke-dasharray="62 82"/></svg><b class="num">76<small>%</small></b></div></div></div></div>'+
'<div class="cn"><span><b class="num">142</b>출석</span><span><b class="num">9</b>지각</span><span><b class="num">36</b>미확인</span><span><b class="num">187</b>재적</span></div>'+
'<div class="fl"><span class="on" data-tap="전체 보기">전체</span><span data-tap="청년부만 보기">청년부</span><span data-tap="장년부만 보기">장년부</span><span data-tap="새가족만 보기">새가족</span></div>'+
'<div class="gd">'+N.map(function(n,i){return '<div class="m s'+S[i]+'" data-tap="'+n+' 출석을 처리했어요"><span class="av">'+n[0]+'</span><b>'+n+'</b><i>'+(S[i]==1?I('ck'):S[i]==2?'지각':'')+'</i></div>'}).join('')+'</div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="출석 142명을 마감했어요">출석 마감하기</span></div>'}};
})();

/* 03 문자 — 교회소식 */
LX["교회 소식 문자 발송"]={cls:"s-f03",time:"17:48",cap:"교우 그룹에게 주보 소식 문자",
body:function(){return ''+
BH(75,'교회소식','<span class="tp" data-tap="임시저장했어요">임시저장</span>')+
H('소식 문자','새 메시지 작성')+
'<div class="to"><span class="lb">받는 그룹</span><div class="ch"><b data-tap="청년부 그룹 해제">청년부 48</b><b data-tap="구역장 그룹 해제">구역장 22</b><b data-tap="새가족 그룹 해제">새가족 7</b><u data-tap="그룹을 추가해요">'+I('pl')+'추가</u></div></div>'+
'<div class="tpl"><span class="on" data-tap="주보 안내 서식">주보 안내</span><span data-tap="수련회 서식">수련회</span><span data-tap="부고 서식">부고·경조</span><span data-tap="심방 서식">심방</span></div>'+
'<div class="phn"><small>소망교회 · 오늘 17:48</small><div class="bub">[소망교회 주보]<br>10/18(주) 청년부 가을 수련회<br>· 일시 10/24(토) 09:00<br>· 장소 교회 앞 주차장 집합<br>· 회비 3만원 (신청 10/17까지)<br>축복합니다.</div><div class="bub me">참석합니다!</div></div>'+
'<div class="mt"><span class="num">212 / 2,000 byte</span><span>LMS · 77명 · 건당 28원</span></div>'+
'<div class="sc"><span>'+I('cal')+'예약 발송</span><b class="num">10/12 (월) 오전 8:00</b><u class="sw" data-sw></u></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="77명에게 문자를 예약했어요">'+I('send')+'77명에게 문자 보내기</span></div>'}};

/* 04 소모임·봉사 — 섬김캘린더 */
LX["소모임·봉사 일정 관리"]={cls:"s-f04",time:"09:12",cap:"주간 봉사 배정과 소모임 일정",
body:function(){var d=[["월",12],["화",13],["수",14],["목",15],["금",16],["토",17],["주",18]];
function dots(a,b){var s='';for(var i=0;i<b;i++)s+='<i class="'+(i<a?'f':'')+'"></i>';return '<span class="dots">'+s+'</span>'}
return ''+
BH(76,'섬김캘린더','<span class="av" data-tap="새 일정을 추가해요">'+I('pl')+'</span>')+
H('봉사·소모임','10월 3주차 · 봉사 배정 현황')+
'<div class="wk">'+d.map(function(x,i){return '<span class="'+(i==6?'on':'')+(i==2||i==6?' dt':'')+'" data-tap="10/'+x[1]+' 일정 보기">'+x[0]+'<b class="num">'+x[1]+'</b></span>'}).join('')+'</div>'+
'<div class="sec">10월 18일 (주일) <small class="num">배정 9/12명</small>'+dots(9,12)+'</div>'+
'<div class="tl">'+
 '<div class="ev"><time class="num">08:30</time><div class="cd c1"><h5>주차 안내<em class="num">3/3</em></h5><div class="as"><i>김</i><i>이</i><i>박</i></div><small>정문 · 후문 · 지하주차장</small></div></div>'+
 '<div class="ev"><time class="num">09:30</time><div class="cd c2"><h5>찬양팀 리허설<em class="num">5/5</em></h5><div class="as"><i>정</i><i>최</i><i>강</i><i>윤</i><i>한</i></div><small>본당 · 장비 점검 포함</small></div></div>'+
 '<div class="ev"><time class="num">11:30</time><div class="cd c3 lack"><h5>점심 배식 봉사<em class="num">1/4</em></h5><div class="as"><i>오</i><u>+</u><u>+</u><u>+</u></div><small>3명 부족 · 구역 순서 5구역</small><span class="bt" data-tap="5구역에 봉사 요청을 보냈어요">요청 보내기</span></div></div>'+
 '<div class="ev"><time class="num">14:00</time><div class="cd c4"><h5>소모임 · 청년 성경공부<em class="num">8명</em></h5><small>교육관 203호 · 요한복음 3장</small></div></div>'+
'</div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="봉사 배정을 확정하고 알림을 보냈어요">배정 확정 · 알림 보내기</span></div>'}};

/* 05 버스 — 버스플로 */
LX["통근·전세버스 배차"]={cls:"s-f05",time:"06:32",cap:"오늘 노선과 차량별 상태, 배차 확정",
body:function(){
function stops(n,k){var s='';for(var i=0;i<n;i++)s+='<i class="'+(i<k?'p':i==k?'c':'')+'"></i>';return '<span class="stp">'+s+'</span>'}
return ''+
BH(77,'버스플로','<span class="lv">'+I('sig')+'실시간</span>')+
'<div class="map"><svg viewBox="0 0 335 230" preserveAspectRatio="xMidYMid slice"><rect width="335" height="230" fill="#E9EEF4"/><path d="M-10 180C60 160 110 210 190 195S300 150 350 175V240H-10z" fill="#CBE0F3"/>'+
 '<g stroke="#fff" stroke-width="9" fill="none" stroke-linecap="square"><path d="M0 60H335M40 0V230M160 0V230M270 0V230M0 140H335"/></g>'+
 '<path d="M40 200V140H160V60H270" stroke="#2563EB" stroke-width="6" fill="none" stroke-linejoin="miter"/><path d="M270 200V140H160" stroke="#F97316" stroke-width="6" fill="none"/>'+
 '<g fill="#fff" stroke="#1E3A8A" stroke-width="2.5"><rect x="35" y="195" width="10" height="10"/><rect x="35" y="135" width="10" height="10"/><rect x="155" y="135" width="10" height="10"/><rect x="155" y="55" width="10" height="10"/><rect x="265" y="195" width="10" height="10"/><rect x="265" y="135" width="10" height="10"/></g>'+
 '<rect x="250" y="38" width="40" height="22" fill="#0B1F4D"/><text x="270" y="54" fill="#fff" font-size="12" font-weight="800" text-anchor="middle">본사</text>'+
 '<g><rect x="87" y="128" width="26" height="24" fill="#2563EB"/><text x="100" y="145" fill="#fff" font-size="13" font-weight="800" text-anchor="middle">1</text><rect x="257" y="164" width="26" height="24" fill="#F97316"/><text x="270" y="181" fill="#fff" font-size="13" font-weight="800" text-anchor="middle">2</text></g></svg>'+
 '<div class="top"><h4>오늘 배차<small>10월 11일 (일) 출근편 · 2개 노선</small></h4></div></div>'+
'<div class="sh">'+
 '<div class="v"><span class="rt">1</span><p><b>청주 A노선</b><small class="num">서울 34바 5021 · 기사 박○○</small>'+stops(6,3)+'</p><span class="bd g">운행 중</span></div>'+
 '<div class="v o"><span class="rt">2</span><p><b>오송 B노선</b><small class="num">경기 71사 1180 · 기사 이○○</small>'+stops(5,0)+'</p><span class="bd o">출발 대기</span></div>'+
 '<div class="v nt"><span class="rt">3</span><p><b>예비 3호차</b><small>정비소 입고 · 배차 불가</small></p><span class="bd r">점검</span></div>'+
 '<div class="sm"><span><b class="num">64</b>탑승 예정</span><span><b class="num">06:50</b>첫 출발</span><span><b class="num">2대</b>배차</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="2대 배차를 확정했어요">배차 확정 · 기사님께 전송</span></div>'}};

/* 06 무인정산 — 파킹패스 */
LX["무인 주차 정산"]={cls:"s-f06",time:"19:26",cap:"차량번호 인식 후 요금 자동 정산",
body:function(){return ''+
'<div class="ph"><img src="lx/img/parking-gate.jpg" alt=""><div class="bx"><i></i><i></i><i></i><i></i><span>인식 완료 99.2%</span></div>'+BH(78,'파킹패스','<span class="st">2번 출구 · 정상</span>')+'</div>'+
'<div class="pl"><small>인식된 차량번호</small><div class="plate"><em>KR</em><b class="num">34두 5721</b></div></div>'+
'<div class="rcp"><div class="r"><span>입차</span><b class="num">10.11 15:42</b></div><div class="r"><span>출차</span><b class="num">10.11 19:26</b></div><div class="r"><span>주차 시간</span><b class="num">3시간 44분</b></div><div class="r"><span>기본 30분</span><b class="num">1,000</b></div><div class="r"><span>추가 20분 × 10</span><b class="num">+ 5,000</b></div><div class="r d"><span>제휴 할인 (상가 2시간)</span><b class="num">− 3,000</b></div>'+
 '<div class="tt"><span>결제 금액</span><b class="num">₩3,000</b></div></div>'+
'<div class="pm"><span class="on" data-tap="카드 결제 선택">'+I('card')+'카드</span><span data-tap="간편결제 선택">간편결제</span><span data-tap="QR 결제 선택">'+I('qr')+'QR</span></div>'+
'<div class="nt">'+I('rc')+'<p>영수증은 문자로 발송돼요<small>010-****-4821 · 출차 제한시간 15분</small></p></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="3,000원 결제 후 차단기를 열었어요">3,000원 결제하고 출차</span></div>'}};

/* 07 정기권 — 시즌패스 */
LX["정기권 관리"]={cls:"s-f07",time:"08:50",cap:"월 정기권 카드와 만료 관리",
body:function(){
var q='';for(var y=0;y<11;y++)for(var x=0;x<11;x++){var f=(x<3&&y<3)||(x>7&&y<3)||(x<3&&y>7);if(f||((x*7+y*13+x*y)%5<2))q+='<rect x="'+x*4+'" y="'+y*4+'" width="3.4" height="3.4"/>'}
return ''+
BH(79,'시즌패스','<span class="pl" data-tap="신규 등록 화면">'+I('pl')+'</span>')+
H('내 정기권','월 정기 주차 · 활성 238대')+
'<div class="srch">'+I('sr')+'차량번호 · 입주사 검색<u class="num">238</u></div>'+
'<div class="cards">'+
 '<div class="cd c2"><div class="r1"><b>B2 고정석</b><span>정기권</span></div><p class="num">56가 7742</p><small>김○○ · 한빛상사 · 만료 11.30</small></div>'+
 '<div class="cd c1"><div class="r1"><b>24시간 정기권</b><span>사용 중</span></div><p class="num">34두 5721</p><small>이○○ · 대성빌딩 3층</small><div class="bt"><svg viewBox="0 0 44 44" fill="#0B3B3A">'+q+'</svg><div><em>남은 기간</em><b class="num">19일</b><i><u style="width:63%"></u></i><small class="num">10.31 만료 · 연장 ₩150,000</small></div></div></div>'+
'</div>'+
'<div class="alert">'+I('bell')+'<p><b>7일 내 만료 6건</b><small>자동 문자 안내 발송 예정</small></p><u data-tap="만료 6건에 안내 문자를 보냈어요">문자 발송</u></div>'+
'<div class="rw"><div class="av">박</div><p><b class="num">12나 3098</b><small>박○○ · 주간 · 만료 10.17</small></p><span class="bd num">D-6</span></div>'+
'<div class="rw"><div class="av">최</div><p><b class="num">78머 2210</b><small>최○○ · 야간 · 만료 10.18</small></p><span class="bd num">D-7</span></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="정기권 연장 결제 링크를 보냈어요">정기권 연장 결제 보내기</span></div>'}};

/* 08 혼잡 — 파킹뷰 */
LX["주차 혼잡도 대시보드"]={cls:"s-f08",time:"14:05",cap:"층별 점유율과 시간대 혼잡도",
body:function(){
var fl=[["R",34,41,120,"ok"],["1F",96,48,50,"hi"],["B1",88,176,200,"hi"],["B2",71,142,200,"mid"],["B3",42,84,200,"ok"]];
var bars=[2,3,5,7,9,10,10,9,7,6,6,8,5];
function cells(p){var s='';for(var i=0;i<20;i++)s+='<u class="'+(i<Math.round(p/5)?'f':'')+'"></u>';return s}
function col(n){var s='';for(var i=0;i<10;i++)s+='<u class="'+(i<n?'f':'')+'"></u>';return s}
return ''+
BH(80,'파킹뷰','<span class="lv">LIVE</span>')+
H('주차 혼잡도','대성타워 · 14:05 기준 실시간')+
'<div class="top"><div class="rg"><svg viewBox="0 0 100 58"><path d="M10 52A40 40 0 0190 52" stroke="#1B2A22" stroke-width="9" fill="none"/><path d="M10 52A40 40 0 0190 52" stroke="#22C55E" stroke-width="9" fill="none" stroke-dasharray="90 126"/><path d="M10 52A40 40 0 0190 52" stroke="#0B0F0D" stroke-width="10" fill="none" stroke-dasharray="1.5 6.5"/></svg><b class="num">72<small>%</small></b></div>'+
 '<div class="tx"><span>전체 점유율</span><b class="num">491<small>/670</small></b><em>혼잡 · 잔여 179면</em></div></div>'+
'<div class="fls">'+fl.map(function(f){return '<div class="f '+f[4]+'" data-tap="'+f[0]+' 상세 보기"><b class="num">'+f[0]+'</b><div class="br">'+cells(f[1])+'</div><span class="num">'+f[1]+'%</span><small class="num">'+f[2]+'/'+f[3]+'</small></div>'}).join('')+'</div>'+
'<div class="hr"><h5>시간대별 입차 <small>오늘</small></h5><div class="bs">'+bars.map(function(v,i){return '<div class="'+(i==6?'now':'')+'">'+col(v)+'</div>'}).join('')+'</div><div class="ax num"><span>06</span><span>12</span><span>18</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="지하1층 입구에 만차 안내를 켰어요">만차 안내 전광판 켜기</span></div>'}};

/* 09 발렛 — 발렛원 */
LX["발렛 기사 배정"]={cls:"s-f09",time:"19:40",cap:"입고·출고 요청에 기사 배정",
body:function(){return ''+
'<div class="ph"><img src="lx/img/valet.jpg" alt=""><div class="ov">'+BH(81,'발렛원','')+'<div class="tt"><h4>발렛 배정</h4><small>그랜드 호텔 정문 · 저녁 피크</small></div><div class="kp"><span><b class="num">23</b>주차 중</span><span><b class="num">4</b>출고 요청</span><span><b class="num">3/5</b>기사 근무</span></div></div></div>'+
'<div class="sec">출고 요청 <small>대기 4건</small></div>'+
'<div class="tk w"><div class="n num">A-218</div><p><b class="num">12가 3456 · 검정 세단</b><small>객실 1204 · 요청 19:38 · 대기 2분</small></p><span class="as" data-tap="최○○ 기사에게 배정했어요">최○○'+I('dn')+'</span></div>'+
'<div class="tk w"><div class="n num">A-225</div><p><b class="num">45다 8120 · 흰색 SUV</b><small>객실 0907 · 요청 19:39 · 대기 1분</small></p><span class="as un" data-tap="기사를 선택해요">미배정'+I('dn')+'</span></div>'+
'<div class="sec">진행 중</div>'+
'<div class="tk"><div class="n num">A-209</div><p><b class="num">78머 5521</b><small>주차장 B1 → 정문 · 예상 3분</small></p><div class="pg"><i style="width:70%"></i></div></div>'+
'<div class="tk"><div class="n num">A-203</div><p><b class="num">33허 1207</b><small>정문 → 주차장 B2 · 입고 중</small></p><div class="pg"><i style="width:35%"></i></div></div>'+
'<div class="dr"><div class="d on"><span>최</span><b>최○○</b><small>1건</small></div><div class="d"><span>김</span><b>김○○</b><small>2건</small></div><div class="d"><span>박</span><b>박○○</b><small>대기</small></div><div class="d off"><span>이</span><b>이○○</b><small>휴식</small></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="A-225를 박○○ 기사에게 배정했어요">자동 배정 · 호출 보내기</span></div>'}};

/* 10 폐기물 경로 — 에코루트 */
LX["폐기물 수거 경로 관리"]={cls:"s-f10",time:"07:15",cap:"오늘 수거 경로와 정차 순서",
body:function(){return ''+
'<div class="map"><svg viewBox="0 -50 335 280" preserveAspectRatio="xMidYMid slice"><rect y="-50" width="335" height="280" fill="#DDF3D2"/><rect x="20" y="20" width="60" height="50" rx="16" fill="#BDE8A8"/><rect x="230" y="140" width="80" height="70" rx="20" fill="#BDE8A8"/><path d="M-10 110C80 80 150 150 240 110S320 80 350 90" stroke="#9ED8F5" stroke-width="16" fill="none"/>'+
 '<g stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round"><path d="M0 55H335M0 175H335M70 0V230M180 0V230M280 0V230"/></g>'+
 '<path d="M30 175H70V55H180V175H280V55" stroke="#14532D" stroke-width="5" fill="none" stroke-dasharray="1 9" stroke-linecap="round" stroke-linejoin="round"/>'+
 [[30,175,1],[70,115,2],[70,55,3],[180,55,4],[180,115,5],[180,175,6],[280,175,7],[280,55,8]].map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="12" fill="'+(p[2]<4?'#16A34A':'#fff')+'" stroke="#14532D" stroke-width="3"/><text x="'+p[0]+'" y="'+(p[1]+4.5)+'" font-size="12" font-weight="800" text-anchor="middle" fill="'+(p[2]<4?'#fff':'#14532D')+'">'+p[2]+'</text>'}).join('')+
 '<rect x="276" y="188" width="52" height="24" rx="12" fill="#14532D"/><text x="302" y="204" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">처리장</text></svg>'+
 '<div class="top">'+BH(82,'에코루트','<span class="eta"><b class="num">3h 10m</b>예상</span>')+'<h4>수거 경로<small>2호 트럭 · 8개 정차 · 42.6km</small></h4></div></div>'+
'<div class="tr"><div class="th"><img src="lx/img/waste-truck.jpg" alt=""></div><p><b>2호 트럭 · 서울 89사 4410</b><small>기사 정○○ · 적재 1.8 / 5.0 t</small></p><span class="ld"><i style="width:36%"></i></span></div>'+
'<div class="rt">'+
'<div class="st dn"><span class="n">'+I('ck')+'</span><p><b>한결식당 외 3곳</b><small>일반폐기물 · 07:05 수거 완료</small></p><em class="num">240kg</em></div>'+
'<div class="st dn"><span class="n">'+I('ck')+'</span><p><b>미래의원</b><small>의료폐기물 · 07:28 수거 완료</small></p><em class="num">85kg</em></div>'+
'<div class="st cur"><span class="n">3</span><p><b>삼정마트 후문</b><small>음식물 · 도착 2분 전</small></p><em class="num">~420kg</em></div>'+
'<div class="st"><span class="n">4</span><p><b>대성타워 지하 2층</b><small>재활용 · 예정 08:10</small></p><em class="num">~300kg</em></div>'+
'<div class="st"><span class="n">5</span><p><b>새봄아파트 분리수거장</b><small>재활용 · 예정 08:45</small></p><em class="num">~650kg</em></div>'+
'<div class="st"><span class="n">6</span><p><b>동원시장 후문</b><small>일반폐기물 · 예정 09:20</small></p><em class="num">~380kg</em></div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="경로를 재탐색했어요">'+I('ref')+'</span><span class="b1" data-tap="기사님께 경로를 전송했어요">경로 확정 · 기사 전송</span></div>'}};

/* 11 배출신고 — 배출신고24 */
LX["배출 신고 서류 관리"]={cls:"s-f11",time:"10:30",cap:"사업장 폐기물 배출 신고서 작성·제출",
body:function(){return ''+
BH(83,'배출신고24','<span class="st" data-tap="제출 이력을 열었어요">제출 이력</span>')+
H('배출 신고서','사업장폐기물 · 2026년 3분기')+
'<div class="stp"><div class="s dn"><i>'+I('ck')+'</i>작성</div><div class="s dn"><i>'+I('ck')+'</i>검토</div><div class="s on"><i class="num">3</i>서명</div><div class="s"><i class="num">4</i>제출</div></div>'+
'<div class="doc"><div class="dh"><b>사업장폐기물 배출자 신고서</b><small class="num">서식 제12호 · 접수번호 2026-Q3-0412</small></div>'+
 '<div class="gr"><div><span>사업장명</span><b>(주)한결푸드</b></div><div><span>사업자번호</span><b class="num">123-45-*****</b></div></div>'+
 '<table><tr><th>폐기물 종류</th><th>코드</th><th>배출량</th></tr><tr><td>폐합성수지류</td><td class="num">51-02</td><td class="num">12.4 t</td></tr><tr><td>폐유(폐식용유)</td><td class="num">51-07</td><td class="num">3.1 t</td></tr><tr><td>음식물류</td><td class="num">41-01</td><td class="num">28.9 t</td></tr><tr><td>폐목재류</td><td class="num">51-11</td><td class="num">1.6 t</td></tr></table>'+
 '<div class="sg"><div><span>담당자 서명</span><svg viewBox="0 0 80 30"><path d="M4 22C12 4 18 4 20 16S28 26 34 10 46 22 52 14s10 6 24-8" stroke="#1F3F8F" stroke-width="2" fill="none"/></svg></div><div class="pend"><span>대표 서명</span><u>서명 대기</u></div></div></div>'+
'<div class="at">'+I('clip')+'<p>위탁 계약서.pdf · 처리 확인서.pdf<small>첨부 2건 · 1.4MB</small></p><u data-tap="첨부 파일을 추가해요">추가</u></div>'+
'<div class="dl">제출 기한 <b class="num">10.15 (목)</b> · D-4</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="대표님께 서명을 요청했어요">서명 요청</span><span class="b1" data-tap="신고서를 제출했어요">신고서 제출</span></div>'}};

/* 12 수거 정산 — 수거정산 */
LX["수거 업체 정산"]={cls:"s-f12",time:"16:20",cap:"수거 업체별 월 정산서",
body:function(){return ''+
BH(84,'수거정산','<span class="mn">9월 '+I('dn')+'</span>')+
H('수거 업체 정산','2026년 9월분 · 마감 10.10')+
'<div class="tot"><span>정산 대상 금액</span><b class="num">₩12,846,000</b><div class="sp"><span>수거량 <b class="num">48.7t</b></span><span>건수 <b class="num">162</b></span><span>업체 <b class="num">5곳</b></span></div></div>'+
'<div class="chart"><h5>업체별 정산액</h5>'+
 [["그린에코",42,"5,394"],["클린로드",27,"3,468"],["새롬환경",18,"2,312"],["대한리사이클",9,"1,156"],["기타",4,"516"]].map(function(v){return '<div class="b"><span>'+v[0]+'</span><i><u style="width:'+v[1]*2+'%"></u></i><em class="num">'+v[2]+'</em></div>'}).join('')+'<small class="un">단위 천원</small></div>'+
'<div class="sec">정산서 <small>확인 3 · 대기 2</small></div>'+
'<div class="ln"><span class="bd ok">확정</span><p><b>그린에코㈜</b><small class="num">19.2t × ₩260,000 + 운반비</small></p><b class="num">5,394,000</b></div>'+
'<div class="ln"><span class="bd ok">확정</span><p><b>클린로드</b><small class="num">13.5t × ₩240,000</small></p><b class="num">3,468,000</b></div>'+
'<div class="ln"><span class="bd wt">대기</span><p><b>새롬환경</b><small>계량표 불일치 1건 확인 필요</small></p><b class="num">2,312,000</b></div>'+
'<div class="ln"><span class="bd wt">대기</span><p><b>대한리사이클</b><small>세금계산서 미수신</small></p><b class="num">1,156,000</b></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="정산서를 PDF로 저장했어요">PDF</span><span class="b1" data-tap="3개 업체 정산금을 이체 요청했어요">확정 3곳 정산금 지급</span></div>'}};

/* 13 환경점검 — 그린체크 */
LX["환경 점검 체크리스트"]={cls:"s-f13",time:"13:40",cap:"현장 환경 점검 항목 체크",
body:function(){
function it(t,s,st,ph){return '<div class="it '+st+'"><span class="ck">'+(st=='ok'?I('ck'):st=='ng'?I('warn'):'')+'</span><p><b>'+t+'</b><small>'+s+'</small></p>'+(ph?'<span class="cam">'+I('cam')+ph+'</span>':'<span class="seg"><u data-tap="적합 처리">적합</u><u data-tap="부적합 처리">부적합</u></span>')+'</div>'}
var seg='';for(var i=0;i<13;i++)seg+='<i class="'+(i<8?(i==5?'ng':'f'):'')+'"></i>';
return ''+
BH(85,'그린체크','<span class="dt num">10.11</span>')+
H('환경 점검','제2공장 · 월간 정기 점검')+
'<div class="pr"><div class="bar">'+seg+'</div><p><b class="num">8 / 13</b> 항목 완료 · 부적합 <b class="red num">1</b></p></div>'+
'<div class="grp">대기·악취</div>'+it('집진기 차압 정상 범위','0.8 kPa · 기준 1.5 이하','ok','1')+it('악취 저감 설비 가동','활성탄 교체주기 확인','ok','')+
'<div class="grp">폐수·유류</div>'+it('폐수 배출구 수질 시료 채취','pH 6.8 · COD 21mg/L','ok','2')+it('유류 저장탱크 방유제 누유 흔적','남측 방유제 바닥 균열 발견','ng','3')+
'<div class="grp">폐기물 보관</div>'+it('지정폐기물 보관 표지판 부착','','','')+it('보관 기간 초과 여부(45일)','','','')+
'<div class="memo">'+I('pen')+'<span>부적합 조치 메모: 방유제 균열 실링 보수 요청 (담당 김○○, 10.14까지)</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="사진을 첨부했어요">'+I('cam')+'</span><span class="b1" data-tap="점검 결과를 저장하고 보고했어요">점검 결과 저장 · 보고</span></div>'}};

/* 14 드론 예약 — 스카이샷 */
LX["드론 촬영 예약"]={cls:"s-f14",time:"08:30",cap:"촬영 일정 예약과 비행 허가 상태",
body:function(){var tk='';for(var i=0;i<25;i++)tk+='<i class="'+(i%4==0?'m':'')+'"></i>';
return ''+
'<div class="ph"><img src="lx/img/drone-pad.jpg" alt=""><div class="ov">'+BH(86,'스카이샷','<span class="tg">비행 가능 · 풍속 3.2m/s</span>')+'<h4>드론 촬영 예약<small>파주 현장 · 기체 M-02 (4K)</small></h4></div></div>'+
'<div class="dy">'+[["토","10"],["일","11"],["월","12"],["화","13"],["수","14"],["목","15"]].map(function(d,i){return '<span class="'+(i==3?'on':'')+(i==0?' x':'')+'" data-tap="10/'+d[1]+' 선택">'+d[0]+'<b class="num">'+d[1]+'</b></span>'}).join('')+'</div>'+
'<div class="sl"><span class="num x">09:00</span><span class="num on" data-tap="10:30 선택">10:30</span><span class="num" data-tap="13:00 선택">13:00</span><span class="num" data-tap="15:30 선택">15:30</span><span class="num x">17:00</span><span class="num" data-tap="18:00 선택">18:00</span></div>'+
'<div class="pm"><div class="h"><b>비행 승인 상태</b><span>자동 신청</span></div>'+
 '<div class="r ok"><i>'+I('ck')+'</i><p>비행금지구역(P-73) 확인<small>해당 없음</small></p></div>'+
 '<div class="r ok"><i>'+I('ck')+'</i><p>관제권 · 고도 150m 이하<small>UTM 승인 완료 · 승인번호 F-2610-4417</small></p></div>'+
 '<div class="r wt"><i>'+I('clk')+'</i><p>지주 촬영 동의<small>현장소장 박○○ 확인 중</small></p></div></div>'+
'<div class="wx"><span>'+I('sun')+'맑음<b class="num">18°C</b></span><span>'+I('wind')+'풍속<b class="num">3.2m/s</b></span><span>'+I('eye')+'시정<b class="num">10km</b></span><span>'+I('sig')+'위성<b class="num">17</b></span></div>'+
'<div class="pc"><span>'+I('pin')+'파주시 ○○읍 현장 반경 500m</span><b class="num">₩450,000</b></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="10/13 10:30 촬영을 예약했어요">10/13 10:30 촬영 예약 확정</span></div>'}};

/* 15 측량 납품 — 맵메이트 */
LX["측량 데이터 납품 관리"]={cls:"s-f15",time:"15:10",cap:"정사영상·포인트클라우드 납품",
body:function(){return ''+
BH(87,'맵메이트','<span class="sh" data-tap="납품 링크를 복사했어요">'+I('lk')+'링크 복사</span>')+
H('납품 관리','○○ 택지개발 2공구 · 측량 성과')+
'<div class="ph"><img src="lx/img/drone-site.jpg" alt=""><svg viewBox="0 0 335 150" preserveAspectRatio="none"><g stroke="rgba(255,255,255,.5)" stroke-width=".6"><path d="M0 50H335M0 100H335M84 0V150M168 0V150M252 0V150"/></g><g stroke="#F97316" stroke-width="1.6" fill="rgba(249,115,22,.14)"><path d="M40 40L200 30L270 90L120 120z"/></g><g fill="#fff" stroke="#F97316" stroke-width="1.5"><rect x="36.5" y="36.5" width="7" height="7"/><rect x="196.5" y="26.5" width="7" height="7"/><rect x="266.5" y="86.5" width="7" height="7"/><rect x="116.5" y="116.5" width="7" height="7"/></g></svg><span class="tg">정사영상 GSD 2.0cm</span><span class="ar num">A = 18.4 ha</span></div>'+
'<div class="kp"><span><b class="num">4/5</b>성과물</span><span><b class="num">±3cm</b>수평 정확도</span><span><b class="num">142</b>GCP 점검</span></div>'+
'<div class="fl"><div class="ft2"><i class="t num">TIF</i><p><b>정사영상.tif</b><small class="num">2.4 GB · 10.10 업로드</small></p><span class="bd ok">검수 완료</span></div>'+
 '<div class="ft2"><i class="l num">LAS</i><p><b>포인트클라우드.las</b><small class="num">1.1 GB · 10.10 업로드</small></p><span class="bd ok">검수 완료</span></div>'+
 '<div class="ft2"><i class="d num">DXF</i><p><b>현황도.dxf</b><small class="num">38 MB · 10.11 업로드</small></p><span class="bd ok">검수 완료</span></div>'+
 '<div class="ft2"><i class="p num">PDF</i><p><b>성과 보고서.pdf</b><small>작성 중 · 담당 한○○</small></p><span class="bd wt">검수 대기</span></div></div>'+
'<div class="tm"><span>납품 기한</span><b class="num">10.14 (수) 17:00</b><em class="num">D-3</em></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="발주처에 4개 성과물을 납품했어요">발주처에 납품하기 (4건)</span></div>'}};

/* 16 장비점검 — 배터리로그 */
LX["촬영 장비 점검 기록"]={cls:"s-f16",time:"06:50",cap:"비행 전 배터리·기체 점검",
body:function(){
var B=[["B1",100,42,"ok"],["B2",96,57,"ok"],["B3",88,121,"ok"],["B4",71,203,"wn"],["B5",94,66,"ok"],["B6",62,248,"bad"]];
return ''+
BH(88,'배터리로그','<span class="id num">M-02</span>')+
H('장비 점검','비행 전 점검 · 기체 M-02')+
'<div class="dr"><span class="on">M-02</span><span>M-03</span><span>M-04</span></div>'+
'<div class="bt"><div class="th"><span>BAT</span><span>건강도</span><span>사이클</span></div>'+B.map(function(b){var c='';for(var i=0;i<10;i++)c+='<u class="'+(i<Math.round(b[1]/10)?'f':'')+'"></u>';return '<div class="c '+b[3]+'" data-tap="배터리 '+b[0]+' 상세"><b class="num">'+b[0]+'</b><div class="cl">'+c+'</div><strong class="num">'+b[1]+'<small>%</small></strong><small class="num">'+b[2]+'</small></div>'}).join('')+'</div>'+
'<div class="al">'+I('warn')+'<p><b>B6 교체 권장</b><small>건강도 62% · 사이클 248회 (기준 200)</small></p></div>'+
'<div class="ck"><h5>기체 점검 <small class="num">5/7</small></h5><div class="r on"><i>'+I('ck')+'</i>프로펠러 4개 균열·마모</div><div class="r on"><i>'+I('ck')+'</i>짐벌 보정 · 수평</div><div class="r on"><i>'+I('ck')+'</i>GPS 위성 18개 확보</div><div class="r"><i></i>SD카드 용량 128GB 여유</div><div class="r"><i></i>펌웨어 v10.01.0500 최신</div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="M-02 점검 기록을 저장했어요">점검 기록 저장 · 비행 가능</span></div>'}};

/* 17 사진보고서 — 포토리포트 */
LX["현장 사진 보고서 자동 작성"]={cls:"s-f17",time:"17:02",cap:"드론 사진으로 보고서 자동 작성",
body:function(){return ''+
'<div class="tb">'+BH(89,'포토리포트','<span class="ai">'+I('spk')+'AI 작성 완료</span>')+'</div>'+
'<div class="pg"><div class="ph0"><small class="num">NO. 2026-1011-07</small><h4>교량 정기 안전점검<br>사진 보고서</h4><p class="num">○○대교 · 2026.10.11 · 드론 촬영 142장 중 선별 6장</p></div>'+
 '<div class="gd">'+
  '<figure data-tap="1번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:50% 40%" alt=""><em class="num">1</em></div><figcaption><b>전경</b>상부 상태 양호</figcaption></figure>'+
  '<figure data-tap="2번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:15% 60%;transform:scale(1.9);transform-origin:20% 65%" alt=""><u class="pin"></u><em class="num">2</em></div><figcaption><b class="rd">균열 0.3mm</b>P2 교각 상단</figcaption></figure>'+
  '<figure data-tap="3번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:80% 70%;transform:scale(2.2);transform-origin:80% 70%" alt=""><em class="num">3</em></div><figcaption><b>신축이음</b>이물질 없음</figcaption></figure>'+
  '<figure data-tap="4번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:50% 90%;transform:scale(1.6);transform-origin:50% 100%" alt=""><u class="pin b"></u><em class="num">4</em></div><figcaption><b class="rd">도장 박리</b>교대부 약 2㎡</figcaption></figure>'+
 '</div>'+
 '<div class="sm"><b>종합 의견</b>구조적 결함은 없으나 P2 교각 균열 추적 관찰 및 교대부 재도장을 권고합니다.</div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="캡션 편집 모드">'+I('ed')+'편집</span><span class="b1" data-tap="보고서 PDF를 저장했어요">'+I('dl')+'PDF로 내보내기</span></div>'}};
})();
