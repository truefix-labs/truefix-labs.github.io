const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['en', 'zh-CN', 'ko', 'ja'];
const LANGUAGE_CODES = { en: 'EN', 'zh-CN': '中', ko: '한', ja: '日' };

const translations = {
  en: {
    'meta.title': 'TrueFix Studio — Multi-provider trading workstation',
    'meta.description': 'TrueFix Studio is a multi-provider trading workstation for Desktop, Web, Headless Quant, and authorized AI tools.',
    'meta.ogDescription': 'Market data, research, strategy, risk, and execution in one auditable workstation.',
    'a11y.skip': 'Skip to main content', 'a11y.home': 'TrueFix Studio home', 'a11y.menu': 'Open navigation',
    'a11y.nav': 'Primary navigation', 'a11y.capabilities': 'Core capabilities', 'a11y.productInterfaces': 'Product interfaces',
    'a11y.architecture': 'TrueFix Studio architecture diagram', 'language.choose': 'Choose language', 'language.label': 'Language',
    'nav.product': 'Product', 'nav.principles': 'Principles', 'nav.architecture': 'Architecture', 'nav.modes': 'Use cases',
    'hero.eyebrow': 'Open source · Pre-release', 'hero.title': 'Every market decision,<br /><i>backed by evidence.</i>',
    'hero.lede': 'TrueFix Studio brings market data, research, strategy, risk, and execution into one multi-provider workstation—clear for traders, deterministic for quant systems, and permissioned for AI.',
    'hero.source': 'View source', 'hero.explore': 'Explore workstation', 'hero.note': 'Pre-release · Build from source today',
    'cap.historical': 'Historical Market Data', 'cap.realtime': 'Realtime Market Data', 'cap.trade': 'Trade',
    'cap.news': 'News & Events', 'cap.instruments': 'Instruments', 'cap.analysis': 'Analysis',
    'product.title': 'One workstation.<br />The full decision chain.',
    'product.lede': 'One canonical contract serves Desktop, Web, AI, and Quant. Runtime evidence answers where data came from, why it is available, and whether it can trade.',
    'product.tab.workstation': 'Trading workstation', 'product.tab.workstationSub': 'Market · Chart · Execution',
    'product.tab.intelligence': 'Intelligence', 'product.tab.intelligenceSub': 'Evidence · Signal · Replay',
    'product.tab.quantSub': 'Strategy · Authority · Runtime',
    'product.caption.workstation': 'Cross-market context and provider routes stay explicit; the interface never guesses capabilities.',
    'product.caption.intelligence': 'Keep observations, sources, confidence, and historical replay on the same evidence chain.',
    'product.caption.quant': 'Strategy output becomes a constrained decision before Review and RiskGuard allow execution.',
    'principles.title': 'Trading infrastructure<br />should never guess.',
    'principles.lede': 'TrueFix draws deliberate boundaries: when mappings, accounts, permissions, or freshness are missing, it stops instead of quietly choosing a plausible answer.',
    'principles.evidence.title': 'Capabilities resolve from evidence',
    'principles.evidence.body': 'ProviderDefinition, ClientInstance, market, product, environment, and entitlement jointly decide whether a capability exists now.',
    'principles.execution.title': 'Execution never guesses',
    'principles.execution.body': 'Orders bind to an exact instrument, provider, ClientInstance, account, and environment. Unknown outcomes can only be queried—not resubmitted.',
    'principles.ai.title': 'AI is authorized, not unleashed',
    'principles.ai.body': 'Research and strategy output cannot place orders directly. Trading intent must carry versions, expiry, evidence, and account constraints.',
    'architecture.title': 'Provider-neutral core.<br />Real-world adapters.',
    'architecture.lede': 'Market data, execution, risk, and AI collaborate through stable domain contracts. Integrations expand without changing the core meaning for one broker.',
    'architecture.link': 'Read the architecture',
    'architecture.caption': 'Every quote, news item, fundamental, and signal retains its original adapter provenance.',
    'modes.title': 'From human judgment<br />to deterministic automation.',
    'modes.lede': 'Every mode shares the same capability resolution, instrument identity, risk constraints, and execution kernel.',
    'modes.traders': 'See market data, positions, risk, and order context in one composable workspace.',
    'modes.quant': 'Bounded event delivery, deterministic Recorder / Replay, and one strategy definition contract.',
    'modes.ai': 'Let agents analyze markets with authorized tools while preserving review, budget, and risk boundaries.',
    'closing.title': 'Built for clarity.<br /><i>Engineered for certainty.</i>',
    'closing.lede': 'TrueFix Studio is converging toward its first release. Read the design, follow progress, and build from source on GitHub today.',
    'closing.github': 'Go to GitHub', 'footer.tagline': 'Open-source multi-provider trading workstation.', 'footer.status': 'Pre-release software',
    'alt.workstationDetail': 'TrueFix Studio dark trading workstation showing a BTC/USDT chart, market depth, positions, and order ticket',
    'alt.workstation': 'TrueFix Studio trading workstation', 'alt.intelligence': 'TrueFix Studio intelligence interface', 'alt.quant': 'TrueFix Studio AI and quant interface'
  },
  'zh-CN': {
    'meta.title': 'TrueFix Studio — 多 Provider 交易工作站',
    'meta.description': 'TrueFix Studio 是面向 Desktop、Web、Headless Quant 与受权 AI 工具的多 Provider 交易工作站。',
    'meta.ogDescription': '把行情、研究、策略、风控与执行放进一个可审计的工作站。',
    'a11y.skip': '跳到主要内容', 'a11y.home': 'TrueFix Studio 首页', 'a11y.menu': '打开导航',
    'a11y.nav': '主导航', 'a11y.capabilities': '核心能力', 'a11y.productInterfaces': '产品界面',
    'a11y.architecture': 'TrueFix Studio 架构图', 'language.choose': '选择语言', 'language.label': '语言',
    'nav.product': '产品', 'nav.principles': '原则', 'nav.architecture': '架构', 'nav.modes': '使用方式',
    'hero.eyebrow': '开源 · 首版发布前', 'hero.title': '每一个市场决策，<br /><i>都有证据可循。</i>',
    'hero.lede': 'TrueFix Studio 把行情、研究、策略、风控与执行放进同一个多 Provider 工作站。为交易员而清晰，为量化系统而确定，为 AI 而可授权。',
    'hero.source': '查看源代码', 'hero.explore': '探索工作站', 'hero.note': '首版发布前 · 当前请从源码构建',
    'cap.historical': '历史行情', 'cap.realtime': '实时行情', 'cap.trade': '交易执行',
    'cap.news': '新闻与事件', 'cap.instruments': '证券主数据', 'cap.analysis': '分析',
    'product.title': '一套工作站，<br />贯穿完整决策链。',
    'product.lede': '同一个 canonical contract 服务桌面端、Web、AI 与 Quant。数据从哪里来、为何可用、能否交易，都由运行时证据回答。',
    'product.tab.workstation': '交易工作站', 'product.tab.workstationSub': '行情 · 图表 · 执行',
    'product.tab.intelligence': '智能分析', 'product.tab.intelligenceSub': '证据 · 信号 · 回放',
    'product.tab.quantSub': '策略 · 授权 · 运行时',
    'product.caption.workstation': '跨市场上下文与 Provider 路由保持明确，不在界面层猜测能力。',
    'product.caption.intelligence': '把观察、来源、置信度与历史回放留在同一条证据链上。',
    'product.caption.quant': '策略结果先形成受约束的决策，再通过 Review 与 RiskGuard 进入执行。',
    'principles.title': '交易基础设施，<br />不该依靠猜测。',
    'principles.lede': 'TrueFix 的边界是刻意设计的：缺少映射、账户、权限或新鲜度时，系统拒绝继续，而不是悄悄选择一个看似可行的答案。',
    'principles.evidence.title': '能力由证据解析',
    'principles.evidence.body': 'ProviderDefinition、ClientInstance、市场、产品、环境与权限共同决定一项能力此刻是否成立。',
    'principles.execution.title': '执行路径绝不猜测',
    'principles.execution.body': '订单绑定精确标的、Provider、ClientInstance、账户与环境；未知结果只允许查询恢复，不重新下单。',
    'principles.ai.title': 'AI 被授权，而非放任',
    'principles.ai.body': '研究与策略输出不能直接提交订单。交易意图必须携带版本、期限、证据及账户约束。',
    'architecture.title': 'Provider-neutral<br />核心，真实世界适配。',
    'architecture.lede': '市场数据、执行、风控与 AI 通过稳定的领域契约协作。接入可以扩展，核心语义不随单一券商改变。',
    'architecture.link': '阅读架构说明',
    'architecture.caption': '每条行情、新闻、基本面与信号保留原始 adapter provenance。',
    'modes.title': '从手动判断，<br />到确定性自动化。',
    'modes.lede': '不同使用方式，共享相同的能力解析、标的身份、风险约束与执行内核。',
    'modes.traders': '在一个可组合工作区内查看行情、持仓、风险与订单上下文。',
    'modes.quant': '有界事件分发、确定性 Recorder / Replay，以及统一的策略定义契约。',
    'modes.ai': '让 Agent 使用受权工具分析市场，同时保留审阅、预算与风控边界。',
    'closing.title': '为清晰而建。<br /><i>为确定性而生。</i>',
    'closing.lede': 'TrueFix Studio 正在首版发布前持续收敛。现在可在 GitHub 阅读设计、跟踪进展并从源码构建。',
    'closing.github': '前往 GitHub', 'footer.tagline': '开源多 Provider 交易工作站。', 'footer.status': '首版发布前软件',
    'alt.workstationDetail': 'TrueFix Studio 深色交易工作站界面，展示 BTC/USDT K 线、行情深度、持仓与下单面板',
    'alt.workstation': 'TrueFix Studio 交易工作站', 'alt.intelligence': 'TrueFix Studio 智能分析界面', 'alt.quant': 'TrueFix Studio AI 与量化界面'
  },
  ko: {
    'meta.title': 'TrueFix Studio — 멀티 프로바이더 트레이딩 워크스테이션',
    'meta.description': 'TrueFix Studio는 Desktop, Web, Headless Quant 및 권한이 부여된 AI 도구를 위한 멀티 프로바이더 트레이딩 워크스테이션입니다.',
    'meta.ogDescription': '시장 데이터, 리서치, 전략, 리스크, 실행을 하나의 감사 가능한 워크스테이션에서.',
    'a11y.skip': '주요 콘텐츠로 건너뛰기', 'a11y.home': 'TrueFix Studio 홈', 'a11y.menu': '내비게이션 열기',
    'a11y.nav': '주요 내비게이션', 'a11y.capabilities': '핵심 기능', 'a11y.productInterfaces': '제품 인터페이스',
    'a11y.architecture': 'TrueFix Studio 아키텍처 다이어그램', 'language.choose': '언어 선택', 'language.label': '언어',
    'nav.product': '제품', 'nav.principles': '원칙', 'nav.architecture': '아키텍처', 'nav.modes': '사용 방식',
    'hero.eyebrow': '오픈 소스 · 출시 전', 'hero.title': '모든 시장 의사결정에,<br /><i>검증 가능한 근거를.</i>',
    'hero.lede': 'TrueFix Studio는 시장 데이터, 리서치, 전략, 리스크, 실행을 하나의 멀티 프로바이더 워크스테이션에 통합합니다. 트레이더에게는 명확하게, 퀀트 시스템에는 결정론적으로, AI에는 권한을 통제하여 제공합니다.',
    'hero.source': '소스 코드 보기', 'hero.explore': '워크스테이션 살펴보기', 'hero.note': '출시 전 · 현재는 소스에서 빌드하세요',
    'cap.historical': '과거 시장 데이터', 'cap.realtime': '실시간 시장 데이터', 'cap.trade': '거래',
    'cap.news': '뉴스 및 이벤트', 'cap.instruments': '종목 정보', 'cap.analysis': '분석',
    'product.title': '하나의 워크스테이션.<br />완전한 의사결정 체계.',
    'product.lede': '하나의 canonical contract가 Desktop, Web, AI, Quant를 지원합니다. 데이터 출처와 사용 가능성, 거래 가능 여부를 런타임 증거로 판단합니다.',
    'product.tab.workstation': '트레이딩 워크스테이션', 'product.tab.workstationSub': '시장 · 차트 · 실행',
    'product.tab.intelligence': '인텔리전스', 'product.tab.intelligenceSub': '증거 · 신호 · 리플레이',
    'product.tab.quantSub': '전략 · 권한 · 런타임',
    'product.caption.workstation': '시장 간 컨텍스트와 프로바이더 경로를 명확히 유지하며, 인터페이스가 기능을 추측하지 않습니다.',
    'product.caption.intelligence': '관찰, 출처, 신뢰도, 과거 리플레이를 하나의 증거 체계에 보존합니다.',
    'product.caption.quant': '전략 출력은 제약된 의사결정이 된 후 Review와 RiskGuard를 거쳐 실행됩니다.',
    'principles.title': '트레이딩 인프라는<br />추측해서는 안 됩니다.',
    'principles.lede': 'TrueFix의 경계는 의도적으로 설계됩니다. 매핑, 계정, 권한 또는 최신성이 없으면 그럴듯한 답을 택하는 대신 중단합니다.',
    'principles.evidence.title': '증거로 기능을 판정',
    'principles.evidence.body': 'ProviderDefinition, ClientInstance, 시장, 상품, 환경, 권한이 함께 현재 기능의 유효성을 결정합니다.',
    'principles.execution.title': '실행 경로는 추측하지 않음',
    'principles.execution.body': '주문은 정확한 종목, 프로바이더, ClientInstance, 계정, 환경에 연결됩니다. 결과를 알 수 없으면 조회만 하며 재주문하지 않습니다.',
    'principles.ai.title': 'AI는 통제된 권한으로 작동',
    'principles.ai.body': '리서치와 전략 출력은 직접 주문할 수 없습니다. 거래 의도에는 버전, 만료, 증거, 계정 제약이 포함되어야 합니다.',
    'architecture.title': 'Provider-neutral 코어.<br />현실 시장을 위한 어댑터.',
    'architecture.lede': '시장 데이터, 실행, 리스크, AI는 안정적인 도메인 계약으로 협력합니다. 특정 브로커에 맞춰 핵심 의미를 바꾸지 않고 연동을 확장합니다.',
    'architecture.link': '아키텍처 읽기',
    'architecture.caption': '모든 시세, 뉴스, 펀더멘털, 신호는 원본 어댑터 출처를 유지합니다.',
    'modes.title': '사람의 판단에서<br />결정론적 자동화까지.',
    'modes.lede': '모든 사용 방식은 동일한 기능 판정, 종목 식별, 리스크 제약, 실행 커널을 공유합니다.',
    'modes.traders': '하나의 구성 가능한 작업 공간에서 시장 데이터, 포지션, 리스크, 주문 컨텍스트를 확인합니다.',
    'modes.quant': '제한된 이벤트 전달, 결정론적 Recorder / Replay, 통합 전략 정의 계약을 제공합니다.',
    'modes.ai': '검토, 예산, 리스크 경계를 유지하면서 Agent가 권한이 부여된 도구로 시장을 분석합니다.',
    'closing.title': '명확성을 위해 설계하고.<br /><i>확실성을 위해 구현합니다.</i>',
    'closing.lede': 'TrueFix Studio는 첫 출시를 향해 계속 다듬어지고 있습니다. GitHub에서 설계를 읽고 진행 상황을 확인하며 소스에서 빌드할 수 있습니다.',
    'closing.github': 'GitHub로 이동', 'footer.tagline': '오픈 소스 멀티 프로바이더 트레이딩 워크스테이션.', 'footer.status': '출시 전 소프트웨어',
    'alt.workstationDetail': 'BTC/USDT 차트, 시장 깊이, 포지션, 주문 패널을 보여 주는 TrueFix Studio 다크 트레이딩 워크스테이션',
    'alt.workstation': 'TrueFix Studio 트레이딩 워크스테이션', 'alt.intelligence': 'TrueFix Studio 인텔리전스 인터페이스', 'alt.quant': 'TrueFix Studio AI 및 퀀트 인터페이스'
  },
  ja: {
    'meta.title': 'TrueFix Studio — マルチプロバイダー取引ワークステーション',
    'meta.description': 'TrueFix StudioはDesktop、Web、Headless Quant、認可されたAIツール向けのマルチプロバイダー取引ワークステーションです。',
    'meta.ogDescription': '市場データ、リサーチ、戦略、リスク、執行を一つの監査可能なワークステーションに。',
    'a11y.skip': 'メインコンテンツへ移動', 'a11y.home': 'TrueFix Studio ホーム', 'a11y.menu': 'ナビゲーションを開く',
    'a11y.nav': 'メインナビゲーション', 'a11y.capabilities': '主要機能', 'a11y.productInterfaces': '製品インターフェース',
    'a11y.architecture': 'TrueFix Studio アーキテクチャ図', 'language.choose': '言語を選択', 'language.label': '言語',
    'nav.product': '製品', 'nav.principles': '原則', 'nav.architecture': '構成', 'nav.modes': '利用方法',
    'hero.eyebrow': 'オープンソース · リリース前', 'hero.title': 'すべての市場判断に、<br /><i>確かな根拠を。</i>',
    'hero.lede': 'TrueFix Studioは、市場データ、リサーチ、戦略、リスク、執行を一つのマルチプロバイダー・ワークステーションに統合します。トレーダーには明快さを、クオンツには決定性を、AIには適切な権限を提供します。',
    'hero.source': 'ソースを見る', 'hero.explore': 'ワークステーションを見る', 'hero.note': 'リリース前 · 現在はソースからビルドしてください',
    'cap.historical': '過去市場データ', 'cap.realtime': 'リアルタイム市場データ', 'cap.trade': '取引',
    'cap.news': 'ニュースとイベント', 'cap.instruments': '銘柄情報', 'cap.analysis': '分析',
    'product.title': '一つのワークステーション。<br />意思決定の全工程を。',
    'product.lede': '一つのcanonical contractがDesktop、Web、AI、Quantを支えます。データの出所、利用できる理由、取引可能かどうかをランタイム証拠が示します。',
    'product.tab.workstation': '取引ワークステーション', 'product.tab.workstationSub': '市場 · チャート · 執行',
    'product.tab.intelligence': 'インテリジェンス', 'product.tab.intelligenceSub': '証拠 · シグナル · リプレイ',
    'product.tab.quantSub': '戦略 · 権限 · ランタイム',
    'product.caption.workstation': '市場横断のコンテキストとプロバイダー経路を明示し、画面側で機能を推測しません。',
    'product.caption.intelligence': '観測、出所、信頼度、履歴リプレイを同じ証拠チェーンに保持します。',
    'product.caption.quant': '戦略出力は制約付きの意思決定となり、ReviewとRiskGuardを通ってから執行されます。',
    'principles.title': '取引インフラに、<br />推測を持ち込まない。',
    'principles.lede': 'TrueFixの境界は意図的に設計されています。マッピング、口座、権限、鮮度が不足すれば、それらしい答えを選ばず停止します。',
    'principles.evidence.title': '証拠から機能を解決',
    'principles.evidence.body': 'ProviderDefinition、ClientInstance、市場、商品、環境、権限が、機能が今成立するかを共同で決定します。',
    'principles.execution.title': '執行経路は推測しない',
    'principles.execution.body': '注文は正確な銘柄、プロバイダー、ClientInstance、口座、環境に結び付きます。結果が不明な場合は照会のみ行い、再発注しません。',
    'principles.ai.title': 'AIは認可し、野放しにしない',
    'principles.ai.body': 'リサーチや戦略の出力から直接注文はできません。取引意図にはバージョン、期限、証拠、口座制約が必要です。',
    'architecture.title': 'Provider-neutralなコア。<br />現実市場へのアダプター。',
    'architecture.lede': '市場データ、執行、リスク、AIは安定したドメイン契約で連携します。特定のブローカーに合わせて中核の意味を変えずに接続を拡張できます。',
    'architecture.link': 'アーキテクチャを読む',
    'architecture.caption': 'すべての価格、ニュース、ファンダメンタル、シグナルは元のアダプター由来情報を保持します。',
    'modes.title': '人の判断から、<br />決定論的な自動化まで。',
    'modes.lede': 'すべての利用形態が、同じ機能解決、銘柄識別、リスク制約、執行カーネルを共有します。',
    'modes.traders': '一つの構成可能なワークスペースで市場データ、ポジション、リスク、注文コンテキストを確認できます。',
    'modes.quant': '制限付きイベント配信、決定論的Recorder / Replay、共通の戦略定義契約を提供します。',
    'modes.ai': 'レビュー、予算、リスク境界を保ちながら、Agentが認可済みツールで市場を分析できます。',
    'closing.title': '明快さのために設計し。<br /><i>確実性のために実装する。</i>',
    'closing.lede': 'TrueFix Studioは最初のリリースに向けて進化を続けています。GitHubで設計を読み、進捗を追い、ソースからビルドできます。',
    'closing.github': 'GitHubへ', 'footer.tagline': 'オープンソースのマルチプロバイダー取引ワークステーション。', 'footer.status': 'リリース前ソフトウェア',
    'alt.workstationDetail': 'BTC/USDTチャート、板情報、ポジション、注文パネルを表示するTrueFix Studioのダーク取引ワークステーション',
    'alt.workstation': 'TrueFix Studio 取引ワークステーション', 'alt.intelligence': 'TrueFix Studio インテリジェンス画面', 'alt.quant': 'TrueFix Studio AI・クオンツ画面'
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
  } catch {
    return null;
  }
}

function detectBrowserLanguage() {
  const locales = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const locale of locales) {
    const normalized = normalizeLanguage(locale);
    if (normalized) return normalized;
  }
  return 'en';
}

function translatePage(language, persist = false) {
  const locale = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
  const dictionary = translations[locale];

  document.documentElement.lang = locale;
  document.documentElement.dataset.language = locale;
  document.title = dictionary['meta.title'];

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.content = dictionary['meta.description'];
  if (ogTitle) ogTitle.content = dictionary['meta.title'];
  if (ogDescription) ogDescription.content = dictionary['meta.ogDescription'];

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value) element.setAttribute('alt', value);
  });

  const languageCode = document.querySelector('[data-language-code]');
  if (languageCode) languageCode.textContent = LANGUAGE_CODES[locale];
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-checked', String(button.dataset.language === locale));
  });

  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Preference remains session-local. */ }
  }
}

const initialLanguage = getSavedLanguage() || detectBrowserLanguage();
translatePage(initialLanguage);

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const languagePicker = document.querySelector('[data-language-picker]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageMenu = document.querySelector('[data-language-menu]');

const setMenu = (open) => {
  menuButton?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
};

const setLanguageMenu = (open) => {
  languageToggle?.setAttribute('aria-expanded', String(open));
  if (languageMenu) languageMenu.hidden = !open;
  languagePicker?.classList.toggle('open', open);
};

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
languageToggle?.addEventListener('click', () => setLanguageMenu(languageToggle.getAttribute('aria-expanded') !== 'true'));
languageToggle?.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'Enter', ' '].includes(event.key)) return;
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    setLanguageMenu(true);
    const selected = document.querySelector('[data-language][aria-checked="true"]');
    selected?.focus();
  }
});

const languageButtons = [...document.querySelectorAll('[data-language]')];
languageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.documentElement.classList.add('language-changing');
    translatePage(button.dataset.language, true);
    setLanguageMenu(false);
    languageToggle?.focus();
    window.setTimeout(() => document.documentElement.classList.remove('language-changing'), 260);
  });
  button.addEventListener('keydown', (event) => {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + languageButtons.length) % languageButtons.length;
    if (event.key === 'ArrowDown') nextIndex = (index + 1) % languageButtons.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = languageButtons.length - 1;
    languageButtons[nextIndex].focus();
  });
});

document.addEventListener('click', (event) => {
  if (!languagePicker?.contains(event.target)) setLanguageMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setLanguageMenu(false);
    setMenu(false);
  }
});

window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

const tabs = [...document.querySelectorAll('[data-shot]')];
const panels = [...document.querySelectorAll('[data-panel]')];
function activateTab(tab) {
  const name = tab.dataset.shot;
  tabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
  panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== name; });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    activateTab(next);
    next.focus();
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });

const heroVisual = document.querySelector('.hero-visual');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (heroVisual && !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
  heroVisual.addEventListener('pointermove', (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroVisual.style.setProperty('--tilt-x', `${(-y * 1.4).toFixed(2)}deg`);
    heroVisual.style.setProperty('--tilt-y', `${(x * 1.8).toFixed(2)}deg`);
  });
  heroVisual.addEventListener('pointerleave', () => {
    heroVisual.style.setProperty('--tilt-x', '0deg');
    heroVisual.style.setProperty('--tilt-y', '0deg');
  });
}
