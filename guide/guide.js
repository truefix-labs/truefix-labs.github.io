const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];
const LANGUAGE_NAMES = { 'zh-CN': '简体中文', ja: '日本語', ko: '한국어', en: 'English' };

const shellTranslations = {
  en: {
    title: 'TrueFix Studio User Guide', description: 'Learn how to install TrueFix Studio, connect a broker or market-data service, use the AI assistant, test a strategy, and review a trading action safely.',
    skip: 'Skip to content', menu: 'Open navigation', edition: 'USER GUIDE / EN', language: 'Language', privacy: 'Privacy', support: 'Support', feedback: 'Feedback', home: 'Home', about: 'About us', guideCurrent: 'User guide', navTitle: 'Guide contents',
    navBefore: 'Before you start', navFirst: 'First run', navProvider: 'Connect a service', navMarket: 'Markets & prices', navTrade: 'Review a trade', navPortfolio: 'Accounts & portfolio', navIntelligence: 'Research & sources', navAgent: 'Use the AI assistant', navAi: 'Strategies & automation', navWeb: 'Browser access (advanced)', navOperations: 'Logs & activity', navGlossary: 'Terms and status', navArchitecture: 'Data and connections', navTroubleshooting: 'Troubleshooting',
    status: 'Pre-release\nGuide 2026.09', loading: 'Loading guide…', error: 'The guide could not be loaded. Please refresh and try again.'
  },
  'zh-CN': {
    title: 'TrueFix Studio 使用指南', description: '了解如何安装 TrueFix Studio、连接券商或行情服务、使用 AI 助手、测试策略并安全确认交易操作。',
    skip: '跳到正文', menu: '打开导航', edition: '使用指南 / ZH-CN', language: '语言', privacy: '隐私政策', support: '技术支持', feedback: '反馈与交流', home: '首页', about: '关于我们', guideCurrent: '使用指南', navTitle: '指南目录',
    navBefore: '开始之前', navFirst: '首次启动', navProvider: '连接服务', navMarket: '市场与行情', navTrade: '确认交易', navPortfolio: '账户与持仓', navIntelligence: '研究与信息来源', navAgent: '使用 AI 助手', navAi: '策略与自动化', navWeb: '浏览器访问（高级）', navOperations: '日志与操作记录', navGlossary: '术语与状态', navArchitecture: '数据与连接方式', navTroubleshooting: '故障排查',
    status: '首版发布前\n指南 2026.09', loading: '正在加载指南…', error: '指南加载失败，请刷新后重试。'
  },
  ko: {
    title: 'TrueFix Studio 사용 가이드', description: 'TrueFix Studio 설치, 증권사나 시세 서비스 연결, AI 도우미, 전략 테스트, 안전한 거래 확인 방법을 안내합니다.',
    skip: '본문으로 건너뛰기', menu: '탐색 메뉴 열기', edition: '사용 가이드 / KO', language: '언어', privacy: '개인정보', support: '기술 지원', feedback: '피드백 및 토론', home: '홈', about: '소개', guideCurrent: '사용 가이드', navTitle: '가이드 목차',
    navBefore: '시작 전', navFirst: '첫 실행', navProvider: '서비스 연결', navMarket: '시장과 시세', navTrade: '거래 확인', navPortfolio: '계정과 보유 자산', navIntelligence: '리서치와 출처', navAgent: 'AI 도우미 사용', navAi: '전략과 자동화', navWeb: '브라우저 접속(고급)', navOperations: '로그와 작업 기록', navGlossary: '용어와 상태', navArchitecture: '데이터와 연결', navTroubleshooting: '문제 해결',
    status: '출시 전\n가이드 2026.09', loading: '가이드 로드 중…', error: '가이드를 불러오지 못했습니다. 새로고침 후 다시 시도하세요.'
  },
  ja: {
    title: 'TrueFix Studio 利用ガイド', description: 'TrueFix Studioのインストール、証券会社や相場データの接続、AIアシスタント、戦略テスト、安全な取引確認を説明します。',
    skip: '本文へ移動', menu: 'ナビゲーションを開く', edition: '利用ガイド / JA', language: '言語', privacy: 'プライバシー', support: 'サポート', feedback: 'フィードバック', home: 'ホーム', about: '私たちについて', guideCurrent: '利用ガイド', navTitle: 'ガイド目次',
    navBefore: '始める前に', navFirst: '初回起動', navProvider: 'サービスを接続', navMarket: '市場と価格', navTrade: '取引を確認', navPortfolio: '口座と保有資産', navIntelligence: 'リサーチと情報源', navAgent: 'AIアシスタント', navAi: '戦略と自動化', navWeb: 'ブラウザー接続（上級）', navOperations: 'ログと操作記録', navGlossary: '用語と状態', navArchitecture: 'データと接続', navTroubleshooting: 'トラブルシューティング',
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
  const languageCurrent = document.querySelector('[data-guide-language-current]');
  const languageToggle = document.querySelector('[data-guide-language-toggle]');
  const languageMenu = document.querySelector('[data-guide-language-menu]');
  if (languageCurrent) languageCurrent.textContent = LANGUAGE_NAMES[locale];
  if (languageToggle) languageToggle.setAttribute('aria-label', `${dictionary.language}: ${LANGUAGE_NAMES[locale]}`);
  if (languageMenu) languageMenu.setAttribute('aria-label', dictionary.language);
  document.querySelectorAll('[data-guide-language-option]').forEach((option) => {
    const selected = option.dataset.guideLanguageOption === locale;
    option.setAttribute('aria-selected', String(selected));
  });
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Keep the preference for this page only. */ }
  }
  window.TrueFixLocale?.activate(locale);

  const content = document.querySelector('[data-guide-content]');
  if (!content) return;
  content.setAttribute('aria-busy', 'true');
  try {
    const response = await fetch(`content/${locale}.html?v=11`);
    if (!response.ok) throw new Error(`Guide request failed: ${response.status}`);
    const markup = await response.text();
    if (revision !== contentRevision) return;
    content.innerHTML = markup;
    window.TrueFixLocale?.activate(locale);
    content.setAttribute('aria-busy', 'false');
    if (window.location.hash) requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
  } catch {
    if (revision !== contentRevision) return;
    content.innerHTML = `<div class="guide-error"><p>${dictionary.error}</p></div>`;
    content.setAttribute('aria-busy', 'false');
  }
}

const initialLanguage = window.TrueFixLocale?.pathLanguage() || getSavedLanguage() || detectBrowserLanguage();
loadGuide(initialLanguage);

const languagePicker = document.querySelector('[data-guide-language-picker]');
const languageToggle = document.querySelector('[data-guide-language-toggle]');
const languageMenu = document.querySelector('[data-guide-language-menu]');
const languageOptions = [...document.querySelectorAll('[data-guide-language-option]')];
const guideMenuButton = document.querySelector('[data-guide-menu-button]');
const guideNav = document.querySelector('[data-guide-nav]');

function setGuideMenu(open) {
  guideMenuButton?.setAttribute('aria-expanded', String(open));
  guideNav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (!open) setLanguageMenu(false);
}

function setLanguageMenu(open, focusOption = false) {
  languagePicker?.classList.toggle('is-open', open);
  languageToggle?.setAttribute('aria-expanded', String(open));
  languageMenu?.setAttribute('aria-hidden', String(!open));
  if (languageMenu) languageMenu.inert = !open;
  languageOptions.forEach((option) => { option.tabIndex = open && option.getAttribute('aria-selected') === 'true' ? 0 : -1; });
  if (open && focusOption) {
    (languageOptions.find((option) => option.getAttribute('aria-selected') === 'true') || languageOptions[0])?.focus();
  }
}

languageToggle?.addEventListener('click', () => {
  const open = languageToggle.getAttribute('aria-expanded') !== 'true';
  setLanguageMenu(open, open);
});

guideMenuButton?.addEventListener('click', () => setGuideMenu(guideMenuButton.getAttribute('aria-expanded') !== 'true'));
guideNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setGuideMenu(false)));

languageToggle?.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
  event.preventDefault();
  setLanguageMenu(true, true);
});

languageOptions.forEach((option, index) => {
  option.addEventListener('click', () => {
    if (window.TrueFixLocale) {
      window.TrueFixLocale.navigate(option.dataset.guideLanguageOption);
      return;
    }
    loadGuide(option.dataset.guideLanguageOption, true);
    setLanguageMenu(false);
    languageToggle?.focus();
  });
  option.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowDown') nextIndex = (index + 1) % languageOptions.length;
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + languageOptions.length) % languageOptions.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = languageOptions.length - 1;
    languageOptions[nextIndex]?.focus();
  });
});

document.addEventListener('click', (event) => {
  if (!languagePicker?.contains(event.target)) setLanguageMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  setLanguageMenu(false);
  setGuideMenu(false);
  guideMenuButton?.focus();
});
