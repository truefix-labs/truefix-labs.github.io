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
    'nav.product': 'What it does', 'nav.principles': 'Safety', 'nav.architecture': 'Architecture', 'nav.modes': 'Use cases', 'nav.about': 'About us', 'nav.support': 'Support', 'nav.feedback': 'Feedback', 'nav.guide': 'User guide',
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
    'nav.product': '功能', 'nav.principles': '安全', 'nav.architecture': '架构', 'nav.modes': '使用方式', 'nav.about': '关于我们', 'nav.support': '技术支持', 'nav.feedback': '反馈交流', 'nav.guide': '使用指南',
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
    'nav.product': '기능', 'nav.principles': '안전', 'nav.architecture': '아키텍처', 'nav.modes': '사용 방식', 'nav.about': '소개', 'nav.support': '기술 지원', 'nav.feedback': '피드백', 'nav.guide': '사용 가이드',
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
    'nav.product': '機能', 'nav.principles': '安全性', 'nav.architecture': '構成', 'nav.modes': '利用方法', 'nav.about': '私たちについて', 'nav.support': 'サポート', 'nav.feedback': 'フィードバック', 'nav.guide': '利用ガイド',
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
}

const initialLanguage = getSavedLanguage() || detectBrowserLanguage();
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
