(function(){"use strict";var LX=window.LX=window.LX||{};
function sp(a,w,h,c,f){var mn=Math.min.apply(0,a),mx=Math.max.apply(0,a),p=a.map(function(v,i){return (i*w/(a.length-1)).toFixed(1)+" "+(h-2-(v-mn)/(mx-mn||1)*(h-4)).toFixed(1)});return '<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><path d="M'+p.join("L")+'" fill="none" stroke="'+c+'" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>'}
function ring(v,r,sw,cols){var C=2*Math.PI*r,o=0,s="";v.forEach(function(x,i){var l=C*x/100;s+='<circle cx="60" cy="60" r="'+r+'" fill="none" stroke="'+cols[i]+'" stroke-width="'+sw+'" stroke-dasharray="'+(l-1.6).toFixed(1)+' '+(C-l+1.6).toFixed(1)+'" stroke-dashoffset="'+(-o).toFixed(1)+'" transform="rotate(-90 60 60)"/>';o+=l});return s}
LX["포트폴리오 리밸런싱"]={cls:"s-a01",time:"9:41",cap:"목표비중 대비 이탈을 바로잡는 주문안",
 body:function(){var A=[["국내주식",24,25,"#1B4FFF"],["해외주식",41,35,"#6C8CFF"],["채권",18,25,"#14B8A6"],["금·원자재",7,5,"#F5B83D"],["현금",10,10,"#B7C0D1"]];
 var cur=A.map(function(a){return a[1]}),tg=A.map(function(a){return a[2]}),cl=A.map(function(a){return a[3]});
 var bars=A.map(function(a){var d=a[1]-a[2];return '<div class="br"><span><i style="background:'+a[3]+'"></i>'+a[0]+'</span><div class="tr"><b style="width:'+a[1]*2.2+'%;background:'+a[3]+'"></b><u style="left:'+a[2]*2.2+'%"></u></div><em class="num '+(d>0?"o":d<0?"u":"z")+'">'+(d>0?"+":"")+d.toFixed(1)+'%p</em></div>'}).join("");
 return ''+
 '<div class="hd"><h4>리밸런싱<small>성장형 포트폴리오 · 10월 11일 기준</small></h4><span class="ic" data-tap="허용 밴드를 ±5%p로 설정했어요">⚙</span></div>'+
 '<div class="dn"><svg viewBox="0 0 120 120">'+ring(cur,50,13,cl)+ring(tg,31,9,cl).replace(/stroke="(#[0-9A-F]+)"/gi,'stroke="$1" opacity=".42"')+'<text x="60" y="56" text-anchor="middle" font-size="8" fill="#7C879C">이탈도</text><text x="60" y="71" text-anchor="middle" font-size="15" font-weight="800" fill="#0F1B33">6.4%p</text></svg>'+
  '<div class="lg"><p><span>총 평가금액</span><b class="num">₩128,400,000</b></p><p class="k"><i></i>바깥 고리 = 현재</p><p class="k t"><i></i>안쪽 고리 = 목표</p><p class="al">⚠ 허용 밴드 ±5%p 초과 <b>2종목군</b></p></div></div>'+
 '<div class="cd"><h5>자산군별 비중<small>세로선 = 목표</small></h5>'+bars+'</div>'+
 '<div class="cd od"><h5>리밸런싱 주문안<small>총 4건 · 매도 = 매수 ₩10,270,000</small></h5>'+
  '<div class="o" data-tap="해외주식 ETF 매도 주문을 선택했어요"><span class="k s">매도</span><p>글로벌성장 ETF<small>해외주식 · 52주</small></p><b class="num">-7,704,000</b></div>'+
  '<div class="o" data-tap="금 ETF 매도 주문을 선택했어요"><span class="k s">매도</span><p>금현물 ETF<small>금·원자재 · 160주</small></p><b class="num">-2,568,000</b></div>'+
  '<div class="o" data-tap="채권 ETF 매수 주문을 선택했어요"><span class="k b">매수</span><p>국고채10년 ETF<small>채권 · 91주</small></p><b class="num">+8,988,000</b></div>'+
  '<div class="o"><span class="k b">매수</span><p>코리아대형주 ETF<small>국내주식 · 33주</small></p><b class="num">+1,284,000</b></div>'+
  '<div class="nt"><span>예상 수수료 <b class="num">₩6,420</b></span><span>양도세 영향 <b>없음</b></span></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="시뮬레이션을 열었어요">시뮬</span><span class="b1" data-tap="주문 4건을 실행했어요">주문안 4건 실행</span></div>'}
};

LX["공시·시세 알림 대시보드"]={cls:"s-a02",time:"10:42",cap:"관심종목 시세와 공시를 한 화면에서",
 body:function(){var W=[["누리반도체","240340",[52,54,53,57,56,59,58,62,61,65],"71,200","+3,100","+4.55%",1],["대명바이오","067280",[60,58,59,55,56,52,53,50,51,48],"38,950","-1,450","-3.59%",0],["세진모빌리티","310210",[40,41,43,42,44,43,46,45,47,48],"124,500","+1,000","+0.81%",1],["푸른에너지","115390",[70,68,69,67,68,66,67,66,65,66],"16,380","-120","-0.73%",0]];
 var rows=W.map(function(w,i){var up=w[6];return '<div class="w'+(i==0?" al":"")+'" data-tap="'+w[0]+' 상세를 열었어요"><p>'+w[0]+(i==0?'<em>목표가 도달</em>':'')+'<small class="num">'+w[1]+'</small></p>'+sp(w[2],70,30,up?"#FF5468":"#4C9BFF")+'<div class="px"><b class="num">'+w[3]+'</b><small class="num '+(up?"u":"d")+'">'+w[5]+'</small></div></div>'}).join("");
 return ''+
 '<div class="hd"><h4>관심종목<small>실시간 · 장중 10:42</small></h4><span class="ic" data-tap="알림 3건을 확인했어요">🔔<i>3</i></span></div>'+
 '<div class="ix"><div><span>코스피</span><b class="num">2,614.38</b><em class="num u">▲0.82%</em></div><div><span>코스닥</span><b class="num">842.07</b><em class="num d">▼0.31%</em></div><div><span>환율</span><b class="num">1,372.5</b><em class="num u">▲0.12%</em></div></div>'+
 '<div class="tabs"><span class="on">전체 12</span><span>보유 5</span><span>알림설정 7</span></div>'+
 '<div class="wl">'+rows+'</div>'+
 '<div class="fh"><h5>공시 알림<small>오늘 6건 · 안 읽음 3</small></h5></div>'+
 '<div class="fd" data-tap="공시 원문을 열었어요"><i class="nw"></i><div class="t"><span class="tg r">유상증자</span><small class="num">10:31</small></div><p>대명바이오, 제3자배정 유상증자 결정 (규모 320억원)</p><small>정정공시 아님 · 신주 8,200,000주 · 발행가 3,900원</small></div>'+
 '<div class="fd" data-tap="공시 원문을 열었어요"><i class="nw"></i><div class="t"><span class="tg g">실적</span><small class="num">09:12</small></div><p>누리반도체, 3분기 영업이익 잠정 1,480억원 (전년비 +36%)</p><small>컨센서스 상회 · 매출 1.12조원</small></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="알림을 모두 읽음 처리했어요">모두 읽음</span><span class="b1" data-tap="알림 조건 추가 화면을 열었어요">＋ 알림 조건 추가</span></div>'}
};

LX["보험 계약 갱신 관리"]={cls:"s-a03",time:"8:50",cap:"만기 임박 고객을 D-day 순으로",
 body:function(){var D=[["11","토",2],["12","일",0],["13","월",3],["14","화",5],["15","수",1],["16","목",2],["17","금",0]];
 var wk=D.map(function(d,i){return '<span class="'+(i==0?"on":"")+'"><em>'+d[1]+'</em><b class="num">'+d[0]+'</b>'+(d[2]?'<i>'+d[2]+'</i>':'<i class="z"></i>')+'</span>'}).join("");
 function c(av,col,nm,age,pd,dd,cls,pr,np,ex){return '<div class="cu'+(ex?" ex":"")+'"><div class="r"><span class="av" style="background:'+col+'">'+av+'</span><p>'+nm+'<small>'+age+' · '+pd+'</small></p><span class="dd '+cls+' num">'+dd+'</span></div>'+(ex?ex:'')+'</div>'}
 return ''+
 '<div class="top"><div class="hd"><h4>갱신 관리<small>이다온 설계사 · 고객 214명</small></h4><span class="ic" data-tap="알림 설정을 열었어요">🔔</span></div>'+
 '<div class="st"><div><b class="num">4</b><span>D-7 이내</span></div><div><b class="num">7</b><span>이번 주</span></div><div><b class="num">18</b><span>이번 달</span></div><div class="rt"><b class="num">91%</b><span>갱신 유지율</span></div></div></div>'+
 '<div class="wk">'+wk+'</div>'+
 c("박","#0E8F7E","박○○ 님","47세","자동차보험","D-3","r","","", '<div class="pr"><div><span>현재 보험료</span><b class="num">₩684,200</b></div><i>→</i><div><span>갱신 예상</span><b class="num up">₩712,900</b></div></div><div class="ck"><span class="y">✓ 안내 문자</span><span class="y">✓ 견적 2건</span><span>□ 서명 대기</span></div><div class="ac"><span data-tap="박○○ 님께 전화를 걸어요">📞 전화</span><span data-tap="갱신 안내 문자를 보냈어요">💬 문자</span><span class="p" data-tap="비교 견적을 열었어요">견적 보기</span></div>')+
 c("이","#F08A24","이○○ 님","39세","운전자보험","D-5","y")+
 c("정","#5B6CFF","정○○ 님","52세","실손의료보험","D-5","y")+
 c("최","#D6477C","최○○ 님","31세","치아보험","D-9","g")+
 c("한","#0E8F7E","한○○ 님","44세","화재보험","D-12","g")},
 foot:function(){return '<div class="ft"><span class="b1" data-tap="7명에게 갱신 안내 문자를 보냈어요">이번 주 7명 갱신 안내 보내기</span></div>'}
};

LX["보험료 비교 견적"]={cls:"s-a04",time:"14:05",cap:"보험사별 월 보험료와 보장을 나란히",
 body:function(){function k(a){return a.map(function(x){return '<span>'+x[0]+'<b>'+x[1]+'</b></span>'}).join("")}
 function c(l,col,co,pd,tag,pr,w,st,cov,sel){return '<div class="q'+(sel?" sel":"")+'" data-tap="'+co+' 상품을 선택했어요"><div class="r"><span class="lg" style="background:'+col+'">'+l+'</span><p>'+co+'<small>'+pd+'</small></p>'+(tag?'<em class="tg">'+tag+'</em>':'')+'</div><div class="m"><b class="num">₩'+pr+'<small>/월</small></b><span class="stars">★ '+st+'<small>'+(pr=="9,840"?' · 최저가':' · +₩'+(+pr.replace(",","")-9840).toLocaleString())+'</small></span></div><div class="cv">'+k(cov)+'</div></div>'}
 return ''+
 '<div class="hd"><h4>보험료 비교<small>운전자보험 · 40세 남성 · 월납 20년</small></h4><span class="ic" data-tap="조건을 수정해요">☰</span></div>'+
 '<div class="fl"><span class="on">전체 3개사</span><span>갱신형 제외</span><span>형사합의금 2억↑</span></div>'+
 '<div class="sm"><div><span>최저가</span><b class="num">₩9,840</b></div><div><span>평균</span><b class="num">₩11,260</b></div><div><span>최대 차이</span><b class="num">₩2,730</b></div></div>'+
 c("한","#FF5A36","한울화재","든든운전자플랜","최저가","9,840",62,"4.6",[["형사합의금","2억"],["변호사선임","5천만"],["벌금","3천만"]],1)+
 c("푸","#2F6BFF","푸른손해","안심드라이브","가성비","10,520",68,"4.7",[["형사합의금","2억"],["변호사선임","5천만"],["벌금","2천만"]])+
 c("다","#14A38B","다온화재","프리미엄 로드","보장 최대","12,570",86,"4.8",[["형사합의금","3억"],["변호사선임","7천만"],["벌금","5천만"]])+'<p class="ft2">※ 2026.10.11 기준 예상 보험료 · 심사 결과에 따라 달라질 수 있어요</p>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="2개 상품을 비교해요">비교 <b style="margin-left:4px">2</b></span><span class="b1" data-tap="한울화재 견적서를 고객에게 보냈어요">견적서 고객에게 보내기</span></div>'}
};

LX["보장 공백 분석 리포트"]={cls:"s-a05",time:"21:14",cap:"가입 보장과 권장 보장의 차이를 한눈에",
 body:function(){var L=["암 진단","뇌·심장","실손의료","상해후유","사망","운전자"],cur=[58,34,92,66,80,22],rec=[84,84,90,84,84,80],cx=130,cy=106,R=72;
 function pt(v,i){var a=-Math.PI/2+i*Math.PI/3;return [cx+Math.cos(a)*R*v/100,cy+Math.sin(a)*R*v/100]}
 function poly(a){return a.map(function(v,i){return pt(v,i).map(function(n){return n.toFixed(1)}).join(",")}).join(" ")}
 var g="";[25,50,75,100].forEach(function(r){g+='<polygon points="'+poly([r,r,r,r,r,r])+'" fill="none" stroke="rgba(255,255,255,.1)"/>'});
 L.forEach(function(l,i){var p=pt(100,i),q=pt(122,i);g+='<path d="M'+cx+' '+cy+'L'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'" stroke="rgba(255,255,255,.1)"/><text x="'+q[0].toFixed(1)+'" y="'+(q[1]+3).toFixed(1)+'" font-size="9.5" font-weight="700" text-anchor="middle" fill="'+(cur[i]<45?"#FF7C97":"#B4B8E8")+'">'+l+'</text>'});
 var dots=cur.map(function(v,i){var p=pt(v,i);return '<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3.2" fill="'+(v<45?"#FF4D73":"#8B7BFF")+'" stroke="#0F1030" stroke-width="1.5"/>'}).join("");
 function row(n,c,r,gap,sev){var w=c/r*100;return '<div class="gp"><span>'+n+'</span><div class="tr"><b style="width:'+w+'%" class="'+sev+'"></b></div><em class="num">'+(gap?'−'+gap:'충분')+'</em></div>'}
 return ''+
 '<div class="hd"><h4>보장 공백 리포트<small>박○○ 님 · 38세 · 가입 7건 · 월 ₩286,000</small></h4><span class="ic" data-tap="리포트 PDF를 저장했어요">⤓</span></div>'+
 '<div class="rd"><svg viewBox="0 0 260 212"><defs><radialGradient id="a05g"><stop offset="0" stop-color="#8B7BFF" stop-opacity=".15"/><stop offset="1" stop-color="#8B7BFF" stop-opacity=".02"/></radialGradient></defs>'+g+'<polygon points="'+poly(rec)+'" fill="none" stroke="#3DE0A6" stroke-width="1.4" stroke-dasharray="4 3"/><polygon points="'+poly(cur)+'" fill="rgba(139,123,255,.32)" stroke="#8B7BFF" stroke-width="2"/>'+dots+'</svg>'+
  '<div class="sc"><span>보장 충족률</span><b class="num">62<small>%</small></b></div><div class="lgd"><span><i class="a"></i>현재 보장</span><span><i class="b"></i>권장 수준</span></div></div>'+
 '<div class="alert" data-tap="뇌·심장 보완 설계를 시작해요"><span>!</span><p><b>가장 큰 공백 · 뇌·심장 진단비</b>뇌졸중·심근경색 진단 시 보장 ₩1,500만 (권장 ₩5,000만)</p></div>'+
 '<div class="gps">'+
  row("암 진단비",3000,5000,"2,000만","m")+row("뇌·심장 진단비",1500,5000,"3,500만","h")+row("운전자 합의금",5000,2e4,"1.5억","h")+row("상해 후유장해",8000,1e4,"2,000만","m")+row("사망 보장",12000,1.5e4,"3,000만","l")+row("실손 의료비",5000,5000,"","ok")+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="고객에게 리포트를 보냈어요">공유</span><span class="b1" data-tap="보완 설계안을 만들었어요">보완 설계안 만들기</span></div>'}
};

LX["동물병원 예약·진료 기록"]={cls:"s-a06",time:"11:20",cap:"반려동물별 예약과 진료·접종 기록",
 body:function(){return ''+
 '<div class="ph"><img src="lx/img/pet-vet-poodle.jpg" alt=""><div class="bar"><span class="bk">‹</span><span class="tb">초코 · 푸들 · 6살</span><span class="bk" data-tap="병원 전화를 연결해요">☎</span></div>'+
  '<div class="pn"><b>초코</b><span>수컷(중성화) · 5.8kg · 마지막 내원 9/13</span></div></div>'+
 '<div class="pets"><span class="on"><img src="lx/img/pet-vet-poodle.jpg" alt="">초코</span><span data-tap="나비로 전환했어요"><img src="lx/img/pet-cat.jpg" alt="">나비</span><span class="add" data-tap="반려동물을 추가해요">＋</span></div>'+
 '<div class="tk"><div class="l"><small>다음 예약</small><b class="num">10.14<em>화</em></b><span class="num">15:30</span></div><div class="r"><p>종합 접종 · 구강 검진<small>하늘동물병원 · 김○○ 수의사</small></p><div class="ac"><span data-tap="예약을 변경해요">변경</span><span class="y" data-tap="길찾기를 열었어요">길찾기</span></div></div></div>'+
 '<div class="vx"><h5>접종·예방<small>다음 일정</small></h5><div class="vc"><span class="ok"><i>✓</i>종합백신<small>26.10.14 예정</small></span><span class="ok"><i>✓</i>광견병<small>26.03.02</small></span><span class="wn"><i>!</i>심장사상충<small>10.20 투약</small></span><span class="ok"><i>✓</i>켄넬코프<small>26.05.11</small></span></div></div>'+
 '<div class="rc"><h5>진료 기록<small>전체 보기 ›</small></h5>'+
  '<div class="it"><time class="num">09.13</time><i></i><p>피부 알레르기 진료<small>항히스타민 5일 · 약용샴푸 · 진료비 ₩48,000</small></p></div>'+
  '<div class="it"><time class="num">06.02</time><i></i><p>스케일링 · 구강 검진<small>치석 2단계 · 진료비 ₩165,000</small></p></div>'+
 '</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="진료 기록을 공유했어요">기록 공유</span><span class="b1" data-tap="진료 예약을 신청했어요">진료 예약하기</span></div>'}
};

LX["사료 구독 배송 관리"]={cls:"s-a07",time:"7:32",cap:"남은 사료 일수와 다음 배송을 한 번에",
 body:function(){var st=["주문","포장","출고","배송중","도착"];
 var stp=st.map(function(s,i){return '<span class="'+(i<3?"d":"")+(i==2?" c":"")+'"><i>'+(i<2?"✓":i==2?"●":"")+'</i>'+s+'</span>'}).join("");
 function up(d,w,t,p,on){return '<div class="u"><div class="dt"><b class="num">'+d+'</b><span>'+w+'</span></div><p>'+t+'<small>'+p+'</small></p><span class="sw'+(on?"":" off")+'" data-sw></span></div>'}
 return ''+
 '<div class="top"><div class="hd"><h4>사료 구독<small>몽이네 · 말티푸 3살 · 구독 8개월차</small></h4><span class="ic" data-tap="구독 설정을 열었어요">⚙</span></div>'+
  '<div class="pd"><img src="lx/img/pet-food.jpg" alt=""><div><em>정기배송 -15%</em><b>연어 그레인프리 어덜트</b><span>2kg × 2봉 · 월 <b class="num">₩64,800</b></span></div></div></div>'+
 '<div class="rg"><div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#FFE8D6" stroke-width="11"/><circle cx="50" cy="50" r="40" fill="none" stroke="#FF7A1A" stroke-width="11" stroke-linecap="round" stroke-dasharray="145 252" transform="rotate(-90 50 50)"/></svg><b class="num">9<small>일</small></b></div>'+
  '<div class="rt"><small>남은 사료</small><p>10월 20일경 소진 예상</p><div class="nx"><span>다음 배송</span><b class="num">10.15 (수)</b></div></div></div>'+
 '<div class="tk"><h5>내일 14시 도착 · 송장 <span class="num">6811-4720-3355</span></h5><div class="stp">'+stp+'</div></div>'+
 '<div class="cy"><h5>배송 주기</h5><div class="sg"><span>2주</span><span class="on">4주</span><span>6주</span><span>8주</span></div></div>'+
 '<div class="ul"><h5>예정된 배송<small>켜면 발송 · 끄면 건너뛰기</small></h5>'+up("11.12","수","연어 그레인프리 2kg×2","₩64,800 · 쿠폰 적용",1)+up("12.10","수","연어 그레인프리 2kg×2","₩64,800",1)+up("01.07","수","연어 그레인프리 2kg×2","₩64,800",0)+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="이번 배송을 건너뛰었어요">건너뛰기</span><span class="b1" data-tap="배송일을 변경했어요">배송일 변경하기</span></div>'}
};

LX["중고차 매물 일괄 등록"]={cls:"s-a08",time:"16:08",cap:"한 번 입력으로 여러 중고차 플랫폼에 동시 등록",
 body:function(){function pl(l,col,n,s,k,v){return '<div class="pl"><span class="lg" style="background:'+col+'">'+l+'</span><p>'+n+'<small>'+s+'</small></p>'+(k=="ok"?'<em class="ok">✓ 노출 중</em>':k=="go"?'<div class="pg"><i style="width:'+v+'%"></i></div><em class="go num">'+v+'%</em>':k=="er"?'<em class="er">확인 필요</em>':'<em class="wt">대기</em>')+'</div>'}
 return ''+
 '<div class="hd"><span class="bk">‹</span><h4>매물 일괄 등록<small>입력 1회 · 5개 플랫폼 동시 송출</small></h4><span class="ic" data-tap="임시저장했어요">저장</span></div>'+
 '<div class="ph"><img src="lx/img/car-sedan.jpg" alt=""><span class="n">사진 14장 ▸</span><div class="tg"><span>무사고</span><span>1인 소유</span><span>정식 출고</span></div></div>'+
 '<div class="ti"><div><b>중형 세단 2.0 프리미엄</b><small>2022년 3월식 · 31,400km · 휘발유 · 자동</small></div></div>'+
 '<div class="pr"><div class="r"><span>판매 희망가</span><b class="num">₩2,380<small>만원</small></b></div><div class="mk"><i></i><u style="left:46%"></u></div><p>시세 범위 <b>2,290~2,460만</b> · 중간값 대비 <b>+40만</b></p></div>'+
 '<div class="pls"><h5>등록 플랫폼<small>3/5 완료</small></h5>'+pl("차","#E5384D","차차장터","10:22 등록 완료","ok")+pl("오","#2F6BFF","오토핀","사진 업로드 중","go",64)+pl("카","#14A38B","카모아","10:23 등록 완료","ok")+pl("모","#F08A24","모터리스트","차량번호 인증 필요","er")+pl("달","#7A4DFF","달려요중고","대기 중 · 순서 5","wt")+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="가격을 일괄 수정해요">가격 수정</span><span class="b1" data-tap="5곳에 일괄 등록을 시작했어요">5곳에 한 번에 등록</span></div>'}
};

LX["정비소 예약·견적"]={cls:"s-a09",time:"13:15",cap:"서비스 선택 → 시간 선택 → 견적 확인",
 body:function(){var T=[["09:00",0],["10:30",1],["12:00",0],["13:30",0],["15:00",2],["16:30",0]];
 var ts=T.map(function(t){return '<span class="'+(t[1]==1?"on":t[1]==2?"x":"")+' num">'+t[0]+'</span>'}).join("");
 var ds=[["월","13"],["화","14"],["수","15"],["목","16"],["금","17"]].map(function(d,i){return '<span class="'+(i==1?"on":"")+'"><em>'+d[0]+'</em><b class="num">'+d[1]+'</b></span>'}).join("");
 return ''+
 '<div class="ph"><img src="lx/img/car-lift.jpg" alt=""><span class="bk">‹</span><div class="nm"><b>한결 카센터 성남점</b><span>★ 4.8 (312) · 1.4km · 오늘 18:30까지</span></div></div>'+
 '<div class="sv"><span class="on">엔진오일 교환</span><span class="on">브레이크 패드</span><span>에어컨 필터</span><span>타이어 교체</span><span>배터리</span></div>'+
 '<div class="dp"><h5>날짜 · 시간<small>10월</small></h5><div class="ds">'+ds+'</div><div class="ts">'+ts+'</div></div>'+
 '<div class="rc"><div class="rh"><b>예상 견적서</b><span class="num">NO. 1014-0187</span></div>'+
  '<div class="l"><span>합성 엔진오일 5W-30 (4L)<small>부품</small></span><b class="num">62,000</b></div>'+
  '<div class="l"><span>오일 필터<small>부품</small></span><b class="num">12,000</b></div>'+
  '<div class="l"><span>앞 브레이크 패드 세트<small>부품</small></span><b class="num">98,000</b></div>'+
  '<div class="l"><span>교환 공임 (오일+패드)<small>공임</small></span><b class="num">70,000</b></div>'+
  '<div class="tt"><span>합계 <small>(VAT 포함)</small></span><b class="num">₩242,000</b></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="정비소에 문의 채팅을 열었어요">문의</span><span class="b1" data-tap="10월 14일 10:30 예약을 확정했어요">10.14 (화) 10:30 예약 확정</span></div>'}
};

LX["차량 정비 이력 관리"]={cls:"s-a10",time:"20:03",cap:"차량별 정비 타임라인과 다음 점검 게이지",
 body:function(){function it(ic,col,t,d,km,cost,sh,last){return '<div class="it'+(last?" nx":"")+'"><span class="ic2" style="background:'+col+'">'+ic+'</span><div><b>'+t+'</b><small>'+d+' · '+km+' · '+sh+'</small></div><em class="num">'+cost+'</em></div>'}
 return ''+
 '<div class="hd"><h4>정비 이력<small>내 차고 · 2대 등록</small></h4><span class="ic" data-tap="차량을 추가해요">＋</span></div>'+
 '<div class="cars"><span class="on"><i>●</i>12가 3456<small>중형 SUV · 2021</small></span><span data-tap="다른 차량으로 전환했어요"><i>○</i>45나 7890<small>경차 · 2019</small></span></div>'+
 '<div class="gc"><svg viewBox="0 0 200 112"><path d="M20 100A80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="14" stroke-linecap="round"/><path d="M20 100A80 80 0 0 1 180 100" fill="none" stroke="url(#a10)" stroke-width="14" stroke-linecap="round" stroke-dasharray="190 252"/><defs><linearGradient id="a10"><stop offset="0" stop-color="#2BD9E6"/><stop offset="1" stop-color="#7CF29C"/></linearGradient></defs><text x="100" y="82" text-anchor="middle" font-size="9" fill="#7F98A0">엔진오일 교환까지</text><text x="100" y="104" text-anchor="middle" font-size="24" font-weight="700" fill="#fff" font-family="IBM Plex Mono,monospace">1,240km</text></svg>'+
  '<div class="gi"><div><span>현재 주행</span><b class="num">48,760km</b></div><div><span>누적 정비비</span><b class="num">₩1.82M</b></div><div><span>정비 횟수</span><b class="num">11회</b></div></div></div>'+
 '<div class="up"><h5>다음 점검 예정</h5><div class="ch"><span class="w">타이어 로테이션<b>50,000km</b></span><span>브레이크액<b>2026.12</b></span><span>자동차 검사<b>2027.03</b></span></div></div>'+
 '<div class="tl"><h5>정비 타임라인<small>최신순</small></h5>'+
  it("🛠","#2BD9E6","엔진오일·필터 교환","9월 2일","46,950km","₩98,000","한결정비",1)+
  it("⚙","#F5B83D","브레이크 패드 교체 (앞)","6월 14일","42,310km","₩186,000","동부카센터")+
  it("◎","#7CF29C","타이어 4본 교체","3월 3일","38,120km","₩520,000","타이어랜드")+
  it("🔋","#B58CFF","배터리 교체","11월 19일","31,008km","₩142,000","한결정비")+'</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="영수증을 스캔해요">📷 영수증</span><span class="b1" data-tap="정비 기록을 추가했어요">정비 기록 추가</span></div>'}
};

LX["숙박 채널 재고 동기화"]={cls:"s-a11",time:"10:41",cap:"채널별 남은 객실을 한 번에 맞춰요",
 body:function(){var days=["토","일","월","화","수","목","금"],dn=[11,12,13,14,15,16,17];
 var ch=[["스테이픽","#FF5A7A",[2,0,3,5,4,1,0],"방금 동기화","ok"],["호텔온","#2F8CFF",[2,0,3,5,4,2,0],"동기화 중…","go"],["트립나우","#F5A524",[2,1,3,5,4,1,0],"3분 지연","wn"],["자사 홈페이지","#3DD9C0",[2,0,3,5,4,1,0],"방금 동기화","ok"]];
 var hd='<div class="gr hr"><span></span>'+days.map(function(d,i){return '<em class="'+(i==0?"on":"")+'">'+d+'<b class="num">'+dn[i]+'</b></em>'}).join("")+'</div>';
 var rows=ch.map(function(c){return '<div class="chn"><div class="cn"><i style="background:'+c[1]+'"></i><b>'+c[0]+'</b><span class="'+c[4]+'">'+c[3]+'</span></div><div class="gr"><span></span>'+c[2].map(function(v){return '<u class="'+(v==0?"z":v<2?"l":"")+' num">'+(v==0?"마감":v)+'</u>'}).join("")+'</div></div>'}).join("");
 return ''+
 '<div class="ph"><img src="lx/img/hotel-ocean.jpg" alt=""><div class="hd"><h4>재고 동기화<small>속초 파도리 호텔 · 객실 12실</small></h4><span class="ic" data-tap="동기화 규칙을 열었어요">⚙</span></div><div class="rm"><b>오션뷰 디럭스 트윈</b><span>총 5실 · 판매가 ₩189,000</span></div></div>'+
 '<div class="al"><span>⚠</span><p><b>오버부킹 방지</b>호텔온 10/12 예약 1건 확정 → 3개 채널 재고 −1 반영 중</p></div>'+
 '<div class="mx"><h5>7일 잔여 객실<small>10.11 ~ 10.17</small></h5>'+hd+rows+'</div>'+
 '<div class="lg"><h5>동기화 기록</h5><div><time class="num">10:41</time><p>자사 홈페이지 예약 1건<small>스테이픽·호텔온·트립나우 재고 −1</small></p></div><div><time class="num">10:12</time><p>트립나우 취소 1건<small>10/15 재고 +1 복구</small></p></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="마감 처리를 열었어요">일괄 마감</span><span class="b1" data-tap="전 채널 재고를 동기화했어요">↻ 전 채널 재고 동기화</span></div>'}
};

LX["여행 견적·일정표 생성"]={cls:"s-a12",time:"15:27",cap:"일정이 짜이면 견적서가 바로 만들어져요",
 body:function(){function ev(t,i,n,s,c,mv){return (mv?'<div class="mv">'+mv+'</div>':'')+'<div class="ev"><time class="num">'+t+'</time><i>'+i+'</i><p>'+n+'<small>'+s+'</small></p><b class="num">'+c+'</b></div>'}
 return ''+
 '<div class="ph"><img src="lx/img/jeju-coast.jpg" alt=""><div class="bar"><span class="bk">‹</span><span class="pill">견적 #T-1011</span></div><div class="tt"><b>제주 3박 4일</b><span>10.24(토) ~ 10.27(화) · 성인 2 · 아동 1</span></div></div>'+
 '<div class="dy"><span class="on">Day 1<small>24일</small></span><span>Day 2<small>25일</small></span><span>Day 3<small>26일</small></span><span>Day 4<small>27일</small></span></div>'+
 '<div class="tl"><h5>Day 1 · 서쪽 해안<small>예상 ₩312,000</small></h5>'+
  ev("09:40","✈","김포 → 제주 도착","항공 3인 · 렌터카 수령","₩486,000")+
  ev("11:30","🍜","고기국수 점심","애월 · 3인","₩36,000","렌터카 25분")+
  ev("13:30","🌊","해안도로 드라이브 · 카페","한담 해안산책로","₩18,000","18분")+
  ev("16:00","🏨","해뜰녘 리조트 체크인","오션뷰 패밀리 · 3박","₩612,000","40분")+'</div>'+
 '<div class="sh"><div class="r"><span>총 예상 견적</span><b class="num">₩2,184,000</b></div><div class="st"><i style="width:34%;background:#2F8CFF"></i><i style="width:28%;background:#14C2A3"></i><i style="width:14%;background:#FFB020"></i><i style="width:12%;background:#FF6B8A"></i><i style="width:12%;background:#B58CFF"></i></div><div class="lg"><span><s style="background:#2F8CFF"></s>항공</span><span><s style="background:#14C2A3"></s>숙박</span><span><s style="background:#FFB020"></s>렌터카</span><span><s style="background:#FF6B8A"></s>식비</span><span><s style="background:#B58CFF"></s>입장</span></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="일정을 다시 짜고 있어요">다시 짜기</span><span class="b1" data-tap="견적서 PDF를 고객에게 보냈어요">견적서 PDF 만들어 보내기</span></div>'}
};

LX["단체 여행 운영 관리"]={cls:"s-a13",time:"6:58",cap:"출발 당일 인원·탑승·식사를 한눈에",
 body:function(){var seats="",f=[1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1];
 var idx=0;for(var r=0;r<11;r++){seats+='<div class="rw">';for(var c=0;c<4;c++){if(c==2)seats+='<s></s>';seats+='<i class="'+(f[idx++]?"f":"")+'"></i>'}seats+='</div>'}
 seats+='<div class="rw back">'+[1,1,0,1,1].map(function(x){return '<i class="'+(x?"f":"")+'"></i>'}).join("")+'</div>';
 function pk(n,t,a,b,s){return '<div class="pk '+s+'"><i></i><p>'+n+'<small>'+t+'</small></p><b class="num">'+a+'<small>/'+b+'</small></b></div>'}
 return ''+
 '<div class="hd"><h4>단체 운영<small>한소리산악회 1박 2일 · 10.11(토) 가평</small></h4><span class="ic" data-tap="참가자 명단을 열었어요">명단</span></div>'+
 '<div class="bs"><img src="lx/img/coach-bus.jpg" alt=""><div><b>45인승 전세버스 1호차</b><span>07:30 잠실 출발 · 기사 박○○</span></div><em>운행 중</em></div>'+
 '<div class="kp"><div><span>참가</span><b class="num">42<small>/45명</small></b><u><i style="width:93%"></i></u></div><div><span>식사</span><b class="num">47<small>끼</small></b><u><i style="width:100%"></i></u></div><div><span>객실</span><b class="num">12<small>/14실</small></b><u><i style="width:86%"></i></u></div></div>'+
 '<div class="mp"><div class="sm"><h5>좌석<small>탑승 38</small></h5><div class="bus">'+seats+'</div></div>'+
  '<div class="pks"><h5>탑승 지점</h5>'+pk("사당역 2번 출구","07:10","14","14","ok")+pk("잠실역 8번 출구","07:30","16","18","go")+pk("수원 광교","08:00","8","10","wt")+
  '<div class="ml"><h5>식사 특이사항</h5><span>채식 3</span><span>갑각류 알레르기 2</span><span>할랄 0</span></div></div></div>'+
 '<div class="sc"><h5>오늘 일정<small>예약 확인 완료</small></h5><div><span data-tap="점심 식당에 인원을 전달했어요"><b class="num">11:30</b>점심 한정식<em>42명</em></span><span><b class="num">14:00</b>레일바이크<em>40명</em></span><span><b class="num">18:00</b>바비큐 · 객실<em>47명</em></span></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="미탑승자에게 전화를 걸어요">미탑승 4명</span><span class="b1" data-tap="출발 안내 문자를 보냈어요">출발 안내 문자 발송</span></div>'}
};

})();
