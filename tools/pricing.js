// ATZ MACH 견적 계산기 — 의존성 없음. atzQuote(input, pricing) → 견적 객체
// input: {modules:[{key, complexity}], integrations, migration, users, branches, agents, rush}
function atzQuote(input, pricing) {
  const P = pricing, r10 = (x) => Math.round(x / 1e5) * 1e5;
  const i = Object.assign({ modules: [], integrations: 0, migration: 'none', users: 1, branches: 1, agents: 0, rush: false }, input);
  const step = (table, n) => table.find((s) => s.upTo === null || n <= s.upTo).mult;
  const scale = Math.min(P.scale.capMult, step(P.scale.users, i.users) * step(P.scale.branches, i.branches));
  const byKey = Object.fromEntries(P.modules.map((m) => [m.key, m]));

  // 티어와 무관한 라인
  const work = [];
  for (const sel of i.modules) {
    const m = byKey[sel.key];
    if (!m) throw new Error('unknown module: ' + sel.key);
    const cx = sel.complexity || 'standard';
    const unit = r10(m.price.default * m.complexityMultipliers[cx] * scale);
    work.push({ name: m.name, qty: 1, unitPrice: unit, amount: unit, note: cx + (scale !== 1 ? ` · 규모배수 ${scale.toFixed(2)}` : '') });
  }
  if (i.agents > 0) {
    const unit = r10(byKey.ai_agent.price.default * scale);
    work.push({ name: 'AI 에이전트 실행', qty: i.agents, unitPrice: unit, amount: unit * i.agents, note: '에이전트 1개당' });
  }
  if (i.integrations > 0) {
    const unit = P.integrations.perItem.default;
    work.push({ name: '외부 연동', qty: i.integrations, unitPrice: unit, amount: unit * i.integrations, note: 'POS/PG/회계/배달앱/공공 API 등 1건당' });
  }
  const mig = P.migration[i.migration] || 0;
  if (mig) work.push({ name: '데이터 이관', qty: 1, unitPrice: mig, amount: mig, note: i.migration + ' · ' + P.migration.desc[i.migration] });
  const workSum = work.reduce((s, l) => s + l.amount, 0);

  // 티어 결정: 기본비 포함 합계가 상한을 넘으면 상위 티어
  let tier, lines, subtotal;
  for (const t of ['A', 'B', 'C']) {
    const base = Object.entries(P.base).map(([k, b]) => ({ name: b.desc, qty: 1, unitPrice: b[t], amount: b[t], note: '기본(1회)' }));
    lines = base.concat(work);
    subtotal = lines.reduce((s, l) => s + l.amount, 0);
    if (i.rush) {
      const add = r10(subtotal * (P.rush.mult - 1));
      lines.push({ name: '일정 단축(긴급)', qty: 1, unitPrice: add, amount: add, note: '+' + Math.round((P.rush.mult - 1) * 100) + '%' });
      subtotal += add;
    }
    tier = t;
    if (P.tiers[t].max === null || subtotal <= P.tiers[t].max) break;
  }
  const T = P.tiers[tier];
  if (subtotal < T.min) {
    lines.push({ name: 'TYPE ' + tier + ' 최소 금액 보정', qty: 1, unitPrice: T.min - subtotal, amount: T.min - subtotal, note: '티어 하한 적용' });
    subtotal = T.min;
  }
  const vat = Math.round(subtotal * P.vatRate), total = subtotal + vat;
  const deposit = Math.round(total * P.payment.deposit);
  const mo = P.monthly;

  return {
    tier, lines, subtotal, vat, total, deposit, balance: total - deposit,
    days: i.rush ? T.rushDays : T.days,
    monthly: {
      hosting: mo.hosting_db_backup[tier],
      maintenance: mo.maintenance[tier],
      ai: { included: mo.ai_usage.includedPerTier[tier], overagePer1000: mo.ai_usage.overagePer1000, cap: mo.ai_usage.capDefault },
      alimtalkPerMsg: mo.kakao_alimtalk.perMsg,
      yearly: [{ name: '도메인', amount: mo.domain_yearly }],
    },
    assumptions: [
      `TYPE ${tier} (${T.purpose}) · ${i.rush ? T.rushDays : T.days}일 · 수정 ${T.revisions}회 · 무상 개선 ${T.freeFix} · 교육 ${T.edu}`,
      `사용자 ${i.users}명 · 지점 ${i.branches}곳 → 규모배수 ${scale.toFixed(2)} (모듈·에이전트에만 적용)`,
      '금액은 10만원 단위 반올림, VAT 10% 별도 표기',
      `계약금 50% ${deposit.toLocaleString()}원 / 인수 후 잔금 50%`,
    ],
    excluded: [
      '알림톡·SMS 발송비(건당 ' + mo.kakao_alimtalk.perMsg + '원 실비)',
      'PG·배달앱 수수료, 외부 API 유료 플랜',
      '하드웨어(POS 단말·프린터·지문인식기)',
      '확정 기획서 범위 밖 신규 기능(별도 견적)',
      '월 유지보수(선택) · 서버/백업 월 이용료',
    ],
  };
}

if (typeof module !== 'undefined') module.exports = { atzQuote };

// 자체 테스트: node pricing.js (브라우저에서는 실행 안 됨)
if (typeof require !== 'undefined' && typeof module !== 'undefined' && require.main === module) {
  const assert = require('assert');
  const P = require('./pricing.json');
  const man = (x) => Math.round(x / 1e4).toLocaleString() + '만';
  const cases = [
    ['1. 매장 1곳: 근태+급여 (simple)', { modules: [{ key: 'attendance_schedule', complexity: 'simple' }, { key: 'payroll', complexity: 'simple' }], users: 12 }, 'A', 300e4, 700e4],
    ['2. 운영 연결: 6모듈+연동2+이관S', { modules: ['reservation_noshow', 'membership_credits', 'sales_dashboard', 'attendance_schedule', 'customer_notify', 'crm_consult'].map((key) => ({ key })), integrations: 2, migration: 'small', users: 35, branches: 2 }, 'B', 2000e4, 3500e4],
    ['3. 본사·가맹 25곳: 12모듈+에이전트3+연동4+이관L', { modules: [['multi_branch', 'complex'], ['branch_report', 'complex'], ['sales_dashboard', 'complex'], ['settlement_recon', 'standard'], ['purchase_inventory', 'complex'], ['attendance_schedule'], ['payroll', 'complex'], ['approval_flow'], ['roles_permissions'], ['staff_mobile'], ['kpi_goal'], ['staff_training']].map(([key, complexity]) => ({ key, complexity })), agents: 3, integrations: 4, migration: 'large', users: 120, branches: 25 }, 'C', 6000e4, 15000e4],
    ['4. A 상한 초과→B: 3모듈 standard+연동1', { modules: [{ key: 'purchase_inventory' }, { key: 'vendor_purchase' }, { key: 'sales_dashboard' }], integrations: 1, users: 8 }, 'B', 1000e4, 2000e4],
  ];
  for (const [label, input, tier, lo, hi] of cases) {
    const q = atzQuote(input, P);
    console.log(`${label} → TYPE ${q.tier} | 공급가 ${man(q.subtotal)} | 합계(VAT) ${man(q.total)} | ${q.days}일 | 월 ${man(q.monthly.hosting)}+유지 ${man(q.monthly.maintenance)}`);
    assert.strictEqual(q.tier, tier, label);
    assert.ok(q.subtotal >= lo && q.subtotal <= hi, label + ' out of range: ' + q.subtotal);
    assert.strictEqual(q.subtotal % 1e5, 0);
    assert.strictEqual(q.deposit + q.balance, q.total);
  }
  console.log('OK');
}
