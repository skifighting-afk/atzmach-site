/* 페이지 하단 '다음으로 보기' 연결 띠. 페이지마다 이어질 곳만 다르다. */
(function(){
  var L={
    program:["프로그램 개발","index.html"],
    web:["홈페이지 제작","web.html"],
    app:["앱·플랫폼 개발","make.html#app"],
    lineup:["전체 라인업 90+","lineup.html"],
    academy:["ATZ 창업사관학교","academy.html"],
    erp:["업종별 ERP 체험","erp.html"]
  };
  var M={
    index:[["다른 업종은 뭐가 되는지?","lineup"],["홈페이지도 같이 필요하다면?","web"],["만든 걸로 돈을 벌고 싶다면?","academy"]],
    web:[["예약·관리 기능까지 붙이려면?","program"],["앱으로도 만들고 싶다면?","app"],["홈페이지로 매출을 내고 싶다면?","academy"]],
    make:[["어떤 앱까지 되는지?","lineup"],["업무 프로그램이 필요하다면?","program"],["앱으로 사업을 시작하고 싶다면?","academy"]],
    academy:[["만들 수 있는 것부터 보려면?","lineup"],["아이템을 바로 프로그램으로?","program"],["판매 페이지가 먼저라면?","web"]],
    lineup:[["홈페이지가 먼저 필요하다면?","web"],["앱으로 만들고 싶다면?","app"],["우리 업종 ERP를 써보려면?","erp"]],
    erp:[["우리 회사에 맞게 고치려면?","program"],["다른 업종도 보고 싶다면?","lineup"],["이걸로 사업을 하고 싶다면?","academy"]],
    stories:[["우리 업종도 되는지?","lineup"],["바로 만들어 보려면?","program"],["직접 사업으로 키우려면?","academy"]],
    demos:[["더 많은 예시를 보려면?","lineup"],["홈페이지를 맡기려면?","web"],["프로그램을 맡기려면?","program"]]
  };
  var page=(location.pathname.split("/").pop()||"index.html").replace(".html","")||"index";
  var items=M[page]; if(!items) return;
  var css=".atzx{box-sizing:border-box;max-width:1120px;margin:0 auto;padding:28px 20px;font-family:'Pretendard','IBM Plex Sans KR','Noto Sans KR',system-ui,sans-serif}"+
    ".atzx__h{font-size:12px;letter-spacing:.18em;color:rgba(255,255,255,.45);margin:0 0 12px;font-weight:700}"+
    ".atzx__r{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}"+
    ".atzx a{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;text-decoration:none;transition:border-color .2s,background .2s}"+
    ".atzx a:hover{border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.08)}"+
    ".atzx small{display:block;font-size:12px;color:rgba(255,255,255,.55);margin-bottom:3px}"+
    ".atzx b{font-size:15px;font-weight:800}"+
    ".atzx i{font-style:normal;opacity:.6}"+
    "@media(max-width:720px){.atzx__r{grid-template-columns:1fr}}";
  function add(){
    if(document.querySelector(".atzx")) return;
    var s=document.createElement("style"); s.textContent=css; document.head.appendChild(s);
    var d=document.createElement("nav"); d.className="atzx"; d.setAttribute("aria-label","다음으로 보기");
    d.innerHTML='<p class="atzx__h">다음으로 보기</p><div class="atzx__r">'+items.map(function(x){
      var t=L[x[1]]; return '<a href="'+t[1]+'"><span><small>'+x[0]+'</small><b>'+t[0]+'</b></span><i>→</i></a>';
    }).join("")+"</div>";
    var f=document.querySelector("body>footer");
    f? document.body.insertBefore(d,f) : document.body.appendChild(d);
  }
  document.readyState==="loading"? document.addEventListener("DOMContentLoaded",add) : add();
})();
