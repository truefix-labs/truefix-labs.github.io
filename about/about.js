const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];
const LANGUAGE_NAMES = { 'zh-CN': '简体中文', ja: '日本語', ko: '한국어', en: 'English' };

const copy = {
  en: {
    'meta.title':'TrueFix Studio — About us','meta.description':'About TrueFix Studio: why the project exists, the perspectives shaping it, and the boundaries that guide the product.',
    'a11y.skip':'Skip to content','a11y.menu':'Open navigation','a11y.language':'Language','nav.guide':'User guide','nav.support':'Support','nav.home':'Home','nav.about':'About us','nav.feedback':'Feedback',
    'hero.eyebrow':'ABOUT TRUEFIX STUDIO','hero.title':'A practical layer<br /><i>above the platforms you use.</i>','hero.lede':'TrueFix Studio is an independent, pre-release software project. We are building it to reduce tool switching, keep information sources visible, and make automated actions easier to inspect and control.','hero.not':'TrueFix is software—not a broker, exchange, bank, custodian, or investment adviser.','hero.guide':'See how the product works ↗',
    'purpose.eyebrow':'01 / PURPOSE','purpose.title':'Why we are<br />building TrueFix.','purpose.context.title':'Less fragmented context','purpose.context.body':'Market data, research, strategies, accounts, and risk checks often live in separate tools. TrueFix brings the workflow together while keeping the original Provider visible.','purpose.control.title':'More control before action','purpose.control.body':'Users can stop at research, stay read-only, test in simulation, or configure a reviewed execution path. Every step should be explicit.','purpose.tools.title':'AI and Quant as tools','purpose.tools.body':'Agents and strategies should operate with clear data, tool, budget, account, and risk limits—not open-ended authority.',
    'people.eyebrow':'02 / PEOPLE & PERSPECTIVES','people.title':'The perspectives<br />shaping the project.','people.note':'These profiles represent the disciplines and viewpoints used to explain and shape the project. They are project personas, not an employee directory or customer testimonials.',
    'people.elias.role':'Market Infrastructure','people.elias.bio':'Focuses on instrument identity, routing evidence, and reconciling execution outcomes across providers.','people.elias.alt':'Portrait of Elias Navarro',
    'people.chen.role':'Data Integrity','people.chen.bio':'Focuses on market identifiers, data revisions, and keeping cross-provider data lineage understandable.','people.chen.alt':'Portrait of Chen Wei',
    'people.park.role':'Runtime Reliability','people.park.bio':'Focuses on bounded event delivery, observable failures, and safe recovery under pressure.','people.park.alt':'Portrait of Park Min-seo',
    'people.amara.role':'Systems Architecture','people.amara.bio':'Focuses on Provider boundaries, fault isolation, and predictable recovery across the system.','people.amara.alt':'Portrait of Amara Okafor',
    'people.sora.role':'Human Factors & Risk','people.sora.bio':'Focuses on interfaces that show uncertainty, permission, and risk before a user acts.','people.sora.alt':'Portrait of Sora Kimura',
    'people.leila.role':'AI & Quant Safety','people.leila.bio':'Focuses on limited Agent tools, reproducible strategy runs, and decisions that can be reviewed later.','people.leila.alt':'Portrait of Leila Haddad',
    'boundaries.eyebrow':'03 / PROJECT BOUNDARIES','boundaries.title':'What stays<br />under your control.','boundaries.local.title':'Local-first profile','boundaries.local.body':'The current product does not require a TrueFix cloud account. You configure the outside services you want to use.','boundaries.funds.title':'Funds stay with the Provider','boundaries.funds.body':'TrueFix does not accept deposits or take custody of user funds.','boundaries.review.title':'Review remains your responsibility','boundaries.review.body':'AI assistance and automation do not replace account permissions, risk checks, or the user’s responsibility to review an action.',
    'cta.copy':'TrueFix Studio is still before its first stable release. Read the guide, start read-only or simulated, and tell us what remains unclear.','cta.guide':'Open the user guide ↗','cta.feedback':'Feedback & discussions ↗','footer.copy':'TrueFix Labs · Pre-release software','footer.privacy':'Privacy'
  },
  'zh-CN': {
    'meta.title':'TrueFix Studio — 关于我们','meta.description':'了解 TrueFix Studio：项目为何存在、塑造项目的专业视角，以及产品坚持的边界。',
    'a11y.skip':'跳到正文','a11y.menu':'打开导航','a11y.language':'语言','nav.guide':'使用指南','nav.support':'技术支持','nav.home':'首页','nav.about':'关于我们','nav.feedback':'反馈交流',
    'hero.eyebrow':'关于 TRUEFIX STUDIO','hero.title':'在你已有的平台之上，<br /><i>增加一层实用工具。</i>','hero.lede':'TrueFix Studio 是一个独立的预发布软件项目。我们希望减少工具切换，让信息来源始终可见，并让自动化操作更容易检查和控制。','hero.not':'TrueFix 是软件，不是券商、交易所、银行、资金托管方或投资顾问。','hero.guide':'了解产品如何工作 ↗',
    'purpose.eyebrow':'01 / 项目目标','purpose.title':'我们为什么<br />开发 TrueFix。','purpose.context.title':'减少信息割裂','purpose.context.body':'行情、研究、策略、账户和风险检查通常散落在不同工具里。TrueFix 把流程连接起来，同时保留原始 Provider。','purpose.control.title':'行动前有更多控制','purpose.control.body':'用户可以停留在研究和只读模式，在模拟环境测试，或配置经过审查的执行流程。每一步都应该明确。','purpose.tools.title':'把 AI 和量化当作工具','purpose.tools.body':'Agent 和策略应该在明确的数据、工具、预算、账户与风险限制内运行，而不是拥有无限权限。',
    'people.eyebrow':'02 / 人物与专业视角','people.title':'塑造项目的<br />不同专业视角。','people.note':'这些人物用于代表和说明参与项目设计的专业领域与观点，是项目角色形象，并非员工名录或客户评价。',
    'people.elias.role':'市场基础设施','people.elias.bio':'关注标的身份、路由依据，以及跨 Provider 执行结果的核对。','people.elias.alt':'Elias Navarro 的人物肖像',
    'people.chen.role':'数据完整性','people.chen.bio':'关注市场标识、数据修订，以及让跨 Provider 数据来源保持清晰。','people.chen.alt':'陈玮的人物肖像',
    'people.park.role':'运行时可靠性','people.park.bio':'关注有界事件传递、可观测故障与压力情况下的安全恢复。','people.park.alt':'Park Min-seo 的人物肖像',
    'people.amara.role':'系统架构','people.amara.bio':'关注 Provider 边界、故障隔离与整个系统的可预测恢复。','people.amara.alt':'Amara Okafor 的人物肖像',
    'people.sora.role':'人因与风险','people.sora.bio':'关注在用户行动前清楚展示不确定性、权限与风险的界面。','people.sora.alt':'Sora Kimura 的人物肖像',
    'people.leila.role':'AI 与量化安全','people.leila.bio':'关注受限 Agent 工具、可复现策略运行和可以事后审查的决策。','people.leila.alt':'Leila Haddad 的人物肖像',
    'boundaries.eyebrow':'03 / 项目边界','boundaries.title':'哪些事情始终<br />由你控制。','boundaries.local.title':'本地优先的配置','boundaries.local.body':'当前产品不要求 TrueFix 云账户。需要使用哪些外部服务，由你配置。','boundaries.funds.title':'资金留在 Provider','boundaries.funds.body':'TrueFix 不接受入金，也不托管用户资金。','boundaries.review.title':'审查仍是你的责任','boundaries.review.body':'AI 辅助和自动化不会替代账户权限、风险检查，也不会免除用户审查操作的责任。',
    'cta.copy':'TrueFix Studio 仍处于首个稳定版本发布之前。请先阅读指南，从只读或模拟开始，并告诉我们哪些地方仍不清楚。','cta.guide':'打开使用指南 ↗','cta.feedback':'反馈与交流 ↗','footer.copy':'TrueFix Labs · 首版发布前软件','footer.privacy':'隐私政策'
  },
  ja: {
    'meta.title':'TrueFix Studio — 私たちについて','meta.description':'TrueFix Studioの目的、プロジェクトを形作る視点、製品の境界について紹介します。',
    'a11y.skip':'本文へ移動','a11y.menu':'ナビゲーションを開く','a11y.language':'言語','nav.guide':'利用ガイド','nav.support':'サポート','nav.home':'ホーム','nav.about':'私たちについて','nav.feedback':'フィードバック',
    'hero.eyebrow':'TRUEFIX STUDIOについて','hero.title':'今のサービスの上に加える、<br /><i>実用的なレイヤー。</i>','hero.lede':'TrueFix Studioは独立したプレリリース・ソフトウェアプロジェクトです。ツールの切り替えを減らし、情報源を見える状態にし、自動化された操作を確認・管理しやすくするために開発しています。','hero.not':'TrueFixはソフトウェアであり、証券会社、取引所、銀行、カストディアン、投資助言業者ではありません。','hero.guide':'製品の仕組みを見る ↗',
    'purpose.eyebrow':'01 / 目的','purpose.title':'TrueFixを<br />開発する理由。','purpose.context.title':'分断された情報を減らす','purpose.context.body':'市場データ、リサーチ、戦略、口座、リスク確認は別々のツールに分かれがちです。TrueFixは元のProviderを表示したまま流れをまとめます。','purpose.control.title':'行動前の管理を増やす','purpose.control.body':'リサーチや読み取り専用で止める、シミュレーションで試す、確認付きの執行を設定する、という選択ができます。各段階を明確にします。','purpose.tools.title':'AIとクオンツを道具として使う','purpose.tools.body':'Agentと戦略は、無制限の権限ではなく、明確なデータ、ツール、予算、口座、リスクの制限内で動くべきです。',
    'people.eyebrow':'02 / 人物と視点','people.title':'プロジェクトを形作る<br />さまざまな視点。','people.note':'これらのプロフィールは、プロジェクトの説明と設計に用いる専門分野や視点を表すプロジェクト上の人物像です。従業員名簿や顧客の推薦コメントではありません。',
    'people.elias.role':'市場インフラ','people.elias.bio':'銘柄識別、ルートの根拠、Provider横断の執行結果の照合に取り組みます。','people.elias.alt':'Elias Navarroのポートレート',
    'people.chen.role':'データ完全性','people.chen.bio':'市場識別子、データ改訂、Provider横断のデータ出所を分かりやすく保つことに取り組みます。','people.chen.alt':'Chen Weiのポートレート',
    'people.park.role':'ランタイム信頼性','people.park.bio':'制限されたイベント配信、観測可能な障害、高負荷時の安全な復旧に取り組みます。','people.park.alt':'Park Min-seoのポートレート',
    'people.amara.role':'システムアーキテクチャ','people.amara.bio':'Provider境界、障害分離、システム全体の予測可能な復旧に取り組みます。','people.amara.alt':'Amara Okaforのポートレート',
    'people.sora.role':'ヒューマンファクターとリスク','people.sora.bio':'行動前に不確実性、権限、リスクを示すインターフェースに取り組みます。','people.sora.alt':'Sora Kimuraのポートレート',
    'people.leila.role':'AIとクオンツの安全性','people.leila.bio':'制限付きAgentツール、再現可能な戦略実行、後から確認できる判断に取り組みます。','people.leila.alt':'Leila Haddadのポートレート',
    'boundaries.eyebrow':'03 / プロジェクトの境界','boundaries.title':'利用者の管理下に<br />残るもの。','boundaries.local.title':'ローカルファーストのプロファイル','boundaries.local.body':'現在の製品はTrueFixクラウド口座を必要としません。利用する外部サービスは自分で設定します。','boundaries.funds.title':'資金はProviderに残る','boundaries.funds.body':'TrueFixは入金を受け付けず、利用者の資金を預かりません。','boundaries.review.title':'確認は利用者の責任','boundaries.review.body':'AI支援と自動化は、口座権限、リスク確認、操作を確認する利用者の責任に代わるものではありません。',
    'cta.copy':'TrueFix Studioはまだ最初の安定版リリース前です。ガイドを読み、読み取り専用またはシミュレーションから始め、不明点をお知らせください。','cta.guide':'利用ガイドを開く ↗','cta.feedback':'フィードバックと交流 ↗','footer.copy':'TrueFix Labs · プレリリースソフトウェア','footer.privacy':'プライバシー'
  },
  ko: {
    'meta.title':'TrueFix Studio — 소개','meta.description':'TrueFix Studio의 목적, 프로젝트를 만드는 관점과 제품의 경계를 소개합니다.',
    'a11y.skip':'본문으로 건너뛰기','a11y.menu':'탐색 메뉴 열기','a11y.language':'언어','nav.guide':'사용 가이드','nav.support':'기술 지원','nav.home':'홈','nav.about':'소개','nav.feedback':'피드백',
    'hero.eyebrow':'TRUEFIX STUDIO 소개','hero.title':'사용 중인 플랫폼 위에 더하는<br /><i>실용적인 도구.</i>','hero.lede':'TrueFix Studio는 독립적인 프리릴리스 소프트웨어 프로젝트입니다. 도구 전환을 줄이고 정보 출처를 드러내며 자동화된 행동을 더 쉽게 확인하고 통제하기 위해 만들고 있습니다.','hero.not':'TrueFix는 소프트웨어이며 브로커, 거래소, 은행, 수탁기관 또는 투자 자문사가 아닙니다.','hero.guide':'제품 작동 방식 보기 ↗',
    'purpose.eyebrow':'01 / 목적','purpose.title':'TrueFix를<br />만드는 이유.','purpose.context.title':'분리된 맥락 줄이기','purpose.context.body':'시장 데이터, 리서치, 전략, 계정과 리스크 확인은 여러 도구에 흩어져 있습니다. TrueFix는 원래 Provider를 표시한 채 작업 흐름을 모읍니다.','purpose.control.title':'행동 전 통제 강화','purpose.control.body':'리서치나 읽기 전용에서 멈추고, 시뮬레이션에서 시험하거나, 검토가 포함된 실행 경로를 설정할 수 있습니다. 모든 단계는 명확해야 합니다.','purpose.tools.title':'AI와 퀀트를 도구로 사용','purpose.tools.body':'Agent와 전략은 무제한 권한이 아니라 명확한 데이터, 도구, 예산, 계정과 리스크 제한 안에서 작동해야 합니다.',
    'people.eyebrow':'02 / 인물과 관점','people.title':'프로젝트를 만드는<br />다양한 관점.','people.note':'이 프로필은 프로젝트를 설명하고 설계하는 전문 분야와 관점을 나타내는 프로젝트 인물입니다. 직원 명부나 고객 후기가 아닙니다.',
    'people.elias.role':'시장 인프라','people.elias.bio':'종목 식별, 라우팅 근거와 Provider 간 실행 결과 대조에 집중합니다.','people.elias.alt':'Elias Navarro의 초상',
    'people.chen.role':'데이터 무결성','people.chen.bio':'시장 식별자, 데이터 수정과 Provider 간 데이터 출처를 이해하기 쉽게 유지하는 데 집중합니다.','people.chen.alt':'Chen Wei의 초상',
    'people.park.role':'런타임 신뢰성','people.park.bio':'제한된 이벤트 전달, 관측 가능한 실패와 압박 상황의 안전한 복구에 집중합니다.','people.park.alt':'Park Min-seo의 초상',
    'people.amara.role':'시스템 아키텍처','people.amara.bio':'Provider 경계, 장애 격리와 시스템 전체의 예측 가능한 복구에 집중합니다.','people.amara.alt':'Amara Okafor의 초상',
    'people.sora.role':'인간 요소와 리스크','people.sora.bio':'사용자가 행동하기 전에 불확실성, 권한과 리스크를 보여 주는 인터페이스에 집중합니다.','people.sora.alt':'Sora Kimura의 초상',
    'people.leila.role':'AI와 퀀트 안전','people.leila.bio':'제한된 Agent 도구, 재현 가능한 전략 실행과 나중에 검토할 수 있는 결정에 집중합니다.','people.leila.alt':'Leila Haddad의 초상',
    'boundaries.eyebrow':'03 / 프로젝트 경계','boundaries.title':'사용자의 통제 아래<br />남는 것.','boundaries.local.title':'로컬 우선 프로필','boundaries.local.body':'현재 제품은 TrueFix 클라우드 계정이 필요하지 않습니다. 사용할 외부 서비스는 사용자가 설정합니다.','boundaries.funds.title':'자금은 Provider에 유지','boundaries.funds.body':'TrueFix는 입금을 받거나 사용자 자금을 수탁하지 않습니다.','boundaries.review.title':'검토는 사용자의 책임','boundaries.review.body':'AI 보조와 자동화는 계정 권한, 리스크 확인 또는 행동을 검토할 사용자의 책임을 대신하지 않습니다.',
    'cta.copy':'TrueFix Studio는 아직 첫 안정 버전 출시 전입니다. 가이드를 읽고 읽기 전용 또는 시뮬레이션부터 시작한 뒤 불명확한 점을 알려 주세요.','cta.guide':'사용 가이드 열기 ↗','cta.feedback':'피드백 및 토론 ↗','footer.copy':'TrueFix Labs · 출시 전 소프트웨어','footer.privacy':'개인정보'
  }
};

const plainLanguageCopy = {
  en: {
    'meta.description':'Why TrueFix Studio is being built: to connect existing market services, reduce tool switching, and keep AI and trading actions under the user\'s control.',
    'hero.title':'One app for research, testing,<br /><i>and checking trades.</i>','hero.lede':'TrueFix Studio connects the brokers, exchanges, market-data, and AI services you choose. We are building it so people can do more of their market work in one place without moving their money to TrueFix.','hero.not':'TrueFix is software. It does not open financial accounts, hold money, recommend investments, or promise returns.',
    'purpose.context.title':'Spend less time switching tools','purpose.context.body':'Prices, news, strategy tests, accounts, and risk checks often live in separate apps. TrueFix brings them together and still shows where each piece of information came from.','purpose.control.title':'Choose how far you want to go','purpose.control.body':'Use it only for research, keep a connection read-only, test with simulated money, or review a real trading action. You choose each step.','purpose.tools.title':'Keep AI and strategies under control','purpose.tools.body':'The AI assistant and automated strategies can use only the data, tools, accounts, and limits you allow.',
    'people.eyebrow':'02 / DESIGN PERSPECTIVES','people.title':'Six questions<br />guiding the product.','people.note':'These project personas help explain the six professional viewpoints used when reviewing the product. They are not an employee directory or customer testimonials.','people.elias.bio':'Asks whether the app can identify the right market product and send an action to the right service.','people.chen.bio':'Asks whether users can tell where data came from and whether it is still current.','people.park.bio':'Asks what users will see when a connection fails and how the app can recover safely.','people.amara.bio':'Asks whether a problem in one connected service can be kept from affecting the rest of the app.','people.sora.bio':'Asks whether permissions, uncertainty, and risk are clear before a person acts.','people.leila.bio':'Asks whether AI and automated strategies stay within their allowed tools, accounts, and risk limits.',
    'boundaries.local.title':'Main settings stay on your device','boundaries.local.body':'The current product does not require a TrueFix cloud account. You choose and configure every outside service.','boundaries.funds.title':'Money stays with your broker or exchange','boundaries.review.body':'AI and automation do not replace account permissions, risk checks, or your decision to approve an action.'
  },
  'zh-CN': {
    'meta.description':'了解 TrueFix Studio 为什么存在：连接现有市场服务、减少工具切换，并让 AI 和交易操作始终由用户控制。','hero.title':'用一个应用完成研究、测试，<br /><i>并在交易前进行检查。</i>','hero.lede':'TrueFix Studio 连接你选择的券商、交易所、行情数据和 AI 服务。我们希望让用户在一个地方完成更多市场工作，同时无需把资金转入 TrueFix。','hero.not':'TrueFix 是软件。它不为你开设金融账户、不持有资金、不推荐投资，也不承诺收益。',
    'purpose.context.title':'减少来回切换工具','purpose.context.body':'价格、新闻、策略测试、账户和风险检查常常分散在不同应用中。TrueFix 把它们放在一起，同时保留每条信息的来源。','purpose.control.title':'你决定使用到哪一步','purpose.control.body':'可以只做研究、保持只读、用模拟资金测试，或确认真实交易操作。每一步都由你选择。','purpose.tools.title':'让 AI 和策略保持在限制内','purpose.tools.body':'AI 助手和自动策略只能使用你允许的数据、工具、账户和风险范围。',
    'people.eyebrow':'02 / 产品设计视角','people.title':'六个持续检查<br />产品的问题。','people.note':'这些项目角色用于说明评审产品时采用的六种专业视角，并不是员工名录或客户评价。','people.elias.bio':'关注应用能否识别正确的交易品种，并把操作发给正确的服务。','people.chen.bio':'关注用户能否知道数据来自哪里，以及数据是否仍然有效。','people.park.bio':'关注连接失败时用户会看到什么，以及应用如何安全恢复。','people.amara.bio':'关注一项外部服务的问题是否会影响应用的其他部分。','people.sora.bio':'关注用户行动前，权限、不确定性和风险是否足够清楚。','people.leila.bio':'关注 AI 和自动策略是否始终处于允许的工具、账户和风险限制内。',
    'boundaries.local.title':'主要设置保存在你的设备上','boundaries.local.body':'当前产品不要求注册 TrueFix 云账户。所有外部服务都由你选择和配置。','boundaries.funds.title':'资金留在你的券商或交易所','boundaries.review.body':'AI 和自动化不会替代账户权限、风险检查，也不会替你决定是否批准操作。'
  },
  ja: {
    'meta.description':'TrueFix Studioを開発する理由。今の市場サービスを接続し、ツールの切り替えを減らし、AIと取引操作を利用者が管理できるようにします。','hero.title':'調査・テスト・取引前確認を<br /><i>一つのアプリで。</i>','hero.lede':'TrueFix Studioは、選択した証券会社、取引所、相場データ、AIサービスを接続します。TrueFixへ資金を移さず、市場の作業を一か所で進められるように開発しています。','hero.not':'TrueFixはソフトウェアです。金融口座の開設、資金の保管、投資推薦、利益の約束は行いません。','purpose.context.title':'ツールの切り替えを減らす','purpose.context.body':'価格、ニュース、戦略テスト、口座、リスク確認は別々のアプリに分かれがちです。TrueFixは情報源を残したまま一か所にまとめます。','purpose.control.title':'どこまで使うかを自分で選ぶ','purpose.control.body':'調査だけ、読み取り専用、仮想資金でのテスト、実取引前の確認から選べます。','purpose.tools.title':'AIと戦略を制限内で使う','purpose.tools.body':'AIアシスタントと自動戦略は、許可したデータ、ツール、口座、リスク範囲だけを使います。','people.eyebrow':'02 / 設計の視点','people.title':'製品を見直す<br />六つの問い。','people.note':'これらのプロジェクト人物は、製品レビューで用いる六つの専門視点を説明するものです。従業員名簿や顧客の推薦ではありません。','boundaries.local.title':'主な設定は端末に保存','boundaries.funds.title':'資金は証券会社や取引所に残る'
  },
  ko: {
    'meta.description':'TrueFix Studio를 만드는 이유: 기존 시장 서비스를 연결하고 도구 전환을 줄이며 AI와 거래 작업을 사용자가 통제할 수 있게 합니다.','hero.title':'조사, 테스트, 거래 전 확인을<br /><i>하나의 앱에서.</i>','hero.lede':'TrueFix Studio는 선택한 증권사, 거래소, 시세 데이터, AI 서비스를 연결합니다. 자금을 TrueFix로 옮기지 않고 시장 관련 작업을 한곳에서 할 수 있게 만들고 있습니다.','hero.not':'TrueFix는 소프트웨어입니다. 금융 계정을 개설하거나 자금을 보관하거나 투자를 추천하거나 수익을 약속하지 않습니다.','purpose.context.title':'도구 전환 줄이기','purpose.context.body':'가격, 뉴스, 전략 테스트, 계정, 리스크 확인은 여러 앱에 흩어져 있습니다. TrueFix는 정보 출처를 남긴 채 한곳에 모읍니다.','purpose.control.title':'어디까지 사용할지 직접 선택','purpose.control.body':'조사만 하기, 읽기 전용, 가상 자금 테스트, 실제 거래 전 확인 중에서 선택할 수 있습니다.','purpose.tools.title':'AI와 전략을 제한 안에서 사용','purpose.tools.body':'AI 도우미와 자동 전략은 허용한 데이터, 도구, 계정, 리스크 범위만 사용할 수 있습니다.','people.eyebrow':'02 / 설계 관점','people.title':'제품을 점검하는<br />여섯 가지 질문.','people.note':'이 프로젝트 인물들은 제품을 검토할 때 사용하는 여섯 전문 관점을 설명합니다. 직원 명단이나 고객 추천사가 아닙니다.','boundaries.local.title':'주요 설정은 기기에 저장','boundaries.funds.title':'자금은 증권사나 거래소에 그대로'
  }
};

Object.entries(plainLanguageCopy).forEach(([locale, values]) => Object.assign(copy[locale], values));
copy.ja['people.note'] = 'これらのプロジェクト人物は、製品レビューで用いる六つの専門視点を説明するものです。従業員名簿や顧客の推薦ではありません。';
copy.ko['people.note'] = '이 프로젝트 인물들은 제품을 검토할 때 사용하는 여섯 전문 관점을 설명합니다. 직원 명단이나 고객 추천사가 아닙니다.';

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
  try { const saved = localStorage.getItem(STORAGE_KEY); if (SUPPORTED_LANGUAGES.includes(saved)) return saved; } catch { /* Use browser language. */ }
  const languages = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const language of languages) { const normalized = normalizeLanguage(language); if (normalized) return normalized; }
  return 'en';
}

function applyLanguage(language, persist = false) {
  const locale = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
  const dictionary = copy[locale];
  document.documentElement.lang = locale;
  document.title = dictionary['meta.title'];
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.content = dictionary['meta.description'];
  if (ogTitle) ogTitle.content = dictionary['meta.title'];
  if (ogDescription) ogDescription.content = dictionary['meta.description'];
  document.querySelectorAll('[data-i18n]').forEach((node) => { const value = dictionary[node.dataset.i18n]; if (value) node.textContent = value; });
  document.querySelectorAll('[data-i18n-html]').forEach((node) => { const value = dictionary[node.dataset.i18nHtml]; if (value) node.innerHTML = value; });
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => { const value = dictionary[node.dataset.i18nAlt]; if (value) node.alt = value; });
  const languageCurrent = document.querySelector('[data-language-current]');
  const languageTrigger = document.querySelector('[data-language-toggle]');
  const languageMenuNode = document.querySelector('[data-language-menu]');
  if (languageCurrent) languageCurrent.textContent = LANGUAGE_NAMES[locale];
  if (languageTrigger) languageTrigger.setAttribute('aria-label', `${dictionary['a11y.language']}: ${LANGUAGE_NAMES[locale]}`);
  if (languageMenuNode) languageMenuNode.setAttribute('aria-label', dictionary['a11y.language']);
  document.querySelectorAll('[data-language]').forEach((button) => button.setAttribute('aria-selected', String(button.dataset.language === locale)));
  if (persist) { try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Keep selection for this visit. */ } }
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
languageToggle?.addEventListener('click', () => {
  const open = languageToggle.getAttribute('aria-expanded') !== 'true';
  setLanguageMenu(open, open);
});

languageToggle?.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
  event.preventDefault();
  setLanguageMenu(true, true);
});

languageOptions.forEach((button, index) => button.addEventListener('click', () => {
  if (window.TrueFixLocale) {
    window.TrueFixLocale.navigate(button.dataset.language);
    return;
  }
  document.documentElement.classList.add('language-changing');
  applyLanguage(button.dataset.language, true);
  setLanguageMenu(false);
  languageToggle?.focus();
  requestAnimationFrame(() => document.documentElement.classList.remove('language-changing'));
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
