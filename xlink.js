/* 페이지 하단 '다음으로 보기' 연결 띠. 페이지마다 이어질 곳만 다르다. */
(function(){
  var L={
    program:["프로그램 개발","index.html"],
    web:["홈페이지 제작","web.html"],
    app:["앱·플랫폼 개발","platform.html"],
    lineup:["전체 라인업 90+","lineup.html"],
    academy:["ATZ 창업사관학교","academy.html"],
    erp:["업종별 ERP 체험","erp.html"]
  };
  var M={
    index:[["다른 프로그램이 필요하다면?","lineup"],["홈페이지도 같이 필요하다면?","web"],["이걸로 수익화하고 싶다면?","academy"]],
    web:[["예약·관리 프로그램도 필요하다면?","program"],["앱으로도 만들고 싶다면?","app"],["이걸로 수익화하고 싶다면?","academy"]],
    platform:[["다른 프로그램이 필요하다면?","lineup"],["업무 프로그램이 필요하다면?","program"],["이걸로 수익화하고 싶다면?","academy"]],
    app:[["다른 프로그램이 필요하다면?","lineup"],["업무 프로그램이 필요하다면?","program"],["이걸로 수익화하고 싶다면?","academy"]],
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
    d.setAttribute('aria-label','전체 개발 라인업');
    d.innerHTML='<i class="atzx__beam" aria-hidden="true"></i><a class="atzx__go" href="lineup.html?v=20261011e"><span>ATZ MACH 모든 개발 보러가기</span><b aria-hidden="true">↗</b></a>';
    var motion=document.createElement('style');
    motion.textContent=`
    .atzx{position:relative;isolation:isolate;overflow:hidden;display:grid;place-items:center;max-width:none;min-height:280px;padding:64px 24px;background:#080b10;border-block:1px solid #ffffff14}
    .atzx::before{content:'ATZ MACH';position:absolute;z-index:-1;font:italic 950 clamp(90px,18vw,260px)/.8 system-ui;letter-spacing:-.09em;color:transparent;-webkit-text-stroke:1px #2bff8840;transform:skewX(-8deg);pointer-events:none}
    .atzx::after{content:'';position:absolute;z-index:-1;inset:0;background:radial-gradient(ellipse at 50% 100%,#2bff8826,transparent 65%);pointer-events:none}
    .atzx__beam{position:absolute;z-index:-1;width:35%;height:180%;top:-40%;background:linear-gradient(90deg,transparent,#2bff8817,transparent);transform:skewX(-25deg);animation:atz-sweep 8s ease-in-out infinite;pointer-events:none}
    .atzx a.atzx__go{gap:32px;padding:22px 30px;border-radius:4px;background:#2bff88;color:#06120c;font:900 clamp(17px,2.5vw,25px)/1.3 'Pretendard',system-ui,sans-serif;transform:skewX(-9deg);border:1px solid #8dffbf;box-shadow:0 10px 45px #2bff8825;transition:transform .2s,box-shadow .2s}
    .atzx__go span,.atzx__go b{transform:skewX(9deg)}.atzx .atzx__go b{font-size:30px}.atzx a.atzx__go:hover{background:#62ffa6;transform:skewX(-9deg) translateY(-4px);box-shadow:0 15px 50px #2bff8845}.atzx__go:focus-visible{outline:3px solid white;outline-offset:8px}
    @keyframes atz-sweep{0%,15%{left:-50%;opacity:0}35%{opacity:1}75%,100%{left:120%;opacity:0}}
    @media(max-width:480px){.atzx{min-height:220px;padding:48px 20px}.atzx a.atzx__go{gap:16px;padding:18px 20px}}
    @media(prefers-reduced-motion:reduce){.atzx__beam{animation:none}.atzx a.atzx__go{transition:none}}
    `;
    document.head.appendChild(motion);
    var f=document.querySelector("body>footer");
    f? document.body.insertBefore(d,f) : document.body.appendChild(d);
  }
  document.readyState==="loading"? document.addEventListener("DOMContentLoaded",add) : add();
})();
