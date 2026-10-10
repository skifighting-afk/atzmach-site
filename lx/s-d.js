/* ATZ LINEUP — set d (15 screens) */
(function(){
"use strict";
var LX=window.LX=window.LX||{};
function hd(t,s,r){return '<div class="hd"><h4>'+t+'<small>'+s+'</small></h4>'+(r||'')+'</div>'}
function pts(a,w,h,mx){return a.map(function(v,i){return [(i*w/(a.length-1)).toFixed(1),(h-v/mx*h).toFixed(1)]})}
function line(a,w,h,mx){return pts(a,w,h,mx).map(function(p,i){return (i?"L":"M")+p[0]+" "+p[1]}).join("")}
function ft1(l,t,extra){return '<div class="ft">'+(extra||'')+'<span class="b1" data-tap="'+t+'">'+l+'</span></div>'}

/* ===== 01 광고 성과 통합 대시보드 ===== */
LX["광고 성과 통합 대시보드"]={cls:"s-d01",time:"9:12",cap:"매체별 광고비·ROAS를 한 화면에",
 body:function(){
  var rev=[52,61,58,70,66,82,91],sp=[14,15,14,17,16,19,21];
  var med=[["검","검색광고","5,820,000","512%",100,"#4D8DFF"],["S","SNS 피드","4,960,000","388%",76,"#FF5C93"],["영","영상 광고","3,540,000","301%",59,"#FFB020"],["쇼","쇼핑 광고","2,780,000","476%",93,"#27D3A2"],["배","배너 디스플레이","1,320,000","164%",32,"#A58BFF"]];
  var days=["5","6","7","8","9","10","11"];
  return hd('광고 성과','(주)모아커머스 · 10/5 – 10/11','<span class="rg">7일 ▾</span>')+
  '<div class="hero"><div class="k"><span>통합 ROAS</span><b class="num">412<small>%</small></b><em class="num">▲ 38%p vs 지난주</em></div>'+
   '<div class="k2"><div><span>광고비</span><b class="num">₩18.42M</b></div><div><span>전환매출</span><b class="num">₩75.9M</b></div></div>'+
   '<svg viewBox="0 0 330 86" preserveAspectRatio="none" class="ch"><defs><linearGradient id="d01g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4D8DFF" stop-opacity=".45"/><stop offset="1" stop-color="#4D8DFF" stop-opacity="0"/></linearGradient></defs>'+
   '<path d="'+line(rev,330,70,100)+'L330 86L0 86Z" fill="url(#d01g)"/><path d="'+line(rev,330,70,100)+'" fill="none" stroke="#4D8DFF" stroke-width="2"/><path d="'+line(sp,330,70,100)+'" fill="none" stroke="#FFB020" stroke-width="1.6" stroke-dasharray="4 3"/>'+
   '<circle cx="330" cy="'+(70-91*.7).toFixed(1)+'" r="3.5" fill="#fff" stroke="#4D8DFF" stroke-width="2"/></svg>'+
   '<div class="ax">'+days.map(function(d){return '<i>'+d+'</i>'}).join("")+'</div>'+
   '<div class="lg"><span><i style="background:#4D8DFF"></i>전환매출</span><span><i style="background:#FFB020"></i>광고비</span></div></div>'+
  '<div class="mh"><b>매체별 성과</b><span>광고비 · ROAS</span></div>'+
  '<div class="ml">'+med.map(function(m){return '<div class="mr" data-tap="'+m[1]+' 상세로 이동해요"><span class="ic" style="background:'+m[5]+'">'+m[0]+'</span><div class="mm"><p>'+m[1]+'<em class="num">'+m[3]+'</em></p><div class="bar"><i style="width:'+m[4]+'%;background:'+m[5]+'"></i></div></div><span class="sp num">'+m[2]+'</span></div>'}).join("")+'</div>'+
  '<div class="al" data-tap="SNS 피드 입찰가를 조정했어요"><span class="dot"></span><p>SNS 피드 CPA가 어제보다 <b>23% 상승</b><small>입찰가 하향을 추천해요</small></p><span class="go">조정</span></div>'},
 foot:function(){return '<div class="tb"><span class="on"><i>▦</i>대시보드</span><span><i>◎</i>캠페인</span><span><i>☰</i>보고서</span><span><i>◉</i>알림</span></div>'}
};

/* ===== 02 클라이언트 보고서 자동 작성 ===== */
LX["클라이언트 보고서 자동 작성"]={cls:"s-d02",time:"10:05",cap:"데이터를 모아 보고서가 스스로 써져요",
 body:function(){
  var b=[38,52,47,66,58,81,92],d=["월","화","수","목","금","토","일"];
  return hd('보고서 작성','모아커머스 · 10월 2주차','<span class="ai">AI 초안</span>')+
  '<div class="st"><span class="dn">수집</span><span class="dn">분석</span><span class="dn">코멘트</span><span class="on">검수</span><span>발송</span></div>'+
  '<div class="sheet"><div class="sh1"><span class="lg">M</span><div><b>주간 광고 성과 보고서</b><small>2026.10.05 – 10.11 · 모아커머스 귀중</small></div></div>'+
   '<div class="kp"><div><small>광고비</small><b class="num">18.4M</b></div><div><small>전환수</small><b class="num">1,284</b></div><div><small>CPA</small><b class="num">14.3K</b></div><div><small>ROAS</small><b class="num up">412%</b></div></div>'+
   '<div class="ct"><p>일별 전환수</p><svg viewBox="0 0 300 80" preserveAspectRatio="none">'+b.map(function(v,i){return '<rect x="'+(i*43+6)+'" y="'+(70-v*.7).toFixed(1)+'" width="28" height="'+(v*.7).toFixed(1)+'" rx="4" fill="'+(i==6?"#3B5BDB":"#C9D3F7")+'"/><text x="'+(i*43+20)+'" y="80" font-size="8" fill="#8A91A5" text-anchor="middle">'+d[i]+'</text>'}).join("")+'</svg></div>'+
   '<div class="mx"><p>매체별 ROAS</p><div><span style="width:100%">검색 512%</span></div><div><span style="width:93%">쇼핑 476%</span></div><div><span style="width:76%">SNS 388%</span></div></div>'+
   '<div class="in"><p class="ih">핵심 인사이트 <span>AI 작성</span></p><ul><li>일요일 전환수가 주중 평균 대비 <b>+41%</b></li><li>쇼핑 광고 ROAS 476%로 효율 1위</li><li>배너 디스플레이는 예산 20% 감축 권장</li></ul></div>'+
  '</div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="문구 수정 모드로 전환했어요">문구 수정</span><span class="b1" data-tap="클라이언트에게 보고서를 발송했어요">PDF로 발송하기</span></div>'}
};

/* ===== 03 광고 예산 페이싱 알림 ===== */
LX["광고 예산 페이싱 알림"]={cls:"s-d03",time:"14:30",cap:"예산이 너무 빨리 닳으면 먼저 알려줘요",
 body:function(){
  var cp=[["가을 신상 검색","8,400,000","6,720,000",80,"과속","hot"],["브랜드 키워드","3,000,000","1,020,000",34,"정상","ok"],["리타겟팅 영상","6,000,000","1,260,000",21,"저속","lo"]];
  var a=Math.PI,r=92,cx=110,cy=106;
  function pt(p,rr){var t=Math.PI-Math.PI*p/100;return (cx+rr*Math.cos(t)).toFixed(1)+" "+(cy-rr*Math.sin(t)).toFixed(1)}
  return hd('예산 페이싱','10월 · 11일차 / 31일 (35%)','<span class="bell" data-tap="알림 설정을 열었어요">알림 2</span>')+
  '<div class="top"><svg viewBox="0 -16 220 140" class="gz"><path d="M'+pt(0,r)+'A'+r+' '+r+' 0 0 1 '+pt(100,r)+'" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="16" stroke-linecap="round"/><path d="M'+pt(0,r)+'A'+r+' '+r+' 0 0 1 '+pt(68,r)+'" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round"/>'+
   '<path d="M'+pt(35,r-14)+'L'+pt(35,r+14)+'" stroke="#FFE066" stroke-width="3"/><text x="'+(+pt(35,r+26).split(" ")[0])+'" y="'+(+pt(35,r+26).split(" ")[1])+'" font-size="9" font-weight="700" fill="#FFE066" text-anchor="middle">권장 35%</text></svg>'+
   '<div class="gv"><b class="num">68<small>%</small></b><span>월 예산 소진</span></div></div>'+
  '<div class="wr"><span class="wi">!</span><p><b>이 속도면 10/20에 예산이 소진돼요</b><small>예상 초과 ₩4,150,000 · 일 예산 조정이 필요해요</small></p></div>'+
  '<div class="cl">'+cp.map(function(c){return '<div class="cc '+c[5]+'"><div class="r1"><p>'+c[0]+'<small class="num">₩'+c[2]+' / ₩'+c[1]+'</small></p><span class="tg">'+c[4]+'</span></div><div class="pb"><i style="width:'+c[3]+'%"></i><u></u></div><div class="r2"><span class="num">소진 '+c[3]+'%</span><span>권장 35%</span></div></div>'}).join("")+'</div>'+
  '<div class="rw"><p>소진율 80% 도달 시 알림<small>카카오톡 · 담당 마케터 2명</small></p><span class="sw" data-sw></span></div>'},
 foot:function(){return ft1('일 예산 자동 조정하기','일 예산을 ₩210,000으로 조정했어요')}
};

/* ===== 04 광고 소재 제작 요청 관리 ===== */
LX["광고 소재 제작 요청 관리"]={cls:"s-d04",time:"11:20",cap:"시안 → 검수 → 고객 승인까지 한 줄로",
 body:function(){
  var st=["요청","제작","내부검수","고객승인","집행"];
  return hd('소재 요청 #214','세럼 신제품 · 인스타 피드 4종','<span class="due">D-3</span>')+
  '<div class="stp">'+st.map(function(s,i){return '<span class="'+(i<3?"dn":i==3?"on":"")+'"><i>'+(i<3?"✓":i+1)+'</i>'+s+'</span>'}).join("")+'</div>'+
  '<div class="card"><div class="im"><img src="lx/img/cosmetic-serum.jpg" alt=""><span class="v">시안 v3</span><span class="sz">1080 × 1350</span></div>'+
   '<div class="inf"><div><small>카피</small><b>하루 한 방울, 촉촉 세럼</b></div><div><small>담당</small><b>박○○ 디자이너</b></div></div></div>'+
  '<div class="vs"><span class="vv"><img src="lx/img/cosmetic-serum.jpg" alt=""><em>v1</em></span><span class="vv"><img src="lx/img/cosmetic-serum.jpg" alt="" style="filter:hue-rotate(40deg)"><em>v2</em></span><span class="vv on"><img src="lx/img/cosmetic-serum.jpg" alt=""><em>v3</em></span><span class="vv add" data-tap="새 파일을 업로드해요">+</span></div>'+
  '<div class="cm"><span class="av">정</span><div><p><b>정○○ 고객사 담당</b> <small>10:48</small></p><span>제품 병이 더 크게 보였으면 해요. 로고는 하단 중앙으로요.</span></div></div>'+
  '<div class="cm me"><span class="av">박</span><div><p><b>박○○ 디자이너</b> <small>11:02</small></p><span>v3 반영 완료했습니다. 확인 부탁드려요!</span></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="수정 요청을 보냈어요">수정 요청</span><span class="b1" data-tap="고객사에 승인 요청을 보냈어요">승인 요청 보내기</span></div>'}
};

/* ===== 05 등하원 출결 알림 ===== */
LX["등하원 출결 알림"]={cls:"s-d05",time:"8:47",cap:"아이가 들어오면 바로 부모 폰으로",
 body:function(){
  var ev=[["15:30","하원 예정","차량 탑승 · 정문 인수","pend"],["12:10","점심 급식 완료","잡곡밥·소고기미역국 완식","ok"],["09:05","체온 36.5℃ 정상","등원 후 건강 체크 완료","ok"],["08:47","등원 완료","정문 · 엄마와 함께","ok"]];
  return hd('우리 아이 출결','햇살어린이집 · 10월 11일 (토)','<span class="bl" data-tap="알림이 꺼졌어요">알림</span>')+
  '<div class="kd"><span class="a on"><i>하</i>하늘반 이○○</span><span class="a"><i>별</i>별님반 이○○</span></div>'+
  '<div class="hero"><div class="pill"><i></i>현재 어린이집에 있어요</div><b class="num">08:47<small> 등원</small></b><p>하원 예정 <b class="num">15:30</b> · 6시간 43분 남음</p>'+
   '<div class="bar"><i></i><u></u></div><div class="bl2"><span>등원</span><span>점심</span><span>낮잠</span><span>하원</span></div></div>'+
  '<div class="hh">오늘의 알림</div><div class="nl">'+ev.map(function(e){return '<div class="n '+e[3]+'" data-tap="'+e[1]+' 알림을 확인했어요"><span class="ic">'+(e[3]=="ok"?"✓":"◷")+'</span><p>'+e[1]+'<small>'+e[2]+'</small></p><time class="num">'+e[0]+'</time></div>'}).join("")+'</div>'+
  '<div class="pk"><div class="pt"><b>귀가 인수자</b><small>오늘 하원 시 확인되는 사람</small></div><div class="av"><span>엄</span><span>할</span><span class="ad">+</span></div></div>'},
 foot:function(){return ft1('오늘 귀가 인수자 지정하기','할머니를 인수자로 지정했어요')}
};

/* ===== 06 보육료·급식비 청구 ===== */
LX["보육료·급식비 청구"]={cls:"s-d06",time:"13:02",cap:"항목별 청구서와 정부지원 차감",
 body:function(){
  var it=[["기본보육료 (만3세)","280,000",""],["정부 보육료 지원","−280,000","mn"],["급식비 (20일 × 2,400)","48,000",""],["간식비","22,000",""],["특별활동비 (영어·체육)","35,000",""],["차량 운영비","15,000",""]];
  return hd('10월분 청구서','햇살어린이집 · 하늘반 이○○','<span class="st">미납</span>')+
  '<div class="rc"><div class="rh"><small>청구번호 2610-0417</small><b>2026년 10월분<br>보육료·급식비</b><span class="num">납부기한 10.25 (일)</span></div>'+
   '<div class="ln"></div><div class="rows">'+it.map(function(r){return '<div class="rr '+r[2]+'"><span>'+r[0]+'</span><b class="num">'+r[1]+'</b></div>'}).join("")+'</div>'+
   '<div class="ln dsh"></div><div class="sm"><span>납부하실 금액</span><b class="num">₩120,000</b></div>'+
   '<div class="bk"><span>납부 계좌</span><b class="num">국민 123-45-678901 (햇살어린이집)</b></div>'+
   '<div class="qr"><svg viewBox="0 0 29 29">'+(function(){var s="",x=7;for(var i=0;i<29;i++)for(var j=0;j<29;j++){x=(x*73+i*31+j*17)%97;if(x%3==0||(i<7&&j<7&&(i%6==0||j%6==0||(i>1&&i<5&&j>1&&j<5)))||(i>21&&j<7&&(i%6==4||j%6==0||(i>23&&i<27&&j>1&&j<5)))||(i<7&&j>21&&(i%6==0||j%6==4||(i>1&&i<5&&j>23&&j<27))))s+='<rect x="'+j+'" y="'+i+'" width="1" height="1"/>'}return s})()+'</svg><p>QR 스캔 시 간편 납부<small>카드 · 계좌이체 · 가상계좌</small></p></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="영수증 PDF를 저장했어요">내역서</span><span class="b1" data-tap="₩120,000 결제를 진행해요">₩120,000 결제하기</span></div>'}
};

/* ===== 07 하루 활동 알림장 ===== */
LX["하루 활동 알림장"]={cls:"s-d07",time:"16:40",cap:"선생님이 남긴 오늘 하루 기록",
 body:function(){
  return hd('오늘의 알림장','하늘반 이○○ · 10월 11일 (토)','<span class="tc"><i>김</i>김○○ 선생님</span>')+
  '<div class="ph"><img src="lx/img/kids-class.jpg" alt=""><span class="tg">활동 사진 6장</span><div class="cp"><b>가을 낙엽 콜라주 만들기</b><span>10:30 · 미술 활동</span></div></div>'+
  '<div class="cd"><div><em>기분</em><b>좋음</b></div><div><em>식사</em><b>완식</b></div><div><em>낮잠</em><b class="num">1h 20m</b></div><div><em>배변</em><b class="num">2회</b></div><div><em>체온</em><b class="num">36.5</b></div></div>'+
  '<div class="th"><div class="b l"><span class="av">김</span><p>오늘 낙엽을 주워서 도화지에 붙여 봤어요. 친구들과 색깔 이야기를 정말 많이 나눴답니다.</p><time class="num">16:12</time></div>'+
  '<div class="b l"><span class="av hid"></span><p>점심도 밥 한 그릇 싹 비웠어요. 낮잠 후 기분 좋게 일어났어요.</p><time class="num">16:13</time></div>'+
  '<div class="b r"><p>감사합니다 선생님! 집에서도 낙엽 모아볼게요.</p><time class="num">16:31 · 읽음</time></div></div>'+
  '<div class="rq"><span>전달사항</span> 내일 <b>여벌옷 1벌</b>과 <b>물통</b>을 챙겨주세요.</div>'},
 foot:function(){return '<div class="ft"><span class="in" data-tap="답장 입력창을 열었어요">선생님께 답장 쓰기…</span><span class="b1" data-tap="알림장을 확인했어요">확인했어요</span></div>'}
};

/* ===== 08 예방접종 서류 추적 ===== */
LX["예방접종 서류 추적"]={cls:"s-d08",time:"9:30",cap:"누가 어떤 접종 서류를 냈는지 한눈에",
 body:function(){
  var v=["DTaP","MMR","수두","일뇌","A간염"];
  var r=[["김○○","하늘","22222"],["박○○","하늘","22212"],["이○○","하늘","21122"],["최○○","별님","22222"],["정○○","별님","12010"],["한○○","별님","22221"],["윤○○","햇님","22222"],["강○○","햇님","20100"],["조○○","햇님","22212"],["서○○","햇님","22222"]];
  var ic={2:'<i class="o">✓</i>',1:'<i class="w">…</i>',0:'<i class="x">✕</i>'};
  return hd('접종 서류 현황','만 3~5세 · 원아 30명','<span class="rg"><svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="#D5EBE8" stroke-width="5"/><circle cx="22" cy="22" r="18" fill="none" stroke="#0E9F8E" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+(113*.87).toFixed(1)+' 113" transform="rotate(-90 22 22)"/></svg><b class="num">87%</b></span>')+
  '<div class="sm"><div><b class="num">26</b><span>제출 완료</span></div><div class="w"><b class="num">3</b><span>검토 대기</span></div><div class="x"><b class="num">7</b><span>미제출</span></div></div>'+
  '<div class="fl"><span class="on">전체</span><span>미제출만</span><span>하늘반</span><span>별님반</span></div>'+
  '<div class="tbl"><div class="th"><span></span>'+v.map(function(x){return '<span>'+x+'</span>'}).join("")+'</div>'+
  r.map(function(x){return '<div class="tr" data-tap="'+x[0]+' 원아 서류를 열었어요"><span class="nm">'+x[0]+'<small>'+x[1]+'</small></span>'+x[2].split("").map(function(c){return '<span>'+ic[c]+'</span>'}).join("")+'</div>'}).join("")+'</div>'+
  '<div class="lgd"><span><i class="o">✓</i>제출</span><span><i class="w">…</i>검토 중</span><span><i class="x">✕</i>미제출</span></div>'},
 foot:function(){return ft1('미제출 7명에게 알림 발송','학부모 7명에게 알림톡을 보냈어요')}
};

/* ===== 09 HACCP 점검 기록 ===== */
LX["HACCP 점검 기록"]={cls:"s-d09",time:"6:50",cap:"현장에서 바로 찍어 남기는 CCP 점검표",
 body:function(){
  var it=[["CCP-1B 가열 중심온도","기준 ≥ 72℃","74.3","℃",1,86],["CCP-2P 금속검출 (Fe 1.5mm)","시험편 통과","감지","",1,100],["냉각 품온","기준 ≤ 5℃","6.1","℃",0,62],["작업자 위생 점검","8항목 중 8항목","8/8","",1,100]];
  return hd('HACCP 점검일지','2호 생산라인 · 오전 점검 10/11','<span class="nw num">06:50</span>')+
  '<div class="ph"><img src="lx/img/food-factory.jpg" alt=""><span class="lbl">LINE 2 · 가열·냉각 구간</span><span class="dt">점검자 최○○</span></div>'+
  '<div class="pr"><b class="num">3<small>/4</small></b><span>점검 완료</span><i><u style="width:75%"></u></i><em>이탈 1건</em></div>'+
  '<div class="ck">'+it.map(function(c){return '<div class="ci '+(c[4]?"ok":"ng")+'" data-tap="'+c[0]+' 항목을 열었어요"><span class="sq">'+(c[4]?"✓":"!")+'</span><div class="tx"><p>'+c[0]+'</p><small>'+c[1]+'</small><div class="g"><i style="width:'+c[5]+'%"></i></div></div><b class="num">'+c[2]+'<small>'+c[3]+'</small></b></div>'}).join("")+'</div>'+
  '<div class="dv"><span class="wi">!</span><p><b>냉각 품온 이탈 · 개선조치 필요</b><small>품온 6.1℃ → 급속냉각기 재가동 후 재측정</small></p></div>'+
  '<div class="sg"><span>점검자 서명</span><svg viewBox="0 0 120 30"><path d="M4 22C14 4 20 4 24 18S36 24 44 8 56 6 60 20 78 10 84 14 100 24 116 6" fill="none" stroke="#14316B" stroke-width="2" stroke-linecap="round"/></svg></div>'},
 foot:function(){return ft1('점검일지 서명·제출','HACCP 점검일지를 제출했어요')}
};

/* ===== 10 원재료 로트 추적 ===== */
LX["원재료 로트 추적"]={cls:"s-d10",time:"15:18",cap:"완제품 로트에서 원재료 공급까지 역추적",
 body:function(){
  function nd(x,y,w,t,s,c){return '<g><rect x="'+x+'" y="'+y+'" width="'+w+'" height="34" rx="8" fill="#10261F" stroke="'+c+'" stroke-width="1.2"/><text x="'+(x+8)+'" y="'+(y+15)+'" font-size="9.5" font-weight="700" fill="#EAF7F1">'+t+'</text><text x="'+(x+8)+'" y="'+(y+27)+'" font-size="8" fill="#7FA898" font-family="IBM Plex Mono,monospace">'+s+'</text></g>'}
  function ln(x1,y1,x2,y2,c){var m=(x1+x2)/2;return '<path d="M'+x1+' '+y1+'C'+m+' '+y1+' '+m+' '+y2+' '+x2+' '+y2+'" fill="none" stroke="'+(c||"#2E5C4B")+'" stroke-width="1.4"/>'}
  return hd('로트 추적','LOT 2610-DMP-0412 · 왕만두 400g','<span class="sc" data-tap="바코드 스캐너를 열었어요">스캔</span>')+
  '<div class="sb"><span class="num">2610-DMP-0412</span><b data-tap="추적을 다시 실행했어요">추적</b></div>'+
  '<div class="col"><span>완제품</span><span>반제품</span><span>원재료·공급사</span></div>'+
  '<svg class="tr" viewBox="0 0 340 292">'+
   ln(94,146,118,60)+ln(94,146,118,146)+ln(94,146,118,232)+
   ln(212,60,236,26)+ln(212,60,236,76)+ln(212,146,236,126)+ln(212,146,236,170)+ln(212,232,236,224,"#E5484D")+ln(212,232,236,268)+
   nd(0,129,94,"왕만두 400g","0412 · 10/11","#2BFF9E")+
   nd(118,43,94,"만두소 B-31","10/10 · 1.2t","#2E5C4B")+nd(118,129,94,"만두피 W-07","10/10 · 0.8t","#2E5C4B")+nd(118,215,94,"야채믹스 V-22","10/09 · 0.6t","#E5484D")+
   nd(236,9,104,"돈육 앞다리","H-1007 · 한우리","#2E5C4B")+nd(236,59,104,"양배추","C-0931 · 청솔농","#2E5C4B")+
   nd(236,109,104,"밀가루","F-2217 · 대한제분","#2E5C4B")+nd(236,153,104,"전분","S-0608 · 맑은전분","#2E5C4B")+
   nd(236,207,104,"부추 (이상)","G-0919 · 새벽농원","#E5484D")+nd(236,251,104,"당근","R-0922 · 청솔농","#2E5C4B")+
  '</svg>'+
  '<div class="im3"><div><b class="num">3</b><span>영향 완제품 로트</span></div><div><b class="num">4,820</b><span>출고 박스</span></div><div><b class="num">12</b><span>거래처</span></div></div>'+
  '<div class="rs"><span class="w">!</span><p><b>부추 G-0919 로트 부적합 통보</b><small>영향 완제품 3개 로트 · 출고 4,820박스 · 거래처 12곳</small></p></div>'},
 foot:function(){return ft1('회수 대상 범위 조회','회수 대상 12곳을 조회했어요')}
};

/* ===== 11 유통기한 관리 ===== */
LX["유통기한 관리"]={cls:"s-d11",time:"8:15",cap:"임박 품목부터 먼저 출고·처리",
 body:function(){
  var it=[["수제 왕만두 400g","LOT 0412 · 냉동창고 A-3","1,240","3","hot"],["김치만두 600g","LOT 0409 · 냉동창고 A-1","860","5","hot"],["고기교자 350g","LOT 0405 · 냉동창고 B-2","2,100","9","mid"],["야채만두 500g","LOT 0403 · 냉동창고 B-1","1,480","14","ok"]];
  var cal=[];for(var i=0;i<14;i++){var n=5+i;cal.push('<i class="'+(i==0?"td":i==3?"r":i==5?"r":i==9?"y":"")+'">'+(11+i>31?11+i-31:11+i)+'</i>')}
  return hd('유통기한 관리','완제품 창고 · 5개 품목 재고 8,680개','<span class="rg">FIFO</span>')+
  '<div class="ph"><img src="lx/img/food-dumplings.jpg" alt=""><div class="ov"><span class="big"><b class="num">4</b>건</span><p>7일 내 임박<small>폐기·할인 처리 필요</small></p></div></div>'+
  '<div class="st"><span class="on">전체 5</span><span class="r">임박 2</span><span>주의 1</span><span>양호 2</span></div>'+
  '<div class="ls">'+it.map(function(x){return '<div class="it '+x[4]+'" data-tap="'+x[0]+' 상세를 열었어요"><span class="dd num">D-'+x[3]+'</span><p>'+x[0]+'<small>'+x[1]+'</small></p><b class="num">'+x[2]+'<small>개</small></b></div>'}).join("")+'</div>'+
  '<div class="cl"><p>10월 · 11일부터 2주</p><div class="gr">'+cal.join("")+'</div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="할인 출고 대상으로 지정했어요">할인 출고</span><span class="b1" data-tap="임박 품목 폐기 처리를 요청했어요">폐기 처리 요청</span></div>'}
};

/* ===== 12 식품 표시 문구 검토 ===== */
LX["식품 표시 문구 검토"]={cls:"s-d12",time:"10:40",cap:"라벨 문구를 법 기준으로 자동 점검",
 body:function(){
  return hd('표시사항 검토','포기김치 1kg · 라벨 v2','<span class="sc"><b class="num">82</b>점</span>')+
  '<div class="lb"><div class="th"><img src="lx/img/food-kimchi.jpg" alt=""></div>'+
   '<div class="pp"><div class="nm"><b>맛있는 포기김치</b><small>식품유형 김치(절임배추) · 내용량 1kg</small></div>'+
   '<div class="r1"><span>원재료명</span><p>절임배추(국산) 78%, 고춧가루, 무, 멸치액젓<i class="p p1">1</i>, 마늘, 생강, 새우젓<i class="p p2">2</i></p></div>'+
   '<div class="r1"><span>소비기한</span><p>제조일로부터 90일 (냉장)</p></div>'+
   '<div class="r1"><span>영양정보</span><p>100g당 열량 28kcal · 나트륨 520mg <i class="p p3">3</i></p></div>'+
   '<div class="r1"><span>알레르기</span><p class="mt">표시 없음</p></div></div></div>'+
  '<div class="sm"><span class="r">오류 2</span><span class="y">권고 1</span><span class="g">적합 9</span></div>'+
  '<div class="is">'+
   '<div class="i r" data-tap="알레르기 문구를 자동 추가했어요"><i>1</i><p>알레르기 유발물질 표시 누락<small>새우 함유 → 「알레르기 유발물질: 새우, 대두」 추가</small></p><b>수정</b></div>'+
   '<div class="i r" data-tap="소비기한 표기를 수정했어요"><i>2</i><p>‘제조일로부터 90일’ 표기 부적합<small>소비기한 날짜(년월일)로 표기 필요</small></p><b>수정</b></div>'+
   '<div class="i y" data-tap="나트륨 표기를 확인했어요"><i>3</i><p>나트륨 함량 영양성분 단위 확인<small>1회 제공량 기준 병기 권고</small></p><b>확인</b></div>'+
   '<div class="i g"><i>✓</i><p>적합 9개 항목 통과<small>제품명 · 식품유형 · 내용량 · 원산지 · 보관방법 외</small></p></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="검토 이력을 열었어요">이력</span><span class="b1" data-tap="수정사항을 라벨에 반영했어요">수정사항 일괄 적용</span></div>'}
};

/* ===== 13 상조 납입 관리 ===== */
LX["상조 납입 관리"]={cls:"s-d13",time:"11:00",cap:"60회 납입 진행과 다음 납입일",
 body:function(){
  var cells="";for(var i=0;i<60;i++){cells+='<i class="'+(i<38?"d":i==38?"n":"")+'"></i>'}
  return hd('납입 현황','평안 라이프 · 가입번호 PA-2209-4417','<span class="mm">김○○ 님</span>')+
  '<div class="ring"><svg viewBox="0 0 150 150"><circle cx="75" cy="75" r="62" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="9"/><circle cx="75" cy="75" r="62" fill="none" stroke="#D8B66A" stroke-width="9" stroke-linecap="round" stroke-dasharray="'+(389.6*38/60).toFixed(1)+' 390" transform="rotate(-90 75 75)"/></svg><div class="rc"><span>납입 회차</span><b class="num">38<small>/60</small></b><em>63%</em></div></div>'+
  '<div class="am"><div><span>총 납입액</span><b class="num">₩7,600,000</b></div><div><span>잔여 납입</span><b class="num">₩4,400,000</b></div></div>'+
  '<div class="nx"><div class="dt"><b class="num">25</b><span>10월</span></div><p>다음 납입 · 39회차<small>월 ₩200,000 · 국민은행 자동이체</small></p><span class="dd">D-14</span></div>'+
  '<div class="gd"><p>납입 회차 지도<small>● 완료 38 · ◎ 이번 달 · ○ 예정 21</small></p><div class="cs">'+cells+'</div></div>'+
  '<div class="hs"><div><span>09.25</span><p>38회차 납입 완료</p><b class="num">200,000</b></div><div><span>08.25</span><p>37회차 납입 완료</p><b class="num">200,000</b></div><div><span>07.25</span><p>36회차 납입 완료</p><b class="num">200,000</b></div></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="납입 확인서를 발급했어요">확인서</span><span class="b1" data-tap="자동이체 설정을 열었어요">자동이체 변경</span></div>'}
};

/* ===== 14 장례 견적 안내 ===== */
LX["장례 견적 안내"]={cls:"s-d14",time:"21:10",cap:"차분하게, 한 번에 보는 상품 견적",
 body:function(){
  var it=[["빈소 사용 (3일)","1,200,000"],["제단 장식 · 국화","780,000"],["관·수의 · 장례용품","1,050,000"],["영구차 · 운구 차량","350,000"],["접객 · 식음 (조문객 80명)","1,120,000"],["장례지도사 · 진행","500,000"]];
  return hd('장례 견적 안내','24시간 상담 1577-0000','<span class="cl" data-tap="상담원을 연결해요">전화</span>')+
  '<div class="ph"><img src="lx/img/funeral-altar.jpg" alt=""><div class="ov"><small>선택하신 상품</small><b>가족 장례 · 3일장</b></div></div>'+
  '<div class="sg"><span>간소 <small>2일</small></span><span class="on">가족 <small>3일</small></span><span>정성 <small>3일</small></span></div>'+
  '<div class="ls">'+it.map(function(x){return '<div class="r"><span>'+x[0]+'</span><b class="num">'+x[1]+'</b></div>'}).join("")+'</div>'+
  '<div class="tt"><div><span>상조 회원 혜택</span><b class="num mn">−₩1,500,000</b></div><div class="big"><span>예상 장례 비용</span><b class="num">₩3,500,000</b></div></div>'+
  '<p class="nt">조문객 수·빈소 규모에 따라 달라질 수 있으며, 상담을 통해 확정됩니다.</p>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="상담 예약을 도와드릴게요">상담 예약</span><span class="b1" data-tap="견적서를 문자로 보내드렸어요">견적서 받기</span></div>'}
};

/* ===== 15 상담 예약·배정 ===== */
LX["상담 예약·배정"]={cls:"s-d15",time:"9:20",cap:"고객 상담을 상담사별 시간표에 배정",
 body:function(){
  var dy=[["일",12],["월",13],["화",14],["수",15],["목",16],["금",17],["토",18]];
  var slots=[["10:00",[["김○○ 고객","가입 상담","a"],["","","e"],["이○○ 고객","납입 변경","c"]]],["11:00",[["","","e"],["박○○ 고객","상품 안내","b"],["","","e"]]],["13:00",[["최○○ 고객","해약 문의","a"],["정○○ 고객","가입 상담","b"],["","","e"]]],["14:30",[["","","e"],["","","e"],["한○○ 고객","방문 상담","c"]]],["16:00",[["윤○○ 고객","가입 상담","a"],["","","e"],["","","e"]]]];
  return hd('상담 일정','10월 11일 (토) · 오늘 예약 9건','<span class="nb" data-tap="미배정 2건이 있어요">미배정 <b>2</b></span>')+
  '<div class="wk">'+dy.map(function(d,i){return '<span class="'+(i==0?"on":"")+'"><small>'+d[0]+'</small><b class="num">'+d[1]+'</b>'+(i<5?'<i></i>':'')+'</span>'}).join("")+'</div>'+
  '<div class="cn"><span></span><span class="a"><i>한</i>한○○ 팀장</span><span class="b"><i>오</i>오○○ 실장</span><span class="c"><i>문</i>문○○ 사원</span></div>'+
  '<div class="gr">'+slots.map(function(s){return '<div class="rw"><time class="num">'+s[0]+'</time>'+s[1].map(function(c){return c[2]=="e"?'<span class="e" data-tap="'+s[0]+' 빈 시간에 배정해요">+</span>':'<span class="bk '+c[2]+'" data-tap="'+c[0]+' 상담을 열었어요"><b>'+c[0]+'</b>'+c[1]+'</span>'}).join("")+'</div>'}).join("")+'</div>'+
  '<div class="un"><p class="uh">미배정 예약 <span>2</span></p><div class="u"><span class="av">신</span><p>신○○ 고객<small>10:30 · 장례 상담 · 전화</small></p><b data-tap="오○○ 실장에게 배정했어요">배정</b></div><div class="u"><span class="av">홍</span><p>홍○○ 고객<small>15:30 · 상품 안내 · 방문</small></p><b data-tap="한○○ 팀장에게 배정했어요">배정</b></div></div>'},
 foot:function(){return ft1('자동 배정 확정','상담사 배정을 확정하고 문자를 보냈어요')}
};
})();
