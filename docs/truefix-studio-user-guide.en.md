# TrueFix Studio User Guide

> Document version: 2026.09. TrueFix Studio is pre-release software. The product repository and installers are not public. This guide is for authorized testers and contains no private source, credentials, or download links.

## 1. Before you start

TrueFix Studio is a multi-provider trading workstation. Desktop, Web, Headless Quant, and authorized AI tools share the same instrument, capability, risk, and execution contracts. Availability depends on the selected Provider, ClientInstance, Environment, Account, Entitlement, exact instrument mapping, and runtime health evidence; the presence of a screen does not prove that a capability is available.

- Distinguish Live, Paper, Testnet, Demo, and Simulated environments.
- Validate order workflows outside Live first.
- Grant provider credentials only the required capabilities; never expose secrets in chat, screenshots, or tickets.
- TrueFix Studio is not investment advice. The account owner must verify every live action.

## 2. First run

1. Check readiness for the kernel, providers, catalog, trading projections, Intelligence, and Risk.
2. Restore the latest workspace or open the safe default layout. A workspace can restore instruments, panels, and revisions.
3. Treat `unavailable`, `stale`, `degraded`, and `rejected` as distinct states. Missing is not zero, and an error is not an empty result.

## 3. Configure a provider

Open **Provider Centre**, choose a ProviderDefinition, and create a ClientInstance:

```text
ProviderDefinition
  -> ClientInstance
  -> Environment + typed config
  -> validate and save
  -> connect
  -> capability / entitlement / account / mapping evidence
```

One provider may have multiple ClientInstances, and one ClientInstance may project multiple accounts. Secrets are write-only. “Connected” does not mean “tradable”; also verify capability, entitlement, account, mapping, environment, TradingRules, and health evidence.

## 4. Instruments and market data

Select a canonical Instrument from global search. The system resolves three independent facets:

| Facet | Content | Effect of switching |
|---|---|---|
| Historical | Bars and historical range | Replaces only the historical series |
| Realtime | Quote, Book, and Trade | Does not clear bars or order drafts |
| Trading | Rules, account, and execution route | Revalidates order fields |

Provider, ClientInstance, quality, and timestamp remain visible. Without an exact mapping, the route is rejected rather than inferred from a similar symbol.

## 5. Orders and risk

```text
Order Draft
  -> Exact Route + TradingRules
  -> Backend Review
  -> RiskGuard
  -> Explicit Submit
  -> Acknowledgement / Reconciliation
```

1. Confirm Provider, ClientInstance, Account, and Environment.
2. Complete Order Type, TIF, quantity, price, and conditional fields from the resolved OrderSchema.
3. Review instrument, side, price, quantity, fees, rules, and freshness. Any field change invalidates the old review token.
4. Submit explicitly after RiskGuard. Submission uses a deterministic client order ID and idempotency boundary.
5. If the outcome is unknown, query and reconcile; never submit again.

Kill Switch recovery, page refresh, and network reconnection never resubmit an order automatically.

## 6. Accounts and portfolio

Portfolio reads authoritative trading projections and filters by Provider, ClientInstance, Account, and Environment. App-originated and external/unknown orders remain separate. A normal refresh reads local projections; only an authoritative refresh starts provider reconciliation.

- Do not aggregate currencies without a consistent FX revision.
- `partial` or `stale` valuation is never presented as complete equity.
- After a provider disconnect or environment switch, the old account domain no longer participates in current actions.

## 7. Intelligence

Intelligence presents Observations, Signals, Composite Indices, Evidence, and historical Replay. A Signal is an analytical result with baseline, deviation, confidence, freshness, revision, and sources—not a confirmed fact or a direct order.

## 8. AI and Quant

An AI Agent can analyze only through authorized tools and propose a TradingDecision. Quant runs or replays against fixed data, calendar, fee, slippage, and revision inputs. Strategy output carries evidence, version, expiry, account, and instrument scope. Approval admits the intent into the normal Review and RiskGuard flow; it does not submit an order.

## 9. Architecture and data boundaries

The browser is not the authority for instruments, accounts, orders, market data, risk, or AI/Quant. All entry points share canonical application contracts and preserve adapter provenance. The interface does not invent missing data, silently mix providers, or hard-code capabilities from a provider name.

## 10. Troubleshooting

- **Connected but cannot trade:** check Environment, capability, entitlement, account, exact mapping, TradingRules, and freshness.
- **Historical bars but no realtime quote:** Historical and Realtime are independent; check subscription entitlement, source health, and the first Tick.
- **Cannot submit after Review:** a route, account, rule, or field change may have invalidated the token. Review again.
- **Submit timed out:** query with the original client order ID; do not create the same order again.
- **Page shows stale/unavailable:** inspect the affected facet, timestamp, and original error. Last-good data is not necessarily fresh.
