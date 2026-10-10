(function(){
"use strict";
var LX=window.LX=window.LX||{};
function hd(t,s,r){return '<div class="hd"><h4>'+t+'<small>'+s+'</small></h4>'+(r||'')+'</div>'}
function ft(a,b,bt){return '<div class="ft">'+(b?'<span class="b2" data-tap="'+b[1]+'">'+b[0]+'</span>':'')+'<span class="b1" data-tap="'+a[1]+'">'+a[0]+'</span></div>'}
function svg(vb,inner,cl){return '<svg class="'+(cl||'')+'" viewBox="'+vb+'" aria-hidden="true">'+inner+'</svg>'}

/* 01 게임 */
LX["게임 운영 이벤트 관리"]={cls:"s-c01",time:"21:05",cap:"이벤트 보상 지급 현황",
 body:function(){return ''+
 '<div class="ph"><img src="lx/img/game-banner.jpg" alt=""><div class="sh"></div><span class="lv">LIVE</span><div class="tt"><small>시즌 7 · 10.08 ~ 10.15</small><b>가을 용사 대축제</b></div><div class="cd"><span><b>03</b>일</span><span><b>14</b>시간</span><span><b>22</b>분</span></div></div>'+
 '<div class="st"><div><small>접속자</small><b class="num">48,210</b><em>▲12%</em></div><div><small>참여율</small><b class="num">68.4%</b><em>▲5.1</em></div><div><small>보상 수령</small><b class="num">12,480</b><em class="w">/18,200</em></div></div>'+
 '<div class="pg"><div><i style="width:68.6%"></i></div><span>지급 대기 5,720명</span></div>'+
 '<h5>이벤트 보상<small>탭하여 수량 수정</small></h5>'+
 '<div class="rw"><div data-tap="보상 수량을 수정해요"><em class="g1">💎</em><b>다이아 300</b><small>전원</small></div><div data-tap="보상 수량을 수정해요"><em class="g2">🗡</em><b>전설 무기 상자</b><small>Lv.50↑</small></div><div data-tap="보상 수량을 수정해요"><em class="g3">🐉</em><b>한정 탈것 7일</b><small>접속 5일</small></div><div data-tap="보상 수량을 수정해요"><em class="g4">🎟</em><b>소환권 x10</b><small>랭킹 100</small></div></div>'+
 '<h5>예정된 운영 작업</h5>'+
 '<div class="tk"><time>22:00</time><p>점검 후 보상 우편 발송<small>우편 만료 14일</small></p><span class="sw" data-sw data-tap="자동 발송을 변경했어요"></span></div>'+
 '<div class="tk"><time>10.12</time><p>2차 미션 오픈<small>길드 레이드 · 보스 HP 120억</small></p><span class="sw" data-sw></span></div>'+
 '<div class="tk"><time>10.15</time><p>랭킹 보상 정산<small>상위 1,000명 자동</small></p><span class="sw off" data-sw></span></div>'},
 foot:function(){return ft(["보상 일괄 지급","대기 5,720명에게 보상을 지급했어요"],["미리보기","우편 미리보기를 열었어요"])}};

/* 02 스트리머 */
LX["스트리머 수익 정산"]={cls:"s-c02",time:"23:12",cap:"후원·광고·구독 정산",
 body:function(){
  var w=[[40,22,14],[52,26,18],[34,30,16],[66,34,20],[58,28,24],[78,36,26]],s="",cl=["#FFE14D","#FF2BD6","#00F5D4"];
  w.forEach(function(v,i){var x=22+i*52,y=132,t=y;
   v.forEach(function(h,j){h*=.82;t-=h;s+='<rect x="'+x+'" y="'+t.toFixed(1)+'" width="14" height="'+(h-2).toFixed(1)+'" rx="7" fill="'+cl[j]+'"/>';});
   s+='<circle cx="'+(x+7)+'" cy="'+(t-8).toFixed(1)+'" r="2" fill="#fff"/><text x="'+(x+7)+'" y="147" font-size="9" fill="#6E7E86" text-anchor="middle">W'+(i+1)+'</text>'});
  return ''+
 '<div class="ph"><img src="lx/img/stream-desk.jpg" alt=""><div class="sh"></div><span class="lv">10월 정산</span><div class="tt"><small>채널 · 하늘달 TV</small><b class="num">₩ 18,642,000</b><em>지난달 대비 +24.3%</em></div></div>'+
 '<div class="cd"><div class="lg"><i style="background:#FFE14D"></i>후원<b class="num">9.8M</b></div><div class="lg"><i style="background:#FF2BD6"></i>구독<b class="num">5.2M</b></div><div class="lg"><i style="background:#00F5D4"></i>광고<b class="num">3.6M</b></div></div>'+
 '<div class="cv">'+svg("0 0 330 152",'<path d="M0 30H330M0 70H330M0 110H330" stroke="rgba(0,245,212,.25)" stroke-dasharray="1 5" stroke-linecap="round"/>'+s)+'</div>'+
 '<h5>플랫폼별 정산<small>수수료 반영</small></h5>'+
 '<div class="rw"><b class="pl p1">치</b><p>치직 플랫폼<small>수수료 20% · 10.20 입금</small></p><span class="num">₩9,120,000</span></div>'+
 '<div class="rw"><b class="pl p2">유</b><p>유튜브 슈퍼챗·광고<small>원천징수 3.3% 제외</small></p><span class="num">₩6,942,000</span></div>'+
 '<div class="rw"><b class="pl p3">트</b><p>투네이션 후원<small>정산 대기 3건</small></p><span class="num">₩2,580,000</span></div>'+
 '<div class="tp"><span>이번 주 TOP 후원</span><b>별○○ <em class="num">₩500,000</em></b><b>달○○ <em class="num">₩320,000</em></b></div>'},
 foot:function(){return ft(["정산서 발행","정산서를 PDF로 발행했어요"],["엑셀","엑셀로 내보냈어요"])}};

/* 03 유튜브 댓글 */
LX["유튜브 댓글 관리"]={cls:"s-c03",time:"14:30",cap:"댓글 필터와 빠른 답글",
 body:function(){return ''+
 '<div class="vid"><div class="th"><img src="lx/img/cook-video.jpg" alt=""><span class="du">12:48</span></div><p>길거리 떡볶이 15분 컷 레시피<small>조회 128,402 · 댓글 <b>1,284</b></small></p></div>'+
 '<div class="ch"><span class="on" data-tap="전체 댓글을 보여요">전체 <b>1,284</b></span><span data-tap="질문 댓글만 보여요">질문 <b>96</b></span><span data-tap="보류 댓글만 보여요">보류 <b>14</b></span><span data-tap="스팸 댓글만 보여요">스팸 <b>38</b></span></div>'+
 '<div class="cm"><i class="av a1">민</i><div><p><b>민○○</b> <small>2시간 전</small></p><span>소스 비율 알려주세요! 고추장 2큰술 맞나요?</span><div class="ac"><u>♥ 214</u><u class="rp" data-tap="답글창을 열었어요">답글</u><u>고정</u></div></div><em class="q">질문</em></div>'+
 '<div class="cm rep"><i class="av a0">채</i><div><p><b>채널 주인</b> <small>방금 전</small></p><span>고추장 2, 고춧가루 1, 설탕 1.5예요 :) 맛있게 드세요!</span></div></div>'+
 '<div class="cm sp"><i class="av a2">!</i><div><p><b>무○○</b> <small>5분 전</small></p><span>▒▒▒ 수익 인증 오픈채팅 ▒▒▒ 링크 클릭</span><div class="ac"><u class="dl" data-tap="스팸을 숨겼어요">스팸 숨기기</u><u>차단</u></div></div><em class="s">스팸 의심</em></div>'+
 '<div class="cm"><i class="av a3">서</i><div><p><b>서○○</b> <small>1일 전</small></p><span>어묵 말고 대파로 해도 되나요? 집에 어묵이 없어요 ㅠ</span><div class="ac"><u>♥ 38</u><u class="rp">답글</u></div></div><em class="q">질문</em></div>'+
 '<div class="cm"><i class="av a1">윤</i><div><p><b>윤○○</b> <small>1일 전</small></p><span>어제 따라 해봤는데 대성공이에요! 가족들이 난리났어요 😍</span><div class="ac"><u>♥ 92</u><u class="rp" data-tap="답글창을 열었어요">답글</u><u>하트</u></div></div></div>'+
 '<div class="cm"><i class="av a2">조</i><div><p><b>조○○</b> <small>2일 전</small></p><span>떡 불리는 시간은 얼마나 두면 되나요?</span><div class="ac"><u>♥ 17</u><u class="rp">답글</u></div></div><em class="q">질문</em></div>'+
 '<div class="qr"><small>빠른 답글</small><span data-tap="빠른 답글을 넣었어요">감사합니다 💛</span><span data-tap="빠른 답글을 넣었어요">레시피는 설명란에!</span><span data-tap="빠른 답글을 넣었어요">다음 영상 예고</span></div>'},
 foot:function(){return '<div class="ft"><span class="in">답글 남기기…</span><span class="b1" data-tap="답글을 등록했어요">등록</span></div>'}};

/* 04 구독 결제 */
LX["콘텐츠 구독 결제 관리"]={cls:"s-c04",time:"09:20",cap:"결제 실패 자동 복구",
 body:function(){return ''+
 hd("결제 복구","프리미엄 구독 · 10월 11일 기준",'<span class="bd">자동 재시도 ON</span>')+
 '<div class="hero"><small>이번 달 복구 금액</small><b class="num">₩ 1,284,000</b><div class="bar"><i style="width:62%"></i></div><p><span>실패 38건 · ₩2,070,000</span><span>복구 24건 <em>63%</em></span></p></div>'+
 '<div class="fn"><div class="s1"><b>38</b><small>결제 실패</small></div><div class="s2"><b>29</b><small>1차 재시도</small></div><div class="s3"><b>24</b><small>복구 성공</small></div><div class="s4"><b>14</b><small>이탈 위험</small></div></div>'+
 '<h5>재시도 일정<small>D+1 · D+3 · D+7</small></h5>'+
 '<div class="sc"><span class="dn"><i></i>D+1<small>10/10</small></span><span class="dn"><i></i>D+3<small>10/12</small></span><span class="nx"><i></i>D+7<small>10/16</small></span><span><i></i>해지<small>10/20</small></span></div>'+
 '<div class="mb"><i class="ok">✓</i><p>정○○ · 월 9,900원<small>카드 한도초과 · 2차 재시도 성공</small></p><span class="g">복구</span></div>'+
 '<div class="mb"><i class="wt">↻</i><p>오○○ · 연 99,000원<small>카드 만료(2026.09) · 안내 메일 발송</small></p><span class="y" data-tap="카드 변경 안내를 보냈어요">안내</span></div>'+
 '<div class="mb"><i class="er">!</i><p>한○○ · 월 9,900원<small>3회 실패 · 접근 유예 D-2</small></p><span class="r" data-tap="유예 기간을 연장했어요">연장</span></div>'+
 '<div class="mb"><i class="wt">↻</i><p>백○○ · 월 14,900원<small>잔액 부족 · 10/12 재시도 예정</small></p><span class="y">대기</span></div>'},
 foot:function(){return ft(["지금 재시도 실행","14건 결제를 재시도했어요"],["메시지","안내 메시지를 보냈어요"])}};

/* 05 의류 재고 */
LX["의류 재고·사이즈 관리"]={cls:"s-c05",time:"11:05",cap:"사이즈×색상 재고 매트릭스",
 body:function(){
  var cols=[["스카이",[12,28,6,0,3]],["화이트",[34,41,22,9,14]],["네이비",[8,3,0,2,11]],["블랙",[19,26,17,4,7]]],sz=["XS","S","M","L","XL"],h='';
  cols.forEach(function(c){h+='<div class="rw"><span class="cl"><i style="background:'+({스카이:"#9CC8F0",화이트:"#F4F4F4",네이비:"#26334F",블랙:"#17181A"}[c[0]])+'"></i>'+c[0]+'</span>';
   c[1].forEach(function(n){h+='<b class="'+(n==0?"z":n<5?"l":n>30?"h":"")+' num" data-tap="재고 '+n+'개 · 입고 요청 가능해요">'+n+'</b>'});h+='</div>'});
  return ''+
 '<div class="top"><span class="bk">‹</span><span class="se">SS27 · 셔츠류</span></div>'+
 '<div class="pd"><img src="lx/img/fashion-shirt.jpg" alt=""><div><small>CS-2041</small><b>옥스포드 오버핏 셔츠</b><span class="num">₩ 59,000</span><em>총 재고 <b class="num">316</b>장</em></div></div>'+
 '<div class="al"><i>!</i><p>품절 3 · 재고부족 7 옵션<small>최근 7일 판매 기준 4일 내 소진</small></p></div>'+
 '<div class="mx"><div class="rw hh"><span></span>'+sz.map(function(s){return '<b>'+s+'</b>'}).join("")+'</div>'+h+'</div>'+
 '<div class="lg"><span><i class="z"></i>품절</span><span><i class="l"></i>부족(5↓)</span><span><i></i>정상</span><span><i class="h"></i>과다(30↑)</span></div>'+
 '<h5>추천 발주<small>판매속도 기준</small></h5>'+
 '<div class="od"><p>네이비 M · 블랙 L<small>3일 내 품절 예상</small></p><span class="num">+60장</span></div>'+
 '<div class="od"><p>스카이 L<small>품절 · 대기 요청 11건</small></p><span class="num">+40장</span></div>'+
 '<div class="od"><p>화이트 XS<small>재고 과다 · 발주 보류</small></p><span class="num" style="color:#85837D">0장</span></div>'},
 foot:function(){return ft(["추천 수량 발주 요청","발주 요청서를 만들었어요"],["바코드","바코드 스캔을 열었어요"])}};

/* 06 도매 */
LX["도매 거래처 주문"]={cls:"s-c06",time:"16:40",cap:"매장별 주문서 집계",
 body:function(){
  function q(n){return '<div class="qt"><u data-tap="수량을 줄였어요">−</u><b class="num">'+n+'</b><u data-tap="수량을 늘렸어요">+</u></div>'}
  return ''+
 '<div class="ph"><img src="lx/img/fashion-knit.jpg" alt=""><div class="sh"></div><div class="tt"><small>FW 신상 · 주문 마감 10.14</small><b>니트 베스트 세트</b></div></div>'+
 hd("거래처 주문서","오늘 접수 7곳 · 총 ₩ 24,380,000")+
 '<div class="tb"><span class="on">전체 7</span><span>확정 4</span><span>검토 2</span><span>보류 1</span></div>'+
 '<div class="sc"><div class="r1"><i class="lg">은</i><p>은하 편집샵 본점<small>성수 · 담당 박○○ · 선결제</small></p><span class="ok">확정</span></div><div class="ln"><span>니트 베스트 아이보리</span>'+q(24)+'<em class="num">1,248,000</em></div><div class="ln"><span>플리츠 스커트 차콜</span>'+q(30)+'<em class="num">1,740,000</em></div></div>'+
 '<div class="sc"><div class="r1"><i class="lg c2">모</i><p>모카 셀렉트<small>대구 동성로 · 외상 30일</small></p><span class="rv">검토</span></div><div class="ln"><span>니트 베스트 아이보리</span>'+q(12)+'<em class="num">624,000</em></div><div class="ln"><span>니트 베스트 블랙</span>'+q(18)+'<em class="num">936,000</em></div></div>'+
 '<div class="sc"><div class="r1"><i class="lg c3">린</i><p>린넨하우스 부산<small>서면 · 외상 15일</small></p><span class="ok">확정</span></div><div class="ln"><span>플리츠 스커트 베이지</span>'+q(40)+'<em class="num">2,320,000</em></div></div>'+
 '<div class="sm"><span>합계 수량 <b class="num">124</b></span><span>합계 금액 <b class="num">₩ 6,868,000</b></span></div>'},
 foot:function(){return ft(["선택 3곳 주문서 확정","3개 매장 주문서를 확정했어요"],["거래명세서","거래명세서를 만들었어요"])}};

/* 07 반품 */
LX["반품·교환 처리"]={cls:"s-c07",time:"15:12",cap:"반품 회수 단계 추적",
 body:function(){return ''+
 hd("반품·교환","오늘 접수 18건 · 회수 대기 6건",'<span class="cnt">RMA</span>')+
 '<div class="stp"><div class="on"><i>1</i>접수</div><div class="on"><i>2</i>회수</div><div><i>3</i>검수</div><div><i>4</i>환불</div></div>'+
 '<div class="cd"><div class="it"><img src="lx/img/fashion-coat.jpg" alt=""><div><small>RT-26101-0382</small><b>캐멀 하프 코트 · M</b><span>사유 <em>사이즈 큼</em> · 교환(S) 요청</span><span class="num">₩ 189,000</span></div></div>'+
  '<div class="tl"><div class="e d"><i></i><time>10/09 18:20</time><p>고객 접수 · 교환 요청</p></div><div class="e d"><i></i><time>10/10 10:05</time><p>택배 기사 방문 예약</p></div><div class="e n"><i></i><time>10/11 14:50</time><p>집하 완료 · 이동 중<small>송장 6642 1180 9071</small></p></div><div class="e"><i></i><time>10/12 예정</time><p>물류센터 도착 · 검수</p></div></div></div>'+
 '<h5>검수 체크<small>도착 후</small></h5>'+
 '<div class="ck"><span class="y" data-tap="택·라벨 확인을 체크했어요"><i>✓</i>택 부착</span><span data-tap="오염 확인을 체크했어요"><i></i>오염 없음</span><span data-tap="착용 흔적 확인을 체크했어요"><i></i>착용 흔적</span><span><i></i>사진 촬영</span></div>'+
 '<div class="qq"><p><b>대기 중 회수</b><small>기사 미방문 2건 · 재배정 필요</small></p><span class="num">6건</span></div>'+
 '<div class="qq w"><p><b>검수 후 환불 대기</b><small>카드 취소 · 포인트 환급</small></p><span class="num">4건</span></div>'},
 foot:function(){return ft(["회수 완료 처리","회수 완료로 변경했어요"],["스캔","송장 스캔을 열었어요"])}};

/* 08 원가 */
LX["시즌 기획 원가 계산"]={cls:"s-c08",time:"10:15",cap:"원가 구성과 마진 계산",
 body:function(){
  var parts=[["원단","#2F6B55",38],["부자재","#6FA58E",9],["봉제","#C9A15B",21],["물류·관세","#E4C98F",12]];
  return ''+
 hd("원가 시뮬레이션","FW27 울 코트 · 스타일 W-3310")+
 '<div class="sh"><div class="pr"><small>목표 판매가</small><b class="num">₩ 289,000</b></div><div class="pie"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="none" stroke="rgba(0,0,0,.08)" stroke-width="7"/><circle cx="32" cy="32" r="26" fill="none" stroke="#2F6B55" stroke-width="7" stroke-linecap="round" stroke-dasharray="163" stroke-dashoffset="71" transform="rotate(-90 32 32)"/></svg><b>56%</b><small>마진율</small></div></div>'+
 '<div class="bar">'+parts.map(function(p){return '<i style="width:'+p[2]+'%;background:'+p[1]+'"></i>'}).join("")+'<i class="mg" style="width:20%"></i></div>'+
 '<div class="lgd">'+parts.map(function(p){return '<span><i style="background:'+p[1]+'"></i>'+p[0]+'</span>'}).join("")+'<span><i class="mg"></i>마진</span></div>'+
 '<div class="tbl"><div class="row" data-tap="원단 단가를 수정해요"><p>원단 울혼방 1.8yd<small>@ ₩21,500/yd</small></p><b class="num">38,700</b></div>'+
 '<div class="row" data-tap="부자재 단가를 수정해요"><p>안감·단추·지퍼·라벨<small>5종</small></p><b class="num">24,600</b></div>'+
 '<div class="row" data-tap="봉제 단가를 수정해요"><p>봉제 임가공<small>국내 · 2공정</small></p><b class="num">57,000</b></div>'+
 '<div class="row"><p>물류 · 관세 · 포장<small>환율 1,382원 적용</small></p><b class="num">33,200</b></div>'+
 '<div class="row tot"><p>총 원가</p><b class="num">₩ 153,500</b></div></div>'+
 '<div class="sl"><p>목표 마진율<b class="num">56%</b></p><div class="tk"><i></i><u></u></div><small>판매가 289,000 → 매장 마진 포함 소비자가 389,000</small></div>'+
 '<div class="scn"><div><small>259,000</small><b>48%</b></div><div class="on"><small>289,000</small><b>56%</b></div><div><small>319,000</small><b>61%</b></div></div>'},
 foot:function(){return ft(["원가표 저장","원가표를 저장했어요"],["비교","지난 시즌과 비교해요"])}};

/* 09 회원권 PT */
LX["회원권·PT 횟수 관리"]={cls:"s-c09",time:"19:30",cap:"회원권과 PT 잔여 횟수",
 body:function(){
  var p='';for(var i=1;i<=30;i++)p+='<i class="'+(i<=18?"u":"")+(i==19?" nx":"")+'">'+(i<=18?"":"")+'</i>';
  return ''+
 '<div class="ph"><img src="lx/img/gym.jpg" alt=""><div class="sh"></div><span class="tg">출입 중 · 19:02 입장</span></div>'+
 '<div class="card"><div class="r1"><i class="av">박</i><p>박○○ 회원<small>No.00482 · 담당 최○○ 트레이너</small></p><span class="bd">VIP</span></div>'+
 '<div class="rg"><div class="ring">'+(function(){var t="";for(var i=0;i<30;i++){var g=i*12-90,r=Math.PI*g/180;t+='<path d="M'+(40+30*Math.cos(r)).toFixed(1)+' '+(40+30*Math.sin(r)).toFixed(1)+'L'+(40+38*Math.cos(r)).toFixed(1)+' '+(40+38*Math.sin(r)).toFixed(1)+'" stroke="'+(i<18?"#FF5F1F":"rgba(255,255,255,.18)")+'" stroke-width="3" stroke-linecap="butt"/>'}return '<svg viewBox="0 0 80 80">'+t+'</svg>'})()+'<b class="num">12</b><small>남은 PT</small></div>'+
 '<div class="inf"><div><small>PT 총 30회</small><b class="num">18회 사용</b></div><div><small>회원권</small><b>6개월 · D-47</b></div><div><small>만료일</small><b class="num">2026.11.27</b></div></div></div>'+
 '<div class="pt">'+p+'</div></div>'+
 '<div class="ls"><h5>최근 이용<small>PT 차감 내역</small></h5>'+
 '<div class="ev"><time>10.09</time><p>PT 18회차 · 하체<small>최○○ 트레이너 · 60분</small></p><b class="num">-1</b></div>'+
 '<div class="ev"><time>10.07</time><p>PT 17회차 · 등/이두<small>최○○ 트레이너 · 60분</small></p><b class="num">-1</b></div>'+
 '<div class="ev"><time>10.04</time><p>일반 이용<small>체류 1시간 42분</small></p><b>방문</b></div>'+
 '<div class="ev"><time>10.02</time><p>PT 16회차 · 가슴/어깨<small>최○○ 트레이너 · 60분</small></p><b class="num">-1</b></div></div>'},
 foot:function(){return ft(["PT 1회 차감","PT 1회를 차감했어요 (남은 11회)"],["연장","회원권 연장 화면을 열었어요"])}};

/* 10 출석 트레이너 */
LX["출석·트레이너 배정"]={cls:"s-c10",time:"07:50",cap:"트레이너별 오늘 시간표",
 body:function(){
  var tr=["최","이","정"],blocks=[
   [0,0,2,"김○○","출석","a"],[0,3,1,"박○○","대기","w"],[0,5,2,"오○○","예약","b"],
   [1,1,2,"한○○","출석","a"],[1,4,1,"유○○","결석","x"],[1,6,1,"신○○","예약","b"],
   [2,0,1,"서○○","출석","a"],[2,2,2,"임○○","대기","w"],[2,5,1,"배○○","미배정","u"]],
   hrs=["09","10","11","12","13","14","15","16"],g='';
  blocks.forEach(function(b){g+='<div class="bk '+b[5]+'" style="grid-column:'+(b[0]+2)+';grid-row:'+(b[1]+2)+'/span '+b[2]+'" data-tap="'+b[3]+' 회원 · '+b[4]+'"><b>'+b[3]+'</b><small>'+b[4]+'</small></div>'});
  return ''+
 hd("오늘 시간표","10월 11일 토요일 · 출석 26/34")+
 '<div class="ds"><span><small>목</small>8</span><span><small>금</small>9</span><span><small>토</small>10</span><span class="on"><small>일</small>11</span><span><small>월</small>12</span><span><small>화</small>13</span></div>'+
 '<div class="gr"><span></span>'+tr.map(function(t,i){return '<div class="th" style="grid-column:'+(i+2)+'"><i>'+t+'</i>'+t+'○○ T</div>'}).join("")+hrs.map(function(h,i){return '<time style="grid-row:'+(i+2)+'">'+h+':00</time>'}).join("")+g+'</div>'+
 '<div class="un"><i>!</i><p>미배정 회원 1명 · 배○○ 15:00<small>이○○ 트레이너 14:00 이후 공석</small></p><span data-tap="이○○ 트레이너에게 배정했어요">배정</span></div>'},
 foot:function(){return ft(["배정 확정","오늘 트레이너 배정을 확정했어요"],["출석체크","출석 체크를 열었어요"])}};

/* 11 재등록 */
LX["재등록 유도 메시지"]={cls:"s-c11",time:"11:20",cap:"만료 임박 회원 메시지 미리보기",
 body:function(){return ''+
 '<div class="ph"><img src="lx/img/pilates.jpg" alt=""><div class="sh"></div><div class="tt"><small>필라테스 스튜디오 · 숨결</small><b>재등록 안내 메시지</b></div></div>'+
 '<div class="seg"><span class="on" data-tap="D-7 대상 12명이에요">D-7 <b>12</b></span><span data-tap="D-3 대상 5명이에요">D-3 <b>5</b></span><span data-tap="만료 후 대상 8명이에요">만료 후 <b>8</b></span></div>'+
 '<div class="rc"><small>받는 사람 12명</small><div class="av"><i>김</i><i>이</i><i>박</i><i>최</i><i>정</i><em>+7</em></div></div>'+
 '<div class="ph2"><div class="bb"><div class="tp"><b>숨결 필라테스</b><small>오후 12:00</small></div><p><b>[재등록 안내]</b><br>김○○님, 수강권이 <u>7일 후(10/18)</u> 종료돼요.<br>그동안 <b>24회</b> 수업에 출석하셨어요 👏<br>지금 재등록하시면 <b>10% 할인 + 1회 추가</b></p><span class="bt">재등록 신청하기</span></div><div class="vr">변수 자동 채움 · {이름} {종료일} {출석횟수}</div></div>'+
 '<div class="op"><div><small>혜택</small><b>10% + 1회</b></div><div><small>유효</small><b>10/25까지</b></div><div><small>발송</small><b>오늘 12:00</b></div></div>'+
 '<div class="ef"><p>예상 재등록률<small>지난달 평균 41%</small></p><div><i style="width:41%"></i><u style="width:17%"></u></div><b class="num">58%</b></div>'+
 '<div class="ex"><i>✓</i><p>수신 거부 3명 제외<small>마케팅 동의 회원에게만 발송돼요</small></p></div>'},
 foot:function(){return ft(["12명에게 발송","12명에게 메시지를 발송했어요"],["테스트","내 번호로 테스트를 보냈어요"])}};

/* 12 체성분 */
LX["체성분 변화 리포트"]={cls:"s-c12",time:"20:10",cap:"12주 체성분 변화",
 body:function(){
  var w=[78.4,77.9,77.1,76.6,75.8,75.2,74.9,74.1],m=[31.2,31.4,31.7,32.0,32.4,32.6,33.0,33.3],f=[24.6,24.1,23.5,22.9,22.2,21.8,21.1,20.5];
  function pts(a,lo,hi){return a.map(function(v,i){return [10+i*44,110-(v-lo)/(hi-lo)*100]})}
  function sm(P,close){var d="M"+P[0][0]+" "+P[0][1].toFixed(1);for(var i=1;i<P.length;i++){var x=(P[i-1][0]+P[i][0])/2;d+="C"+x+" "+P[i-1][1].toFixed(1)+" "+x+" "+P[i][1].toFixed(1)+" "+P[i][0]+" "+P[i][1].toFixed(1)}return close?d+"L"+P[P.length-1][0]+" 124L"+P[0][0]+" 124Z":d}
  function dots(P,c,f){return P.map(function(q){return '<circle cx="'+q[0]+'" cy="'+q[1].toFixed(1)+'" r="3" fill="'+(f||"#fff")+'" stroke="'+c+'" stroke-width="2"/>'}).join("")}
  var PM=pts(m,31,34),PF=pts(f,20,25),PW=pts(w,73,79);
  return ''+
 hd("체성분 리포트","김○○ 회원 · 8회 측정 · 7/12~10/11",'<span class="sh" data-tap="리포트 링크를 복사했어요">공유</span>')+
 '<div class="kp"><div><small>체중</small><b class="num">74.1<em>kg</em></b><i class="dn">▼4.3</i></div><div><small>골격근</small><b class="num">33.3<em>kg</em></b><i class="up">▲2.1</i></div><div><small>체지방률</small><b class="num">20.5<em>%</em></b><i class="dn">▼4.1</i></div></div>'+
 '<div class="gv"><div class="lg"><span><i style="background:#14B8A6"></i>골격근</span><span><i style="background:#F97362"></i>체지방률</span><span><i style="background:#7C8AA5"></i>체중</span></div>'+
 svg("0 0 330 124",'<defs><linearGradient id="bgA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14B8A6" stop-opacity=".35"/><stop offset="1" stop-color="#14B8A6" stop-opacity="0"/></linearGradient></defs><path d="M0 110H330" stroke="#CFE3E0"/><path d="M0 60H330" stroke="#E4EEEC" stroke-dasharray="1 4" stroke-linecap="round"/><path d="'+sm(PM,1)+'" fill="url(#bgA)"/><path d="'+sm(PW)+'" fill="none" stroke="#9AA9BC" stroke-width="1.4"/><path d="'+sm(PF)+'" fill="none" stroke="#F97362" stroke-width="1.6"/><path d="'+sm(PM)+'" fill="none" stroke="#14B8A6" stroke-width="3" stroke-linecap="round"/>'+dots(PM,"#14B8A6")+'<g><rect x="278" y="'+(PM[7][1]-26).toFixed(1)+'" width="46" height="18" rx="9" fill="#0B3D3A"/><text x="301" y="'+(PM[7][1]-14).toFixed(1)+'" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">33.3kg</text></g>',"cv")+
 '<div class="xl"><span>7/12</span><span>8/9</span><span>9/6</span><span>10/11</span></div></div>'+
 '<h5>부위별 근육<small>표준 대비</small></h5>'+
 '<div class="sg"><span>왼팔</span><div><i style="width:78%"></i><u style="left:70%"></u></div><b class="num">3.4</b></div>'+
 '<div class="sg"><span>오른팔</span><div><i style="width:82%"></i><u style="left:70%"></u></div><b class="num">3.6</b></div>'+
 '<div class="sg"><span>몸통</span><div><i style="width:94%"></i><u style="left:70%"></u></div><b class="num">25.8</b></div>'+
 '<div class="sg"><span>왼다리</span><div><i style="width:66%"></i><u style="left:70%"></u></div><b class="num">9.1</b></div>'+
 '<div class="sg"><span>오른다리</span><div><i style="width:69%"></i><u style="left:70%"></u></div><b class="num">9.3</b></div>'+
 '<div class="scr"><div class="n num">82<small>점</small></div><p><b>체성분 점수 ▲6</b><small>근육형 · 8주 연속 상승 중</small></p></div>'+
 '<div class="cm"><b>트레이너 코멘트</b>하체 근육이 아직 표준에 못 미쳐요. 다음 4주는 스쿼트·런지 비중을 올릴게요.</div>'},
 foot:function(){return ft(["회원에게 리포트 보내기","리포트를 회원에게 보냈어요"])}};

/* 13 나라장터 */
LX["나라장터 공고 알림"]={cls:"s-c13",time:"08:35",cap:"맞춤 입찰 공고 피드",
 body:function(){
  function c(d,dc,inst,t,amt,tags,star){return '<div class="cd"><div class="r1"><span class="dd '+dc+'">'+d+'</span><em>'+inst+'</em><span class="st'+(star?" on":"")+'" data-tap="'+(star?"관심 공고에서 뺐어요":"관심 공고에 담았어요")+'">★</span></div><b>'+t+'</b><div class="r2"><span class="num">'+amt+'</span>'+tags.map(function(x){return '<u>'+x+'</u>'}).join("")+'</div></div>'}
  return ''+
 '<div class="ph"><img src="lx/img/gov-building.jpg" alt=""><div class="sh"></div><div class="tt"><small>10월 11일 · 신규 공고 14건</small><b>입찰 공고 알림</b></div><span class="bl" data-tap="알림 설정을 열었어요">🔔 ON</span></div>'+
 '<div class="kw"><b>키워드</b><span>CCTV</span><span>정보통신공사</span><span>소프트웨어 유지보수</span><span class="ad">+ 추가</span></div>'+
 '<div class="fl"><span class="on">전체 14</span><span>용역 6</span><span>공사 5</span><span>물품 3</span><i>마감순 ▾</i></div>'+
 c("D-2","r","경기도 성남시청","통합관제센터 CCTV 교체 및 유지보수 용역","₩ 482,000,000",["제한경쟁","적격심사"],true)+
 c("D-5","o","한국도로공사 충북본부","휴게소 정보통신설비 개선공사","₩ 1,236,500,000",["일반경쟁","종합심사"],false)+
 c("D-9","b","행정안전부","민원 통합 포털 소프트웨어 유지보수","₩ 318,400,000",["협상계약"],false)+
 c("D-12","b","서울교통공사","역사 안내 디스플레이 구매","₩ 96,700,000",["수의시담","2인 견적"],false)},
 foot:function(){return ft(["관심 공고 3건 담기","관심 공고에 담았어요"],["필터","공고 필터를 열었어요"])}};

/* 14 입찰 서류 */
LX["입찰 서류 체크리스트"]={cls:"s-c14",time:"10:48",cap:"제출 서류 준비 현황",
 body:function(){
  function it(st,t,s,r){return '<div class="it '+st+'" data-tap="'+t+' 상태를 바꿨어요"><i>'+(st=="d"?"✓":st=="w"?"!":"")+'</i><p>'+t+'<small>'+s+'</small></p><em>'+r+'</em></div>'}
  return ''+
 hd("입찰 서류 준비","성남시청 CCTV 교체 용역 · 공고 2026-1107")+
 '<div class="dl"><div class="rg"><span class="sq">'+(function(){var h="";for(var i=0;i<16;i++)h+='<i'+(i<11?' class="o"':'')+'></i>';return h})()+'</span><b class="num">68<small>%</small></b></div><div><b>11 / 16 서류 완료</b><span>입찰 마감 <em class="num">10.13 (월) 10:00</em></span><span class="tm">남은 시간 <em class="num">47:12:05</em></span></div></div>'+
 '<div class="gp"><h5>자격 서류</h5>'+
 it("d","사업자등록증 사본","2026.03 발급","PDF")+
 it("d","법인 인감증명서","3개월 이내","PDF")+
 it("d","직접생산확인증명서","유효 2027.02.28","PDF")+
 '<h5>이행 서류</h5>'+
 it("d","최근 3년 용역 실적증명","4건 · 합계 11.8억","PDF")+
 it("w","국세·지방세 완납증명","발급일 9/12 · 재발급 필요","만료")+
 it("n","신용평가 확인서","나이스 / 미제출","업로드")+
 '<h5>제안 서류</h5>'+
 it("n","제안서 · 가격입찰서","작성 중 · 38p","수정")+
 it("n","청렴서약서 · 위임장","서명 필요","서명")+'</div>'},
 foot:function(){return ft(["제출 패키지 만들기","제출용 압축 패키지를 만들었어요"],["촬영","서류 촬영을 열었어요"])}};

/* 15 투찰가 계산기 */
LX["투찰가 산정 계산기"]={cls:"s-c15",time:"13:25",cap:"사정률 기반 투찰금액 계산",
 body:function(){
  var bars=[3,5,8,12,17,24,31,38,44,36,28,19,12,7,4],bh=bars.map(function(v,i){return '<i class="'+(i==8?"hit":"")+'" style="height:'+v*1.7+'%"></i>'}).join("");
  var keys=["7","8","9","4","5","6","1","2","3",".","0","⌫"].map(function(k){return '<span data-tap="'+k+'">'+k+'</span>'}).join("");
  return ''+
 hd("투찰가 계산기","적격심사 · 공사 · 낙찰하한율 87.745%",'<span class="md">공사</span>')+
 '<div class="in"><div><small>기초금액</small><b class="num">482,000,000</b></div><div><small>사정률</small><b class="num">99.842<em>%</em></b></div></div>'+
 '<div class="res"><small>투찰금액</small><b class="num">₩ 423,019,684</b><span>하한가 <em class="num">422,900,000</em> 보다 <em class="num">+119,684</em></span></div>'+
 '<div class="hs"><div class="bars">'+bh+'</div><div class="ax"><span>98.5</span><span>99.0</span><span>99.5</span><span>100</span><span>100.5</span></div><p>최근 유사 공고 82건 사정률 분포 · <b>내 투찰 위치</b></p></div>'+
 '<div class="sl"><span>낙찰확률</span><div><i style="width:37%"></i></div><b class="num">약 37%</b></div>'+
 '<div class="kp">'+keys+'</div>'},
 foot:function(){return ft(["투찰가 확정","투찰가를 확정했어요"],["기록","계산 기록을 저장했어요"])}};

/* 16 실적 자격증 */
var IC16='<svg class="ix" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/><path d="M8.500 12l2.500 2.500 4.500-5"/></svg>';
LX["실적·자격증 관리"]={cls:"s-c16",time:"09:05",cap:"인증서 만료 일정과 실적",
 body:function(){
  function ce(n,s,d,p,cl){return '<div class="ce '+cl+'" style="--p:'+p+'" data-tap="'+n+' 갱신 알림을 설정했어요"><div class="ic">'+IC16+'</div><div class="tx">'+n+'<small>'+s+'</small><div class="ex"><i style="width:'+p+'%"></i></div></div><b class="num">'+d+'</b></div>'}
  return ''+
 hd("실적·자격 관리","(주)한결테크 · 보유 인증 9건",'<span class="al">만료 임박 2</span>')+
 '<div class="sm"><div><b class="num">9</b><small>유효 인증</small></div><div class="w"><b class="num">2</b><small>60일 내 만료</small></div><div class="r"><b class="num">1</b><small>만료됨</small></div><div><b class="num">23</b><small>준공 실적</small></div></div>'+
 '<h5>갱신 일정</h5>'+
 ce("정보통신공사업 면허","등록번호 제2019-서울-0412호","D-18",92,"r")+
 ce("직접생산확인증명서","CCTV · 유효 2026.12.09","D-59",72,"w")+
 ce("ISO 9001 품질경영","인증기관 한국표준원","D-214",30,"")+
 ce("소프트웨어사업자 신고","유효 2027.08.30","D-323",14,"")+
 '<h5>최근 준공 실적<small>3년 합계 ₩ 11.8억</small></h5>'+
 '<div class="rf"><p>군포시 CCTV 통합관제 구축<small>2026.07 준공 · 발주 군포시</small></p><b class="num">₩ 3.2억</b></div>'+
 '<div class="rf"><p>양평군 정보화시스템 유지보수<small>2026.04 준공 · 발주 양평군</small></p><b class="num">₩ 1.9억</b></div>'},
 foot:function(){return ft(["만료 알림 일괄 설정","만료 60일 전 알림을 설정했어요"],["서류 추가","실적증명서를 추가해요"])}};
/*BRAND-LAYER*/
var IC={
gem:'<path d="M6 4h12l4 6-10 11L2 10z"/><path d="M2 10h20M9 4l-2 6 5 11 5-11-2-6"/>',
sword:'<path d="M14 3h7v7L10 21l-3-3zM7 18l-4 4M5 13l6 6"/>',
flame:'<path d="M12 2c1 4 6 6 6 12a6 6 0 01-12 0c0-3 2-4 3-7 1 1 2 2 3 1z"/>',
ticket:'<path d="M3 8a2 2 0 002-2h14a2 2 0 002 2v3a2 2 0 000 2v3a2 2 0 00-2 2H5a2 2 0 00-2-2v-3a2 2 0 000-2z"/><path d="M14 6v12" stroke-dasharray="2 2"/>',
bell:'<path d="M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4"/>',
check:'<path d="M4 12.5l5 5L20 6.5"/>',
alert:'<path d="M12 4v10M12 18v2"/>',
refresh:'<path d="M20 11a8 8 0 00-14-4L4 9M4 4v5h5M4 13a8 8 0 0014 4l2-2M20 20v-5h-5"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
heart:'<path d="M12 20S4 14.5 4 9a4 4 0 018-1 4 4 0 018 1c0 5.500-8 11-8 11z"/>',
back:'<path d="M15 5l-7 7 7 7"/>',
bs:'<path d="M9 5h11v14H9L3 12z"/><path d="M12 9l5 6M17 9l-5 6"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/>',
play:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>',
cup:'<path d="M5 9h12v5a5 5 0 01-5 5h-2a5 5 0 01-5-5zM17 10h2a2 2 0 010 4h-2M8 3v3M12 3v3"/>',
clap:'<path d="M7 12l3-7 2 1-1 4 5 1-3 8H8z"/>',
pin:'<path d="M12 21s7-6 7-11a7 7 0 00-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
box:'<path d="M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8"/>',truck:'<path d="M2 6h11v10H2zM13 10h4l4 3v3h-8M6 19a2 2 0 100-.1M17 19a2 2 0 100-.1"/>',search:'<circle cx="11" cy="11" r="6"/><path d="M16 16l5 5"/>',coin:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10c0-2 6-2 6 0s-6 1-6 3 6 2 6 0"/>',share:'<path d="M12 15V4M8 8l4-4 4 4M5 13v7h14v-7"/>'};
function ic(n,c){return '<svg class="ix '+(c||'')+'" viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>'}
function fx(h){return h
 .replace(/💎/g,ic("gem")).replace(/🗡/g,ic("sword")).replace(/🐉/g,ic("flame")).replace(/🎟/g,ic("ticket")).replace(/🔔/g,ic("bell"))
 .replace(/ ?(😍|👏|💛|💊)/g,"")
 .replace(/>✓</g,">"+ic("check")+"<").replace(/>!</g,">"+ic("alert")+"<").replace(/>↻</g,">"+ic("refresh")+"<").replace(/>★</g,">"+ic("star")+"<").replace(/>‹</g,">"+ic("back")+"<").replace(/>⌫</g,">"+ic("bs")+"<")
 .replace(/♥ ?/g,ic("heart")+" ")
 .replace(/<i>1<\/i>접수/,"<i>"+ic("box")+"</i>접수").replace(/<i>2<\/i>회수/,"<i>"+ic("truck")+"</i>회수").replace(/<i>3<\/i>검수/,"<i>"+ic("search")+"</i>검수").replace(/<i>4<\/i>환불/,"<i>"+ic("coin")+"</i>환불")
 .replace(/<b class="pl p1">[^<]*<\/b>/,'<b class="pl p1">'+ic("chat")+'</b>').replace(/<b class="pl p2">[^<]*<\/b>/,'<b class="pl p2">'+ic("play")+'</b>').replace(/<b class="pl p3">[^<]*<\/b>/,'<b class="pl p3">'+ic("cup")+'</b>')}
var BR={c01:["레이드옵스","30","LIVE"],c02:["스트림페이","31","10월"],c03:["댓글매니저","32","STUDIO"],c04:["리커버","33","결제 복구"],c05:["핏스톡","34","SS27"],c06:["동대문링크","35","도매"],c07:["리턴박스","36","RMA"],c08:["코스트핏","37","FW27"],c09:["핏카운트","38","MEMBER"],c10:["코치보드","39","오늘"],c11:["리턴핏","40","메시지"],c12:["바디그래프","41","리포트"],c13:["공고레이더","42","알림 ON"],c14:["서류팩","43","D-2"],c15:["투찰계산기","44","공사"],c16:["써티볼트","45","인증"]};
Object.keys(LX).forEach(function(k){var s=LX[k],m=/^s-(c\d\d)$/.exec(s.cls||"");if(!m||!BR[m[1]])return;var b=BR[m[1]],o=s.body;
 s.body=function(){return '<div class="brq"><img src="lx/img/ic/'+b[1]+'.jpg" alt=""><b>'+b[0]+'</b><span>'+b[2]+'</span></div>'+fx(o())};
 if(s.foot){var of=s.foot;s.foot=function(){return fx(of())}}});

})();
