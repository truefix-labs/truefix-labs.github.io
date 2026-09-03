const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];

const translations = {
  en: {
    'meta.title': 'TrueFix Studio — Multi-provider trading workstation',
    'meta.description': 'TrueFix Studio is a multi-provider trading workstation for Desktop, Web, Headless Quant, and authorized AI tools.',
    'meta.ogDescription': 'Market data, research, strategy, risk, and execution in one auditable workstation.',
    'a11y.skip': 'Skip to main content', 'a11y.home': 'TrueFix Studio home', 'a11y.menu': 'Open navigation',
    'a11y.nav': 'Primary navigation', 'a11y.capabilities': 'Core capabilities', 'a11y.productInterfaces': 'Product interfaces',
    'a11y.architecture': 'TrueFix Studio architecture diagram', 'a11y.film': 'TrueFix Studio product film', 'a11y.providers': 'Available provider adapters', 'language.label': 'Language',
    'nav.product': 'Product', 'nav.principles': 'Principles', 'nav.architecture': 'Architecture', 'nav.modes': 'Use cases', 'nav.about': 'About', 'nav.guide': 'User guide',
    'hero.eyebrow': 'Private beta · Pre-release', 'hero.title': 'Every market decision,<br /><i>backed by evidence.</i>',
    'hero.lede': 'TrueFix Studio brings market data, research, strategy, risk, and execution into one multi-provider workstation—clear for traders, deterministic for quant systems, and permissioned for AI.',
    'hero.source': 'Read the user guide', 'hero.explore': 'See who it is for', 'hero.note': 'Pre-release · Access is currently private',
    'overview.eyebrow': '01 / PRODUCT OVERVIEW', 'overview.title': 'Understand the market.<br />Test the decision. Control the action.',
    'overview.lede': 'TrueFix Studio is a multi-provider trading workspace that keeps research, evidence, strategy, risk review, and execution in one traceable flow.',
    'overview.what.label': 'WHAT IT IS', 'overview.what.title': 'One evidence-backed decision chain',
    'overview.what.body': 'Instead of separating charts, research, strategies, accounts, and orders across unrelated tools, TrueFix keeps their identity, source, and state connected.',
    'overview.who.label': 'WHO IT IS FOR', 'overview.who.title': 'Traders, quant builders, and research or risk teams',
    'overview.who.body': 'Current access is limited to invited private-beta testers. Every usable capability still depends on the selected provider, account, environment, and entitlement.',
    'overview.work.label': 'WHAT THEY DO', 'overview.work.title': 'Observe → verify → test → review → execute',
    'overview.work.body': 'A user can inspect a signal and its sources, replay a strategy, choose an authorized account, review fees and risk, then submit and reconcile the result.',
    'overview.personas.eyebrow': 'ILLUSTRATIVE BETA PERSONAS', 'overview.personas.title': 'Three ways invited testers could use TrueFix.',
    'overview.personas.disclosure': 'These are composite fictional scenarios created to explain the product. They are not real customers, employees, usage claims, or testimonials.',
    'overview.personas.badge': 'FICTIONAL PERSONA',
    'overview.maya.role': 'Independent multi-market trader · Singapore',
    'overview.maya.task': 'Compares crypto and U.S. equity context across provider accounts, opens the source behind a signal, and reviews risk and routing before acting.',
    'overview.ren.role': 'Quant developer · Tokyo',
    'overview.ren.task': 'Replays one strategy against fixed data and revisions, runs the same definition headlessly, and reconciles every execution outcome.',
    'overview.jiwoo.role': 'Research and risk lead · Seoul',
    'overview.jiwoo.task': 'Uses authorized AI to organize evidence and propose a decision, while human review and RiskGuard remain mandatory before any account action.',
    'cap.historical': 'Historical Market Data', 'cap.realtime': 'Realtime Market Data', 'cap.trade': 'Trade',
    'cap.news': 'News & Events', 'cap.instruments': 'Instruments', 'cap.analysis': 'Analysis',
    'provider.eyebrow': 'PROVIDER NETWORK', 'provider.title': 'Connected by adapters.<br />Verified at runtime.',
    'provider.note': 'Selected adapters from the current integration set are shown below. Exact market data, account, and trading capabilities still resolve by market, product, environment, entitlement, and live evidence.',
    'provider.caveat': 'Adapter present ≠ every capability certified. TrueFix resolves the usable scope at runtime.',
    'product.title': 'One workstation.<br />The full decision chain.',
    'product.lede': 'One canonical contract serves Desktop, Web, AI, and Quant. Runtime evidence answers where data came from, why it is available, and whether it can trade.',
    'product.tab.workstation': 'Trading workstation', 'product.tab.workstationSub': 'Market · Chart · Execution',
    'product.tab.intelligence': 'Intelligence', 'product.tab.intelligenceSub': 'Evidence · Signal · Replay',
    'product.tab.quantSub': 'Strategy · Authority · Runtime',
    'product.caption.workstation': 'Cross-market context and provider routes stay explicit; the interface never guesses capabilities.',
    'product.caption.intelligence': 'Keep observations, sources, confidence, and historical replay on the same evidence chain.',
    'product.caption.quant': 'Strategy output becomes a constrained decision before Review and RiskGuard allow execution.',
    'product.fullSize': 'Open full resolution',
    'film.title': 'See the decision chain.<br />Keep every boundary visible.',
    'film.lede': 'A narrated tour of the workstation, intelligence evidence, authorized AI + Quant runtime, and the clearly labeled future Market Twin concept.',
    'film.caption': 'Product preview · Narration and original ambient score · Includes a clearly labeled future concept', 'film.fallback': 'Your browser cannot play this video.',
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
    'architecture.link': 'Read the architecture guide',
    'architecture.caption': 'Every quote, news item, fundamental, and signal retains its original adapter provenance.',
    'modes.title': 'From human judgment<br />to deterministic automation.',
    'modes.lede': 'Every mode shares the same capability resolution, instrument identity, risk constraints, and execution kernel.',
    'modes.traders': 'See market data, positions, risk, and order context in one composable workspace.',
    'modes.quant': 'Bounded event delivery, deterministic Recorder / Replay, and one strategy definition contract.',
    'modes.ai': 'Let agents analyze markets with authorized tools while preserving review, budget, and risk boundaries.',
    'about.title': 'Different disciplines.<br />One accountable system.',
    'about.lede': 'TrueFix Studio is represented by a distributed team spanning market structure, systems engineering, human factors, and AI safety.',
    'about.intro': 'Six complementary perspectives shape a workstation where provenance stays visible, automation stays bounded, and uncertainty is treated as a first-class state.',
    'about.amara.role': 'Systems Architecture', 'about.amara.bio': 'A Lagos-born, London-based systems architect who models provider boundaries, fault isolation, and deterministic recovery.',
    'about.chen.role': 'Data Integrity', 'about.chen.bio': 'A Hangzhou-born, Singapore-based engineer who keeps market identifiers, revisions, and cross-provider data lineage exact.',
    'about.park.role': 'Runtime Reliability', 'about.park.bio': 'A Seoul-and-Toronto reliability engineer focused on bounded event delivery, observability, and safe recovery under pressure.',
    'about.elias.role': 'Market Infrastructure', 'about.elias.bio': 'A Madrid-and-Chicago market structure specialist focused on instrument identity, routing evidence, and execution reconciliation.',
    'about.sora.role': 'Human Factors & Risk', 'about.sora.bio': 'A Tokyo-and-Vancouver product thinker designing interfaces that make uncertainty, permission, and risk visible before action.',
    'about.leila.role': 'AI & Quant Safety', 'about.leila.bio': 'A Montréal-and-Dubai research engineer shaping authorized agent tools, reproducible strategy runtime, and audit-ready decisions.',
    'about.disclosure': 'The people and biographies shown here are fictional AI agents created for the TrueFix Studio story; they are not real employees.',
    'closing.title': 'Built for clarity.<br /><i>Engineered for certainty.</i>',
    'closing.lede': 'TrueFix Studio is converging toward its first release. The public guide explains the current workflow, safety boundaries, and capability-dependent behavior.',
    'closing.github': 'Open the user guide', 'footer.tagline': 'Multi-provider trading workstation.', 'footer.status': 'Pre-release software',
    'alt.workstationDetail': 'TrueFix Studio dark trading workstation showing a BTC/USDT chart, market depth, positions, and order ticket',
    'alt.workstation': 'TrueFix Studio trading workstation', 'alt.intelligence': 'TrueFix Studio intelligence interface', 'alt.quant': 'TrueFix Studio AI and quant interface',
    'alt.amara': 'Portrait of Amara Okafor', 'alt.chen': 'Portrait of Chen Wei', 'alt.park': 'Portrait of Park Min-seo', 'alt.elias': 'Portrait of Elias Navarro', 'alt.sora': 'Portrait of Sora Kimura', 'alt.leila': 'Portrait of Leila Haddad'
  },
  'zh-CN': {
    'meta.title': 'TrueFix Studio — 多 Provider 交易工作站',
    'meta.description': 'TrueFix Studio 是面向 Desktop、Web、Headless Quant 与受权 AI 工具的多 Provider 交易工作站。',
    'meta.ogDescription': '把行情、研究、策略、风控与执行放进一个可审计的工作站。',
    'a11y.skip': '跳到主要内容', 'a11y.home': 'TrueFix Studio 首页', 'a11y.menu': '打开导航',
    'a11y.nav': '主导航', 'a11y.capabilities': '核心能力', 'a11y.productInterfaces': '产品界面',
    'a11y.architecture': 'TrueFix Studio 架构图', 'a11y.film': 'TrueFix Studio 产品宣传片', 'a11y.providers': '可用 Provider 适配器', 'language.label': '语言',
    'nav.product': '产品', 'nav.principles': '原则', 'nav.architecture': '架构', 'nav.modes': '使用方式', 'nav.about': '关于我们', 'nav.guide': '使用指南',
    'hero.eyebrow': '私测 · 首版发布前', 'hero.title': '每一个市场决策，<br /><i>都有证据可循。</i>',
    'hero.lede': 'TrueFix Studio 把行情、研究、策略、风控与执行放进同一个多 Provider 工作站。为交易员而清晰，为量化系统而确定，为 AI 而可授权。',
    'hero.source': '阅读使用指南', 'hero.explore': '了解适用人群', 'hero.note': '首版发布前 · 当前仅限受邀访问',
    'overview.eyebrow': '01 / 产品概览', 'overview.title': '看懂市场。<br />验证决策，控制行动。',
    'overview.lede': 'TrueFix Studio 是一个多 Provider 交易工作空间，把研究、证据、策略、风险审查与执行留在同一条可追踪流程中。',
    'overview.what.label': '它是什么', 'overview.what.title': '一条有证据支撑的完整决策链',
    'overview.what.body': '图表、研究、策略、账户和订单不再散落在彼此无关的工具中；TrueFix 让它们的身份、来源与状态始终保持连接。',
    'overview.who.label': '谁适合使用', 'overview.who.title': '主动交易者、量化开发者，以及研究与风控团队',
    'overview.who.body': '目前仅向受邀私测用户开放。每项实际可用能力仍取决于所选 Provider、账户、环境与权限。',
    'overview.work.label': '他们用它做什么', 'overview.work.title': '观察 → 核验 → 测试 → 审查 → 执行',
    'overview.work.body': '用户可以检查信号及其来源、回放策略、选择已授权账户、审查费用与风险，然后提交订单并核对执行结果。',
    'overview.personas.eyebrow': '私测使用情景示例', 'overview.personas.title': '三种受邀测试者可能使用 TrueFix 的方式。',
    'overview.personas.disclosure': '以下均为解释产品而创作的复合虚构情景，不是真实客户、员工、使用数据或客户评价。',
    'overview.personas.badge': '虚构示例人物',
    'overview.maya.role': '独立多市场交易者 · 新加坡',
    'overview.maya.task': '跨 Provider 账户比较加密资产与美股信息，打开信号背后的原始来源，并在行动前检查风险和路由。',
    'overview.ren.role': '量化开发者 · 东京',
    'overview.ren.task': '使用固定数据与 revision 回放同一策略，以相同定义进行 headless 运行，并核对每一次执行结果。',
    'overview.jiwoo.role': '研究与风控负责人 · 首尔',
    'overview.jiwoo.task': '使用受权 AI 整理证据并提出决策，但任何账户操作前仍必须经过人工审查与 RiskGuard。',
    'cap.historical': '历史行情', 'cap.realtime': '实时行情', 'cap.trade': '交易执行',
    'cap.news': '新闻与事件', 'cap.instruments': '证券主数据', 'cap.analysis': '分析',
    'provider.eyebrow': 'PROVIDER 网络', 'provider.title': '由适配器连接。<br />由运行时验证。',
    'provider.note': '下方展示当前集成中的部分适配器。具体行情、账户和交易能力仍按市场、产品、环境、权限与实时证据解析。',
    'provider.caveat': '存在适配器 ≠ 所有能力均已认证。TrueFix 会在运行时解析当前可用范围。',
    'product.title': '一套工作站，<br />贯穿完整决策链。',
    'product.lede': '同一个 canonical contract 服务桌面端、Web、AI 与 Quant。数据从哪里来、为何可用、能否交易，都由运行时证据回答。',
    'product.tab.workstation': '交易工作站', 'product.tab.workstationSub': '行情 · 图表 · 执行',
    'product.tab.intelligence': '智能分析', 'product.tab.intelligenceSub': '证据 · 信号 · 回放',
    'product.tab.quantSub': '策略 · 授权 · 运行时',
    'product.caption.workstation': '跨市场上下文与 Provider 路由保持明确，不在界面层猜测能力。',
    'product.caption.intelligence': '把观察、来源、置信度与历史回放留在同一条证据链上。',
    'product.caption.quant': '策略结果先形成受约束的决策，再通过 Review 与 RiskGuard 进入执行。',
    'product.fullSize': '打开原尺寸图片',
    'film.title': '看见完整决策链。<br />让每一道边界都清晰可见。',
    'film.lede': '通过带旁白的短片了解交易工作站、Intelligence 证据、受权 AI + Quant 运行时，以及明确标注的未来“市场孪生”概念。',
    'film.caption': '产品预览 · 旁白与原创氛围配乐 · 包含明确标注的未来概念', 'film.fallback': '当前浏览器无法播放此视频。',
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
    'architecture.link': '阅读架构指南',
    'architecture.caption': '每条行情、新闻、基本面与信号保留原始 adapter provenance。',
    'modes.title': '从手动判断，<br />到确定性自动化。',
    'modes.lede': '不同使用方式，共享相同的能力解析、标的身份、风险约束与执行内核。',
    'modes.traders': '在一个可组合工作区内查看行情、持仓、风险与订单上下文。',
    'modes.quant': '有界事件分发、确定性 Recorder / Replay，以及统一的策略定义契约。',
    'modes.ai': '让 Agent 使用受权工具分析市场，同时保留审阅、预算与风控边界。',
    'about.title': '不同专业视角，<br />同一个可追责系统。',
    'about.lede': 'TrueFix Studio 由一支分布式团队形象代表，涵盖市场结构、系统工程、人因设计与 AI 安全。',
    'about.intro': '六种互补视角共同塑造工作站：来源始终可见，自动化始终有界，不确定性被作为一等状态对待。',
    'about.amara.role': '系统架构', 'about.amara.bio': '出生于拉各斯、工作于伦敦的系统架构师，聚焦 Provider 边界、故障隔离与确定性恢复。',
    'about.chen.role': '数据完整性', 'about.chen.bio': '出生于杭州、工作于新加坡的工程师，确保市场标识、revision 与跨 Provider 数据血缘精确一致。',
    'about.park.role': '运行时可靠性', 'about.park.bio': '横跨首尔与多伦多的可靠性工程师，专注有界事件分发、可观测性与高压场景下的安全恢复。',
    'about.elias.role': '市场基础设施', 'about.elias.bio': '横跨马德里与芝加哥的市场结构专家，专注标的身份、路由证据与执行对账。',
    'about.sora.role': '人因与风险', 'about.sora.bio': '横跨东京与温哥华的产品思考者，设计在行动前让不确定性、权限和风险清晰可见的界面。',
    'about.leila.role': 'AI 与量化安全', 'about.leila.bio': '横跨蒙特利尔与迪拜的研究工程师，设计受权 Agent 工具、可复现策略运行时与可审计决策。',
    'about.disclosure': '本页展示的人物与经历均为 TrueFix Studio 故事创作的虚构 AI Agent，并非真实员工。',
    'closing.title': '为清晰而建。<br /><i>为确定性而生。</i>',
    'closing.lede': 'TrueFix Studio 正在首版发布前持续收敛。公开指南介绍当前工作流、安全边界与由运行时能力决定的行为。',
    'closing.github': '打开使用指南', 'footer.tagline': '多 Provider 交易工作站。', 'footer.status': '首版发布前软件',
    'alt.workstationDetail': 'TrueFix Studio 深色交易工作站界面，展示 BTC/USDT K 线、行情深度、持仓与下单面板',
    'alt.workstation': 'TrueFix Studio 交易工作站', 'alt.intelligence': 'TrueFix Studio 智能分析界面', 'alt.quant': 'TrueFix Studio AI 与量化界面',
    'alt.amara': 'Amara Okafor 的人物肖像', 'alt.chen': '陈玮的人物肖像', 'alt.park': 'Park Min-seo 的人物肖像', 'alt.elias': 'Elias Navarro 的人物肖像', 'alt.sora': 'Sora Kimura 的人物肖像', 'alt.leila': 'Leila Haddad 的人物肖像'
  },
  ko: {
    'meta.title': 'TrueFix Studio — 멀티 프로바이더 트레이딩 워크스테이션',
    'meta.description': 'TrueFix Studio는 Desktop, Web, Headless Quant 및 권한이 부여된 AI 도구를 위한 멀티 프로바이더 트레이딩 워크스테이션입니다.',
    'meta.ogDescription': '시장 데이터, 리서치, 전략, 리스크, 실행을 하나의 감사 가능한 워크스테이션에서.',
    'a11y.skip': '주요 콘텐츠로 건너뛰기', 'a11y.home': 'TrueFix Studio 홈', 'a11y.menu': '내비게이션 열기',
    'a11y.nav': '주요 내비게이션', 'a11y.capabilities': '핵심 기능', 'a11y.productInterfaces': '제품 인터페이스',
    'a11y.architecture': 'TrueFix Studio 아키텍처 다이어그램', 'a11y.film': 'TrueFix Studio 제품 필름', 'a11y.providers': '사용 가능한 Provider 어댑터', 'language.label': '언어',
    'nav.product': '제품', 'nav.principles': '원칙', 'nav.architecture': '아키텍처', 'nav.modes': '사용 방식', 'nav.about': '소개', 'nav.guide': '사용 가이드',
    'hero.eyebrow': '프라이빗 베타 · 출시 전', 'hero.title': '모든 시장 의사결정에,<br /><i>검증 가능한 근거를.</i>',
    'hero.lede': 'TrueFix Studio는 시장 데이터, 리서치, 전략, 리스크, 실행을 하나의 멀티 프로바이더 워크스테이션에 통합합니다. 트레이더에게는 명확하게, 퀀트 시스템에는 결정론적으로, AI에는 권한을 통제하여 제공합니다.',
    'hero.source': '사용 가이드 읽기', 'hero.explore': '누구를 위한 제품인지 보기', 'hero.note': '출시 전 · 현재 접근은 비공개입니다',
    'overview.eyebrow': '01 / 제품 개요', 'overview.title': '시장을 이해하고.<br />결정을 검증하며, 행동을 통제합니다.',
    'overview.lede': 'TrueFix Studio는 리서치, 증거, 전략, 리스크 검토, 실행을 하나의 추적 가능한 흐름으로 연결하는 멀티 프로바이더 트레이딩 워크스페이스입니다.',
    'overview.what.label': '무엇인가요', 'overview.what.title': '증거로 뒷받침되는 하나의 의사결정 체계',
    'overview.what.body': '차트, 리서치, 전략, 계정, 주문을 서로 단절된 도구에 나누지 않고 각각의 식별 정보, 출처, 상태를 계속 연결합니다.',
    'overview.who.label': '누가 사용하나요', 'overview.who.title': '트레이더, 퀀트 개발자, 리서치 및 리스크 팀',
    'overview.who.body': '현재는 초대받은 프라이빗 베타 테스터만 이용할 수 있습니다. 실제 기능은 선택한 Provider, 계정, 환경, 권한에 따라 달라집니다.',
    'overview.work.label': '무엇을 하나요', 'overview.work.title': '관찰 → 검증 → 테스트 → 검토 → 실행',
    'overview.work.body': '신호와 출처를 확인하고, 전략을 리플레이하고, 권한이 있는 계정을 선택하고, 비용과 리스크를 검토한 뒤 주문과 결과를 대조할 수 있습니다.',
    'overview.personas.eyebrow': '베타 사용 시나리오 예시', 'overview.personas.title': '초대 테스터가 TrueFix를 사용할 수 있는 세 가지 방식.',
    'overview.personas.disclosure': '제품 설명을 위해 만든 복합 가상 시나리오입니다. 실제 고객, 직원, 사용 실적 또는 추천사가 아닙니다.',
    'overview.personas.badge': '가상 예시 인물',
    'overview.maya.role': '독립 멀티마켓 트레이더 · 싱가포르',
    'overview.maya.task': 'Provider 계정 전반에서 암호화폐와 미국 주식 정보를 비교하고, 신호의 원본 출처를 연 뒤 행동 전에 리스크와 경로를 검토합니다.',
    'overview.ren.role': '퀀트 개발자 · 도쿄',
    'overview.ren.task': '고정 데이터와 revision으로 동일 전략을 리플레이하고 같은 정의를 headless로 실행하며 모든 체결 결과를 대조합니다.',
    'overview.jiwoo.role': '리서치 및 리스크 책임자 · 서울',
    'overview.jiwoo.task': '권한이 부여된 AI로 증거를 정리하고 결정을 제안하지만, 계정 작업 전에는 사람의 검토와 RiskGuard를 반드시 거칩니다.',
    'cap.historical': '과거 시장 데이터', 'cap.realtime': '실시간 시장 데이터', 'cap.trade': '거래',
    'cap.news': '뉴스 및 이벤트', 'cap.instruments': '종목 정보', 'cap.analysis': '분석',
    'provider.eyebrow': 'PROVIDER 네트워크', 'provider.title': '어댑터로 연결하고.<br />런타임에서 검증합니다.',
    'provider.note': '현재 통합 세트의 대표 어댑터를 아래에 표시합니다. 정확한 시장 데이터, 계정, 거래 기능은 시장, 상품, 환경, 권한, 실시간 증거에 따라 해석됩니다.',
    'provider.caveat': '어댑터 존재 ≠ 모든 기능 인증. TrueFix는 런타임에서 실제 사용 범위를 해석합니다.',
    'product.title': '하나의 워크스테이션.<br />완전한 의사결정 체계.',
    'product.lede': '하나의 canonical contract가 Desktop, Web, AI, Quant를 지원합니다. 데이터 출처와 사용 가능성, 거래 가능 여부를 런타임 증거로 판단합니다.',
    'product.tab.workstation': '트레이딩 워크스테이션', 'product.tab.workstationSub': '시장 · 차트 · 실행',
    'product.tab.intelligence': '인텔리전스', 'product.tab.intelligenceSub': '증거 · 신호 · 리플레이',
    'product.tab.quantSub': '전략 · 권한 · 런타임',
    'product.caption.workstation': '시장 간 컨텍스트와 프로바이더 경로를 명확히 유지하며, 인터페이스가 기능을 추측하지 않습니다.',
    'product.caption.intelligence': '관찰, 출처, 신뢰도, 과거 리플레이를 하나의 증거 체계에 보존합니다.',
    'product.caption.quant': '전략 출력은 제약된 의사결정이 된 후 Review와 RiskGuard를 거쳐 실행됩니다.',
    'product.fullSize': '원본 크기로 열기',
    'film.title': '의사결정 체계를 확인하고.<br />모든 경계를 명확하게 유지하세요.',
    'film.lede': '내레이션과 함께 워크스테이션, 인텔리전스 근거, 권한이 부여된 AI + Quant 런타임, 명확히 표시된 미래 Market Twin 개념을 소개합니다.',
    'film.caption': '제품 미리보기 · 내레이션과 오리지널 앰비언트 음악 · 명확히 표시된 미래 개념 포함', 'film.fallback': '브라우저에서 이 동영상을 재생할 수 없습니다.',
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
    'architecture.link': '아키텍처 가이드 읽기',
    'architecture.caption': '모든 시세, 뉴스, 펀더멘털, 신호는 원본 어댑터 출처를 유지합니다.',
    'modes.title': '사람의 판단에서<br />결정론적 자동화까지.',
    'modes.lede': '모든 사용 방식은 동일한 기능 판정, 종목 식별, 리스크 제약, 실행 커널을 공유합니다.',
    'modes.traders': '하나의 구성 가능한 작업 공간에서 시장 데이터, 포지션, 리스크, 주문 컨텍스트를 확인합니다.',
    'modes.quant': '제한된 이벤트 전달, 결정론적 Recorder / Replay, 통합 전략 정의 계약을 제공합니다.',
    'modes.ai': '검토, 예산, 리스크 경계를 유지하면서 Agent가 권한이 부여된 도구로 시장을 분석합니다.',
    'about.title': '서로 다른 전문 분야.<br />하나의 책임 있는 시스템.',
    'about.lede': 'TrueFix Studio는 시장 구조, 시스템 엔지니어링, 인간 요소, AI 안전을 아우르는 분산형 팀으로 표현됩니다.',
    'about.intro': '여섯 가지 상호 보완적 관점이 출처를 드러내고, 자동화의 범위를 제한하며, 불확실성을 일차적 상태로 다루는 워크스테이션을 만듭니다.',
    'about.amara.role': '시스템 아키텍처', 'about.amara.bio': '라고스 출신으로 런던에서 활동하며 Provider 경계, 고장 격리, 결정론적 복구를 설계하는 시스템 아키텍트입니다.',
    'about.chen.role': '데이터 무결성', 'about.chen.bio': '항저우 출신으로 싱가포르에서 활동하며 시장 식별자, revision, Provider 간 데이터 계보를 정확하게 유지합니다.',
    'about.park.role': '런타임 신뢰성', 'about.park.bio': '서울과 토론토를 기반으로 제한된 이벤트 전달, 관측 가능성, 압박 상황의 안전한 복구를 설계하는 신뢰성 엔지니어입니다.',
    'about.elias.role': '시장 인프라', 'about.elias.bio': '마드리드와 시카고를 중심으로 종목 식별, 라우팅 증거, 실행 대상 조정에 집중하는 시장 구조 전문가입니다.',
    'about.sora.role': '인간 요소 & 리스크', 'about.sora.bio': '도쿄와 밴쿠버를 중심으로 활동하며 행동 전에 불확실성, 권한, 리스크를 명확히 보여 주는 인터페이스를 설계합니다.',
    'about.leila.role': 'AI & Quant 안전', 'about.leila.bio': '몬트리올과 두바이를 중심으로 권한이 있는 Agent 도구, 재현 가능한 전략 런타임, 감사 가능한 의사결정을 연구합니다.',
    'about.disclosure': '여기에 표시된 인물과 이력은 TrueFix Studio 스토리를 위해 만든 가상 AI Agent이며, 실제 직원이 아닙니다.',
    'closing.title': '명확성을 위해 설계하고.<br /><i>확실성을 위해 구현합니다.</i>',
    'closing.lede': 'TrueFix Studio는 첫 출시를 향해 계속 다듬어지고 있습니다. 공개 가이드에서 현재 워크플로, 안전 경계, 런타임 기능에 따른 동작을 설명합니다.',
    'closing.github': '사용 가이드 열기', 'footer.tagline': '멀티 프로바이더 트레이딩 워크스테이션.', 'footer.status': '출시 전 소프트웨어',
    'alt.workstationDetail': 'BTC/USDT 차트, 시장 깊이, 포지션, 주문 패널을 보여 주는 TrueFix Studio 다크 트레이딩 워크스테이션',
    'alt.workstation': 'TrueFix Studio 트레이딩 워크스테이션', 'alt.intelligence': 'TrueFix Studio 인텔리전스 인터페이스', 'alt.quant': 'TrueFix Studio AI 및 퀀트 인터페이스',
    'alt.amara': 'Amara Okafor의 초상', 'alt.chen': 'Chen Wei의 초상', 'alt.park': 'Park Min-seo의 초상', 'alt.elias': 'Elias Navarro의 초상', 'alt.sora': 'Sora Kimura의 초상', 'alt.leila': 'Leila Haddad의 초상'
  },
  ja: {
    'meta.title': 'TrueFix Studio — マルチプロバイダー取引ワークステーション',
    'meta.description': 'TrueFix StudioはDesktop、Web、Headless Quant、認可されたAIツール向けのマルチプロバイダー取引ワークステーションです。',
    'meta.ogDescription': '市場データ、リサーチ、戦略、リスク、執行を一つの監査可能なワークステーションに。',
    'a11y.skip': 'メインコンテンツへ移動', 'a11y.home': 'TrueFix Studio ホーム', 'a11y.menu': 'ナビゲーションを開く',
    'a11y.nav': 'メインナビゲーション', 'a11y.capabilities': '主要機能', 'a11y.productInterfaces': '製品インターフェース',
    'a11y.architecture': 'TrueFix Studio アーキテクチャ図', 'a11y.film': 'TrueFix Studio プロダクトフィルム', 'a11y.providers': '利用可能なProviderアダプター', 'language.label': '言語',
    'nav.product': '製品', 'nav.principles': '原則', 'nav.architecture': '構成', 'nav.modes': '利用方法', 'nav.about': '私たちについて', 'nav.guide': '利用ガイド',
    'hero.eyebrow': 'プライベートベータ · リリース前', 'hero.title': 'すべての市場判断に、<br /><i>確かな根拠を。</i>',
    'hero.lede': 'TrueFix Studioは、市場データ、リサーチ、戦略、リスク、執行を一つのマルチプロバイダー・ワークステーションに統合します。トレーダーには明快さを、クオンツには決定性を、AIには適切な権限を提供します。',
    'hero.source': '利用ガイドを読む', 'hero.explore': '対象ユーザーを見る', 'hero.note': 'リリース前 · 現在アクセスは非公開です',
    'overview.eyebrow': '01 / 製品概要', 'overview.title': '市場を理解し。<br />判断を検証し、行動を制御する。',
    'overview.lede': 'TrueFix Studioは、リサーチ、証拠、戦略、リスクレビュー、執行を一つの追跡可能な流れに保つマルチプロバイダー取引ワークスペースです。',
    'overview.what.label': '何ができる製品か', 'overview.what.title': '証拠に裏付けられた一つの意思決定チェーン',
    'overview.what.body': 'チャート、リサーチ、戦略、口座、注文を別々のツールに分断せず、それぞれの識別情報、出所、状態をつなげて保ちます。',
    'overview.who.label': '誰が利用できるか', 'overview.who.title': 'トレーダー、クオンツ開発者、リサーチおよびリスクチーム',
    'overview.who.body': '現在は招待制のプライベートベータテスターのみ利用できます。実際の機能は選択したProvider、口座、環境、権限に依存します。',
    'overview.work.label': '何に使うか', 'overview.work.title': '観測 → 検証 → テスト → レビュー → 執行',
    'overview.work.body': 'シグナルと出所を確認し、戦略をリプレイし、認可済み口座を選び、費用とリスクをレビューしてから注文を送信し、結果を照合できます。',
    'overview.personas.eyebrow': 'ベータ利用シナリオ例', 'overview.personas.title': '招待テスターがTrueFixを利用する三つの例。',
    'overview.personas.disclosure': '製品説明のために作成した複合的な架空シナリオです。実在の顧客、従業員、利用実績、推薦コメントではありません。',
    'overview.personas.badge': '架空の人物例',
    'overview.maya.role': '独立系マルチマーケットトレーダー · シンガポール',
    'overview.maya.task': 'Provider口座をまたいで暗号資産と米国株の情報を比較し、シグナルの元情報を開き、行動前にリスクとルートを確認します。',
    'overview.ren.role': 'クオンツ開発者 · 東京',
    'overview.ren.task': '固定データとrevisionで同じ戦略をリプレイし、同じ定義をheadlessで実行して、すべての執行結果を照合します。',
    'overview.jiwoo.role': 'リサーチおよびリスク責任者 · ソウル',
    'overview.jiwoo.task': '認可済みAIで証拠を整理して判断を提案しますが、口座操作前には人によるレビューとRiskGuardを必須とします。',
    'cap.historical': '過去市場データ', 'cap.realtime': 'リアルタイム市場データ', 'cap.trade': '取引',
    'cap.news': 'ニュースとイベント', 'cap.instruments': '銘柄情報', 'cap.analysis': '分析',
    'provider.eyebrow': 'PROVIDER ネットワーク', 'provider.title': 'アダプターで接続。<br />ランタイムで検証。',
    'provider.note': '現在の統合セットから代表的なアダプターを表示します。実際の市場データ、口座、取引機能は市場、商品、環境、権限、ライブ証拠から解決されます。',
    'provider.caveat': 'アダプターの存在 ≠ 全機能の認証。TrueFixはランタイムで利用可能範囲を解決します。',
    'product.title': '一つのワークステーション。<br />意思決定の全工程を。',
    'product.lede': '一つのcanonical contractがDesktop、Web、AI、Quantを支えます。データの出所、利用できる理由、取引可能かどうかをランタイム証拠が示します。',
    'product.tab.workstation': '取引ワークステーション', 'product.tab.workstationSub': '市場 · チャート · 執行',
    'product.tab.intelligence': 'インテリジェンス', 'product.tab.intelligenceSub': '証拠 · シグナル · リプレイ',
    'product.tab.quantSub': '戦略 · 権限 · ランタイム',
    'product.caption.workstation': '市場横断のコンテキストとプロバイダー経路を明示し、画面側で機能を推測しません。',
    'product.caption.intelligence': '観測、出所、信頼度、履歴リプレイを同じ証拠チェーンに保持します。',
    'product.caption.quant': '戦略出力は制約付きの意思決定となり、ReviewとRiskGuardを通ってから執行されます。',
    'product.fullSize': '原寸画像を開く',
    'film.title': '意思決定の流れを見渡し。<br />すべての境界を明確に。',
    'film.lede': 'ナレーション付きでワークステーション、Intelligenceの根拠、認可済みAI + Quantランタイム、明示された未来のMarket Twin構想を紹介します。',
    'film.caption': '製品プレビュー · ナレーションとオリジナル環境音楽 · 明示された未来構想を含む', 'film.fallback': 'このブラウザーでは動画を再生できません。',
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
    'architecture.link': 'アーキテクチャガイドを読む',
    'architecture.caption': 'すべての価格、ニュース、ファンダメンタル、シグナルは元のアダプター由来情報を保持します。',
    'modes.title': '人の判断から、<br />決定論的な自動化まで。',
    'modes.lede': 'すべての利用形態が、同じ機能解決、銘柄識別、リスク制約、執行カーネルを共有します。',
    'modes.traders': '一つの構成可能なワークスペースで市場データ、ポジション、リスク、注文コンテキストを確認できます。',
    'modes.quant': '制限付きイベント配信、決定論的Recorder / Replay、共通の戦略定義契約を提供します。',
    'modes.ai': 'レビュー、予算、リスク境界を保ちながら、Agentが認可済みツールで市場を分析できます。',
    'about.title': '異なる専門性。<br />一つの説明可能なシステム。',
    'about.lede': 'TrueFix Studioは、市場構造、システム工学、ヒューマンファクター、AI安全性にまたがる分散チームによって表現されます。',
    'about.intro': '出所を見える状態に保ち、自動化に境界を設け、不確実性を第一級の状態として扱うワークステーションを、6つの相補的な視点が形作ります。',
    'about.amara.role': 'システムアーキテクチャ', 'about.amara.bio': 'ラゴス生まれ、ロンドン拠点のシステムアーキテクト。Provider境界、障害分離、決定論的復旧を設計します。',
    'about.chen.role': 'データ完全性', 'about.chen.bio': '杭州生まれ、シンガポール拠点のエンジニア。市場識別子、revision、Provider横断のデータリネージを正確に保ちます。',
    'about.park.role': 'ランタイム信頼性', 'about.park.bio': 'ソウルとトロントを拠点に、有界イベント配信、可観測性、高負荷時の安全な復旧に取り組む信頼性エンジニアです。',
    'about.elias.role': '市場インフラ', 'about.elias.bio': 'マドリードとシカゴを拠点に、銘柄識別、ルート証拠、執行照合に取り組む市場構造の専門家です。',
    'about.sora.role': 'ヒューマンファクター & リスク', 'about.sora.bio': '東京とバンクーバーを拠点に、行動前に不確実性、権限、リスクを明確にするインターフェースを設計します。',
    'about.leila.role': 'AI & Quant セーフティ', 'about.leila.bio': 'モントリオールとドバイを拠点に、認可済みAgentツール、再現可能な戦略ランタイム、監査可能な意思決定を研究します。',
    'about.disclosure': 'ここに掲載されている人物と経歴は、TrueFix Studioのストーリーのために作られた架空のAI Agentであり、実在の従業員ではありません。',
    'closing.title': '明快さのために設計し。<br /><i>確実性のために実装する。</i>',
    'closing.lede': 'TrueFix Studioは最初のリリースに向けて進化を続けています。公開ガイドで現在のワークフロー、安全境界、ランタイム機能に依存する動作を説明します。',
    'closing.github': '利用ガイドを開く', 'footer.tagline': 'マルチプロバイダー取引ワークステーション。', 'footer.status': 'リリース前ソフトウェア',
    'alt.workstationDetail': 'BTC/USDTチャート、板情報、ポジション、注文パネルを表示するTrueFix Studioのダーク取引ワークステーション',
    'alt.workstation': 'TrueFix Studio 取引ワークステーション', 'alt.intelligence': 'TrueFix Studio インテリジェンス画面', 'alt.quant': 'TrueFix Studio AI・クオンツ画面',
    'alt.amara': 'Amara Okaforのポートレート', 'alt.chen': 'Chen Weiのポートレート', 'alt.park': 'Park Min-seoのポートレート', 'alt.elias': 'Elias Navarroのポートレート', 'alt.sora': 'Sora Kimuraのポートレート', 'alt.leila': 'Leila Haddadのポートレート'
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
  document.documentElement.dataset.locale = locale;
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

  const languageSelect = document.querySelector('[data-language-select]');
  if (languageSelect) languageSelect.value = locale;

  const film = document.querySelector('[data-film]');
  Array.from(film?.textTracks || []).forEach((track) => {
    track.mode = normalizeLanguage(track.language) === locale ? 'showing' : 'disabled';
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

const setMenu = (open) => {
  menuButton?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
};

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

const languageSelect = document.querySelector('[data-language-select]');
languageSelect?.addEventListener('change', () => {
  document.documentElement.classList.add('language-changing');
  translatePage(languageSelect.value, true);
  window.setTimeout(() => document.documentElement.classList.remove('language-changing'), 260);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
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
