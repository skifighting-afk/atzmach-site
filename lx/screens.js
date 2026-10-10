/* ATZ LINEUP — one hand-built phone screen per program. LX[name] = {cls, cap, html()} */
(function(){
"use strict";
var LX=window.LX=window.LX||{};
var SB=function(t){return '<div class="f-di"></div><div class="f-sb"><span>'+t+'</span><span class="f-ic"><s><i></i><i></i><i></i><i></i></s><u></u><b></b></span></div>'};
var HB='<div class="f-hb"><i></i></div>';
LX.frame=function(name){var s=LX[name];if(!s)return "";return '<div class="fs '+s.cls+'">'+SB(s.time||"9:41")+'<div class="f-body">'+s.body()+'</div>'+(s.foot?s.foot():"")+HB+'</div>'};

/* ---------- 펫 호텔 돌봄 리포트 ---------- */
LX["펫 호텔 돌봄 리포트"]={cls:"s-pet",time:"18:24",cap:"보호자에게 가는 하루 리포트",
 body:function(){return ''+
 '<div class="hd"><span class="bk">‹</span><h4>보리의 하루<small>펫호텔 3일차 · 10월 11일 (토)</small></h4><span class="sh">↗</span></div>'+
 '<div class="ph"><img src="lx/img/pet-maltese.jpg" alt=""><span class="tg">오늘 사진 <b>12</b>장</span><div class="cap"><div><b>낮잠 자고 일어났어요</b><span>14:20 · 놀이방</span></div><span class="ht" data-tap="좋아요를 보냈어요">♥</span></div></div>'+
 '<div class="dots"><i class="on"></i><i></i><i></i><i></i><i></i></div>'+
 '<div class="mt"><div><em>🥣</em><span>식사</span><b>완식 <small>2/2</small></b></div><div><em>🐾</em><span>산책</span><b>32분 <small>2회</small></b></div><div><em>💧</em><span>배변</span><b>정상 <small>3회</small></b></div></div>'+
 '<div class="tl"><h5>타임라인<small>담당 김○○ 매니저</small></h5>'+
  '<div class="ev dn"><time>08:30</time><i></i><p>아침 식사<small>사료 60g · 남김 없음</small></p><span class="ok">완료</span></div>'+
  '<div class="ev dn"><time>11:00</time><i></i><p>공원 산책 18분<small>기분 최고 · 친구 2마리</small></p><span class="ok">완료</span></div>'+
  '<div class="ev dn"><time>14:20</time><i></i><p>낮잠 & 사진<small>새 사진 4장 추가</small></p><span class="th"><img src="lx/img/pet-maltese.jpg" alt=""></span></div>'+
  '<div class="ev"><time>19:00</time><i></i><p>저녁 약 · 식사<small>보호자 요청 사항</small></p></div>'+
 '</div>'+
 '<div class="nt"><span class="av">김</span><p><b>매니저 한마디</b>오늘 친구들이랑 정말 잘 놀았어요. 저녁 약도 챙겨 먹일게요 💊</p></div>'},
 foot:function(){return '<div class="ft"><span class="b2" data-tap="영상통화를 요청했어요">📹 영상통화</span><span class="b1" data-tap="보호자에게 리포트를 보냈어요">보호자에게 보내기</span></div>'}
};

/* ---------- 주식 자동매매 실행기 ---------- */
function candles(){
  // fixed series so the screen always looks the same; red = up (Korean market convention)
  var d=[[62,66],[66,64],[64,69],[69,71],[71,68],[68,73],[73,72],[72,77],[77,75],[75,74],[74,79],[79,83],[83,81],[81,86],[86,84],[84,88],[88,92],[92,90],[90,95],[95,93],[93,97],[97,101],[101,99],[99,104]];
  var w=330,h=130,lo=58,hi=108,bw=w/d.length,Y=function(v){return h-((v-lo)/(hi-lo))*h},s="",ma=[];
  d.forEach(function(c,i){var up=c[1]>=c[0],col=up?"#FF4D5E":"#3D8BFF",x=i*bw+bw/2,t=Math.max(c[0],c[1])+1.6,b=Math.min(c[0],c[1])-1.6;
    s+='<path d="M'+x.toFixed(1)+' '+Y(t).toFixed(1)+'V'+Y(b).toFixed(1)+'" stroke="'+col+'" stroke-width="1.2"/>';
    s+='<rect x="'+(x-bw*.3).toFixed(1)+'" y="'+Y(Math.max(c[0],c[1])).toFixed(1)+'" width="'+(bw*.6).toFixed(1)+'" height="'+Math.max(1.4,Math.abs(Y(c[0])-Y(c[1]))).toFixed(1)+'" rx="1" fill="'+col+'"/>';
    var a=0,n=0;for(var j=Math.max(0,i-4);j<=i;j++){a+=d[j][1];n++}ma.push((i?"L":"M")+x.toFixed(1)+" "+Y(a/n).toFixed(1));
    s+='<rect x="'+(x-bw*.3).toFixed(1)+'" y="'+(h+20-(4+((i*37)%14))).toFixed(1)+'" width="'+(bw*.6).toFixed(1)+'" height="'+(4+((i*37)%14))+'" fill="'+col+'" opacity=".35"/>';});
  var bx=6*bw+bw/2,sx=17*bw+bw/2;
  return '<svg class="ch" viewBox="0 0 330 152" preserveAspectRatio="none" aria-hidden="true">'+
   '<path d="M0 32H330M0 65H330M0 98H330" stroke="rgba(255,255,255,.05)"/>'+s+
   '<path d="'+ma.join("")+'" fill="none" stroke="#FFC14D" stroke-width="1.6"/>'+
   '<path d="M'+bx+' '+(Y(66)+8)+'l-6 10h12z" fill="#FF4D5E"/><text x="'+bx+'" y="'+(Y(66)+30)+'" fill="#FF4D5E" font-size="9" font-weight="700" text-anchor="middle">매수</text>'+
   '<path d="M'+sx+' '+(Y(94)-8)+'l-6 -10h12z" fill="#3D8BFF"/><text x="'+sx+'" y="'+(Y(94)-22)+'" fill="#3D8BFF" font-size="9" font-weight="700" text-anchor="middle">익절</text>'+
   '<path d="M0 '+Y(104).toFixed(1)+'H330" stroke="#FF4D5E" stroke-dasharray="3 3" opacity=".6"/><rect x="286" y="'+(Y(104)-8).toFixed(1)+'" width="44" height="16" rx="4" fill="#FF4D5E"/><text x="308" y="'+(Y(104)+3.5).toFixed(1)+'" fill="#fff" font-size="9" font-weight="700" text-anchor="middle">82,877</text>'+
   '</svg>';
}
LX["주식 자동매매 실행기"]={cls:"s-stk",time:"10:42",cap:"전략대로 알아서 사고파는 화면",
 body:function(){return ''+
 '<div class="hd"><h4>자동매매<small>전략 3개 실행 중 · 장 마감까지 4시간 48분</small></h4><span class="run" data-tap="자동매매를 일시정지했어요">실행 중</span></div>'+
 '<div class="acc"><span>총 평가금액</span><b class="num">₩48,215,300</b><em class="num">오늘 +612,400 (+1.29%)</em></div>'+
 '<div class="tk"><div class="r1"><div><b>한빛전자</b><small>A123450 · 코스피</small></div><div class="px"><b class="num">82,877</b><small class="num">▲1,240 +1.52%</small></div></div>'+
  '<div class="rg"><span>1분</span><span class="on">5분</span><span>일</span><span>주</span></div>'+candles()+'</div>'+
 '<div class="stg"><div class="r1"><p>골든크로스 단타<small>한빛전자 외 2종목 감시</small></p><span class="sw" data-sw></span></div>'+
  '<div class="rl"><span>매수<b>5일선 돌파</b></span><span>익절<b>+7%</b></span><span>손절<b>-3%</b></span></div>'+
  '<div class="lim"><span>오늘 주문 한도</span><i></i><b class="num" style="color:#EEF1F6">3/5</b></div></div>'+
 '<div class="log"><h5>자동 체결<small>오늘</small></h5>'+
  '<div class="lg"><span class="k b">매수</span><p>한빛전자 12주<small class="num">10:02:14 · 5일선 돌파</small></p><span class="v num">81,600<small>체결</small></span></div>'+
  '<div class="lg"><span class="k s">매도</span><p>대명바이오 30주<small class="num">10:41:07 · +7.2% 익절</small></p><span class="v num" style="color:#FF4D5E">+186,000<small>체결</small></span></div>'+
  '<div class="lg"><span class="k w">감시</span><p>세진모빌리티<small>조건까지 -0.8%</small></p><span class="v num">대기<small>10:42</small></span></div>'+
 '</div>'},
 foot:function(){return '<div class="tb"><span><i></i>홈</span><span class="on"><i></i>전략</span><span><i></i>체결</span><span><i></i>계좌</span></div>'}
};
})();
