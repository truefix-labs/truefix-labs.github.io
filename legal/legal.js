const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];
const LANGUAGE_NAMES = { 'zh-CN': '简体中文', ja: '日本語', ko: '한국어', en: 'English' };

const shellCopy = {
  en: {
    privacy: { title: 'Privacy Policy', description: 'What TrueFix Studio stores on your device, what it sends to services you connect, and how you can delete your data.', eyebrow: 'PRIVACY / YOUR DATA', heading: 'What stays on your device.<br /><i>What leaves it.</i>', lede: 'A plain-language guide to the information TrueFix handles and the choices you have.', contents: 'On this page' },
    support: { title: 'Technical Support', description: 'Help with installing TrueFix Studio, connecting services, fixing common problems, and deleting local data.', eyebrow: 'HELP / TRUEFIX STUDIO', heading: 'Install the app.<br /><i>Fix a problem. Contact us.</i>', lede: 'Start with the common tasks below or contact TrueFix Labs when you need more help.', contents: 'Support topics' },
    skip: 'Skip to content', menu: 'Open navigation', guide: 'User guide', home: 'Home', about: 'About us', feedback: 'Feedback', privacyLink: 'Privacy', supportLink: 'Support', updated: 'Last updated', language: 'Language', copyright: 'TrueFix Labs · Pre-release software'
  },
  'zh-CN': {
    privacy: { title: '隐私政策', description: '了解 TrueFix Studio 在设备上保存什么、会向已连接服务发送什么，以及如何删除数据。', eyebrow: '隐私 / 你的数据', heading: '哪些数据留在设备上，<br /><i>哪些数据会发送出去。</i>', lede: '用容易理解的语言说明 TrueFix 会处理哪些信息，以及你可以如何控制这些信息。', contents: '本页目录' },
    support: { title: '技术支持', description: '获取 TrueFix Studio 安装、连接服务、常见故障和删除本地数据的帮助。', eyebrow: '帮助 / TRUEFIX STUDIO', heading: '安装应用，解决问题，<br /><i>或联系我们。</i>', lede: '先查看下面的常见任务；如果仍无法解决，可以联系 TrueFix Labs。', contents: '支持主题' },
    skip: '跳到正文', menu: '打开导航', guide: '使用指南', home: '首页', about: '关于我们', feedback: '反馈交流', privacyLink: '隐私政策', supportLink: '技术支持', updated: '最后更新', language: '语言', copyright: 'TrueFix Labs · 首版发布前软件'
  },
  ja: {
    privacy: { title: 'プライバシーポリシー', description: 'TrueFix Studioが端末に保存する情報、接続先へ送る情報、データを削除する方法を説明します。', eyebrow: 'プライバシー / あなたのデータ', heading: '端末に残るデータ。<br /><i>外部へ送られるデータ。</i>', lede: 'TrueFixが扱う情報と、利用者が選べる管理方法を分かりやすく説明します。', contents: 'このページの内容' },
    support: { title: 'テクニカルサポート', description: 'TrueFix Studioのインストール、サービス接続、よくある問題、ローカルデータ削除のヘルプです。', eyebrow: 'ヘルプ / TRUEFIX STUDIO', heading: 'インストール、問題解決、<br /><i>お問い合わせ。</i>', lede: 'よくある作業から確認し、解決しない場合はTrueFix Labsへご連絡ください。', contents: 'サポート項目' },
    skip: '本文へ移動', menu: 'ナビゲーションを開く', guide: '利用ガイド', home: 'ホーム', about: '私たちについて', feedback: 'フィードバック', privacyLink: 'プライバシー', supportLink: 'サポート', updated: '最終更新', language: '言語', copyright: 'TrueFix Labs · プレリリースソフトウェア'
  },
  ko: {
    privacy: { title: '개인정보 처리방침', description: 'TrueFix Studio가 기기에 저장하는 정보, 연결 서비스로 보내는 정보, 데이터 삭제 방법을 설명합니다.', eyebrow: '개인정보 / 내 데이터', heading: '기기에 남는 데이터와<br /><i>외부로 전송되는 데이터.</i>', lede: 'TrueFix가 처리하는 정보와 사용자가 선택할 수 있는 관리 방법을 쉽게 설명합니다.', contents: '페이지 목차' },
    support: { title: '기술 지원', description: 'TrueFix Studio 설치, 서비스 연결, 일반 문제 해결, 로컬 데이터 삭제 도움말입니다.', eyebrow: '도움말 / TRUEFIX STUDIO', heading: '설치, 문제 해결,<br /><i>문의 방법.</i>', lede: '아래의 일반 작업부터 확인하고 해결되지 않으면 TrueFix Labs에 문의하세요.', contents: '지원 항목' },
    skip: '본문으로 건너뛰기', menu: '탐색 메뉴 열기', guide: '사용 가이드', home: '홈', about: '소개', feedback: '피드백', privacyLink: '개인정보', supportLink: '기술 지원', updated: '최종 업데이트', language: '언어', copyright: 'TrueFix Labs · 출시 전 소프트웨어'
  }
};

function normalizeLanguage(value) {
  const language = String(value || '').toLowerCase();
  if (language.startsWith('zh')) return 'zh-CN';
  if (language.startsWith('ja')) return 'ja';
  if (language.startsWith('ko')) return 'ko';
  if (language.startsWith('en')) return 'en';
  return null;
}

function detectLanguage() {
  const pathLocale = window.TrueFixLocale?.pathLanguage();
  if (pathLocale) return pathLocale;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch { /* Browser preference remains available. */ }
  const values = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const value of values) {
    const normalized = normalizeLanguage(value);
    if (normalized) return normalized;
  }
  return 'en';
}

const page = document.body.dataset.page;
const documentNode = document.querySelector('[data-legal-document]');
const navigationNode = document.querySelector('[data-legal-navigation]');
const englishContent = documentNode?.innerHTML || '';
const englishNavigation = navigationNode?.innerHTML || '';
let revision = 0;

function applyShell(locale) {
  const shared = shellCopy[locale];
  const pageCopy = shared[page];
  document.documentElement.lang = locale;
  document.title = `TrueFix Studio — ${pageCopy.title}`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = pageCopy.description;
  document.querySelectorAll('[data-shell]').forEach((node) => {
    const key = node.dataset.shell;
    const value = pageCopy[key] || shared[key];
    if (!value) return;
    if (key === 'heading') node.innerHTML = value;
    else node.textContent = value;
  });
  const languageCurrent = document.querySelector('[data-language-current]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const languageMenu = document.querySelector('[data-language-menu]');
  if (languageCurrent) languageCurrent.textContent = LANGUAGE_NAMES[locale];
  if (languageToggle) languageToggle.setAttribute('aria-label', `${shared.language}: ${LANGUAGE_NAMES[locale]}`);
  if (languageMenu) languageMenu.setAttribute('aria-label', shared.language);
  document.querySelectorAll('[data-language]').forEach((button) => button.setAttribute('aria-selected', String(button.dataset.language === locale)));
}

async function applyLanguage(requested, persist = false) {
  const locale = SUPPORTED_LANGUAGES.includes(requested) ? requested : 'en';
  const currentRevision = ++revision;
  applyShell(locale);
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Keep selection for this visit. */ }
  }
  window.TrueFixLocale?.activate(locale);
  document.documentElement.classList.add('legal-changing');
  try {
    if (locale === 'en') {
      if (documentNode) documentNode.innerHTML = englishContent;
      if (navigationNode) navigationNode.innerHTML = englishNavigation;
    } else {
      const response = await fetch(`content/${locale}.html?v=1`);
      if (!response.ok) throw new Error(`Localized page request failed: ${response.status}`);
      const markup = await response.text();
      if (currentRevision !== revision) return;
      const parsed = new DOMParser().parseFromString(markup, 'text/html');
      const localizedDocument = parsed.querySelector('[data-localized-document]');
      const localizedNavigation = parsed.querySelector('[data-localized-navigation]');
      if (!localizedDocument || !localizedNavigation) throw new Error('Localized page is incomplete');
      if (documentNode) documentNode.innerHTML = localizedDocument.innerHTML;
      if (navigationNode) navigationNode.innerHTML = localizedNavigation.innerHTML;
    }
    window.TrueFixLocale?.activate(locale);
  } catch {
    if (currentRevision === revision) {
      if (documentNode) documentNode.innerHTML = englishContent;
      if (navigationNode) navigationNode.innerHTML = englishNavigation;
    }
  } finally {
    if (currentRevision === revision) document.documentElement.classList.remove('legal-changing');
  }
}

const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const languagePicker = document.querySelector('[data-language-picker]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageMenu = document.querySelector('[data-language-menu]');
const languageOptions = [...document.querySelectorAll('[data-language]')];

function setLanguageMenu(open, focusOption = false) {
  languagePicker?.classList.toggle('is-open', open);
  languageToggle?.setAttribute('aria-expanded', String(open));
  languageMenu?.setAttribute('aria-hidden', String(!open));
  if (languageMenu) languageMenu.inert = !open;
  languageOptions.forEach((option) => { option.tabIndex = open && option.getAttribute('aria-selected') === 'true' ? 0 : -1; });
  if (open && focusOption) (languageOptions.find((option) => option.getAttribute('aria-selected') === 'true') || languageOptions[0])?.focus();
}

function setMenu(open) {
  menuButton?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (!open) setLanguageMenu(false);
}

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
languageToggle?.addEventListener('click', () => {
  const open = languageToggle.getAttribute('aria-expanded') !== 'true';
  setLanguageMenu(open, open);
});
languageToggle?.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
  event.preventDefault();
  setLanguageMenu(true, true);
});
languageOptions.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (window.TrueFixLocale) {
      window.TrueFixLocale.navigate(button.dataset.language);
      return;
    }
    applyLanguage(button.dataset.language, true);
    setLanguageMenu(false);
    languageToggle?.focus();
  });
  button.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowDown') next = (index + 1) % languageOptions.length;
    if (event.key === 'ArrowUp') next = (index - 1 + languageOptions.length) % languageOptions.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = languageOptions.length - 1;
    languageOptions[next]?.focus();
  });
});
document.addEventListener('click', (event) => { if (!languagePicker?.contains(event.target)) setLanguageMenu(false); });
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  setLanguageMenu(false);
  setMenu(false);
  menuButton?.focus();
});
applyLanguage(detectLanguage());
