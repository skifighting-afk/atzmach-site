(function(){"use strict";var LX=window.LX=window.LX||{};
var P={bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
back:'<path d="M15 18l-6-6 6-6"/>',up:'<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"/>',
dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
check:'<path d="M20 6L9 17l-5-5"/>',warn:'<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
plus:'<path d="M12 5v14M5 12h14"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>',
pin:'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
cal:'<path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 2v4M8 2v4M3 10h18"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
sync:'<path d="M23 4v6h-6M1 20v-6h6M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"/>',
star:'<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
car:'<path d="M5 17H3v-5l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v5h-2M3 12h18M9 17h6"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
bed:'<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 17h20M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/>',
plane:'<path d="M2 16l20-8-8 20-3-9z"/>',
bus:'<rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 11h16M7 17v3M17 17v3M8 14h.01M16 14h.01"/>',
user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',bolt:'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/>',
sl:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
menu:'<path d="M3 12h18M3 6h18M3 18h18"/>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10"/>',
chart:'<path d="M18 20V10M12 20V4M6 20v-6"/>',box:'<path d="M21 8l-9-5-9 5v8l9 5 9-5zM3.3 7L12 12l8.7-5M12 22V12"/>',
truck:'<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
drop:'<path d="M12 2.7l5.7 5.6a8 8 0 1 1-11.4 0z"/>',vid:'<path d="M23 7l-7 5 7 5zM1 5h15v14H1z"/>',
arr:'<path d="M5 12h14M12 5l7 7-7 7"/>',x:'<path d="M18 6L6 18M6 6l12 12"/>',
batt:'<path d="M3 7h15v10H3zM21 10v4M7 10v4"/>',rec:'<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2V2zM8 8h8M8 12h8"/>',
flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1.5-3.5z"/>',
cross:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
paw:'<circle cx="5" cy="11" r="2"/><circle cx="9.5" cy="5.5" r="2"/><circle cx="14.5" cy="5.5" r="2"/><circle cx="19" cy="11" r="2"/><path d="M12 12c-3 0-5.5 2.5-5.5 5 0 1.6 1.4 2.2 3 2.2 1 0 1.8-.4 2.5-.4s1.5.4 2.5.4c1.6 0 3-.6 3-2.2 0-2.5-2.5-5-5.5-5z"/>',
tire:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
gauge:'<path d="M12 14l4-4"/><path d="M3.3 17a10 10 0 1 1 17.4 0"/>',
swap:'<path d="M17 3l4 4-4 4M21 7H8M7 21l-4-4 4-4M3 17h13"/>',tag:'<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8zM7 7h.01"/>',
fork:'<path d="M7 2v9a2 2 0 0 0 2 2v9M11 2v9M5 2v7M17 2c-2 2-3 5-3 8h3v12"/>',
bowl:'<path d="M3 11h18a9 9 0 0 1-18 0zM8 7c0-2 2-2 2-4M14 7c0-2 2-2 2-4"/>',
pill:'<rect x="2" y="9" width="20" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M9.5 8l5 6"/>',
flag:'<path d="M4 22V4M4 4h13l-2 4 2 4H4"/>',map:'<path d="M1 6l7-3 8 3 7-3v15l-7 3-8-3-7 3zM8 3v15M16 6v15"/>',
people:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/><circle cx="9" cy="7" r="4"/>',
lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
stamp:'<path d="M12 2a3 3 0 0 0-3 3c0 2 2 3 2 5H6a3 3 0 0 0-3 3v2h18v-2a3 3 0 0 0-3-3h-5c0-2 2-3 2-5a3 3 0 0 0-3-3zM3 18h18v3H3z"/>'};
function IC(n,c){return '<svg class="ic'+(c?" "+c:"")+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+P[n]+'</svg>'}
function BI(n){return '<img class="bi" src="lx/img/ic/'+n+'.jpg" alt="">'}
function sp(a,w,h,c){var mn=Math.min.apply(0,a),mx=Math.max.apply(0,a),p=a.map(function(v,i){return (i*w/(a.length-1)).toFixed(1)+" "+(h-2-(v-mn)/(mx-mn||1)*(h-4)).toFixed(1)});return '<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><path d="M'+p.join("L")+'" fill="none" stroke="'+c+'" stroke-width="1.6"/></svg>'}
function stp(a,w,h,c){var mn=Math.min.apply(0,a),mx=Math.max.apply(0,a),n=a.length,s=w/n,Y=function(v){return h-3-(v-mn)/(mx-mn||1)*(h-6)},d="";a.forEach(function(v,i){d+=(i?"L":"M")+(i*s).toFixed(1)+" "+Y(v).toFixed(1)+"L"+((i+1)*s).toFixed(1)+" "+Y(v).toFixed(1)});return '<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><path d="'+d+'" fill="none" stroke="'+c+'" stroke-width="2" stroke-linejoin="miter"/></svg>'}

/* ---- 01 밸런스랩 ---- */
LX["포트폴리오 리밸런싱"]={cls:"s-a01",time:"9:41",cap:"목표비중 대비 이탈을 바로잡는 주문안",
 body:function(){var A=[["국내주식",24,25],["해외주식",41,35],["채권",18,25],["금·원자재",7,5],["현금",10,10]];
 var tk="";for(var t=0;t<=50;t+=10)tk+='<span style="left:'+t*2+'%">'+t+'</span>';
 var rows=A.map(function(a){var d=a[1]-a[2],lo=Math.min(a[1],a[2])*2,w=Math.abs(d)*2;return '<div class="dm"><span class="nm">'+a[0]+'</span><div class="tr"><s></s>'+(w?'<u class="'+(d>0?"o":"v")+'" style="left:'+lo+'%;width:'+w+'%"></u>':'')+'<i class="tg" style="left:'+a[2]*2+'%"></i><b class="cu" style="left:'+a[1]*2+'%"></b></div><em class="num '+(d>0?"o":d<0?"v":"z")+'">'+a[1]+'<small>%</small></em></div>'}).join("");
 return ''+
 '<div class="mh">'+BI("01")+'<span class="bn">밸런스랩<em>Balance Lab</em></span><span class="gb" data-tap="허용 밴드를 ±5%p로 설정했어요">'+IC("sl")+'</span></div>'+
 '<div class="dr2"></div>'+
 '<div class="ttl"><small>PORTFOLIO REVIEW · 2026.10.11</small><h4>리밸런싱 리포트</h4><p>성장형 포트폴리오 · 총 평가금액 <b class="num">₩128,400,000</b></p></div>'+
 '<div class="dft"><div class="big"><b class="num">6.4</b><sup>%p</sup></div><p>목표 비중에서 벗어난 정도입니다. 허용 밴드 ±5%p를 넘은 자산군이 <b>둘</b> 있어요.</p></div>'+
 '<div class="sec"><h5>자산군별 비중<span><i class="k1"></i>현재 <i class="k2"></i>목표</span></h5><div class="ax">'+tk+'</div>'+rows+'</div>'+
 '<div class="sec od"><h5>리밸런싱 주문안<span>매도 = 매수 ₩10,270,000</span></h5>'+
  '<div class="o" data-tap="해외주식 ETF 매도 주문을 선택했어요"><span class="k">매도</span><p>글로벌성장 ETF<small>해외주식 · 52주</small></p><b class="num">−7,704,000</b></div>'+
  '<div class="o" data-tap="금 ETF 매도 주문을 선택했어요"><span class="k">매도</span><p>금현물 ETF<small>금·원자재 · 160주</small></p><b class="num">−2,568,000</b></div>'+
  '<div class="o" data-tap="채권 ETF 매수 주문을 선택했어요"><span class="k b">매수</span><p>국고채10년 ETF<small>채권 · 91주</small></p><b class="num">+8,988,000</b></div>'+
  '<div class="o"><span class="k b">매수</span><p>코리아대형주 ETF<small>국내주식 · 33주</small></p><b class="num">+1,284,000</b></div>'+
  '<p class="nt">예상 수수료 <b class="num">₩6,420</b> · 양도세 영향 <b>없음</b></p></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="시뮬레이션을 열었어요">시뮬레이션</span><span class="b1" data-tap="주문 4건을 실행했어요">주문안 4건 실행</span></div>'}
};

/* ---- 02 티커벨 ---- */
LX["공시·시세 알림 대시보드"]={cls:"s-a02",time:"10:42",cap:"관심종목 시세와 공시를 한 화면에서",
 body:function(){var W=[["누리반도체","240340",[52,54,53,57,56,59,58,62,61,65],"71,200","3,100","4.55%",1],["대명바이오","067280",[60,58,59,55,56,52,53,50,51,48],"38,950","1,450","3.59%",0],["세진모빌리티","310210",[40,41,43,42,44,43,46,45,47,48],"124,500","1,000","0.81%",1],["푸른에너지","115390",[70,68,69,67,68,66,67,66,65,66],"16,380","120","0.73%",0]];
 var rows=W.map(function(w,i){var up=w[6];return '<div class="w'+(i==0?" al":"")+'" data-tap="'+w[0]+' 상세를 열었어요"><p>'+w[0]+(i==0?'<em>목표가 도달</em>':'')+'<small class="num">'+w[1]+'</small></p>'+stp(w[2],72,30,up?"#FF5A4F":"#5AA8FF")+'<div class="px"><b class="num">'+w[3]+'</b><small class="num '+(up?"u":"d")+'"><i class="tri"></i>'+w[4]+' ('+w[5]+')</small></div></div>'}).join("");
 var tp='<span>코스피 <b class="num">2,614.38</b> <u class="num"><i class="tri"></i>0.82%</u></span><span>코스닥 <b class="num">842.07</b> <s class="num"><i class="tri"></i>0.31%</s></span><span>환율 <b class="num">1,372.5</b> <u class="num"><i class="tri"></i>0.12%</u></span><span>나스닥선물 <b class="num">18,402</b> <u class="num"><i class="tri"></i>0.44%</u></span><span>WTI <b class="num">71.8</b> <s class="num"><i class="tri"></i>0.9%</s></span>';
 return ''+
 '<div class="mh">'+BI("02")+'<span class="bn">티커벨<em>TICKERBELL</em></span><span class="bl" data-tap="알림 3건을 확인했어요">'+IC("bell")+'<i class="num">3</i></span></div>'+
 '<div class="tape"><div class="rl">'+tp+tp+'</div></div>'+
 '<div class="ttl"><h4>관심종목</h4><small>LIVE · 장중 10:42</small></div>'+
 '<div class="tabs"><span class="on">전체 12</span><span>보유 5</span><span>알림설정 7</span></div>'+
 '<div class="wl">'+rows+'</div>'+
 '<div class="fh"><h5>공시 알림</h5><small>오늘 6건 · 안 읽음 3</small></div>'+
 '<div class="fd n" data-tap="공시 원문을 열었어요"><div class="t"><span class="tg">유상증자</span><small class="num">10:31</small></div><p>대명바이오, 제3자배정 유상증자 결정 (규모 320억원)</p><small>신주 8,200,000주 · 발행가 3,900원</small></div>'+
 '<div class="fd" data-tap="공시 원문을 열었어요"><div class="t"><span class="tg">실적</span><small class="num">09:12</small></div><p>누리반도체, 3분기 영업이익 잠정 1,480억원 (전년비 +36%)</p><small>컨센서스 상회 · 매출 1.12조원</small></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="알림을 모두 읽음 처리했어요">모두 읽음</span><span class="b1" data-tap="알림 조건 추가 화면을 열었어요">'+IC("plus")+'알림 조건 추가</span></div>'}
};

/* ---- 03 리뉴플래너 ---- */
LX["보험 계약 갱신 관리"]={cls:"s-a03",time:"8:50",cap:"만기 임박 고객을 D-day 순으로",
 body:function(){var D=[["11","토",2],["12","일",0],["13","월",3],["14","화",5],["15","수",1],["16","목",2],["17","금",0]];
 var wk=D.map(function(d,i){return '<span class="'+(i==0?"on":"")+'"><em>'+d[1]+'</em><b class="num">'+d[0]+'</b>'+(d[2]?'<i class="num">'+d[2]+'</i>':'<i class="z"></i>')+'</span>'}).join("");
 function c(ic,nm,age,pd,dd,cls,ex){return '<div class="cu'+(ex?" ex":"")+'"><div class="r"><span class="pi">'+IC(ic)+'</span><p>'+nm+'<small>'+age+' · '+pd+'</small></p><span class="dd '+cls+' num">'+dd+'</span></div>'+(ex?ex:'')+'</div>'}
 var C=2*Math.PI*15;
 return ''+
 '<div class="mh">'+BI("03")+'<span class="bn">리뉴플래너<em>이다온 설계사 · 고객 214명</em></span><span class="gb" data-tap="알림 설정을 열었어요">'+IC("bell")+'</span></div>'+
 '<div class="st"><div><b class="num">4</b><span>D-7 이내</span></div><div><b class="num">7</b><span>이번 주</span></div><div><b class="num">18</b><span>이번 달</span></div><div class="rt"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="none" stroke="#D3E6E7" stroke-width="3.2"/><circle cx="18" cy="18" r="15" fill="none" stroke="#0E7C86" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="'+(C*.91-4).toFixed(1)+' '+(C-C*.91+4).toFixed(1)+'" transform="rotate(-90 18 18)"/></svg><b class="num">91<small>%</small></b><span>유지율</span></div></div>'+
 '<div class="wk">'+wk+'</div>'+
 c("car","박○○ 님","47세","자동차보험","D-3","r",'<div class="pr"><div><span>현재 보험료</span><b class="num">₩684,200</b></div>'+IC("arr")+'<div><span>갱신 예상</span><b class="num up">₩712,900</b></div></div><div class="ck"><span class="y">'+IC("check")+'안내 문자</span><span class="y">'+IC("check")+'견적 2건</span><span>서명 대기</span></div><div class="ac"><span data-tap="박○○ 님께 전화를 걸어요">'+IC("phone")+'전화</span><span data-tap="갱신 안내 문자를 보냈어요">'+IC("chat")+'문자</span><span class="p" data-tap="비교 견적을 열었어요">'+IC("doc")+'견적 보기</span></div>')+
 c("car","이○○ 님","39세","운전자보험","D-5","y")+c("cross","정○○ 님","52세","실손의료보험","D-5","y")+c("smile","최○○ 님","31세","치아보험","D-9","g")+c("flame","한○○ 님","44세","화재보험","D-12","g")},
 foot:function(){return '<div class="ft"><span class="b1" data-tap="7명에게 갱신 안내 문자를 보냈어요">이번 주 7명 갱신 안내 보내기'+IC("arr")+'</span></div>'}
};

/* ---- 04 비교왕 ---- */
LX["보험료 비교 견적"]={cls:"s-a04",time:"14:05",cap:"보험사별 월 보험료와 보장을 나란히",
 body:function(){function k(a){return a.map(function(x){return '<span>'+x[0]+'<b>'+x[1]+'</b></span>'}).join("")}
 function c(l,col,co,pd,tag,pr,st,cov,sel){var n=+pr.replace(",","");return '<div class="q'+(sel?" sel":"")+'" data-tap="'+co+' 상품을 선택했어요">'+(tag?'<em class="tg">'+tag+'</em>':'')+'<div class="r"><span class="lg" style="background:'+col+'">'+l+'</span><p>'+co+'<small>'+pd+'</small></p><span class="stars">'+IC("star")+st+'</span></div><div class="m"><b class="num">₩'+pr+'<small>/월</small></b><span class="df">'+(n==9840?"최저가!":"+₩"+(n-9840).toLocaleString())+'</span></div><div class="bar"><i style="width:'+Math.round(n/12570*100)+'%"></i></div><div class="cv">'+k(cov)+'</div></div>'}
 return ''+
 '<div class="mh">'+BI("04")+'<b class="bn">비교왕</b><span class="stk">무료 비교</span><span class="gb" data-tap="조건을 수정해요">'+IC("sl")+'</span></div>'+
 '<h4 class="ttl">운전자보험 비교<small>40세 남성 · 월납 20년</small></h4>'+
 '<div class="fl"><span class="on">전체 3개사</span><span>갱신형 제외</span><span>형사합의금 2억↑</span></div>'+
 '<div class="sm"><div><span>최저가</span><b class="num">9,840</b></div><div><span>평균</span><b class="num">11,260</b></div><div><span>최대 차이</span><b class="num">2,730</b></div></div>'+
 c("한","#FF5A36","한울화재","든든운전자플랜","최저가","9,840","4.6",[["형사합의금","2억"],["변호사선임","5천만"],["벌금","3천만"]],1)+
 c("푸","#2F6BFF","푸른손해","안심드라이브","가성비","10,520","4.7",[["형사합의금","2억"],["변호사선임","5천만"],["벌금","2천만"]])+
 c("다","#14A38B","다온화재","프리미엄 로드","보장 최대","12,570","4.8",[["형사합의금","3억"],["변호사선임","7천만"],["벌금","5천만"]])+'<p class="ft2">※ 2026.10.11 기준 예상 보험료 · 심사 결과에 따라 달라질 수 있어요</p>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="2개 상품을 비교해요">비교 <b>2</b></span><span class="b1" data-tap="한울화재 견적서를 고객에게 보냈어요">견적서 고객에게 보내기</span></div>'}
};

/* ---- 05 커버리 ---- */
LX["보장 공백 분석 리포트"]={cls:"s-a05",time:"21:14",cap:"가입 보장과 권장 보장의 차이를 한눈에",
 body:function(){var L=["암 진단","뇌·심장","실손의료","상해후유","사망","운전자"],cur=[58,34,92,66,80,22],rec=[84,84,90,84,84,80],cx=130,cy=106,R=72;
 function pt(v,i){var a=-Math.PI/2+i*Math.PI/3;return [cx+Math.cos(a)*R*v/100,cy+Math.sin(a)*R*v/100]}
 function poly(a){return a.map(function(v,i){return pt(v,i).map(function(n){return n.toFixed(1)}).join(",")}).join(" ")}
 var g="";[25,50,75,100].forEach(function(r){g+='<polygon points="'+poly([r,r,r,r,r,r])+'" fill="'+(r==100?"rgba(139,123,255,.07)":"none")+'" stroke="rgba(255,255,255,'+(r==100?.22:.09)+')"/>'});
 L.forEach(function(l,i){var p=pt(100,i),q=pt(124,i);g+='<path d="M'+cx+' '+cy+'L'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'" stroke="rgba(255,255,255,.09)"/><text x="'+q[0].toFixed(1)+'" y="'+(q[1]+3).toFixed(1)+'" font-size="9.5" font-weight="700" text-anchor="middle" fill="'+(cur[i]<45?"#FF8FB0":"#C4C0F0")+'">'+l+'</text>'});
 var dots=cur.map(function(v,i){var p=pt(v,i);return '<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3.4" fill="'+(v<45?"#FF5C8A":"#fff")+'" stroke="#6C4BF4" stroke-width="1.6"/>'}).join("");
 function row(n,c,r,gap,sev){var w=Math.round(c/r*10),s="";for(var i=0;i<10;i++)s+='<i class="'+(i<w?"f ":"")+sev+'"></i>';return '<div class="gp"><span>'+n+'</span><div class="sg">'+s+'</div><em class="num">'+(gap?'−'+gap:'충분')+'</em></div>'}
 return ''+
 '<div class="mh">'+BI("05")+'<span class="bn">커버리<em>COVERY · INSIGHT</em></span><span class="gb" data-tap="리포트 PDF를 저장했어요">'+IC("dl")+'</span></div>'+
 '<div class="ttl"><h4>보장 공백 리포트</h4><p>박○○ 님 · 38세 · 가입 7건 · 월 ₩286,000</p></div>'+
 '<div class="rd glass"><svg viewBox="0 0 260 212"><defs><linearGradient id="a05f" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9B8CFF" stop-opacity=".75"/><stop offset="1" stop-color="#FF5C8A" stop-opacity=".35"/></linearGradient></defs>'+g+'<polygon points="'+poly(rec)+'" fill="none" stroke="#5CF0BE" stroke-width="1.3" stroke-dasharray="3 3"/><polygon points="'+poly(cur)+'" fill="url(#a05f)" stroke="#B9AEFF" stroke-width="1.8" stroke-linejoin="round"/>'+dots+'</svg>'+
  '<div class="sc"><span>충족률</span><b class="num">62<small>%</small></b></div><div class="lgd"><span><i class="a"></i>현재</span><span><i class="b"></i>권장</span></div></div>'+
 '<div class="alert glass" data-tap="뇌·심장 보완 설계를 시작해요"><span>'+IC("warn")+'</span><p><b>가장 큰 공백 · 뇌·심장 진단비</b>뇌졸중·심근경색 진단 시 보장 ₩1,500만 (권장 ₩5,000만)</p></div>'+
 '<div class="gps glass">'+row("암 진단비",3000,5000,"2,000만","m")+row("뇌·심장 진단비",1500,5000,"3,500만","h")+row("운전자 합의금",5000,2e4,"1.5억","h")+row("상해 후유장해",8000,1e4,"2,000만","m")+row("사망 보장",12000,1.5e4,"3,000만","l")+row("실손 의료비",5000,5000,"","ok")+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="고객에게 리포트를 보냈어요">'+IC("up")+'</span><span class="b1" data-tap="보완 설계안을 만들었어요">보완 설계안 만들기</span></div>'}
};

/* ---- 06 포포클리닉 ---- */
LX["동물병원 예약·진료 기록"]={cls:"s-a06",time:"11:20",cap:"반려동물별 예약과 진료·접종 기록",
 body:function(){var W=[5.2,5.4,5.5,5.5,5.7,5.8],pts=W.map(function(v,i){return [i*34+8,44-(v-5)*40]}),d="M"+pts.map(function(p){return p[0]+" "+p[1]}).join("S").replace(/S/,"C").replace(/ C/,"C");
 var path="M"+pts[0].join(" ");for(var i=1;i<pts.length;i++){var a=pts[i-1],b=pts[i],m=(a[0]+b[0])/2;path+="C"+m+" "+a[1]+" "+m+" "+b[1]+" "+b[0]+" "+b[1]}
 var dt=pts.map(function(p,i){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(i==5?4.5:2.5)+'" fill="'+(i==5?"#20B486":"#fff")+'" stroke="#20B486" stroke-width="2"/>'}).join("");
 return ''+
 '<div class="ph"><img src="lx/img/pet-vet-poodle.jpg" alt=""><div class="bar"><span class="bk">'+IC("back")+'</span><span class="brd">'+BI("06")+'<b>포포클리닉</b></span><span class="bk" data-tap="병원 전화를 연결해요">'+IC("phone")+'</span></div>'+
  '<div class="pn"><b>초코</b><span>푸들 · 6살 · 수컷(중성화) · 마지막 내원 9/13</span></div></div>'+
 '<div class="pets"><span class="on"><img src="lx/img/pet-vet-poodle.jpg" alt="">초코</span><span data-tap="나비로 전환했어요"><img src="lx/img/pet-cat.jpg" alt="">나비</span><span class="add" data-tap="반려동물을 추가해요">'+IC("plus")+'</span></div>'+
 '<div class="tk"><svg class="pw" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="11" r="2"/><circle cx="9.5" cy="5.5" r="2"/><circle cx="14.5" cy="5.5" r="2"/><circle cx="19" cy="11" r="2"/><path d="M12 12c-3 0-5.5 2.5-5.5 5 0 1.6 1.4 2.2 3 2.2 1 0 1.8-.4 2.5-.4s1.5.4 2.5.4c1.6 0 3-.6 3-2.2 0-2.5-2.5-5-5.5-5z"/></svg><div class="l"><small>다음 예약</small><b class="num">10.14<em>화</em></b><span class="num">15:30</span></div><div class="r"><p>종합 접종 · 구강 검진<small>하늘동물병원 · 김○○ 수의사</small></p><div class="ac"><span data-tap="예약을 변경해요">변경</span><span class="y" data-tap="길찾기를 열었어요">길찾기</span></div></div></div>'+
 '<div class="row2"><div class="vx"><h5>접종·예방</h5><div class="vc"><span class="ok"><i>'+IC("check")+'</i>종합백신</span><span class="ok"><i>'+IC("check")+'</i>광견병</span><span class="wn"><i>'+IC("drop")+'</i>심장사상충</span><span class="ok"><i>'+IC("check")+'</i>켄넬코프</span></div></div>'+
  '<div class="wt"><h5>체중<small class="num">kg</small></h5><svg viewBox="0 0 180 54" preserveAspectRatio="none"><path d="'+path+'" fill="none" stroke="#20B486" stroke-width="2.4" stroke-linecap="round"/>'+dt+'</svg><b class="num">5.8</b></div></div>'+
 '<div class="rc"><h5>진료 기록<small>전체 보기</small></h5>'+
  '<div class="it"><time class="num">09.13</time><i></i><p>피부 알레르기 진료<small>항히스타민 5일 · 약용샴푸 · ₩48,000</small></p></div>'+
  '<div class="it"><time class="num">06.02</time><i></i><p>스케일링 · 구강 검진<small>치석 2단계 · ₩165,000</small></p></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="진료 기록을 공유했어요">'+IC("up")+'</span><span class="b1" data-tap="진료 예약을 신청했어요">진료 예약하기</span></div>'}
};

/* ---- 07 냠박스 ---- */
LX["사료 구독 배송 관리"]={cls:"s-a07",time:"7:32",cap:"남은 사료 일수와 다음 배송을 한 번에",
 body:function(){var st=["주문","포장","출고","배송중","도착"];
 var stp=st.map(function(s,i){return '<span class="'+(i<3?"d":"")+(i==2?" c":"")+'"><i>'+(i<2?IC("check"):"")+'</i>'+s+'</span>'}).join("");
 var dots="";for(var i=0;i<14;i++)dots+='<i class="'+(i<9?"f":"")+'"></i>';
 function up(d,w,t,p,on){return '<div class="u"><div class="dt"><b class="num">'+d+'</b><span>'+w+'</span></div><p>'+t+'<small>'+p+'</small></p><span class="sw'+(on?"":" off")+'" data-sw></span></div>'}
 return ''+
 '<div class="mh">'+BI("07")+'<span class="bn">냠박스<em>몽이네 · 구독 8개월차</em></span><span class="gb" data-tap="구독 설정을 열었어요">'+IC("gear")+'</span></div>'+
 '<div class="pd"><img src="lx/img/pet-food.jpg" alt=""><div><em>정기배송 -15%</em><b>연어 그레인프리 어덜트</b><span>2kg × 2봉 · 월 <b class="num">₩64,800</b></span></div></div>'+
 '<div class="rg"><div class="dy"><b class="num">9</b><span>일 남음</span></div><div class="rt"><small>사료 그릇 잔량</small><div class="dts">'+dots+'</div><p>10월 20일경 소진 예상</p><div class="nx"><span>다음 배송</span><b class="num">10.15 (수)</b></div></div></div>'+
 '<div class="tk"><h5>내일 14시 도착<small class="num">6811-4720-3355</small></h5><div class="stp">'+stp+'</div></div>'+
 '<div class="cy"><h5>배송 주기</h5><div class="sg"><span>2주</span><span class="on">4주</span><span>6주</span><span>8주</span></div></div>'+
 '<div class="ul"><h5>예정된 배송<small>켜면 발송 · 끄면 건너뛰기</small></h5>'+up("11.12","수","연어 그레인프리 2kg×2","₩64,800 · 쿠폰 적용",1)+up("12.10","수","연어 그레인프리 2kg×2","₩64,800",1)+up("01.07","수","연어 그레인프리 2kg×2","₩64,800",0)+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="이번 배송을 건너뛰었어요">건너뛰기</span><span class="b1" data-tap="배송일을 변경했어요">배송일 변경하기</span></div>'}
};

/* ---- 08 카리스트 ---- */
LX["중고차 매물 일괄 등록"]={cls:"s-a08",time:"16:08",cap:"한 번 입력으로 여러 중고차 플랫폼에 동시 등록",
 body:function(){function pl(l,col,n,s,k,v){return '<div class="pl '+k+'"><span class="lg" style="background:'+col+'">'+l+'</span><p>'+n+'<small>'+s+'</small></p>'+(k=="ok"?'<em class="ok">노출 중</em>':k=="go"?'<div class="pg"><i style="width:'+v+'%"></i></div><em class="go num">'+v+'%</em>':k=="er"?'<em class="er">확인 필요</em>':'<em class="wt">대기</em>')+'</div>'}
 return ''+
 '<div class="mh"><span class="bk">'+IC("back")+'</span>'+BI("08")+'<span class="bn">카리스트<em>CARLIST DEALER</em></span><span class="sv" data-tap="임시저장했어요">저장</span></div>'+
 '<div class="stripe"><i></i><i></i></div>'+
 '<div class="ph"><img src="lx/img/car-sedan.jpg" alt=""><span class="n">사진 14장</span><div class="tg"><span>무사고</span><span>1인 소유</span><span>정식 출고</span></div></div>'+
 '<div class="ti"><b>중형 세단 2.0 프리미엄</b><small>2022년 3월식 · 31,400km · 휘발유 · 자동</small></div>'+
 '<div class="pr"><div class="r"><span>판매 희망가</span><b class="num">2,380<small>만원</small></b></div><div class="mk"><i></i><u style="left:46%"></u></div><div class="sc num"><span>2,290</span><span>시세 중간값 2,340</span><span>2,460</span></div></div>'+
 '<div class="pls"><h5>등록 플랫폼<small class="num">3/5</small></h5>'+pl("차","#E5384D","차차장터","10:22 등록 완료","ok")+pl("오","#2F6BFF","오토핀","사진 업로드 중","go",64)+pl("카","#14A38B","카모아","10:23 등록 완료","ok")+pl("모","#F08A24","모터리스트","차량번호 인증 필요","er")+pl("달","#7A4DFF","달려요중고","대기 중 · 순서 5","wt")+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="가격을 일괄 수정해요">가격 수정</span><span class="b1" data-tap="5곳에 일괄 등록을 시작했어요"><b>5곳에 한 번에 등록</b></span></div>'}
};

/* ---- 09 렌치업 ---- */
LX["정비소 예약·견적"]={cls:"s-a09",time:"13:15",cap:"서비스 선택 → 시간 선택 → 견적 확인",
 body:function(){var T=[["09:00",0],["10:30",1],["12:00",0],["13:30",0],["15:00",2],["16:30",0]];
 var ts=T.map(function(t){return '<span class="'+(t[1]==1?"on":t[1]==2?"x":"")+' num">'+t[0]+'</span>'}).join("");
 var ds=[["월","13"],["화","14"],["수","15"],["목","16"],["금","17"]].map(function(d,i){return '<span class="'+(i==1?"on":"")+'"><em>'+d[0]+'</em><b class="num">'+d[1]+'</b></span>'}).join("");
 return ''+
 '<div class="mh">'+BI("09")+'<span class="bn">렌치업<em>WRENCH UP GARAGE</em></span><span class="gb" data-tap="정비소에 전화를 걸어요">'+IC("phone")+'</span></div>'+
 '<div class="hz"></div>'+
 '<div class="ph"><img src="lx/img/car-lift.jpg" alt=""><div class="nm"><b>한결 카센터 성남점</b><span>★ 4.8 (312) · 1.4km · 오늘 18:30까지</span></div></div>'+
 '<div class="sv"><span class="on">엔진오일 교환</span><span class="on">브레이크 패드</span><span>에어컨 필터</span><span>타이어 교체</span><span>배터리</span></div>'+
 '<div class="dp"><h5>날짜 · 시간<small>10월</small></h5><div class="ds">'+ds+'</div><div class="ts">'+ts+'</div></div>'+
 '<div class="rc"><div class="rh"><b>작업 지시서 · 견적</b><span class="num">NO. 1014-0187</span></div>'+
  '<div class="l"><span>합성 엔진오일 5W-30 (4L)<small>부품</small></span><b class="num">62,000</b></div>'+
  '<div class="l"><span>오일 필터<small>부품</small></span><b class="num">12,000</b></div>'+
  '<div class="l"><span>앞 브레이크 패드 세트<small>부품</small></span><b class="num">98,000</b></div>'+
  '<div class="l"><span>교환 공임 (오일+패드)<small>공임</small></span><b class="num">70,000</b></div>'+
  '<div class="sp"><i style="width:71%"></i><u style="width:29%"></u></div><div class="spl"><span>부품 172,000</span><span>공임 70,000</span></div>'+
  '<div class="tt"><span>합계 <small>(VAT 포함)</small></span><b class="num">₩242,000</b></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="정비소에 문의 채팅을 열었어요">'+IC("chat")+'</span><span class="b1" data-tap="10월 14일 10:30 예약을 확정했어요">10.14 (화) 10:30 예약 확정</span></div>'}
};

/* ---- 10 카로그 ---- */
LX["차량 정비 이력 관리"]={cls:"s-a10",time:"20:03",cap:"차량별 정비 타임라인과 다음 점검 게이지",
 body:function(){var tk="",N=40,pct=.76;for(var i=0;i<=N;i++){var a=Math.PI+Math.PI*i/N,big=i%5==0,r1=big?66:70,r2=78,on=i/N<=pct;tk+='<path d="M'+(100+Math.cos(a)*r1).toFixed(1)+' '+(96+Math.sin(a)*r1).toFixed(1)+'L'+(100+Math.cos(a)*r2).toFixed(1)+' '+(96+Math.sin(a)*r2).toFixed(1)+'" stroke="'+(on?(i/N>.85?"#F5B83D":"#3DE6C8"):"rgba(255,255,255,.18)")+'" stroke-width="'+(big?2.2:1.2)+'"/>'}
 var na=Math.PI+Math.PI*pct;tk+='<circle cx="'+(100+Math.cos(na)*58).toFixed(1)+'" cy="'+(96+Math.sin(na)*58).toFixed(1)+'" r="4.5" fill="#fff" stroke="#00897B" stroke-width="2"/>';
 function it(n,ic,t,d,km,cost,sh,last){return '<div class="it'+(last?" nx":"")+'"><span class="no num">'+n+'</span><span class="ico">'+IC(ic)+'</span><div><b>'+t+'</b><small class="num">'+d+' · '+km+'</small><small>'+sh+'</small></div><em class="num">'+cost+'</em></div>'}
 return ''+
 '<div class="mh">'+BI("10")+'<span class="bn">카로그<em class="num">CAROG // SERVICE LOG</em></span><span class="gb" data-tap="차량을 추가해요">'+IC("plus")+'</span></div>'+
 '<div class="cars"><span class="on num">12가 3456<small>중형 SUV · 2021</small></span><span class="num" data-tap="다른 차량으로 전환했어요">45나 7890<small>경차 · 2019</small></span></div>'+
 '<div class="gc"><svg viewBox="0 0 200 108">'+tk+'<text x="100" y="78" text-anchor="middle" font-size="8" fill="#7FB3AC">엔진오일 교환까지</text><text x="100" y="104" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" font-family="Red Hat Mono,monospace">1,240km</text></svg>'+
  '<div class="gi"><div><span>ODO</span><b class="num">48,760km</b></div><div><span>COST</span><b class="num">₩1.82M</b></div><div><span>LOGS</span><b class="num">11</b></div></div></div>'+
 '<div class="up"><h5>NEXT CHECK</h5><div class="ch"><span class="w">타이어 로테이션<b class="num">50,000km</b></span><span>브레이크액<b class="num">2026.12</b></span><span>자동차 검사<b class="num">2027.03</b></span></div></div>'+
 '<div class="tl"><h5>정비 타임라인<small>최신순</small></h5>'+
  it("011","wrench","엔진오일·필터 교환","09.02","46,950km","98,000","한결정비",1)+
  it("010","car","브레이크 패드 교체 (앞)","06.14","42,310km","186,000","동부카센터")+
  it("009","tire","타이어 4본 교체","03.03","38,120km","520,000","타이어랜드")+
  it("008","batt","배터리 교체","11.19","31,008km","142,000","한결정비")+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="영수증을 스캔해요">'+IC("camera")+'영수증</span><span class="b1" data-tap="정비 기록을 추가했어요">[ + 정비 기록 추가 ]</span></div>'}
};

/* ---- 11 스테이싱크 ---- */
LX["숙박 채널 재고 동기화"]={cls:"s-a11",time:"10:41",cap:"채널별 남은 객실을 한 번에 맞춰요",
 body:function(){var days=["토","일","월","화","수","목","금"],dn=[11,12,13,14,15,16,17];
 var ch=[["스테이픽","#FF5A7A",[2,0,3,5,4,1,0],"방금 동기화","ok"],["호텔온","#2F8CFF",[2,0,3,5,4,2,0],"동기화 중…","go"],["트립나우","#F5A524",[2,1,3,5,4,1,0],"3분 지연","wn"],["자사 홈페이지","#14B8A6",[2,0,3,5,4,1,0],"방금 동기화","ok"]];
 var hd='<div class="gr hr"><span></span>'+days.map(function(d,i){return '<em class="'+(i==0?"on":"")+'">'+d+'<b class="num">'+dn[i]+'</b></em>'}).join("")+'</div>';
 var rows=ch.map(function(c){return '<div class="chn"><div class="cn"><i style="background:'+c[1]+'"></i><b>'+c[0]+'</b><span class="'+c[4]+'">'+c[3]+'</span></div><div class="gr"><span></span>'+c[2].map(function(v){return '<u class="v'+v+' num">'+(v==0?"마감":v)+'</u>'}).join("")+'</div></div>'}).join("");
 return ''+
 '<div class="mh">'+BI("11")+'<span class="bn">스테이싱크<em>StaySync · 재고 동기화</em></span><span class="gb" data-tap="동기화 규칙을 열었어요">'+IC("gear")+'</span></div>'+
 '<div class="ph"><img src="lx/img/hotel-ocean.jpg" alt=""><div class="rm"><b>오션뷰 디럭스 트윈</b><span>속초 파도리 호텔 · 총 5실 · 판매가 ₩189,000</span></div></div>'+
 '<div class="al"><span>'+IC("warn")+'</span><p><b>오버부킹 방지</b>호텔온 10/12 예약 1건 확정 → 3개 채널 재고 −1 반영 중</p></div>'+
 '<div class="mx"><h5>7일 잔여 객실<small class="num">10.11 – 10.17</small></h5>'+hd+rows+'<div class="sc"><span>적음</span><i class="v0"></i><i class="v1"></i><i class="v3"></i><i class="v5"></i><span>많음</span></div></div>'+
 '<div class="lg"><h5>동기화 기록</h5><div><time class="num">10:41</time><p>자사 홈페이지 예약 1건<small>스테이픽·호텔온·트립나우 재고 −1</small></p></div><div><time class="num">10:12</time><p>트립나우 취소 1건<small>10/15 재고 +1 복구</small></p></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="마감 처리를 열었어요">일괄 마감</span><span class="b1" data-tap="전 채널 재고를 동기화했어요">'+IC("sync")+'전 채널 재고 동기화</span></div>'}
};

/* ---- 12 트립노트 ---- */
LX["여행 견적·일정표 생성"]={cls:"s-a12",time:"15:27",cap:"일정이 짜이면 견적서가 바로 만들어져요",
 body:function(){function ev(t,i,n,s,c,mv){return (mv?'<div class="mv"><span>'+mv+'</span></div>':'')+'<div class="ev"><time class="num">'+t+'</time><i>'+IC(i)+'</i><p>'+n+'<small>'+s+'</small></p><b class="num">'+c+'</b></div>'}
 var cat=[["#00A3FF",34],["#14C2A3",28],["#FFB020",14],["#FF6B8A",12],["#B58CFF",12]],w="",k=0;cat.forEach(function(c){for(var j=0;j<c[1]/2;j++)w+='<i style="background:'+c[0]+'"></i>'});
 return ''+
 '<div class="mh">'+BI("12")+'<span class="bn">트립노트<em>TripNote</em></span><span class="pill num">견적 #T-1011</span></div>'+
 '<div class="ph"><div class="pol"><img src="lx/img/jeju-coast.jpg" alt=""><span class="tp"></span></div><div class="tt"><small>my journey</small><b>제주 3박 4일</b><span class="num">10.24 sat – 10.27 tue</span><span>성인 2 · 아동 1</span></div></div>'+
 '<div class="dy"><span class="on"><em class="num">1</em>Day<small>24일</small></span><span><em class="num">2</em>Day<small>25일</small></span><span><em class="num">3</em>Day<small>26일</small></span><span><em class="num">4</em>Day<small>27일</small></span></div>'+
 '<div class="tl"><h5>Day 1 · 서쪽 해안<small>예상 <span class="num">₩312,000</span></small></h5>'+
  ev("09:40","plane","김포 → 제주 도착","항공 3인 · 렌터카 수령","486,000")+
  ev("11:30","fork","고기국수 점심","애월 · 3인","36,000","렌터카 25분")+
  ev("13:30","camera","해안도로 드라이브 · 카페","한담 해안산책로","18,000","18분")+
  ev("16:00","bed","해뜰녘 리조트 체크인","오션뷰 패밀리 · 3박","612,000","40분")+'</div>'+
 '<div class="sh"><div class="r"><span>총 예상 견적</span><b class="num">₩2,184,000</b></div><div class="wf">'+w+'</div><div class="lg"><span><s style="background:#00A3FF"></s>항공</span><span><s style="background:#14C2A3"></s>숙박</span><span><s style="background:#FFB020"></s>렌터카</span><span><s style="background:#FF6B8A"></s>식비</span><span><s style="background:#B58CFF"></s>입장</span></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="일정을 다시 짜고 있어요">'+IC("sync")+'</span><span class="b1" data-tap="견적서 PDF를 고객에게 보냈어요">'+IC("plane")+'견적서 PDF 만들어 보내기</span></div>'}
};

/* ---- 13 그룹투어 ---- */
LX["단체 여행 운영 관리"]={cls:"s-a13",time:"6:58",cap:"출발 당일 인원·탑승·식사를 한눈에",
 body:function(){var seats="",f=[1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1];
 var idx=0;for(var r=0;r<11;r++){seats+='<div class="rw">';for(var c=0;c<4;c++){if(c==2)seats+='<s></s>';seats+='<i class="'+(f[idx++]?"f":"")+'"></i>'}seats+='</div>'}
 seats+='<div class="rw back">'+[1,1,0,1,1].map(function(x){return '<i class="'+(x?"f":"")+'"></i>'}).join("")+'</div>';
 function pk(n,t,a,b,s){return '<div class="pk '+s+'"><i></i><p>'+n+'<small class="num">'+t+'</small></p><b class="num">'+a+'<small>/'+b+'</small></b></div>'}
 return ''+
 '<div class="mh">'+BI("13")+'<span class="bn">그룹투어<em>GROUP TOUR OPS</em></span><span class="gb" data-tap="참가자 명단을 열었어요">'+IC("list")+'</span></div>'+
 '<div class="tkt"><div class="main"><small>한소리산악회 1박 2일 · 가평</small><b>45인승 전세버스 1호차</b><span>07:30 잠실 출발 · 기사 박○○</span></div><div class="stub"><img src="lx/img/coach-bus.jpg" alt=""><em>운행 중</em></div></div>'+
 '<div class="kp"><div><span>참가</span><b class="num">42<small>/45</small></b><u><i style="width:93%"></i></u></div><div><span>식사</span><b class="num">47<small>끼</small></b><u><i style="width:100%"></i></u></div><div><span>객실</span><b class="num">12<small>/14</small></b><u><i style="width:86%"></i></u></div></div>'+
 '<div class="mp"><div class="sm"><h5>좌석<small class="num">탑승 38</small></h5><div class="bus">'+seats+'</div></div>'+
  '<div class="pks"><h5>탑승 지점</h5>'+pk("사당역 2번 출구","07:10","14","14","ok")+pk("잠실역 8번 출구","07:30","16","18","go")+pk("수원 광교","08:00","8","10","wt")+
  '<div class="ml"><h5>식사 특이사항</h5><span>채식 3</span><span>갑각류 2</span><span>할랄 0</span></div></div></div>'+
 '<div class="sc"><h5>오늘 일정<small>예약 확인 완료</small></h5><div><span data-tap="점심 식당에 인원을 전달했어요"><b class="num">11:30</b>점심 한정식<em class="num">42</em></span><span><b class="num">14:00</b>레일바이크<em class="num">40</em></span><span><b class="num">18:00</b>바비큐<em class="num">47</em></span></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="미탑승자에게 전화를 걸어요">미탑승 4명</span><span class="b1" data-tap="출발 안내 문자를 보냈어요">'+IC("chat")+'출발 안내 문자 발송</span></div>'}
};

})();
