const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];
const LANGUAGE_NAMES = { 'zh-CN': '简体中文', ja: '日本語', ko: '한국어', en: 'English' };

const translations = {
  en: {
    'meta.title': 'TrueFix Studio — Smarter tools for the platforms you already use',
    'meta.description': 'TrueFix Studio adds local research, strategy testing, risk review, and controlled trading to the brokers, exchanges, and data services you already use.',
    'meta.ogDescription': 'Research markets, test strategies, review risk, and control each action from one local workspace—without moving your accounts or funds.',
    'a11y.skip': 'Skip to main content', 'a11y.home': 'TrueFix Studio home', 'a11y.menu': 'Open navigation',
    'a11y.nav': 'Primary navigation', 'a11y.capabilities': 'Core capabilities', 'a11y.productInterfaces': 'Product interfaces',
    'a11y.architecture': 'TrueFix Studio architecture diagram', 'a11y.film': 'TrueFix Studio product film', 'a11y.providers': 'Available provider adapters', 'language.label': 'Language',
    'nav.home': 'Home', 'nav.product': 'What it does', 'nav.principles': 'Safety', 'nav.architecture': 'Architecture', 'nav.modes': 'Use cases', 'nav.about': 'About us', 'nav.support': 'Support', 'nav.feedback': 'Feedback', 'nav.guide': 'User guide',
    'hero.eyebrow': 'Local-first market workspace · Pre-release', 'hero.title': 'Add smarter research and control<br /><i>to the platforms you already use.</i>',
    'hero.lede': 'TrueFix Studio works with your existing brokers, exchanges, and data services. Research a market, ask an Agent, test a strategy, check risk, and send an approved action through the Provider you chose—all from one local workspace.',
    'hero.download': 'See what it does', 'hero.source': 'Download Nightly', 'hero.explore': 'See who it is for', 'hero.note': 'Runs on your device · No custody · Start read-only or simulated',
    'hero.tag.local': 'LOCAL PROFILE<br />ON THIS DEVICE', 'hero.tag.review': 'HUMAN REVIEW<br />BEFORE ACTION',
    'value.eyebrow': 'WHAT TRUEFIX ADDS', 'value.title': 'Keep your platforms.<br /><i>Add the missing workflow.</i>',
    'value.lede': 'TrueFix does not replace your broker or hold your money. It adds one workspace for the research, testing, and review that normally happens across disconnected tools.',
    'value.research.title': 'Research across sources', 'value.research.body': 'Compare market data, news, account context, and the source behind a signal without losing track of which service supplied it.',
    'value.strategy.title': 'Use AI and Quant as tools', 'value.strategy.body': 'Ask an Agent to organize information or replay a strategy, while keeping its tools, budget, data, and permissions limited.',
    'value.execution.title': 'Review before you act', 'value.execution.body': 'Check the exact Provider, account, environment, instrument, fees, and risk before an approved instruction is sent.',
    'value.safety.title': 'Your accounts stay where they are.', 'value.safety.body': 'TrueFix does not accept deposits. Connections are configured by you, and every available action still depends on the permissions of the selected Provider.',
    'download.eyebrow': 'NIGHTLY RELEASE', 'download.title': 'Choose your platform.<br /><i>Start with the latest build.</i>',
    'download.lede': 'Public pre-release installers built from the current TrueFix Studio nightly channel. Choose the package that matches your operating system and architecture.',
    'download.prerelease': 'PRE-RELEASE', 'download.updated': 'Updated', 'download.recommended': 'Recommended for this device',
    'download.mac.arch': 'Apple Silicon · arm64', 'download.mac.note': 'DMG installer for Apple Silicon Macs. This nightly build is currently unsigned.', 'download.mac.action': 'Download DMG',
    'download.mac.xattrTitle': 'Unsigned macOS build', 'download.mac.xattr': 'If macOS blocks this unsigned build, move the app to Applications, then run:', 'download.mac.xattrCaution': 'Use this command only for the app downloaded from the official TrueFix Release.',
    'download.windows.arch': 'Windows · x64', 'download.windows.note': 'Standard setup executable for 64-bit Windows. MSI is also available for managed installation.', 'download.windows.action': 'Download setup EXE',
    'download.linux.arch': 'Linux · x86_64', 'download.linux.note': 'Portable AppImage for 64-bit Linux. A Debian package is available for apt-based systems.', 'download.linux.action': 'Download AppImage',
    'download.installGuide': 'Installation guide ↗', 'download.alternative': 'Alternative',
    'download.disclaimer': 'Nightly builds may change without notice. Verify the platform and review the guide before connecting any account.', 'download.allFiles': 'View release notes and all files',
    'overview.eyebrow': '01 / HOW IT WORKS', 'overview.title': 'From a market question<br />to a controlled action.',
    'overview.lede': 'Each step is optional. Use TrueFix for research only, test an idea in simulation, or continue to a reviewed action through an account you explicitly authorize.',
    'overview.what.label': 'WHAT IT IS', 'overview.what.title': 'A layer above your existing services',
    'overview.what.body': 'Connect selected data and broker services, then keep research, strategy, and account context together without moving your money to TrueFix.',
    'overview.who.label': 'WHO IT IS FOR', 'overview.who.title': 'People already using market tools',
    'overview.who.body': 'For active traders, quant builders, and research or risk teams who want a clearer workflow across services. It is not a beginner investment-advice app.',
    'overview.work.label': 'WHAT THEY DO', 'overview.work.title': 'Research → compare → test → review → act',
    'overview.work.body': 'Inspect a signal and its sources, replay an idea, choose an authorized account, review fees and risk, then decide whether to submit it.',
    'overview.personas.eyebrow': 'EXAMPLE USERS', 'overview.personas.title': 'Three ways people can use TrueFix.',
    'overview.personas.disclosure': 'These examples explain possible workflows rather than customer testimonials. Available features still depend on the connected Provider, account, environment, and permissions.',
    'overview.maya.role': 'Independent multi-market trader · Singapore',
    'overview.maya.task': 'Maya compares crypto and U.S. equity information from selected services, opens the source behind a signal, and reviews the account and risk before acting.',
    'overview.ren.role': 'Quant developer · Tokyo',
    'overview.ren.task': 'Ren replays a strategy with fixed data, checks its assumptions, and tests it in Simulator, Demo, Testnet, or Paper before considering Live.',
    'overview.jiwoo.role': 'Research and risk lead · Seoul',
    'overview.jiwoo.task': 'Ji-woo lets an Agent organize market information without trading permission, then reviews the exact account, fees, and risk before any action.',
    'cap.historical': 'Runs locally', 'cap.realtime': 'No funds custody', 'cap.trade': 'No TrueFix cloud account',
    'cap.news': 'Read-only and simulation first', 'cap.instruments': 'Your Provider stays in control', 'cap.analysis': 'Human-reviewed actions',
    'provider.eyebrow': 'SUPPORTED ADAPTERS', 'provider.title': 'Works with services<br /><i>you already use.</i>',
    'provider.note': 'Each adapter exposes only the capabilities supported by that service, market, account, environment, and current entitlement. You choose what to connect.',
    'provider.caveat': 'Logos identify supported adapter targets. They do not imply sponsorship or an official partnership, and not every capability is available for every account.',
    'product.title': 'See exactly<br />what you can do.',
    'product.lede': 'Three working views bring together market monitoring, source-backed research, strategy testing, and controlled account actions.',
    'product.tab.workstation': 'Trading workstation', 'product.tab.workstationSub': 'Market · Chart · Execution',
    'product.tab.intelligence': 'Intelligence', 'product.tab.intelligenceSub': 'Evidence · Signal · Replay',
    'product.tab.quantSub': 'Strategy · Authority · Runtime',
    'product.caption.workstation': 'Follow quotes, depth, positions, and order context in one screen while keeping the selected Provider visible.',
    'product.caption.intelligence': 'Open the source behind news and signals, compare observations, and revisit how an idea changed over time.',
    'product.caption.quant': 'Test strategy or Agent output before it can become an action on an account, with review and risk checks in between.',
    'product.fullSize': 'Open full resolution',
    'film.title': 'See the decision chain.<br />Keep every boundary visible.',
    'film.lede': 'A narrated tour of the workstation, intelligence evidence, authorized AI + Quant runtime, and the clearly labeled future Market Twin concept.',
    'film.caption': 'Product preview · Narration and original ambient score · Includes a clearly labeled future concept', 'film.fallback': 'Your browser cannot play this video.', 'film.watchPage': 'Watch film ↗',
    'principles.title': 'Control stays<br />with you.',
    'principles.lede': 'TrueFix does not accept deposits or create a TrueFix cloud account. You configure each connection and decide which permissions, environment, and account can be used.',
    'principles.evidence.title': 'Connections use explicit permissions',
    'principles.evidence.body': 'A data or trading feature is available only when the selected Provider, account, market, environment, and permission support it.',
    'principles.execution.title': 'Review before money moves',
    'principles.execution.body': 'Before submission, confirm the exact account, instrument, order, fees, and risk. An uncertain result is checked instead of automatically sent again.',
    'principles.ai.title': 'AI assists within limits',
    'principles.ai.body': 'An Agent can analyze with the tools you allow. Trading permission is separate, and an AI suggestion is not treated as an approved order.',
    'architecture.title': 'Runs locally.<br />Connects when you ask.',
    'architecture.lede': 'Your TrueFix profile starts on this device. The app connects outward only to the data, broker, exchange, or AI services you configure for the task.',
    'architecture.link': 'Read the architecture guide',
    'architecture.caption': 'TrueFix keeps the source Provider attached to market data, news, signals, and account actions.',
    'modes.title': 'Use only<br />what you need.',
    'modes.lede': 'Start with research and read-only data. Add simulation, headless strategy runs, or authorized execution only when your workflow needs them.',
    'modes.traders.label': 'FOR DAILY WORK', 'modes.traders.title': 'Desktop / Web', 'modes.traders': 'See market data, positions, risk, and order context in one workspace.',
    'modes.quant.label': 'FOR AUTOMATION', 'modes.quant.title': 'Headless Quant', 'modes.quant': 'Run and replay strategies without the desktop interface, using the same account and risk rules.',
    'modes.ai.label': 'FOR RESEARCH', 'modes.ai.title': 'AI-assisted research', 'modes.ai': 'Let an Agent organize and analyze market information with tools, limits, and permissions that you choose.',
    'about.title': 'About TrueFix Studio.<br />Why we are building it.',
    'about.lede': 'TrueFix Studio is an independent, pre-release software project for people who already use brokers, exchanges, market data, or systematic strategies.',
    'about.intro': 'The goal is practical: reduce tool switching, make the source of information visible, and keep automation inside limits the user can inspect.',
    'about.local.label': 'LOCAL-FIRST', 'about.local.title': 'Your profile starts on this device', 'about.local.body': 'TrueFix does not require a TrueFix cloud account. Connections to outside services are configured by you for the features you choose to use.',
    'about.custody.label': 'NO CUSTODY', 'about.custody.title': 'Your funds stay with your Provider', 'about.custody.body': 'TrueFix is software, not a broker, exchange, bank, or investment adviser. It does not accept deposits or promise returns.',
    'about.control.label': 'USER CONTROL', 'about.control.title': 'You choose how far the workflow goes', 'about.control.body': 'Use research only, stay read-only, test in simulation, or configure an authorized execution path. AI assistance does not remove your responsibility to review.',
    'about.people': 'Meet the people', 'about.guide': 'Read the user guide', 'about.privacy': 'Privacy policy', 'about.support': 'Technical support',
    'closing.title': 'See the workflow<br /><i>before connecting an account.</i>',
    'closing.lede': 'The guide explains installation, Provider setup, Agent permissions, simulation, execution review, and what to check before using real credentials.',
    'closing.github': 'Open the user guide', 'closing.feedback': 'Feedback & discussions', 'footer.about': 'About us', 'footer.privacy': 'Privacy', 'footer.support': 'Technical support', 'footer.feedback': 'Feedback & discussions', 'footer.tagline': 'Local research and controlled trading workspace.', 'footer.status': 'Pre-release software',
    'alt.workstationDetail': 'TrueFix Studio dark trading workstation showing a BTC/USDT chart, market depth, positions, and order ticket',
    'alt.workstation': 'TrueFix Studio trading workstation', 'alt.intelligence': 'TrueFix Studio intelligence interface', 'alt.quant': 'TrueFix Studio AI and quant interface'
  },
  'zh-CN': {
    'meta.title': 'TrueFix Studio — 为你已有的平台增加智能研究与交易控制',
    'meta.description': 'TrueFix Studio 为你正在使用的券商、交易所和数据服务增加本地研究、策略测试、风险审查与受控交易能力。',
    'meta.ogDescription': '不用转移账户和资金，在一个本地工作空间中研究市场、测试策略、检查风险并控制每一次行动。',
    'a11y.skip': '跳到主要内容', 'a11y.home': 'TrueFix Studio 首页', 'a11y.menu': '打开导航',
    'a11y.nav': '主导航', 'a11y.capabilities': '核心能力', 'a11y.productInterfaces': '产品界面',
    'a11y.architecture': 'TrueFix Studio 架构图', 'a11y.film': 'TrueFix Studio 产品宣传片', 'a11y.providers': '可用 Provider 适配器', 'language.label': '语言',
    'nav.home': '首页', 'nav.product': '功能', 'nav.principles': '安全', 'nav.architecture': '架构', 'nav.modes': '使用方式', 'nav.about': '关于我们', 'nav.support': '技术支持', 'nav.feedback': '反馈交流', 'nav.guide': '使用指南',
    'hero.eyebrow': '本地优先的市场工作空间 · 预发布', 'hero.title': '不更换你正在使用的平台，<br /><i>增加更聪明的研究与交易控制。</i>',
    'hero.lede': 'TrueFix Studio 与你已有的券商、交易所和数据服务配合使用。在一个本地工作空间里研究市场、询问 Agent、测试策略、检查风险，再通过你选择的 Provider 发送经过确认的操作。',
    'hero.download': '看看它能做什么', 'hero.source': '下载 Nightly 版', 'hero.explore': '了解适用人群', 'hero.note': '运行在你的设备上 · 不托管资金 · 可从只读或模拟开始',
    'hero.tag.local': '本地配置<br />保存在此设备', 'hero.tag.review': '每次行动前<br />由人确认',
    'value.eyebrow': 'TRUEFIX 增加了什么', 'value.title': '保留你已有的平台，<br /><i>补上缺失的工作流程。</i>',
    'value.lede': 'TrueFix 不替代你的券商，也不持有你的资金。它把原本散落在不同工具里的研究、测试和审查放进同一个工作空间。',
    'value.research.title': '跨来源研究', 'value.research.body': '比较行情、新闻和账户背景，查看信号背后的原始来源，同时知道每条信息由哪个服务提供。',
    'value.strategy.title': '把 AI 和量化当作工具', 'value.strategy.body': '让 Agent 整理信息或回放策略，同时限制它可用的工具、预算、数据与权限。',
    'value.execution.title': '行动前先确认', 'value.execution.body': '发送操作前，检查准确的 Provider、账户、环境、标的、费用和风险。',
    'value.safety.title': '你的账户留在原处', 'value.safety.body': 'TrueFix 不接受入金。连接由你配置，每项可用操作仍受所选 Provider 的权限控制。',
    'download.eyebrow': 'NIGHTLY RELEASE', 'download.title': '选择你的平台。<br /><i>从最新构建开始。</i>',
    'download.lede': '由 TrueFix Studio 当前 Nightly 渠道构建的公开预发布安装包。请选择与你的操作系统及处理器架构相符的版本。',
    'download.prerelease': '预发布版本', 'download.updated': '更新于', 'download.recommended': '推荐用于当前设备',
    'download.mac.arch': 'Apple Silicon · arm64', 'download.mac.note': '适用于 Apple Silicon Mac 的 DMG 安装包；当前 Nightly 版本尚未签名。', 'download.mac.action': '下载 DMG',
    'download.mac.xattrTitle': 'macOS 未签名版本', 'download.mac.xattr': '如果 macOS 拦截未签名版本，请先将应用移入“应用程序”，然后运行：', 'download.mac.xattrCaution': '仅对从 TrueFix 官方 Release 下载的应用执行此命令。',
    'download.windows.arch': 'Windows · x64', 'download.windows.note': '适用于 64 位 Windows 的标准安装程序；受管环境也可使用 MSI。', 'download.windows.action': '下载 EXE 安装程序',
    'download.linux.arch': 'Linux · x86_64', 'download.linux.note': '适用于 64 位 Linux 的便携 AppImage；基于 apt 的系统也可使用 Debian 包。', 'download.linux.action': '下载 AppImage',
    'download.installGuide': '安装指南 ↗', 'download.alternative': '其他格式',
    'download.disclaimer': 'Nightly 构建可能随时变化。连接任何账户前，请核对平台并阅读使用指南。', 'download.allFiles': '查看发布说明及全部文件',
    'overview.eyebrow': '01 / 怎么使用', 'overview.title': '从一个市场问题，<br />到一次受控操作。',
    'overview.lede': '每一步都可选。你可以只用 TrueFix 做研究，在模拟环境测试想法，也可以继续通过明确授权的账户执行经过审查的操作。',
    'overview.what.label': '它是什么', 'overview.what.title': '位于现有服务之上的一层工具',
    'overview.what.body': '连接你选择的数据和券商服务，把研究、策略与账户背景放在一起，同时无需把资金转入 TrueFix。',
    'overview.who.label': '谁适合使用', 'overview.who.title': '已经在使用市场工具的人',
    'overview.who.body': '适合希望理顺跨平台流程的主动交易者、量化开发者及研究或风控团队；它不是面向新手的投资荐股应用。',
    'overview.work.label': '可以做什么', 'overview.work.title': '研究 → 比较 → 测试 → 审查 → 行动',
    'overview.work.body': '检查信号和来源、回放想法、选择已授权账户、核对费用与风险，再决定是否提交。',
    'overview.personas.eyebrow': '使用示例', 'overview.personas.title': '三种使用 TrueFix 的方式。',
    'overview.personas.disclosure': '这些内容用于说明可能的工作流程，不是客户评价。实际可用功能仍取决于已连接的 Provider、账户、环境与权限。',
    'overview.maya.role': '独立多市场交易者 · 新加坡',
    'overview.maya.task': 'Maya 比较所选服务中的加密资产与美股信息，打开信号的原始来源，并在行动前检查账户和风险。',
    'overview.ren.role': '量化开发者 · 东京',
    'overview.ren.task': 'Ren 用固定数据回放策略、检查假设，并在考虑实盘前先使用 Simulator、Demo、Testnet 或 Paper 测试。',
    'overview.jiwoo.role': '研究与风控负责人 · 首尔',
    'overview.jiwoo.task': 'Ji-woo 让没有交易权限的 Agent 整理市场信息，再在任何行动前检查准确账户、费用与风险。',
    'cap.historical': '本地运行', 'cap.realtime': '不托管资金', 'cap.trade': '无需 TrueFix 云账户',
    'cap.news': '从只读和模拟开始', 'cap.instruments': 'Provider 保持控制', 'cap.analysis': '由人审查操作',
    'provider.eyebrow': '支持的适配器', 'provider.title': '配合你<br /><i>已经在用的服务。</i>',
    'provider.note': '每个适配器只提供该服务、市场、账户、环境和当前权限真正支持的能力。连接哪些服务由你决定。',
    'provider.caveat': '标识仅用于说明支持的适配目标，不代表赞助或官方合作；不同账户可用的能力可能不同。',
    'product.title': '清楚看看<br />它能做什么。',
    'product.lede': '三个工作界面把市场监控、有来源的研究、策略测试与受控账户操作放到一起。',
    'product.tab.workstation': '交易工作站', 'product.tab.workstationSub': '行情 · 图表 · 执行',
    'product.tab.intelligence': '智能分析', 'product.tab.intelligenceSub': '证据 · 信号 · 回放',
    'product.tab.quantSub': '策略 · 授权 · 运行时',
    'product.caption.workstation': '在一个界面查看报价、深度、持仓与订单信息，同时清楚看到当前选择的 Provider。',
    'product.caption.intelligence': '打开新闻与信号背后的来源，比较不同观察，并回看一个想法如何随时间变化。',
    'product.caption.quant': '先测试策略或 Agent 输出，再经过审查和风控，才可能成为账户操作。',
    'product.fullSize': '打开原尺寸图片',
    'film.title': '看见完整决策链。<br />让每一道边界都清晰可见。',
    'film.lede': '通过带旁白的短片了解交易工作站、Intelligence 证据、受权 AI + Quant 运行时，以及明确标注的未来“市场孪生”概念。',
    'film.caption': '产品预览 · 旁白与原创氛围配乐 · 包含明确标注的未来概念', 'film.fallback': '当前浏览器无法播放此视频。', 'film.watchPage': '观看宣传片 ↗',
    'principles.title': '控制权始终<br />留在你手里。',
    'principles.lede': 'TrueFix 不接受入金，也不创建 TrueFix 云账户。每个连接由你配置，并由你决定可使用的权限、环境和账户。',
    'principles.evidence.title': '连接使用明确权限',
    'principles.evidence.body': '只有所选 Provider、账户、市场、环境和权限都支持时，数据或交易功能才可用。',
    'principles.execution.title': '资金行动前先审查',
    'principles.execution.body': '提交前确认准确的账户、标的、订单、费用与风险。结果不确定时先查询，不会自动再次发送。',
    'principles.ai.title': 'AI 只在限定范围内协助',
    'principles.ai.body': 'Agent 可以使用你允许的工具分析；交易权限单独控制，AI 建议不会被当作已经批准的订单。',
    'architecture.title': '在本地运行，<br />按你的要求连接。',
    'architecture.lede': 'TrueFix 配置从当前设备开始。应用只在任务需要时连接你配置的数据、券商、交易所或 AI 服务。',
    'architecture.link': '阅读架构指南',
    'architecture.caption': 'TrueFix 会在行情、新闻、信号和账户操作上保留其来源 Provider。',
    'modes.title': '只使用<br />你需要的部分。',
    'modes.lede': '从研究与只读数据开始；只有流程需要时，再加入模拟、无界面策略运行或受权执行。',
    'modes.traders.label': '日常工作', 'modes.traders.title': '桌面端 / Web', 'modes.traders': '在一个工作空间查看行情、持仓、风险与订单信息。',
    'modes.quant.label': '自动化', 'modes.quant.title': 'Headless Quant', 'modes.quant': '不打开桌面界面也能运行和回放策略，并使用相同的账户与风控规则。',
    'modes.ai.label': '研究', 'modes.ai.title': 'AI 辅助研究', 'modes.ai': '让 Agent 使用你选择的工具、限制和权限整理并分析市场信息。',
    'about.title': '关于 TrueFix Studio。<br />我们为什么做它。',
    'about.lede': 'TrueFix Studio 是一个独立的预发布软件项目，面向已经在使用券商、交易所、市场数据或系统化策略的人。',
    'about.intro': '目标很实际：减少工具切换，让信息来源清楚可见，并让自动化始终处于用户可检查的范围内。',
    'about.local.label': '本地优先', 'about.local.title': '你的配置从本设备开始', 'about.local.body': 'TrueFix 不要求注册 TrueFix 云账户。外部服务连接由你根据所需功能自行配置。',
    'about.custody.label': '不托管资金', 'about.custody.title': '资金留在你的 Provider', 'about.custody.body': 'TrueFix 是软件，不是券商、交易所、银行或投资顾问；它不接受入金，也不承诺收益。',
    'about.control.label': '用户控制', 'about.control.title': '流程走多远由你决定', 'about.control.body': '可以只做研究、保持只读、在模拟环境测试，或配置受权执行。AI 辅助不会代替你的审查责任。',
    'about.people': '了解项目人物', 'about.guide': '阅读使用指南', 'about.privacy': '隐私政策', 'about.support': '技术支持',
    'closing.title': '连接账户前，<br /><i>先看清整个流程。</i>',
    'closing.lede': '指南介绍安装、Provider 配置、Agent 权限、模拟测试、执行审查，以及使用真实凭据前应该检查的事项。',
    'closing.github': '打开使用指南', 'closing.feedback': '反馈与交流', 'footer.about': '关于我们', 'footer.privacy': '隐私政策', 'footer.support': '技术支持', 'footer.feedback': '反馈与交流', 'footer.tagline': '本地研究与受控交易工作空间。', 'footer.status': '首版发布前软件',
    'alt.workstationDetail': 'TrueFix Studio 深色交易工作站界面，展示 BTC/USDT K 线、行情深度、持仓与下单面板',
    'alt.workstation': 'TrueFix Studio 交易工作站', 'alt.intelligence': 'TrueFix Studio 智能分析界面', 'alt.quant': 'TrueFix Studio AI 与量化界面'
  },
  ko: {
    'meta.title': 'TrueFix Studio — 기존 플랫폼에 더하는 스마트 리서치와 거래 제어',
    'meta.description': 'TrueFix Studio는 사용 중인 브로커, 거래소, 데이터 서비스에 로컬 리서치, 전략 테스트, 리스크 검토, 통제된 거래 기능을 더합니다.',
    'meta.ogDescription': '계정이나 자금을 옮기지 않고 하나의 로컬 작업 공간에서 시장을 조사하고 전략을 테스트하며 각 행동을 통제하세요.',
    'a11y.skip': '주요 콘텐츠로 건너뛰기', 'a11y.home': 'TrueFix Studio 홈', 'a11y.menu': '내비게이션 열기',
    'a11y.nav': '주요 내비게이션', 'a11y.capabilities': '핵심 기능', 'a11y.productInterfaces': '제품 인터페이스',
    'a11y.architecture': 'TrueFix Studio 아키텍처 다이어그램', 'a11y.film': 'TrueFix Studio 제품 필름', 'a11y.providers': '사용 가능한 Provider 어댑터', 'language.label': '언어',
    'nav.home': '홈', 'nav.product': '기능', 'nav.principles': '안전', 'nav.architecture': '아키텍처', 'nav.modes': '사용 방식', 'nav.about': '소개', 'nav.support': '기술 지원', 'nav.feedback': '피드백', 'nav.guide': '사용 가이드',
    'hero.eyebrow': '로컬 우선 시장 작업 공간 · 프리릴리스', 'hero.title': '사용 중인 플랫폼은 그대로,<br /><i>더 나은 리서치와 거래 제어를 더하세요.</i>',
    'hero.lede': 'TrueFix Studio는 기존 브로커, 거래소, 데이터 서비스와 함께 작동합니다. 하나의 로컬 작업 공간에서 시장 조사, Agent 질의, 전략 테스트, 리스크 확인을 거쳐 선택한 Provider로 승인된 행동을 보낼 수 있습니다.',
    'hero.download': '무엇을 할 수 있는지 보기', 'hero.source': 'Nightly 다운로드', 'hero.explore': '누구를 위한 제품인지 보기', 'hero.note': '내 기기에서 실행 · 자금 미수탁 · 읽기 전용 또는 시뮬레이션부터 시작',
    'hero.tag.local': '로컬 프로필<br />이 기기에 저장', 'hero.tag.review': '행동 전<br />사람이 검토',
    'value.eyebrow': 'TRUEFIX가 더하는 것', 'value.title': '기존 플랫폼은 유지하고.<br /><i>빠진 작업 흐름을 더하세요.</i>',
    'value.lede': 'TrueFix는 브로커를 대체하거나 자금을 보관하지 않습니다. 여러 도구에 흩어진 조사, 테스트, 검토를 하나의 작업 공간에 모읍니다.',
    'value.research.title': '여러 출처를 함께 조사', 'value.research.body': '시장 데이터, 뉴스, 계정 맥락과 신호의 원문을 비교하면서 어느 서비스가 제공했는지 확인합니다.',
    'value.strategy.title': 'AI와 퀀트를 도구로 사용', 'value.strategy.body': 'Agent에게 정보 정리나 전략 리플레이를 맡기되 도구, 예산, 데이터, 권한은 제한합니다.',
    'value.execution.title': '행동 전에 검토', 'value.execution.body': '승인된 지시를 보내기 전에 정확한 Provider, 계정, 환경, 종목, 수수료, 리스크를 확인합니다.',
    'value.safety.title': '계정은 원래 있던 곳에 유지됩니다.', 'value.safety.body': 'TrueFix는 입금을 받지 않습니다. 연결은 사용자가 설정하며 모든 행동은 선택한 Provider의 권한을 따릅니다.',
    'download.eyebrow': 'NIGHTLY RELEASE', 'download.title': '플랫폼을 선택하세요.<br /><i>최신 빌드로 시작하세요.</i>',
    'download.lede': '현재 TrueFix Studio Nightly 채널에서 빌드된 공개 프리릴리스 설치 파일입니다. 운영 체제와 아키텍처에 맞는 패키지를 선택하세요.',
    'download.prerelease': '프리릴리스', 'download.updated': '업데이트', 'download.recommended': '현재 기기에 권장',
    'download.mac.arch': 'Apple Silicon · arm64', 'download.mac.note': 'Apple Silicon Mac용 DMG 설치 파일입니다. 현재 Nightly 빌드는 서명되지 않았습니다.', 'download.mac.action': 'DMG 다운로드',
    'download.mac.xattrTitle': '서명되지 않은 macOS 빌드', 'download.mac.xattr': 'macOS에서 서명되지 않은 빌드를 차단하면 앱을 응용 프로그램으로 옮긴 후 다음을 실행하세요:', 'download.mac.xattrCaution': 'TrueFix 공식 Release에서 다운로드한 앱에만 이 명령을 사용하세요.',
    'download.windows.arch': 'Windows · x64', 'download.windows.note': '64비트 Windows용 표준 설치 실행 파일입니다. 관리형 설치용 MSI도 제공됩니다.', 'download.windows.action': '설치 EXE 다운로드',
    'download.linux.arch': 'Linux · x86_64', 'download.linux.note': '64비트 Linux용 휴대용 AppImage입니다. apt 기반 시스템용 Debian 패키지도 제공됩니다.', 'download.linux.action': 'AppImage 다운로드',
    'download.installGuide': '설치 가이드 ↗', 'download.alternative': '대체 형식',
    'download.disclaimer': 'Nightly 빌드는 예고 없이 변경될 수 있습니다. 계정을 연결하기 전에 플랫폼을 확인하고 가이드를 검토하세요.', 'download.allFiles': '릴리스 노트 및 전체 파일 보기',
    'overview.eyebrow': '01 / 사용 흐름', 'overview.title': '시장 질문에서<br />통제된 행동까지.',
    'overview.lede': '모든 단계는 선택 사항입니다. 조사만 하거나 시뮬레이션에서 아이디어를 시험하고, 명시적으로 허용한 계정의 검토된 행동으로 이어갈 수 있습니다.',
    'overview.what.label': '무엇인가요', 'overview.what.title': '기존 서비스 위에 더하는 도구',
    'overview.what.body': '선택한 데이터와 브로커 서비스를 연결하고, TrueFix로 자금을 옮기지 않은 채 조사, 전략, 계정 맥락을 함께 관리합니다.',
    'overview.who.label': '누가 사용하나요', 'overview.who.title': '이미 시장 도구를 사용하고 있는 사람',
    'overview.who.body': '서비스 간 흐름을 더 명확히 만들고 싶은 액티브 트레이더, 퀀트 개발자, 리서치 및 리스크 팀을 위한 도구입니다. 초보자용 투자 추천 앱은 아닙니다.',
    'overview.work.label': '무엇을 하나요', 'overview.work.title': '조사 → 비교 → 테스트 → 검토 → 행동',
    'overview.work.body': '신호와 출처를 확인하고 아이디어를 리플레이하며, 허용한 계정과 비용 및 리스크를 검토한 뒤 제출 여부를 결정합니다.',
    'overview.personas.eyebrow': '사용 예시', 'overview.personas.title': 'TrueFix를 사용하는 세 가지 방식.',
    'overview.personas.disclosure': '가능한 작업 흐름을 설명하는 예시이며 고객 후기가 아닙니다. 실제 기능은 연결한 Provider, 계정, 환경과 권한에 따라 달라집니다.',
    'overview.maya.role': '독립 멀티마켓 트레이더 · 싱가포르', 'overview.maya.task': 'Maya는 선택한 서비스의 암호화폐와 미국 주식 정보를 비교하고 신호의 원문을 연 뒤 행동 전에 계정과 리스크를 확인합니다.',
    'overview.ren.role': '퀀트 개발자 · 도쿄', 'overview.ren.task': 'Ren은 고정 데이터로 전략을 리플레이하고 가정을 확인한 뒤 Live를 고려하기 전에 Simulator, Demo, Testnet 또는 Paper에서 시험합니다.',
    'overview.jiwoo.role': '리서치 및 리스크 책임자 · 서울', 'overview.jiwoo.task': 'Ji-woo는 거래 권한이 없는 Agent에게 시장 정보를 정리하게 한 뒤 어떤 행동보다 먼저 정확한 계정, 수수료와 리스크를 검토합니다.',
    'cap.historical': '로컬 실행', 'cap.realtime': '자금 미수탁', 'cap.trade': 'TrueFix 클라우드 계정 없음',
    'cap.news': '읽기 전용과 시뮬레이션 우선', 'cap.instruments': 'Provider가 계속 통제', 'cap.analysis': '사람이 검토하는 행동',
    'provider.eyebrow': '지원 어댑터', 'provider.title': '이미 사용 중인<br /><i>서비스와 함께 작동합니다.</i>',
    'provider.note': '각 어댑터는 해당 서비스, 시장, 계정, 환경과 현재 권한이 실제로 지원하는 기능만 제공합니다. 무엇을 연결할지는 사용자가 선택합니다.',
    'provider.caveat': '로고는 지원 어댑터 대상을 표시하며 후원이나 공식 파트너십을 뜻하지 않습니다. 계정마다 사용 가능한 기능이 다를 수 있습니다.',
    'product.title': '무엇을 할 수 있는지<br />화면에서 확인하세요.',
    'product.lede': '세 가지 화면에 시장 모니터링, 출처가 있는 리서치, 전략 테스트, 통제된 계정 행동을 모았습니다.',
    'product.tab.workstation': '트레이딩 워크스테이션', 'product.tab.workstationSub': '시장 · 차트 · 실행',
    'product.tab.intelligence': '인텔리전스', 'product.tab.intelligenceSub': '증거 · 신호 · 리플레이',
    'product.tab.quantSub': '전략 · 권한 · 런타임',
    'product.caption.workstation': '선택한 Provider를 확인하면서 시세, 호가, 포지션, 주문 맥락을 한 화면에서 봅니다.',
    'product.caption.intelligence': '뉴스와 신호의 원문을 열고 관찰을 비교하며 아이디어가 시간에 따라 어떻게 바뀌었는지 확인합니다.',
    'product.caption.quant': '전략이나 Agent 출력을 계정 행동으로 바꾸기 전에 테스트하고 검토와 리스크 확인을 거칩니다.',
    'product.fullSize': '원본 크기로 열기',
    'film.title': '의사결정 체계를 확인하고.<br />모든 경계를 명확하게 유지하세요.',
    'film.lede': '내레이션과 함께 워크스테이션, 인텔리전스 근거, 권한이 부여된 AI + Quant 런타임, 명확히 표시된 미래 Market Twin 개념을 소개합니다.',
    'film.caption': '제품 미리보기 · 내레이션과 오리지널 앰비언트 음악 · 명확히 표시된 미래 개념 포함', 'film.fallback': '브라우저에서 이 동영상을 재생할 수 없습니다.', 'film.watchPage': '제품 영상 보기 ↗',
    'principles.title': '통제권은<br />사용자에게 있습니다.',
    'principles.lede': 'TrueFix는 입금을 받거나 TrueFix 클라우드 계정을 만들지 않습니다. 각 연결과 사용할 권한, 환경, 계정을 사용자가 결정합니다.',
    'principles.evidence.title': '연결은 명시적 권한을 사용',
    'principles.evidence.body': '선택한 Provider, 계정, 시장, 환경과 권한이 지원할 때만 데이터 또는 거래 기능을 사용할 수 있습니다.',
    'principles.execution.title': '자금이 움직이기 전에 검토',
    'principles.execution.body': '제출 전에 정확한 계정, 종목, 주문, 수수료와 리스크를 확인합니다. 결과가 불확실하면 자동 재전송 대신 조회합니다.',
    'principles.ai.title': 'AI는 제한 안에서 보조',
    'principles.ai.body': 'Agent는 허용한 도구로 분석할 수 있습니다. 거래 권한은 별도이며 AI 제안은 승인된 주문으로 취급되지 않습니다.',
    'architecture.title': '로컬에서 실행하고.<br />요청할 때 연결합니다.',
    'architecture.lede': 'TrueFix 프로필은 이 기기에서 시작합니다. 앱은 작업을 위해 사용자가 설정한 데이터, 브로커, 거래소 또는 AI 서비스에만 연결합니다.',
    'architecture.link': '아키텍처 가이드 읽기',
    'architecture.caption': 'TrueFix는 시장 데이터, 뉴스, 신호와 계정 행동에 원본 Provider를 함께 보존합니다.',
    'modes.title': '필요한 기능만<br />사용하세요.',
    'modes.lede': '리서치와 읽기 전용 데이터부터 시작하세요. 필요할 때만 시뮬레이션, 헤드리스 전략 실행 또는 허용된 실행을 추가합니다.',
    'modes.traders.label': '일상 작업', 'modes.traders.title': 'Desktop / Web', 'modes.traders': '하나의 작업 공간에서 시장 데이터, 포지션, 리스크와 주문 맥락을 확인합니다.',
    'modes.quant.label': '자동화', 'modes.quant.title': 'Headless Quant', 'modes.quant': '데스크톱 화면 없이도 동일한 계정과 리스크 규칙으로 전략을 실행하고 리플레이합니다.',
    'modes.ai.label': '리서치', 'modes.ai.title': 'AI 보조 리서치', 'modes.ai': '사용자가 고른 도구, 제한과 권한으로 Agent가 시장 정보를 정리하고 분석하게 합니다.',
    'about.title': 'TrueFix Studio 소개.<br />우리가 만드는 이유.',
    'about.lede': 'TrueFix Studio는 이미 브로커, 거래소, 시장 데이터 또는 시스템 전략을 사용하는 사람을 위한 독립 프리릴리스 소프트웨어 프로젝트입니다.',
    'about.intro': '목표는 실용적입니다. 도구 전환을 줄이고 정보 출처를 드러내며 자동화를 사용자가 확인할 수 있는 범위 안에 둡니다.',
    'about.local.label': '로컬 우선', 'about.local.title': '프로필은 이 기기에서 시작', 'about.local.body': 'TrueFix 클라우드 계정은 필요하지 않습니다. 외부 서비스 연결은 사용하려는 기능에 맞춰 사용자가 설정합니다.',
    'about.custody.label': '자금 미수탁', 'about.custody.title': '자금은 Provider에 유지', 'about.custody.body': 'TrueFix는 소프트웨어이며 브로커, 거래소, 은행 또는 투자 자문사가 아닙니다. 입금을 받거나 수익을 약속하지 않습니다.',
    'about.control.label': '사용자 제어', 'about.control.title': '작업 흐름의 범위는 사용자가 선택', 'about.control.body': '리서치만 사용하거나 읽기 전용, 시뮬레이션, 허용된 실행을 선택할 수 있습니다. AI 보조가 사용자의 검토 책임을 없애지는 않습니다.',
    'about.people': '프로젝트 인물 보기', 'about.guide': '사용 가이드 읽기', 'about.privacy': '개인정보 처리방침', 'about.support': '기술 지원',
    'closing.title': '계정을 연결하기 전에<br /><i>작업 흐름을 확인하세요.</i>',
    'closing.lede': '가이드에서 설치, Provider 설정, Agent 권한, 시뮬레이션, 실행 검토와 실제 자격 증명 사용 전 확인 사항을 설명합니다.',
    'closing.github': '사용 가이드 열기', 'closing.feedback': '피드백 및 토론', 'footer.about': '소개', 'footer.privacy': '개인정보', 'footer.support': '기술 지원', 'footer.feedback': '피드백 및 토론', 'footer.tagline': '로컬 리서치와 통제된 거래 작업 공간.', 'footer.status': '출시 전 소프트웨어',
    'alt.workstationDetail': 'BTC/USDT 차트, 시장 깊이, 포지션, 주문 패널을 보여 주는 TrueFix Studio 다크 트레이딩 워크스테이션',
    'alt.workstation': 'TrueFix Studio 트레이딩 워크스테이션', 'alt.intelligence': 'TrueFix Studio 인텔리전스 인터페이스', 'alt.quant': 'TrueFix Studio AI 및 퀀트 인터페이스'
  },
  ja: {
    'meta.title': 'TrueFix Studio — 既存のサービスに加えるリサーチと取引管理',
    'meta.description': 'TrueFix Studioは、利用中の証券会社、取引所、データサービスに、ローカルでのリサーチ、戦略テスト、リスク確認、管理された取引機能を加えます。',
    'meta.ogDescription': '口座や資金を移さず、一つのローカルワークスペースで市場調査、戦略テスト、リスク確認、各アクションの管理を行えます。',
    'a11y.skip': 'メインコンテンツへ移動', 'a11y.home': 'TrueFix Studio ホーム', 'a11y.menu': 'ナビゲーションを開く',
    'a11y.nav': 'メインナビゲーション', 'a11y.capabilities': '主要機能', 'a11y.productInterfaces': '製品インターフェース',
    'a11y.architecture': 'TrueFix Studio アーキテクチャ図', 'a11y.film': 'TrueFix Studio プロダクトフィルム', 'a11y.providers': '利用可能なProviderアダプター', 'language.label': '言語',
    'nav.home': 'ホーム', 'nav.product': '機能', 'nav.principles': '安全性', 'nav.architecture': '構成', 'nav.modes': '利用方法', 'nav.about': '私たちについて', 'nav.support': 'サポート', 'nav.feedback': 'フィードバック', 'nav.guide': '利用ガイド',
    'hero.eyebrow': 'ローカルファーストの市場ワークスペース · プレリリース', 'hero.title': '今のサービスはそのままに、<br /><i>より良いリサーチと取引管理を。</i>',
    'hero.lede': 'TrueFix Studioは、現在利用している証券会社、取引所、データサービスと連携します。一つのローカルワークスペースで市場を調べ、Agentに質問し、戦略とリスクを確認して、選択したProviderへ承認済みのアクションを送れます。',
    'hero.download': 'できることを見る', 'hero.source': 'Nightlyをダウンロード', 'hero.explore': '対象ユーザーを見る', 'hero.note': '端末上で実行 · 資金を預からない · 読み取り専用またはシミュレーションから開始',
    'hero.tag.local': 'ローカルプロファイル<br />この端末に保存', 'hero.tag.review': 'アクション前に<br />人が確認',
    'value.eyebrow': 'TRUEFIXが加えるもの', 'value.title': '今のサービスはそのまま。<br /><i>足りない作業の流れを一つに。</i>',
    'value.lede': 'TrueFixは証券会社を置き換えたり、資金を預かったりしません。別々のツールに散らばっていた調査、テスト、確認を一つのワークスペースにまとめます。',
    'value.research.title': '複数の情報源を調べる', 'value.research.body': '市場データ、ニュース、口座情報、シグナルの原文を比較し、どのサービスが提供した情報かを確認できます。',
    'value.strategy.title': 'AIとクオンツを道具として使う', 'value.strategy.body': 'Agentに情報整理や戦略のリプレイを依頼しつつ、利用できるツール、予算、データ、権限を制限します。',
    'value.execution.title': '行動の前に確認する', 'value.execution.body': '承認済みの指示を送る前に、Provider、口座、環境、銘柄、手数料、リスクを確認します。',
    'value.safety.title': '口座は今の場所に残ります。', 'value.safety.body': 'TrueFixは入金を受け付けません。接続は利用者が設定し、すべてのアクションは選択したProviderの権限に従います。',
    'download.eyebrow': 'NIGHTLY RELEASE', 'download.title': 'プラットフォームを選択。<br /><i>最新ビルドから始める。</i>',
    'download.lede': 'TrueFix Studioの現在のNightlyチャンネルから生成された公開プレリリース版です。OSとアーキテクチャに合うパッケージを選択してください。',
    'download.prerelease': 'プレリリース', 'download.updated': '更新', 'download.recommended': 'このデバイスに推奨',
    'download.mac.arch': 'Apple Silicon · arm64', 'download.mac.note': 'Apple Silicon Mac向けDMGです。現在のNightlyビルドは未署名です。', 'download.mac.action': 'DMGをダウンロード',
    'download.mac.xattrTitle': '未署名のmacOSビルド', 'download.mac.xattr': '未署名のためmacOSにブロックされた場合、アプリを「アプリケーション」へ移動してから次を実行してください：', 'download.mac.xattrCaution': 'TrueFix公式Releaseからダウンロードしたアプリにのみ、このコマンドを使用してください。',
    'download.windows.arch': 'Windows · x64', 'download.windows.note': '64ビットWindows向け標準セットアップです。管理インストール用MSIも利用できます。', 'download.windows.action': 'セットアップEXEをダウンロード',
    'download.linux.arch': 'Linux · x86_64', 'download.linux.note': '64ビットLinux向けポータブルAppImageです。apt系システム向けDebianパッケージも利用できます。', 'download.linux.action': 'AppImageをダウンロード',
    'download.installGuide': 'インストールガイド ↗', 'download.alternative': '別形式',
    'download.disclaimer': 'Nightlyビルドは予告なく変更される場合があります。口座接続前にプラットフォームを確認し、ガイドをお読みください。', 'download.allFiles': 'リリースノートと全ファイルを表示',
    'overview.eyebrow': '01 / 使い方', 'overview.title': '市場の疑問から<br />管理されたアクションまで。',
    'overview.lede': 'どの段階も任意です。リサーチだけに使う、シミュレーションで試す、または明示的に許可した口座で確認済みのアクションまで進められます。',
    'overview.what.label': '何ができる製品か', 'overview.what.title': '既存のサービスの上に加えるツール',
    'overview.what.body': '選択したデータや証券サービスを接続し、TrueFixへ資金を移さずにリサーチ、戦略、口座の情報をまとめます。',
    'overview.who.label': '誰が利用できるか', 'overview.who.title': 'すでに市場ツールを利用している人',
    'overview.who.body': 'サービス間の作業を整理したいアクティブトレーダー、クオンツ開発者、リサーチ・リスクチーム向けです。初心者向けの投資推奨アプリではありません。',
    'overview.work.label': '何に使うか', 'overview.work.title': '調査 → 比較 → テスト → 確認 → 行動',
    'overview.work.body': 'シグナルと出所を確認し、アイデアをリプレイし、許可した口座、手数料、リスクを見てから送信するか判断します。',
    'overview.personas.eyebrow': '利用例', 'overview.personas.title': 'TrueFixを利用する三つの方法。',
    'overview.personas.disclosure': '利用可能な流れを説明する例であり、顧客の推薦コメントではありません。実際の機能は接続したProvider、口座、環境、権限に依存します。',
    'overview.maya.role': '独立系マルチマーケットトレーダー · シンガポール', 'overview.maya.task': 'Mayaは選択したサービスの暗号資産と米国株情報を比較し、シグナルの元情報を開いて、行動前に口座とリスクを確認します。',
    'overview.ren.role': 'クオンツ開発者 · 東京', 'overview.ren.task': 'Renは固定データで戦略をリプレイして前提を確認し、Liveを検討する前にSimulator、Demo、Testnet、Paperで試します。',
    'overview.jiwoo.role': 'リサーチおよびリスク責任者 · ソウル', 'overview.jiwoo.task': 'Ji-wooは取引権限のないAgentに市場情報を整理させ、行動前に正確な口座、手数料、リスクを確認します。',
    'cap.historical': 'ローカルで実行', 'cap.realtime': '資金を預からない', 'cap.trade': 'TrueFixクラウド口座なし',
    'cap.news': '読み取り専用とシミュレーションを優先', 'cap.instruments': 'Provider側の管理を維持', 'cap.analysis': '人が確認するアクション',
    'provider.eyebrow': '対応アダプター', 'provider.title': 'すでに利用中の<br /><i>サービスと連携。</i>',
    'provider.note': '各アダプターは、そのサービス、市場、口座、環境、現在の権限が実際に対応する機能だけを提供します。何を接続するかは利用者が選びます。',
    'provider.caveat': 'ロゴは対応アダプターの対象を示すもので、スポンサーや公式提携を意味しません。利用できる機能は口座によって異なります。',
    'product.title': '何ができるかを<br />画面で確認。',
    'product.lede': '三つの画面に、市場監視、出所を確認できるリサーチ、戦略テスト、管理された口座操作をまとめています。',
    'product.tab.workstation': '取引ワークステーション', 'product.tab.workstationSub': '市場 · チャート · 執行',
    'product.tab.intelligence': 'インテリジェンス', 'product.tab.intelligenceSub': '証拠 · シグナル · リプレイ',
    'product.tab.quantSub': '戦略 · 権限 · ランタイム',
    'product.caption.workstation': '選択したProviderを表示したまま、価格、板、ポジション、注文情報を一つの画面で確認します。',
    'product.caption.intelligence': 'ニュースやシグナルの元情報を開き、観測を比較し、アイデアの変化を振り返ります。',
    'product.caption.quant': '戦略やAgentの出力が口座操作になる前にテストし、レビューとリスク確認を行います。',
    'product.fullSize': '原寸画像を開く',
    'film.title': '意思決定の流れを見渡し。<br />すべての境界を明確に。',
    'film.lede': 'ナレーション付きでワークステーション、Intelligenceの根拠、認可済みAI + Quantランタイム、明示された未来のMarket Twin構想を紹介します。',
    'film.caption': '製品プレビュー · ナレーションとオリジナル環境音楽 · 明示された未来構想を含む', 'film.fallback': 'このブラウザーでは動画を再生できません。', 'film.watchPage': '製品映像を見る ↗',
    'principles.title': '操作の主導権は<br />利用者に。',
    'principles.lede': 'TrueFixは入金を受け付けず、TrueFixのクラウド口座も作りません。接続、権限、環境、使用する口座は利用者が決めます。',
    'principles.evidence.title': '接続には明示的な権限を使用',
    'principles.evidence.body': '選択したProvider、口座、市場、環境、権限が対応する場合だけ、データや取引機能を利用できます。',
    'principles.execution.title': '資金が動く前に確認',
    'principles.execution.body': '送信前に口座、銘柄、注文、手数料、リスクを確認します。結果が不明な場合は自動再送せず照会します。',
    'principles.ai.title': 'AIは制限の中で補助',
    'principles.ai.body': 'Agentは許可したツールで分析できます。取引権限は別に管理され、AIの提案は承認済み注文として扱われません。',
    'architecture.title': 'ローカルで動作し。<br />必要な時だけ接続。',
    'architecture.lede': 'TrueFixのプロファイルはこの端末から始まります。アプリは、作業のために設定したデータ、証券会社、取引所、AIサービスだけへ接続します。',
    'architecture.link': 'アーキテクチャガイドを読む',
    'architecture.caption': 'TrueFixは市場データ、ニュース、シグナル、口座操作に元のProvider情報を付けたまま扱います。',
    'modes.title': '必要な機能だけを<br />使えます。',
    'modes.lede': 'リサーチと読み取り専用データから始め、必要な場合だけシミュレーション、ヘッドレス戦略実行、認可済みの執行を加えます。',
    'modes.traders.label': '日々の作業', 'modes.traders.title': 'Desktop / Web', 'modes.traders': '一つのワークスペースで市場データ、ポジション、リスク、注文情報を確認します。',
    'modes.quant.label': '自動化', 'modes.quant.title': 'Headless Quant', 'modes.quant': 'デスクトップ画面を使わず、同じ口座とリスクルールで戦略を実行、リプレイします。',
    'modes.ai.label': 'リサーチ', 'modes.ai.title': 'AI支援リサーチ', 'modes.ai': '選択したツール、制限、権限の範囲でAgentに市場情報の整理と分析を依頼します。',
    'about.title': 'TrueFix Studioについて。<br />私たちが作る理由。',
    'about.lede': 'TrueFix Studioは、すでに証券会社、取引所、市場データ、システム戦略を利用している人向けの独立したプレリリース・ソフトウェアプロジェクトです。',
    'about.intro': '目的は実用的です。ツールの切り替えを減らし、情報源を見える状態にし、自動化を利用者が確認できる範囲に保ちます。',
    'about.local.label': 'ローカルファースト', 'about.local.title': 'プロファイルはこの端末から', 'about.local.body': 'TrueFixのクラウド口座は不要です。外部サービスとの接続は、利用する機能に合わせて自分で設定します。',
    'about.custody.label': '資金を預からない', 'about.custody.title': '資金はProviderに残る', 'about.custody.body': 'TrueFixはソフトウェアであり、証券会社、取引所、銀行、投資助言業者ではありません。入金を受け付けず、収益を約束しません。',
    'about.control.label': '利用者が管理', 'about.control.title': 'どこまで使うかを選べる', 'about.control.body': 'リサーチのみ、読み取り専用、シミュレーション、認可済みの執行から選べます。AI支援が利用者の確認責任をなくすことはありません。',
    'about.people': 'プロジェクトの人物を見る', 'about.guide': '利用ガイドを読む', 'about.privacy': 'プライバシーポリシー', 'about.support': 'テクニカルサポート',
    'closing.title': '口座を接続する前に<br /><i>作業の流れを確認。</i>',
    'closing.lede': 'ガイドでは、インストール、Provider設定、Agent権限、シミュレーション、執行確認、実際の認証情報を使う前の確認事項を説明します。',
    'closing.github': '利用ガイドを開く', 'closing.feedback': 'フィードバックと交流', 'footer.about': '私たちについて', 'footer.privacy': 'プライバシー', 'footer.support': 'テクニカルサポート', 'footer.feedback': 'フィードバックと交流', 'footer.tagline': 'ローカルリサーチと管理された取引ワークスペース。', 'footer.status': 'リリース前ソフトウェア',
    'alt.workstationDetail': 'BTC/USDTチャート、板情報、ポジション、注文パネルを表示するTrueFix Studioのダーク取引ワークステーション',
    'alt.workstation': 'TrueFix Studio 取引ワークステーション', 'alt.intelligence': 'TrueFix Studio インテリジェンス画面', 'alt.quant': 'TrueFix Studio AI・クオンツ画面'
  }
};

// Keep the public explanation concrete. Product-specific names remain in the UI,
// but the surrounding copy explains them in everyday language first.
const plainLanguageCopy = {
  en: {
    'meta.title': 'TrueFix Studio — Research, test, and review trades',
    'meta.description': 'Connect your existing brokers, exchanges, and market-data services. Research markets, test strategies, and review trades in one desktop app.',
    'meta.ogDescription': 'Connect your existing broker, exchange, and market-data services. Research, test, and review each action without moving your money to TrueFix.',
    'nav.architecture': 'How it connects', 'a11y.providers': 'Supported brokers, exchanges, and data services',
    'hero.eyebrow': 'Desktop research and trading assistant · Pre-release',
    'hero.title': 'Connect the accounts you already use.<br /><i>Research, test, and trade in one place.</i>',
    'hero.lede': 'TrueFix Studio is a desktop app for people who already use brokers, exchanges, or market-data services. It brings market research, an AI assistant, strategy testing, and reviewed trading actions into one place.',
    'hero.download': 'See how it helps',
    'hero.note': 'Your money stays with your broker · Start read-only or in simulation',
    'hero.tag.local': 'YOUR PROFILE<br />ON THIS DEVICE',
    'hero.tag.review': 'YOU REVIEW<br />BEFORE TRADING',
    'cap.historical': 'Runs on your device', 'cap.realtime': 'Does not hold your money', 'cap.trade': 'No TrueFix cloud account',
    'cap.news': 'Read-only and simulation modes', 'cap.instruments': 'Your broker remains in control', 'cap.analysis': 'You review trading actions',
    'value.eyebrow': 'WHAT IT HELPS YOU DO',
    'value.title': 'Keep your current accounts.<br /><i>Bring the work into one app.</i>',
    'value.lede': 'Use TrueFix alongside your current broker or exchange. Your accounts and money stay where they are while you research, test ideas, and review possible actions in one desktop app.',
    'value.research.title': 'See your market information together',
    'value.research.body': 'Compare prices, news, signals, and account information, and open the original source when you need to check it.',
    'value.strategy.title': 'Ask AI and test strategies',
    'value.strategy.body': 'Use the AI assistant to organize information, or test a rule-based strategy with past or simulated data before using a real account.',
    'value.execution.title': 'Check every action before sending',
    'value.execution.body': 'See the selected service, account, test or live mode, product, fees, and risk before a trading action is sent.',
    'value.safety.title': 'TrueFix never asks you to deposit money.',
    'value.safety.body': 'You choose which outside services to connect and what they may do. Your broker or exchange still controls the account and its permissions.',
    'overview.eyebrow': 'HOW IT WORKS', 'overview.title': 'Start with a question.<br />Stop whenever you want.',
    'overview.lede': 'You can use TrueFix only for research, test an idea without real money, or continue to a trading action after checking the account and risk.',
    'overview.what.title': 'One app for services you already use',
    'overview.what.body': 'Connect selected brokers, exchanges, and market-data services. TrueFix shows their information together without moving your money.',
    'overview.who.title': 'People who already have market accounts',
    'overview.who.body': 'For traders, strategy developers, and research or risk teams who use more than one market service. It does not recommend what you should buy or promise returns.',
    'overview.work.title': 'Research → compare → test → check → decide',
    'overview.work.body': 'Check where information came from, test an idea, choose an account, review fees and risk, then decide whether to send the action.',
    'overview.personas.disclosure': 'These are examples of how the product can be used, not customer testimonials. Available features depend on the service and account you connect.',
    'overview.maya.task': 'Maya compares crypto and U.S. stock information, opens the source behind a signal, and checks the account and risk before deciding what to do.',
    'overview.ren.role': 'Strategy developer · Tokyo',
    'overview.ren.task': 'Ren tests a strategy with fixed historical data, checks the result, and tries it with simulated money before considering a live account.',
    'overview.jiwoo.task': 'Ji-woo uses the AI assistant to organize market information without giving it trading permission. A person reviews the account, fees, and risk before any action.',
    'provider.eyebrow': 'SUPPORTED SERVICES', 'provider.title': 'Connect brokers, exchanges,<br /><i>and market data.</i>',
    'provider.note': 'You choose which service and account to connect. What you can view or do depends on the features and permissions that service provides.',
    'provider.caveat': 'These logos show services TrueFix is designed to connect with. They do not mean the companies sponsor or officially partner with TrueFix. Features vary by service and account.',
    'product.lede': 'Use three main areas to follow markets, check the source of information, test ideas, and review account actions.',
    'product.tab.intelligence': 'Research', 'product.tab.intelligenceSub': 'Sources · Signals · History', 'product.tab.quant': 'AI & Strategy Testing', 'product.tab.quantSub': 'Ask · Test · Control',
    'product.caption.workstation': 'See prices, order-book depth, positions, and order details in one screen, with the connected service clearly shown.',
    'product.caption.intelligence': 'Open the original source behind news and signals, compare information, and see how an idea changed over time.',
    'product.caption.quant': 'Ask the AI assistant to organize information and test strategies before anything can reach a real account.',
    'film.title': 'See what TrueFix does<br />in 36 seconds.',
    'film.lede': 'A short look at market research, the AI assistant, strategy testing, safety checks, and the future Market Twin idea.',
    'film.caption': 'Product preview · English narration · Music · Multilingual captions',
    'principles.lede': 'TrueFix does not accept deposits or open a financial account for you. You choose every connected service, account, permission, and test or live mode.',
    'principles.evidence.title': 'You choose what each connection can do',
    'principles.evidence.body': 'A connection can only use the market data or trading permissions allowed by the broker, exchange, or data service you selected.',
    'principles.execution.title': 'Check before sending a trade',
    'principles.execution.body': 'Before sending, confirm the account, product, direction, amount, price, fees, and risk. If the result is unclear, TrueFix checks the existing order instead of sending it again.',
    'principles.ai.title': 'The AI assistant has limits',
    'principles.ai.body': 'The AI assistant can use only the tools you allow. Giving it access to research does not give it permission to trade, and a suggestion is never an approved order.',
    'architecture.title': 'Your work stays on this device.<br />You choose outside connections.',
    'architecture.lede': 'TrueFix keeps its main profile on your device. It connects only to the broker, exchange, market-data, or AI services that you set up.',
    'architecture.caption': 'TrueFix shows which service supplied market data, news, signals, and account actions, so you can check the source.',
    'modes.lede': 'Start by viewing data or doing research. Add simulated trading, background strategy runs, or real trading only when you need them.',
    'modes.quant.title': 'Background strategy runs',
    'modes.quant': 'Run and test rule-based strategies without keeping the desktop window open, while using the same account and risk limits.',
    'modes.ai': 'Ask the AI assistant to organize and explain market information using only the data and tools you allow.',
    'about.lede': 'TrueFix Studio is an independent, pre-release desktop app for people who already use brokers, exchanges, market data, or rule-based trading strategies.',
    'about.intro': 'We are building it to reduce switching between tools, make information sources easy to check, and keep AI and automation under the user\'s control.',
    'about.custody.title': 'Your money stays with your broker or exchange',
    'about.custody.body': 'TrueFix is software, not a broker, exchange, bank, or investment adviser. It does not accept deposits, hold money, or promise returns.',
    'closing.lede': 'The guide explains installation, connecting a service, using the AI assistant, trying simulation, and what to check before using a real account.',
    'footer.tagline': 'Research and trading tools for the accounts you already use.'
  },
  'zh-CN': {
    'meta.title': 'TrueFix Studio — 连接账户，研究、测试并确认交易',
    'meta.description': '连接你已有的券商、交易所和行情服务，在一个桌面应用里研究市场、测试策略并确认交易操作。',
    'meta.ogDescription': '连接已有券商、交易所和行情服务。无需把资金转入 TrueFix，就能集中研究、测试并确认每次操作。',
    'nav.architecture': '连接方式', 'a11y.providers': '支持连接的券商、交易所和数据服务',
    'hero.eyebrow': '投资研究与交易辅助桌面应用 · 预发布',
    'hero.title': '连接你已有的券商和交易所，<br /><i>把研究、测试和交易管理放在一个地方。</i>',
    'hero.lede': 'TrueFix Studio 适合已经在使用券商、交易所或行情服务的人。它把市场研究、AI 助手、策略测试和交易前确认放进一个桌面应用。',
    'hero.download': '看看它能帮你什么',
    'hero.note': '资金仍在你的券商或交易所 · 可先从只读或模拟开始',
    'hero.tag.local': '个人配置<br />保存在本机', 'hero.tag.review': '交易发送前<br />由你确认',
    'cap.historical': '在你的设备上运行', 'cap.realtime': '不接收或托管资金', 'cap.trade': '无需 TrueFix 云账户',
    'cap.news': '支持只读和模拟', 'cap.instruments': '账户仍由原平台管理', 'cap.analysis': '交易操作由你确认',
    'value.eyebrow': '它能帮你做什么', 'value.title': '保留现有账户，<br /><i>把分散的工作放进一个应用。</i>',
    'value.lede': 'TrueFix 与你现有的券商或交易所配合使用。账户和资金不需要转移，你可以在一个桌面应用里完成研究、测试想法和交易前检查。',
    'value.research.title': '集中查看市场信息', 'value.research.body': '把价格、新闻、信号和账户信息放在一起比较，需要核实时可以打开原始来源。',
    'value.strategy.title': '询问 AI，测试策略', 'value.strategy.body': '让 AI 助手整理信息，或先用历史和模拟数据测试规则策略，再考虑使用真实账户。',
    'value.execution.title': '发送前检查每项操作', 'value.execution.body': '在交易操作发出前，看清服务、账户、模拟或实盘模式、交易品种、费用和风险。',
    'value.safety.title': 'TrueFix 不会要求你把钱存进来。', 'value.safety.body': '你决定连接哪些外部服务以及开放什么权限。账户和权限仍由你的券商或交易所管理。',
    'overview.eyebrow': '怎么使用', 'overview.title': '从一个问题开始，<br />随时可以停在你需要的步骤。',
    'overview.lede': '你可以只用 TrueFix 做研究，也可以先用模拟资金测试；只有检查账户和风险后，才继续到真实交易操作。',
    'overview.what.title': '一个应用连接你已有的服务', 'overview.what.body': '连接你选择的券商、交易所和行情服务，在同一处查看信息，不需要把资金转入 TrueFix。',
    'overview.who.title': '适合已经有市场账户的人', 'overview.who.body': '适合同时使用多个市场服务的交易者、策略开发者，以及研究或风控团队。它不会告诉你该买什么，也不承诺收益。',
    'overview.work.title': '研究 → 比较 → 测试 → 检查 → 决定', 'overview.work.body': '查看信息来源，测试想法，选择账户，核对费用与风险，再决定是否发送操作。',
    'overview.personas.disclosure': '这些内容只是产品使用方式，不是客户评价。实际功能取决于你连接的服务和账户。',
    'overview.maya.role': '独立多市场交易者 · 新加坡', 'overview.maya.task': 'Maya 比较加密资产与美股信息，打开信号的原始来源，并在决定行动前检查账户和风险。',
    'overview.ren.role': '策略开发者 · 东京', 'overview.ren.task': 'Ren 用固定历史数据测试策略、检查结果，并先用模拟资金运行，再考虑真实账户。',
    'overview.jiwoo.task': 'Ji-woo 让 AI 助手整理市场信息，但不给它交易权限。任何操作前仍由人核对账户、费用和风险。',
    'provider.eyebrow': '支持的服务', 'provider.title': '连接券商、交易所<br /><i>和行情数据。</i>',
    'provider.note': '你决定连接哪项服务和哪个账户。能查看或执行哪些功能，取决于该服务实际提供的能力和账户权限。',
    'provider.caveat': '这些标识表示 TrueFix 计划或已经支持连接的服务，不代表相关公司赞助 TrueFix 或与其正式合作。不同服务和账户可用功能不同。',
    'product.lede': '三个主要界面分别用于查看市场、核对信息来源、测试想法和确认账户操作。',
    'product.tab.workstation': '市场与交易', 'product.tab.workstationSub': '行情 · 图表 · 订单',
    'product.tab.intelligence': '研究', 'product.tab.intelligenceSub': '来源 · 信号 · 历史', 'product.tab.quant': 'AI 与策略测试', 'product.tab.quantSub': '询问 · 测试 · 控制',
    'product.caption.workstation': '在一个界面查看报价、盘口、持仓和订单信息，并清楚看到当前连接的服务。',
    'product.caption.intelligence': '打开新闻和信号的原始来源，比较信息，并回看一个想法如何随时间变化。',
    'product.caption.quant': '让 AI 助手整理信息并测试策略；任何内容到达真实账户前都要经过检查。',
    'film.title': '用 36 秒看看<br />TrueFix 能做什么。', 'film.lede': '快速了解市场研究、AI 助手、策略测试、安全检查和未来的 Market Twin 构想。',
    'film.caption': '产品预览 · 英文旁白 · 配乐 · 多语言字幕',
    'principles.lede': 'TrueFix 不接受入金，也不会为你开设金融账户。连接哪项服务、使用哪个账户、开放什么权限，以及采用模拟还是实盘，都由你决定。',
    'principles.evidence.title': '你决定每个连接可以做什么', 'principles.evidence.body': '一个连接只能使用所选券商、交易所或数据服务允许的行情和交易权限。',
    'principles.execution.title': '发送交易前先核对', 'principles.execution.body': '发送前确认账户、交易品种、方向、数量、价格、费用和风险。如果结果不清楚，TrueFix 会查询已有订单，而不是再次发送。',
    'principles.ai.title': 'AI 助手有明确限制', 'principles.ai.body': 'AI 助手只能使用你允许的工具。允许它研究不等于允许它交易，AI 建议也不会自动成为已批准订单。',
    'architecture.title': '主要数据保存在本机，<br />外部连接由你选择。', 'architecture.lede': 'TrueFix 的主要个人配置保存在你的设备上。它只连接你主动设置的券商、交易所、行情或 AI 服务。',
    'architecture.caption': 'TrueFix 会显示行情、新闻、信号和账户操作来自哪项服务，方便你核对来源。',
    'architecture.link': '查看连接与数据说明',
    'modes.lede': '先从查看数据和研究开始。只有在需要时，再启用模拟交易、后台策略或真实交易。',
    'modes.traders.title': '桌面端 / 网页端', 'modes.traders': '在一个工作区查看行情、持仓、风险和订单信息。',
    'modes.quant.title': '后台策略运行', 'modes.quant': '无需一直打开桌面窗口，也能运行和测试规则策略，并沿用相同的账户和风险限制。',
    'modes.ai.title': 'AI 辅助研究', 'modes.ai': '让 AI 助手只使用你允许的数据和工具，帮你整理并解释市场信息。',
    'about.lede': 'TrueFix Studio 是一个独立开发、仍在预发布阶段的桌面应用，面向已经使用券商、交易所、行情数据或规则策略的人。',
    'about.intro': '我们开发它，是为了减少来回切换工具，让信息来源更容易核对，并让 AI 和自动化始终由用户控制。',
    'about.local.title': '个人配置从本机开始', 'about.local.body': 'TrueFix 不要求注册云账户。你根据需要自行连接外部服务。',
    'about.custody.title': '资金留在你的券商或交易所', 'about.custody.body': 'TrueFix 是软件，不是券商、交易所、银行或投资顾问；它不接受入金、不托管资金，也不承诺收益。',
    'about.control.title': '你决定使用到哪一步', 'about.control.body': '可以只做研究、保持只读、使用模拟，或配置真实交易。AI 辅助不会替代你的检查和判断。',
    'closing.title': '连接账户之前，<br /><i>先看看具体怎么使用。</i>',
    'closing.lede': '指南说明如何安装、连接服务、使用 AI 助手、进行模拟，以及使用真实账户前需要检查什么。',
    'footer.tagline': '连接现有账户的投资研究与交易辅助工具。'
  },
  ja: {
    'meta.title': 'TrueFix Studio — 口座をつないで調査・テスト・取引確認',
    'meta.description': '利用中の証券会社、取引所、相場データを接続し、一つのデスクトップアプリで市場調査、戦略テスト、取引前確認を行えます。',
    'meta.ogDescription': '今の証券口座や取引所を接続。TrueFixへ資金を移さず、調査、テスト、取引前確認を一か所で行えます。',
    'nav.architecture': '接続方法', 'a11y.providers': '接続対応の証券会社、取引所、データサービス',
    'hero.eyebrow': '投資リサーチ・取引支援デスクトップアプリ · プレリリース',
    'hero.title': '今の証券会社や取引所をつないで、<br /><i>調査・テスト・取引管理を一か所に。</i>',
    'hero.lede': 'TrueFix Studioは、すでに証券会社、取引所、相場データサービスを利用している人向けです。市場調査、AIアシスタント、戦略テスト、取引前の確認を一つのデスクトップアプリにまとめます。',
    'hero.download': 'できることを見る', 'hero.note': '資金は証券会社や取引所に残ります · 読み取り専用やシミュレーションから開始',
    'hero.tag.local': '個人設定は<br />この端末に保存', 'hero.tag.review': '取引送信前に<br />自分で確認',
    'cap.historical': '端末上で動作', 'cap.realtime': '資金を預からない', 'cap.trade': 'TrueFixクラウド口座不要',
    'cap.news': '読み取り専用・シミュレーション対応', 'cap.instruments': '口座は元のサービスが管理', 'cap.analysis': '取引操作は自分で確認',
    'value.eyebrow': 'できること', 'value.title': '今の口座はそのまま。<br /><i>分散した作業を一つのアプリへ。</i>',
    'value.lede': 'TrueFixは今の証券会社や取引所と一緒に使います。口座や資金を移さず、一つのアプリで調査、アイデアのテスト、取引前確認を行えます。',
    'value.research.title': '市場情報をまとめて見る', 'value.research.body': '価格、ニュース、シグナル、口座情報を比較し、必要なときは元の情報源を開いて確認できます。',
    'value.strategy.title': 'AIに質問し、戦略を試す', 'value.strategy.body': 'AIアシスタントに情報を整理させたり、過去データやシミュレーションでルール戦略を試したりできます。',
    'value.execution.title': '送信前にすべて確認', 'value.execution.body': '取引操作を送る前に、サービス、口座、テスト・実取引、銘柄、手数料、リスクを確認できます。',
    'value.safety.title': 'TrueFixへ入金する必要はありません。', 'value.safety.body': '接続するサービスと権限は自分で選びます。口座と権限は引き続き証券会社や取引所が管理します。',
    'overview.eyebrow': '使い方', 'overview.title': '疑問から始めて、<br />必要な段階で止められます。',
    'overview.lede': '調査だけに使う、仮想資金で試す、口座とリスクを確認して実際の取引操作へ進む、という使い方を選べます。',
    'overview.what.title': '今のサービスを一つのアプリで接続', 'overview.what.body': '選んだ証券会社、取引所、相場データを接続し、TrueFixへ資金を移さずに情報をまとめて確認します。',
    'overview.who.title': 'すでに市場口座を持つ人向け', 'overview.who.body': '複数の市場サービスを使うトレーダー、戦略開発者、調査・リスクチーム向けです。購入銘柄を推薦したり、利益を約束したりするアプリではありません。',
    'overview.work.title': '調査 → 比較 → テスト → 確認 → 判断', 'overview.work.body': '情報源を確認し、アイデアを試し、口座、手数料、リスクを見てから送信するか判断します。',
    'overview.personas.disclosure': '以下は製品の利用例であり、顧客の推薦コメントではありません。利用できる機能は接続するサービスと口座により異なります。',
    'overview.maya.task': 'Mayaは暗号資産と米国株の情報を比較し、シグナルの元情報を開き、行動前に口座とリスクを確認します。',
    'overview.ren.role': '戦略開発者 · 東京', 'overview.ren.task': 'Renは固定した過去データで戦略を試し、結果を確認してから、実口座の前に仮想資金で動かします。',
    'overview.jiwoo.task': 'Ji-wooは取引権限を与えずにAIアシスタントへ市場情報の整理を依頼します。操作前には人が口座、手数料、リスクを確認します。',
    'provider.eyebrow': '対応サービス', 'provider.title': '証券会社、取引所、<br /><i>相場データを接続。</i>',
    'provider.note': '接続するサービスと口座は自分で選びます。表示・操作できる内容は、そのサービスの機能と口座権限によって異なります。',
    'provider.caveat': 'ロゴはTrueFixが接続対象とするサービスを示します。各社によるスポンサーや正式提携を意味しません。機能はサービスと口座によって異なります。',
    'product.lede': '三つの主要画面で、市場確認、情報源の確認、アイデアのテスト、口座操作の確認を行います。',
    'product.tab.workstation': '市場と取引', 'product.tab.workstationSub': '相場 · チャート · 注文',
    'product.tab.intelligence': 'リサーチ', 'product.tab.intelligenceSub': '情報源 · シグナル · 履歴', 'product.tab.quant': 'AIと戦略テスト', 'product.tab.quantSub': '質問 · テスト · 管理',
    'product.caption.workstation': '価格、板、ポジション、注文情報を一つの画面で確認し、接続中のサービスも明確に表示します。',
    'product.caption.intelligence': 'ニュースやシグナルの元情報を開き、情報を比較し、アイデアの変化を振り返ります。',
    'product.caption.quant': 'AIアシスタントに情報整理を依頼し、実口座に届く前に戦略をテストして確認します。',
    'film.title': '36秒で分かる<br />TrueFixの使い方。', 'film.lede': '市場調査、AIアシスタント、戦略テスト、安全確認、将来構想Market Twinを短く紹介します。',
    'film.caption': '製品プレビュー · 英語ナレーション · 音楽 · 多言語字幕',
    'principles.lede': 'TrueFixは入金を受け付けず、金融口座を開設しません。接続先、口座、権限、テスト・実取引の選択はすべて利用者が行います。',
    'principles.evidence.title': '接続でできることを自分で選ぶ', 'principles.evidence.body': '接続先の証券会社、取引所、データサービスが許可した相場・取引権限だけを利用できます。',
    'principles.execution.title': '取引を送る前に確認', 'principles.execution.body': '送信前に口座、銘柄、方向、数量、価格、手数料、リスクを確認します。結果が不明な場合は再送せず、既存注文を照会します。',
    'principles.ai.title': 'AIアシスタントには制限がある', 'principles.ai.body': 'AIアシスタントが使えるのは許可したツールだけです。調査権限は取引権限ではなく、AIの提案が自動的に承認済み注文になることもありません。',
    'architecture.title': '主なデータはこの端末に。<br />外部接続は自分で選択。', 'architecture.lede': 'TrueFixの主な個人設定は端末に保存されます。自分で設定した証券会社、取引所、相場データ、AIサービスだけに接続します。',
    'architecture.caption': '相場、ニュース、シグナル、口座操作をどのサービスが提供したか表示し、情報源を確認できます。',
    'architecture.link': '接続とデータの説明を見る',
    'modes.lede': 'まずはデータ閲覧と調査から。必要なときだけシミュレーション、バックグラウンド戦略、実取引を追加します。',
    'modes.quant.title': 'バックグラウンドで戦略を実行', 'modes.quant': 'デスクトップ画面を開き続けなくても、同じ口座とリスク制限でルール戦略を実行・テストできます。',
    'modes.ai': '許可したデータとツールだけを使って、AIアシスタントに市場情報の整理と説明を依頼します。',
    'about.lede': 'TrueFix Studioは、証券会社、取引所、相場データ、ルール戦略をすでに使っている人向けの独立したプレリリース・デスクトップアプリです。',
    'about.intro': 'ツール間の移動を減らし、情報源を確認しやすくし、AIと自動化を利用者の管理下に置くために開発しています。',
    'about.custody.title': '資金は証券会社や取引所に残る', 'about.custody.body': 'TrueFixはソフトウェアであり、証券会社、取引所、銀行、投資助言業者ではありません。入金を受け付けず、資金を預からず、利益を約束しません。',
    'closing.title': '口座を接続する前に、<br /><i>具体的な使い方を確認。</i>', 'closing.lede': 'ガイドでは、インストール、サービス接続、AIアシスタント、シミュレーション、実口座を使う前の確認事項を説明します。',
    'footer.tagline': '今の口座につなぐ投資リサーチ・取引支援ツール。'
  },
  ko: {
    'meta.title': 'TrueFix Studio — 계정을 연결해 조사·테스트·거래 확인',
    'meta.description': '사용 중인 증권사, 거래소와 시세 서비스를 연결해 한 데스크톱 앱에서 시장 조사, 전략 테스트와 거래 전 확인을 할 수 있습니다.',
    'meta.ogDescription': '기존 증권사, 거래소, 시세 서비스를 연결하세요. 자금을 TrueFix로 옮기지 않고 조사, 테스트, 거래 전 확인을 한곳에서 할 수 있습니다.',
    'nav.architecture': '연결 방식', 'a11y.providers': '연결 지원 증권사, 거래소, 데이터 서비스',
    'hero.eyebrow': '투자 리서치·거래 지원 데스크톱 앱 · 출시 전',
    'hero.title': '사용 중인 증권사와 거래소를 연결해<br /><i>조사, 테스트, 거래 관리를 한곳에서.</i>',
    'hero.lede': 'TrueFix Studio는 이미 증권사, 거래소 또는 시세 서비스를 쓰는 사람을 위한 앱입니다. 시장 조사, AI 도우미, 전략 테스트, 거래 전 확인을 하나의 데스크톱 앱에 모읍니다.',
    'hero.download': '어떻게 도움이 되는지 보기', 'hero.note': '자금은 증권사나 거래소에 그대로 · 읽기 전용 또는 모의 환경부터 시작',
    'hero.tag.local': '개인 설정은<br />이 기기에 저장', 'hero.tag.review': '거래 전송 전<br />직접 확인',
    'cap.historical': '내 기기에서 실행', 'cap.realtime': '자금을 보관하지 않음', 'cap.trade': 'TrueFix 클라우드 계정 불필요',
    'cap.news': '읽기 전용·모의 환경 지원', 'cap.instruments': '계정은 기존 서비스가 관리', 'cap.analysis': '거래 작업은 직접 확인',
    'value.eyebrow': '할 수 있는 일', 'value.title': '기존 계정은 그대로.<br /><i>흩어진 작업을 하나의 앱으로.</i>',
    'value.lede': 'TrueFix는 현재 증권사나 거래소와 함께 사용합니다. 계정과 자금을 옮기지 않고 한 앱에서 조사, 아이디어 테스트, 거래 전 확인을 할 수 있습니다.',
    'value.research.title': '시장 정보를 한곳에서 확인', 'value.research.body': '가격, 뉴스, 신호, 계정 정보를 비교하고 필요할 때 원본 출처를 열어 확인할 수 있습니다.',
    'value.strategy.title': 'AI에 묻고 전략을 테스트', 'value.strategy.body': 'AI 도우미에게 정보 정리를 맡기거나 과거·모의 데이터로 규칙 기반 전략을 먼저 시험할 수 있습니다.',
    'value.execution.title': '전송 전에 모든 작업 확인', 'value.execution.body': '거래 작업을 보내기 전에 서비스, 계정, 모의·실거래 구분, 종목, 수수료, 리스크를 확인합니다.',
    'value.safety.title': 'TrueFix에 돈을 입금할 필요가 없습니다.', 'value.safety.body': '연결할 외부 서비스와 권한은 직접 정합니다. 계정과 권한은 계속 증권사나 거래소가 관리합니다.',
    'overview.eyebrow': '사용 방법', 'overview.title': '질문에서 시작해<br />필요한 단계에서 멈추세요.',
    'overview.lede': '조사만 하거나, 가상 자금으로 아이디어를 시험하거나, 계정과 리스크를 확인한 뒤 실제 거래 작업으로 이어갈 수 있습니다.',
    'overview.what.title': '기존 서비스를 한 앱에서 연결', 'overview.what.body': '선택한 증권사, 거래소, 시세 서비스를 연결해 자금을 TrueFix로 옮기지 않고 정보를 함께 봅니다.',
    'overview.who.title': '이미 시장 계정을 가진 사람을 위한 도구', 'overview.who.body': '여러 시장 서비스를 쓰는 트레이더, 전략 개발자, 조사·리스크 팀을 위한 앱입니다. 무엇을 사야 하는지 추천하거나 수익을 약속하지 않습니다.',
    'overview.work.title': '조사 → 비교 → 테스트 → 확인 → 결정', 'overview.work.body': '정보 출처를 확인하고, 아이디어를 시험하고, 계정·수수료·리스크를 본 뒤 전송 여부를 결정합니다.',
    'overview.personas.disclosure': '아래 내용은 제품 활용 예시이며 고객 후기나 추천사가 아닙니다. 실제 기능은 연결한 서비스와 계정에 따라 다릅니다.',
    'overview.maya.task': 'Maya는 암호화폐와 미국 주식 정보를 비교하고, 신호의 원본 출처를 열어 본 뒤 계정과 리스크를 확인합니다.',
    'overview.ren.role': '전략 개발자 · 도쿄', 'overview.ren.task': 'Ren은 고정된 과거 데이터로 전략을 시험하고 결과를 확인한 뒤, 실제 계정 전에 가상 자금으로 실행합니다.',
    'overview.jiwoo.task': 'Ji-woo는 거래 권한 없이 AI 도우미에게 시장 정보 정리를 맡깁니다. 작업 전에는 사람이 계정, 수수료, 리스크를 확인합니다.',
    'provider.eyebrow': '지원 서비스', 'provider.title': '증권사, 거래소,<br /><i>시세 데이터를 연결.</i>',
    'provider.note': '연결할 서비스와 계정은 직접 선택합니다. 볼 수 있거나 할 수 있는 일은 해당 서비스의 기능과 계정 권한에 따라 달라집니다.',
    'provider.caveat': '로고는 TrueFix가 연결 대상으로 삼는 서비스를 나타냅니다. 해당 회사의 후원이나 공식 제휴를 뜻하지 않습니다. 기능은 서비스와 계정마다 다릅니다.',
    'product.lede': '세 가지 주요 화면에서 시장 확인, 정보 출처 확인, 아이디어 테스트, 계정 작업 검토를 할 수 있습니다.',
    'product.tab.workstation': '시장과 거래', 'product.tab.workstationSub': '시세 · 차트 · 주문',
    'product.tab.intelligence': '리서치', 'product.tab.intelligenceSub': '출처 · 신호 · 기록', 'product.tab.quant': 'AI와 전략 테스트', 'product.tab.quantSub': '질문 · 테스트 · 제어',
    'product.caption.workstation': '가격, 호가, 포지션, 주문 정보를 한 화면에서 보고 현재 연결된 서비스도 분명히 확인합니다.',
    'product.caption.intelligence': '뉴스와 신호의 원본 출처를 열고, 정보를 비교하며, 아이디어가 시간에 따라 어떻게 달라졌는지 봅니다.',
    'product.caption.quant': 'AI 도우미에게 정보 정리를 맡기고, 실제 계정에 닿기 전에 전략을 테스트하고 확인합니다.',
    'film.title': '36초로 보는<br />TrueFix의 역할.', 'film.lede': '시장 조사, AI 도우미, 전략 테스트, 안전 확인, 미래 Market Twin 구상을 짧게 소개합니다.',
    'film.caption': '제품 미리보기 · 영어 내레이션 · 음악 · 다국어 자막',
    'principles.lede': 'TrueFix는 입금을 받거나 금융 계정을 개설하지 않습니다. 연결 서비스, 계정, 권한, 모의·실거래 사용 여부를 모두 직접 정합니다.',
    'principles.evidence.title': '각 연결이 할 수 있는 일을 직접 선택', 'principles.evidence.body': '선택한 증권사, 거래소, 데이터 서비스가 허용한 시세·거래 권한만 사용할 수 있습니다.',
    'principles.execution.title': '거래 전송 전에 확인', 'principles.execution.body': '전송 전 계정, 종목, 방향, 수량, 가격, 수수료, 리스크를 확인합니다. 결과가 불분명하면 다시 보내지 않고 기존 주문을 조회합니다.',
    'principles.ai.title': 'AI 도우미에는 분명한 제한이 있음', 'principles.ai.body': 'AI 도우미는 허용한 도구만 사용할 수 있습니다. 조사 권한은 거래 권한이 아니며 AI 제안이 자동으로 승인 주문이 되지 않습니다.',
    'architecture.title': '주요 데이터는 이 기기에.<br />외부 연결은 직접 선택.', 'architecture.lede': 'TrueFix의 주요 개인 설정은 기기에 저장됩니다. 직접 설정한 증권사, 거래소, 시세, AI 서비스에만 연결합니다.',
    'architecture.caption': '시세, 뉴스, 신호, 계정 작업을 어느 서비스가 제공했는지 표시해 출처를 확인할 수 있습니다.',
    'architecture.link': '연결과 데이터 설명 보기',
    'modes.lede': '먼저 데이터 확인과 조사부터 시작하세요. 필요할 때만 모의 거래, 백그라운드 전략, 실제 거래를 추가합니다.',
    'modes.quant.title': '백그라운드 전략 실행', 'modes.quant': '데스크톱 창을 계속 열지 않아도 같은 계정과 리스크 제한으로 규칙 기반 전략을 실행하고 테스트합니다.',
    'modes.ai': '허용한 데이터와 도구만 사용해 AI 도우미에게 시장 정보 정리와 설명을 맡깁니다.',
    'about.lede': 'TrueFix Studio는 이미 증권사, 거래소, 시세 데이터, 규칙 기반 전략을 쓰는 사람을 위한 독립 프리릴리스 데스크톱 앱입니다.',
    'about.intro': '도구 전환을 줄이고, 정보 출처를 쉽게 확인하며, AI와 자동화를 사용자가 직접 통제할 수 있게 만들고 있습니다.',
    'about.custody.title': '자금은 증권사나 거래소에 그대로', 'about.custody.body': 'TrueFix는 소프트웨어이며 증권사, 거래소, 은행, 투자자문사가 아닙니다. 입금을 받거나 자금을 보관하거나 수익을 약속하지 않습니다.',
    'closing.title': '계정을 연결하기 전에<br /><i>구체적인 사용법을 확인하세요.</i>', 'closing.lede': '가이드에서 설치, 서비스 연결, AI 도우미, 모의 환경, 실제 계정 사용 전 확인 사항을 설명합니다.',
    'footer.tagline': '기존 계정에 연결하는 투자 리서치·거래 지원 도구.'
  }
};

Object.entries(plainLanguageCopy).forEach(([locale, values]) => Object.assign(translations[locale], values));

const workflowCopy = {
  "zh-CN": {
    "hero.eyebrow": "TRUEFIX STUDIO · 研究与交易工作台",
    "hero.title": "<span class=\"hero-action-word\">看行情、</span><span class=\"hero-action-word\">测策略、</span><span class=\"hero-action-word\">确认交易。</span><br /><i>不用来回切换软件。</i>",
    "hero.lede": "把行情、AI 生成策略、回测和交易前检查放在一起。从研究一个标的，到审核并部署策略，在同一个工作台继续。",
    "hero.download": "看看怎么用",
    "hero.source": "下载体验",
    "hero.note": "连接你已有的服务与账户 · 支持只读和模拟使用",
    "meta.title": "TrueFix Studio — 看行情、测策略、确认交易",
    "meta.description": "查看行情，让 AI 辅助生成策略，完成回测、审核后部署并监控运行。连接已有券商、交易所和数据服务，在一个工作台继续。",
    "meta.ogDescription": "查看行情，让 AI 辅助生成策略，完成回测、审核后部署并监控运行。连接已有券商、交易所和数据服务，在一个工作台继续。",
    "preview.label": "点击步骤，看看工作台里怎么做",
    "preview.disclosure": "产品界面示例 · 图中数据非实时",
    "preview.full": "查看完整画面",
    "preview.market": "看行情",
    "preview.research": "查信息",
    "preview.strategy": "AI 策略",
    "preview.trade": "确认交易",
    "preview.market.question": "价格动了，成交量和盘口呢？",
    "preview.market.body": "把图表、盘口和账户放在一起，先看清正在发生什么。",
    "preview.research.question": "这条消息从哪里来？",
    "preview.research.body": "查看信号和原始来源，再用 AI 协助整理信息与待核实的问题。",
    "preview.strategy.question": "把交易规则告诉 AI，接下来怎么部署？",
    "preview.strategy.body": "让 AI 辅助生成策略草案，经过校验、回测或回放后，审核部署方案，再明确启动并监控运行。",
    "preview.trade.question": "账户、数量、费用，核对了吗？",
    "preview.trade.body": "回到交易面板，检查订单和风险，再决定是否提交。",
    "value.eyebrow": "从一次价格异动开始",
    "value.title": "看到价格变了，<br /><i>接下来怎么做？</i>",
    "value.lede": "先查信息，再测试想法，最后检查订单。你可以只做研究，也可以按需要继续下一步。",
    "flow.1.title": "先看行情变化",
    "flow.1.body": "查看价格、成交量和盘口，确认市场与标的。",
    "flow.1.result": "看清：什么在变化",
    "flow.2.title": "查清信息来源",
    "flow.2.body": "打开消息和信号的来源，让 AI 协助整理相关信息。",
    "flow.2.result": "分清：事实与待核实的问题",
    "flow.3.title": "让 AI 生成并测试策略",
    "flow.3.body": "说明交易规则和风险限制，让 AI 辅助起草策略，再用历史数据或模拟环境验证。",
    "flow.3.result": "审核后部署，持续监控运行",
    "flow.4.title": "核对后再下单",
    "flow.4.body": "确认账户、环境、数量、费用和风险，再决定是否发送订单。",
    "flow.4.result": "决定：提交、修改，或继续观察",
    "value.safety.title": "账户和资金仍在你的券商或交易所。",
    "value.safety.body": "TrueFix 连接你选择的服务。可用功能取决于服务、权限和环境；当前提供预发布版本。",
    "closing.title": "打开工作台，<br /><i>从你关注的行情开始。</i>",
    "closing.lede": "先连接一个行情服务，查看熟悉的标的，再按需要尝试 AI、策略测试和模拟交易。",
    "closing.github": "按指南开始使用",
    "ai.eyebrow": "AI 策略生成与部署",
    "ai.title": "把交易规则告诉 AI，<br /><i>生成、测试，再部署策略。</i>",
    "ai.lede": "在 Desktop 的策略工程中，通过 Agent 描述你的目标。检查生成的策略和测试结果，再到部署页面核对方案、批准并启动。",
    "ai.example": "你可以这样向 AI 提需求",
    "ai.prompt": "帮我起草一份均线交叉策略，说明需要的数据、开平仓条件和风险限制。先用历史数据验证，部署前交给我确认。",
    "ai.1.title": "AI 生成草案",
    "ai.1.body": "说明标的、交易规则和约束，补充 AI 需要澄清的问题。",
    "ai.2.title": "校验与测试",
    "ai.2.body": "检查策略版本，用回测或回放查看行为、风险与测试结果。",
    "ai.3.title": "审核部署方案",
    "ai.3.body": "核对策略版本、数据来源、账户、运行环境和风险限制。",
    "ai.4.title": "批准并启动",
    "ai.4.body": "在 Desktop 批准部署方案，再明确启动已批准的部署。",
    "ai.5.title": "监控与暂停",
    "ai.5.body": "查看运行状态、日志和决策，需要时暂停或停止。",
    "ai.note": "生成策略不等于立即实盘执行。部署创建和 Live 启用在 Desktop 完成；H5 可监控、逐笔审批、暂停和停止。实际执行仍受账户权限与风控约束。",
    "ai.guide": "查看策略与部署指南 ↗",
    "demo.title": "从一句交易规则，到策略运行",
    "demo.disclosure": "流程演示 · 示例数据，非实时交易",
    "demo.step0": "描述需求",
    "demo.step1": "AI 生成",
    "demo.step2": "回测验证",
    "demo.step3": "审核部署",
    "demo.step4": "模拟运行",
    "demo.heading0": "先把你的交易规则说清楚",
    "demo.prompt": "帮我生成均线交叉策略，先回测，确认后再部署。",
    "demo.heading1": "AI 将规则整理成策略草案",
    "demo.entry": "入场条件",
    "demo.entryValue": "短均线上穿长均线",
    "demo.exit": "离场条件",
    "demo.exitValue": "短均线下穿长均线",
    "demo.risk": "风险限制",
    "demo.riskValue": "部署前确认仓位上限",
    "demo.heading2": "用历史数据检查策略表现",
    "demo.replay": "历史回放",
    "demo.testResult": "交易信号已标记 · 下一步审核结果",
    "demo.heading3": "核对方案，再批准启动",
    "demo.revision": "策略版本",
    "demo.revisionValue": "均线交叉 · v1",
    "demo.environment": "运行环境",
    "demo.environmentValue": "模拟账户",
    "demo.approval": "人工确认",
    "demo.approved": "已审核并批准 · 演示",
    "demo.heading4": "策略开始在模拟环境运行",
    "demo.running": "模拟运行中",
    "demo.log0": "收到行情更新",
    "demo.log1": "检查策略信号",
    "demo.log2": "记录模拟执行结果",
    "demo.pause": "暂停演示",
    "demo.resume": "继续演示",
    "demo.screens": "查看真实产品界面",
    "demo.steps": "流程演示步骤",
    "demo.reviewNote": "回测完成后仍需审核，部署不会自动获得批准。",
    "demo.workspace": "策略工作台",
    "demo.market": "行情与交易信号",
    "demo.draft": "策略草案",
    "demo.history": "历史回放",
    "demo.pending": "等待你的批准",
    "demo.active": "已批准 · 模拟运行",
    "demo.activity": "运行记录",
    "demo.waiting": "等待策略生成",
    "demo.check": "检查交易规则与仓位限制",
    "demo.pipeline": "数据 → 策略 → 风控 → 执行",
    "demo.status0": "生成中",
    "demo.status1": "策略就绪",
    "demo.status2": "回测中",
    "demo.status3": "待审批",
    "demo.status4": "模拟运行",
    "demo.input": "输入交易规则",
    "demo.name": "均线交叉",
    "demo.volume": "交易量",
    "demo.sample": "示例行情",
    "demo.signal": "策略信号",
    "demo.riskPass": "风险检查通过",
    "demo.order": "模拟订单已记录",
    "demo.human": "部署前需要人工审核",
    "demo.identity": "MA-001 · 同一策略，完整流程",
    "demo.equity": "示例收益",
    "demo.capital": "模拟本金 $10,000",
    "demo.equityNote": "虚构数据，仅演示收益变化，不代表实际或预期回报。",
    "art.label": "从想法，到策略运行",
    "art.title0": "把你的交易想法交给 AI",
    "art.body0": "分散的市场信号汇聚，你的交易规则成为起点。",
    "art.title1": "让 AI 把规则变成策略",
    "art.body1": "从条件到约束，一份可测试的策略逐渐成形。",
    "art.title2": "先验证，再向前",
    "art.body2": "用历史回测与回放，检查策略的行为和风险。",
    "art.title3": "下一步，由你批准",
    "art.body3": "审核策略与部署方案，确认后才启动运行。",
    "art.title4": "让策略运行，看结果变化",
    "art.body4": "模拟执行持续推进，观察收益变化与回撤。",
    "art.note": "概念动画 · 收益为虚构示例，不代表实际或预期回报。"
  },
  "en": {
    "hero.eyebrow": "TRUEFIX STUDIO · RESEARCH & TRADING",
    "hero.title": "Research. Test. Review your trade.<br /><i>Without switching apps.</i>",
    "hero.lede": "Bring market data, AI-assisted strategy creation, backtesting, and trade checks together. From researching an instrument to reviewing and deploying a strategy, keep working in one workspace.",
    "hero.download": "See the workflow",
    "hero.source": "Download and try",
    "hero.note": "Connect your existing services and accounts · Read-only and simulation supported",
    "meta.title": "TrueFix Studio — Research, test, and review trades",
    "meta.description": "Explore markets, draft strategies with AI, test them, then review, approve, and deploy. Monitor execution in one workspace connected to your existing services.",
    "meta.ogDescription": "Explore markets, draft strategies with AI, test them, then review, approve, and deploy. Monitor execution in one workspace connected to your existing services.",
    "preview.label": "Choose a step to explore the workspace",
    "preview.disclosure": "Example product screens · Data is not live",
    "preview.full": "View full screen",
    "preview.market": "Explore markets",
    "preview.research": "Check sources",
    "preview.strategy": "AI strategies",
    "preview.trade": "Review orders",
    "preview.market.question": "Price moved. What about volume and depth?",
    "preview.market.body": "See charts, market depth, and your account together to understand what is changing.",
    "preview.research.question": "Where did this information come from?",
    "preview.research.body": "Inspect signals and original sources, then ask AI to help organize information and open questions.",
    "preview.strategy.question": "Describe a trading rule to AI. How does it get deployed?",
    "preview.strategy.body": "Draft a strategy with AI, validate and backtest or replay it, review the deployment proposal, then explicitly activate and monitor it.",
    "preview.trade.question": "Account, size, fees: checked?",
    "preview.trade.body": "Return to the trading panel, review the order and risk, then decide whether to submit.",
    "value.eyebrow": "START WITH A PRICE MOVE",
    "value.title": "A price catches your eye.<br /><i>What do you do next?</i>",
    "value.lede": "Check the information, test an idea, then review the order. Stay with research or continue only as far as you need.",
    "flow.1.title": "See what changed",
    "flow.1.body": "Inspect price, volume, and depth for the selected market and instrument.",
    "flow.1.result": "Understand the market move",
    "flow.2.title": "Check the sources",
    "flow.2.body": "Open the sources behind news and signals. Ask AI to help organize relevant information.",
    "flow.2.result": "Separate facts from open questions",
    "flow.3.title": "Create and test with AI",
    "flow.3.body": "Describe trading rules and risk limits, ask AI to draft the strategy, then validate it with historical data or simulation.",
    "flow.3.result": "Review, deploy, and monitor",
    "flow.4.title": "Review before sending",
    "flow.4.body": "Check the account, environment, quantity, fees, and risk before deciding to send an order.",
    "flow.4.result": "Submit, revise, or keep watching",
    "value.safety.title": "Your accounts and money stay with your broker or exchange.",
    "value.safety.body": "TrueFix connects the services you choose. Features depend on the service, permissions, and environment. Currently available as a pre-release.",
    "closing.title": "Open your workspace.<br /><i>Start with a market you follow.</i>",
    "closing.lede": "Connect one market-data service, explore a familiar instrument, then try AI, strategy testing, and simulated trading as needed.",
    "closing.github": "Get started with the guide",
    "ai.eyebrow": "AI STRATEGY CREATION & DEPLOYMENT",
    "ai.title": "Tell AI your trading rules.<br /><i>Generate, test, then deploy.</i>",
    "ai.lede": "Describe your goal to the Agent in Desktop Strategy Engineering. Check the strategy and test results, then review the proposal in Deployment, approve it, and activate it.",
    "ai.example": "An example request to AI",
    "ai.prompt": "Draft a moving-average crossover strategy. Specify the data, entry and exit conditions, and risk limits. Validate it with historical data and ask me to review it before deployment.",
    "ai.1.title": "Draft with AI",
    "ai.1.body": "Specify instruments, rules, and constraints. Answer any clarification questions.",
    "ai.2.title": "Validate and test",
    "ai.2.body": "Inspect the strategy revision and use backtesting or replay to check behavior and risk.",
    "ai.3.title": "Review the proposal",
    "ai.3.body": "Check the revision, data sources, account, environment, and risk limits.",
    "ai.4.title": "Approve and activate",
    "ai.4.body": "Approve the deployment on Desktop, then explicitly activate the approved proposal.",
    "ai.5.title": "Monitor and pause",
    "ai.5.body": "Inspect runtime status, logs, and decisions. Pause or stop when needed.",
    "ai.note": "Generating a strategy does not start live execution. Deployment creation and Live arming are Desktop-only; H5 supports monitoring, per-decision approval, pause, and stop. Execution remains subject to account permissions and risk checks.",
    "ai.guide": "Read the strategy and deployment guide ↗",
    "demo.title": "From a trading rule to a running strategy",
    "demo.disclosure": "Workflow illustration · Sample data, no live trades",
    "demo.step0": "Describe",
    "demo.step1": "Generate",
    "demo.step2": "Backtest",
    "demo.step3": "Approve",
    "demo.step4": "Run",
    "demo.heading0": "Start with your trading rules",
    "demo.prompt": "Draft a moving-average crossover strategy. Backtest first; deploy after my approval.",
    "demo.heading1": "AI turns your rules into a draft",
    "demo.entry": "Entry rule",
    "demo.entryValue": "Fast average crosses above slow",
    "demo.exit": "Exit rule",
    "demo.exitValue": "Fast average crosses below slow",
    "demo.risk": "Risk limit",
    "demo.riskValue": "Confirm position cap before deployment",
    "demo.heading2": "Check the strategy against historical data",
    "demo.replay": "Historical replay",
    "demo.testResult": "Signals marked · Review the results next",
    "demo.heading3": "Review the proposal, then approve activation",
    "demo.revision": "Strategy revision",
    "demo.revisionValue": "MA crossover · v1",
    "demo.environment": "Environment",
    "demo.environmentValue": "Simulated account",
    "demo.approval": "Human approval",
    "demo.approved": "Reviewed and approved · Demo",
    "demo.heading4": "The strategy runs in a simulated environment",
    "demo.running": "Simulation running",
    "demo.log0": "Market update received",
    "demo.log1": "Strategy signal checked",
    "demo.log2": "Simulated execution recorded",
    "demo.pause": "Pause demo",
    "demo.resume": "Resume demo",
    "demo.screens": "Explore actual product screens",
    "demo.steps": "Walkthrough steps",
    "demo.reviewNote": "Backtest results still need review. Deployment approval is never automatic.",
    "demo.workspace": "Strategy workspace",
    "demo.market": "Market & signals",
    "demo.draft": "Strategy draft",
    "demo.history": "Historical replay",
    "demo.pending": "Awaiting your approval",
    "demo.active": "Approved · Simulation",
    "demo.activity": "Activity",
    "demo.waiting": "Awaiting strategy generation",
    "demo.check": "Review trading rules and position limits",
    "demo.pipeline": "Data → Strategy → Risk → Execution",
    "demo.status0": "Generating",
    "demo.status1": "Draft ready",
    "demo.status2": "Backtesting",
    "demo.status3": "Review needed",
    "demo.status4": "Simulation",
    "demo.input": "Describe your rules",
    "demo.name": "MA crossover",
    "demo.volume": "Volume",
    "demo.sample": "Sample market",
    "demo.signal": "Strategy signal",
    "demo.riskPass": "Risk check passed",
    "demo.order": "Simulated order recorded",
    "demo.human": "Human review required before deployment",
    "demo.identity": "MA-001 · One strategy, end to end",
    "demo.equity": "Illustrative P&L",
    "demo.capital": "Sample capital $10,000",
    "demo.equityNote": "Fictional data illustrating P&L changes, not actual or expected returns.",
    "art.label": "From an idea to a running strategy",
    "art.title0": "Start with your trading idea",
    "art.body0": "Market signals converge. Your trading rules set the direction.",
    "art.title1": "AI gives your rules a structure",
    "art.body1": "Conditions and constraints become a strategy you can test.",
    "art.title2": "Test before moving forward",
    "art.body2": "Use historical backtests and replay to check behavior and risk.",
    "art.title3": "The next step needs your approval",
    "art.body3": "Review the strategy and deployment proposal before activation.",
    "art.title4": "Put the strategy in motion",
    "art.body4": "Follow simulated execution, changing returns, and drawdowns.",
    "art.note": "Concept animation · Returns are fictional, not actual or expected performance."
  },
  "ja": {
    "hero.eyebrow": "TRUEFIX STUDIO · 調査と取引のワークスペース",
    "hero.title": "相場を調べ、戦略を試し、取引を確認。<br /><i>アプリを行き来せずに。</i>",
    "hero.lede": "相場データ、AIによる戦略作成、バックテスト、取引前の確認を一つに。銘柄の調査から戦略のレビューとデプロイまで、同じワークスペースで進められます。",
    "hero.download": "使い方を見る",
    "hero.source": "ダウンロードして試す",
    "hero.note": "利用中のサービスと口座を接続 · 読み取り専用・シミュレーション対応",
    "meta.title": "TrueFix Studio — 相場調査、戦略テスト、取引確認",
    "meta.description": "相場を確認し、AIで戦略を作成。テストと審査・承認を経てデプロイし、稼働状況を監視。既存のサービスを一つのワークスペースに接続します。",
    "meta.ogDescription": "相場を確認し、AIで戦略を作成。テストと審査・承認を経てデプロイし、稼働状況を監視。既存のサービスを一つのワークスペースに接続します。",
    "preview.label": "手順を選んで画面を見る",
    "preview.disclosure": "製品画面の例 · データはリアルタイムではありません",
    "preview.full": "画面全体を見る",
    "preview.market": "相場を見る",
    "preview.research": "情報源を確認",
    "preview.strategy": "AI戦略",
    "preview.trade": "注文を確認",
    "preview.market.question": "値動きに対して、出来高や板は？",
    "preview.market.body": "チャート、板情報、口座を並べて、何が変化しているかを確認します。",
    "preview.research.question": "この情報はどこから来た？",
    "preview.research.body": "シグナルと原典を確認し、AIに情報や未確認の点の整理を手伝ってもらいます。",
    "preview.strategy.question": "AIに取引ルールを伝えて、どうデプロイする？",
    "preview.strategy.body": "AIと戦略案を作り、検証とバックテストやリプレイを実施。デプロイ案を確認してから、明示的に起動し監視します。",
    "preview.trade.question": "口座、数量、手数料を確認した？",
    "preview.trade.body": "取引画面で注文とリスクを確認してから、送信するか判断します。",
    "value.eyebrow": "一つの値動きから",
    "value.title": "気になる値動き。<br /><i>次に何を確認する？</i>",
    "value.lede": "情報を調べ、アイデアを試し、注文を確認。調査だけに使うことも、必要な次の段階へ進むこともできます。",
    "flow.1.title": "相場の変化を見る",
    "flow.1.body": "市場と銘柄を確認し、価格、出来高、板情報を見ます。",
    "flow.1.result": "何が変化しているかを把握",
    "flow.2.title": "情報源を確認する",
    "flow.2.body": "ニュースやシグナルの原典を開き、AIで関連情報を整理します。",
    "flow.2.result": "事実と未確認の点を区別",
    "flow.3.title": "AIで戦略を作り、試す",
    "flow.3.body": "取引ルールとリスク上限を伝えて戦略案を作り、過去データやシミュレーションで検証します。",
    "flow.3.result": "レビュー後にデプロイし、監視",
    "flow.4.title": "確認してから注文",
    "flow.4.body": "口座、環境、数量、手数料、リスクを確認してから送信を判断します。",
    "flow.4.result": "送信、修正、または引き続き観察",
    "value.safety.title": "口座と資金は証券会社や取引所に残ります。",
    "value.safety.body": "接続するサービスは自分で選べます。機能はサービス、権限、環境に依存します。現在はプレリリース版です。",
    "closing.title": "ワークスペースを開いて、<br /><i>気になる相場から始めよう。</i>",
    "closing.lede": "まず相場サービスを一つ接続。身近な銘柄を確認し、必要に応じてAI、戦略テスト、模擬取引を試せます。",
    "closing.github": "ガイドに沿って始める",
    "ai.eyebrow": "AIによる戦略作成とデプロイ",
    "ai.title": "取引ルールをAIに伝える。<br /><i>作成、テスト、そしてデプロイ。</i>",
    "ai.lede": "Desktopの戦略エンジニアリングでAgentに目標を伝えます。戦略とテスト結果を確認し、デプロイ画面で提案をレビューして承認・起動します。",
    "ai.example": "AIへの依頼例",
    "ai.prompt": "移動平均クロス戦略の案を作ってください。必要なデータ、売買条件、リスク上限を明示し、過去データで検証してください。デプロイ前に私の確認を求めてください。",
    "ai.1.title": "AIと戦略案を作る",
    "ai.1.body": "銘柄、ルール、制約を伝え、不明点の確認に答えます。",
    "ai.2.title": "検証とテスト",
    "ai.2.body": "戦略バージョンを確認し、バックテストやリプレイで挙動とリスクを調べます。",
    "ai.3.title": "デプロイ案を確認",
    "ai.3.body": "バージョン、データ源、口座、環境、リスク上限を確認します。",
    "ai.4.title": "承認して起動",
    "ai.4.body": "Desktopで提案を承認し、承認済みデプロイを明示的に起動します。",
    "ai.5.title": "監視と一時停止",
    "ai.5.body": "実行状態、ログ、判断を確認し、必要に応じて一時停止・停止します。",
    "ai.note": "戦略作成だけで実取引は始まりません。デプロイ作成とLive有効化はDesktopで行います。H5は監視、判断ごとの承認、一時停止・停止に対応します。執行には口座権限とリスク確認が適用されます。",
    "ai.guide": "戦略とデプロイのガイドを見る ↗",
    "demo.title": "取引ルールから戦略の稼働まで",
    "demo.disclosure": "フロー紹介 · サンプルデータ・実取引なし",
    "demo.step0": "要望",
    "demo.step1": "AI作成",
    "demo.step2": "テスト",
    "demo.step3": "承認",
    "demo.step4": "稼働",
    "demo.heading0": "まず取引ルールを伝える",
    "demo.prompt": "移動平均クロス戦略を作成。先にバックテストし、私の承認後にデプロイ。",
    "demo.heading1": "AIがルールを戦略案にまとめる",
    "demo.entry": "エントリー",
    "demo.entryValue": "短期線が長期線を上抜け",
    "demo.exit": "エグジット",
    "demo.exitValue": "短期線が長期線を下抜け",
    "demo.risk": "リスク制限",
    "demo.riskValue": "デプロイ前に保有上限を確認",
    "demo.heading2": "過去データで戦略を検証",
    "demo.replay": "過去データのリプレイ",
    "demo.testResult": "シグナルを表示 · 次に結果を審査",
    "demo.heading3": "計画を確認して起動を承認",
    "demo.revision": "戦略バージョン",
    "demo.revisionValue": "移動平均クロス · v1",
    "demo.environment": "実行環境",
    "demo.environmentValue": "シミュレーション口座",
    "demo.approval": "利用者の承認",
    "demo.approved": "審査・承認済み · デモ",
    "demo.heading4": "シミュレーション環境で戦略が稼働",
    "demo.running": "シミュレーション稼働中",
    "demo.log0": "相場データを受信",
    "demo.log1": "戦略シグナルを確認",
    "demo.log2": "模擬執行結果を記録",
    "demo.pause": "デモを一時停止",
    "demo.resume": "デモを再開",
    "demo.screens": "実際の製品画面を見る",
    "demo.steps": "紹介のステップ",
    "demo.reviewNote": "バックテスト後も審査が必要です。デプロイが自動承認されることはありません。",
    "demo.workspace": "戦略ワークスペース",
    "demo.market": "相場とシグナル",
    "demo.draft": "戦略案",
    "demo.history": "過去データのリプレイ",
    "demo.pending": "あなたの承認待ち",
    "demo.active": "承認済み · 模擬実行",
    "demo.activity": "稼働ログ",
    "demo.waiting": "戦略の作成待ち",
    "demo.check": "取引ルールと保有上限を確認",
    "demo.pipeline": "データ → 戦略 → リスク → 執行",
    "demo.status0": "作成中",
    "demo.status1": "戦略案完成",
    "demo.status2": "検証中",
    "demo.status3": "審査待ち",
    "demo.status4": "模擬実行",
    "demo.input": "取引ルールを入力",
    "demo.name": "移動平均クロス",
    "demo.volume": "出来高",
    "demo.sample": "サンプル相場",
    "demo.signal": "戦略シグナル",
    "demo.riskPass": "リスク確認済み",
    "demo.order": "模擬注文を記録",
    "demo.human": "デプロイ前に利用者の審査が必要",
    "demo.identity": "MA-001 · 一つの戦略を最後まで",
    "demo.equity": "損益の例",
    "demo.capital": "模擬元本 $10,000",
    "demo.equityNote": "架空データによる損益の例です。実績や期待リターンではありません。",
    "art.label": "アイデアから戦略の稼働へ",
    "art.title0": "取引のアイデアをAIに伝える",
    "art.body0": "市場のシグナルが集まり、あなたのルールが出発点になる。",
    "art.title1": "AIがルールを戦略にする",
    "art.body1": "条件と制約から、検証できる戦略が形になる。",
    "art.title2": "先に検証してから進む",
    "art.body2": "過去データのテストとリプレイで、動作とリスクを確認。",
    "art.title3": "次の一歩は、あなたの承認で",
    "art.body3": "戦略とデプロイ計画を審査し、確認後に起動する。",
    "art.title4": "戦略を動かし、変化を見る",
    "art.body4": "模擬執行を追い、損益の変化とドローダウンを観察。",
    "art.note": "概念アニメーション · 損益は架空の例で、実績や期待リターンではありません。"
  },
  "ko": {
    "hero.eyebrow": "TRUEFIX STUDIO · 리서치와 거래 워크스페이스",
    "hero.title": "시세를 보고, 전략을 시험하고, 거래를 확인하세요.<br /><i>앱을 오가지 않고.</i>",
    "hero.lede": "시세, AI 전략 생성, 백테스트와 거래 전 확인을 한곳에 모았습니다. 종목 리서치부터 전략 검토와 배포까지 같은 워크스페이스에서 이어가세요.",
    "hero.download": "사용 흐름 보기",
    "hero.source": "다운로드하고 사용하기",
    "hero.note": "기존 서비스와 계정 연결 · 읽기 전용 및 시뮬레이션 지원",
    "meta.title": "TrueFix Studio — 시세 리서치, 전략 테스트, 거래 확인",
    "meta.description": "시세 확인부터 AI 전략 초안 생성, 테스트, 검토·승인 후 배포와 실행 모니터링까지. 기존 서비스를 한 워크스페이스에 연결하세요.",
    "meta.ogDescription": "시세 확인부터 AI 전략 초안 생성, 테스트, 검토·승인 후 배포와 실행 모니터링까지. 기존 서비스를 한 워크스페이스에 연결하세요.",
    "preview.label": "단계를 선택해 작업 화면을 살펴보세요",
    "preview.disclosure": "제품 화면 예시 · 실시간 데이터가 아닙니다",
    "preview.full": "전체 화면 보기",
    "preview.market": "시세 보기",
    "preview.research": "출처 확인",
    "preview.strategy": "AI 전략",
    "preview.trade": "주문 확인",
    "preview.market.question": "가격이 움직였습니다. 거래량과 호가창은?",
    "preview.market.body": "차트, 호가창과 계정을 함께 보며 무엇이 달라졌는지 확인합니다.",
    "preview.research.question": "이 정보는 어디에서 왔을까요?",
    "preview.research.body": "신호와 원본 출처를 확인하고 AI로 정보와 추가 확인할 내용을 정리합니다.",
    "preview.strategy.question": "AI에게 거래 규칙을 설명한 뒤, 어떻게 배포할까요?",
    "preview.strategy.body": "AI로 전략 초안을 만들고 검증과 백테스트 또는 리플레이를 거칩니다. 배포안을 검토한 뒤 명시적으로 시작하고 모니터링합니다.",
    "preview.trade.question": "계정, 수량과 수수료를 확인했나요?",
    "preview.trade.body": "거래 화면에서 주문과 리스크를 검토하고 제출 여부를 결정합니다.",
    "value.eyebrow": "한 번의 가격 변화에서 시작",
    "value.title": "눈에 띄는 가격 변화.<br /><i>다음에는 무엇을 할까요?</i>",
    "value.lede": "정보를 확인하고, 아이디어를 시험한 뒤, 주문을 검토하세요. 리서치만 하거나 필요한 단계까지 진행할 수 있습니다.",
    "flow.1.title": "시세 변화 확인",
    "flow.1.body": "시장과 종목을 확인하고 가격, 거래량과 호가창을 살펴봅니다.",
    "flow.1.result": "무엇이 변했는지 파악",
    "flow.2.title": "정보 출처 확인",
    "flow.2.body": "뉴스와 신호의 원본 출처를 열고 AI로 관련 정보를 정리합니다.",
    "flow.2.result": "사실과 확인할 내용을 구분",
    "flow.3.title": "AI로 전략 생성 및 테스트",
    "flow.3.body": "거래 규칙과 리스크 한도를 설명해 전략 초안을 만들고 과거 데이터나 시뮬레이션으로 검증합니다.",
    "flow.3.result": "검토 후 배포하고 모니터링",
    "flow.4.title": "검토 후 주문",
    "flow.4.body": "계정, 환경, 수량, 수수료와 리스크를 확인하고 주문 전송 여부를 결정합니다.",
    "flow.4.result": "제출, 수정 또는 계속 관찰",
    "value.safety.title": "계정과 자금은 증권사나 거래소에 그대로 있습니다.",
    "value.safety.body": "연결할 서비스는 직접 선택합니다. 기능은 서비스, 권한과 환경에 따라 달라집니다. 현재 출시 전 버전입니다.",
    "closing.title": "워크스페이스를 열고,<br /><i>관심 있는 시세부터 시작하세요.</i>",
    "closing.lede": "시세 서비스를 하나 연결하고 익숙한 종목을 살펴본 뒤 AI, 전략 테스트와 모의 거래를 필요에 따라 사용해 보세요.",
    "closing.github": "가이드로 시작하기",
    "ai.eyebrow": "AI 전략 생성과 배포",
    "ai.title": "거래 규칙을 AI에게 설명하세요.<br /><i>생성하고, 테스트하고, 배포하세요.</i>",
    "ai.lede": "Desktop 전략 엔지니어링에서 Agent에게 목표를 설명합니다. 전략과 테스트 결과를 확인한 뒤 배포 화면에서 제안을 검토하고 승인해 시작합니다.",
    "ai.example": "AI에게 요청하는 예시",
    "ai.prompt": "이동평균 교차 전략 초안을 만들어 주세요. 필요한 데이터, 진입·청산 조건과 리스크 한도를 명시하고 과거 데이터로 검증해 주세요. 배포 전에는 제 확인을 요청하세요.",
    "ai.1.title": "AI로 초안 생성",
    "ai.1.body": "종목, 규칙과 제약을 설명하고 추가 확인 질문에 답합니다.",
    "ai.2.title": "검증과 테스트",
    "ai.2.body": "전략 버전을 확인하고 백테스트나 리플레이로 동작과 리스크를 살펴봅니다.",
    "ai.3.title": "배포안 검토",
    "ai.3.body": "버전, 데이터 출처, 계정, 환경과 리스크 한도를 확인합니다.",
    "ai.4.title": "승인 후 시작",
    "ai.4.body": "Desktop에서 배포안을 승인하고 승인된 배포를 명시적으로 시작합니다.",
    "ai.5.title": "모니터링과 일시정지",
    "ai.5.body": "실행 상태, 로그와 결정을 확인하고 필요하면 일시정지하거나 중지합니다.",
    "ai.note": "전략 생성만으로 실거래가 시작되지는 않습니다. 배포 생성과 Live 활성화는 Desktop에서 수행합니다. H5는 모니터링, 결정별 승인, 일시정지와 중지를 지원하며 실행에는 계정 권한과 리스크 검사가 적용됩니다.",
    "ai.guide": "전략 및 배포 가이드 보기 ↗",
    "demo.title": "거래 규칙에서 전략 실행까지",
    "demo.disclosure": "과정 데모 · 예시 데이터, 실제 거래 아님",
    "demo.step0": "요청",
    "demo.step1": "AI 생성",
    "demo.step2": "백테스트",
    "demo.step3": "승인",
    "demo.step4": "실행",
    "demo.heading0": "먼저 거래 규칙을 설명하세요",
    "demo.prompt": "이동평균 교차 전략을 생성하고 먼저 백테스트해 줘. 내 승인 후 배포해.",
    "demo.heading1": "AI가 규칙을 전략 초안으로 정리",
    "demo.entry": "진입 조건",
    "demo.entryValue": "단기선이 장기선을 상향 돌파",
    "demo.exit": "청산 조건",
    "demo.exitValue": "단기선이 장기선을 하향 돌파",
    "demo.risk": "위험 제한",
    "demo.riskValue": "배포 전 포지션 한도 확인",
    "demo.heading2": "과거 데이터로 전략 검증",
    "demo.replay": "과거 데이터 리플레이",
    "demo.testResult": "신호 표시 완료 · 다음은 결과 검토",
    "demo.heading3": "계획을 검토하고 실행 승인",
    "demo.revision": "전략 버전",
    "demo.revisionValue": "이동평균 교차 · v1",
    "demo.environment": "실행 환경",
    "demo.environmentValue": "모의 계정",
    "demo.approval": "사용자 승인",
    "demo.approved": "검토 및 승인 완료 · 데모",
    "demo.heading4": "모의 환경에서 전략 실행",
    "demo.running": "모의 실행 중",
    "demo.log0": "시세 업데이트 수신",
    "demo.log1": "전략 신호 확인",
    "demo.log2": "모의 실행 결과 기록",
    "demo.pause": "데모 일시 정지",
    "demo.resume": "데모 재개",
    "demo.screens": "실제 제품 화면 보기",
    "demo.steps": "데모 단계",
    "demo.reviewNote": "백테스트 후에도 검토가 필요합니다. 배포는 자동 승인되지 않습니다.",
    "demo.workspace": "전략 워크스페이스",
    "demo.market": "시세 및 신호",
    "demo.draft": "전략 초안",
    "demo.history": "과거 데이터 리플레이",
    "demo.pending": "사용자 승인 대기",
    "demo.active": "승인 완료 · 모의 실행",
    "demo.activity": "실행 기록",
    "demo.waiting": "전략 생성 대기",
    "demo.check": "거래 규칙과 포지션 한도 확인",
    "demo.pipeline": "데이터 → 전략 → 위험 → 실행",
    "demo.status0": "생성 중",
    "demo.status1": "초안 준비",
    "demo.status2": "백테스트 중",
    "demo.status3": "검토 필요",
    "demo.status4": "모의 실행",
    "demo.input": "거래 규칙 입력",
    "demo.name": "이동평균 교차",
    "demo.volume": "거래량",
    "demo.sample": "예시 시세",
    "demo.signal": "전략 신호",
    "demo.riskPass": "위험 확인 통과",
    "demo.order": "모의 주문 기록",
    "demo.human": "배포 전 사용자 검토 필요",
    "demo.identity": "MA-001 · 하나의 전략, 전체 과정",
    "demo.equity": "예시 손익",
    "demo.capital": "모의 원금 $10,000",
    "demo.equityNote": "손익 변화를 보여주는 가상 데이터이며 실제 또는 예상 수익이 아닙니다.",
    "art.label": "아이디어에서 전략 실행까지",
    "art.title0": "거래 아이디어를 AI에 전달",
    "art.body0": "시장 신호가 모이고, 거래 규칙이 출발점이 됩니다.",
    "art.title1": "AI가 규칙을 전략으로 구성",
    "art.body1": "조건과 제약이 모여 테스트할 전략이 됩니다.",
    "art.title2": "먼저 검증하고 다음으로",
    "art.body2": "과거 데이터 테스트와 리플레이로 동작과 위험을 확인합니다.",
    "art.title3": "다음 단계는 사용자의 승인",
    "art.body3": "전략과 배포 계획을 검토한 뒤 실행을 승인합니다.",
    "art.title4": "전략을 실행하고 변화 관찰",
    "art.body4": "모의 실행을 따라 손익 변화와 낙폭을 관찰합니다.",
    "art.note": "컨셉 애니메이션 · 수익은 가상 예시이며 실제 또는 예상 성과가 아닙니다."
  }
};
Object.entries(workflowCopy).forEach(([locale, values]) => Object.assign(translations[locale], values));

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

  const languageCurrent = document.querySelector('[data-language-current]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  if (languageCurrent) languageCurrent.textContent = LANGUAGE_NAMES[locale];
  if (languageToggle) languageToggle.setAttribute('aria-label', `${dictionary['language.label']}: ${LANGUAGE_NAMES[locale]}`);
  document.querySelectorAll('[data-language-option]').forEach((option) => {
    const selected = option.dataset.languageOption === locale;
    option.setAttribute('aria-selected', String(selected));
  });

  const film = document.querySelector('[data-film]');
  Array.from(film?.textTracks || []).forEach((track) => {
    track.mode = normalizeLanguage(track.language) === locale ? 'showing' : 'disabled';
  });

  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Preference remains session-local. */ }
  }
  window.TrueFixLocale?.activate(locale);
}

const initialLanguage = window.TrueFixLocale?.pathLanguage() || getSavedLanguage() || detectBrowserLanguage();
translatePage(initialLanguage);

function detectPlatform() {
  const platform = String(navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || '').toLowerCase();
  if (platform.includes('win')) return 'windows';
  if (platform.includes('mac')) return 'macos';
  if (platform.includes('linux')) return 'linux';
  return null;
}

const currentPlatform = detectPlatform();
const recommendedCard = currentPlatform ? document.querySelector(`[data-platform-card="${currentPlatform}"]`) : null;
if (recommendedCard) {
  recommendedCard.classList.add('is-recommended');
  const badge = recommendedCard.querySelector('[data-recommended]');
  if (badge) badge.hidden = false;
}

const RELEASE_API_URL = 'https://api.github.com/repos/truefix-labs/truefix-labs.github.io/releases/tags/nightly';
const releaseAssetPatterns = {
  'mac-dmg': /^macos-.*_aarch64\.dmg$/i,
  'windows-exe': /^windows-.*_x64-setup\.exe$/i,
  'windows-msi': /^windows-.*_x64(?:_[^.]+)?\.msi$/i,
  'linux-appimage': /^linux-.*_amd64\.appimage$/i,
  'linux-deb': /^linux-.*_amd64\.deb$/i
};

function formatFileSize(bytes) {
  return `${(Number(bytes) / (1024 * 1024)).toFixed(1)} MB`;
}

async function refreshNightlyRelease() {
  try {
    const response = await fetch(RELEASE_API_URL, { headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) return;
    const release = await response.json();
    const assets = Array.isArray(release.assets) ? release.assets : [];

    Object.entries(releaseAssetPatterns).forEach(([kind, pattern]) => {
      const asset = assets.find((item) => pattern.test(item.name));
      if (!asset) return;
      document.querySelectorAll(`[data-release-asset="${kind}"]`).forEach((link) => {
        link.href = asset.browser_download_url;
        link.title = asset.name;
      });
      document.querySelectorAll(`[data-release-size="${kind}"]`).forEach((label) => {
        label.textContent = formatFileSize(asset.size);
      });
    });

    const packageAsset = assets.find((asset) => /_(\d+\.\d+\.\d+)_/.test(asset.name));
    const version = packageAsset?.name.match(/_(\d+\.\d+\.\d+)_/)?.[1];
    if (version) document.querySelectorAll('[data-release-version]').forEach((label) => { label.textContent = version; });

    const published = release.published_at || release.updated_at;
    if (published) {
      const date = published.slice(0, 10);
      document.querySelectorAll('[data-release-date]').forEach((label) => {
        label.textContent = date;
        label.setAttribute('datetime', date);
      });
    }
  } catch {
    // Static links remain available when the GitHub API is unavailable or rate-limited.
  }
}

refreshNightlyRelease();

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

const languagePicker = document.querySelector('[data-language-picker]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageMenu = document.querySelector('[data-language-menu]');
const languageOptions = [...document.querySelectorAll('[data-language-option]')];

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

languageToggle?.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
  event.preventDefault();
  setLanguageMenu(true, true);
});

languageOptions.forEach((option, index) => {
  option.addEventListener('click', () => {
    if (window.TrueFixLocale) {
      window.TrueFixLocale.navigate(option.dataset.languageOption);
      return;
    }
    document.documentElement.classList.add('language-changing');
    translatePage(option.dataset.languageOption, true);
    setLanguageMenu(false);
    languageToggle?.focus();
    window.setTimeout(() => document.documentElement.classList.remove('language-changing'), 260);
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
  if (languageToggle?.getAttribute('aria-expanded') === 'true') {
    setLanguageMenu(false);
    languageToggle.focus();
  }
  setMenu(false);
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

// Explore actual product views without simulating account data or trading actions.
const previewTabs = [...document.querySelectorAll('[data-preview-tab]')];
function showPreview(tab, focus = false) {
  previewTabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
previewTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showPreview(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? previewTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + previewTabs.length) % previewTabs.length;
    showPreview(previewTabs[next], true);
  });
});
