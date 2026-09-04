const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];
const LANGUAGE_NAMES = { 'zh-CN': '简体中文', ja: '日本語', ko: '한국어', en: 'English' };

const copy = {
  en: {
    metaTitle: 'TrueFix Studio — Product Film',
    metaDescription: 'Watch the 36-second TrueFix Studio product film about evidence, risk boundaries, authorized AI, quantitative automation, and the future Market Twin concept.',
    skip: 'Skip to the film', menu: 'Open navigation', language: 'Language', guide: 'User guide', privacy: 'Privacy', support: 'Technical support', home: 'Home', about: 'About us', feedback: 'Feedback', eyebrow: 'TRUEFIX STUDIO / PRODUCT FILM',
    title: 'See the decision chain.<br />Keep every boundary visible.',
    lede: 'A 36-second introduction to evidence-linked markets, human-controlled automation, and the future Market Twin concept.',
    fallback: 'Your browser cannot play this video.', caption: 'English narration · Original ambient score · Multilingual captions',
    aboutLabel: 'ABOUT THE FILM', aboutTitle: 'One auditable flow, from context to action.',
    aboutCopy: 'The film introduces TrueFix Studio as a multi-provider workstation where signals retain their sources, AI and quantitative systems operate inside explicit authority, and risk remains visible before capital moves.',
    publishedLabel: 'PUBLISHED', durationLabel: 'DURATION', conceptLabel: 'FUTURE CONCEPT', transcriptEyebrow: 'ACCESSIBLE TRANSCRIPT', transcriptTitle: 'Narration transcript',
    transcriptLead: 'The complete spoken narration is provided below so the film remains understandable without audio.',
    line1: 'Markets move faster than disconnected tools.',
    line2: 'TrueFix Studio brings context, evidence, strategy, risk, and execution into one auditable flow.',
    line3: 'Every signal stays linked to its source.',
    line4: 'Artificial intelligence and quantitative systems operate within clear, human-controlled boundaries.',
    line5: 'Next comes Market Twin: a future concept that compares liquidity, slippage, and risk before capital moves.',
    line6: 'TrueFix Studio. Clarity for every decision. Certainty for every action.'
  },
  'zh-CN': {
    metaTitle: 'TrueFix Studio — 产品宣传片',
    metaDescription: '观看 36 秒 TrueFix Studio 宣传片，了解证据、风险边界、受权 AI、量化自动化与未来 Market Twin 概念。',
    skip: '跳到宣传片', menu: '打开导航', language: '语言', guide: '使用指南', privacy: '隐私政策', support: '技术支持', home: '首页', about: '关于我们', feedback: '反馈交流', eyebrow: 'TRUEFIX STUDIO / 产品宣传片',
    title: '看见决策链。<br />让每一道边界清晰可见。',
    lede: '用 36 秒了解证据相连的市场、由人控制的自动化，以及未来 Market Twin 概念。',
    fallback: '当前浏览器无法播放此视频。', caption: '英文旁白 · 原创氛围配乐 · 多语言字幕',
    aboutLabel: '关于宣传片', aboutTitle: '从上下文到行动，一条可审计流程。',
    aboutCopy: '宣传片介绍 TrueFix Studio 如何作为多 Provider 工作站，让信号始终保留来源，让 AI 与量化系统在明确授权内运行，并在资金行动前保持风险可见。',
    publishedLabel: '发布日期', durationLabel: '时长', conceptLabel: '未来概念', transcriptEyebrow: '无障碍文字稿', transcriptTitle: '旁白文字稿',
    transcriptLead: '下方提供完整旁白文字，让用户在没有声音的情况下也能理解宣传片。',
    line1: '市场变化的速度，远快于彼此割裂的工具。',
    line2: 'TrueFix Studio 将上下文、证据、策略、风险与执行汇入同一条可审计流程。',
    line3: '每一个信号都始终链接到它的来源。',
    line4: '人工智能与量化系统在清晰、由人控制的边界内运行。',
    line5: '下一步是 Market Twin：在资金行动前比较流动性、滑点与风险的未来概念。',
    line6: 'TrueFix Studio。让每个决策更清晰，让每个行动更确定。'
  },
  ja: {
    metaTitle: 'TrueFix Studio — 製品映像',
    metaDescription: 'TrueFix Studioの36秒の製品映像。証拠、リスク境界、認可済みAI、クオンツ自動化、未来のMarket Twin構想を紹介します。',
    skip: '映像へ移動', menu: 'ナビゲーションを開く', language: '言語', guide: '利用ガイド', privacy: 'プライバシー', support: 'テクニカルサポート', home: 'ホーム', about: '私たちについて', feedback: 'フィードバック', eyebrow: 'TRUEFIX STUDIO / 製品映像',
    title: '意思決定の流れを見せる。<br />すべての境界を可視化する。',
    lede: '証拠につながる市場、人が制御する自動化、未来のMarket Twin構想を36秒で紹介します。',
    fallback: 'このブラウザーでは動画を再生できません。', caption: '英語ナレーション · オリジナル環境音楽 · 多言語字幕',
    aboutLabel: '映像について', aboutTitle: 'コンテキストから行動まで、一つの監査可能なフロー。',
    aboutCopy: 'TrueFix Studioは、シグナルが情報源を保持し、AIとクオンツシステムが明示的な権限内で動作し、資本が動く前にリスクを可視化するマルチプロバイダーワークステーションです。',
    publishedLabel: '公開日', durationLabel: '再生時間', conceptLabel: '未来構想', transcriptEyebrow: 'アクセシブルな文字起こし', transcriptTitle: 'ナレーション全文',
    transcriptLead: '音声なしでも内容を理解できるよう、ナレーション全文を掲載しています。',
    line1: '市場は、分断されたツールより速く動きます。',
    line2: 'TrueFix Studioは、コンテキスト、証拠、戦略、リスク、執行を一つの監査可能なフローに統合します。',
    line3: 'すべてのシグナルは、その情報源と常につながっています。',
    line4: 'AIとクオンツシステムは、明確で人が管理する境界内で動作します。',
    line5: '次はMarket Twin。資本が動く前に流動性、スリッページ、リスクを比較する未来構想です。',
    line6: 'TrueFix Studio。すべての判断に明快さを。すべての行動に確実さを。'
  },
  ko: {
    metaTitle: 'TrueFix Studio — 제품 영상',
    metaDescription: '증거, 리스크 경계, 권한이 부여된 AI, 퀀트 자동화, 미래 Market Twin 개념을 소개하는 36초 TrueFix Studio 제품 영상입니다.',
    skip: '영상으로 이동', menu: '탐색 메뉴 열기', language: '언어', guide: '사용 가이드', privacy: '개인정보', support: '기술 지원', home: '홈', about: '소개', feedback: '피드백', eyebrow: 'TRUEFIX STUDIO / 제품 영상',
    title: '의사결정 흐름을 보여 주고.<br />모든 경계를 명확히 합니다.',
    lede: '증거로 연결된 시장, 사람이 통제하는 자동화, 미래 Market Twin 개념을 36초로 소개합니다.',
    fallback: '브라우저에서 이 동영상을 재생할 수 없습니다.', caption: '영어 내레이션 · 오리지널 앰비언트 음악 · 다국어 자막',
    aboutLabel: '영상 소개', aboutTitle: '컨텍스트에서 행동까지, 하나의 감사 가능한 흐름.',
    aboutCopy: 'TrueFix Studio는 신호가 출처를 유지하고, AI와 퀀트 시스템이 명시적 권한 안에서 작동하며, 자본이 움직이기 전에 리스크를 보여 주는 멀티 Provider 워크스테이션입니다.',
    publishedLabel: '공개일', durationLabel: '재생 시간', conceptLabel: '미래 개념', transcriptEyebrow: '접근 가능한 스크립트', transcriptTitle: '내레이션 전문',
    transcriptLead: '소리 없이도 영상을 이해할 수 있도록 전체 내레이션을 제공합니다.',
    line1: '시장은 서로 단절된 도구보다 빠르게 움직입니다.',
    line2: 'TrueFix Studio는 컨텍스트, 증거, 전략, 리스크, 실행을 하나의 감사 가능한 흐름으로 연결합니다.',
    line3: '모든 신호는 언제나 원본 소스와 연결됩니다.',
    line4: '인공지능과 퀀트 시스템은 명확하고 사람이 통제하는 경계 안에서 작동합니다.',
    line5: '다음은 Market Twin입니다. 자본이 움직이기 전에 유동성, 슬리피지, 리스크를 비교하는 미래 개념입니다.',
    line6: 'TrueFix Studio. 모든 결정에는 명확함을, 모든 행동에는 확실함을.'
  }
};

const plainLanguageCopy = {
  en: {
    metaDescription: 'Watch a 36-second introduction to how TrueFix Studio brings market research, AI assistance, strategy testing, and trading checks together.',
    title: 'See what TrueFix does<br />in 36 seconds.',
    lede: 'See how TrueFix brings market information, strategy testing, AI assistance, and trading checks into one app.',
    aboutTitle: 'From market research to a checked action.',
    aboutCopy: 'TrueFix connects the brokers, exchanges, and data services you already use. It helps you check where information came from, test an idea, and review the account and risk before any trading action is sent.',
    transcriptLead: 'The exact spoken narration appears below. In plain terms, “evidence” means the source of information, and “human-controlled boundaries” means the permissions and checks you choose.'
  },
  'zh-CN': {
    metaDescription: '观看 36 秒 TrueFix Studio 产品介绍，了解它如何集中市场研究、AI 辅助、策略测试和交易前检查。',
    title: '用 36 秒看看<br />TrueFix 能做什么。',
    lede: '了解 TrueFix 如何把市场信息、策略测试、AI 辅助和交易前检查放进一个应用。',
    aboutTitle: '从市场研究到一次经过检查的操作。',
    aboutCopy: 'TrueFix 连接你已有的券商、交易所和数据服务。它帮助你核对信息来自哪里、先测试想法，并在交易操作发出前检查账户和风险。',
    transcriptLead: '下面是视频中的原始旁白。“证据”指信息来源，“由人控制的边界”指你设置的权限和交易前检查。'
  },
  ja: {
    metaDescription: 'TrueFix Studioが市場調査、AI支援、戦略テスト、取引前確認を一つにまとめる仕組みを36秒で紹介します。',
    title: '36秒で分かる<br />TrueFixの役割。',
    lede: '市場情報、戦略テスト、AI支援、取引前確認を一つのアプリにまとめる仕組みを紹介します。',
    aboutTitle: '市場調査から確認済みの操作まで。',
    aboutCopy: 'TrueFixは、今使っている証券会社、取引所、データサービスを接続します。情報源を確かめ、アイデアを試し、取引操作を送る前に口座とリスクを確認できます。',
    transcriptLead: '以下は映像内のナレーション原文です。「証拠」は情報源、「人が管理する境界」は自分で選ぶ権限と確認を意味します。'
  },
  ko: {
    metaDescription: 'TrueFix Studio가 시장 조사, AI 지원, 전략 테스트, 거래 전 확인을 한곳에 모으는 방식을 36초로 소개합니다.',
    title: '36초로 보는<br />TrueFix의 역할.',
    lede: '시장 정보, 전략 테스트, AI 지원, 거래 전 확인을 하나의 앱에 모으는 방식을 소개합니다.',
    aboutTitle: '시장 조사에서 확인된 작업까지.',
    aboutCopy: 'TrueFix는 사용 중인 증권사, 거래소, 데이터 서비스를 연결합니다. 정보 출처를 확인하고 아이디어를 시험한 뒤 거래 작업을 보내기 전에 계정과 리스크를 검토할 수 있습니다.',
    transcriptLead: '아래는 영상의 실제 내레이션입니다. “증거”는 정보 출처를, “사람이 통제하는 경계”는 직접 선택한 권한과 확인을 뜻합니다.'
  }
};

Object.entries(plainLanguageCopy).forEach(([locale, values]) => Object.assign(copy[locale], values));
Object.assign(copy.en, {
  line1: 'You already use a broker, exchange, or market data service.',
  line2: 'TrueFix Studio brings those services into one desktop app.',
  line3: 'Compare prices and news, and open the original source when something needs checking.',
  line4: 'Ask the AI assistant to organize information, and test a strategy before using real money.',
  line5: 'Before sending a trade, check the account, order, fees, and risk.',
  line6: 'Market Twin is a future idea: compare possible routes and outcomes before a trade. TrueFix Studio. Keep your accounts. Make the workflow clearer.'
});
Object.assign(copy['zh-CN'], {
  line1: '你已经在使用券商、交易所或行情数据服务。', line2: 'TrueFix Studio 把这些服务连接到一个桌面应用中。',
  line3: '比较价格和新闻；需要核实时，可以打开原始来源。', line4: '让 AI 助手整理信息，并在使用真实资金前先测试策略。',
  line5: '发送交易前，检查账户、订单、费用和风险。', line6: 'Market Twin 是未来构想：交易前比较不同路线和可能结果。TrueFix Studio，保留现有账户，让工作流程更清楚。'
});
Object.assign(copy.ja, {
  line1: 'すでに証券会社、取引所、相場データサービスを利用しています。', line2: 'TrueFix Studioは、それらのサービスを一つのデスクトップアプリにつなぎます。',
  line3: '価格とニュースを比較し、必要なときは元の情報源を開いて確認します。', line4: 'AIアシスタントに情報整理を依頼し、実際の資金を使う前に戦略を試します。',
  line5: '取引を送る前に、口座、注文、手数料、リスクを確認します。', line6: 'Market Twinは将来構想です。取引前に経路と結果を比較します。TrueFix Studio。今の口座はそのまま、作業の流れを分かりやすく。'
});
Object.assign(copy.ko, {
  line1: '이미 증권사, 거래소 또는 시세 데이터 서비스를 사용하고 있습니다.', line2: 'TrueFix Studio는 그 서비스를 하나의 데스크톱 앱에 연결합니다.',
  line3: '가격과 뉴스를 비교하고 필요할 때 원본 출처를 열어 확인합니다.', line4: 'AI 도우미에게 정보 정리를 맡기고 실제 자금을 쓰기 전에 전략을 시험합니다.',
  line5: '거래를 보내기 전에 계정, 주문, 수수료, 리스크를 확인합니다.', line6: 'Market Twin은 미래 구상입니다. 거래 전에 경로와 결과를 비교합니다. TrueFix Studio. 기존 계정은 그대로, 작업 흐름은 더 명확하게.'
});

function normalizeLanguage(language) {
  const value = String(language || '').toLowerCase();
  if (value.startsWith('zh')) return 'zh-CN';
  if (value.startsWith('ja')) return 'ja';
  if (value.startsWith('ko')) return 'ko';
  if (value.startsWith('en')) return 'en';
  return null;
}

function detectLanguage() {
  const pathLocale = window.TrueFixLocale?.pathLanguage();
  if (pathLocale) return pathLocale;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch { /* Use browser preference. */ }
  const languages = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const language of languages) {
    const normalized = normalizeLanguage(language);
    if (normalized) return normalized;
  }
  return 'en';
}

function applyLanguage(language, persist = false) {
  const locale = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
  const dictionary = copy[locale];
  document.documentElement.lang = locale;
  document.title = dictionary.metaTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = dictionary.metaDescription;
  document.querySelectorAll('[data-copy]').forEach((element) => {
    const value = dictionary[element.dataset.copy];
    if (!value) return;
    if (element.dataset.copy === 'title') element.innerHTML = value;
    else element.textContent = value;
  });
  const languageCurrent = document.querySelector('[data-language-current]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const languageMenu = document.querySelector('[data-language-menu]');
  if (languageCurrent) languageCurrent.textContent = LANGUAGE_NAMES[locale];
  if (languageToggle) languageToggle.setAttribute('aria-label', `${dictionary.language}: ${LANGUAGE_NAMES[locale]}`);
  if (languageMenu) languageMenu.setAttribute('aria-label', dictionary.language);
  document.querySelectorAll('[data-language]').forEach((button) => button.setAttribute('aria-selected', String(button.dataset.language === locale)));
  const film = document.querySelector('[data-film]');
  Array.from(film?.textTracks || []).forEach((track) => {
    track.mode = normalizeLanguage(track.language) === locale ? 'showing' : 'disabled';
  });
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Keep the choice for this page only. */ }
  }
  window.TrueFixLocale?.activate(locale);
}

const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const languagePicker = document.querySelector('[data-language-picker]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageMenu = document.querySelector('[data-language-menu]');
const languageOptions = [...document.querySelectorAll('[data-language]')];

function setMenu(open) {
  menuButton?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (!open) setLanguageMenu(false);
}

function setLanguageMenu(open, focusOption = false) {
  languagePicker?.classList.toggle('is-open', open);
  languageToggle?.setAttribute('aria-expanded', String(open));
  languageMenu?.setAttribute('aria-hidden', String(!open));
  if (languageMenu) languageMenu.inert = !open;
  languageOptions.forEach((option) => { option.tabIndex = open && option.getAttribute('aria-selected') === 'true' ? 0 : -1; });
  if (open && focusOption) (languageOptions.find((option) => option.getAttribute('aria-selected') === 'true') || languageOptions[0])?.focus();
}

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
languageToggle?.addEventListener('click', () => setLanguageMenu(languageToggle.getAttribute('aria-expanded') !== 'true', true));
languageOptions.forEach((button, index) => button.addEventListener('click', () => {
  if (window.TrueFixLocale) {
    window.TrueFixLocale.navigate(button.dataset.language);
    return;
  }
  applyLanguage(button.dataset.language, true);
  setLanguageMenu(false);
  languageToggle?.focus();
}));
languageOptions.forEach((button, index) => button.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  let next = index;
  if (event.key === 'ArrowDown') next = (index + 1) % languageOptions.length;
  if (event.key === 'ArrowUp') next = (index - 1 + languageOptions.length) % languageOptions.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = languageOptions.length - 1;
  languageOptions[next]?.focus();
}));
document.addEventListener('click', (event) => { if (!languagePicker?.contains(event.target)) setLanguageMenu(false); });
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  setLanguageMenu(false);
  setMenu(false);
  menuButton?.focus();
});
applyLanguage(detectLanguage());
