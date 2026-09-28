import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://truefix-labs.com';
const today = '2026-09-28';
const updated = '2026-09-28';
const sharedHeader = await readFile(join(root, 'shared/header.html'), 'utf8');
const studioIndicators = JSON.parse(await readFile(join(root, 'scripts/studio-indicators.json'), 'utf8'));

const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const slugPath = route => `${origin}/${route.replace(/^\//, '').replace(/\/$/, '')}/`;
const link = route => `/${route.replace(/^\//, '').replace(/\/$/, '')}/`;
const sourceLink = (label, url) => url ? `<a href="${esc(url)}" rel="nofollow noopener" target="_blank">${esc(label)}</a>` : `<span>${esc(label)}</span>`;

const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'TrueFix Labs', url: origin,
  logo: `${origin}/assets/icon-192.png`, sameAs: ['https://github.com/truefix-labs', 'https://github.com/truefix-labs/truefix-studio']
};

const articles = [
  {
    route: 'research/building-a-multi-broker-trading-system-in-rust', category: 'Research',
    title: 'Building a Multi-Broker Trading System in Rust',
    description: 'A production-oriented guide to provider adapters, canonical instruments, order lifecycles, reconciliation, risk controls, and deterministic execution in Rust.',
    answer: 'A multi-broker trading system should isolate provider-specific APIs behind adapters and expose canonical instruments, market data, orders, positions, and capabilities to the rest of the system. In Rust, keep the execution kernel deterministic, model unknown outcomes explicitly, and treat reconciliation as a first-class process rather than relying only on WebSocket events.',
    sections: [
      ['Recommended architecture', '<p>Use a layered design: provider clients at the edge, a normalization boundary for instruments and events, an order management system, a risk engine, an execution kernel, and durable audit storage. Provider selection belongs to a capability and entitlement layer, not to business logic that guesses from a broker name.</p><pre><code>Provider API → Adapter → Canonical contracts → OMS → Risk → Execution → Reconciliation</code></pre>'],
      ['Rust design choices', '<p>Use typed enums for order states, environments, sides, order types, and failure classes. Keep provider I/O asynchronous, but make the decision and risk path deterministic. Use cancellation-safe tasks, bounded channels, monotonic event sequence checks, and durable identifiers for every outbound request.</p>'],
      ['Failure modes to design first', '<ul><li>Timeout after the provider accepted an order.</li><li>WebSocket disconnect or sequence gaps.</li><li>Symbol ambiguity across venues.</li><li>Partial fills and fee currency differences.</li><li>Position drift between local state and an account snapshot.</li></ul>'],
      ['Production checklist', '<p>Persist the original provider, client instance, account, environment, native symbol, client order ID, request revision, and evidence used for the decision. If an execution result is unknown, query the original identity and reconcile before considering any retry.</p>']
    ], related: ['engineering/trading-system-architecture','engineering/instrument-master','engineering/idempotent-order-execution']
  },
  {
    route: 'engineering/trading-system-architecture', category: 'Engineering',
    title: 'Trading System Architecture: Market Data, OMS, Risk and Execution',
    description: 'How to separate market data, instrument identity, OMS, risk, execution, and reconciliation in a multi-venue trading platform.',
    answer: 'A trading system is easier to reason about when market data, instrument identity, order management, risk, execution, and reconciliation are separate boundaries with explicit contracts. The critical design rule is that a strategy may produce intent, but only an execution kernel with current permissions, risk checks, idempotency, and provider evidence can send an order.',
    sections: [
      ['System boundaries', '<p>Market data describes observations; strategy code turns observations into an intent; the OMS tracks order identity and lifecycle; the risk engine checks limits; the execution adapter translates an approved command; reconciliation compares local state with provider snapshots. Keep these boundaries visible in code and in logs.</p>'],
      ['Data flow', '<pre><code>Quotes / bars → Strategy context → Trading intent → Risk decision → Approved command → Provider order → Receipts → Reconciliation</code></pre><p>Every transition should carry an account, environment, instrument identity, revision, timestamp, and evidence reference.</p>'],
      ['Trade-offs', '<ul><li>A shared canonical model reduces application complexity but must preserve provider-native details.</li><li>Strong consistency is expensive at the edge; use durable state and explicit eventual-consistency recovery.</li><li>More adapters improve coverage but increase contract and conformance-test cost.</li></ul>'],
      ['Failure modes', '<p>Do not let a missing symbol mapping silently route to another venue. Do not treat a timeout as a rejected order. Do not rebuild positions only from local events. These shortcuts create duplicate orders and silent drift.</p>']
    ], related: ['engineering/broker-adapter-architecture','engineering/order-management-system','engineering/risk-engine','engineering/trading-reconciliation']
  },
  {
    route: 'engineering/broker-adapter-architecture', category: 'Engineering',
    title: 'Broker Adapter Architecture for Multi-Broker Trading Systems',
    description: 'A practical adapter boundary for REST, WebSocket, FIX, authentication, capabilities, native symbols, and provider-specific order behavior.',
    answer: 'A broker adapter should translate a provider protocol into stable application contracts while preserving native identifiers and limitations. It should expose capabilities and connection state separately from the provider name, normalize only what is safe to normalize, and retain the original request and receipt for reconciliation.',
    sections: [
      ['Adapter responsibilities', '<p>An adapter owns authentication, rate limits, request signing, transport reconnects, provider-specific serialization, native error mapping, and event sequence handling. It should not own portfolio policy or strategy decisions.</p>'],
      ['Capability contract', '<pre><code>ProviderDefinition → ClientInstance → CapabilityScope + ConnectionState + Environment + Entitlement</code></pre><p>The same provider can expose different capabilities for a market, account, environment, or permission set. Query this contract at runtime.</p>'],
      ['Native details to preserve', '<ul><li>Native symbol and contract identifiers.</li><li>Native order ID and client order ID.</li><li>Tick, lot, contract multiplier, and price precision.</li><li>Provider timestamps, sequence numbers, and error codes.</li><li>Paper, demo, testnet, and live environment identity.</li></ul>'],
      ['Testing', '<p>Use recorded fixtures for signing, order serialization, event replay, reconnect recovery, and reconciliation. A conformance suite should test partial fills, duplicate events, rejected orders, rate limits, and unknown execution results.</p>']
    ], related: ['engineering/instrument-master','engineering/order-state-machine','data/broker-api-matrix']
  },
  {
    route: 'engineering/order-management-system', category: 'Engineering',
    title: 'Order Management System (OMS) Architecture',
    description: 'Design an OMS around durable order identity, revisions, state transitions, allocations, provider receipts, and reconciliation.',
    answer: 'An OMS is the durable source of truth for order intent and lifecycle, not a thin wrapper around a broker API. It must retain the original order request, revisions, account and environment, provider identity, client order ID, receipts, state transitions, and reconciliation evidence.',
    sections: [
      ['Core records', '<p>Keep separate records for order intent, submission attempt, provider receipt, fill, cancellation or replacement request, and reconciliation observation. This makes retries and audits explainable.</p>'],
      ['State model', `<pre><code>Created → Submitted → Accepted → PartiallyFilled → Filled\n                 ↘ Rejected / Cancelled / Expired\n                 ↘ Unknown → Reconcile</code></pre><p>State transitions should be validated, append-only where possible, and idempotent when the same provider event is received twice.</p>`],
      ['OMS and strategy boundaries', '<p>Strategies can request an intent. They should not mutate order state or call a provider directly. The OMS and risk engine decide whether an intent can become an executable command.</p>'],
      ['Operational questions', '<ul><li>Which account and environment owns this order?</li><li>Which exact instrument mapping was used?</li><li>Can a timeout be reconciled by native order ID?</li><li>What happens to a replacement when the original is partially filled?</li></ul>']
    ], related: ['engineering/order-state-machine','engineering/idempotent-order-execution','engineering/trading-reconciliation']
  },
  {
    route: 'engineering/execution-engine', category: 'Engineering',
    title: 'Designing a Trading Execution Engine',
    description: 'Execution engine design for approval gates, provider routing, idempotency, risk checks, receipts, retries, and unknown outcomes.',
    answer: 'A trading execution engine should accept only an authorized command with a fresh instrument mapping, account, environment, permissions, and risk decision. It should create one deterministic client order identity, persist the attempt before sending, and reconcile ambiguous results instead of blindly retrying.',
    sections: [
      ['Execution gate', '<p>Validate account, environment, provider, client instance, instrument, side, quantity, price, order type, precision, permissions, freshness, and risk limits. Missing or ambiguous evidence should fail closed.</p>'],
      ['Unknown outcome', '<p>A network timeout after submission is not proof of rejection. Persist <code>Unknown</code>, retain the original provider identity and native client order ID, query the provider, and reconcile before any new command is considered.</p>'],
      ['Retry policy', '<p>Retry transport-safe reads with bounded backoff. Never automatically resend a non-idempotent order merely because the connection failed. A retry requires a provider-supported idempotency key or a completed reconciliation.</p>'],
      ['Receipts and audit', '<p>Store request hash, policy revision, risk result, provider response, timestamps, event sequence, and operator approval. These records allow a production incident to be reconstructed without relying on logs alone.</p>']
    ], related: ['engineering/risk-engine','engineering/idempotent-order-execution','engineering/order-state-machine']
  },
  {
    route: 'engineering/risk-engine', category: 'Engineering',
    title: 'Designing a Risk Engine for Automated Trading',
    description: 'Risk engine boundaries, pre-trade checks, position limits, loss limits, permissions, stale data, and fail-closed execution.',
    answer: 'A risk engine should make an explicit decision from current account state, instrument rules, market data freshness, strategy intent, and policy limits. It should run before execution, fail closed when required evidence is missing, and produce a durable decision that the execution engine cannot silently bypass.',
    sections: [
      ['Pre-trade checks', '<ul><li>Account and environment authorization.</li><li>Instrument tradability, tick size, lot size, and contract multiplier.</li><li>Maximum order notional, position, leverage, and daily loss.</li><li>Price bands, market data freshness, and duplicate intent.</li><li>Venue, instrument, and credential scope.</li></ul>'],
      ['Policy output', '<p>Return an allow, reject, or review decision with the policy revision, evidence timestamps, limits used, and reason codes. A boolean alone is insufficient for operations and audit.</p>'],
      ['Fail-closed behavior', '<p>Stale quotes, missing mappings, disconnected accounts, expired approvals, unknown positions, and uncertain order state should stop new execution until the system has enough evidence to continue.</p>'],
      ['Runtime controls', '<p>Apply both per-order and aggregate controls: maximum order size, allowed instruments and venues, maximum daily loss, strategy budgets, rate limits, and a global pause switch.</p>']
    ], related: ['ai-trading/llm-trading-safety','engineering/execution-engine','engineering/trading-reconciliation']
  },
  {
    route: 'engineering/instrument-master', category: 'Engineering',
    title: 'Designing an Instrument Master for Multi-Venue Trading',
    description: 'Instrument identity, venue mappings, asset classes, contract terms, precision, expiry, options, and provider-native symbols.',
    answer: 'An instrument master gives each tradable product a stable canonical identity while retaining venue-specific mappings and contract rules. A symbol such as BTCUSDT is a provider representation, not a universal instrument ID; the same text can mean different products across venues.',
    sections: [
      ['Canonical fields', '<p>Model <code>InstrumentId</code>, <code>Venue</code>, <code>AssetClass</code>, <code>InstrumentType</code>, <code>BaseAsset</code>, <code>QuoteAsset</code>, <code>NativeSymbol</code>, <code>Provider</code>, <code>Currency</code>, <code>TickSize</code>, <code>LotSize</code>, and <code>ContractMultiplier</code>. Derivatives also need expiry, strike, and option type.</p>'],
      ['Why symbols are not identity', `<pre><code>Binance: BTCUSDT\nOKX:     BTC-USDT\nBybit:   BTCUSDT</code></pre><p>These strings can be mapped to a common spot instrument, but a perpetual swap, dated future, or inverse contract must not be collapsed into the same identity.</p>`],
      ['Mapping lifecycle', '<p>Mappings need source, validity, environment, verification time, and confidence. An execution request should require an exact fresh mapping for the selected provider and account context.</p>'],
      ['Failure modes', '<ul><li>Accidentally treating an inverse contract as linear.</li><li>Ignoring contract multiplier or settlement currency.</li><li>Using a delisted or stale mapping.</li><li>Guessing a symbol after a provider rejects the first one.</li></ul>']
    ], related: ['engineering/symbol-normalization','engineering/broker-adapter-architecture','data/broker-api-matrix']
  },
  {
    route: 'research/instrument-domain-model', category: 'Research',
    title: 'Designing a Financial Instrument Domain Model for Trading Systems',
    description: 'A domain model for stocks, bonds, ETFs, FX, derivatives, perpetuals, indices, baskets, and multi-venue instruments without an inheritance tree that collapses under real market coverage.',
    answer: 'A production trading system should model financial instruments with orthogonal dimensions instead of making Stock, Option, Future, and Crypto subclasses of one Instrument type. Keep canonical identity, classification, economic exposure, product family, contract terms, venue listing, provider identifiers, trading rules, settlement, lifecycle, and relationships as separate concepts.',
    sections: [
      ['The modeling principle', '<p>The useful question is not “which subclass is this?” It is a set of independent questions: What is it? What economic exposure does it represent? What product family does it belong to? What exact contract terms apply? Where is it listed? How is it identified by each provider? How does it trade and settle? Treat the answers as separate dimensions.</p><pre><code>FinancialInstrument\n├── Identity\n├── Classification: AssetClass, InstrumentType, InstrumentSubType, CFI\n├── Economics: currency, underlying, multiplier, contract size\n├── TypeSpecificTerms\n├── Lifecycle\n├── Identifiers[]\n├── Listings[]\n└── Relationships[]</code></pre>'],
      ['Separate the domain layers', '<p>Keep the economic or reference object separate from the financial product, the concrete instrument, and its market representation. An issuer, currency, commodity, index, rate, basket, or reference entity can be an economic reference. A product family describes the family of exposure. A concrete instrument adds exact terms. A listing or venue instrument describes where and under which market segment it trades.</p><table class="kb-table"><thead><tr><th>Concept</th><th>Purpose</th></tr></thead><tbody><tr><td>FinancialInstrument</td><td>Stable domain object that can be identified, priced, held, traded, settled, or referenced.</td></tr><tr><td>ProductFamily</td><td>Broad family such as equity, bond, fund, option, future, forward, swap, or perpetual.</td></tr><tr><td>Contract / Instrument</td><td>Exact economic terms, including expiry, strike, settlement, multiplier, and underlying.</td></tr><tr><td>Listing / VenueInstrument</td><td>Tradable representation on a venue, market, segment, or listing.</td></tr><tr><td>ProviderInstrument</td><td>A broker or exchange representation mapped to the canonical instrument.</td></tr></tbody></table>'],
      ['Classification is not identity', '<p><code>InstrumentType</code>, CFI, security classification, and asset class explain what an instrument is. They do not identify one exact instrument. ISIN, CFI, MIC, ticker, exchange symbol, and provider IDs serve different namespaces and should remain separate records with source and validity metadata. A classification code must never be used as an internal instrument ID.</p>'],
      ['Type-specific terms without nullable-field sprawl', '<p>Shared fields belong on the core instrument. Product-specific terms belong in separate value objects: <code>EquityTerms</code>, <code>BondTerms</code>, <code>OptionTerms</code>, <code>FutureTerms</code>, <code>ForwardTerms</code>, <code>SwapTerms</code>, <code>PerpetualTerms</code>, and <code>FundTerms</code>. For an option, keep underlying, call or put, strike, exercise style, expiration, and settlement together. Do not put every possible strike, coupon, funding rate, and face value into one table as nullable columns.</p><pre><code>OptionTerms {\n  underlying: InstrumentId,\n  callPut: CallPut,\n  strike: Decimal,\n  exerciseStyle: ExerciseStyle,\n  expiration: Instant,\n  settlement: SettlementSpecification\n}</code></pre>'],
      ['Canonical instrument, listing, and provider mapping', '<p>A canonical instrument can have multiple listings and multiple provider mappings. A venue symbol such as <code>BTCUSDT</code>, <code>BTC-USDT</code>, or an IBKR contract identifier is a representation in a namespace, not a universal identity. Preserve provider, venue, market segment, native symbol, native contract ID, environment, validity, and verification evidence in the mapping.</p><pre><code>CanonicalInstrument\n  ├── VenueInstrument / Listing\n  │     └── InstrumentIdentifier[]\n  └── ProviderInstrumentMapping[]</code></pre>'],
      ['Trading rules and lifecycle are first-class', '<p>Trading behavior belongs outside the instrument identity but must be linked to it. Model price increments, quantity rules, trading calendars, sessions, status, issue and effective dates, expiry or maturity, settlement specifications, corporate actions, and delisting or successor events. The same canonical product may have different rules on two venues or in two environments.</p><ul><li><code>PriceIncrementRule</code> and <code>QuantityRule</code> define valid orders.</li><li><code>TradingCalendar</code> and <code>TradingSession</code> define when orders and data are valid.</li><li><code>InstrumentLifecycle</code> records issue, effective, expiry, maturity, status, and transitions.</li><li><code>SettlementSpecification</code> captures settlement asset, currency, timing, and method.</li></ul>'],
      ['Relationships instead of hidden inheritance', '<p>Use explicit relationships for meaning that crosses products: <code>UNDERLYING</code>, <code>DERIVED_FROM</code>, <code>CONVERTS_TO</code>, <code>DELIVERS</code>, <code>TRACKS</code>, <code>COMPONENT_OF</code>, <code>SUCCESSOR_OF</code>, <code>ROLLS_TO</code>, and <code>SAME_SHARE_CLASS</code>. This represents options, futures, ETFs, indices, baskets, rolls, deliverables, and multi-leg instruments without pretending they are all the same subtype.</p>'],
      ['Implementation checklist', '<ol><li>Assign a stable internal identity independent of ticker and provider.</li><li>Attach classifications and economic exposure as separate dimensions.</li><li>Store type-specific terms in dedicated structures.</li><li>Model listings, venue instruments, and provider mappings explicitly.</li><li>Attach rules, lifecycle, settlement, and corporate actions with effective dates.</li><li>Represent underlyings, components, deliverables, successors, and legs as relationships.</li><li>Require exact, current mappings before an execution command reaches a broker adapter.</li></ol>']
    ], related: ['engineering/instrument-master','engineering/symbol-normalization','engineering/broker-adapter-architecture','engineering/execution-engine']
  },
  {
    route: 'engineering/symbol-normalization', category: 'Engineering',
    title: 'How to Normalize Symbols Across Binance, OKX and Bybit',
    description: 'A safe symbol normalization model for Binance, OKX, Bybit, canonical instruments, derivatives, and provider-native identifiers.',
    answer: 'Normalize symbols through an instrument mapping table, not by string replacement. Binance uses BTCUSDT, OKX uses BTC-USDT, and Bybit commonly uses BTCUSDT for spot or derivatives contexts; the provider-native symbol must remain attached to a canonical instrument and contract specification.',
    sections: [
      ['Mapping example', '<table class="kb-table"><thead><tr><th>Provider</th><th>Native symbol</th><th>Canonical fields to verify</th></tr></thead><tbody><tr><td>Binance</td><td><code>BTCUSDT</code></td><td>venue, market type, base, quote, contract</td></tr><tr><td>OKX</td><td><code>BTC-USDT</code></td><td>instrument ID, instType, settle currency</td></tr><tr><td>Bybit</td><td><code>BTCUSDT</code></td><td>category, contract type, status</td></tr></tbody></table>'],
      ['Normalization algorithm', '<ol><li>Resolve the canonical instrument and venue.</li><li>Query the provider catalogue for an exact native mapping.</li><li>Validate market type, contract terms, precision, and status.</li><li>Persist the mapping evidence and verification timestamp.</li><li>Reject execution when any required field is ambiguous.</li></ol>'],
      ['Spot versus derivatives', '<p>Never infer a perpetual, future, option, or inverse contract from the base and quote text alone. Asset class, instrument type, settlement, expiry, multiplier, and margin mode are part of identity.</p>'],
      ['Operational rule', '<p>Keep canonical identity for strategy and portfolio logic, but send the exact native symbol and provider-specific parameters at the adapter boundary.</p>']
    ], related: ['engineering/instrument-master','brokers/binance','brokers/okx','brokers/bybit']
  },
  {
    route: 'engineering/order-state-machine', category: 'Engineering',
    title: 'Order State Machines in Real Trading Systems',
    description: 'Order lifecycle design across internal, broker, and exchange states, including partial fills, cancellation races, reconnects, and unknown outcomes.',
    answer: 'An order state machine must distinguish internal intent from broker and exchange observations. The useful states include Created, Submitted, Accepted, PartiallyFilled, Filled, Cancelled, Rejected, Expired, PendingCancel, PendingReplace, and Unknown. Unknown is a durable recovery state, not an error message to discard.',
    sections: [
      ['State categories', '<p>Internal states describe what the system requested; provider states describe what a venue reports; derived states describe what can be safely shown to a user. Store the raw observation alongside the normalized state.</p>'],
      ['Race conditions', '<p>A fill can arrive while cancellation is pending. A replace can be accepted after a stale cancel response. Duplicate events can be replayed after reconnect. Transition validation and event IDs prevent a late message from moving an order backwards.</p>'],
      ['Unknown recovery', '<p>When the result of submission is uncertain, keep the order in Unknown and reconcile it using the original client order ID, provider order ID, account, and time window. Do not create a second intent until the original is resolved or explicitly abandoned.</p>'],
      ['Testing', '<p>Replay event sequences with duplicate messages, missing sequence numbers, out-of-order fills, disconnects, and provider snapshots. State machine tests should assert both final state and the audit trail.</p>']
    ], related: ['engineering/trading-reconciliation','engineering/idempotent-order-execution','engineering/order-management-system']
  },
  {
    route: 'engineering/trading-reconciliation', category: 'Engineering',
    title: 'Reconciling Orders, Fills and Positions in Trading Systems',
    description: 'Why production trading systems combine WebSocket events, REST snapshots, trade history, balances, and periodic reconciliation.',
    answer: 'Reliable reconciliation combines WebSocket events for low-latency updates with REST snapshots and periodic comparison. Use open orders, order history, trade history, positions, balances, and account equity to detect missed events, duplicate events, position drift, and unknown execution results.',
    sections: [
      ['Required views', '<ul><li>Open orders</li><li>Order history</li><li>Trade or fill history</li><li>Positions</li><li>Balances and account equity</li></ul>'],
      ['Reconciliation loop', `<pre><code>WebSocket events\n      + REST snapshot\n      + periodic reconciliation\n      → compare → classify drift → recover → record evidence</code></pre><p>Classify differences as expected latency, missing event, duplicate event, provider correction, local bug, or unresolved ambiguity.</p>`],
      ['Position calculation', '<p>Calculate from fills and provider position snapshots, including fees, settlement currency, contract multiplier, realized and unrealized P&amp;L, transfers, and corporate actions where relevant. Do not assume every venue reports the same sign or quantity convention.</p>'],
      ['Recovery policy', '<p>Pause affected execution when drift is material or identity is ambiguous. A reconciliation result should include the snapshot timestamp, source, comparison revision, and operator action.</p>']
    ], related: ['engineering/order-state-machine','engineering/execution-engine','engineering/instrument-master']
  },
  {
    route: 'engineering/idempotent-order-execution', category: 'Engineering',
    title: 'Preventing Duplicate Orders in Automated Trading Systems',
    description: 'Client order IDs, idempotency keys, retries, timeouts, unknown execution states, and reconciliation for safe order submission.',
    answer: 'Prevent duplicate orders by assigning a deterministic client order identity before submission, persisting the request, using provider-supported idempotency where available, and reconciling ambiguous results before retrying. A timeout is a state transition to investigate, not permission to send the same order again.',
    sections: [
      ['Identity model', '<p>Derive a stable request identity from strategy revision, account, environment, instrument, intent revision, and a unique command sequence. Persist the identity before the network call and retain the provider-native ID once known.</p>'],
      ['Safe retry matrix', '<table class="kb-table"><thead><tr><th>Operation</th><th>Retry guidance</th></tr></thead><tbody><tr><td>Read snapshot</td><td>Bounded retry with backoff</td></tr><tr><td>Order submission</td><td>Reconcile first; resend only with proven idempotency</td></tr><tr><td>Cancel</td><td>Query current order state, then issue a new command if needed</td></tr><tr><td>Replace</td><td>Track the original and replacement as related revisions</td></tr></tbody></table>'],
      ['Network ambiguity', '<p>The provider may have accepted an order even when the client received no response. Persist Unknown, search by client order ID or native ID, and use account or time-window reconciliation as a fallback.</p>'],
      ['Audit requirements', '<p>Record request hash, idempotency key, attempt number, policy version, operator approval, response, retry reason, and reconciliation outcome.</p>']
    ], related: ['engineering/execution-engine','engineering/order-management-system','engineering/trading-reconciliation']
  }
];

const brokerData = [
  ['binance', 'Binance', 'https://developers.binance.com/docs/binance-spot-api-docs', 'Crypto spot, margin, and derivatives APIs vary by product and jurisdiction.', 'REST and WebSocket APIs are documented; confirm product-specific endpoints and permissions.', 'Not verified in this release; use provider documentation.', 'https://github.com/binance/binance-connector-rust'],
  ['okx', 'OKX', 'https://www.okx.com/docs-v5/en/', 'Crypto spot, margin, derivatives, and account APIs vary by instrument type.', 'REST and WebSocket APIs are documented; instrument type and account mode are material.', 'Not verified in this release; use provider documentation.', 'https://github.com/okxapi'],
  ['bybit', 'Bybit', 'https://bybit-exchange.github.io/docs/v5/intro', 'Crypto spot, derivatives, and account APIs vary by category.', 'REST and WebSocket APIs are documented; category must remain part of routing.', 'Not verified in this release; use provider documentation.', 'https://github.com/bybit-exchange'],
  ['interactive-brokers', 'Interactive Brokers', 'https://www.interactivebrokers.com/campus/ibkr-api-page/', 'Multi-asset brokerage APIs with account, market data, and order workflows.', 'Client Portal, TWS, and FIX options have different deployment and session models.', 'Not verified in this release; use provider documentation.', 'https://github.com/InteractiveBrokers'],
  ['futu', 'Futu', 'https://openapi.futunn.com/futu-api-doc/en/', 'Hong Kong, US, and other supported market products depend on account and region.', 'OpenD and protocol APIs require explicit session and entitlement handling.', 'Not verified in this release; use provider documentation.', 'https://github.com/FutunnOpen'],
  ['tiger-brokers', 'Tiger Brokers', 'https://docs.itigerup.com/', 'Broker API availability depends on entity, region, and account permissions.', 'Confirm SDK, market data, and order capabilities with the relevant official documentation.', 'Not verified in this release; use provider documentation.', 'https://github.com/tigerfintech'],
  ['longbridge', 'Longbridge', 'https://open.longbridge.com/docs', 'Multi-market brokerage API coverage depends on account and product.', 'REST and streaming interfaces require account and market entitlements.', 'Not verified in this release; use provider documentation.', 'https://github.com/LongBridgeOpen'],
  ['alpaca', 'Alpaca', 'https://docs.alpaca.markets/', 'US equities, options, and crypto availability depends on account and product.', 'REST and streaming APIs are documented; paper and live environments must remain explicit.', 'Not verified in this release; use provider documentation.', 'https://github.com/alpacahq'],
  ['tradestation', 'TradeStation', 'https://api.tradestation.com/docs/', 'US brokerage API coverage depends on account and market data permissions.', 'REST and streaming APIs are documented; token lifecycle and environment matter.', 'Not verified in this release; use provider documentation.', 'https://github.com/tradestation'],
  ['ig', 'IG', 'https://labs.ig.com/rest-trading-api-reference', 'CFD and spread-betting products vary by region and account.', 'REST and streaming interfaces have account, session, and rate-limit constraints.', 'Not verified in this release; use provider documentation.', 'https://labs.ig.com/'],
  ['charles-schwab', 'Charles Schwab', 'https://developer.schwab.com/', 'US brokerage API coverage depends on approval, account, and product access.', 'Confirm market data and order permissions from the official developer portal.', 'Not verified in this release; use provider documentation.', 'https://developer.schwab.com/']
];

const comparisonData = [
  ['binance-vs-okx-api', 'Binance vs OKX API for Algorithmic Trading', 'Binance', 'OKX', ['https://developers.binance.com/docs/binance-spot-api-docs', 'https://www.okx.com/docs-v5/en/']],
  ['binance-vs-bybit-api', 'Binance vs Bybit API for Algorithmic Trading', 'Binance', 'Bybit', ['https://developers.binance.com/docs/binance-spot-api-docs', 'https://bybit-exchange.github.io/docs/v5/intro']],
  ['okx-vs-bybit-api', 'OKX vs Bybit API for Algorithmic Trading', 'OKX', 'Bybit', ['https://www.okx.com/docs-v5/en/', 'https://bybit-exchange.github.io/docs/v5/intro']],
  ['ibkr-vs-futu-api', 'Interactive Brokers vs Futu API', 'Interactive Brokers', 'Futu', ['https://www.interactivebrokers.com/campus/ibkr-api-page/', 'https://openapi.futunn.com/futu-api-doc/en/']],
  ['ibkr-vs-alpaca-api', 'Interactive Brokers vs Alpaca API', 'Interactive Brokers', 'Alpaca', ['https://www.interactivebrokers.com/campus/ibkr-api-page/', 'https://docs.alpaca.markets/']],
  ['futu-vs-tiger-api', 'Futu vs Tiger Brokers API', 'Futu', 'Tiger Brokers', ['https://openapi.futunn.com/futu-api-doc/en/', 'https://docs.itigerup.com/']],
  ['rest-vs-websocket-vs-fix', 'REST vs WebSocket vs FIX for Trading Systems', 'REST', 'WebSocket and FIX', ['https://www.fixtrading.org/standards/']]
];

const aiArticles = [
  ['ai-trading-agent-architecture', 'Building a Safe AI Trading Agent', 'An architecture for observation, research, reasoning, risk checks, approval, execution, reconciliation, and audit.', ['Observation → Research → Reasoning → Signal → Risk check → Human approval → Execution → Reconciliation → Audit']],
  ['llm-trading-safety', 'LLM Trading Safety: Permissions, Limits and Fail-Closed Execution', 'How to keep analysis permission separate from execution permission when an LLM interacts with trading tools.', ['Analysis permission != execution permission', 'Scope credentials by account, venue, instrument, environment, and action.', 'Use maximum order size, daily loss, dry-run, and approval policies.']],
  ['human-in-the-loop', 'Human-in-the-Loop Trading Execution', 'Where human review belongs in an AI-assisted trading workflow and what the approval record should contain.', ['Review intent, evidence, account, environment, risk result, expiry, and exact order.', 'An approval should authorize a bounded command, not an open-ended agent session.']],
  ['agent-risk-control', 'Risk Controls for AI Trading Agents', 'Deterministic risk controls for agent-generated trading decisions.', ['Validate instrument, price, quantity, exposure, permissions, freshness, and loss limits before execution.', 'Persist the policy revision and reason codes.']],
  ['tool-permission-model', 'Tool Permission Models for Trading Agents', 'Design scoped tools so research capabilities cannot silently become execution capabilities.', ['Separate market data, research, strategy, risk, approval, and execution tools.', 'Default to read-only and require explicit environment and account scope.']]
];

const pillarData = [
  ['research/rust-trading-system-guide', 'The Rust Trading System Engineering Guide', 'A map of Rust trading system design topics: adapters, canonical instruments, OMS, risk, execution, and reconciliation.', ['research/building-a-multi-broker-trading-system-in-rust', 'engineering/trading-system-architecture', 'engineering/broker-adapter-architecture', 'engineering/execution-engine']],
  ['research/multi-broker-trading-guide', 'The Multi-Broker Trading Architecture Guide', 'A practical path from broker API differences to provider capabilities, instrument mappings, order lifecycle, and reconciliation.', ['engineering/broker-adapter-architecture', 'engineering/instrument-master', 'engineering/order-management-system', 'data/broker-api-matrix']],
  ['research/ai-trading-agent-guide', 'The AI Trading Agent Engineering Guide', 'A technical map for safe AI trading agents, scoped tools, risk controls, human approval, and audited execution.', ['ai-trading/ai-trading-agent-architecture', 'ai-trading/llm-trading-safety', 'ai-trading/human-in-the-loop', 'ai-trading/tool-permission-model']]
];

const categories = {
  research: ['Trading Engineering Research', 'Technical research and engineering notes on algorithmic trading, broker APIs, market data, execution systems, risk engines, multi-venue trading and AI trading agents.'],
  engineering: ['Trading System Engineering', 'Production-oriented engineering notes on trading architecture, instruments, OMS, execution, risk, reconciliation, and idempotency.'],
  brokers: ['Broker API Technical References', 'Conservative technical reference pages for broker and exchange APIs. Verify capabilities against the linked official documentation before production use.'],
  compare: ['Trading API Comparisons', 'Structured comparisons of broker APIs, exchange APIs, transports, authentication, market data, order workflows, and architecture trade-offs.'],
  'ai-trading': ['AI Trading Engineering', 'Technical notes on safe AI trading agents, tool permissions, human approval, risk controls, execution, and audit.'],
  data: ['Trading Data and API Matrices', 'Machine-readable matrices for broker API capabilities, market data, order APIs, environments, SDKs, and official documentation.']
};

const allRoutes = new Set([
  ...articles.map(item => item.route),
  ...brokerData.map(([slug]) => `brokers/${slug}`),
  ...comparisonData.map(([slug]) => `compare/${slug}`),
  ...aiArticles.map(([slug]) => `ai-trading/${slug}`),
  ...pillarData.map(([route]) => route),
  ...Object.keys(categories),
  'data/broker-api-matrix',
  'zh-cn/research',
  'ja/research',
  'ko/research',
  'zh-cn/research/building-a-multi-broker-trading-system-in-rust',
  'zh-cn/research/instrument-domain-model',
  'zh-cn/research/rust-trading-system-guide',
  'zh-cn/research/multi-broker-trading-guide',
  'zh-cn/research/ai-trading-agent-guide',
  'ja/research/building-a-multi-broker-trading-system-in-rust',
  'ja/research/instrument-domain-model',
  'ja/research/rust-trading-system-guide',
  'ja/research/multi-broker-trading-guide',
  'ja/research/ai-trading-agent-guide',
  'ko/research/building-a-multi-broker-trading-system-in-rust',
  'ko/research/instrument-domain-model',
  'ko/research/rust-trading-system-guide',
  'ko/research/multi-broker-trading-guide',
  'ko/research/ai-trading-agent-guide',
  ...pillarData.map(([route]) => `zh-cn/${route}`),
  'research/studio-indicators',
  'zh-cn/research/studio-indicators',
  'ja/research/studio-indicators',
  'ko/research/studio-indicators'
]);

const indicatorGroups = {
  trend: new Set(['sma','ema','adx','aroon','parabolic_sar','hull_moving_average','weighted_moving_average','double_exponential_moving_average','triple_exponential_moving_average','triangular_moving_average','volume_weighted_moving_average','variable_index_dynamic_average','kaufman_adaptive_moving_average','smoothed_moving_average','mcginley_dynamic_moving_average','supertrend','rolling_linear_trend','trend_strength_index','ichimoku_cloud']),
  momentum: new Set(['rsi','macd','stochastic','cci','awesome_oscillator','true_strength_index','chande_momentum_oscillator','trix','rate_of_change','williams_percent_r','coppock_curve','detrended_price_oscillator','fisher_transform','know_sure_thing','relative_vigor_index','smi_ergodic_indicator','woodies_cci','momentum_index','percentage_price_oscillator','mcginley_dynamic_cci']),
  volatility: new Set(['bollinger_bands','keltner_channel','rolling_standard_deviation','log_return_volatility','annualized_log_return_volatility','average_true_range','true_range','ulcer_index','chande_kroll_stop','envelopes','student_t_adjusted_volatility','laplace_volatility','cauchy_iqr_scale','mean_absolute_deviation_bands','mcginley_dynamic_bands']),
  volume: new Set(['mfi','chaikin_money_flow','elders_force_index','ease_of_movement','chaikin_oscillator','on_balance_volume','internal_bar_strength','positive_volume_index','negative_volume_index','klinger_volume_oscillator','volume_weighted_average_price','volume_price_trend','accumulation_distribution_line']),
  statistics: new Set(['rolling_mean','rolling_median','rolling_variance','mean_absolute_deviation','z_score','rolling_mode','rolling_minimum','rolling_maximum','rolling_log_return','median_absolute_deviation','empirical_quantile_range','return_on_investment'])
};

const indicatorDescription = {
  en: {
    trend: 'Trend and smoothing measure for identifying direction, persistence, or adaptive price movement.',
    momentum: 'Momentum or oscillator measure for comparing recent price movement, strength, and turning points.',
    volatility: 'Volatility, range, channel, or drawdown measure for sizing and regime analysis.',
    volume: 'Volume and money-flow measure for relating price movement to traded activity.',
    statistics: 'Rolling statistical feature for normalization, distribution, returns, or regime analysis.'
  },
  zh: {
    trend: '用于识别价格方向、趋势持续性或自适应价格变化的趋势与平滑指标。',
    momentum: '用于比较近期价格变化、强弱和拐点的动量或振荡指标。',
    volatility: '用于仓位管理和市场状态分析的波动率、区间、通道或回撤指标。',
    volume: '将价格变化与成交活动联系起来的成交量和资金流指标。',
    statistics: '用于标准化、分布、收益率或市场状态分析的滚动统计特征。'
  },
  ja: {
    trend: '方向、トレンドの持続性、適応的な価格変化を確認するトレンド・平滑化指標。',
    momentum: '直近の値動き、強さ、転換点を比較するモメンタム・オシレーター指標。',
    volatility: 'ポジション sizing とレジーム分析に使うボラティリティ、レンジ、チャネル、ドローダウン指標。',
    volume: '価格変化と取引活動を結び付ける出来高・マネーフロー指標。',
    statistics: '正規化、分布、リターン、レジーム分析に使うローリング統計量。'
  },
  ko: {
    trend: '방향, 추세 지속성, 적응형 가격 움직임을 확인하는 추세 및 평활 지표입니다.',
    momentum: '최근 가격 움직임, 강도, 전환점을 비교하는 모멘텀 및 오실레이터 지표입니다.',
    volatility: '포지션 sizing과 시장 국면 분석에 사용하는 변동성, 범위, 채널, 낙폭 지표입니다.',
    volume: '가격 움직임과 거래 활동을 연결하는 거래량 및 자금 흐름 지표입니다.',
    statistics: '정규화, 분포, 수익률, 시장 국면 분석에 사용하는 롤링 통계 특성입니다.'
  }
};

function indicatorGroup(id) {
  return Object.entries(indicatorGroups).find(([, ids]) => ids.has(id))?.[0] || 'statistics';
}

const collectionRoutes = new Set([...Object.keys(categories), ...pillarData.map(([route]) => route)]);

function commonHead({ title, description, route, type = 'website', alternates = [] }) {
  const canonical = slugPath(route);
  const schemaType = collectionRoutes.has(route) ? 'CollectionPage' : type;
  const schema = {
    '@context': 'https://schema.org', '@type': schemaType, name: title, headline: title, description,
    url: canonical, mainEntityOfPage: { '@type': 'WebPage', '@id': canonical }, publisher: organizationSchema
  };
  if (type === 'TechArticle') Object.assign(schema, { datePublished: today, dateModified: updated, author: organizationSchema, inLanguage: 'en' });
  const breadcrumbItems = [{ name: 'Home', item: `${origin}/` }];
  const parts = route.split('/');
  parts.forEach((part, index) => breadcrumbItems.push({
    name: index === parts.length - 1 ? title : part.replaceAll('-', ' '),
    item: slugPath(parts.slice(0, index + 1).join('/'))
  }));
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.item }))
  };
  const ogType = type === 'TechArticle' || type === 'Dataset' ? 'article' : 'website';
  const alternateLinks = alternates.map(([locale, url]) => `<link rel="alternate" hreflang="${esc(locale)}" href="${esc(url)}">`).join('');
  return `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#080b10">
    <meta name="description" content="${esc(description)}"><meta property="og:type" content="${ogType}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}/assets/workstation.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><link rel="canonical" href="${canonical}">${alternateLinks}<link rel="stylesheet" href="/styles.css?v=26"><link rel="stylesheet" href="/site-header.css?v=2"><link rel="stylesheet" href="/mobile-shell.css?v=3"><link rel="stylesheet" href="/site-layout.css?v=1"><link rel="stylesheet" href="/knowledge.css?v=1"><script defer src="/site-navigation.js?v=1"></script><script defer src="/site-header.js?v=1"></script><script defer src="/locale-routes.js?v=2"></script><script defer src="/mobile-shell.js?v=1"></script><script defer src="/knowledge-menu.js?v=2"></script><script type="application/ld+json">${JSON.stringify(schema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script><script id="organization-schema" type="application/ld+json">${JSON.stringify(organizationSchema)}</script><title>${esc(title)}</title>`;
}

function shell({ title, description, route, type, body, locale = 'en', alternates = [] }) {
  return `<!doctype html><html lang="${esc(locale)}"><head>${commonHead({ title, description, route, type, alternates })}</head><body><a class="skip-link" href="#main">Skip to main content</a>${sharedHeader}<main id="main" class="knowledge-page"><div class="knowledge-wrap">${body}</div></main><footer class="site-footer"><p><strong>TrueFix Labs</strong><br>Trading Engineering Knowledge Base · Open Source Trading Infrastructure Portal</p><nav><a href="/">TrueFix Studio</a><a href="/research/">Research</a><a href="/engineering/">Engineering</a><a href="/brokers/">Brokers</a><a href="/compare/">Compare</a><a href="/ai-trading/">AI Trading</a><a href="/data/">Data</a></nav></footer></body></html>`;
}

function breadcrumb(route, title) {
  const parts = route.split('/');
  const links = [`<a href="/">Home</a>`];
  if (parts.length > 1) links.push(`<a href="/${parts[0]}/">${esc(parts[0].replace('-', ' '))}</a>`);
  links.push(`<span>${esc(title)}</span>`);
  return `<nav class="kb-breadcrumb" aria-label="Breadcrumb">${links.join('<span aria-hidden="true">/</span>')}</nav>`;
}

function sourcesHtml(sources = []) {
  if (!sources.length) return '';
  return `<section class="kb-sources"><h2>Sources</h2><ul>${sources.map(([label, url]) => `<li>${sourceLink(label, url)}</li>`).join('')}</ul><p>Last verified: ${updated}. Provider capabilities can change by region, account, product, environment, and entitlement; verify the linked official documentation before production use.</p></section>`;
}

function relatedHtml(routes = []) {
  if (!routes.length) return '';
  return `<section class="kb-related"><h2>Related engineering notes</h2><ul>${routes.map(route => `<li><a href="${link(route)}">${esc(route.split('/').pop().replaceAll('-', ' '))}</a></li>`).join('')}</ul></section>`;
}

const articleSources = {
  'research/building-a-multi-broker-trading-system-in-rust': [['Rust documentation', 'https://doc.rust-lang.org/book/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/trading-system-architecture': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/broker-adapter-architecture': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/order-management-system': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/execution-engine': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/risk-engine': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/instrument-master': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/symbol-normalization': [['Binance Spot API documentation', 'https://developers.binance.com/docs/binance-spot-api-docs'], ['OKX API documentation', 'https://www.okx.com/docs-v5/en/'], ['Bybit V5 API documentation', 'https://bybit-exchange.github.io/docs/v5/intro']],
  'engineering/order-state-machine': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/trading-reconciliation': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'engineering/idempotent-order-execution': [['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']],
  'research/instrument-domain-model': [['Supplied TrueFix instrument-domain design memo (PDF, 2026-09-17)', null], ['FIX Trading Community standards', 'https://www.fixtrading.org/standards/'], ['ISO 10962 / CFI overview', 'https://www.iso.org/standard/73564.html']]
};

function articlePage(item, sources = articleSources[item.route] || [['TrueFix Labs project repository', 'https://github.com/truefix-labs/truefix-studio']]) {
  const sections = item.sections.map(([heading, html]) => `<section><h2>${esc(heading)}</h2>${html}</section>`).join('');
  const body = `${breadcrumb(item.route, item.title)}<article class="kb-article"><p class="kb-eyebrow">${esc(item.category)} · TRUEFIX LABS</p><h1>${esc(item.title)}</h1><p class="kb-dek">${esc(item.description)}</p><p class="kb-answer"><strong>Short answer.</strong> ${item.answer}</p>${sections}${sourcesHtml(sources)}${relatedHtml(item.related)}<p class="kb-updated">Last updated: ${updated}</p></article>`;
  return shell({ title: `${item.title} | TrueFix Labs`, description: item.description, route: item.route, type: 'TechArticle', body });
}

const zhResearchCopy = {
  'research/building-a-multi-broker-trading-system-in-rust': ['用 Rust 构建多券商交易系统', '面向生产环境的 Provider 适配器、统一金融工具、订单生命周期、对账、风控和确定性执行指南。', '多券商系统应把各 Provider API 隔离在适配器后面，并向系统其余部分提供统一的金融工具、行情、订单、持仓和能力模型。Rust 执行内核应保持确定性，显式建模未知结果，并把对账作为一等流程。'],
  'research/instrument-domain-model': ['交易系统中的金融工具领域模型设计', '用正交维度建模股票、债券、ETF、外汇、衍生品、永续合约、指数和多市场金融工具。', '生产级交易系统应使用正交维度表示金融工具，而不是把 Stock、Option、Future 和 Crypto 压缩成一棵继承树。统一身份、经济属性、合约条款、挂牌、Provider 映射和生命周期。'],
  'research/rust-trading-system-guide': ['Rust 交易系统工程指南', '连接 Rust 适配器、统一金融工具、OMS、风控、执行和对账的工程指南。', 'Rust 交易系统应把 Provider I/O、统一领域模型、OMS、风险决策和执行内核分成明确边界，并为断线、重复事件和未知订单状态保留恢复路径。'],
  'research/multi-broker-trading-guide': ['多券商交易架构指南', '从 API 差异、Provider 能力和金融工具映射，到订单生命周期和对账的实践路线。', '多券商架构的核心是能力范围、统一金融工具身份、Provider 原生标识和可恢复的订单状态机。不要仅根据券商名称猜测能力。'],
  'research/ai-trading-agent-guide': ['AI 交易代理工程指南', '关于安全 AI 交易代理、工具权限、风控、人工审批和可审计执行的技术地图。', '安全的 AI 交易代理是受边界约束的工作流，不是持有券商凭证的无限模型。观察、研究、推理、风控、审批、执行、对账和审计必须分开。']
};

const zhSectionNames = {
  'Recommended architecture': '推荐架构', 'Rust design choices': 'Rust 设计选择', 'Failure modes to design first': '优先设计的失败模式', 'Production checklist': '生产检查清单',
  'The modeling principle': '建模原则', 'Separate the domain layers': '分离领域层次', 'Classification is not identity': '分类不是身份', 'Type-specific terms without nullable-field sprawl': '使用类型条款，避免可空字段泛滥', 'Canonical instrument, listing, and provider mapping': '统一金融工具、挂牌与 Provider 映射', 'Trading rules and lifecycle are first-class': '交易规则与生命周期是一等概念',
  'Explore this knowledge base': '浏览知识库', 'Evidence policy': '证据政策'
};

const jaResearchCopy = {
  'research/building-a-multi-broker-trading-system-in-rust': ['Rust でマルチブローカー取引システムを構築する', 'Provider アダプター、正規化された金融商品、注文ライフサイクル、照合、リスク、決定的な執行を扱う実運用向けガイド。', 'マルチブローカーシステムでは Provider API をアダプターの背後に分離し、統一された金融商品、マーケットデータ、注文、ポジション、能力モデルを提供します。'],
  'research/instrument-domain-model': ['取引システムの金融商品ドメインモデル設計', '株式、債券、ETF、FX、デリバティブ、パーペチュアル、指数、複数市場の商品を直交する概念でモデル化します。', '本番の取引システムでは継承ツリーではなく、識別子、経済属性、契約条件、上場、Provider 対応、ライフサイクルを分けて管理します。'],
  'research/rust-trading-system-guide': ['Rust 取引システムエンジニアリングガイド', 'Rust アダプター、正規化された金融商品、OMS、リスク、執行、照合をつなぐガイド。', 'Rust の取引システムでは Provider I/O、ドメインモデル、OMS、リスク判断、執行カーネルを明確に分離し、切断や重複イベントから復旧できるようにします。'],
  'research/multi-broker-trading-guide': ['マルチブローカー取引アーキテクチャガイド', 'API 差異、Provider 能力、金融商品マッピング、注文ライフサイクル、照合を整理します。', 'マルチブローカー設計の中心は能力範囲、正規化された金融商品 ID、Provider のネイティブ ID、復旧可能な注文ステートマシンです。'],
  'research/ai-trading-agent-guide': ['AI 取引エージェントエンジニアリングガイド', '安全な AI 取引エージェント、ツール権限、リスク、承認、監査可能な執行の技術マップ。', '安全な AI 取引エージェントは境界付きのワークフローです。観測、調査、推論、リスク、承認、執行、照合、監査を分離します。']
};
const koResearchCopy = {
  'research/building-a-multi-broker-trading-system-in-rust': ['Rust로 멀티 브로커 트레이딩 시스템 구축하기', 'Provider 어댑터, 표준 금융 상품, 주문 수명 주기, 조정, 리스크와 결정적 실행을 다루는 운영 중심 가이드입니다.', '멀티 브로커 시스템은 Provider API를 어댑터 뒤에 격리하고 표준 금융 상품, 시장 데이터, 주문, 포지션과 기능 모델을 제공해야 합니다.'],
  'research/instrument-domain-model': ['트레이딩 시스템 금융 상품 도메인 모델 설계', '주식, 채권, ETF, FX, 파생상품, 무기한 계약, 지수와 여러 시장 상품을 직교 개념으로 모델링합니다.', '운영 환경의 트레이딩 시스템은 상속 트리 대신 식별자, 경제 속성, 계약 조건, 상장, Provider 매핑과 수명 주기를 분리해 모델링해야 합니다.'],
  'research/rust-trading-system-guide': ['Rust 트레이딩 시스템 엔지니어링 가이드', 'Rust 어댑터, 표준 금융 상품, OMS, 리스크, 실행과 조정을 연결하는 가이드입니다.', 'Rust 트레이딩 시스템은 Provider I/O, 도메인 모델, OMS, 리스크 결정과 실행 커널을 분리하고 연결 끊김과 중복 이벤트에서 복구할 수 있어야 합니다.'],
  'research/multi-broker-trading-guide': ['멀티 브로커 트레이딩 아키텍처 가이드', 'API 차이, Provider 기능, 금융 상품 매핑, 주문 수명 주기와 조정을 정리합니다.', '멀티 브로커 설계의 핵심은 기능 범위, 표준 금융 상품 ID, Provider 네이티브 ID와 복구 가능한 주문 상태 머신입니다.'],
  'research/ai-trading-agent-guide': ['AI 트레이딩 에이전트 엔지니어링 가이드', '안전한 AI 트레이딩 에이전트, 도구 권한, 리스크, 승인과 감사 가능한 실행을 다루는 기술 지도입니다.', '안전한 AI 트레이딩 에이전트는 경계가 있는 워크플로입니다. 관찰, 조사, 추론, 리스크, 승인, 실행, 조정과 감사를 분리합니다.']
};
const localizedResearchSets = { 'zh-cn': [zhResearchCopy, zhSectionNames, '简要回答。', '最后更新：', 'zh-CN'], ja: [jaResearchCopy, {}, '要約。', '最終更新：', 'ja'], ko: [koResearchCopy, {}, '요약.', '최종 업데이트: ', 'ko'] };

function localizedResearchArticlePage(item, localeKey = 'zh-cn') {
  const [copySet, sectionNames, answerLabel, updatedLabel, lang] = localizedResearchSets[localeKey];
  const copy = copySet[item.route];
  if (!copy) return articlePage(item);
  const route = `${localeKey}/${item.route}`;
  const sections = item.sections.map(([heading, html]) => `<section><h2>${esc(sectionNames[heading] || heading)}</h2>${html}</section>`).join('');
  const body = `${breadcrumb(route, copy[0])}<article class="kb-article"><p class="kb-eyebrow">${esc(item.category)} · TRUEFIX LABS</p><h1>${esc(copy[0])}</h1><p class="kb-dek">${esc(copy[1])}</p><p class="kb-answer"><strong>${answerLabel}</strong> ${esc(copy[2])}</p>${sections}${sourcesHtml(articleSources[item.route] || [['TrueFix Labs project repository', 'https://github.com/truefix-labs/truefix-studio']])}${relatedHtml(item.related)}<p class="kb-updated">${updatedLabel}${updated}</p></article>`;
  const langCode = localeKey === 'zh-cn' ? 'zh-CN' : localeKey;
  const alternates = [['en', `${origin}/${item.route}/`], [langCode, `${origin}/${route}/`]];
  return shell({ title: `${copy[0]} | TrueFix Labs`, description: copy[1], route, type: 'TechArticle', body, locale: lang, alternates });
}

const zhPillarCopy = {
  'research/rust-trading-system-guide': ['Rust 交易系统工程指南', '连接 Rust 适配器、统一金融工具、OMS、风控、执行和对账的工程指南。'],
  'research/multi-broker-trading-guide': ['多券商交易架构指南', '从 API 差异、Provider 能力和金融工具映射，到订单生命周期和对账的实践路线。'],
  'research/ai-trading-agent-guide': ['AI 交易代理工程指南', '关于安全 AI 交易代理、工具权限、风控、人工审批和可审计执行的技术地图。']
};

const jaPillarCopy = {
  'research/rust-trading-system-guide': ['Rust 取引システムエンジニアリングガイド', 'Rust アダプター、正規化された金融商品、OMS、リスク、執行、照合をつなぐガイド。'],
  'research/multi-broker-trading-guide': ['マルチブローカー取引アーキテクチャガイド', 'API 差異、Provider 能力、金融商品マッピング、注文ライフサイクル、照合を整理します。'],
  'research/ai-trading-agent-guide': ['AI 取引エージェントエンジニアリングガイド', '安全な AI エージェント、ツール権限、リスク、承認、監査可能な執行を扱います。']
};
const koPillarCopy = {
  'research/rust-trading-system-guide': ['Rust 트레이딩 시스템 엔지니어링 가이드', 'Rust 어댑터, 표준 금융 상품, OMS, 리스크, 실행과 조정을 연결하는 가이드입니다.'],
  'research/multi-broker-trading-guide': ['멀티 브로커 트레이딩 아키텍처 가이드', 'API 차이, Provider 기능, 금융 상품 매핑, 주문 수명 주기와 조정을 정리합니다.'],
  'research/ai-trading-agent-guide': ['AI 트레이딩 에이전트 엔지니어링 가이드', '안전한 AI 에이전트, 도구 권한, 리스크, 승인과 감사 가능한 실행을 다룹니다.']
};

function localizedPillarPage([route, title, description, related], localeKey = 'zh-cn') {
  const copy = (localeKey === 'zh-cn' ? zhPillarCopy : localeKey === 'ja' ? jaPillarCopy : koPillarCopy)[route];
  const localizedRoute = `${localeKey}/${route}`;
  const lang = localeKey === 'zh-cn' ? 'zh-CN' : localeKey;
  const cards = related.map(item => [item.startsWith('research/') ? `${localeKey}/${item}` : item, item.split('/').pop().replaceAll('-', ' '), localeKey === 'ja' ? '関連する取引エンジニアリングテーマ。' : localeKey === 'ko' ? '관련 트레이딩 엔지니어링 주제입니다.' : '相关交易工程主题。']);
  const labels = localeKey === 'ja' ? ['ガイドのテーマ', 'このガイドは、状態のずれ、重複注文、権限逸脱が起きやすい境界をつなぎ、Provider のネイティブな証拠を保持します。'] : localeKey === 'ko' ? ['가이드 주제', '이 가이드는 상태 불일치, 중복 주문과 권한 초과가 발생하기 쉬운 경계를 연결하고 Provider 네이티브 증거를 보존합니다.'] : ['指南主题', '这份指南把交易系统中最容易产生状态漂移、重复订单和权限越界的工程边界连接起来，并保留 Provider 原生证据。'];
  const body = `${breadcrumb(localizedRoute, copy[0])}<div class="kb-hero"><p class="kb-eyebrow">TRUEFIX LABS · TRADING ENGINEERING</p><h1>${esc(copy[0])}</h1><p class="kb-dek">${esc(copy[1])}</p><p class="kb-answer">${esc(labels[1])}</p></div><section class="kb-card-grid"><h2>${labels[0]}</h2><div class="kb-cards">${cards.map(([href, cardTitle, cardDescription]) => `<a class="kb-card" href="${link(href)}"><span>Research</span><h3>${esc(cardTitle)}</h3><p>${esc(cardDescription)}</p></a>`).join('')}</div></section>${sourcesHtml([['TrueFix Labs GitHub organization', 'https://github.com/truefix-labs'], ['TrueFix Studio repository', 'https://github.com/truefix-labs/truefix-studio']])}`;
  const langCode = localeKey === 'zh-cn' ? 'zh-CN' : localeKey;
  const alternates = [['en', `${origin}/${route}/`], [langCode, `${origin}/${localizedRoute}/`]];
  return shell({ title: `${copy[0]} | TrueFix Labs`, description: copy[1], route: localizedRoute, body, locale: lang, alternates });
}

function indexPage(route, title, description, cards) {
  const body = `${breadcrumb(route, title)}<div class="kb-hero"><p class="kb-eyebrow">TRUEFIX LABS · TRADING ENGINEERING</p><h1>${esc(title)}</h1><p class="kb-dek">${esc(description)}</p><p class="kb-answer">This knowledge base publishes technical explanations, comparison tables, architecture patterns, failure modes, and links to primary documentation. Pages are written for engineers building or evaluating trading systems.</p></div><section class="kb-card-grid"><h2>Explore this knowledge base</h2><div class="kb-cards">${cards.map(([route2, title2, desc]) => `<a class="kb-card" href="${link(route2)}"><span>${esc(route2.split('/')[0].replace('-', ' '))}</span><h3>${esc(title2)}</h3><p>${esc(desc)}</p></a>`).join('')}</div></section><section class="kb-note"><h2>Evidence policy</h2><p>Technical claims should be supported by provider documentation, standards, source code, or a reproducible example. Unknown or unverified capabilities are labelled instead of inferred.</p></section>${sourcesHtml([['TrueFix Labs GitHub organization', 'https://github.com/truefix-labs'], ['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']])}`;
  return shell({ title: `${title} | TrueFix Labs`, description, route, body });
}

function brokerPage([slug, name, docs, markets, api, rust, repo]) {
  const route = `brokers/${slug}`;
  const title = `${name} API Technical Reference`;
  const description = `Technical reference for ${name} market data, authentication, REST, WebSocket, trading, account APIs, environments, SDKs, and integration considerations.`;
  const sources = [[`${name} official developer documentation`, docs], ['TrueFix Studio repository', 'https://github.com/truefix-labs/truefix-studio']];
  const body = `${breadcrumb(route, title)}<article class="kb-article"><p class="kb-eyebrow">BROKER API · TECHNICAL REFERENCE</p><h1>${esc(title)}</h1><p class="kb-dek">${esc(description)}</p><p class="kb-answer"><strong>Quick answer.</strong> ${esc(name)} should be integrated as a capability-scoped provider adapter. Confirm market, account, product, environment, permissions, native symbols, rate limits, and order semantics from the official documentation before enabling execution.</p><section><h2>Overview</h2><p>${esc(markets)}</p></section><section><h2>API surface</h2><table class="kb-table"><thead><tr><th>Area</th><th>Current reference</th></tr></thead><tbody><tr><td>Authentication</td><td>Provider-specific credentials and session lifecycle; see official docs.</td></tr><tr><td>REST API</td><td>${esc(api)}</td></tr><tr><td>WebSocket / streaming</td><td>Confirm channels, sequence numbers, reconnect rules, and entitlement requirements.</td></tr><tr><td>FIX</td><td>Not verified in this release; do not infer FIX availability from REST or WebSocket support.</td></tr><tr><td>Paper / demo / testnet</td><td>Confirm the environment and account scope in the provider documentation.</td></tr><tr><td>Rust SDK</td><td>${esc(rust)}</td></tr><tr><td>Last verified</td><td>${updated}; production capability review pending.</td></tr></tbody></table></section><section><h2>Integration considerations</h2><ul><li>Keep the provider-native symbol and order ID alongside canonical identifiers.</li><li>Model account, environment, permissions, and entitlements separately.</li><li>Use REST snapshots with streaming events for reconciliation.</li><li>Persist an Unknown state when an order response is ambiguous.</li></ul></section>${sourcesHtml(sources)}${relatedHtml(['engineering/broker-adapter-architecture','engineering/instrument-master','data/broker-api-matrix'])}</article>`;
  return shell({ title: `${title} | TrueFix Labs`, description, route, type: 'TechArticle', body });
}

function comparisonPage([slug, title, a, b, sources]) {
  const route = `compare/${slug}`;
  const description = `${title}: compare authentication, REST, WebSocket, FIX, market data, order APIs, test environments, symbol conventions, and architecture trade-offs.`;
  const isTransport = slug === 'rest-vs-websocket-vs-fix';
  const left = isTransport ? 'REST' : a, right = isTransport ? 'WebSocket / FIX' : b;
  const rows = isTransport ? [['Latency model', 'Request / response; simple operational model', 'Streaming or session protocol; sequence and reconnect design required'], ['Market data', 'Snapshots and request-driven data', 'Streaming updates, sequence handling, and gap recovery'], ['Order operations', 'Common for command and query endpoints', 'FIX or streaming command protocols need session controls'], ['Operational burden', 'Lower protocol complexity', 'Higher state, session, and recovery complexity']] : [['Authentication', `Use ${a} credential and account lifecycle rules`, `Use ${b} credential and account lifecycle rules`], ['REST', 'Confirm endpoints, signing, rate limits, and error semantics', 'Confirm endpoints, signing, rate limits, and error semantics'], ['WebSocket', 'Confirm channels, sequence, and reconnect behavior', 'Confirm channels, sequence, and reconnect behavior'], ['Order API', 'Preserve native order IDs and client IDs', 'Preserve native order IDs and client IDs'], ['Symbol conventions', 'Map native symbols to a canonical instrument', 'Map native symbols to a canonical instrument'], ['Test environment', 'Confirm paper, demo, or testnet scope', 'Confirm paper, demo, or testnet scope']];
  const body = `${breadcrumb(route, title)}<article class="kb-article"><p class="kb-eyebrow">COMPARISON · API ARCHITECTURE</p><h1>${esc(title)}</h1><p class="kb-dek">${esc(description)}</p><p class="kb-answer"><strong>Quick answer.</strong> There is no universal winner. Choose the API with the required market, account, order, environment, and operational guarantees, then isolate its differences behind a provider adapter and canonical instrument boundary.</p><section><h2>Comparison table</h2><table class="kb-table"><thead><tr><th>Dimension</th><th>${esc(left)}</th><th>${esc(right)}</th></tr></thead><tbody>${rows.map(row => `<tr><th>${esc(row[0])}</th><td>${esc(row[1])}</td><td>${esc(row[2])}</td></tr>`).join('')}</tbody></table></section><section><h2>Architecture considerations</h2><p>Compare capabilities at runtime rather than switching on provider name alone. Keep account and environment explicit, verify instrument mappings, persist native receipts, and combine streaming events with REST reconciliation. The comparison should be re-checked when provider documentation changes.</p></section>${sourcesHtml(sources.map((url, index) => [`Official source ${index + 1}`, url]))}${relatedHtml(['engineering/broker-adapter-architecture','engineering/instrument-master','engineering/trading-reconciliation','data/broker-api-matrix'])}</article>`;
  return shell({ title: `${title} | TrueFix Labs`, description, route, type: 'TechArticle', body });
}

function aiPage([slug, title, description, points]) {
  const route = `ai-trading/${slug}`;
  const body = `${breadcrumb(route, title)}<article class="kb-article"><p class="kb-eyebrow">AI TRADING · SAFETY AND SYSTEMS</p><h1>${esc(title)}</h1><p class="kb-dek">${esc(description)}</p><p class="kb-answer"><strong>Short answer.</strong> A safe AI trading agent is a bounded workflow, not an unrestricted model with a broker credential. Separate observation, research, reasoning, risk, approval, execution, reconciliation, and audit, and make the execution boundary deterministic.</p><section><h2>Reference workflow</h2><pre><code>${esc(points.join('\n'))}</code></pre><p>Analysis permission is not execution permission. Tools should declare their data scope, account scope, environment, allowed instruments, limits, expiry, and audit requirements.</p></section><section><h2>Production controls</h2><ul><li>Use scoped credentials and read-only defaults.</li><li>Require deterministic validation before any order command.</li><li>Enforce maximum order size, allowed venues, daily loss, and rate limits.</li><li>Support dry-run, paper, demo, and testnet environments.</li><li>Persist the prompt or decision revision, evidence, policy result, approval, and provider receipt.</li><li>Fail closed on stale data, missing mappings, expired approvals, or unknown execution states.</li></ul></section>${sourcesHtml([['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio'], ['OpenAI safety and platform documentation', 'https://platform.openai.com/docs']])}${relatedHtml(['engineering/risk-engine','engineering/execution-engine','engineering/idempotent-order-execution'])}</article>`;
  return shell({ title: `${title} | TrueFix Labs`, description, route, type: 'TechArticle', body });
}

function matrixPage() {
  const route = 'data/broker-api-matrix';
  const title = 'Broker API Matrix for Algorithmic Trading';
  const description = 'A structured broker API matrix covering asset classes, REST, WebSocket, FIX, paper trading, testnet, market data, order APIs, SDKs, official documentation, and verification status.';
  const rows = brokerData.map(([slug, name, docs, markets, api, rust]) => `<tr><th scope="row"><a href="${link(`brokers/${slug}`)}">${esc(name)}</a></th><td>${esc(markets)}</td><td>${esc(api)}</td><td>Confirm</td><td>Unknown</td><td>Unknown</td><td>${sourceLink('Official docs', docs)}</td><td>${updated}</td></tr>`).join('');
  const body = `${breadcrumb(route, title)}<article class="kb-article"><p class="kb-eyebrow">DATASET · BROKER API CAPABILITIES</p><h1>${esc(title)}</h1><p class="kb-dek">${esc(description)}</p><p class="kb-answer"><strong>How to use this matrix.</strong> Treat each row as an integration starting point, not a guarantee of account access. Capabilities vary by region, product, account, permission, environment, and entitlement. Follow the official documentation link and verify the exact capability before production execution.</p><div class="kb-table-scroll"><table class="kb-table"><thead><tr><th>Broker</th><th>Asset classes / scope</th><th>REST / streaming note</th><th>Paper / testnet</th><th>FIX</th><th>Rust SDK</th><th>Official documentation</th><th>Last verified</th></tr></thead><tbody>${rows}</tbody></table></div><section><h2>Data model</h2><p>The page is generated from the broker data in <code>scripts/generate-knowledge-base.mjs</code>. Broker pages, this table, JSON-LD, RSS links, and sitemaps are generated from the same route set so a capability is not maintained in multiple hand-edited tables.</p></section>${sourcesHtml([['TrueFix Studio project repository', 'https://github.com/truefix-labs/truefix-studio']])}</article>`;
  return shell({ title: `${title} | TrueFix Labs`, description, route, type: 'Dataset', body });
}

const researchLocales = {
  en: { route: 'research', lang: 'en', title: 'Trading Engineering Research', description: 'Technical research and engineering notes on algorithmic trading, broker APIs, market data, execution systems, risk engines, multi-venue trading and AI trading agents.', answer: 'This research index organizes TrueFix Labs notes by architecture, instruments, execution, broker APIs, data, and AI trading. Each page is static, source-linked, and written to answer an engineering question directly.' },
  'zh-cn': { route: 'zh-cn/research', lang: 'zh-CN', title: '交易工程研究', description: '关于算法交易、券商 API、市场数据、执行系统、风险引擎、多市场交易和 AI 交易代理的技术研究与工程笔记。', answer: '这里按交易架构、金融工具、执行、券商 API、数据和 AI 交易整理 TrueFix Labs 的研究内容。每个页面都是静态页面，带有来源链接，并直接回答工程问题。' },
  ja: { route: 'ja/research', lang: 'ja', title: 'トレーディングエンジニアリング研究', description: 'アルゴリズム取引、ブローカー API、市場データ、執行システム、リスクエンジン、マルチベニュー取引、AI 取引エージェントに関する技術研究。', answer: 'この研究インデックスでは、アーキテクチャ、金融商品、執行、ブローカー API、データ、AI 取引に関する TrueFix Labs のノートを整理しています。各ページは静的で、出典リンクを持ち、エンジニアリングの質問に直接答えます。' },
  ko: { route: 'ko/research', lang: 'ko', title: '트레이딩 엔지니어링 연구', description: '알고리즘 트레이딩, 브로커 API, 시장 데이터, 실행 시스템, 리스크 엔진, 멀티 베뉴 거래와 AI 트레이딩 에이전트에 관한 기술 연구입니다.', answer: '이 연구 인덱스는 아키텍처, 금융 상품, 실행, 브로커 API, 데이터, AI 트레이딩에 관한 TrueFix Labs 노트를 정리합니다. 각 페이지는 정적이며 출처 링크를 포함하고 엔지니어링 질문에 직접 답합니다.' }
};

function localizedResearchPage(localeKey) {
  const locale = researchLocales[localeKey];
  const cards = localeKey === 'zh-cn' ? [
    ['zh-cn/research/studio-indicators', 'TrueFix Studio 支持的技术指标', '来自 Studio 实际共享目录的 80 个指标及其用途说明。'],
    ['zh-cn/research/instrument-domain-model', '金融工具领域模型', '用正交维度建模金融工具、合约、挂牌、Provider 映射与生命周期。'],
    ['zh-cn/research/multi-broker-trading-guide', '多券商交易架构指南', '从 Provider 能力差异、Instrument 映射、订单生命周期到对账。'],
    ['zh-cn/research/rust-trading-system-guide', 'Rust 交易系统工程指南', '连接 Rust 适配器、OMS、风控、执行和对账主题。'],
    ['zh-cn/research/ai-trading-agent-guide', 'AI 交易代理工程指南', '安全代理、权限、风控、人工审批和审计。']
  ] : localeKey === 'ja' ? [
    ['ja/research/studio-indicators', 'TrueFix Studio 対応テクニカル指標', 'Studio の共有カタログにある 80 指標と用途。'],
    ['ja/research/instrument-domain-model', '金融商品ドメインモデル', '金融商品、契約、上場、Provider 対応、ライフサイクルを直交する概念で設計。'],
    ['ja/research/multi-broker-trading-guide', 'マルチブローカー取引アーキテクチャ', 'Provider の差異、Instrument 対応、注文ライフサイクル、照合を整理。'],
    ['ja/research/rust-trading-system-guide', 'Rust 取引システムエンジニアリングガイド', 'Rust アダプター、OMS、リスク、執行、照合をつなぐガイド。'],
    ['ja/research/ai-trading-agent-guide', 'AI 取引エージェントエンジニアリングガイド', '安全なエージェント、権限、リスク、承認、監査。']
  ] : localeKey === 'ko' ? [
    ['ko/research/studio-indicators', 'TrueFix Studio 지원 기술 지표', 'Studio 공유 카탈로그의 80개 지표와 용도 설명입니다.'],
    ['ko/research/instrument-domain-model', '금융 상품 도메인 모델', '금융 상품, 계약, 상장, Provider 매핑과 수명 주기를 직교 개념으로 설계합니다.'],
    ['ko/research/multi-broker-trading-guide', '멀티 브로커 거래 아키텍처 가이드', 'Provider 차이, Instrument 매핑, 주문 수명 주기와 조정을 정리합니다.'],
    ['ko/research/rust-trading-system-guide', 'Rust 트레이딩 시스템 엔지니어링 가이드', 'Rust 어댑터, OMS, 리스크, 실행과 조정 주제를 연결합니다.'],
    ['ko/research/ai-trading-agent-guide', 'AI 트레이딩 에이전트 엔지니어링 가이드', '안전한 에이전트, 권한, 리스크, 승인과 감사입니다.']
  ] : [
    ['research/studio-indicators', 'TrueFix Studio Supported Technical Indicators', '80 indicators from the Studio shared catalogue with practical descriptions.'],
    ['research/instrument-domain-model', 'Financial Instrument Domain Model', 'Orthogonal modeling for instruments, contracts, listings, provider mappings, and lifecycle.'],
    ['research/multi-broker-trading-guide', 'The Multi-Broker Trading Architecture Guide', 'Provider differences, instrument mappings, order lifecycle, and reconciliation.'],
    ['research/rust-trading-system-guide', 'The Rust Trading System Engineering Guide', 'Rust adapters, OMS, risk, execution, and reconciliation in one engineering map.'],
    ['research/ai-trading-agent-guide', 'The AI Trading Agent Engineering Guide', 'Safe agents, permissions, risk controls, approval, and audit.']
  ];
  const body = `${breadcrumb(locale.route, locale.title)}<div class="kb-hero"><p class="kb-eyebrow">TRUEFIX LABS · TRADING ENGINEERING</p><h1>${esc(locale.title)}</h1><p class="kb-dek">${esc(locale.description)}</p><p class="kb-answer">${esc(locale.answer)}</p></div><section class="kb-card-grid"><h2>${localeKey === 'zh-cn' ? '研究主题' : localeKey === 'ja' ? '研究テーマ' : localeKey === 'ko' ? '연구 주제' : 'Research topics'}</h2><div class="kb-cards">${cards.map(([route, title, description]) => `<a class="kb-card" href="${link(route)}"><span>Research</span><h3>${esc(title)}</h3><p>${esc(description)}</p></a>`).join('')}</div></section>${sourcesHtml([['TrueFix Labs GitHub organization', 'https://github.com/truefix-labs'], ['TrueFix Studio repository', 'https://github.com/truefix-labs/truefix-studio']])}`;
  const alternates = Object.entries(researchLocales).map(([key, value]) => [key === 'zh-cn' ? 'zh-CN' : key, `${origin}/${value.route}/`]);
  return shell({ title: `${locale.title} | TrueFix Labs`, description: locale.description, route: locale.route, body, locale: locale.lang, alternates: [...alternates, ['x-default', `${origin}/research/`]] });
}

const indicatorLocales = {
  en: { route: 'research/studio-indicators', lang: 'en', title: 'TrueFix Studio Supported Technical Indicators', description: 'The audited technical indicator catalogue currently exposed by TrueFix Studio, with plain-language descriptions, implementation notes, and multilingual names.' },
  'zh-cn': { route: 'zh-cn/research/studio-indicators', lang: 'zh-CN', title: 'TrueFix Studio 支持的技术指标', description: 'TrueFix Studio 当前支持的技术指标目录，包含中文和英文名称、用途说明以及实现来源。' },
  ja: { route: 'ja/research/studio-indicators', lang: 'ja', title: 'TrueFix Studio 対応テクニカル指標', description: 'TrueFix Studio が現在提供するテクニカル指標の一覧。名称、用途、実装ソースを多言語で確認できます。' },
  ko: { route: 'ko/research/studio-indicators', lang: 'ko', title: 'TrueFix Studio 지원 기술 지표', description: 'TrueFix Studio에서 현재 제공하는 기술 지표 목록과 이름, 용도, 구현 소스를 다국어로 확인합니다.' }
};

function indicatorPage(localeKey) {
  const locale = indicatorLocales[localeKey];
  const isZh = localeKey === 'zh-cn';
  const isJa = localeKey === 'ja';
  const isKo = localeKey === 'ko';
  const groupLabels = isZh ? { trend: '趋势与平滑', momentum: '动量与振荡', volatility: '波动率与通道', volume: '成交量与资金流', statistics: '统计特征' } : isJa ? { trend: 'トレンドと平滑化', momentum: 'モメンタムとオシレーター', volatility: 'ボラティリティとチャネル', volume: '出来高とマネーフロー', statistics: '統計特徴量' } : isKo ? { trend: '추세 및 평활', momentum: '모멘텀 및 오실레이터', volatility: '변동성 및 채널', volume: '거래량 및 자금 흐름', statistics: '통계 특성' } : { trend: 'Trend and smoothing', momentum: 'Momentum and oscillators', volatility: 'Volatility and channels', volume: 'Volume and money flow', statistics: 'Statistical features' };
  const intro = isZh ? '这份目录来自 TrueFix Studio 的共享指标目录。它反映应用当前暴露的指标定义；参数范围、输出字段和公式证据仍应以对应版本的 Studio 源码为准。' : isJa ? 'この一覧は TrueFix Studio の共有指標カタログから生成されています。パラメータ範囲、出力フィールド、式の根拠は対象バージョンのソースで確認してください。' : isKo ? '이 목록은 TrueFix Studio의 공유 지표 카탈로그에서 생성됩니다. 매개변수 범위, 출력 필드, 공식 근거는 해당 버전의 소스 코드에서 확인해야 합니다.' : 'This catalogue is generated from TrueFix Studio’s shared indicator catalogue. Parameter ranges, output fields, and formula evidence should be checked against the corresponding Studio source revision.';
  const tableHead = isZh ? ['指标', '英文名称', '类别', '说明'] : isJa ? ['指標', '英語名', '分類', '説明'] : isKo ? ['지표', '영문 이름', '분류', '설명'] : ['Indicator', 'English name', 'Group', 'Description'];
  const rows = studioIndicators.map(item => {
    const group = indicatorGroup(item.id);
    const name = localeKey === 'en' ? item.en : item.zh;
    return `<tr><th scope="row"><code>${esc(item.id)}</code><br>${esc(name)}</th><td>${esc(item.en)}</td><td>${esc(groupLabels[group])}</td><td>${esc(indicatorDescription[localeKey === 'en' ? 'en' : localeKey === 'zh-cn' ? 'zh' : localeKey][group])}</td></tr>`;
  }).join('');
  const sourceText = isZh ? '来源：TrueFix Studio 的共享指标目录与市场内核实现。' : isJa ? '出典：TrueFix Studio の共有指標カタログとマーケットカーネル実装。' : isKo ? '출처: TrueFix Studio 공유 지표 카탈로그 및 시장 커널 구현.' : 'Source: TrueFix Studio shared indicator catalogue and market-kernel implementation.';
  const links = Object.entries(indicatorLocales).map(([key, value]) => [key === 'zh-cn' ? 'zh-CN' : key, `${origin}/${value.route}/`]);
  const body = `${breadcrumb(locale.route, locale.title)}<article class="kb-article"><p class="kb-eyebrow">TRUEFIX STUDIO · TECHNICAL INDICATORS</p><h1>${esc(locale.title)}</h1><p class="kb-dek">${esc(locale.description)}</p><p class="kb-answer"><strong>${isZh ? '如何理解这份列表。' : isJa ? 'この一覧の読み方。' : isKo ? '목록 읽는 방법.' : 'How to read this list.'}</strong> ${esc(intro)}</p><section><h2>${isZh ? '支持的指标目录' : isJa ? '対応指標カタログ' : isKo ? '지원 지표 카탈로그' : 'Supported indicator catalogue'}</h2><div class="kb-table-scroll"><table class="kb-table"><thead><tr>${tableHead.map(label => `<th>${label}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div><p class="kb-updated">${esc(sourceText)} Last verified: ${updated}.</p></section><section><h2>${isZh ? '实现边界' : isJa ? '実装上の境界' : isKo ? '구현 경계' : 'Implementation boundary'}</h2><p>${isZh ? 'TrueFix Studio 将指标计算放在共享的 headless market-kernel 中，Desktop、Web、AI 和 Quant 使用同一套计算服务。指标可用不等于每个指标的公式审计已完成；应用会分别记录实现版本和公式证据状态。' : isJa ? 'TrueFix Studio は指標計算を共有の headless market-kernel に置き、Desktop、Web、AI、Quant が同じ計算サービスを使います。計算できることと式の監査が完了していることは別であり、実装バージョンと式の根拠を分けて記録します。' : isKo ? 'TrueFix Studio는 지표 계산을 공유 headless market-kernel에 두고 Desktop, Web, AI, Quant가 같은 계산 서비스를 사용합니다. 계산 가능 여부와 공식 감사 완료 여부는 별개이며 구현 버전과 공식 근거 상태를 분리해 기록합니다.' : 'TrueFix Studio keeps indicator calculation in a shared headless market-kernel used by Desktop, Web, AI, and Quant. Runtime availability does not imply that every formula has completed reconciliation; implementation version and formula evidence are tracked separately.'}</p></section>${sourcesHtml([['TrueFix Studio indicator catalogue', 'https://github.com/truefix-labs/truefix-studio/blob/main/frontend/src/lib/indicators.ts'], ['TrueFix Studio indicator service', 'https://github.com/truefix-labs/truefix-studio/blob/main/src-tauri/src/indicator_service.rs'], ['TrueFix Studio market-kernel indicators', 'https://github.com/truefix-labs/truefix-studio/blob/main/crates/tf-market-kernel/src/indicator.rs']])}${relatedHtml(['research/building-a-multi-broker-trading-system-in-rust','engineering/instrument-master','engineering/trading-system-architecture'])}</article>`;
  return shell({ title: `${locale.title} | TrueFix Labs`, description: locale.description, route: locale.route, type: 'Dataset', body, locale: locale.lang, alternates: [...links, ['x-default', `${origin}/research/studio-indicators/`]] });
}

function writePage(route, html) {
  return (async () => { const target = join(root, route, 'index.html'); await mkdir(dirname(target), { recursive: true }); await writeFile(target, html); })();
}

await Promise.all([...allRoutes].map(route => rm(join(root, route), { recursive: true, force: true })));
await writePage('research', localizedResearchPage('en'));
await writePage('engineering', indexPage('engineering', ...categories.engineering, articles.map(item => [item.route, item.title, item.description])));
await writePage('brokers', indexPage('brokers', ...categories.brokers, brokerData.map(([slug, name, docs, markets]) => [`brokers/${slug}`, `${name} API Technical Reference`, markets])));
await writePage('compare', indexPage('compare', ...categories.compare, comparisonData.map(([slug, title]) => [`compare/${slug}`, title, 'Structured API and architecture comparison.'])));
await writePage('ai-trading', indexPage('ai-trading', ...categories['ai-trading'], aiArticles.map(([slug, title, description]) => [`ai-trading/${slug}`, title, description])));
await writePage('data', indexPage('data', ...categories.data, [['data/broker-api-matrix', 'Broker API Matrix for Algorithmic Trading', 'Generated capability matrix with official documentation links and verification state.']]));
await Promise.all(articles.map(item => writePage(item.route, articlePage(item))));
await Promise.all(brokerData.map(item => writePage(`brokers/${item[0]}`, brokerPage(item))));
await Promise.all(comparisonData.map(item => writePage(`compare/${item[0]}`, comparisonPage(item))));
await Promise.all(aiArticles.map(item => writePage(`ai-trading/${item[0]}`, aiPage(item))));
await writePage('data/broker-api-matrix', matrixPage());
await Promise.all(pillarData.map(([route, title, description, related]) => writePage(route, indexPage(route, title, description, related.map(item => [item, item.split('/').pop().replaceAll('-', ' '), 'Related technical guide in this pillar.'])))));
await Promise.all(Object.keys(zhResearchCopy).filter(route => articles.some(item => item.route === route)).map(route => writePage(`zh-cn/${route}`, localizedResearchArticlePage(articles.find(item => item.route === route)))));
await Promise.all(pillarData.map(item => writePage(`zh-cn/${item[0]}`, localizedPillarPage(item))));
await Promise.all(Object.keys(jaResearchCopy).filter(route => articles.some(item => item.route === route)).map(route => writePage(`ja/${route}`, localizedResearchArticlePage(articles.find(item => item.route === route), 'ja'))));
await Promise.all(pillarData.map(item => writePage(`ja/${item[0]}`, localizedPillarPage(item, 'ja'))));
await Promise.all(Object.keys(koResearchCopy).filter(route => articles.some(item => item.route === route)).map(route => writePage(`ko/${route}`, localizedResearchArticlePage(articles.find(item => item.route === route), 'ko'))));
await Promise.all(pillarData.map(item => writePage(`ko/${item[0]}`, localizedPillarPage(item, 'ko'))));
await Promise.all(Object.keys(researchLocales).filter(locale => locale !== 'en').map(locale => writePage(researchLocales[locale].route, localizedResearchPage(locale))));
await Promise.all(Object.keys(indicatorLocales).map(locale => writePage(indicatorLocales[locale].route, indicatorPage(locale))));

const css = `/* Technical knowledge base layout. */
.knowledge-page { background: #f4f4ef; color: #111820; min-height: 70vh; }
.knowledge-wrap { max-width: 1180px; margin: 0 auto; padding: 72px 24px 120px; }
.kb-breadcrumb { display:flex; flex-wrap:wrap; gap:10px; color:#68727b; font:500 11px/1.5 var(--font-mono); letter-spacing:.04em; text-transform:uppercase; }
.kb-breadcrumb a { color:#347fb8; }
.kb-hero, .kb-article { max-width: 920px; }
.kb-eyebrow { margin:42px 0 16px; color:#347fb8; font:500 11px/1.4 var(--font-mono); letter-spacing:.12em; text-transform:uppercase; }
.kb-hero h1, .kb-article h1 { max-width: 900px; margin:0; font-size:clamp(42px,6vw,78px); line-height:1.04; letter-spacing:-.065em; text-wrap:balance; }
.kb-dek { max-width:780px; margin:26px 0; color:#56616c; font-size:20px; line-height:1.65; }
.kb-answer { max-width:820px; margin:34px 0 60px; border-left:3px solid #4dc8a0; padding:20px 24px; background:#e7eee9; color:#26343b; font-size:18px; line-height:1.8; }
.kb-article section { margin:64px 0; }
.kb-article h2, .kb-card-grid h2, .kb-note h2 { margin:0 0 20px; font-size:32px; letter-spacing:-.04em; }
.kb-article h3 { margin:28px 0 10px; font-size:20px; }
.kb-article p, .kb-article li, .kb-note p { max-width:820px; color:#45525c; font-size:16px; line-height:1.85; }
.kb-article ul, .kb-article ol { max-width:820px; padding-left:24px; }
.kb-article code { padding:2px 5px; background:#e2e5e2; font-family:var(--font-mono); font-size:.9em; }
.kb-article pre { max-width:900px; overflow:auto; border:1px solid #c5cbc7; background:#17212b; padding:22px; color:#cce7dc; line-height:1.65; }
.kb-article pre code { padding:0; background:none; color:inherit; }
.kb-table-scroll { overflow:auto; }
.kb-table { width:100%; min-width:700px; border-collapse:collapse; font-size:14px; }
.kb-table th, .kb-table td { border:1px solid #c5cbc7; padding:13px 14px; vertical-align:top; text-align:left; line-height:1.55; }
.kb-table th { background:#e4e8e5; color:#25313a; font-weight:700; }
.kb-table td { color:#4b5962; background:rgba(255,255,255,.32); }
.kb-sources, .kb-related { border-top:1px solid #c5cbc7; padding-top:26px; }
.kb-sources ul, .kb-related ul { padding-left:20px; }
.kb-sources p, .kb-updated { color:#68727b; font:400 12px/1.7 var(--font-mono); }
.kb-card-grid { margin-top:90px; }
.kb-cards { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.kb-card { display:block; min-height:190px; border:1px solid #c5cbc7; background:rgba(255,255,255,.38); padding:24px; transition:transform .2s,background .2s; }
.kb-card:hover { background:#fff; transform:translateY(-3px); }
.kb-card span { color:#347fb8; font:500 10px/1.4 var(--font-mono); letter-spacing:.1em; text-transform:uppercase; }
.kb-card h3 { margin:18px 0 10px; color:#17212b; font-size:21px; letter-spacing:-.035em; }
.kb-card p { margin:0; color:#65717b; font-size:14px; line-height:1.65; }
.kb-note { margin-top:64px; border:1px solid #c5cbc7; padding:28px; background:#e9ece8; }
@media (max-width:800px) { .knowledge-wrap { padding:40px 20px 80px; } .kb-hero h1,.kb-article h1 { font-size:clamp(38px,11vw,54px); } .kb-dek { font-size:17px; } .kb-answer { font-size:16px; } .kb-cards { grid-template-columns:1fr; } }
`;
await writeFile(join(root, 'knowledge.css'), css);

const all = [...allRoutes].sort();
const sitemapEntry = route => `  <url><loc>${slugPath(route)}</loc><lastmod>${updated}</lastmod></url>`;
const categoriesForSitemap = ['pages','research','brokers','engineering','ai-trading'];
for (const category of categoriesForSitemap) {
  const selected = category === 'pages' ? all : all.filter(route => route.startsWith(`${category}/`) || route === category);
  await writeFile(join(root, `sitemap-${category}.xml`), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${selected.map(sitemapEntry).join('\n')}\n</urlset>\n`);
}
await writeFile(join(root, 'sitemap-index.xml'), `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${categoriesForSitemap.map(category => `  <sitemap><loc>${origin}/sitemap-${category}.xml</loc><lastmod>${updated}</lastmod></sitemap>`).join('\n')}\n</sitemapindex>\n`);

let sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
sitemap = sitemap.replace(/\n?<!-- KNOWLEDGE_BASE_START -->[\s\S]*?<!-- KNOWLEDGE_BASE_END -->/g, '');
sitemap = sitemap.replace('</urlset>', `\n<!-- KNOWLEDGE_BASE_START -->\n${all.map(sitemapEntry).join('\n')}\n<!-- KNOWLEDGE_BASE_END -->\n</urlset>`);
await writeFile(join(root, 'sitemap.xml'), sitemap);

const rssItems = articles.slice(0, 10).map(item => `    <item><title>${esc(item.title)}</title><link>${slugPath(item.route)}</link><guid>${slugPath(item.route)}</guid><description>${esc(item.description)}</description><pubDate>Mon, 28 Sep 2026 00:00:00 GMT</pubDate></item>`).join('\n');
await writeFile(join(root, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>TrueFix Labs Trading Engineering Research</title><link>${origin}/research/</link><description>Trading infrastructure, broker APIs, market data, execution, risk, Rust, FIX, and AI trading agents.</description>\n${rssItems}\n</channel></rss>\n`);
await writeFile(join(root, 'llms.txt'), `# TrueFix Labs\n\n> Trading Engineering Knowledge Base and Open Source Trading Infrastructure Portal.\n\n## Primary topics\n- Trading system architecture\n- Rust trading systems\n- Multi-broker and multi-venue design\n- Broker and exchange APIs\n- Market data and instrument identity\n- OMS, execution, risk, idempotency, and reconciliation\n- FIX, REST, and WebSocket architecture\n- AI trading agents, permissions, human approval, and audit\n\n## Primary resources\n- ${origin}/research/\n- ${origin}/engineering/\n- ${origin}/brokers/\n- ${origin}/compare/\n- ${origin}/ai-trading/\n- ${origin}/data/broker-api-matrix/\n- ${origin}/research/rust-trading-system-guide/\n- ${origin}/research/multi-broker-trading-guide/\n- ${origin}/research/ai-trading-agent-guide/\n\n## Evidence policy\nTechnical claims should link to primary provider documentation, standards, source code, or reproducible examples. Provider capabilities can vary by region, account, product, environment, and entitlement.\n`);
console.log(`Generated ${allRoutes.size} knowledge routes and ${categoriesForSitemap.length} category sitemaps.`);
