/* ATZ LINEUP — one hand-built phone screen per program. LX[name] = {cls, cap, html()} */
(function(){
"use strict";
var LX=window.LX=window.LX||{};
var SB=function(t){return '<div class="f-di"></div><div class="f-sb"><span>'+t+'</span><span class="f-ic"><s><i></i><i></i><i></i><i></i></s><u></u><b></b></span></div>'};
var HB='<div class="f-hb"><i></i></div>';
LX.frame=function(name){var s=LX[name];if(!s)return "";return '<div class="fs '+s.cls+'">'+SB(s.time||"9:41")+'<div class="f-body">'+s.body()+'</div>'+(s.foot?s.foot():"")+HB+'</div>'};

/* ---------- 펫 호텔 돌봄 리포트 (멍하우스) ---------- */
function pi(n){var P={back:'<path d="M15 18l-6-6 6-6"/>',up:'<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0zM8 7c0-2 2-2 2-4M14 7c0-2 2-2 2-4"/>',paw:'<circle cx="5" cy="11" r="2"/><circle cx="9.5" cy="5.5" r="2"/><circle cx="14.5" cy="5.5" r="2"/><circle cx="19" cy="11" r="2"/><path d="M12 12c-3 0-5.5 2.5-5.5 5 0 1.6 1.4 2.2 3 2.2 1 0 1.8-.4 2.5-.4s1.5.4 2.5.4c1.6 0 3-.6 3-2.2 0-2.5-2.5-5-5.5-5z"/>',drop:'<path d="M12 2.7l5.7 5.6a8 8 0 1 1-11.4 0z"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/>',vid:'<path d="M23 7l-7 5 7 5zM1 5h15v14H1z"/>',pill:'<rect x="2" y="9" width="20" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M9.5 8l5 6"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+P[n]+'</svg>'}
LX["펫 호텔 돌봄 리포트"]={cls:"s-pet",time:"18:24",cap:"보호자에게 가는 하루 리포트",
 body:function(){return ''+
 '<div class="hd"><span class="bk">'+pi("back")+'</span><img class="bi" src="lx/img/ic/14.jpg" alt=""><h4>멍하우스<small>보리의 하루 · 펫호텔 3일차 · 10월 11일 (토)</small></h4><span class="sh">'+pi("up")+'</span></div>'+
 '<div class="ph"><img src="lx/img/pet-maltese.jpg" alt=""><span class="tg">오늘 사진 <b class="num">12</b>장</span><div class="cap"><div><b>낮잠 자고 일어났어요</b><span>14:20 · 놀이방</span></div><span class="ht" data-tap="좋아요를 보냈어요">'+pi("heart")+'</span></div></div>'+
 '<div class="dots"><i class="on"></i><i></i><i></i><i></i><i></i></div>'+
 '<div class="mt"><div><em>'+pi("bowl")+'</em><span>식사</span><b>완식 <small class="num">2/2</small></b></div><div><em>'+pi("paw")+'</em><span>산책</span><b><span class="num">32</span>분 <small class="num">2회</small></b></div><div><em>'+pi("drop")+'</em><span>배변</span><b>정상 <small class="num">3회</small></b></div></div>'+
 '<div class="tl"><h5>타임라인<small>담당 김○○ 매니저</small></h5>'+
  '<div class="ev dn"><time class="num">08:30</time><i></i><p>아침 식사<small>사료 60g · 남김 없음</small></p><span class="ok">완료</span></div>'+
  '<div class="ev dn"><time class="num">11:00</time><i></i><p>공원 산책 18분<small>기분 최고 · 친구 2마리</small></p><span class="ok">완료</span></div>'+
  '<div class="ev dn"><time class="num">14:20</time><i></i><p>낮잠 & 사진<small>새 사진 4장 추가</small></p><span class="th"><img src="lx/img/pet-maltese.jpg" alt=""></span></div>'+
  '<div class="ev"><time class="num">19:00</time><i></i><p>저녁 약 · 식사<small>보호자 요청 사항</small></p></div>'+
 '</div>'+
 '<div class="nt"><span class="av">김</span><p><b>매니저 한마디</b>오늘 친구들이랑 정말 잘 놀았어요. 저녁 약도 챙겨 먹일게요.</p></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="영상통화를 요청했어요">'+pi("vid")+'영상통화</span><span class="b1" data-tap="보호자에게 리포트를 보냈어요">보호자에게 보내기</span></div>'}
};

/* ---------- 주식 자동매매 실행기 (퀀트러너) ---------- */
function qi(n){var P={home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10"/>',bolt:'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',pause:'<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>'};return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">'+P[n]+'</svg>'}
function candles(){
  var d=[[62,66],[66,64],[64,69],[69,71],[71,68],[68,73],[73,72],[72,77],[77,75],[75,74],[74,79],[79,83],[83,81],[81,86],[86,84],[84,88],[88,92],[92,90],[90,95],[95,93],[93,97],[97,101],[101,99],[99,104]];
  var w=330,h=130,lo=58,hi=108,bw=w/d.length,Y=function(v){return h-((v-lo)/(hi-lo))*h},s="",ma=[];
  d.forEach(function(c,i){var up=c[1]>=c[0],col=up?"#FF3D2E":"#2F7BFF",x=i*bw+bw/2,t=Math.max(c[0],c[1])+1.6,b=Math.min(c[0],c[1])-1.6;
    s+='<path d="M'+x.toFixed(1)+' '+Y(t).toFixed(1)+'V'+Y(b).toFixed(1)+'" stroke="'+col+'" stroke-width="1"/>';
    s+='<rect x="'+(x-bw*.28).toFixed(1)+'" y="'+Y(Math.max(c[0],c[1])).toFixed(1)+'" width="'+(bw*.56).toFixed(1)+'" height="'+Math.max(1.2,Math.abs(Y(c[0])-Y(c[1]))).toFixed(1)+'" fill="'+col+'" stroke="'+col+'" stroke-width=".9"/>';
    var a=0,n=0;for(var j=Math.max(0,i-4);j<=i;j++){a+=d[j][1];n++}ma.push((i?"L":"M")+x.toFixed(1)+" "+Y(a/n).toFixed(1));
    s+='<rect x="'+(x-bw*.28).toFixed(1)+'" y="'+(h+20-(4+((i*37)%14))).toFixed(1)+'" width="'+(bw*.56).toFixed(1)+'" height="'+(4+((i*37)%14))+'" fill="'+col+'" opacity=".4"/>';});
  var bx=6*bw+bw/2,sx=17*bw+bw/2;
  return '<svg class="ch" viewBox="0 0 330 152" preserveAspectRatio="none" aria-hidden="true">'+
   '<path d="M0 32H330M0 65H330M0 98H330" stroke="rgba(255,255,255,.1)" stroke-dasharray="1 3"/>'+s+
   '<path d="'+ma.join("")+'" fill="none" stroke="#FFC14D" stroke-width="1.2"/>'+
   '<path d="M'+bx+' '+(Y(66)+8)+'l-5 9h10z" fill="#FF3D2E"/><text x="'+bx+'" y="'+(Y(66)+29)+'" fill="#FF3D2E" font-size="8" font-weight="700" text-anchor="middle" font-family="JetBrains Mono,monospace">BUY</text>'+
   '<path d="M'+sx+' '+(Y(94)-8)+'l-5 -9h10z" fill="#2F7BFF"/><text x="'+sx+'" y="'+(Y(94)-21)+'" fill="#2F7BFF" font-size="8" font-weight="700" text-anchor="middle" font-family="JetBrains Mono,monospace">TP</text>'+
   '<path d="M0 '+Y(104).toFixed(1)+'H330" stroke="#FF3D2E" stroke-dasharray="2 2" opacity=".7"/><rect x="284" y="'+(Y(104)-7).toFixed(1)+'" width="46" height="14" fill="#FF3D2E"/><text x="307" y="'+(Y(104)+3.2).toFixed(1)+'" fill="#fff" font-size="8.5" font-weight="700" text-anchor="middle" font-family="JetBrains Mono,monospace">82,877</text>'+
   '</svg>';
}
LX["주식 자동매매 실행기"]={cls:"s-stk",time:"10:42",cap:"전략대로 알아서 사고파는 화면",
 body:function(){return ''+
 '<div class="hd"><img class="bi" src="lx/img/ic/00.jpg" alt=""><h4>퀀트러너<small class="num">QUANTRUNNER · AUTO TRADE</small></h4><span class="run num" data-tap="자동매매를 일시정지했어요">RUN</span></div>'+
 '<div class="acc"><div class="a1"><span>총 평가금액</span><b class="num">₩48,215,300</b><em class="num">+612,400 (+1.29%)</em></div><div class="a2"><span>전략<b class="num">3</b></span><span>장마감<b class="num">4:48</b></span><span>승률<b class="num">68%</b></span></div></div>'+
 '<div class="tk"><div class="r1"><div><b>한빛전자</b><small class="num">A123450 · KOSPI</small></div><div class="px"><b class="num">82,877</b><small class="num">▲1,240 +1.52%</small></div></div>'+
  '<div class="rg num"><span>1m</span><span class="on">5m</span><span>1D</span><span>1W</span></div>'+candles()+'</div>'+
 '<div class="stg"><div class="r1"><p>골든크로스 단타<small>한빛전자 외 2종목 감시</small></p><span class="sw" data-sw></span></div>'+
  '<div class="rl"><span>매수<b>5일선 돌파</b></span><span>익절<b class="num">+7%</b></span><span>손절<b class="num">-3%</b></span></div>'+
  '<div class="lim"><span>주문 한도</span><i><u></u><u></u><u></u><u class="e"></u><u class="e"></u></i><b class="num">3/5</b></div></div>'+
 '<div class="log"><h5>자동 체결<small class="num">TODAY</small></h5>'+
  '<div class="lh num"><span>TIME</span><span>SIDE</span><span>종목</span><span>PRICE</span></div>'+
  '<div class="lg"><time class="num">10:02:14</time><span class="k b">매수</span><p>한빛전자 <small class="num">×12</small></p><span class="v num">81,600</span></div>'+
  '<div class="lg"><time class="num">10:41:07</time><span class="k s">매도</span><p>대명바이오 <small class="num">×30 · +7.2%</small></p><span class="v num up">+186,000</span></div>'+
  '<div class="lg"><time class="num">10:42:00</time><span class="k w">감시</span><p>세진모빌리티 <small class="num">-0.8%</small></p><span class="v num">WAIT</span></div>'+
 '</div>'},
 foot:function(){return '<div class="tb"><span>'+qi("home")+'홈</span><span class="on">'+qi("bolt")+'전략</span><span>'+qi("list")+'체결</span><span>'+qi("user")+'계좌</span></div>'}
};
})();
