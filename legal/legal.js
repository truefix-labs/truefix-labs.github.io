const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];

const shellCopy = {
  en: {
    privacy: { title: 'Privacy Policy', description: 'TrueFix Studio Privacy Policy: data handling for the website, apps, local Web Gateway, providers, AI services, storage, retention, and user controls.', eyebrow: 'PRIVACY / DATA PRACTICES', heading: 'Privacy should be<br /><i>visible by design.</i>', lede: 'How TrueFix Studio handles information across the public website, local applications, Web Gateway, and services you choose to connect.', contents: 'On this page' },
    support: { title: 'Technical Support', description: 'Official technical support for TrueFix Studio: installation, troubleshooting, privacy requests, local data, Web Gateway, and contact channels.', eyebrow: 'SUPPORT / TRUEFIX STUDIO', heading: 'A clear path from issue<br /><i>to resolution.</i>', lede: 'Installation help, troubleshooting, data-control guidance, and direct ways to reach TrueFix Labs.', contents: 'Support topics' },
    skip: 'Skip to content', guide: 'User guide', home: 'Home', privacyLink: 'Privacy', supportLink: 'Support', updated: 'Last updated', language: 'Language', copyright: 'TrueFix Labs · Pre-release software'
  },
  'zh-CN': {
    privacy: { title: '隐私政策', description: 'TrueFix Studio 隐私政策：官网、应用、本地 Web Gateway、Provider、AI 服务、存储、保留与用户控制。', eyebrow: '隐私 / 数据实践', heading: '让隐私保护<br /><i>清晰可见。</i>', lede: '说明 TrueFix Studio 如何处理官网、本地应用、Web Gateway 以及你主动连接的服务中的信息。', contents: '本页目录' },
    support: { title: '技术支持', description: 'TrueFix Studio 官方技术支持：安装、故障排查、隐私请求、本地数据、Web Gateway 与联系渠道。', eyebrow: '支持 / TRUEFIX STUDIO', heading: '让每个问题都有<br /><i>清晰的解决路径。</i>', lede: '安装帮助、故障排查、数据控制说明，以及联系 TrueFix Labs 的方式。', contents: '支持主题' },
    skip: '跳到正文', guide: '使用指南', home: '首页', privacyLink: '隐私政策', supportLink: '技术支持', updated: '最后更新', language: '语言', copyright: 'TrueFix Labs · 首版发布前软件'
  },
  ja: {
    privacy: { title: 'プライバシーポリシー', description: 'TrueFix Studioのプライバシーポリシー。ウェブサイト、アプリ、ローカルWeb Gateway、Provider、AIサービス、保存期間、利用者の管理方法を説明します。', eyebrow: 'プライバシー / データ取扱い', heading: 'プライバシーを<br /><i>設計から見える形に。</i>', lede: '公開サイト、ローカルアプリ、Web Gateway、および利用者が接続するサービスでの情報取扱いを説明します。', contents: 'このページの内容' },
    support: { title: 'テクニカルサポート', description: 'TrueFix Studio公式サポート。インストール、トラブルシューティング、プライバシー申請、ローカルデータ、Web Gateway、連絡先。', eyebrow: 'サポート / TRUEFIX STUDIO', heading: '問題から解決まで<br /><i>明確な道筋を。</i>', lede: 'インストール、問題解決、データ管理、TrueFix Labsへの連絡方法をご案内します。', contents: 'サポート項目' },
    skip: '本文へ移動', guide: '利用ガイド', home: 'ホーム', privacyLink: 'プライバシー', supportLink: 'サポート', updated: '最終更新', language: '言語', copyright: 'TrueFix Labs · プレリリースソフトウェア'
  },
  ko: {
    privacy: { title: '개인정보 처리방침', description: 'TrueFix Studio 개인정보 처리방침: 웹사이트, 앱, 로컬 Web Gateway, Provider, AI 서비스, 보관 및 사용자 제어.', eyebrow: '개인정보 / 데이터 처리', heading: '개인정보 보호를<br /><i>설계부터 투명하게.</i>', lede: '공개 웹사이트, 로컬 앱, Web Gateway 및 사용자가 연결한 서비스에서 정보를 처리하는 방식을 설명합니다.', contents: '페이지 목차' },
    support: { title: '기술 지원', description: 'TrueFix Studio 공식 기술 지원: 설치, 문제 해결, 개인정보 요청, 로컬 데이터, Web Gateway 및 문의 채널.', eyebrow: '지원 / TRUEFIX STUDIO', heading: '문제에서 해결까지<br /><i>명확한 경로를.</i>', lede: '설치 도움말, 문제 해결, 데이터 제어 안내 및 TrueFix Labs 문의 방법입니다.', contents: '지원 항목' },
    skip: '본문으로 건너뛰기', guide: '사용 가이드', home: '홈', privacyLink: '개인정보', supportLink: '기술 지원', updated: '최종 업데이트', language: '언어', copyright: 'TrueFix Labs · 출시 전 소프트웨어'
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
  document.querySelectorAll('[data-language]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === locale)));
}

async function applyLanguage(requested, persist = false) {
  const locale = SUPPORTED_LANGUAGES.includes(requested) ? requested : 'en';
  const currentRevision = ++revision;
  applyShell(locale);
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Keep selection for this visit. */ }
  }
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
  } catch {
    if (currentRevision === revision) {
      if (documentNode) documentNode.innerHTML = englishContent;
      if (navigationNode) navigationNode.innerHTML = englishNavigation;
    }
  } finally {
    if (currentRevision === revision) document.documentElement.classList.remove('legal-changing');
  }
}

document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language, true)));
applyLanguage(detectLanguage());
