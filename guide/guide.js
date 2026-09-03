const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];

const shellTranslations = {
  en: {
    title: 'TrueFix Studio User Guide', description: 'TrueFix Studio user guide for providers, market context, review, risk, and authorized AI + Quant workflows.',
    skip: 'Skip to content', edition: 'USER GUIDE / EN', language: 'Language', home: 'Back home', navTitle: 'Guide contents',
    navBefore: 'Before you start', navFirst: 'First run', navProvider: 'Configure providers', navMarket: 'Instruments & market data', navTrade: 'Orders & risk', navPortfolio: 'Accounts & portfolio', navIntelligence: 'Intelligence', navAgent: 'Use Agent', navAi: 'Quant & automation', navWeb: 'Web & ACME', navArchitecture: 'Architecture & data', navTroubleshooting: 'Troubleshooting',
    status: 'Pre-release\nGuide 2026.09', loading: 'Loading guide…', error: 'The guide could not be loaded. Please refresh and try again.'
  },
  'zh-CN': {
    title: 'TrueFix Studio 使用指南', description: 'TrueFix Studio 使用指南：Provider、市场上下文、审核、风控与受权 AI + Quant 工作流。',
    skip: '跳到正文', edition: '使用指南 / ZH-CN', language: '语言', home: '返回首页', navTitle: '指南目录',
    navBefore: '开始之前', navFirst: '首次启动', navProvider: '配置 Provider', navMarket: '标的与行情', navTrade: '下单与风控', navPortfolio: '账户与组合', navIntelligence: 'Intelligence', navAgent: '使用 Agent', navAi: 'Quant 与自动化', navWeb: 'Web 与 ACME', navArchitecture: '架构与数据', navTroubleshooting: '故障排查',
    status: '首版发布前\n指南 2026.09', loading: '正在加载指南…', error: '指南加载失败，请刷新后重试。'
  },
  ko: {
    title: 'TrueFix Studio 사용 가이드', description: 'Provider, 시장 컨텍스트, 검토, 리스크, 권한이 부여된 AI + Quant 워크플로를 위한 TrueFix Studio 가이드입니다.',
    skip: '본문으로 건너뛰기', edition: '사용 가이드 / KO', language: '언어', home: '홈으로', navTitle: '가이드 목차',
    navBefore: '시작 전', navFirst: '첫 실행', navProvider: 'Provider 구성', navMarket: '종목 & 시장 데이터', navTrade: '주문 & 리스크', navPortfolio: '계정 & 포트폴리오', navIntelligence: '인텔리전스', navAgent: 'Agent 사용', navAi: 'Quant & 자동화', navWeb: 'Web & ACME', navArchitecture: '아키텍처 & 데이터', navTroubleshooting: '문제 해결',
    status: '출시 전\n가이드 2026.09', loading: '가이드 로드 중…', error: '가이드를 불러오지 못했습니다. 새로고침 후 다시 시도하세요.'
  },
  ja: {
    title: 'TrueFix Studio 利用ガイド', description: 'Provider、市場コンテキスト、レビュー、リスク、認可済み AI + Quant ワークフローの TrueFix Studio 利用ガイドです。',
    skip: '本文へ移動', edition: '利用ガイド / JA', language: '言語', home: 'ホームへ戻る', navTitle: 'ガイド目次',
    navBefore: '始める前に', navFirst: '初回起動', navProvider: 'Provider 設定', navMarket: '銘柄と市場データ', navTrade: '注文とリスク', navPortfolio: '口座とポートフォリオ', navIntelligence: 'インテリジェンス', navAgent: 'Agent の使い方', navAi: 'Quant と自動化', navWeb: 'Web と ACME', navArchitecture: '構成とデータ', navTroubleshooting: 'トラブルシューティング',
    status: 'リリース前\nガイド 2026.09', loading: 'ガイドを読み込み中…', error: 'ガイドを読み込めませんでした。更新して再試行してください。'
  }
};

function normalizeLanguage(locale) {
  const value = String(locale || '').toLowerCase();
  if (value.startsWith('zh')) return 'zh-CN';
  if (value.startsWith('ko')) return 'ko';
  if (value.startsWith('ja')) return 'ja';
  if (value.startsWith('en')) return 'en';
  return null;
}

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : null;
  } catch { return null; }
}

function detectBrowserLanguage() {
  const locales = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const locale of locales) {
    const normalized = normalizeLanguage(locale);
    if (normalized) return normalized;
  }
  return 'en';
}

let contentRevision = 0;

async function loadGuide(language, persist = false) {
  const locale = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
  const dictionary = shellTranslations[locale];
  const revision = ++contentRevision;
  document.documentElement.lang = locale;
  document.title = dictionary.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = dictionary.description;
  document.querySelectorAll('[data-guide-key]').forEach((element) => {
    const value = dictionary[element.dataset.guideKey];
    if (value) element.innerHTML = value.replace('\n', '<br />');
  });
  const select = document.querySelector('[data-guide-language-select]');
  if (select) {
    select.value = locale;
    select.setAttribute('aria-label', dictionary.language);
  }
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Keep the preference for this page only. */ }
  }

  const content = document.querySelector('[data-guide-content]');
  if (!content) return;
  content.setAttribute('aria-busy', 'true');
  try {
    const response = await fetch(`content/${locale}.html?v=5`);
    if (!response.ok) throw new Error(`Guide request failed: ${response.status}`);
    const markup = await response.text();
    if (revision !== contentRevision) return;
    content.innerHTML = markup;
    content.setAttribute('aria-busy', 'false');
    if (window.location.hash) requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
  } catch {
    if (revision !== contentRevision) return;
    content.innerHTML = `<div class="guide-error"><p>${dictionary.error}</p></div>`;
    content.setAttribute('aria-busy', 'false');
  }
}

const initialLanguage = getSavedLanguage() || detectBrowserLanguage();
loadGuide(initialLanguage);

document.querySelector('[data-guide-language-select]')?.addEventListener('change', (event) => {
  loadGuide(event.currentTarget.value, true);
});
