(function(){
"use strict";
var LX=window.LX=window.LX||{};
function H(t,s,r,bk){return '<div class="hd">'+(bk?'<span class="bk">‹</span>':'')+'<h4>'+t+'<small>'+s+'</small></h4>'+(r||'')+'</div>'}

/* 01 헌금 */
LX["헌금·기부금 관리"]={cls:"s-f01",time:"12:20",cap:"헌금 기록과 기부금영수증 발급",
body:function(){return ''+
H('헌금 관리','2026.10 · 주일예배 헌금 집계','<span class="rc" data-tap="영수증 보관함을 열었어요">🧾</span>')+
'<div class="sum"><span>10월 헌금 합계</span><b class="num">₩18,420,000</b><em class="num">지난달 대비 +6.4%</em>'+
 '<div class="st"><i style="width:52%;background:#F2C879"></i><i style="width:24%;background:#E8A0A0"></i><i style="width:14%;background:#fff"></i><i style="width:10%;background:#8E3B4F"></i></div>'+
 '<div class="lg"><span><i style="background:#F2C879"></i>십일조 52%</span><span><i style="background:#E8A0A0"></i>감사 24%</span><span><i style="background:#fff"></i>주일 14%</span><span><i style="background:#8E3B4F"></i>선교</span></div></div>'+
'<div class="tabs"><span class="on" data-tap="헌금 기록 탭">헌금 기록</span><span data-tap="기부금영수증 탭">기부금영수증</span></div>'+
'<div class="li"><span class="ic">십</span><p>김○○ 성도<small>십일조 · 계좌이체 · 10.11 11:40</small></p><b class="num">300,000</b></div>'+
'<div class="li"><span class="ic g">감</span><p>이○○ 집사<small>감사헌금 · 현금봉투 · 10.11 11:52</small></p><b class="num">100,000</b></div>'+
'<div class="li"><span class="ic b">선</span><p>박○○ 권사<small>선교헌금 · 카드 · 10.11 12:03</small></p><b class="num">50,000</b></div>'+
'<div class="li"><span class="ic">십</span><p>정○○ 장로<small>십일조 · 계좌이체 · 10.11 12:10</small></p><b class="num">500,000</b></div>'+
'<div class="rcp"><div class="rh"><b>기부금 영수증</b><small class="num">제 2026-0187호</small></div>'+
 '<dl><dt>기부자</dt><dd>최○○ (주민번호 앞 6자리 ******)</dd><dt>기간</dt><dd class="num">2026.01.01 ~ 2026.10.11</dd><dt>합계</dt><dd class="num big">₩4,860,000</dd></dl>'+
 '<span class="seal">교회<br>직인</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="헌금 봉투를 스캔했어요">봉투 스캔</span><span class="b1" data-tap="기부금영수증 124건을 발급했어요">기부금영수증 일괄 발급</span></div>'}};

/* 02 출석 */
(function(){
var N=["김○○","이○○","박○○","최○○","정○○","강○○","조○○","윤○○","장○○","임○○","한○○","오○○","서○○","신○○","권○○","황○○","안○○","송○○","류○○","홍○○"];
var S=[1,1,1,0,1,1,2,1,1,0,1,1,1,0,1,2,1,1,0,1];
LX["교인 출석 체크"]={cls:"s-f02",time:"11:05",cap:"주일 2부 예배 출석 체크",
body:function(){return ''+
'<div class="ph"><img src="lx/img/church.jpg" alt=""><div class="ov"><span class="tg">● 2부 예배 진행 중</span><h4>교인 출석<small>10월 11일 주일 · 11:00 대예배</small></h4>'+
 '<div class="rg"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="27" stroke="rgba(255,255,255,.2)" stroke-width="7" fill="none"/><circle cx="32" cy="32" r="27" stroke="#F2C879" stroke-width="7" fill="none" stroke-dasharray="129 170" stroke-linecap="round" transform="rotate(-90 32 32)"/></svg><b class="num">76<small>%</small></b></div></div></div>'+
'<div class="cn"><span><b class="num">142</b>출석</span><span><b class="num">9</b>지각</span><span><b class="num">36</b>미확인</span><span><b class="num">187</b>재적</span></div>'+
'<div class="fl"><span class="on" data-tap="전체 보기">전체</span><span data-tap="청년부만 보기">청년부</span><span data-tap="장년부만 보기">장년부</span><span data-tap="새가족만 보기">새가족</span></div>'+
'<div class="gd">'+N.map(function(n,i){return '<div class="m s'+S[i]+'" data-tap="'+n+' 출석을 처리했어요"><span class="av">'+n[0]+'</span><b>'+n+'</b><i>'+(S[i]==1?'✓':S[i]==2?'지각':'')+'</i></div>'}).join('')+'</div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="출석 142명을 마감했어요">출석 마감하기</span></div>'}};
})();

/* 03 문자 */
LX["교회 소식 문자 발송"]={cls:"s-f03",time:"17:48",cap:"교우 그룹에게 주보 소식 문자",
body:function(){return ''+
H('소식 문자','새 메시지 작성','<span class="tp" data-tap="임시저장했어요">임시저장</span>',1)+
'<div class="to"><span class="lb">받는 그룹</span><div class="ch"><b data-tap="청년부 그룹 해제">청년부 48 ×</b><b data-tap="구역장 그룹 해제">구역장 22 ×</b><b data-tap="새가족 그룹 해제">새가족 7 ×</b><u data-tap="그룹을 추가해요">＋ 추가</u></div></div>'+
'<div class="tpl"><span class="on" data-tap="주보 안내 서식">주보 안내</span><span data-tap="수련회 서식">수련회</span><span data-tap="부고 서식">부고·경조</span><span data-tap="심방 서식">심방</span></div>'+
'<div class="phn"><div class="pb"><small>[소망교회] 오늘 17:48</small><div class="bub">[소망교회 주보]<br>10/18(주) 청년부 가을 수련회<br>· 일시 10/24(토) 09:00<br>· 장소 교회 앞 주차장 집합<br>· 회비 3만원 (신청 10/17까지)<br>축복합니다 🙏</div><div class="bub me">참석합니다!</div></div></div>'+
'<div class="mt"><span class="num">212 / 2,000 byte</span><span>LMS · 77명 · 건당 28원</span></div>'+
'<div class="sc"><span>📅 예약 발송</span><b class="num">10/12 (월) 오전 8:00</b><u class="sw" data-sw></u></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="77명에게 문자를 예약했어요">77명에게 문자 보내기</span></div>'}};

/* 04 소모임·봉사 */
LX["소모임·봉사 일정 관리"]={cls:"s-f04",time:"09:12",cap:"주간 봉사 배정과 소모임 일정",
body:function(){var d=[["월",12],["화",13],["수",14],["목",15],["금",16],["토",17],["주",18]];
return ''+
H('봉사·소모임','10월 3주차 · 봉사 배정 현황','<span class="av">+</span>')+
'<div class="wk">'+d.map(function(x,i){return '<span class="'+(i==6?'on':'')+(i==2||i==6?' dt':'')+'" data-tap="10/'+x[1]+' 일정 보기">'+x[0]+'<b class="num">'+x[1]+'</b></span>'}).join('')+'</div>'+
'<div class="sec">10월 18일 (주일) <small>배정 9/12명</small></div>'+
'<div class="tl">'+
 '<div class="ev"><time class="num">08:30</time><div class="cd c1"><h5>주차 안내<em>3/3</em></h5><div class="as"><i>김</i><i>이</i><i>박</i></div><small>정문 · 후문 · 지하주차장</small></div></div>'+
 '<div class="ev"><time class="num">09:30</time><div class="cd c2"><h5>찬양팀 리허설<em>5/5</em></h5><div class="as"><i>정</i><i>최</i><i>강</i><i>윤</i><i>한</i></div><small>본당 · 장비 점검 포함</small></div></div>'+
 '<div class="ev"><time class="num">11:30</time><div class="cd c3 lack"><h5>점심 배식 봉사<em>1/4</em></h5><div class="as"><i>오</i><u>+</u><u>+</u><u>+</u></div><small>3명 부족 · 구역 순서 5구역</small><span class="bt" data-tap="5구역에 봉사 요청을 보냈어요">요청 보내기</span></div></div>'+
 '<div class="ev"><time class="num">14:00</time><div class="cd c4"><h5>소모임 · 청년 성경공부<em>8명</em></h5><small>교육관 203호 · 요한복음 3장</small></div></div>'+
'</div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="봉사 배정을 확정하고 알림을 보냈어요">배정 확정 · 알림 보내기</span></div>'}};

/* 05 버스 */
LX["통근·전세버스 배차"]={cls:"s-f05",time:"06:32",cap:"오늘 노선과 차량별 상태, 배차 확정",
body:function(){return ''+
'<div class="map"><svg viewBox="0 0 335 300" preserveAspectRatio="xMidYMid slice"><rect width="335" height="300" fill="#E8EEF2"/><path d="M-10 220C60 200 110 250 190 235S300 190 350 215V310H-10z" fill="#CFE3F2"/>'+
 '<g stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round"><path d="M0 80H335M40 0V300M160 0V300M270 0V300M0 170H335"/></g><g stroke="#F6F8FA" stroke-width="4" fill="none"><path d="M0 30L335 130M100 0L230 300"/></g>'+
 '<path d="M40 250V170H160V80H270" stroke="#2F6BFF" stroke-width="5" fill="none" stroke-linejoin="round"/><path d="M270 250V170H160" stroke="#FF8A2B" stroke-width="5" fill="none" stroke-dasharray="1 0"/>'+
 '<g fill="#fff" stroke="#2F6BFF" stroke-width="3"><circle cx="40" cy="250" r="6"/><circle cx="40" cy="170" r="6"/><circle cx="160" cy="170" r="6"/><circle cx="160" cy="80" r="6"/></g><g fill="#fff" stroke="#FF8A2B" stroke-width="3"><circle cx="270" cy="250" r="6"/><circle cx="270" cy="170" r="6"/></g>'+
 '<rect x="252" y="62" width="36" height="36" rx="10" fill="#14233F"/><text x="270" y="85" fill="#fff" font-size="13" font-weight="800" text-anchor="middle">본사</text>'+
 '<g><circle cx="100" cy="170" r="13" fill="#2F6BFF"/><text x="100" y="175" fill="#fff" font-size="11" font-weight="800" text-anchor="middle">1</text><circle cx="270" cy="212" r="13" fill="#FF8A2B"/><text x="270" y="217" fill="#fff" font-size="11" font-weight="800" text-anchor="middle">2</text></g></svg>'+
 '<div class="top"><span class="bk">‹</span><h4>오늘 배차<small>10월 11일 (일) 출근편 · 2개 노선</small></h4></div></div>'+
'<div class="sh"><i class="gr"></i>'+
 '<div class="v"><div class="th"><img src="lx/img/coach-bus.jpg" alt=""></div><p><b>1호차 · 청주 A노선</b><small class="num">서울 34바 5021 · 기사 박○○</small></p><span class="bd g">운행 중</span></div>'+
 '<div class="v"><div class="th"><img src="lx/img/shuttle-stop.jpg" alt=""></div><p><b>2호차 · 오송 B노선</b><small class="num">경기 71사 1180 · 기사 이○○</small></p><span class="bd o">출발 대기</span></div>'+
 '<div class="v nt"><div class="th">3</div><p><b>3호차 · 예비</b><small>정비소 입고 · 배차 불가</small></p><span class="bd r">점검</span></div>'+
 '<div class="sm"><span><b class="num">64</b>탑승 예정</span><span><b class="num">06:50</b>첫 출발</span><span><b class="num">2대</b>배차</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="2대 배차를 확정했어요">배차 확정 · 기사님께 전송</span></div>'}};

/* 06 무인정산 */
LX["무인 주차 정산"]={cls:"s-f06",time:"19:26",cap:"차량번호 인식 후 요금 자동 정산",
body:function(){return ''+
'<div class="ph"><img src="lx/img/parking-gate.jpg" alt=""><div class="bx"><i></i><i></i><i></i><i></i><span>인식 완료 99.2%</span></div><div class="hdr"><b>무인 정산기</b><span>2번 출구 · 정상 운영</span></div></div>'+
'<div class="pl"><small>인식된 차량번호</small><div class="plate"><em>KR</em><b class="num">34두 5721</b></div></div>'+
'<div class="rcp"><div class="r"><span>입차</span><b class="num">10.11 15:42</b></div><div class="r"><span>출차</span><b class="num">10.11 19:26</b></div><div class="r"><span>주차 시간</span><b class="num">3시간 44분</b></div><div class="r"><span>기본 30분</span><b class="num">1,000</b></div><div class="r"><span>추가 20분 × 10</span><b class="num">+ 5,000</b></div><div class="r d"><span>제휴 할인 (상가 2시간)</span><b class="num">− 3,000</b></div>'+
 '<div class="tt"><span>결제 금액</span><b class="num">₩3,000</b></div></div>'+
'<div class="pm"><span class="on" data-tap="카드 결제 선택">💳 카드</span><span data-tap="간편결제 선택">간편결제</span><span data-tap="QR 결제 선택">QR</span></div>'+
'<div class="nt"><span>🧾</span><p>영수증은 문자로 발송돼요<small>010-****-4821 · 출차 제한시간 15분</small></p></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="3,000원 결제 후 차단기를 열었어요">3,000원 결제하고 출차</span></div>'}};

/* 07 정기권 */
LX["정기권 관리"]={cls:"s-f07",time:"08:50",cap:"월 정기권 카드와 만료 관리",
body:function(){
var q='',r=7;for(var y=0;y<11;y++)for(var x=0;x<11;x++){var f=(x<3&&y<3)||(x>7&&y<3)||(x<3&&y>7);if(f||((x*7+y*13+x*y)%5<2))q+='<rect x="'+x*4+'" y="'+y*4+'" width="3.4" height="3.4"/>'}
return ''+
H('정기권','월 정기 주차 · 활성 238대','<span class="pl" data-tap="신규 등록 화면">＋</span>')+
'<div class="srch"><span>🔍</span>차량번호 · 입주사 검색<u class="num">238</u></div>'+
'<div class="cards">'+
 '<div class="cd c2"><div class="r1"><b>B2 고정석</b><span>정기권</span></div><p class="num">56가 7742</p><small>김○○ · 한빛상사 · 만료 11.30</small></div>'+
 '<div class="cd c1"><div class="r1"><b>24시간 정기권</b><span>사용 중</span></div><p class="num">34두 5721</p><small>이○○ · 대성빌딩 3층</small><div class="bt"><svg viewBox="0 0 44 44" fill="#0B3B3A">'+q+'</svg><div><em>남은 기간</em><b class="num">19일</b><i><u style="width:63%"></u></i><small class="num">10.31 만료 · 연장 ₩150,000</small></div></div></div>'+
'</div>'+
'<div class="alert"><span>⏰</span><p><b>7일 내 만료 6건</b><small>자동 문자 안내 발송 예정</small></p><u data-tap="만료 6건에 안내 문자를 보냈어요">문자 발송</u></div>'+
'<div class="rw"><div class="av">박</div><p><b class="num">12나 3098</b><small>박○○ · 주간 · 만료 10.17</small></p><span class="bd">D-6</span></div>'+
'<div class="rw"><div class="av">최</div><p><b class="num">78머 2210</b><small>최○○ · 야간 · 만료 10.18</small></p><span class="bd">D-7</span></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="정기권 연장 결제 링크를 보냈어요">정기권 연장 결제 보내기</span></div>'}};

/* 08 혼잡 */
LX["주차 혼잡도 대시보드"]={cls:"s-f08",time:"14:05",cap:"층별 점유율과 시간대 혼잡도",
body:function(){
var fl=[["옥상 R",34,41,120,"ok"],["지상 1층",96,48,50,"hi"],["지하 1층",88,176,200,"hi"],["지하 2층",71,142,200,"mid"],["지하 3층",42,84,200,"ok"]];
var bars=[20,28,45,62,80,92,96,88,70,55,60,74,52];
return ''+
H('주차 혼잡도','대성타워 · 14:05 기준 실시간','<span class="lv">LIVE</span>')+
'<div class="top"><div class="rg"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" stroke="#2A2F3A" stroke-width="9" fill="none"/><circle cx="40" cy="40" r="32" stroke="#FFB020" stroke-width="9" fill="none" stroke-dasharray="144 201" stroke-linecap="round" transform="rotate(-90 40 40)"/></svg><b class="num">72<small>%</small></b></div>'+
 '<div class="tx"><span>전체 점유율</span><b class="num">491<small> / 670대</small></b><em>● 혼잡 · 잔여 179면</em></div></div>'+
'<div class="fls">'+fl.map(function(f){return '<div class="f '+f[4]+'" data-tap="'+f[0]+' 상세 보기"><b>'+f[0]+'</b><div class="br"><i style="width:'+f[1]+'%"></i></div><span class="num">'+f[1]+'%</span><small class="num">'+f[2]+'/'+f[3]+'</small></div>'}).join('')+'</div>'+
'<div class="hr"><h5>시간대별 입차 <small>오늘</small></h5><div class="bs">'+bars.map(function(v,i){return '<i class="'+(i==6?'now':'')+'" style="height:'+v+'%"></i>'}).join('')+'</div><div class="ax"><span>06시</span><span>12시</span><span>18시</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="지하1층 입구에 만차 안내를 켰어요">만차 안내 전광판 켜기</span></div>'}};

/* 09 발렛 */
LX["발렛 기사 배정"]={cls:"s-f09",time:"19:40",cap:"입고·출고 요청에 기사 배정",
body:function(){return ''+
'<div class="ph"><img src="lx/img/valet.jpg" alt=""><div class="ov"><h4>발렛 배정<small>그랜드 호텔 정문 · 저녁 피크</small></h4><div class="kp"><span><b class="num">23</b>주차 중</span><span><b class="num">4</b>출고 요청</span><span><b class="num">3/5</b>기사 근무</span></div></div></div>'+
'<div class="sec">출고 요청 <small>대기 4건</small></div>'+
'<div class="tk w"><div class="n num">A-218</div><p><b class="num">12가 3456 · 검정 세단</b><small>객실 1204 · 요청 19:38 · 대기 2분</small></p><span class="as" data-tap="최○○ 기사에게 배정했어요">최○○<i>▾</i></span></div>'+
'<div class="tk w"><div class="n num">A-225</div><p><b class="num">45다 8120 · 흰색 SUV</b><small>객실 0907 · 요청 19:39 · 대기 1분</small></p><span class="as un" data-tap="기사를 선택해요">미배정<i>▾</i></span></div>'+
'<div class="sec">진행 중</div>'+
'<div class="tk"><div class="n num">A-209</div><p><b class="num">78머 5521</b><small>주차장 B1 → 정문 · 예상 3분</small></p><div class="pg"><i style="width:70%"></i></div></div>'+
'<div class="tk"><div class="n num">A-203</div><p><b class="num">33허 1207</b><small>정문 → 주차장 B2 · 입고 중</small></p><div class="pg"><i style="width:35%"></i></div></div>'+
'<div class="dr"><div class="d on"><span>최</span><b>최○○</b><small>1건</small></div><div class="d"><span>김</span><b>김○○</b><small>2건</small></div><div class="d"><span>박</span><b>박○○</b><small>대기</small></div><div class="d off"><span>이</span><b>이○○</b><small>휴식</small></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="A-225를 박○○ 기사에게 배정했어요">자동 배정 · 호출 보내기</span></div>'}};

/* 10 폐기물 경로 */
LX["폐기물 수거 경로 관리"]={cls:"s-f10",time:"07:15",cap:"오늘 수거 경로와 정차 순서",
body:function(){return ''+
'<div class="map"><svg viewBox="0 0 335 250" preserveAspectRatio="xMidYMid slice"><rect width="335" height="250" fill="#E4EDE0"/><rect x="20" y="20" width="60" height="50" rx="8" fill="#D2E3CB"/><rect x="230" y="150" width="80" height="70" rx="10" fill="#D2E3CB"/><path d="M-10 120C80 90 150 160 240 120S320 90 350 100" stroke="#B9D6EA" stroke-width="14" fill="none"/>'+
 '<g stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"><path d="M0 60H335M0 190H335M70 0V250M180 0V250M280 0V250"/></g>'+
 '<path d="M30 190H70V60H180V190H280V60" stroke="#1E8E4E" stroke-width="5" fill="none" stroke-dasharray="9 5" stroke-linejoin="round"/>'+
 [[30,190,1],[70,125,2],[70,60,3],[180,60,4],[180,125,5],[180,190,6],[280,190,7],[280,60,8]].map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="11" fill="'+(p[2]<4?'#1E8E4E':'#fff')+'" stroke="#1E8E4E" stroke-width="3"/><text x="'+p[0]+'" y="'+(p[1]+4)+'" font-size="11" font-weight="800" text-anchor="middle" fill="'+(p[2]<4?'#fff':'#1E8E4E')+'">'+p[2]+'</text>'}).join('')+
 '<rect x="286" y="170" width="46" height="22" rx="6" fill="#1B2A22"/><text x="309" y="185" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">처리장</text></svg>'+
 '<div class="top"><span class="bk">‹</span><h4>수거 경로<small>2호 트럭 · 8개 정차 · 42.6km</small></h4><span class="eta"><b class="num">3h 10m</b>예상</span></div></div>'+
'<div class="tr"><div class="th"><img src="lx/img/waste-truck.jpg" alt=""></div><p><b>2호 트럭 · 서울 89사 4410</b><small>기사 정○○ · 적재 1.8 / 5.0 t</small></p><span class="ld"><i style="width:36%"></i></span></div>'+
'<div class="st dn"><span class="n">1</span><p><b>한결식당 외 3곳</b><small>일반폐기물 · 07:05 수거 완료</small></p><em class="num">240kg</em></div>'+
'<div class="st dn"><span class="n">2</span><p><b>미래의원</b><small>의료폐기물 · 07:28 수거 완료</small></p><em class="num">85kg</em></div>'+
'<div class="st cur"><span class="n">3</span><p><b>삼정마트 후문</b><small>음식물 · 도착 2분 전</small></p><em class="num">~420kg</em></div>'+
'<div class="st"><span class="n">4</span><p><b>대성타워 지하 2층</b><small>재활용 · 예정 08:10</small></p><em class="num">~300kg</em></div>'+
'<div class="st"><span class="n">5</span><p><b>새봄아파트 분리수거장</b><small>재활용 · 예정 08:45</small></p><em class="num">~650kg</em></div>'+
'<div class="st"><span class="n">6</span><p><b>동원시장 후문</b><small>일반폐기물 · 예정 09:20</small></p><em class="num">~380kg</em></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="경로를 재탐색했어요">재탐색</span><span class="b1" data-tap="기사님께 경로를 전송했어요">경로 확정 · 기사 전송</span></div>'}};

/* 11 배출신고 */
LX["배출 신고 서류 관리"]={cls:"s-f11",time:"10:30",cap:"사업장 폐기물 배출 신고서 작성·제출",
body:function(){return ''+
H('배출 신고서','사업장폐기물 · 2026년 3분기','<span class="st" data-tap="제출 이력을 열었어요">이력</span>',1)+
'<div class="stp"><div class="s dn"><i>✓</i>작성</div><div class="s dn"><i>✓</i>검토</div><div class="s on"><i>3</i>서명</div><div class="s"><i>4</i>제출</div></div>'+
'<div class="doc"><div class="dh"><b>사업장폐기물 배출자 신고서</b><small class="num">서식 제12호 · 접수번호 2026-Q3-0412</small></div>'+
 '<div class="gr"><div><span>사업장명</span><b>(주)한결푸드</b></div><div><span>사업자번호</span><b class="num">123-45-*****</b></div></div>'+
 '<table><tr><th>폐기물 종류</th><th>코드</th><th>배출량</th></tr><tr><td>폐합성수지류</td><td class="num">51-02</td><td class="num">12.4 t</td></tr><tr><td>폐유(폐식용유)</td><td class="num">51-07</td><td class="num">3.1 t</td></tr><tr><td>음식물류</td><td class="num">41-01</td><td class="num">28.9 t</td></tr><tr><td>폐목재류</td><td class="num">51-11</td><td class="num">1.6 t</td></tr></table>'+
 '<div class="sg"><div><span>담당자 서명</span><svg viewBox="0 0 80 30"><path d="M4 22C12 4 18 4 20 16S28 26 34 10 46 22 52 14s10 6 24-8" stroke="#1F3F8F" stroke-width="2" fill="none"/></svg></div><div class="pend"><span>대표 서명</span><u>서명 대기</u></div></div></div>'+
'<div class="at"><span>📎</span><p>위탁 계약서.pdf · 처리 확인서.pdf<small>첨부 2건 · 1.4MB</small></p><u data-tap="첨부 파일을 추가해요">＋</u></div>'+
'<div class="dl">제출 기한 <b class="num">10.15 (목)</b> · D-4</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="대표님께 서명을 요청했어요">서명 요청</span><span class="b1" data-tap="신고서를 제출했어요">신고서 제출</span></div>'}};

/* 12 수거 정산 */
LX["수거 업체 정산"]={cls:"s-f12",time:"16:20",cap:"수거 업체별 월 정산서",
body:function(){return ''+
H('수거 업체 정산','2026년 9월분 · 마감 10.10','<span class="mn">9월 ▾</span>')+
'<div class="tot"><span>정산 대상 금액</span><b class="num">₩12,846,000</b><div class="sp"><span>수거량 <b class="num">48.7 t</b></span><span>건수 <b class="num">162건</b></span><span>업체 <b class="num">5곳</b></span></div></div>'+
'<div class="chart"><h5>업체별 정산액</h5>'+
 [["그린에코",42,"5,394,000"],["클린로드",27,"3,468,000"],["새롬환경",18,"2,312,000"],["대한리사이클",9,"1,156,000"],["기타",4,"516,000"]].map(function(v,i){return '<div class="b"><span>'+v[0]+'</span><i><u style="width:'+v[1]*2+'%;opacity:'+(1-i*.15)+'"></u></i><em class="num">'+v[2]+'</em></div>'}).join('')+'</div>'+
'<div class="sec">정산서 <small>확인 3 · 대기 2</small></div>'+
'<div class="ln"><span class="bd ok">확정</span><p><b>그린에코㈜</b><small class="num">19.2t × ₩260,000 + 운반비</small></p><b class="num">5,394,000</b></div>'+
'<div class="ln"><span class="bd ok">확정</span><p><b>클린로드</b><small class="num">13.5t × ₩240,000</small></p><b class="num">3,468,000</b></div>'+
'<div class="ln"><span class="bd wt">대기</span><p><b>새롬환경</b><small>계량표 불일치 1건 확인 필요</small></p><b class="num">2,312,000</b></div>'+
'<div class="ln"><span class="bd wt">대기</span><p><b>대한리사이클</b><small>세금계산서 미수신</small></p><b class="num">1,156,000</b></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="정산서를 PDF로 저장했어요">PDF</span><span class="b1" data-tap="3개 업체 정산금을 이체 요청했어요">확정 3곳 정산금 지급</span></div>'}};

/* 13 환경점검 */
LX["환경 점검 체크리스트"]={cls:"s-f13",time:"13:40",cap:"현장 환경 점검 항목 체크",
body:function(){
function it(t,s,st,ph){return '<div class="it '+st+'"><span class="ck">'+(st=='ok'?'✓':st=='ng'?'!':'')+'</span><p><b>'+t+'</b><small>'+s+'</small></p>'+(ph?'<span class="cam">📷 '+ph+'</span>':'<span class="seg"><u data-tap="적합 처리">적합</u><u data-tap="부적합 처리">부적합</u></span>')+'</div>'}
return ''+
H('환경 점검','제2공장 · 월간 정기 점검','<span class="dt">10.11</span>',1)+
'<div class="pr"><div class="bar"><i style="width:62%"></i></div><p><b class="num">8 / 13</b> 항목 완료 · 부적합 <b class="red num">1</b></p></div>'+
'<div class="grp">대기·악취</div>'+it('집진기 차압 정상 범위','0.8 kPa · 기준 1.5 이하','ok','1')+it('악취 저감 설비 가동','활성탄 교체주기 확인','ok','')+
'<div class="grp">폐수·유류</div>'+it('폐수 배출구 수질 시료 채취','pH 6.8 · COD 21mg/L','ok','2')+it('유류 저장탱크 방유제 누유 흔적','남측 방유제 바닥 균열 발견','ng','3')+
'<div class="grp">폐기물 보관</div>'+it('지정폐기물 보관 표지판 부착','','','')+it('보관 기간 초과 여부(45일)','','','')+
'<div class="memo">✍️ 부적합 조치 메모: 방유제 균열 실링 보수 요청 (담당 김○○, 10.14까지)</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="사진을 첨부했어요">📷</span><span class="b1" data-tap="점검 결과를 저장하고 보고했어요">점검 결과 저장 · 보고</span></div>'}};

/* 14 드론 예약 */
LX["드론 촬영 예약"]={cls:"s-f14",time:"08:30",cap:"촬영 일정 예약과 비행 허가 상태",
body:function(){return ''+
'<div class="ph"><img src="lx/img/drone-pad.jpg" alt=""><div class="ov"><span class="tg">● 비행 가능 · 풍속 3.2m/s</span><h4>드론 촬영 예약<small>파주 현장 · 기체 M-02 (4K)</small></h4></div></div>'+
'<div class="dy">'+[["토","10"],["일","11"],["월","12"],["화","13"],["수","14"],["목","15"]].map(function(d,i){return '<span class="'+(i==3?'on':'')+(i==0?' x':'')+'" data-tap="10/'+d[1]+' 선택">'+d[0]+'<b class="num">'+d[1]+'</b></span>'}).join('')+'</div>'+
'<div class="sl"><span class="num x">09:00</span><span class="num on" data-tap="10:30 선택">10:30</span><span class="num" data-tap="13:00 선택">13:00</span><span class="num" data-tap="15:30 선택">15:30</span><span class="num x">17:00</span><span class="num" data-tap="18:00 선택">18:00</span></div>'+
'<div class="pm"><div class="h"><b>비행 승인 상태</b><span>자동 신청</span></div>'+
 '<div class="r ok"><i>✓</i><p>비행금지구역(P-73) 확인<small>해당 없음</small></p></div>'+
 '<div class="r ok"><i>✓</i><p>관제권 · 고도 150m 이하<small>UTM 승인 완료 · 승인번호 F-2610-4417</small></p></div>'+
 '<div class="r wt"><i>…</i><p>지주 촬영 동의<small>현장소장 박○○ 확인 중</small></p></div></div>'+
'<div class="wx"><span>🌤 맑음<b class="num">18°C</b></span><span>💨 풍속<b class="num">3.2m/s</b></span><span>👁 시정<b class="num">10km</b></span><span>🛰 위성<b class="num">17개</b></span></div>'+
'<div class="pc"><span>📍 예약 장소 · 파주시 ○○읍 현장 반경 500m</span><b class="num">₩450,000</b></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="10/13 10:30 촬영을 예약했어요">10/13 10:30 촬영 예약 확정</span></div>'}};

/* 15 측량 납품 */
LX["측량 데이터 납품 관리"]={cls:"s-f15",time:"15:10",cap:"정사영상·포인트클라우드 납품",
body:function(){return ''+
H('납품 관리','○○ 택지개발 2공구 · 측량 성과','<span class="sh" data-tap="납품 링크를 복사했어요">링크</span>',1)+
'<div class="ph"><img src="lx/img/drone-site.jpg" alt=""><svg viewBox="0 0 335 150" preserveAspectRatio="none"><g stroke="rgba(255,255,255,.45)" stroke-width=".6"><path d="M0 50H335M0 100H335M84 0V150M168 0V150M252 0V150"/></g><g stroke="#FFB020" stroke-width="1.6" fill="rgba(255,176,32,.12)"><path d="M40 40L200 30L270 90L120 120z"/></g><g fill="#fff" stroke="#FFB020" stroke-width="1.5"><circle cx="40" cy="40" r="3.5"/><circle cx="200" cy="30" r="3.5"/><circle cx="270" cy="90" r="3.5"/><circle cx="120" cy="120" r="3.5"/></g></svg><span class="tg">정사영상 GSD 2.0cm</span><span class="ar num">면적 18.4ha</span></div>'+
'<div class="kp"><span><b class="num">4/5</b>성과물</span><span><b class="num">±3cm</b>수평 정확도</span><span><b class="num">142</b>GCP 점검</span></div>'+
'<div class="fl"><div class="ft2"><i class="t">TIF</i><p><b>정사영상.tif</b><small class="num">2.4 GB · 10.10 업로드</small></p><span class="bd ok">검수 완료</span></div>'+
 '<div class="ft2"><i class="l">LAS</i><p><b>포인트클라우드.las</b><small class="num">1.1 GB · 10.10 업로드</small></p><span class="bd ok">검수 완료</span></div>'+
 '<div class="ft2"><i class="d">DXF</i><p><b>현황도.dxf</b><small class="num">38 MB · 10.11 업로드</small></p><span class="bd ok">검수 완료</span></div>'+
 '<div class="ft2"><i class="p">PDF</i><p><b>성과 보고서.pdf</b><small>작성 중 · 담당 한○○</small></p><span class="bd wt">검수 대기</span></div></div>'+
'<div class="tm"><span>📅 납품 기한</span><b class="num">10.14 (수) 17:00</b><em>D-3</em></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="발주처에 4개 성과물을 납품했어요">발주처에 납품하기 (4건)</span></div>'}};

/* 16 장비점검 */
LX["촬영 장비 점검 기록"]={cls:"s-f16",time:"06:50",cap:"비행 전 배터리·기체 점검",
body:function(){
var B=[["B1",100,42,"ok"],["B2",96,57,"ok"],["B3",88,121,"ok"],["B4",71,203,"wn"],["B5",94,66,"ok"],["B6",62,248,"bad"]];
return ''+
H('장비 점검','비행 전 점검 · 기체 M-02','<span class="id">M-02</span>',1)+
'<div class="dr"><span class="on">M-02</span><span>M-03</span><span>M-04</span></div>'+
'<div class="bt">'+B.map(function(b){var c='';for(var i=0;i<4;i++)c+='<u class="'+(b[1]<75&&i==3?'lo':'')+'"></u>';return '<div class="c '+b[3]+'" data-tap="배터리 '+b[0]+' 상세"><b>'+b[0]+'</b><div class="cl">'+c+'</div><strong class="num">'+b[1]+'<small>%</small></strong><small class="num">'+b[2]+'회 사이클</small></div>'}).join('')+'</div>'+
'<div class="al"><span>⚠</span><p><b>B6 교체 권장</b><small>건강도 62% · 사이클 248회 (기준 200)</small></p></div>'+
'<div class="ck"><h5>기체 점검 <small>5/7</small></h5><div class="r on"><i>✓</i>프로펠러 4개 균열·마모</div><div class="r on"><i>✓</i>짐벌 보정 · 수평</div><div class="r on"><i>✓</i>GPS 위성 18개 확보</div><div class="r"><i></i>SD카드 용량 128GB 여유</div><div class="r"><i></i>펌웨어 v10.01.0500 최신</div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="M-02 점검 기록을 저장했어요">점검 기록 저장 · 비행 가능</span></div>'}};

/* 17 사진보고서 */
LX["현장 사진 보고서 자동 작성"]={cls:"s-f17",time:"17:02",cap:"드론 사진으로 보고서 자동 작성",
body:function(){return ''+
'<div class="tb"><span class="bk">‹</span><b>사진 보고서 미리보기</b><span class="ai">✨ AI 작성 완료</span></div>'+
'<div class="pg"><div class="ph0"><small class="num">NO. 2026-1011-07</small><h4>교량 정기 안전점검<br>사진 보고서</h4><p class="num">○○대교 · 2026.10.11 · 드론 촬영 142장 중 선별 6장</p></div>'+
 '<div class="gd">'+
  '<figure data-tap="1번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:50% 40%" alt=""></div><figcaption><b>① 전경</b>상부 상태 양호</figcaption></figure>'+
  '<figure data-tap="2번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:15% 60%;transform:scale(1.9);transform-origin:20% 65%" alt=""><u class="pin"></u></div><figcaption><b class="rd">② 균열 0.3mm</b>P2 교각 상단</figcaption></figure>'+
  '<figure data-tap="3번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:80% 70%;transform:scale(2.2);transform-origin:80% 70%" alt=""></div><figcaption><b>③ 신축이음</b>이물질 없음</figcaption></figure>'+
  '<figure data-tap="4번 사진 캡션 수정"><div class="im"><img src="lx/img/drone-bridge.jpg" style="object-position:50% 90%;transform:scale(1.6);transform-origin:50% 100%" alt=""><u class="pin b"></u></div><figcaption><b class="rd">④ 도장 박리</b>교대부 약 2㎡</figcaption></figure>'+
 '</div>'+
 '<div class="sm"><b>종합 의견</b>구조적 결함은 없으나 P2 교각 균열 추적 관찰 및 교대부 재도장을 권고합니다.</div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="캡션 편집 모드">편집</span><span class="b1" data-tap="보고서 PDF를 저장했어요">PDF로 내보내기</span></div>'}};
})();
