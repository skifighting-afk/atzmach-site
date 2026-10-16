/* 문의는 카카오톡 채널 · 전화 두 가지로만 받는다.

   - 페이지마다 있던 입력 폼·상담봇·하단 신청 바를 숨기고, 그 자리에 연락 패널을 넣는다(구간 id는 그대로 → 기존 버튼이 패널로 이동).

   - 모든 페이지에 같은 연락 위젯(PC: 오른쪽 아래 / 폰: 하단 바). */

(function () {

  var KAKAO = "https://pf.kakao.com/_yynFX/chat", TEL = "tel:01048232636", TEL_TXT = "010-4823-2636";

  var BASE = (document.currentScript && document.currentScript.src) || location.href;

  var page = (location.pathname.split("/").pop() || "index.html").replace(".html", "") || "index";

  if (/^(admin|inbox|notify|stats|portal)$/.test(page)) return;  // 운영자용 화면에는 넣지 않음

  // 패널을 넣을 구간: [선택자, 제목 1줄, 제목 2줄(강조), 색]

  var SEC = {

    index: [["#diagnosis", "만들고 싶은 프로그램,", "말로 설명하세요."], ["#contact", "고민은", "전화 한 통이면 끝납니다."]],

    web: [["#make", "어떤 홈페이지가", "필요하세요?"]],

    academy: [["#apply", "간절하십니까?", "오늘, 대화로 시작합니다."]],

    app: [["#apply", "어떤 앱을", "만들고 싶으세요?"]],

    platform: [["#apply", "무엇을", "만들고 싶으세요?"]],

    ax: [["#contact", "안 할 이유가", "없습니다."]],

  }[page] || [];

  var C = { index: "#ff5ccf", web: "#ffb020", academy: "#ffd98a", app: "#6b93ff", platform: "#6b93ff", ax: "#3ae0ff", lineup: "#2bff88", erp: "#3ad6ff" }[page] || "#ff5ccf";

  var HIDE = ".cb,#atz-adm,.ux-bar,#mkBar,#fdock,#chat,#mcta,.mcta,#mr,a[href='#mr']";

  // 폼·접수 흐름을 설명하던 문구 정리 (예시 화면 속 '접수' 같은 데모 문구는 그대로)

  var TXT = [["여기 적으면 상담 신청서에 그대로 들어갑니다. 비워 둬도 괜찮습니다.", ""], ["상담 먼저 접수", "상담 먼저"], ["신청 후 1시간 안에", "문의 후 1시간 안에"], ["신청하면 1시간 안에", "문의하면 1시간 안에"],

    ["한 줄만 남겨 주세요. 1시간 안에 1차 시안을 보내 드립니다.", "카카오톡 한 줄이면, 1시간 안에 1차 시안을 보내 드립니다."], ["접수 후 1시간 목표", "문의 후 1시간 목표"]];

  function fixText() {

    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), x;

    while ((x = w.nextNode())) { var v = x.nodeValue; if (v.length < 4) continue; for (var i = 0; i < TXT.length; i++) if (v.indexOf(TXT[i][0]) >= 0) { v = v.split(TXT[i][0]).join(TXT[i][1]); x.nodeValue = v; if (!v.trim() && x.parentElement) x.parentElement.style.display = "none" } }

  }

  var I_K = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3.2C6.6 3.2 2.2 6.6 2.2 10.9c0 2.8 1.9 5.2 4.7 6.6l-1 3.6c-.1.3.3.6.6.4l4.2-2.8c.4 0 .9.1 1.3.1 5.4 0 9.8-3.4 9.8-7.9S17.4 3.2 12 3.2z"/></svg>';

  var I_T = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>';

  var css = HIDE + "{display:none!important}" +

    ".atzc-host>*:not(.atzc){display:none!important}.atzc-host{min-height:0!important;height:auto!important;padding:0!important;display:block!important}" +

    ".atzc{--c:" + C + ";position:relative;overflow:hidden;padding:clamp(48px,6vw,88px) 20px;text-align:center;background:radial-gradient(60% 70% at 50% 0%,color-mix(in srgb,var(--c) 26%,transparent),transparent 70%),#07060f;color:#fff;font-family:'IBM Plex Sans KR','Pretendard',system-ui,sans-serif}" +

    ".atzc::before{content:'';position:absolute;inset:auto -10% -40% -10%;height:70%;background:radial-gradient(50% 50% at 50% 50%,color-mix(in srgb,var(--c) 18%,transparent),transparent 70%);pointer-events:none}" +

    ".atzc h2{position:relative;margin:0 0 14px;font-size:clamp(30px,5.4vw,64px);line-height:1.15;font-weight:800;letter-spacing:-.035em;word-break:keep-all}.atzc h2 em{font-style:normal;color:var(--c);display:block}" +

    ".atzc p{position:relative;margin:0 auto 28px;color:rgba(255,255,255,.88);font-size:clamp(16px,1.6vw,18px);line-height:1.65}" +

    ".atzc__b{position:relative;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;max-width:760px;margin:0 auto}" +

    ".atzc a.k,.atzc a.t{flex:1 1 300px;display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:22px;text-decoration:none;text-align:left;transition:transform .18s,box-shadow .18s}" +

    ".atzc a svg{width:30px;height:30px;flex:none}.atzc a b{display:block;font-size:20px;font-weight:800;letter-spacing:-.02em}.atzc a small{display:block;margin-top:3px;font-size:13px;opacity:.72}.atzc a i{margin-left:auto;font-style:normal;font-size:22px;transition:transform .18s}" +

    ".atzc a.k{background:#FEE500;color:#191600;box-shadow:0 18px 50px -14px rgba(254,229,0,.55)}" +

    ".atzc a.t{background:rgba(255,255,255,.06);color:#fff;border:1.5px solid color-mix(in srgb,var(--c) 60%,transparent);box-shadow:0 18px 50px -18px color-mix(in srgb,var(--c) 70%,transparent)}.atzc a.t svg{color:var(--c)}" +

    ".atzc a:hover{transform:translateY(-3px)}.atzc a:hover i{transform:translateX(4px)}.atzc a:focus-visible,.atzw a:focus-visible{outline:3px solid #fff;outline-offset:3px}" +

    ".atzc__tags{position:relative;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:26px}.atzc__tags span{padding:7px 13px;border-radius:99px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);font-size:13px;color:rgba(255,255,255,.75)}" +

    /* 위젯: PC 오른쪽 아래 */

    ".atzw{position:fixed!important;right:16px!important;left:auto!important;bottom:16px!important;z-index:2147483000;display:flex;flex-direction:column;gap:10px;max-width:calc(100vw - 24px);font-family:'IBM Plex Sans KR','Pretendard',system-ui,sans-serif}" +

    ".atzw a{display:flex;align-items:center;gap:10px;height:52px;min-height:48px;padding:0 20px 0 16px;border-radius:99px;text-decoration:none;font-weight:800;font-size:15px;letter-spacing:-.01em;box-shadow:0 12px 32px -8px rgba(0,0,0,.55);transition:transform .18s}" +

    ".atzw a:hover{transform:translateY(-2px)}.atzw svg{width:22px;height:22px;flex:none}" +

    ".atzw .k{background:#FEE500;color:#191600}.atzw .t{background:#111018;color:#fff;border:1.5px solid " + C + "}.atzw .t svg{color:" + C + "}" +

    "body.atzc-on .atzw{opacity:0;pointer-events:none;transform:translateY(10px)}.atzw{transition:opacity .25s,transform .25s}" +

    /* 폰: 하단 꽉 찬 바 */

    "@media(max-width:760px){.atzw{position:fixed!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;max-width:100%!important;flex-direction:row;gap:8px;padding:8px 12px calc(8px + env(safe-area-inset-bottom));background:rgba(7,6,15,.94);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid rgba(255,255,255,.08)}" +

    ".atzw a{flex:1;justify-content:center;height:48px!important;min-height:48px!important;padding:0 8px;border-radius:14px;box-shadow:none;font-size:15px!important}.atzw a b{font-size:15px!important}body{padding-bottom:calc(72px + env(safe-area-inset-bottom))!important}" +

    "body.atzc-on .atzw{opacity:1;pointer-events:auto;transform:none}.atzc a.k,.atzc a.t{flex-basis:100%;padding:20px}}" +

    "#aib{bottom:140px!important}@media(max-width:760px){#aib{bottom:calc(88px + env(safe-area-inset-bottom))!important}}" +  // 업종 체험의 MACH AI 버튼은 위젯 위로

    "@media(prefers-reduced-motion:reduce){.atzc a,.atzw a,.atzw{transition:none}}";

  css += "body:has(.mo:not([hidden])) .atzw,body:has(dialog:modal) .atzw{visibility:hidden;pointer-events:none}";

  var mobileCSS=document.createElement("link");mobileCSS.rel="stylesheet";mobileCSS.href=new URL("mobile.css?v=20261012h",document.currentScript&&document.currentScript.src||location.href).href;document.head.appendChild(mobileCSS);

  var st = document.createElement("style"); st.id = "atzc-css"; st.textContent = css; document.head.appendChild(st);



  function btns(cls) {

    return '<a class="k" href="' + KAKAO + '" target="_blank" rel="noopener">' + I_K + '<span><b>카카오톡 상담</b>' + (cls ? '<small>채팅으로 바로 물어보기</small>' : '') + '</span>' + (cls ? '<i>→</i>' : '') + '</a>' +

      '<a class="t" href="' + TEL + '">' + I_T + '<span><b>' + (cls ? TEL_TXT : '전화 상담') + '</b>' + (cls ? '<small>지금 바로 통화</small>' : '') + '</span>' + (cls ? '<i>→</i>' : '') + '</a>';

  }

  function panel(s) {

    var d = document.createElement("div"); d.className = "atzc";

    d.innerHTML = "<h2>" + s[1] + "<em>" + s[2] + "</em></h2><p>카카오톡이나 전화 한 통이면 충분합니다.</p><div class=\"atzc__b\">" + btns(1) + "</div>" +

      '<div class="atzc__tags"><span>2018년부터</span><span>14일 완성</span><span>맞춤 견적</span><span>1차 시안 무료</span></div>';

    return d;

  }

  var panels = [];

  function mount() {

    SEC.forEach(function (s, i) {

      var h = document.querySelector(s[0]); if (!h) return;

      if (!h.querySelector(":scope>.atzc")) { h.classList.add("atzc-host"); h.appendChild(panels[i] || (panels[i] = panel(s))); }

    });

    if (!document.querySelector(".atzw")) {

      var w = document.createElement("nav"); w.className = "atzw"; w.setAttribute("aria-label", "문의"); w.innerHTML = btns(0); document.body.appendChild(w);

    }

  }

  // 연락 패널이 화면에 보이면 PC 위젯은 잠시 숨긴다(같은 버튼 중복 방지)

  var on = [], io = "IntersectionObserver" in window && new IntersectionObserver(function (es) {

    es.forEach(function (e) { var i = on.indexOf(e.target); if (e.isIntersecting && i < 0) on.push(e.target); if (!e.isIntersecting && i >= 0) on.splice(i, 1) });

    document.body.classList.toggle("atzc-on", on.length > 0) }, { threshold: .25 });


  function trust() {

    if (page !== "index" || document.getElementById("atz-trust")) return;

    var root = document.getElementById("root"); if (!root || !root.parentNode) return;

    var s = document.createElement("section"); s.id = "atz-trust"; s.className = "atz-trust"; s.setAttribute("aria-labelledby", "atz-trust-h");

    s.innerHTML = '<div class="atz-trust__in"><p class="atz-trust__k">2018년부터</p><h2 id="atz-trust-h">맞춤 ERP·업무 프로그램 제작</h2><p class="atz-trust__lead">2018년부터 회사마다 다른 업무를 프로그램으로 만들어 왔습니다. 맞춤 견적 · 초기 0원 월 분할 협의 가능 · 1차 시안 무료입니다.</p><ul class="atz-trust__price"><li><b>14일</b><span>완성</span></li><li><b>맞춤 견적</b><span>상담 후</span></li><li><b>무료</b><span>1차 시안</span></li></ul><div class="atz-trust__todo"><p class="atz-trust__tag">TODO · 소유자 확인 전</p><p><b>소스코드 소유</b> — TODO: 납품 후 소스코드의 소유 주체와 이용 범위를 소유자가 확정한 문장으로 교체합니다.</p><p><b>계약 조건</b> — TODO: 대금, 수정 범위, 인수 조건은 소유자 확인 후 이 자리에 게시합니다. 확정 전에는 견적서와 계약서가 기준입니다.</p></div><div class="atz-trust__cases" id="cases"><h3>실제 도입 사례</h3><p>고객 동의를 받은 사례만 이 자리에 올립니다.</p><div class="atz-trust__slot" data-empty="true">등록된 실제 사례가 없습니다.</div></div><p class="atz-trust__note">화면의 업종·숫자·회사명은 기능을 설명하는 예시입니다. 실제 고객 실적이 아닙니다.</p></div>';

    root.parentNode.insertBefore(s, root.nextSibling);

  }

  function phoneBuddy() {

    var cta = document.querySelector("a.nav__cta");

    if (cta && cta.parentElement && !cta.parentElement.querySelector("a.atz-navtel")) {

      var t = document.createElement("a"); t.className = "atz-navtel"; t.href = TEL; t.textContent = "전화 상담";

      cta.insertAdjacentElement("afterend", t);

    }

  }

  function polish() {

    var l = document.getElementById("atz-polish");

    if (!l) {

      l = document.createElement("link"); l.id = "atz-polish"; l.rel = "stylesheet";

      l.href = new URL("polish.css?v=20261015b", BASE).href;

    }

    (document.body || document.head).appendChild(l);

  }

  function run() { mount(); fixText(); trust(); phoneBuddy(); polish(); panels.forEach(function (p) { if (io && p && !p._o) { p._o = 1; io.observe(p) } }) }

  // 기존 '무료 시안 받기' 버튼들(폼으로 가던 링크·버튼)은 연락 패널로 보낸다. 패널이 없는 페이지는 카카오톡 채널을 연다.

  var ids = SEC.map(function (s) { return s[0] }), CTA = /시안 받기|시안받기|상담 신청|상담하기|이야기 시작|문의하기|신청하기/;

  window.addEventListener("click", function (e) {

    var a = e.target.closest && e.target.closest("a,button"); if (!a || a.closest(".atzc,.atzw,.atz-trust")) return;

    var h = a.getAttribute("href") || "";

    if (/kakao\.com|^tel:/i.test(h)) return;

    var hit = ids.indexOf(h) >= 0 || ((!h || h.charAt(0) === "#") && CTA.test(a.textContent || ""));

    if (!hit) return;

    e.preventDefault(); e.stopImmediatePropagation();

    var p = panels[Math.max(0, ids.indexOf(h))] || panels[0];

    if (p && p.isConnected && p.getBoundingClientRect().height) {

      scrollTo({ top: scrollY + p.getBoundingClientRect().top - 70, behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth" });

      // 내려가는 동안 위쪽 구간이 늦게 그려지며 길이가 바뀌므로, 멈춘 뒤 패널 위치로 다시 맞춘다

      var k = 0, fix = setInterval(function () { var t = p.getBoundingClientRect().top; if (++k < 4) return; if (k > 14) return clearInterval(fix); if (Math.abs(t - 70) > 6) scrollTo(0, scrollY + t - 70) }, 250);

    }

    else window.open(KAKAO, "_blank", "noopener");

  }, true);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();

  // 화면이 나중에 그려지는 페이지(홈 등)도 있으니 잠깐 동안 다시 확인

  var n = 0, t = setInterval(function () { run(); if (++n > 40) clearInterval(t) }, 500);

})();


/* Hide links also created by React after initial load. */
(function(){function hide(){document.querySelectorAll('a[href]').forEach(function(a){try{if(new URL(a.href,location.href).pathname==='/academy.html'){a.style.setProperty('display','none','important');a.setAttribute('aria-hidden','true');a.setAttribute('tabindex','-1');}}catch(e){}});var b=document.getElementById('brT');if(b){var section=b.closest('section');if(section)section.style.setProperty('display','none','important');}}hide();new MutationObserver(hide).observe(document.documentElement,{childList:true,subtree:true});})();
