(function(){
"use strict";
var LX=window.LX=window.LX||{};
var P={
search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
truck:'<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/>',
back:'<path d="M15 5l-7 7 7 7"/>',
more:'<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
check:'<path d="M4 12.5l5 5L20 6.5"/>',
alert:'<path d="M12 4v10M12 18v2"/>',
camera:'<path d="M3 8h4l2-3h6l2 3h4v12H3z"/><circle cx="12" cy="13.5" r="4"/>',
image:'<rect x="3" y="4" width="18" height="16"/><circle cx="9" cy="10" r="2"/><path d="M3 18l6-5 4 3 3-2 5 4"/>',
clip:'<path d="M20 11l-8 8a5 5 0 01-7-7l8-8a3.5 3.5 0 015 5l-8 8a2 2 0 01-3-3l7-7"/>',
card:'<rect x="2" y="5" width="20" height="14"/><path d="M2 10h20M6 15h4"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
drop:'<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',
leaf:'<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15zM5 19l8-8"/>',
share:'<path d="M12 3v12M7 8l5-5 5 5M5 13v8h14v-8"/>',
cal:'<rect x="3" y="5" width="18" height="16"/><path d="M3 10h18M8 3v4M16 3v4"/>',
file:'<path d="M6 3h8l5 5v13H6zM14 3v5h5M9 13h7M9 17h7"/>',
bell:'<path d="M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4"/>',
pin:'<path d="M12 21s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7"/>',
wrench:'<path d="M14 6a4 4 0 005 5l-9 9a2.5 2.5 0 01-4-4l9-9a4 4 0 00-1-1z"/>',
pen:'<path d="M4 20l1-5L16 4l4 4L9 19zM13 7l4 4"/>',
heart:'<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/>',
ring:'<circle cx="12" cy="15" r="6"/><path d="M8 5l2 3h4l2-3-2-2h-4z"/>',
mail:'<rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/>',
chev:'<path d="M9 5l7 7-7 7"/>',
grid:'<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>',
home:'<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
phone:'<path d="M5 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z"/>',
msg:'<path d="M4 5h16v11H9l-5 4z"/>',
star:'<path d="M12 3l2.7 5.8 6.3.8-4.6 4.4 1.2 6.2L12 17.2 6.4 20.2l1.2-6.2L3 9.6l6.3-.8z"/>',
dl:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
chair:'<path d="M7 4h10v8H7zM5 12h14v4H5zM7 16v4M17 16v4"/>',
thermo:'<path d="M10 14V5a2 2 0 014 0v9a4 4 0 11-4 0z"/>',
fan:'<circle cx="12" cy="12" r="1.5"/><path d="M12 10.5C12 6 14 3 17 4c1 3-2 5-5 6.5zM13.5 12c4.5 0 7.500 2 6.500 5-3 1-5-2-6.500-5zM12 13.5C12 18 10 21 7 20c-1-3 2-5 5-6.500zM10.500 12C6 12 3 10 4 7c3-1 5 2 6.500 5z"/>',
sheet:'<rect x="5" y="3" width="14" height="18"/><path d="M8 8h8M8 12h8M8 16h5"/>',
down:'<path d="M5 9l7 7 7-7"/>',
bag:'<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 016 0v2"/>',
cart:'<path d="M3 4h3l2 12h11l2-8H7"/><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
tool:'<path d="M3 21l8-8M14 6l4-4 4 4-4 4zM11 9l4 4"/>',
panel:'<path d="M3 8l2-4h14l2 4v9H3zM3 12h18M9 8l-1 9M15 8l1 9"/>',
leafy:'<path d="M12 21V10M12 10c-4 0-6-3-6-6 4 0 6 2 6 6zM12 13c4 0 6-3 6-6-4 0-6 2-6 6z"/>'
};
function ic(n,sw,o){o=o||{};return '<svg class="i" viewBox="0 0 24 24" fill="'+(o.f||'none')+'" stroke="currentColor" stroke-width="'+sw+'" stroke-linecap="'+(o.c||'round')+'" stroke-linejoin="'+(o.j||'round')+'">'+P[n]+'</svg>'}
function lg(n){return '<img class="lg" src="lx/img/ic/'+n+'.jpg" alt="">'}
function path(arr,w,h,mn,mx){return arr.map(function(v,i){return (i?"L":"M")+(i*w/(arr.length-1)).toFixed(1)+" "+(h-(v-mn)/(mx-mn)*h).toFixed(1)}).join("")}

/* 01 팜고 — kraft crate */
LX["산지 출하 관리"]={cls:"s-b01",time:"7:48",cap:"농가별 출하 수량·등급을 한눈에",
body:function(){
 function f(n,who,v,q,a,b,c,st,cl,no){return '<div class="fm" data-tap="'+n+' 상세를 열었어요"><i class="lt num">'+no+'</i><div class="mn"><div class="top"><div><b>'+n+'</b><small>'+who+' · '+v+'</small></div><span class="st '+cl+'">'+st+'</span></div><div class="bar"><i style="flex:'+a+'">특</i><i style="flex:'+b+'">상</i><i style="flex:'+c+'">보통</i></div><div class="q"><b class="num">'+q+'</b>박스<span class="num">특 '+a+' · 상 '+b+' · 보통 '+c+'</span></div></div></div>'}
 var cr='';for(var i=0;i<10;i++)cr+='<u'+(i<6?' class="on"':'')+'></u>';
 return '<div class="bh">'+lg(15)+'<b>팜고</b><em>산지 출하 관리</em><span class="ib" data-tap="날짜 필터를 열었어요">'+ic('search',2.6,{c:'square',j:'miter'})+'</span></div>'+
 '<div class="tg"><span>10월 11일(일)</span><span>부사 수확 6주차</span><span class="num">LOT 1011</span></div>'+
 '<div class="ph"><img src="lx/img/farm-apples.jpg" alt=""><div class="ov"><span>오늘 출하 예정</span><b class="num">4.8<small>톤</small></b></div><div class="cr"><div>'+cr+'</div><b class="num">62%</b><span>선별 완료</span></div></div>'+
 '<div class="tb"><span class="on">전체 12</span><span>선별중 3</span><span>출하대기 5</span><span>완료 4</span></div>'+
 f('햇살농원','박○○','부사',320,46,38,16,'출하대기','a','01')+f('청송 하늘과수원','이○○','홍로',210,31,45,24,'선별중','b','02')+f('다온농장','최○○','부사',450,52,36,12,'출하대기','a','03')+
 '<div class="tr">'+ic('truck',2.4,{c:'square',j:'miter'})+'<p><b>집하차 2호 · 14:00 출발</b><small>적재 <span class="num">1,180 / 1,400</span>박스 · 공판장 도착 17:30</small></p><span class="pg"><i></i></span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="출하 명세서를 열었어요">명세서</span><span class="b1" data-tap="4개 농가 출하를 확정했어요">출하 확정 · <span class="num">1,180</span>박스</span></div>'}};

/* 02 그린센스 — sensor HUD */
LX["스마트팜 센서 모니터링"]={cls:"s-b02",time:"6:20",cap:"온습도·CO₂ 게이지와 환기 제어",
body:function(){
 function g(v,mn,mx,lab,unit,ok,col){var f=(v-mn)/(mx-mn),n=24,t='';for(var i=0;i<n;i++){var a=Math.PI*(1.0+1.0*i/(n-1)),on=i/(n-1)<=f;t+='<line x1="'+(50+34*Math.cos(a)).toFixed(1)+'" y1="'+(52+34*Math.sin(a)).toFixed(1)+'" x2="'+(50+42*Math.cos(a)).toFixed(1)+'" y2="'+(52+42*Math.sin(a)).toFixed(1)+'" stroke="'+(on?col:'#1E3A2A')+'" stroke-width="2.2"/>'}
  return '<div class="gg"><svg viewBox="0 0 100 60">'+t+'<text x="50" y="50" text-anchor="middle" fill="#E8FFF0" font-size="15" font-family="JetBrains Mono,monospace" font-weight="700">'+v+'</text></svg><small>'+lab+' <u>'+unit+'</u></small><em class="'+ok+'">'+(ok=="w"?"WARN":"OK")+'</em></div>'}
 var t=[21,20,19.5,19,19.5,21,23,25,26.5,27.5,28,27.2,26.8],tp=t.map(function(v,i){var x=i*25,y=70-(v-17)/13*70;return (i?"H"+x+" V":"M"+x+" ")+y.toFixed(1)}).join("");
 return '<div class="bh">'+lg(16)+'<b>그린센스</b><span class="live">● LIVE</span></div>'+
 '<div class="hd"><small>SITE-A / ZONE 01</small><h4>A동 딸기 하우스</h4><p><span class="num">24</span> sensors · updated <span class="num">3s</span> ago</p></div>'+
 '<div class="ph"><img src="lx/img/farm-greenhouse.jpg" alt=""><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i><span class="tag">● NOMINAL</span><span class="tag r">DAY <b class="num">38</b></span></div>'+
 '<div class="gs">'+g(26.8,0,40,'온도','℃','o','#39FF88')+g(72,0,100,'습도','%','o','#3CD6FF')+g(840,0,1500,'CO₂','ppm','w','#FFC53D')+'</div>'+
 '<div class="cd"><div class="r"><b>TEMP / 24H</b><span class="num">MAX 28.0 · MIN 19.0</span></div><svg viewBox="0 0 300 80" preserveAspectRatio="none"><rect x="0" y="20" width="300" height="26" fill="rgba(57,255,136,.08)"/><path d="M0 20H300M0 46H300M0 72H300" stroke="rgba(57,255,136,.18)" stroke-dasharray="2 4"/><path d="'+tp+'" transform="translate(0,3)" fill="none" stroke="#39FF88" stroke-width="1.6"/></svg><div class="ax num"><span>00</span><span>06</span><span>12</span><span>NOW</span></div></div>'+
 '<div class="ec"><div><span>EC</span><b class="num">1.8</b></div><div><span>pH</span><b class="num">6.1</b></div><div><span>토양수분</span><b class="num">34%</b></div><div><span>조도</span><b class="num">42k</b></div></div>'+
 '<div class="cv"><div><p>천창 환기<small>온도 27℃ 초과 시 자동</small></p><span class="sw" data-sw></span></div><div><p>양액 공급<small>다음 급액 13:30 · 4분</small></p><span class="sw" data-sw></span></div><div><p>보온 커튼<small>일몰 후 자동 닫힘 · 18:10</small></p><span class="sw off" data-sw></span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="천창을 50% 열었어요">[ 천창 환기 열기 ]</span></div>'}};

/* 03 포도마켓 — playful purple/lime */
LX["농산물 온라인 주문 관리"]={cls:"s-b03",time:"9:12",cap:"주문 접수부터 송장 입력까지",
body:function(){
 function o(id,nm,it,p,st,cl,tr){return '<div class="od" data-tap="'+id+' 주문을 열었어요"><div class="r1"><b class="num">#'+id+'</b><span class="st '+cl+'">'+st+'</span></div><p>'+nm+' · '+it+'</p><div class="r2"><b class="num">₩'+p+'</b>'+(tr?'<span class="tn num">CJ '+tr+'</span>':'<span class="in">송장번호 입력 '+ic('chev',3)+'</span>')+'</div></div>'}
 return '<div class="bh">'+lg(17)+'<b>포도마켓</b><span class="ib">'+ic('bell',2.4)+'<i></i></span></div>'+
 '<div class="top"><img src="lx/img/farm-muscat.jpg" alt=""><div class="tt"><small>머스캣농원 스토어</small><h4>주문 관리</h4></div></div>'+
 '<div class="kp"><div><b class="num">24</b><span>신규 주문</span></div><div class="hot"><b class="num">9</b><span>송장 입력</span></div><div><b class="num">13</b><span>배송 중</span></div><div><b class="num">2</b><span>교환·반품</span></div></div>'+
 '<div class="ch"><span class="on">전체</span><span>결제완료</span><span>송장입력</span><span>배송중</span><span>취소</span></div>'+
 o('1011-0382','김○○','샤인머스캣 2kg × 2','78,000','송장 대기','w')+
 o('1011-0377','이○○','샤인머스캣 3kg × 1 · 선물포장','52,000','송장 대기','w')+
 o('1010-0351','박○○','샤인머스캣 2kg × 4','152,000','배송중','g','6841 2290 7731')+
 o('1010-0344','최○○','샤인머스캣 1kg × 3','63,500','배송중','g','6841 2290 5518')},
foot:function(){return '<div class="ft"><span class="b2" data-tap="엑셀로 내려받았어요">엑셀</span><span class="b1" data-tap="송장 9건을 일괄 등록했어요">송장 일괄 등록 (<span class="num">9</span>건)</span></div>'}};

/* 04 택스캘 — official tax office */
LX["세무 신고 일정 관리"]={cls:"s-b04",time:"10:05",cap:"거래처별 신고 기한 캘린더",
body:function(){
 var ds="일월화수목금토".split("").map(function(d,i){return '<i class="'+(i==0?"su":"")+'">'+d+'</i>'}).join(""),c="";
 var mk={12:"r",15:"b",26:"r",30:"b",31:"r"};
 for(var i=0;i<4;i++)c+='<s></s>';
 for(var d=1;d<=31;d++)c+='<s class="'+(d==11?"td":"")+'"><em class="num">'+d+'</em>'+(mk[d]?'<u class="'+mk[d]+'"></u>':'')+'</s>';
 function r(pc,n,cnt,cl,tag){return '<div class="rw" data-tap="'+n+' 신고 현황을 열었어요"><span class="dd '+cl+' num">'+tag+'</span><p>'+n+'<small>'+cnt+'</small><i class="pb"><u class="'+cl+'" style="width:'+pc+'%"></u></i></p><b class="num">'+pc+'%</b></div>'}
 return '<div class="lh">'+lg(18)+'<div><b>택스캘</b><small>TAX CALENDAR · 세무 신고 일정 관리</small></div><span class="stp">접수<br>필</span></div>'+
 '<div class="ti"><h4>신고 캘린더</h4><span class="num">2026. 10 · 담당 거래처 38곳</span></div>'+
 '<div class="cal"><div class="wk">'+ds+'</div><div class="gr">'+c+'</div></div>'+
 '<div class="lgd"><span><u class="r"></u>납부 마감</span><span><u class="b"></u>신고 마감</span><span><u class="t"></u>오늘</span></div>'+
 '<h5>다가오는 기한<small>D-day 순</small></h5>'+
 r(82,'원천세 신고·납부','10/12(월) · 완료 31 / 38곳','r','D-1')+
 r(41,'부가세 예정신고 (개인)','10/26(월) · 접수 12 / 29곳','b','D-15')+
 r(18,'법인세 중간예납 안내','10/31(토→11/2) · 자료수집 4 / 22곳','b','D-21')+r(55,'지방소득세 확정 안내','11/02(월) · 안내 완료 17 / 31곳','b','D-22')},
foot:function(){return '<div class="ft"><span class="b1" data-tap="미제출 7곳에 알림을 보냈어요">미제출 거래처 7곳에 알림 보내기</span></div>'}};

/* 05 찰칵증빙 — friendly mint */
LX["고객 증빙 수집 포털"]={cls:"s-b05",time:"20:31",cap:"고객이 영수증을 올리는 제출 화면",
body:function(){
 var dt='';for(var i=0;i<24;i++)dt+='<u'+(i<18?' class="on"':'')+'></u>';
 function t(l,s,rot){return '<div class="rc '+s+'" style="transform:rotate('+rot+'deg)"><div class="pp"><i></i><i></i><i></i><b></b></div><span>'+l+'</span>'+(s=="ok"?'<em>'+ic('check',3.2)+'</em>':'')+'</div>'}
 return '<div class="bh">'+lg(19)+'<b>찰칵증빙</b><span class="fi">한결세무회계</span></div>'+
 '<div class="gr"><h4>안녕하세요,<br>이○○ 대표님</h4><p>10월 증빙을 올려주세요 · 제출기한 <b class="num">10/20</b></p></div>'+
 '<div class="pgc"><div class="r"><b>이번 달 제출 현황</b><span class="num"><em>18</em> / 24건</span></div><div class="dots">'+dt+'</div><small>6건만 더 올리면 끝! 담당 김○○ 세무사</small></div>'+
 '<div class="cam" data-tap="카메라를 열었어요"><span class="rg"></span><span class="rg r2"></span><span class="lens">'+ic('camera',2.2)+'</span><b>영수증 찰칵!</b><small>자동으로 금액·거래처를 읽어드려요</small></div>'+
 '<div class="up"><span data-tap="앨범에서 선택해요">'+ic('image',2.2)+'앨범</span><span data-tap="파일을 선택해요">'+ic('clip',2.2)+'파일</span><span data-tap="카드내역을 연동해요">'+ic('card',2.2)+'카드내역</span></div>'+
 '<div class="rcs">'+t('식자재 ₩184,000','ok',-3)+t('택배 ₩12,500','ok',2)+t('주유 ₩68,200','ld',-2)+t('???','no',3)+'</div>'+
 '<div class="ms"><b>확인이 필요해요</b><p>10/03 ₩230,000 이체 건 — 어떤 지출인가요?</p><div><span data-tap="복리후생비로 분류했어요">복리후생</span><span data-tap="접대비로 분류했어요">접대비</span><span data-tap="기타로 분류했어요">기타</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b1" data-tap="증빙 18건을 제출했어요">증빙 제출하기</span></div>'}};

/* 06 로체크 — law firm paper */
LX["계약서 검토 체크리스트"]={cls:"s-b06",time:"15:20",cap:"조항 위험도 표시와 점검표",
body:function(){
 function c(t,s,k,nt){return '<div class="ck '+k+'" data-tap="'+t+' 항목을 열었어요"><span class="bx">'+(k=="ok"?ic('check',3,{c:'butt',j:'miter'}):k=="no"?'!':'')+'</span><p>'+t+'<small>'+s+'</small></p></div>'}
 return '<div class="lh">'+lg(20)+'<div><b>로체크</b><small>ROCHECK · 계약 검토 노트</small></div><span class="stp">검토<br><i class="num">8/12</i></span></div>'+
 '<div class="ti"><h4>업무위탁계약서</h4><span>주식회사 가온로지스 · v3 · 12쪽</span></div>'+
 '<div class="doc"><div class="pg">제 9 조 (손해배상)</div><p>① 을은 본 계약 위반으로 갑에게 손해를 입힌 경우 <mark class="r">그 손해 일체 및 간접손해, 일실이익을 배상</mark>하여야 한다.</p><p>② 갑은 <mark class="y">언제든지 서면 통지 없이</mark> 본 계약을 해지할 수 있다.</p><p>③ 본 계약과 관련한 분쟁은 갑의 본사 소재지 관할 법원으로 한다.</p><span class="cm">→ 배상 한도 = 직전 12개월 위탁료로 제안</span></div>'+
 '<div class="sm"><span class="r"><b class="num">2</b>높은 위험</span><span class="y"><b class="num">3</b>검토 필요</span><span class="g"><b class="num">7</b>이상 없음</span></div>'+
 '<div class="ls">'+c('계약 기간·자동갱신','1년, 해지 1개월 전 통지','ok')+c('대금 지급 조건','월말 마감 익월 15일','ok')+c('손해배상 한도 없음','제9조 ① 수정 요청 필요','no')+c('일방적 해지권','제9조 ② 쌍방 통지로 변경','no')+c('관할 법원','협의 필요','')+c('비밀유지 기간','계약 종료 후 3년','ok')+c('지식재산권 귀속','결과물 권리는 갑 귀속 · 협의','')+'</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="수정 요청서를 만들었어요">수정요청서</span><span class="b1" data-tap="검토 의견을 저장했어요">검토의견 저장</span></div>'}};

/* 07 베일앤코 — luxury bridal */
LX["웨딩 견적·계약 관리"]={cls:"s-b07",time:"11:03",cap:"예식 견적 확정과 계약 단계",
body:function(){
 function l(n,s,p){return '<div class="li"><p>'+n+'<small>'+s+'</small></p><i></i><b class="num">'+p+'</b></div>'}
 function sp(k,t,n){return '<div class="s '+k+'"><i>'+(k=="on"?ic('check',2.6,{c:'butt'}):'')+(k=="cur"?'<u></u>':'')+'</i><span>'+t+'</span></div>'}
 return '<div class="bh">'+lg(21)+'<b>Veil &amp; Co.</b><em>베일앤코</em></div>'+
 '<div class="ar"><div class="fr"><img src="lx/img/wedding-hall.jpg" alt=""></div><span class="bd">견적 v2</span></div>'+
 '<div class="ev"><small class="num">24 · APRIL · 2027</small><h4>그랜드 로즈홀 · 1부</h4><p>토요일 오후 1시</p></div>'+
 '<div class="st">'+sp('on','상담')+'<u></u>'+sp('on','견적')+'<u class="h"></u>'+sp('cur','계약')+'<u class="h"></u>'+sp('','잔금')+'</div>'+
 '<div class="bl"><h5>김○○ '+ic('heart',1.6)+' 박○○ <small>하객 220명 · 보장 160</small></h5>'+l('대관료','웨딩홀 기본','5,500,000')+l('식대','160명 × 68,000','10,880,000')+l('스드메 패키지','드레스 3벌 · 메이크업','2,980,000')+l('꽃장식 · 연출','버진로드 업그레이드','1,200,000')+l('프로모션 할인','10월 계약 특가','- 1,500,000')+'<div class="tot"><span>TOTAL</span><b class="num">₩19,060,000</b></div></div>'+
 '<div class="pay"><div><span>계약금 (10%)</span><b class="num">₩1,906,000</b></div><div class="d"><span>납부기한</span><b>10/18 (일)</b></div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="견적서 PDF를 저장했어요">견적서</span><span class="b1" data-tap="전자계약서를 발송했어요">전자계약서 발송</span></div>'}};

/* 08 시팅 — gala navy/gold */
LX["행사 좌석 배치"]={cls:"s-b08",time:"14:10",cap:"원형 테이블 좌석 배치도",
body:function(){
 var s='<path d="M95 30h150l-10-24H105z" fill="url(#h8)" stroke="#D4AF37" stroke-width="1"/><text x="170" y="22" text-anchor="middle" fill="#D4AF37" font-size="9" letter-spacing="4" font-family="Syne,sans-serif" font-weight="700">STAGE</text><defs><pattern id="h8" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0v4" stroke="#D4AF37" stroke-opacity=".35"/></pattern></defs>';
 for(var r=0;r<4;r++)for(var c=0;c<3;c++){
  var cx=55+c*115,cy=82+r*80,n=r*3+c+1,sel=n==5,fill=(n==5?7:n<=3?8:n>9?6:7),vip=n<=2;
  s+='<circle cx="'+cx+'" cy="'+cy+'" r="18" fill="'+(sel?"#D4AF37":"#0E1740")+'" stroke="'+(vip?"#F4E3A0":"#D4AF37")+'" stroke-width="'+(sel?0:vip?1.6:.8)+'" data-tap="T'+n+' 테이블을 선택했어요"/>'+(vip?'<circle cx="'+cx+'" cy="'+cy+'" r="14.500" fill="none" stroke="#F4E3A0" stroke-width=".5"/>':'')+'<text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="'+(sel?"#0A1030":"#D4AF37")+'" font-size="11" font-family="Syne,sans-serif" font-weight="700">'+n+'</text>';
  for(var k=0;k<8;k++){var a=k*Math.PI/4,f=k<fill,x=cx+28*Math.cos(a),y=cy+28*Math.sin(a);s+='<rect x="-3.200" y="-3.200" width="6.400" height="6.400" transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate(45)" fill="'+(f?(vip?"#F4E3A0":"#D4AF37"):"none")+'" stroke="'+(vip?"#F4E3A0":"#D4AF37")+'" stroke-width=".8"/>'}}
 return '<div class="bh">'+lg(22)+'<b>SEATING</b><em>시팅</em></div>'+
 '<div class="hd"><span class="dm"></span><small class="num">10 · 24 · GALA DINNER</small><h4>한빛상사 창립 20주년 만찬</h4><p><b class="num">168</b> / 192석 배정</p></div>'+
 '<div class="mp"><svg viewBox="0 0 340 372">'+s+'</svg><div class="lg2"><span><u class="v"></u>VIP</span><span><u></u>배정</span><span><u class="e"></u>빈 좌석</span></div></div>'+
 '<div class="sel"><div class="r"><b>T5 · 거래처 대표석</b><span class="num">7 / 8</span></div><div class="ch"><span>정○○ 대표</span><span>한○○ 이사</span><span>서○○ 부장</span><span>오○○</span><span>유○○</span><span>임○○</span><span>남○○</span><span class="add" data-tap="빈 좌석에 손님을 배정해요">+ 배정</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="미배정 24명을 보여줘요">미배정 24명</span><span class="b1" data-tap="좌석 배치를 확정했어요">배치 확정</span></div>'}};

/* 09 스튜디오B — mono editorial */
LX["촬영 스케줄 관리"]={cls:"s-b09",time:"8:30",cap:"스튜디오 룸·작가별 하루 일정",
body:function(){
 var hrs=["10","11","12","13","14","15","16","17"],h=hrs.map(function(x){return '<i>'+x+'</i>'}).join("");
 function b(r,s,l,t,n,k){return '<div class="bk '+k+'" style="grid-row:'+r+';grid-column:'+(s+1)+'/span '+l+'" data-tap="'+t+' 촬영을 열었어요"><b>'+t+'</b><small>'+n+'</small></div>'}
 return '<div class="bh">'+lg(23)+'<b>STUDIO B</b><span class="n"><b class="num">6</b> SHOOTS</span></div>'+
 '<div class="ph"><img src="lx/img/wedding-studio.jpg" alt=""><h4>일요일<br><span class="num">10.11</span></h4></div>'+
 '<div class="dy"><span>목<b class="num">08</b></span><span>금<b class="num">09</b></span><span>토<b class="num">10</b></span><span class="on">일<b class="num">11</b></span><span>월<b class="num">12</b></span><span>화<b class="num">13</b></span></div>'+
 '<div class="tm"><div class="hr num"><s></s>'+h+'</div><div class="gd">'+
 '<em style="grid-row:1">A</em>'+b(1,1,2,'김○○ · 웨딩','드레스 3벌 · 오 작가','a')+b(1,4,2,'박○○ 커플','리허설 · 하 작가','b')+b(1,7,2,'정○○ 가족','돌 스냅','c')+
 '<em style="grid-row:2">B</em>'+b(2,2,3,'이○○ 프로필','증명·프로필 · 최 작가','b')+b(2,6,2,'한○○ 커플','스냅 · 오 작가','a')+
 '<em style="grid-row:3">OUT</em>'+b(3,1,1,'세팅','','x')+b(3,3,3,'최○○ 야외스냅','선셋 포함 · 하 작가','c')+'<em style="grid-row:4">H&amp;M</em>'+b(4,1,2,'김○○','헤어·메이크업','b')+b(4,3,2,'박○○','헤어·메이크업','b')+b(4,6,2,'정○○ 가족','돌 메이크업','c')+'</div></div>'+
 '<div class="qs"><span><b class="num">2</b>상담 대기</span><span><b class="num">5</b>예약 문의</span><span><b class="num">3</b>의상 점검</span></div>'+'<div class="nx"><span class="tm2 num">13:00</span><p>다음 촬영 · 박○○ 커플<small>A룸 · 메이크업 완료 대기 · 소품 확인</small></p><span class="chk" data-tap="촬영 준비 체크를 완료했어요">준비 완료</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="작가에게 알림을 보냈어요">작가 알림</span><span class="b1" data-tap="오늘 촬영 일정을 확정했어요">오늘 일정 확정 →</span></div>'}};

/* 10 우리집관리비 — utility bill */
LX["관리비 고지·납부 안내"]={cls:"s-b10",time:"9:00",cap:"세대별 관리비 고지서와 납부 현황",
body:function(){
 var it=[['일반관리비','52,300',28],['청소·경비비','38,100',20],['전기료 (공용+세대)','47,860',26],['수도·난방','31,760',17],['장기수선충당금','17,400',9]];
 function l(x,i){return '<div class="li"><i class="k'+i+'"></i><span>'+x[0]+'</span><u></u><b class="num">'+x[1]+'</b></div>'}
 function dots(p){var s='';for(var i=0;i<20;i++)s+='<u'+(i<Math.round(p/5)?' class="on"':'')+'></u>';return s}
 return '<div class="bh">'+lg(24)+'<div><b>우리집관리비</b><small>래미안 하늘마을 관리사무소</small></div><span class="ib">'+ic('bell',2)+'</span></div>'+
 '<div class="bill"><div class="top"><div><small>2026년 10월분</small><h4>관리비 고지서</h4></div><img src="lx/img/apt-complex.jpg" alt=""></div>'+
 '<div class="h"><div><small>세대</small><b>101동 1204호</b></div><div class="r"><small>납부기한</small><b class="num">2026.10.25</b></div></div>'+
 '<div class="am"><span>이번 달 납부금액</span><b class="num">₩187,420</b><em>전월 대비 ▼ 6,300</em></div>'+
 '<div class="sb">'+it.map(function(x,i){return '<i class="k'+i+'" style="flex:'+x[2]+'"></i>'}).join('')+'</div>'+
 it.map(l).join('')+'<div class="dash"></div><div class="qr"><svg viewBox="0 0 30 30"><path d="M2 2h9v9H2zM19 2h9v9h-9zM2 19h9v9H2zM14 14h4v4h-4zM20 20h8v3h-8zM14 22h3v6h-3zM24 26h4v2h-4z" fill="#0F2A5C"/></svg><p>가상계좌 신한 562-0000-1204<small>QR 스캔으로 간편 납부</small></p></div></div>'+
 '<div class="dg"><h5>동별 납부율 <small>1칸 = 5%</small></h5>'+[['101동',92],['102동',81],['103동',74],['104동',69]].map(function(d){return '<div><span>'+d[0]+'</span><i>'+dots(d[1])+'</i><b class="num">'+d[1]+'%</b></div>'}).join('')+'</div>'+'<div class="sts"><div><b class="num">1,042</b><span>고지 세대</span></div><div><b class="num">78%</b><span>납부 완료</span></div><div class="w"><b class="num">96</b><span>미납 안내</span></div></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="미납 96세대에 문자를 보냈어요">미납 문자</span><span class="b1" data-tap="1,042세대에 고지서를 발송했어요">고지서 일괄 발송</span></div>'}};

/* 11 콜앤픽스 — ticket tracker */
LX["민원 접수·처리 추적"]={cls:"s-b11",time:"16:42",cap:"접수에서 완료까지 진행 스텝",
body:function(){
 function s(c,t,w,d,n){return '<div class="sp '+c+'"><i>'+(c=="dn"?ic('check',3.4,{c:'butt',j:'miter'}):'<em class="num">'+n+'</em>')+'</i><p><b>'+t+'</b><small>'+w+'</small></p><time class="num">'+d+'</time></div>'}
 var bl='';for(var i=0;i<12;i++)bl+='<u'+(i<9?' class="on"':'')+'></u>';
 return '<div class="bh">'+lg(25)+'<b>콜앤픽스</b><span class="pr">긴급</span></div>'+
 '<div class="tk"><div class="r1"><span class="no num">C-1011-0042</span><span class="cat">누수·설비</span><span class="sla">D-1</span></div><h5>지하 2층 주차장 천장에서 물이 떨어집니다</h5><p>103동 라인 기둥 옆 B2-14 구역, 어제 비 온 뒤 계속 떨어지고 있어요. 차량 위라 위험합니다.</p><div class="ph"><img src="lx/img/parking-gate.jpg" alt=""><span>사진 2</span></div><div class="cut"></div><small>접수자 최○○ (103동 805호) · 10/11 08:12</small></div>'+
 '<div class="spp">'+s('dn','접수 완료','관리사무소 · 자동 분류','08:12',1)+s('dn','담당 배정','시설팀 김○○ 주임','08:40',2)+s('cu','현장 확인·처리 중','방수 업체 출동 14:30 · 1차 점검','진행 중',3)+s('','처리 완료 보고','입주민 확인 대기','예정',4)+'</div>'+
 '<div class="sl"><div class="r1"><b>처리 경과</b><span class="num">18h / 24h</span></div><div class="bar">'+bl+'</div><div class="nt"><span>문자 알림</span><span>앱 푸시</span><span>유사 민원 3건</span></div></div>'+'<div class="rep"><span class="av">김</span><p><b>시설팀 김○○</b>배관 누수로 확인, 내일 오전 중 보수 완료 예정입니다.</p></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="입주민에게 답변을 보냈어요">답변 보내기</span><span class="b1" data-tap="처리 완료로 보고했어요">처리 완료 보고</span></div>'}};

/* 12 클린정산 — settlement statement */
LX["청소·방역 업체 정산"]={cls:"s-b12",time:"17:15",cap:"업체별 용역 정산서와 승인",
body:function(){
 function r(n,d,p){return '<tr><td>'+n+'<small>'+d+'</small></td><td class="num">'+p+'</td></tr>'}
 var vs=[['말끔청소',5005000,'대기','w'],['깔끔방역',2310000,'대기','w'],['그린케어',1870000,'완료','d']];
 return '<div class="bh">'+lg(26)+'<b>클린정산</b><span class="pill num">승인 대기 2</span></div>'+
 '<div class="vd"><span class="on" data-tap="말끔청소 정산서를 열었어요">말끔청소</span><span data-tap="깔끔방역 정산서를 열었어요">깔끔방역</span><span data-tap="그린케어 정산서를 열었어요">그린케어</span></div>'+
 '<div class="rcp"><div class="hh"><b>용역 정산서<small class="num">No. 2609-017 · 2026.09</small></b><span class="st">검수<br>완료</span></div><table>'+
 r('상가 공용부 청소','주 5회 × 4주 · 20일','3,400,000')+r('계단·엘리베이터 광택','월 2회','640,000')+r('특수청소 (입주 청소)','3건 · 현장 확인','450,000')+r('폐기물 수거','대형 12포대','180,000')+r('결근·지각 공제','9/14 인원 1명 미투입','-120,000')+'</table><div class="sum"><p><span>공급가액</span><b class="num">4,550,000</b></p><p><span>부가세 10%</span><b class="num">455,000</b></p><p class="tt"><span>정산 합계</span><b class="num">₩5,005,000</b></p></div></div>'+
 '<div class="vs">'+vs.map(function(v){return '<div><b>'+v[0]+'</b><i><u style="width:'+Math.round(v[1]/5005000*100)+'%"></u></i><span class="num">'+v[1].toLocaleString('en-US')+'</span><em class="'+v[3]+'">'+v[2]+'</em></div>'}).join('')+'</div>'+'<div class="ck"><span class="ok">[✓] 세금계산서 수신</span><span class="ok">[✓] 현장점검 4/4</span><span class="no">[!] 지급일 10/15</span></div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="보완을 요청했어요">보완요청</span><span class="b1" data-tap="₩5,005,000 정산을 승인했어요">정산 승인 · ₩5,005,000</span></div>'}};

/* 13 썬카운트 — dark amber glow */
LX["태양광 발전량 모니터링"]={cls:"s-b13",time:"13:25",cap:"오늘 발전 곡선과 인버터 상태",
body:function(){
 var td=[0,1,5,14,28,45,62,76,86,92,95,97,94],yd=[0,2,7,18,34,52,70,84,92,94,90,86,70];
 var cols=td.map(function(v,i){var n=Math.round(v/10),s='';for(var k=9;k>=0;k--)s+='<u'+(k<n?' class="on'+(k>=8?' pk':'')+'"':'')+(Math.round(yd[i]/10)-1==k?' data-y':'')+'></u>';return '<div class="co">'+s+'</div>'}).join('');
 var iv=function(n,k,c){return '<div class="iv" data-tap="'+n+' 상세를 열었어요"><i class="'+c+'"></i><p>'+n+'<small>'+k+'</small></p><b class="num">'+(c=="e"?"CHECK":"OK")+'</b></div>'};
 return '<div class="bh">'+lg(27)+'<b>썬카운트</b><span class="ib">'+ic('bell',1.8)+'</span></div>'+
 '<div class="hero"><div class="tx"><small>햇살드림 1호 발전소 · 998kW</small><b class="num">3,842</b><span>kWh 오늘 누적 발전</span></div><div class="rg"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,179,0,.15)" stroke-width="5"/><circle cx="40" cy="40" r="32" fill="none" stroke="#FFB300" stroke-width="5" stroke-linecap="round" stroke-dasharray="149 202" transform="rotate(-90 40 40)"/></svg><b class="num">74<small>%</small></b><span>이용률</span></div></div>'+
 '<div class="kp"><div><span>현재 출력</span><b class="num">742<small>kW</small></b></div><div><span>오늘 수익</span><b class="num">₩61<small>만</small></b></div><div><span>CO₂ 절감</span><b class="num">1.6<small>t</small></b></div></div>'+
 '<div class="gr"><div class="r"><b>시간별 발전량</b><span><u></u>오늘 <u class="y"></u>어제</span></div><div class="cs">'+cols+'</div><div class="ax num"><span>06</span><span>09</span><span>12</span><span>15</span><span>18</span></div></div>'+
 '<div class="ivs"><h5>인버터 상태 <small>8대 중 7대 정상</small></h5>'+iv('INV-03','출력 98.1kW','o')+iv('INV-05','출력 96.4kW','o')+iv('INV-07','출력 41.6kW · 효율 저하','e')+iv('INV-01','출력 99.0kW','o')+'</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="점검 요청을 접수했어요">점검 요청</span><span class="b1" data-tap="발전 리포트를 저장했어요">발전 리포트 저장</span></div>'}};

/* 14 솔라빌드 — construction */
LX["설치 견적·시공 관리"]={cls:"s-b14",time:"10:30",cap:"견적서에서 시공 공정까지",
body:function(){
 function p(t,d,k,n){return '<div class="pr '+k+'"><em class="num">0'+n+'</em><b>'+t+'</b><small class="num">'+d+'</small></div>'}
 var cl='';for(var i=0;i<90;i++)cl+='<u'+(i<62?' class="on"':'')+'></u>';
 return '<div class="hz"></div><div class="bh">'+lg(28)+'<b>솔라빌드</b><span class="no num">SP-26-0187</span></div>'+
 '<div class="ph"><img src="lx/img/solar-rooftop.jpg" alt=""><span class="bd">시공 진행 중</span><div class="ov"><h4>김○○ 님 상가 옥상</h4><small>경기 성남</small></div></div>'+
 '<div class="sp"><div><span>설치 용량</span><b class="num">49.5<small>kW</small></b></div><div><span>패널</span><b class="num">90<small>장</small></b></div><div><span>예상 회수</span><b class="num">5.8<small>년</small></b></div></div>'+
 '<div class="qt"><div class="r"><b>견적 금액</b><b class="num">₩58,400,000</b></div><div class="sub"><span>국고·지자체 보조 <b class="num">-9,800,000</b></span><span>자부담 <b class="num">48,600,000</b></span></div></div>'+
 '<h5>시공 공정<small class="num">10/08 ~ 10/18</small></h5>'+
 '<div class="gp">'+p('구조물 설치','10/08~09','dn',1)+p('패널 거치','10/10~11','cu',2)+p('배선·인버터','10/14~15','',3)+p('계통연계','10/17~18','',4)+'</div>'+
 '<div class="sd"><div class="r"><span>패널 거치 진행률</span><b class="num">62 / 90</b></div><div class="cells">'+cl+'</div></div>'+
 '<div class="mt">'+[['태양광 패널 600W','90 / 90장',1],['인버터 50kW','1 / 1대',1],['구조물·레일 세트','2 / 3팔레트',0]].map(function(m){return '<div><i class="'+(m[2]?'o':'w')+'">'+(m[2]?'입고':'대기')+'</i><span>'+m[0]+'</span><b class="num">'+m[1]+'</b></div>'}).join('')+'</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="고객에게 진행 사진을 보냈어요">사진 전송</span><span class="b1" data-tap="시공 일정을 확정했어요">시공 일정 확정</span></div>'}};

/* 15 와트세이버 — savings green gradient */
LX["전기요금 절감 리포트"]={cls:"s-b15",time:"9:50",cap:"월간 절감 효과 리포트",
body:function(){
 var m=[62,58,66,71,74,69,64,61,57],w=280,h=112,pts=m.map(function(v,i){return [i*w/8,h-(v-50)/30*h]});
 var d='M'+pts[0][0]+' '+pts[0][1];for(var i=0;i<pts.length-1;i++){var a=pts[i],b=pts[i+1],cx=(a[0]+b[0])/2;d+='C'+cx+' '+a[1]+' '+cx+' '+b[1]+' '+b[0]+' '+b[1]}
 var lp=pts[8],lab=m.map(function(v,i){return '<text x="'+pts[i][0]+'" y="'+(h+16)+'" text-anchor="middle" font-size="8.500" fill="#7B9A86" font-family="Outfit,sans-serif">'+(i+2)+'월</text>'}).join('');
 function r(n,a,b,s){return '<div class="rw"><p>'+n+'<small>'+a+' → '+b+'</small><i><u style="width:'+(s?s*2.4:60)+'%"></u></i></p><b class="num">'+(s?'-'+s+'%':'+2,050<small>kWh</small>')+'</b></div>'}
 return '<div class="hero"><div class="bh">'+lg(29)+'<b>와트세이버</b><span class="bdg">PDF</span></div><small>2026년 9월 · 한빛물류센터</small><b class="num">₩2,184,000</b><p>9월 절감액 · 작년 동월 대비 <em>▼ 17.6%</em></p><div class="don"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="31" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="8"/><circle cx="40" cy="40" r="31" fill="none" stroke="#fff" stroke-width="8" stroke-dasharray="115 195" transform="rotate(-90 40 40)" stroke-linecap="round"/></svg><span><b class="num">59%</b>목표</span></div></div>'+
 '<div class="cd"><div class="r"><b>월별 요금 추이</b><span class="num">백만원</span></div><svg viewBox="-10 -8 300 '+(h+30)+'"><defs><linearGradient id="g15" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22C55E" stop-opacity=".35"/><stop offset="1" stop-color="#22C55E" stop-opacity="0"/></linearGradient></defs><path d="M0 '+(h*.33)+'H280M0 '+(h*.66)+'H280" stroke="#E3F1E8" stroke-width="1"/><path d="'+d+' V'+h+' H0Z" fill="url(#g15)"/><path d="'+d+'" fill="none" stroke="#16A34A" stroke-width="3" stroke-linecap="round"/><circle cx="'+lp[0]+'" cy="'+lp[1]+'" r="5" fill="#fff" stroke="#16A34A" stroke-width="3"/><rect x="'+(lp[0]-26)+'" y="'+(lp[1]-27)+'" width="40" height="18" rx="9" fill="#16A34A"/><text x="'+(lp[0]-6)+'" y="'+(lp[1]-14.500)+'" text-anchor="middle" fill="#fff" font-size="10" font-weight="700" font-family="Outfit,sans-serif">10.2</text>'+lab+'</svg></div>'+
 '<div class="cmp"><div><span>요금</span><b class="num">₩10.2M</b><small>전년 ₩12.4M</small></div><div><span>피크전력</span><b class="num">412kW</b><small>전년 486kW</small></div></div>'+
 '<div class="rws"><h5>절감 요인</h5>'+r('LED 조명 교체','1,820kWh','1,310kWh','28')+r('옥상 태양광 자가소비','0','2,050kWh','')+'</div>'},
foot:function(){return '<div class="ft"><span class="b2" data-tap="담당자에게 공유했어요">공유</span><span class="b1" data-tap="리포트 PDF를 저장했어요">리포트 PDF 저장</span></div>'}};

})();
