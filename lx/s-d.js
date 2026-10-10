/* ATZ LINEUP — set d, re-branded (15 screens) */
(function(){
"use strict";
var LX=window.LX=window.LX||{};
var P={
home:'<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>',
grid:'<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>',
target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>',
doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M9 12h6M9 16h6"/>',
bell:'<path d="M6 17v-6a6 6 0 0112 0v6l2 2H4z"/><path d="M10 21h4"/>',
chevL:'<path d="M15 5l-7 7 7 7"/>',chevD:'<path d="M6 9l6 6 6-6"/>',chevR:'<path d="M9 5l7 7-7 7"/>',
check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
alert:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
camera:'<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
cal:'<rect x="4" y="5" width="16" height="15"/><path d="M4 10h16M8 3v4M16 3v4"/>',
search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
scan:'<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4M4 12h16"/>',
bars:'<path d="M5 20v-9M12 20V4M19 20v-6"/>',
card:'<rect x="3" y="6" width="18" height="12"/><path d="M3 10h18"/>',
send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
edit:'<path d="M4 20l1-5L16 4l4 4L9 19z"/>',
thermo:'<path d="M10 14V5a2 2 0 014 0v9a4 4 0 11-4 0z"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
flower:'<path d="M12 21v-9"/><path d="M12 12C12 7 9 4 5 4c0 5 2 8 7 8zM12 15c0-4 3-6 7-6 0 4-2 7-7 7z"/>',
msg:'<path d="M4 5h16v11H9l-5 4z"/>',
box:'<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
syringe:'<path d="M14 4l6 6M13 5l6 6-8 8-4 1 1-4zM9 15l-5 5M11 9l4 4"/>',
drop:'<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',
cup:'<path d="M7 3v8a2 2 0 004 0V3M9 11v10M17 3c-2 2-2 6 0 8v10"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
moon:'<path d="M20 14A8 8 0 1110 4a6 6 0 0010 10z"/>',
list:'<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
gauge:'<path d="M4 17a8 8 0 1116 0"/><path d="M12 17l4-6"/>',
flame:'<path d="M12 3c1 4 5 6 5 11a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z"/>',
image:'<rect x="3" y="4" width="18" height="16"/><circle cx="9" cy="10" r="2"/><path d="M3 18l6-5 5 4 3-3 4 4"/>',
upload:'<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
flag:'<path d="M5 21V4h12l-2 4 2 4H5"/>',
heart:'<path d="M12 20S4 14.5 4 9a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 5.5-8 11-8 11z"/>',
face:'<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 7 2 8 0M9 10h.01M15 10h.01"/>',
bus:'<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M7 20v-3M17 20v-3"/>',
sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 5v4M6 15v4"/>',
pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',
play:'<path d="M8 5l11 7-11 7z"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 016 0"/>',
branch:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5v7M8.5 6c5 0 6 6 7 6"/>',
leaf:'<path d="M5 19C5 10 10 5 20 4c0 10-5 15-13 15zM5 19l8-8"/>',
more:'<path d="M5 12h.01M12 12h.01M19 12h.01"/>',
share:'<path d="M12 15V3M7 8l5-5 5 5M5 13v8h14v-8"/>',
file:'<path d="M6 3h8l4 4v14H6z"/><path d="M9 14l2 2 4-4"/>',
sparkle:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>'
};
function I(n){return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">'+P[n]+'</svg>'}
function bh(n,name,r){return '<div class="bh"><img class="ai" src="lx/img/ic/'+n+'.jpg" alt=""><b>'+name+'</b><span class="bx">'+(r||'')+'</span></div>'}
function ft1(l,t,extra){return '<div class="ft">'+(extra||'')+'<span class="b1" data-tap="'+t+'">'+l+'</span></div>'}
function tabs(a,k){return '<div class="tb">'+a.map(function(x,i){return '<span'+(i==k?' class="on"':'')+'>'+I(x[0])+x[1]+'</span>'}).join("")+'</div>'}
LX["광고 성과 통합 대시보드"]={cls:"s-d01",time:"9:12",cap:"매체별 광고비·ROAS를 한 화면에",
 body:function(){
  var rev=[52,61,58,70,66,82,91],sp=[14,15,14,17,16,19,21],days=["5","6","7","8","9","10","11"];
  var med=[["search","검색광고","5,820,000","512%",100,"#4D8DFF"],["msg","SNS 피드","4,960,000","388%",76,"#FF5C93"],["play","영상 광고","3,540,000","301%",59,"#FFB020"],["bag","쇼핑 광고","2,780,000","476%",93,"#27D3A2"],["image","배너 디스플레이","1,320,000","164%",32,"#A58BFF"]];
  function Y(v){return (92-v*.88).toFixed(1)}
  function stp(a,k){var d="M0 "+Y(a[0]*k);a.forEach(function(v,i){if(i)d+="V"+Y(v*k);d+="H"+((i+1)*330/7).toFixed(1)});return d}
  return bh(46,'애드렌즈','<span class="rg">7일'+I('chevD')+'</span>')+
  '<div class="tt"><h4>광고 성과</h4><small>(주)모아커머스 · 10/5 – 10/11</small></div>'+
  '<div class="hero"><div class="hr"><div class="k"><span>통합 ROAS</span><b class="num">412<small>%</small></b><em class="num">▲ 38%p vs 지난주</em></div>'+
   '<div class="k2"><div><span>광고비</span><b class="num">₩18.42M</b></div><div><span>전환매출</span><b class="num">₩75.9M</b></div></div></div>'+
   '<svg viewBox="0 0 330 100" class="ch"><defs><linearGradient id="d01g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B82F6" stop-opacity=".42"/><stop offset="1" stop-color="#3B82F6" stop-opacity="0"/></linearGradient><pattern id="d01p" width="22" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#2C3E73"/></pattern></defs><rect width="330" height="100" fill="url(#d01p)"/>'+
   '<path d="'+stp(rev,1)+'V100H0Z" fill="url(#d01g)"/><path d="'+stp(rev,1)+'" fill="none" stroke="#5B9BFF" stroke-width="1.8"/><path d="'+stp(sp,4.2)+'" fill="none" stroke="#FFB020" stroke-width="1.3" stroke-dasharray="2 3"/>'+
   '<rect x="311" y="'+(Y(91)-4)+'" width="8" height="8" fill="#0A1230" stroke="#9CC2FF" stroke-width="2"/></svg>'+
   '<div class="ax">'+days.map(function(d){return '<i class="num">'+d+'</i>'}).join("")+'</div>'+
   '<div class="lg"><span><i style="background:#5B9BFF"></i>전환매출</span><span><i class="ds"></i>광고비</span></div></div>'+
  '<div class="mh"><b>매체별 성과</b><span>광고비 · ROAS</span></div>'+
  '<div class="ml">'+med.map(function(m){return '<div class="mr" data-tap="'+m[1]+' 상세로 이동해요"><span class="mi" style="color:'+m[5]+'">'+I(m[0])+'</span><div class="mm"><p>'+m[1]+'<em class="num" style="color:'+m[5]+'">'+m[3]+'</em><span class="sp num">₩'+m[2]+'</span></p><div class="lp"><i style="width:'+m[4]+'%;background:'+m[5]+'"></i><u style="left:'+m[4]+'%;background:'+m[5]+'"></u></div></div></div>'}).join("")+'</div>'+
  '<div class="al" data-tap="SNS 피드 입찰가를 조정했어요"><span class="dot"></span><p>SNS 피드 CPA가 어제보다 <b>23% 상승</b><small>입찰가 하향을 추천해요</small></p><span class="go">조정</span></div>'},
 foot:function(){return tabs([['grid','대시보드'],['target','캠페인'],['doc','보고서'],['bell','알림']],0)}
};

LX["클라이언트 보고서 자동 작성"]={cls:"s-d02",time:"10:05",cap:"데이터를 모아 보고서가 스스로 써져요",
 body:function(){
  var b=[38,52,47,66,58,81,92],d=["월","화","수","목","금","토","일"],stp=["수집","분석","코멘트","검수","발송"];
  return '<div class="top">'+bh(47,'리포트봇','<span class="ai2">'+I('sparkle')+'AI 초안</span>')+
   '<div class="tt"><h4>보고서 작성</h4><small>모아커머스 · 10월 2주차</small></div>'+
   '<div class="st">'+stp.map(function(s,i){return '<span class="'+(i<3?"dn":i==3?"on":"")+'"><i>'+(i<3?I('check'):i+1)+'</i>'+s+'</span>'}).join("")+'</div></div>'+
  '<div class="sheet"><div class="sh1"><span class="lg">M</span><div><b>주간 광고 성과 보고서</b><small>2026.10.05 – 10.11 · 모아커머스 귀중</small></div></div>'+
   '<div class="kp"><div><small>광고비</small><b class="num">18.4M</b></div><div><small>전환수</small><b class="num">1,284</b></div><div><small>CPA</small><b class="num">14.3K</b></div><div><small>ROAS</small><b class="num up">412%</b></div></div>'+
   '<div class="ct"><p>일별 전환수</p><svg viewBox="0 0 300 116">'+b.map(function(v,i){var x=i*43+21,y=(92-v*.86).toFixed(1);return '<path d="M'+x+' 92V'+y+'" stroke="'+(i==6?"#4338CA":"#C3C8EE")+'" stroke-width="2"/><circle cx="'+x+'" cy="'+y+'" r="'+(i==6?6:4.5)+'" fill="'+(i==6?"#4338CA":"#fff")+'" stroke="'+(i==6?"#4338CA":"#9AA2E0")+'" stroke-width="2"/><text x="'+x+'" y="110" font-size="9" fill="#8A91B5" text-anchor="middle" font-family="DM Sans,sans-serif">'+d[i]+'</text>'}).join("")+'<path d="M0 92H300" stroke="#E3E5F5"/></svg></div>'+
   '<div class="mx"><p>매체별 ROAS</p><div><span style="width:100%">검색 512%</span></div><div><span style="width:93%">쇼핑 476%</span></div><div><span style="width:76%">SNS 388%</span></div></div>'+
   '<div class="in"><p class="ih">핵심 인사이트 <span>AI 작성</span></p><ol><li>일요일 전환수가 주중 평균 대비 <b>+41%</b></li><li>쇼핑 광고 ROAS 476%로 효율 1위</li><li>배너 디스플레이는 예산 20% 감축 권장</li></ol></div>'+
  '</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="문구 수정 모드로 전환했어요">'+I('edit')+'문구 수정</span><span class="b1" data-tap="클라이언트에게 보고서를 발송했어요">PDF로 발송하기'+I('send')+'</span></div>'}
};

LX["광고 예산 페이싱 알림"]={cls:"s-d03",time:"14:30",cap:"예산이 너무 빨리 닳으면 먼저 알려줘요",
 body:function(){
  var cp=[["가을 신상 검색","8,400,000","6,720,000",80,"과속","hot"],["브랜드 키워드","3,000,000","1,020,000",34,"정상","ok"],["리타겟팅 영상","6,000,000","1,260,000",21,"저속","lo"]];
  var tk="",N=44,cx=110,cy=104;
  for(var i=0;i<=N;i++){var t=Math.PI-Math.PI*i/N,c=Math.cos(t),s=Math.sin(t),big=i%11==0,r1=big?70:78,r2=96,on=i/N<=.68;
   tk+='<path d="M'+(cx+r1*c).toFixed(1)+' '+(cy-r1*s).toFixed(1)+'L'+(cx+r2*c).toFixed(1)+' '+(cy-r2*s).toFixed(1)+'" stroke="'+(on?(i/N>.35?"#FF6A00":"#FFB347"):"#3A2D24")+'" stroke-width="'+(big?4:2.6)+'"/>'}
  var tg=Math.PI-Math.PI*.35,nx=cx+104*Math.cos(tg),ny=cy-104*Math.sin(tg);
  return bh(48,'페이스키퍼','<span class="bell" data-tap="알림 설정을 열었어요">'+I('bell')+'<em>2</em></span>')+
  '<div class="tt"><h4>예산 페이싱</h4><small class="num">10월 · 11일차 / 31일 (35%)</small></div>'+
  '<div class="top"><svg viewBox="0 -10 220 130" class="gz">'+tk+'<path d="M'+(cx+60*Math.cos(tg)).toFixed(1)+' '+(cy-60*Math.sin(tg)).toFixed(1)+'L'+nx.toFixed(1)+' '+ny.toFixed(1)+'" stroke="#FFE066" stroke-width="3"/><text x="'+(nx-8).toFixed(1)+'" y="'+(ny-4).toFixed(1)+'" font-size="9" font-weight="700" fill="#FFE066" text-anchor="end" font-family="Oswald,sans-serif" letter-spacing="1">권장 35%</text></svg>'+
   '<div class="gv"><b class="num">68<small>%</small></b><span>월 예산 소진</span></div></div>'+
  '<div class="wr"><span class="wi">'+I('alert')+'</span><p><b>이 속도면 10/20에 예산이 소진돼요</b><small>예상 초과 ₩4,150,000 · 일 예산 조정이 필요해요</small></p></div>'+
  '<div class="cl">'+cp.map(function(c){var seg="";for(var k=0;k<25;k++)seg+='<i'+(k<Math.round(c[3]/4)?' class="f"':'')+(k==9?' data-t':'')+'></i>';return '<div class="cc '+c[5]+'"><div class="r1"><p>'+c[0]+'<small class="num">₩'+c[2]+' / ₩'+c[1]+'</small></p><span class="tg">'+c[4]+'</span></div><div class="pb">'+seg+'</div><div class="r2"><span class="num">소진 '+c[3]+'%</span><span>권장 35%</span></div></div>'}).join("")+'</div>'+
  '<div class="rw"><p>소진율 80% 도달 시 알림<small>카카오톡 · 담당 마케터 2명</small></p><span class="sw" data-sw></span></div>'},
 foot:function(){return ft1('일 예산 자동 조정하기','일 예산을 ₩210,000으로 조정했어요')}
};

LX["광고 소재 제작 요청 관리"]={cls:"s-d04",time:"11:20",cap:"시안 → 검수 → 고객 승인까지 한 줄로",
 body:function(){
  var st=["요청","제작","내부검수","고객승인","집행"];
  return bh(49,'크리에이티브큐','<span class="due">D-3</span>')+
  '<div class="tt"><h4>소재 요청 <span class="num">#214</span></h4><small>세럼 신제품 · 인스타 피드 4종</small></div>'+
  '<div class="stp"><div class="trk"><i style="width:68%"></i></div>'+st.map(function(s,i){return '<span class="'+(i<3?"dn":i==3?"on":"")+'"><i>'+(i<3?I('check'):'<b class="num">'+(i+1)+'</b>')+'</i>'+s+'</span>'}).join("")+'</div>'+
  '<div class="card"><div class="im"><img src="lx/img/cosmetic-serum.jpg" alt=""><span class="v num">시안 v3</span><span class="sz num">1080 × 1350</span></div>'+
   '<div class="inf"><div><small>카피</small><b>하루 한 방울, 촉촉 세럼</b></div><div><small>담당</small><b>박○○ 디자이너</b></div></div></div>'+
  '<div class="vs"><span class="vv"><img src="lx/img/cosmetic-serum.jpg" alt=""><em class="num">v1</em></span><span class="vv"><img src="lx/img/cosmetic-serum.jpg" alt="" style="filter:hue-rotate(40deg)"><em class="num">v2</em></span><span class="vv on"><img src="lx/img/cosmetic-serum.jpg" alt=""><em class="num">v3</em></span><span class="vv add" data-tap="새 파일을 업로드해요">'+I('plus')+'</span></div>'+
  '<div class="cm"><span class="av">정</span><div><p><b>정○○ 고객사 담당</b> <small class="num">10:48</small></p><span>제품 병이 더 크게 보였으면 해요. 로고는 하단 중앙으로요.</span></div></div>'+
  '<div class="cm me"><span class="av">박</span><div><p><b>박○○ 디자이너</b> <small class="num">11:02</small></p><span>v3 반영 완료했습니다. 확인 부탁드려요!</span></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="수정 요청을 보냈어요">수정 요청</span><span class="b1" data-tap="고객사에 승인 요청을 보냈어요">승인 요청 보내기'+I('send')+'</span></div>'}
};

LX["등하원 출결 알림"]={cls:"s-d05",time:"8:47",cap:"아이가 들어오면 바로 부모 폰으로",
 body:function(){
  var ev=[["15:30","하원 예정","차량 탑승 · 정문 인수","pend","bus"],["12:10","점심 급식 완료","잡곡밥·소고기미역국 완식","ok","cup"],["09:05","체온 36.5℃ 정상","등원 후 건강 체크 완료","ok","thermo"],["08:47","등원 완료","정문 · 엄마와 함께","ok","home"]];
  var dots="";for(var i=0;i<22;i++)dots+='<i'+(i<9?' class="f"':i==9?' class="w"':'')+'></i>';
  return bh(50,'도담하원','<span class="bl" data-tap="알림이 꺼졌어요">'+I('bell')+'</span>')+
  '<div class="tt"><h4>우리 아이 출결</h4><small>햇살어린이집 · 10월 11일 (토)</small></div>'+
  '<div class="kd"><span class="a on"><i>하</i>하늘반 이○○</span><span class="a"><i>별</i>별님반 이○○</span></div>'+
  '<div class="hero"><div class="pill"><i></i>현재 어린이집에 있어요</div><b class="num">08:47<small> 등원</small></b><p>하원 예정 <b class="num">15:30</b> · 6시간 43분 남음</p>'+
   '<div class="bar">'+dots+'</div><div class="bl2"><span>등원</span><span>점심</span><span>낮잠</span><span>하원</span></div></div>'+
  '<div class="hh">오늘의 알림</div><div class="nl">'+ev.map(function(e){return '<div class="n '+e[3]+'" data-tap="'+e[1]+' 알림을 확인했어요"><span class="ic">'+I(e[4])+'</span><p>'+e[1]+'<small>'+e[2]+'</small></p><time class="num">'+e[0]+'</time></div>'}).join("")+'</div>'+
  '<div class="pk"><div class="pt"><b>귀가 인수자</b><small>오늘 하원 시 확인되는 사람</small></div><div class="av"><span>엄</span><span>할</span><span class="ad">'+I('plus')+'</span></div></div>'},
 foot:function(){return ft1('오늘 귀가 인수자 지정하기','할머니를 인수자로 지정했어요')}
};

LX["보육료·급식비 청구"]={cls:"s-d06",time:"13:02",cap:"항목별 청구서와 정부지원 차감",
 body:function(){
  var it=[["기본보육료 (만3세)","280,000",""],["정부 보육료 지원","−280,000","mn"],["급식비 (20일 × 2,400)","48,000",""],["간식비","22,000",""],["특별활동비 (영어·체육)","35,000",""],["차량 운영비","15,000",""]];
  var q=(function(){var s="",x=7;for(var i=0;i<29;i++)for(var j=0;j<29;j++){x=(x*73+i*31+j*17)%97;if(x%3==0||(i<7&&j<7&&(i%6==0||j%6==0||(i>1&&i<5&&j>1&&j<5)))||(i>21&&j<7&&(i%6==4||j%6==0||(i>23&&i<27&&j>1&&j<5)))||(i<7&&j>21&&(i%6==0||j%6==4||(i>1&&i<5&&j>23&&j<27))))s+='<rect x="'+j+'" y="'+i+'" width="1" height="1"/>'}return s})();
  return bh(51,'키즈빌','<span class="st">미납</span>')+
  '<div class="rc"><div class="rh"><small class="num">청구번호 2610-0417</small><b>2026년 10월분 보육료·급식비</b><span>햇살어린이집 · 하늘반 이○○</span><em class="num">납부기한 10.25 (일)</em></div>'+
   '<div class="ln"></div><div class="rows">'+it.map(function(r){return '<div class="rr '+r[2]+'"><span>'+r[0]+'</span><i></i><b class="num">'+r[1]+'</b></div>'}).join("")+'</div>'+
   '<div class="ln dsh"></div><div class="sm"><span>납부하실 금액</span><b class="num">₩120,000</b></div>'+
   '<div class="bk"><span>납부 계좌</span><b class="num">국민 123-45-678901 (햇살어린이집)</b></div>'+
   '<div class="qr"><svg viewBox="0 0 29 29">'+q+'</svg><p>QR 스캔 시 간편 납부<small>카드 · 계좌이체 · 가상계좌</small></p></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="영수증 PDF를 저장했어요">내역서</span><span class="b1" data-tap="₩120,000 결제를 진행해요">₩120,000 결제하기</span></div>'}
};

LX["하루 활동 알림장"]={cls:"s-d07",time:"16:40",cap:"선생님이 남긴 오늘 하루 기록",
 body:function(){
  var cd=[["face","기분","좋음"],["cup","식사","완식"],["moon","낮잠","1h 20m"],["drop","배변","2회"],["thermo","체온","36.5"]];
  return bh(52,'꿈나무알림장','<span class="tc"><i>김</i>김○○ 선생님</span>')+
  '<div class="tt"><h4>오늘의 알림장</h4><small>하늘반 이○○ · 10월 11일 (토)</small></div>'+
  '<div class="ph"><span class="tp t1"></span><span class="tp t2"></span><div class="pi"><img src="lx/img/kids-class.jpg" alt=""></div><span class="tg">활동 사진 6장</span><div class="cp"><b>가을 낙엽 콜라주 만들기</b><span class="num">10:30 · 미술 활동</span></div></div>'+
  '<div class="cd">'+cd.map(function(c){return '<div>'+I(c[0])+'<em>'+c[1]+'</em><b class="num">'+c[2]+'</b></div>'}).join("")+'</div>'+
  '<div class="th"><div class="b l"><span class="av">김</span><p>오늘 낙엽을 주워서 도화지에 붙여 봤어요. 친구들과 색깔 이야기를 정말 많이 나눴답니다.</p><time class="num">16:12</time></div>'+
  '<div class="b l"><span class="av hid"></span><p>점심도 밥 한 그릇 싹 비웠어요. 낮잠 후 기분 좋게 일어났어요.</p><time class="num">16:13</time></div>'+
  '<div class="b r"><p>감사합니다 선생님! 집에서도 낙엽 모아볼게요.</p><time class="num">16:31 · 읽음</time></div></div>'+
  '<div class="rq"><span>전달사항</span> 내일 <b>여벌옷 1벌</b>과 <b>물통</b>을 챙겨주세요.</div>'},
 foot:function(){return '<div class="ft"><span class="in" data-tap="답장 입력창을 열었어요">선생님께 답장 쓰기…</span><span class="b1" data-tap="알림장을 확인했어요">확인했어요</span></div>'}
};

LX["예방접종 서류 추적"]={cls:"s-d08",time:"9:30",cap:"누가 어떤 접종 서류를 냈는지 한눈에",
 body:function(){
  var v=["DTaP","MMR","수두","일뇌","A간염"];
  var r=[["김○○","하늘","22222"],["박○○","하늘","22212"],["이○○","하늘","21122"],["최○○","별님","22222"],["정○○","별님","12010"],["한○○","별님","22221"],["윤○○","햇님","22222"],["강○○","햇님","20100"],["조○○","햇님","22212"],["서○○","햇님","22222"]];
  var ic={2:'<i class="o">'+I('check')+'</i>',1:'<i class="w"></i>',0:'<i class="x">'+I('x')+'</i>'};
  var seg="";for(var k=0;k<30;k++)seg+='<i class="'+(k<26?"o":k<29?"w":"x")+'"></i>';
  return bh(53,'접종체크','<span class="rg"><b class="num">87%</b><small>제출률</small></span>')+
  '<div class="tt"><h4>접종 서류 현황</h4><small>만 3~5세 · 원아 30명</small></div>'+
  '<div class="sg">'+seg+'</div>'+
  '<div class="sm"><div><b class="num">26</b><span>제출 완료</span></div><div class="w"><b class="num">3</b><span>검토 대기</span></div><div class="x"><b class="num">7</b><span>미제출</span></div></div>'+
  '<div class="fl"><span class="on">전체</span><span>미제출만</span><span>하늘반</span><span>별님반</span></div>'+
  '<div class="tbl"><div class="th"><span>원아</span>'+v.map(function(x){return '<span>'+x+'</span>'}).join("")+'</div>'+
  r.map(function(x){return '<div class="tr" data-tap="'+x[0]+' 원아 서류를 열었어요"><span class="nm">'+x[0]+'<small>'+x[1]+'</small></span>'+x[2].split("").map(function(c){return '<span>'+ic[c]+'</span>'}).join("")+'</div>'}).join("")+'</div>'+
  '<div class="lgd"><span><i class="o"></i>제출</span><span><i class="w"></i>검토 중</span><span><i class="x"></i>미제출</span></div>'},
 foot:function(){return ft1('미제출 7명에게 알림 발송'+I('send'),'학부모 7명에게 알림톡을 보냈어요')}
};

LX["HACCP 점검 기록"]={cls:"s-d09",time:"6:50",cap:"현장에서 바로 찍어 남기는 CCP 점검표",
 body:function(){
  var it=[["CCP-1B 가열 중심온도","기준 ≥ 72℃","74.3","℃",1,86],["CCP-2P 금속검출 (Fe 1.5mm)","시험편 통과","감지","",1,100],["냉각 품온","기준 ≤ 5℃","6.1","℃",0,62],["작업자 위생 점검","8항목 중 8항목","8/8","",1,100]];
  return '<div class="sheet"><div class="clip"><i></i></div>'+bh(54,'해썹노트','<span class="nw num">06:50</span>')+'<div class="hd"><h4>HACCP 점검일지</h4><small>2호 생산라인 · 오전 점검 10/11</small></div>'+
  '<div class="ph"><img src="lx/img/food-factory.jpg" alt=""><span class="lbl num">LINE 2 · 가열·냉각 구간</span><span class="dt">점검자 최○○</span></div>'+
  '<div class="pr"><b class="num">3<small>/4</small></b><span>점검 완료</span><em>이탈 1건</em></div>'+
  '<div class="ck">'+it.map(function(c){return '<div class="ci '+(c[4]?"ok":"ng")+'" data-tap="'+c[0]+' 항목을 열었어요"><span class="sq">'+(c[4]?I('check'):I('x'))+'</span><div class="tx"><p>'+c[0]+'</p><small>'+c[1]+'</small><div class="g"><i style="left:'+c[5]+'%"></i></div></div><b class="num">'+c[2]+'<small>'+c[3]+'</small></b></div>'}).join("")+'</div>'+
  '<div class="dv"><span class="wi">이탈</span><p><b>냉각 품온 이탈 · 개선조치 필요</b><small>품온 6.1℃ → 급속냉각기 재가동 후 재측정</small></p></div>'+
  '<div class="sg"><span>점검자 서명</span><svg viewBox="0 0 120 30"><path d="M4 22C14 4 20 4 24 18S36 24 44 8 56 6 60 20 78 10 84 14 100 24 116 6" fill="none" stroke="#14316B" stroke-width="2" stroke-linecap="round"/></svg></div></div>'},
 foot:function(){return ft1('점검일지 서명·제출','HACCP 점검일지를 제출했어요')}
};

LX["원재료 로트 추적"]={cls:"s-d10",time:"15:18",cap:"완제품 로트에서 원재료 공급까지 역추적",
 body:function(){
  function nd(x,y,w,t,s,c,bad){return '<g><rect x="'+x+'" y="'+y+'" width="'+w+'" height="34" fill="'+(bad?"#2A1210":"#0C241A")+'" stroke="'+c+'" stroke-width="1"/><rect x="'+x+'" y="'+y+'" width="3" height="34" fill="'+c+'"/><text x="'+(x+9)+'" y="'+(y+15)+'" font-size="9.5" font-weight="700" fill="#E9FBF1">'+t+'</text><text x="'+(x+9)+'" y="'+(y+27)+'" font-size="8" fill="'+(bad?"#F08A85":"#6FB296")+'" font-family="Chivo Mono,monospace">'+s+'</text></g>'}
  function ln(x1,y1,x2,y2,c){var m=(x1+x2)/2;return '<path d="M'+x1+' '+y1+'H'+m+'V'+y2+'H'+x2+'" fill="none" stroke="'+(c||"#2F6B53")+'" stroke-width="1.2"/>'}
  return bh(55,'로트트레이스','<span class="sc" data-tap="바코드 스캐너를 열었어요">'+I('scan')+'스캔</span>')+
  '<div class="tt"><h4>로트 추적</h4><small class="num">LOT 2610-DMP-0412 · 왕만두 400g</small></div>'+
  '<div class="sb"><span class="pm">&gt;</span><span class="num">trace --lot 2610-DMP-0412</span><b data-tap="추적을 다시 실행했어요">추적</b></div>'+
  '<div class="col"><span>완제품</span><span>반제품</span><span>원재료·공급사</span></div>'+
  '<svg class="tr" viewBox="0 0 340 292">'+
   ln(94,146,118,60)+ln(94,146,118,146)+ln(94,146,118,232,"#E5484D")+
   ln(212,60,236,26)+ln(212,60,236,76)+ln(212,146,236,126)+ln(212,146,236,170)+ln(212,232,236,224,"#E5484D")+ln(212,232,236,268)+
   nd(0,129,94,"왕만두 400g","0412 · 10/11","#2BFF9E")+
   nd(118,43,94,"만두소 B-31","10/10 · 1.2t","#2F6B53")+nd(118,129,94,"만두피 W-07","10/10 · 0.8t","#2F6B53")+nd(118,215,94,"야채믹스 V-22","10/09 · 0.6t","#E5484D",1)+
   nd(236,9,104,"돈육 앞다리","H-1007 · 한우리","#2F6B53")+nd(236,59,104,"양배추","C-0931 · 청솔농","#2F6B53")+
   nd(236,109,104,"밀가루","F-2217 · 대한제분","#2F6B53")+nd(236,153,104,"전분","S-0608 · 맑은전분","#2F6B53")+
   nd(236,207,104,"부추 (이상)","G-0919 · 새벽농원","#E5484D",1)+nd(236,251,104,"당근","R-0922 · 청솔농","#2F6B53")+
  '</svg>'+
  '<div class="im3"><div><b class="num">3</b><span>영향 완제품 로트</span></div><div><b class="num">4,820</b><span>출고 박스</span></div><div><b class="num">12</b><span>거래처</span></div></div>'+
  '<div class="rs"><span class="w">'+I('alert')+'</span><p><b>부추 G-0919 로트 부적합 통보</b><small>영향 완제품 3개 로트 · 출고 4,820박스 · 거래처 12곳</small></p></div>'},
 foot:function(){return ft1('회수 대상 범위 조회','회수 대상 12곳을 조회했어요')}
};

LX["유통기한 관리"]={cls:"s-d11",time:"8:15",cap:"임박 품목부터 먼저 출고·처리",
 body:function(){
  var it=[["수제 왕만두 400g","LOT 0412 · 냉동창고 A-3","1,240","3","hot"],["김치만두 600g","LOT 0409 · 냉동창고 A-1","860","5","hot"],["고기교자 350g","LOT 0405 · 냉동창고 B-2","2,100","9","mid"],["야채만두 500g","LOT 0403 · 냉동창고 B-1","1,480","14","ok"]];
  var cal=[];for(var i=0;i<14;i++){cal.push('<i class="'+(i==0?"td":i==3||i==5?"r":i==9?"y":"")+'"><b class="num">'+(11+i>31?11+i-31:11+i)+'</b></i>')}
  return bh(56,'데이카운트','<span class="rg">FIFO</span>')+
  '<div class="tt"><h4>유통기한 관리</h4><small>완제품 창고 · 5개 품목 재고 8,680개</small></div>'+
  '<div class="ph"><img src="lx/img/food-dumplings.jpg" alt=""><div class="ov"><span class="big"><b class="num">4</b>건</span><p>7일 내 임박<small>폐기·할인 처리 필요</small></p></div></div>'+
  '<div class="st"><span class="on">전체 5</span><span class="r">임박 2</span><span>주의 1</span><span>양호 2</span></div>'+
  '<div class="ls">'+it.map(function(x){return '<div class="it '+x[4]+'" data-tap="'+x[0]+' 상세를 열었어요"><span class="dd"><small>D</small><b class="num">-'+x[3]+'</b></span><p>'+x[0]+'<small>'+x[1]+'</small></p><b class="q num">'+x[2]+'<small>개</small></b></div>'}).join("")+'</div>'+
  '<div class="cl"><p>10월 · 11일부터 2주</p><div class="gr">'+cal.join("")+'</div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="할인 출고 대상으로 지정했어요">할인 출고</span><span class="b1" data-tap="임박 품목 폐기 처리를 요청했어요">폐기 처리 요청</span></div>'}
};

LX["식품 표시 문구 검토"]={cls:"s-d12",time:"10:40",cap:"라벨 문구를 법 기준으로 자동 점검",
 body:function(){
  var A=2*Math.PI*21,arc=(A*.75*.82).toFixed(1);
  return bh(57,'라벨체크','<span class="sc"><svg viewBox="0 0 54 54"><circle cx="27" cy="27" r="21" fill="none" stroke="#E4DCFA" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+(A*.75).toFixed(1)+' '+A.toFixed(1)+'" transform="rotate(135 27 27)"/><circle cx="27" cy="27" r="21" fill="none" stroke="#7C3AED" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+arc+' '+A.toFixed(1)+'" transform="rotate(135 27 27)"/></svg><b class="num">82</b><small>점</small></span>')+
  '<div class="tt"><h4>표시사항 검토</h4><small>포기김치 1kg · 라벨 v2</small></div>'+
  '<div class="lb"><div class="th"><img src="lx/img/food-kimchi.jpg" alt=""></div>'+
   '<div class="pp"><div class="nm"><b>맛있는 포기김치</b><small>식품유형 김치(절임배추) · 내용량 1kg</small></div>'+
   '<div class="r1"><span>원재료명</span><p>절임배추(국산) 78%, 고춧가루, 무, 멸치액젓, 마늘, 생강, <mark>새우젓</mark><i class="p p1">1</i></p></div>'+
   '<div class="r1"><span>소비기한</span><p><mark>제조일로부터 90일</mark> (냉장)<i class="p p2">2</i></p></div>'+
   '<div class="r1"><span>영양정보</span><p>100g당 열량 28kcal · <mark class="y">나트륨 520mg</mark><i class="p p3">3</i></p></div>'+
   '<div class="r1"><span>알레르기</span><p class="mt">표시 없음</p></div></div></div>'+
  '<div class="sm"><span class="r">오류 2</span><span class="y">권고 1</span><span class="g">적합 9</span></div>'+
  '<div class="is">'+
   '<div class="i r" data-tap="알레르기 문구를 자동 추가했어요"><i>1</i><p>알레르기 유발물질 표시 누락<small>새우 함유 → 「알레르기 유발물질: 새우, 대두」 추가</small></p><b>수정</b></div>'+
   '<div class="i r" data-tap="소비기한 표기를 수정했어요"><i>2</i><p>‘제조일로부터 90일’ 표기 부적합<small>소비기한 날짜(년월일)로 표기 필요</small></p><b>수정</b></div>'+
   '<div class="i y" data-tap="나트륨 표기를 확인했어요"><i>3</i><p>나트륨 함량 영양성분 단위 확인<small>1회 제공량 기준 병기 권고</small></p><b>확인</b></div>'+
   '<div class="i g"><i>'+I('check')+'</i><p>적합 9개 항목 통과<small>제품명 · 식품유형 · 내용량 · 원산지 · 보관방법 외</small></p></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="검토 이력을 열었어요">이력</span><span class="b1" data-tap="수정사항을 라벨에 반영했어요">'+I('sparkle')+'수정사항 일괄 적용</span></div>'}
};

LX["상조 납입 관리"]={cls:"s-d13",time:"11:00",cap:"60회 납입 진행과 다음 납입일",
 body:function(){
  var tk="",cells="";
  for(var i=0;i<60;i++){var a=i/60*2*Math.PI-Math.PI/2,c=Math.cos(a),s=Math.sin(a),big=i%5==0;tk+='<path d="M'+(75+(big?58:61)*c).toFixed(1)+' '+(75+(big?58:61)*s).toFixed(1)+'L'+(75+68*c).toFixed(1)+' '+(75+68*s).toFixed(1)+'" stroke="'+(i<38?"#D8B66A":i==38?"#F3EFE4":"rgba(216,182,106,.22)")+'" stroke-width="'+(big?2:1.2)+'"/>';cells+='<i class="'+(i<38?"d":i==38?"n":"")+'"></i>'}
  return '<div class="fr">'+bh(58,'평안상조','<span class="mm">김○○ 님</span>')+
  '<div class="tt"><small>PYEONGAN LIFE · 가입번호 PA-2209-4417</small><h4>납입 현황</h4></div>'+
  '<div class="ring"><svg viewBox="0 0 150 150">'+tk+'</svg><div class="rc"><span>납입 회차</span><b class="num">38<small>/60</small></b><em class="num">63%</em></div></div>'+
  '<div class="am"><div><span>총 납입액</span><b class="num">₩7,600,000</b></div><div><span>잔여 납입</span><b class="num">₩4,400,000</b></div></div>'+
  '<div class="nx"><div class="dt"><b class="num">25</b><span>10월</span></div><p>다음 납입 · 39회차<small>월 ₩200,000 · 국민은행 자동이체</small></p><span class="dd num">D-14</span></div>'+
  '<div class="gd"><p>납입 회차 지도<small>◆ 완료 38 · ◇ 이번 달 · 예정 21</small></p><div class="cs">'+cells+'</div></div>'+
  '<div class="hs"><div><span class="num">09.25</span><p>38회차 납입 완료</p><b class="num">200,000</b></div><div><span class="num">08.25</span><p>37회차 납입 완료</p><b class="num">200,000</b></div><div><span class="num">07.25</span><p>36회차 납입 완료</p><b class="num">200,000</b></div></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="납입 확인서를 발급했어요">확인서</span><span class="b1" data-tap="자동이체 설정을 열었어요">자동이체 변경</span></div>'}
};

LX["장례 견적 안내"]={cls:"s-d14",time:"21:10",cap:"차분하게, 한 번에 보는 상품 견적",
 body:function(){
  var it=[["빈소 사용 (3일)","1,200,000"],["제단 장식 · 국화","780,000"],["관·수의 · 장례용품","1,050,000"],["영구차 · 운구 차량","350,000"],["접객 · 식음 (조문객 80명)","1,120,000"],["장례지도사 · 진행","500,000"]];
  return bh(59,'하늘정원','<span class="cl" data-tap="상담원을 연결해요">'+I('phone')+'24시 상담 1577-0000</span>')+
  '<div class="tt"><h4>장례 견적 안내</h4></div>'+
  '<div class="ph"><img src="lx/img/funeral-altar.jpg" alt=""><div class="ov"><small>선택하신 상품</small><b>가족 장례 · 3일장</b><em>Family service, three days</em></div></div>'+
  '<div class="sg"><span>간소 <small>2일</small></span><span class="on">가족 <small>3일</small></span><span>정성 <small>3일</small></span></div>'+
  '<div class="ls">'+it.map(function(x){return '<div class="r"><span>'+x[0]+'</span><b class="num">'+x[1]+'</b></div>'}).join("")+'</div>'+
  '<div class="tot"><div class="mn"><span>상조 회원 혜택</span><b class="num">−₩1,500,000</b></div><div class="big"><span>예상 장례 비용</span><b class="num">₩3,500,000</b></div></div>'+
  '<p class="nt">조문객 수·빈소 규모에 따라 달라질 수 있으며, 상담을 통해 확정됩니다.</p>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="상담 예약을 도와드릴게요">상담 예약</span><span class="b1" data-tap="견적서를 문자로 보내드렸어요">견적서 받기</span></div>'}
};

LX["상담 예약·배정"]={cls:"s-d15",time:"9:20",cap:"고객 상담을 상담사별 시간표에 배정",
 body:function(){
  var dy=[["일",12],["월",13],["화",14],["수",15],["목",16],["금",17],["토",18]];
  var slots=[["10:00",[["김○○ 고객","가입 상담","a"],["","","e"],["이○○ 고객","납입 변경","c"]]],["11:00",[["","","e"],["박○○ 고객","상품 안내","b"],["","","e"]]],["13:00",[["최○○ 고객","해약 문의","a"],["정○○ 고객","가입 상담","b"],["","","e"]]],["14:30",[["","","e"],["","","e"],["한○○ 고객","방문 상담","c"]]],["16:00",[["윤○○ 고객","가입 상담","a"],["","","e"],["","","e"]]]];
  return bh(60,'온상담','<span class="nb" data-tap="미배정 2건이 있어요">미배정 <b class="num">2</b></span>')+
  '<div class="tt"><h4>상담 일정</h4><small>10월 11일 (토) · 오늘 예약 9건</small></div>'+
  '<div class="wk">'+dy.map(function(d,i){return '<span class="'+(i==0?"on":"")+'"><small>'+d[0]+'</small><b class="num">'+d[1]+'</b>'+(i<5?'<i></i>':'<i class="z"></i>')+'</span>'}).join("")+'</div>'+
  '<div class="cn"><span></span><span class="a"><i>한</i>한○○ 팀장</span><span class="b"><i>오</i>오○○ 실장</span><span class="c"><i>문</i>문○○ 사원</span></div>'+
  '<div class="gr">'+slots.map(function(s){return '<div class="rw"><time class="num">'+s[0]+'</time>'+s[1].map(function(c){return c[2]=="e"?'<span class="e" data-tap="'+s[0]+' 빈 시간에 배정해요">'+I('plus')+'</span>':'<span class="bk '+c[2]+'" data-tap="'+c[0]+' 상담을 열었어요"><b>'+c[0]+'</b>'+c[1]+'</span>'}).join("")+'</div>'}).join("")+'</div>'+
  '<div class="un"><p class="uh">미배정 예약 <span class="num">2</span></p><div class="u"><span class="av">신</span><p>신○○ 고객<small>10:30 · 장례 상담 · 전화</small></p><b data-tap="오○○ 실장에게 배정했어요">배정</b></div><div class="u"><span class="av">홍</span><p>홍○○ 고객<small>15:30 · 상품 안내 · 방문</small></p><b data-tap="한○○ 팀장에게 배정했어요">배정</b></div></div>'},
 foot:function(){return ft1('자동 배정 확정','상담사 배정을 확정하고 문자를 보냈어요')}
};

})();
