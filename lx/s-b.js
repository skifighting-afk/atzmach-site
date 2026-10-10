(function(){
"use strict";
var LX=window.LX=window.LX||{};
function H(t,s,r){return '<div class="hd"><h4>'+t+'<small>'+s+'</small></h4>'+(r||'')+'</div>'}
function gauge(v,mn,mx,col,lab,unit,ok){
  var a=Math.PI*(1-(v-mn)/(mx-mn)),x=50+36*Math.cos(a),y=50-36*Math.sin(a);
  return '<div class="gg"><svg viewBox="0 0 100 62"><path d="M14 50A36 36 0 0 1 86 50" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="8" stroke-linecap="round"/><path d="M14 50A36 36 0 0 1 '+x.toFixed(1)+' '+y.toFixed(1)+'" fill="none" stroke="'+col+'" stroke-width="8" stroke-linecap="round"/><text x="50" y="48" text-anchor="middle" fill="#fff" font-size="17" font-weight="700" font-family="IBM Plex Mono,monospace">'+v+'</text><text x="50" y="59" text-anchor="middle" fill="rgba(255,255,255,.5)" font-size="7.5">'+unit+'</text></svg><span>'+lab+'</span><em class="'+ok+'">'+(ok=="w"?"주의":"적정")+'</em></div>'}
function path(arr,w,h,mn,mx){return arr.map(function(v,i){return (i?"L":"M")+(i*w/(arr.length-1)).toFixed(1)+" "+(h-(v-mn)/(mx-mn)*h).toFixed(1)}).join("")}

/* 01 */
LX["산지 출하 관리"]={cls:"s-b01",time:"7:48",cap:"농가별 출하 수량·등급을 한눈에",
body:function(){
 function f(n,who,v,q,a,b,c,st,cl){return '<div class="fm" data-tap="'+n+' 상세를 열었어요"><div class="top"><div><b>'+n+'</b><small>'+who+' · '+v+'</small></div><span class="st '+cl+'">'+st+'</span></div><div class="bar"><i style="flex:'+a+'">특</i><i style="flex:'+b+'">상</i><i style="flex:'+c+'">보통</i></div><div class="q"><span>'+q+'박스</span><span>특 '+a+'% · 상 '+b+'% · 보통 '+c+'%</span></div></div>'}
 return H('산지 출하','10월 11일(일) · 부사 수확 6주차','<span class="ic" data-tap="날짜 필터를 열었어요">⌕</span>')+
 '<div class="ph"><img src="lx/img/farm-apples.jpg" alt=""><div class="ov"><span>오늘 출하 예정</span><b class="num">4.8<small>톤</small></b></div><div class="rg"><svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="5"/><circle cx="22" cy="22" r="18" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="70 113" transform="rotate(-90 22 22)" stroke-linecap="round"/></svg><b>62%</b><span>선별 완료</span></div></div>'+
 '<div class="tb"><span class="on">전체 12</span><span>선별중 3</span><span>출하대기 5</span><span>완료 4</span></div>'+
 f('햇살농원','박○○','부사',320,46,38,16,'출하대기','a')+f('청송 하늘과수원','이○○','홍로',210,31,45,24,'선별중','b')+f('다온농장','최○○','부사',450,52,36,12,'출하대기','a')+
 '<div class="tr"><span class="tk">🚚</span><p><b>집하차 2호 · 14:00 출발</b><small>적재 1,180 / 1,400박스 · 공판장 도착 17:30</small></p><span class="pg"><i style="width:84%"></i></span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="출하 명세서를 열었어요">명세서</span><span class="b1" data-tap="4개 농가 출하를 확정했어요">출하 확정 · 4농가 1,180박스</span></div>'}};

/* 02 */
LX["스마트팜 센서 모니터링"]={cls:"s-b02",time:"6:20",cap:"온습도·CO₂ 게이지와 환기 제어",
body:function(){
 var t=[21,20,19.5,19,19.5,21,23,25,26.5,27.5,28,27.2,26.8],tp=path(t,300,70,17,30);
 return H('A동 딸기 하우스','센서 24개 · 3초 전 갱신','<span class="live">LIVE</span>')+
 '<div class="ph"><img src="lx/img/farm-greenhouse.jpg" alt=""><span class="tag">● 정상 운영 중</span><span class="tag r">재배 38일차</span></div>'+
 '<div class="gs">'+gauge(26.8,0,40,"#7CF29A","온도","℃","o")+gauge(72,0,100,"#5BC8FF","습도","%","o")+gauge(840,0,1500,"#FFC14D","CO₂","ppm","w")+'</div>'+
 '<div class="cd"><div class="r"><b>오늘 온도 추이</b><span>최고 28.0℃ · 최저 19.0℃</span></div><svg viewBox="0 0 300 80" preserveAspectRatio="none"><rect x="0" y="20" width="300" height="26" fill="rgba(124,242,154,.1)"/><path d="'+tp+' V80 H0Z" fill="rgba(124,242,154,.15)" transform="translate(0,3)"/><path d="'+tp+'" fill="none" stroke="#7CF29A" stroke-width="2" transform="translate(0,3)"/></svg><div class="ax"><span>0시</span><span>6시</span><span>12시</span><span>지금</span></div></div>'+
 '<div class="ec"><div><span>EC</span><b class="num">1.8</b></div><div><span>pH</span><b class="num">6.1</b></div><div><span>토양수분</span><b class="num">34%</b></div><div><span>조도</span><b class="num">42k</b></div></div>'+
 '<div class="cv"><div><p>천창 환기<small>온도 27℃ 초과 시 자동</small></p><span class="sw" data-sw></span></div><div><p>양액 공급<small>다음 급액 13:30 · 4분</small></p><span class="sw" data-sw></span></div><div><p>보온 커튼<small>일몰 후 자동 닫힘 · 18:10</small></p><span class="sw off" data-sw></span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="천창을 50% 열었어요">천창 환기 열기</span></div>'}};

/* 03 */
LX["농산물 온라인 주문 관리"]={cls:"s-b03",time:"9:12",cap:"주문 접수부터 송장 입력까지",
body:function(){
 function o(id,nm,it,p,st,cl,tr){return '<div class="od" data-tap="'+id+' 주문을 열었어요"><div class="r1"><b class="num">#'+id+'</b><span class="st '+cl+'">'+st+'</span></div><p>'+nm+' · '+it+'</p><div class="r2"><b class="num">₩'+p+'</b>'+(tr?'<span class="tn num">CJ '+tr+'</span>':'<span class="in">송장번호 입력 ›</span>')+'</div></div>'}
 return '<div class="top"><img src="lx/img/farm-muscat.jpg" alt=""><div class="sh"><span>‹</span><span>⋯</span></div><div class="tt"><small>머스캣농원 스토어</small><h4>주문 관리</h4></div></div>'+
 '<div class="kp"><div><b class="num">24</b><span>신규 주문</span></div><div class="hot"><b class="num">9</b><span>송장 입력</span></div><div><b class="num">13</b><span>배송 중</span></div><div><b class="num">2</b><span>교환·반품</span></div></div>'+
 '<div class="ch"><span class="on">전체</span><span>결제완료</span><span>송장입력</span><span>배송중</span><span>취소</span></div>'+
 o('1011-0382','김○○','샤인머스캣 2kg × 2','78,000','송장 대기','w')+
 o('1011-0377','이○○','샤인머스캣 3kg × 1 · 선물포장','52,000','송장 대기','w')+
 o('1010-0351','박○○','샤인머스캣 2kg × 4','152,000','배송중','g','6841 2290 7731')+
 o('1010-0344','최○○','샤인머스캣 1kg × 3','63,500','배송중','g','6841 2290 5518')+o('1009-0310','윤○○','샤인머스캣 2kg × 1','39,000','반품 요청','r')},
foot:function(){return '<div class="ft"><span class="b2" data-tap="엑셀로 내려받았어요">엑셀</span><span class="b1" data-tap="송장 9건을 일괄 등록했어요">송장 일괄 등록 (9건)</span></div>'}};

/* 04 */
LX["세무 신고 일정 관리"]={cls:"s-b04",time:"10:05",cap:"거래처별 신고 기한 캘린더",
body:function(){
 var ds="일월화수목금토".split("").map(function(d,i){return '<i class="'+(i==0?"su":"")+'">'+d+'</i>'}).join(""),c="";
 var mk={12:"r",15:"b",26:"r",30:"b",31:"r"};
 for(var i=0;i<4;i++)c+='<s></s>';
 for(var d=1;d<=31;d++)c+='<s class="'+(d==11?"td ":"")+(d%7==4&&d!=11?"":"")+'" ><em>'+d+'</em>'+(mk[d]?'<u class="'+mk[d]+'"></u>':'')+'</s>';
 function r(d,n,cnt,cl,tag){return '<div class="rw" data-tap="'+n+' 신고 현황을 열었어요"><span class="dd '+cl+'">'+tag+'</span><p>'+n+'<small>'+cnt+'</small></p><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" fill="none" stroke="#E4E9F4" stroke-width="5"/><circle cx="18" cy="18" r="14" fill="none" stroke="'+(cl=="r"?"#F0534F":"#2F5BFF")+'" stroke-width="5" stroke-dasharray="'+d+' 88" transform="rotate(-90 18 18)" stroke-linecap="round"/></svg></div>'}
 return H('신고 캘린더','2026년 10월 · 담당 거래처 38곳','<span class="md">◀ ▶</span>')+
 '<div class="cal"><div class="wk">'+ds+'</div><div class="gr">'+c+'</div></div>'+
 '<div class="lg"><span><u class="r"></u>납부 마감</span><span><u class="b"></u>신고 마감</span><span><u class="t"></u>오늘</span></div>'+
 '<h5>다가오는 기한<small>D-day 순</small></h5>'+
 r(79,'원천세 신고·납부','10/12(월) · 완료 31 / 38곳','r','D-1')+
 r(40,'부가세 예정신고 (개인)','10/26(월) · 접수 12 / 29곳','b','D-15')+
 r(18,'법인세 중간예납 안내','10/31(토→11/2) · 자료수집 4 / 22곳','b','D-21')+r(55,'지방소득세 확정 안내','11/02(월) · 안내 완료 17 / 31곳','b','D-22')},
foot:function(){return '<div class="ft"><span class="b1" data-tap="미제출 7곳에 알림을 보냈어요">미제출 거래처 7곳에 알림 보내기</span></div>'}};

/* 05 */
LX["고객 증빙 수집 포털"]={cls:"s-b05",time:"20:31",cap:"고객이 영수증을 올리는 제출 화면",
body:function(){
 function t(l,n,s){return '<div class="rc '+s+'"><div class="pp"><i></i><i></i><i></i><i></i><b></b></div><span>'+l+'</span>'+(s=="ok"?'<em>✓</em>':'')+'</div>'}
 return '<div class="top"><img src="lx/img/tax-desk.jpg" alt=""><div class="sc"><small>한결세무회계</small><h4>안녕하세요, 이○○ 대표님</h4><p>10월 증빙을 올려주세요 · 제출기한 10/20</p></div></div>'+
 '<div class="card pg"><div class="r"><b>이번 달 제출 현황</b><span class="num">18 / 24건</span></div><div class="bar"><i style="width:75%"></i></div><small>6건만 더 올리면 끝! 기장 담당 김○○ 세무사</small></div>'+
 '<div class="cam" data-tap="카메라를 열었어요"><span class="lens">📷</span><p><b>영수증 촬영하기</b><small>자동으로 금액·거래처를 읽어드려요</small></p><span class="ar">›</span></div>'+
 '<div class="up"><span data-tap="앨범에서 선택해요">🖼 앨범</span><span data-tap="파일을 선택해요">📎 파일</span><span data-tap="카드내역을 연동해요">💳 카드내역</span></div>'+
 '<h5>방금 올린 증빙<small>자동 분류됨</small></h5>'+
 '<div class="rcs">'+t('식자재 ₩184,000','','ok')+t('택배 ₩12,500','','ok')+t('주유 ₩68,200','','ld')+t('???','','no')+'</div>'+
 '<div class="ms"><b>확인이 필요해요</b><p>10/03 ₩230,000 이체 건 — 어떤 지출인가요?</p><div><span data-tap="복리후생비로 분류했어요">복리후생</span><span data-tap="접대비로 분류했어요">접대비</span><span data-tap="기타로 분류했어요">기타</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="증빙 18건을 제출했어요">증빙 제출하기</span></div>'}};

/* 06 */
LX["계약서 검토 체크리스트"]={cls:"s-b06",time:"15:20",cap:"조항 위험도 표시와 점검표",
body:function(){
 function c(t,s,k){return '<div class="ck '+k+'" data-tap="'+t+' 항목을 열었어요"><span class="bx">'+(k=="ok"?'✓':k=="no"?'!':'')+'</span><p>'+t+'<small>'+s+'</small></p></div>'}
 return H('업무위탁계약서','주식회사 가온로지스 · v3 · 12쪽','<span class="sc">검토 8/12</span>')+
 '<div class="doc"><div class="pg">제 9 조 (손해배상)</div><p>① 을은 본 계약 위반으로 갑에게 손해를 입힌 경우 <mark class="r">그 손해 일체 및 간접손해, 일실이익을 배상</mark>하여야 한다.</p><p>② 갑은 <mark class="y">언제든지 서면 통지 없이</mark> 본 계약을 해지할 수 있다.</p><p>③ 본 계약과 관련한 분쟁은 갑의 본사 소재지 관할 법원으로 한다.</p><span class="cm">제안: 배상 한도 = 직전 12개월 위탁료</span></div>'+
 '<div class="sm"><span class="r"><b>2</b>높은 위험</span><span class="y"><b>3</b>검토 필요</span><span class="g"><b>7</b>이상 없음</span></div>'+
 '<div class="ls">'+c('계약 기간·자동갱신','1년, 해지 1개월 전 통지','ok')+c('대금 지급 조건','월말 마감 익월 15일','ok')+c('손해배상 한도 없음','제9조 ① 수정 요청 필요','no')+c('일방적 해지권','제9조 ② 쌍방 통지로 변경','no')+c('관할 법원','협의 필요','')+c('비밀유지 기간','계약 종료 후 3년','ok')+c('지식재산권 귀속','결과물 권리는 갑 귀속 · 협의','')+c('준거법·언어','대한민국 법 · 국문본 우선','ok')+'</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="수정 요청서를 만들었어요">수정요청서</span><span class="b1" data-tap="검토 의견을 저장했어요">검토의견 저장</span></div>'}};

/* 07 */
LX["웨딩 견적·계약 관리"]={cls:"s-b07",time:"11:03",cap:"예식 견적 확정과 계약 단계",
body:function(){
 function l(n,s,p){return '<div class="li"><p>'+n+'<small>'+s+'</small></p><b class="num">'+p+'</b></div>'}
 return '<div class="ph"><img src="lx/img/wedding-hall.jpg" alt=""><div class="ov"><small>2027. 04. 24 (토) 오후 1시</small><h4>그랜드 로즈홀 · 1부</h4></div><span class="bd">견적 v2</span></div>'+
 '<div class="st"><div class="s on"><i>✓</i>상담</div><u></u><div class="s on"><i>✓</i>견적</div><u></u><div class="s cur"><i>3</i>계약</div><u></u><div class="s"><i>4</i>잔금</div></div>'+
 '<div class="bl"><h5>김○○ ♥ 박○○ <small>하객 220명 보장 160</small></h5>'+l('대관료','웨딩홀 기본','₩ 5,500,000')+l('식대','160명 × ₩68,000','₩ 10,880,000')+l('스드메 패키지','드레스 3벌 · 메이크업','₩ 2,980,000')+l('꽃장식 · 연출','버진로드 업그레이드','₩ 1,200,000')+l('프로모션 할인','10월 계약 특가','- ₩ 1,500,000')+'<div class="tot"><span>총 견적</span><b class="num">₩ 19,060,000</b></div></div>'+
 '<div class="pay"><div><span>계약금 (10%)</span><b class="num">₩ 1,906,000</b></div><div class="d"><span>납부기한</span><b>10/18 (일)</b></div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="견적서 PDF를 저장했어요">견적서</span><span class="b1" data-tap="전자계약서를 발송했어요">전자계약서 발송</span></div>'}};

/* 08 */
LX["행사 좌석 배치"]={cls:"s-b08",time:"14:10",cap:"원형 테이블 좌석 배치도",
body:function(){
 var s='<rect x="95" y="6" width="150" height="26" rx="6" fill="#2A2F45"/><text x="170" y="23" text-anchor="middle" fill="#C9A86A" font-size="10" font-weight="700">STAGE</text>';
 var st={"2,1":"v","1,1":"v","0,0":"v"};
 for(var r=0;r<4;r++)for(var c=0;c<3;c++){
  var cx=55+c*115,cy=78+r*82,n=r*3+c+1,sel=n==5,fill=(n==5?8:n<=3?8:n>9?6:7),vip=n<=2;
  s+='<circle cx="'+cx+'" cy="'+cy+'" r="19" fill="'+(sel?"#C9A86A":"#1B1F33")+'" stroke="'+(sel?"#fff":vip?"#9B7BFF":"#3B4160")+'" stroke-width="'+(sel?2:1.2)+'" data-tap="T'+n+' 테이블을 선택했어요"/><text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="'+(sel?"#14172A":"#fff")+'" font-size="11" font-weight="700">T'+n+'</text>';
  for(var k=0;k<8;k++){var a=k*Math.PI/4,f=k<fill;s+='<circle cx="'+(cx+29*Math.cos(a)).toFixed(1)+'" cy="'+(cy+29*Math.sin(a)).toFixed(1)+'" r="5" fill="'+(f?(vip?"#9B7BFF":"#C9A86A"):"none")+'" stroke="'+(vip?"#9B7BFF":"#C9A86A")+'" stroke-width="1"/>'}}
 return H('좌석 배치','한빛상사 창립 20주년 만찬 · 10/24','<span class="cnt"><b class="num">168</b>/192석</span>')+
 '<div class="mp"><svg viewBox="0 0 340 372">'+s+'</svg><div class="lg"><span><u style="background:#9B7BFF"></u>VIP</span><span><u style="background:#C9A86A"></u>배정</span><span><u class="e"></u>빈 좌석</span></div></div>'+
 '<div class="sel"><div class="r"><b>T5 · 거래처 대표석</b><span>7 / 8석</span></div><div class="ch"><span>정○○ 대표</span><span>한○○ 이사</span><span>서○○ 부장</span><span>오○○</span><span>유○○</span><span>임○○</span><span>남○○</span><span class="add" data-tap="빈 좌석에 손님을 배정해요">+ 배정</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="미배정 24명을 보여줘요">미배정 24명</span><span class="b1" data-tap="좌석 배치를 확정했어요">배치 확정</span></div>'}};

/* 09 */
LX["촬영 스케줄 관리"]={cls:"s-b09",time:"8:30",cap:"스튜디오 룸·작가별 하루 일정",
body:function(){
 var hrs=["10","11","12","13","14","15","16","17"],h=hrs.map(function(x){return '<i>'+x+'</i>'}).join("");
 function b(r,s,l,t,n,k){return '<div class="bk '+k+'" style="grid-row:'+r+';grid-column:'+(s+1)+'/span '+l+'" data-tap="'+t+' 촬영을 열었어요"><b>'+t+'</b><small>'+n+'</small></div>'}
 return '<div class="ph"><img src="lx/img/wedding-studio.jpg" alt=""><div class="ov"><small>STUDIO ROSA</small><h4>10월 11일 일요일</h4></div><span class="n"><b>6</b>건 촬영</span></div>'+
 '<div class="dy"><span>목</span><span>금</span><span>토</span><span class="on"><b>11</b></span><span>월</span><span>화</span></div>'+
 '<div class="tm"><div class="hr"><s></s>'+h+'</div><div class="gd">'+
 '<em style="grid-row:1">A룸</em>'+b(1,1,2,'김○○ · 웨딩','드레스 3벌 · 오 작가','a')+b(1,4,2,'박○○ 커플','리허설 · 하 작가','b')+b(1,7,2,'정○○ 가족','돌 스냅','c')+
 '<em style="grid-row:2">B룸</em>'+b(2,2,3,'이○○ 프로필','증명·프로필 · 최 작가','b')+b(2,6,2,'한○○ 커플','스냅 · 오 작가','a')+
 '<em style="grid-row:3">야외</em>'+b(3,1,1,'세팅','','x')+b(3,3,3,'최○○ 야외스냅','선셋 포함 · 하 작가','c')+'<em style="grid-row:4">H&amp;M</em>'+b(4,1,2,'김○○','헤어·메이크업','b')+b(4,3,2,'박○○','헤어·메이크업','b')+b(4,6,2,'정○○ 가족','돌 메이크업','c')+'</div></div>'+
 '<div class="qs"><span><b class="num">2</b>상담 대기</span><span><b class="num">5</b>예약 문의</span><span><b class="num">3</b>의상 점검</span></div>'+'<div class="nx"><span class="tm2">13:00</span><p>다음 촬영 · 박○○ 커플<small>A룸 · 메이크업 완료 대기 · 소품 확인</small></p><span class="chk" data-tap="촬영 준비 체크를 완료했어요">준비 ✓</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="작가에게 알림을 보냈어요">작가 알림</span><span class="b1" data-tap="오늘 촬영 일정을 확정했어요">오늘 일정 확정</span></div>'}};

/* 10 */
LX["관리비 고지·납부 안내"]={cls:"s-b10",time:"9:00",cap:"세대별 관리비 고지서와 납부 현황",
body:function(){
 function l(n,p,b){return '<div class="li"><span>'+n+'</span><i style="width:'+b+'%"></i><b class="num">'+p+'</b></div>'}
 return '<div class="ph"><img src="lx/img/apt-complex.jpg" alt=""><div class="ov"><small>래미안 하늘마을 관리사무소</small><h4>2026년 10월 관리비</h4></div></div>'+
 '<div class="bill"><div class="h"><div><small>세대</small><b>101동 1204호</b></div><div class="r"><small>납부기한</small><b class="num">10/25</b></div></div>'+
 '<div class="am"><span>이번 달 납부금액</span><b class="num">₩ 187,420</b><em>전월 대비 ▼ 6,300</em></div>'+
 l('일반관리비','52,300',28)+l('청소·경비비','38,100',20)+l('전기료 (공용+세대)','47,860',26)+l('수도·난방','31,760',17)+l('장기수선충당금','17,400',9)+'<div class="dash"></div><div class="qr"><svg viewBox="0 0 30 30"><path d="M2 2h9v9H2zM19 2h9v9h-9zM2 19h9v9H2zM14 14h4v4h-4zM20 20h8v3h-8zM14 22h3v6h-3zM24 26h4v2h-4z" fill="#13213F"/></svg><p>가상계좌 신한 562-0000-1204<small>QR 스캔으로 간편 납부</small></p></div></div>'+
 '<div class="dg"><h5>동별 납부율</h5>'+[['101동',92],['102동',81],['103동',74],['104동',69]].map(function(d){return '<div><span>'+d[0]+'</span><i><u style="width:'+d[1]+'%"></u></i><b class="num">'+d[1]+'%</b></div>'}).join('')+'</div>'+'<div class="sts"><div><b class="num">1,042</b><span>고지 세대</span></div><div><b class="num">78%</b><span>납부 완료</span></div><div class="w"><b class="num">96</b><span>미납 안내</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="미납 96세대에 문자를 보냈어요">미납 문자</span><span class="b1" data-tap="1,042세대에 고지서를 발송했어요">고지서 일괄 발송</span></div>'}};

/* 11 */
LX["민원 접수·처리 추적"]={cls:"s-b11",time:"16:42",cap:"접수에서 완료까지 진행 스텝",
body:function(){
 function s(c,t,w,d){return '<div class="sp '+c+'"><i>'+(c=="dn"?"✓":c=="cu"?"●":"")+'</i><p><b>'+t+'</b><small>'+w+'</small></p><time class="num">'+d+'</time></div>'}
 return H('민원 상세','접수번호 C-1011-0042','<span class="pr">긴급</span>')+
 '<div class="tk"><div class="r1"><span class="cat">누수·설비</span><span class="sla">처리기한 D-1</span></div><h5>지하 2층 주차장 천장에서 물이 떨어집니다</h5><p>103동 라인 기둥 옆 B2-14 구역, 어제 비 온 뒤 계속 떨어지고 있어요. 차량 위라 위험합니다.</p><div class="ph"><img src="lx/img/parking-gate.jpg" alt=""><span>사진 2</span></div><small>접수자 최○○ (103동 805호) · 10/11 08:12</small></div>'+
 '<div class="spp">'+s('dn','접수 완료','관리사무소 · 자동 분류','08:12')+s('dn','담당 배정','시설팀 김○○ 주임','08:40')+s('cu','현장 확인·처리 중','방수 업체 출동 14:30 · 1차 점검','진행 중')+s('','처리 완료 보고','입주민 확인 대기','예정')+'</div>'+
 '<div class="sl"><div class="r1"><b>처리 경과</b><span class="num">18h / 24h</span></div><div class="bar"><i style="width:75%"></i></div><div class="nt"><span>✓ 문자 알림</span><span>✓ 앱 푸시</span><span>유사 민원 3건</span></div></div>'+'<div class="rep"><span class="av">김</span><p><b>시설팀 김○○</b>배관 누수로 확인, 내일 오전 중 보수 완료 예정입니다.</p></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="입주민에게 답변을 보냈어요">답변 보내기</span><span class="b1" data-tap="처리 완료로 보고했어요">처리 완료 보고</span></div>'}};

/* 12 */
LX["청소·방역 업체 정산"]={cls:"s-b12",time:"17:15",cap:"업체별 용역 정산서와 승인",
body:function(){
 function r(n,d,p,c){return '<tr><td>'+n+'<small>'+d+'</small></td><td class="num">'+p+'</td></tr>'}
 return H('용역 정산','2026년 9월분 · 업체 3곳','<span class="pill">승인 대기 2</span>')+
 '<div class="vd"><span class="on" data-tap="말끔청소 정산서를 열었어요">말끔청소</span><span data-tap="깔끔방역 정산서를 열었어요">깔끔방역</span><span data-tap="그린케어 정산서를 열었어요">그린케어</span></div>'+
 '<div class="rcp"><div class="hh"><b>정산서 <small>No. 2609-017</small></b><span class="st">검수 완료</span></div><table>'+
 r('상가 공용부 청소','주 5회 × 4주 · 20일','₩ 3,400,000')+r('계단·엘리베이터 광택','월 2회','₩ 640,000')+r('특수청소 (입주 청소)','3건 · 현장 확인','₩ 450,000')+r('폐기물 수거','대형 12포대','₩ 180,000')+r('결근·지각 공제','9/14 인원 1명 미투입','- ₩ 120,000')+'</table><div class="dsh"></div><div class="sum"><p><span>공급가액</span><b class="num">₩ 4,550,000</b></p><p><span>부가세 10%</span><b class="num">₩ 455,000</b></p><p class="tt"><span>정산 합계</span><b class="num">₩ 5,005,000</b></p></div></div>'+
 '<div class="vs">'+[['말끔청소','₩5,005,000','대기','w'],['깔끔방역','₩2,310,000','대기','w'],['그린케어','₩1,870,000','완료','d']].map(function(v){return '<div><b>'+v[0]+'</b><span class="num">'+v[1]+'</span><em class="'+v[3]+'">'+v[2]+'</em></div>'}).join('')+'</div>'+'<div class="ck"><span class="ok">✓ 세금계산서 수신</span><span class="ok">✓ 현장점검 4/4회</span><span class="no">! 지급일 10/15</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="보완을 요청했어요">보완요청</span><span class="b1" data-tap="₩5,005,000 정산을 승인했어요">정산 승인 · ₩5,005,000</span></div>'}};

/* 13 */
LX["태양광 발전량 모니터링"]={cls:"s-b13",time:"13:25",cap:"오늘 발전 곡선과 인버터 상태",
body:function(){
 var cur=[0,2,8,22,41,62,80,92,97,99,94,0],pr=[0,3,10,25,45,65,82,95,100,100,96,90,76,55,32,12,0];
 var w=300,h=96,pp=path([0,1,5,14,28,45,62,76,86,92,95,97,94],w,h,0,100);
 var ok=function(n,k,c){return '<div class="iv" data-tap="'+n+' 상세를 열었어요"><i class="'+c+'"></i><p>'+n+'<small>'+k+'</small></p><b class="num">'+(c=="e"?"점검":"")+'</b></div>'};
 return '<div class="ph"><img src="lx/img/solar-farm.jpg" alt=""><div class="ov"><small>햇살드림 1호 발전소 · 998kW</small><div class="big"><b class="num">3,842</b><span>kWh 오늘 누적</span></div></div></div>'+
 '<div class="kp"><div><span>현재 출력</span><b class="num">742<small>kW</small></b></div><div><span>이용률</span><b class="num">74%</b></div><div><span>오늘 수익</span><b class="num">₩ 61만</b></div></div>'+
 '<div class="gr"><div class="r"><b>시간별 발전량</b><span><u></u>오늘 <u class="y"></u>어제</span></div><svg viewBox="0 0 300 110" preserveAspectRatio="none"><path d="M0 30H300M0 62H300" stroke="rgba(255,255,255,.07)"/><path d="'+pp+' V'+h+' H0Z" fill="url(#g13)" /><path d="'+pp+'" fill="none" stroke="#FFB020" stroke-width="2.2"/><path d="M0 96C60 96 80 80 130 40C170 14 210 14 240 38C265 55 280 80 300 96" fill="none" stroke="rgba(255,255,255,.35)" stroke-dasharray="3 3"/><defs><linearGradient id="g13" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFB020" stop-opacity=".4"/><stop offset="1" stop-color="#FFB020" stop-opacity="0"/></linearGradient></defs><circle cx="'+(12*w/12)+'" cy="'+(h-94*0.96).toFixed(0)+'" r="4" fill="#fff"/></svg><div class="ax"><span>6시</span><span>9시</span><span>12시</span><span>15시</span><span>18시</span></div></div>'+
 '<div class="ivs"><h5>인버터 상태 <small>8대 중 7대 정상</small></h5>'+ok('INV-03','출력 98.1kW','o')+ok('INV-05','출력 96.4kW','o')+ok('INV-07','출력 41.6kW · 효율 저하','e')+ok('INV-01','출력 99.0kW','o')+'</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="점검 요청을 접수했어요">점검 요청</span><span class="b1" data-tap="발전 리포트를 저장했어요">발전 리포트 저장</span></div>'}};

/* 14 */
LX["설치 견적·시공 관리"]={cls:"s-b14",time:"10:30",cap:"견적서에서 시공 공정까지",
body:function(){
 function p(t,d,k){return '<div class="pr '+k+'"><i>'+(k=="dn"?"✓":"")+'</i><b>'+t+'</b><small>'+d+'</small></div>'}
 return '<div class="ph"><img src="lx/img/solar-rooftop.jpg" alt=""><span class="bd">시공 진행 중</span><div class="ov"><h4>김○○ 님 상가 옥상</h4><small>경기 성남 · 접수 SP-26-0187</small></div></div>'+
 '<div class="sp"><div><span>설치 용량</span><b class="num">49.5<small>kW</small></b></div><div><span>패널</span><b class="num">90<small>장</small></b></div><div><span>예상 회수</span><b class="num">5.8<small>년</small></b></div></div>'+
 '<div class="qt"><div class="r"><b>견적 금액</b><b class="num">₩ 58,400,000</b></div><div class="sub"><span>국고·지자체 보조 <b class="num">- 9,800,000</b></span><span>자부담 <b class="num">48,600,000</b></span></div></div>'+
 '<h5>시공 공정<small>10/08 ~ 10/18</small></h5>'+
 '<div class="gp">'+p('구조물 설치','10/08~09','dn')+p('패널 거치','10/10~11','cu')+p('배선·인버터','10/14~15','')+p('계통연계 검사','10/17~18','')+'</div>'+
 '<div class="mt"><h5 style="margin:0 0 4px">자재 입고</h5>'+[['태양광 패널 600W','90 / 90장',1],['인버터 50kW','1 / 1대',1],['구조물·레일 세트','2 / 3팔레트',0]].map(function(m){return '<div><i class="'+(m[2]?'o':'w')+'"></i><span>'+m[0]+'</span><b class="num">'+m[1]+'</b></div>'}).join('')+'</div>'+'<div class="sd"><div class="r"><span>패널 거치 진행률</span><b class="num">62 / 90장</b></div><div class="bar"><i style="width:69%"></i></div><small>현장 책임 이○○ · 오늘 기상 맑음, 풍속 3m/s 작업 가능</small></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="고객에게 진행 사진을 보냈어요">사진 전송</span><span class="b1" data-tap="시공 일정을 확정했어요">시공 일정 확정</span></div>'}};

/* 15 */
LX["전기요금 절감 리포트"]={cls:"s-b15",time:"9:50",cap:"월간 절감 효과 리포트",
body:function(){
 var m=[62,58,66,71,74,69,64,61,57],mx=80,bars=m.map(function(v,i){var x=i*30+8,hh=v*1.1,a=i>=5;return '<rect x="'+x+'" y="'+(100-hh)+'" width="20" height="'+hh+'" rx="4" fill="'+(a?"#2ED6A1":"rgba(255,255,255,.22)")+'"/><text x="'+(x+10)+'" y="114" text-anchor="middle" fill="rgba(255,255,255,.6)" font-size="8">'+(i+2)+'월</text>'}).join("");
 function r(n,a,b,s){return '<div class="rw"><p>'+n+'<small>'+a+' → '+b+'</small></p><b class="num">'+(s?'-'+s+'%':'+2,050<small>kWh</small>')+'</b></div>'}
 return H('에너지 리포트','2026년 9월 · 한빛물류센터','<span class="bdg">PDF</span>')+
 '<div class="hero"><small>9월 절감액</small><b class="num">₩ 2,184,000</b><p>작년 동월 대비 <em>▼ 17.6%</em> · 3,420kWh 절약</p><div class="don"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="9"/><circle cx="40" cy="40" r="30" fill="none" stroke="#fff" stroke-width="9" stroke-dasharray="112 189" transform="rotate(-90 40 40)" stroke-linecap="round"/></svg><span>목표<br><b>59%</b></span></div></div>'+
 '<div class="cd"><div class="r"><b>월별 요금 (백만원)</b><span>태양광·LED 도입 후</span></div><svg viewBox="0 0 280 120">'+bars+'<path d="M0 100H280" stroke="rgba(255,255,255,.2)"/></svg></div>'+
 '<div class="cmp"><div><span>요금</span><b class="num">₩ 10.2M</b><small>전년 ₩ 12.4M</small></div><div><span>피크전력</span><b class="num">412kW</b><small>전년 486kW</small></div></div>'+
 '<div class="rws"><h5>절감 요인</h5>'+r('LED 조명 교체','1,820kWh','1,310kWh','28')+r('옥상 태양광 자가소비','0','2,050kWh','')+'</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="담당자에게 공유했어요">공유</span><span class="b1" data-tap="리포트 PDF를 저장했어요">리포트 PDF 저장</span></div>'}};
})();
