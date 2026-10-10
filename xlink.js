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
    index:[["다른 프로그램이 필요하다면?","lineup"],["홈페이지도 같이 필요하다면?","web"],["이걸로 수익화하고 싶다면?","academy"]],
    web:[["예약·관리 프로그램도 필요하다면?","program"],["앱으로도 만들고 싶다면?","app"],["이걸로 수익화하고 싶다면?","academy"]],
    make:[["다른 프로그램이 필요하다면?","lineup"],["업무 프로그램이 필요하다면?","program"],["이걸로 수익화하고 싶다면?","academy"]],
    academy:[["어떤 걸 만들 수 있는지 궁금하다면?","lineup"],["내 아이템을 프로그램으로 만들고 싶다면?","program"],["판매할 홈페이지가 필요하다면?","web"]],
    lineup:[["홈페이지가 필요하다면?","web"],["앱으로 만들고 싶다면?","app"],["우리 업종 ERP를 미리 써보고 싶다면?","erp"]],
    erp:[["우리 회사에 맞게 바꾸고 싶다면?","program"],["다른 프로그램이 필요하다면?","lineup"],["이걸로 수익화하고 싶다면?","academy"]],
    stories:[["우리 업종도 되는지 궁금하다면?","lineup"],["바로 만들어 보고 싶다면?","program"],["이걸로 수익화하고 싶다면?","academy"]],
    demos:[["다른 프로그램이 필요하다면?","lineup"],["홈페이지가 필요하다면?","web"],["업무 프로그램이 필요하다면?","program"]]
  };
  var page=(location.pathname.split("/").pop()||"index.html").replace(".html","")||"index";
  var items=M[page]; if(!items) return;
  var css=".atzx{box-sizing:border-box;max-width:1120px;margin:0 auto;padding:28px 20px;font-family:'Pretendard','IBM Plex Sans KR','Noto Sans KR',system-ui,sans-serif}"+
    ".atzx__h{font-size:18px;letter-spacing:-.02em;color:#fff;margin:0 0 14px;font-weight:800}"+
    ".atzx__r{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}"+
    ".atzx a{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;text-decoration:none;transition:border-color .2s,background .2s}"+
    ".atzx a:hover{border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.08)}"+
    ".atzx small{display:block;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:4px}"+
    ".atzx b{font-size:15px;font-weight:800}"+
    ".atzx i{font-style:normal;opacity:.6}"+
    "@media(max-width:720px){.atzx__r{grid-template-columns:1fr}}";
  function add(){
    if(document.querySelector(".atzx")) return;
    var s=document.createElement("style"); s.textContent=css; document.head.appendChild(s);
    var d=document.createElement("nav"); d.className="atzx"; d.setAttribute("aria-label","어떤 게 더 있을까요?");
    d.innerHTML='<p class="atzx__h">어떤 게 더 있을까요?</p><div class="atzx__r">'+items.map(function(x){
      var t=L[x[1]]; return '<a href="'+t[1]+'"><span><small>'+x[0]+'</small><b>'+t[0]+'</b></span><i>→</i></a>';
    }).join("")+"</div>";
    var f=document.querySelector("body>footer");
    f? document.body.insertBefore(d,f) : document.body.appendChild(d);
  }
  document.readyState==="loading"? document.addEventListener("DOMContentLoaded",add) : add();
})();
