# TrueFix Studio User Guide

> Document version: 2026.09. TrueFix Studio is pre-release software. The product source repository remains private; public Nightly installers are distributed through the official TrueFix GitHub Releases page. This guide contains no private source or credentials.

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

### Unsigned macOS build

If the official pre-release app is blocked because it is not yet signed, move it into `/Applications`, then run:

```bash
xattr -cr "/Applications/TrueFix Studio.app"
```

Use this only for an app downloaded from the official TrueFix Release. The command removes quarantine metadata from that app bundle.

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

## 8. Configure and use Agent

Agent is a constrained operating assistant, not an autonomous trader with account authority. It reads instruments, markets, news, Signals, accounts, and Quant state through authorized tools; trading requests can only produce reviewable proposals. The current build's run timeline is the source of truth for tool availability.

### 8.1 Configure a model

1. Open **Settings → AI → AI trading agents → Add**.
2. Enter a display name, Provider (OpenAI / Anthropic / Google / Custom), API Key, and model ID.
3. Set Base URL only for a compatible custom gateway.
4. Model request parameters must be a JSON object, such as `{"enable_thinking": false}`; use `{}` when none are needed.
5. Enable and save. When editing an existing Agent, leave API Key blank to retain the stored key.

Enter API keys only in local Desktop settings. Never place them in a conversation, Web URL, screenshot, or ticket. Raw Provider/model credentials are not sent to the browser.

### 8.2 Complete a safe session

1. Open Agent from the bottom command bar in Desktop, Web Desktop, or H5. Create a session and select an enabled model.
2. State the instrument, venue, time range, source preference, and goal. Name the Environment for account work; begin with Simulator/Testnet.
3. Read the `admission → model → tool → approval → final` timeline.
4. Verify Provider, ClientInstance, timestamp, freshness, and evidence. Separate fact, inference, and correlation.
5. On a trading Approval Card, verify instrument, side, size, account, environment, expiry, and evidence. Approval still proceeds through Review, RiskGuard, and explicit submission.

Example prompts:

```text
Compare AAPL volatility and volume over the last 20 sessions. Cite source timestamps and unknowns.
Read the Paper account only. Summarize concentration, open orders, and P&L. Do not initiate a trade.
Draft a Simulator limit order. Show route, rules, risk, and approval card first; do not approve it.
```

Agent has no arbitrary shell, native plugin, or direct Provider SDK access. Unattended Live automation is disabled in the first release. Instructions embedded in webpages or news are not authorization.

## 9. Quant, replay, and Triggers

Quant runs or replays against fixed data, trading calendar, fees, slippage, seed, and revision inputs. Agent may draft a declarative Trigger, but it follows this lifecycle:

```text
Draft → Validate → Historical Replay → Approve → Deploy → Pause / Retire
```

- Select exact canonical Instruments, Providers, ClientInstances, and data kinds.
- Revisions retain immutable inputs, resource limits, outputs, and evidence cursors. A failed revision never replaces the running version.
- A Trigger persists output before waking Agent, so model latency cannot block market, Quant, or execution hot paths.
- The headless Runtime owns jobs; closing Desktop/Web does not stop them.

## 10. Web Gateway and ACME

Web Gateway is an optional entry point in the Desktop process. Starting, stopping, or reconfiguring it does not stop the Desktop kernel or Provider connections.

### 10.1 Prove local access first

1. Open **Settings → Web Gateway**, generate a random access password, and immediately store it in a password manager. Plaintext appears once; the app stores an Argon2 verifier.
2. Use `127.0.0.1` or `::1` for Bind Host, select HTTP, and enable. Plain HTTP cannot bind to `0.0.0.0`.
3. Open the displayed URL and sign in. “Keep me signed in” extends identity lifetime only; it adds no trading authority.

### 10.2 Configure remote HTTPS

1. Point the A/AAAA records for `studio.example.com` to the Gateway's public address. Remove an incorrect AAAA if IPv6 cannot reach the service.
2. `public_domains` contains DNS names only—no scheme, port, or path. `public_base_url` is the complete final `https://` URL. Wildcard hosts are not accepted.
3. Use a domain-matching PEM pair or managed Let's Encrypt. All non-loopback access requires HTTPS.

| ACME method | Public requirement | Best fit |
|---|---|---|
| HTTP-01 | Public TCP 80 reaches the challenge listener | Simple host; challenge path may forward to local 8080 |
| TLS-ALPN-01 | Public TCP 443 reaches TrueFix directly | TrueFix owns 443; a TLS terminator must not intercept ALPN |
| DNS-01 | Cloudflare `DNS:Edit` Token and Zone ID | NAT/reverse proxy/no inbound 80 or 443; Gateway still rejects wildcard hosts |

Rehearse with staging before production:

```text
https://acme-staging-v02.api.letsencrypt.org/directory
  → Apply → healthy Running/renewal → browser test
https://acme-v02.api.letsencrypt.org/directory
  → Apply again → verify issuer, SAN, and expiry
```

A staging certificate is deliberately untrusted. HTTP-01 must preserve `/.well-known/acme-challenge/*`. DNS-01 should use a least-privilege `DNS:Edit` Token for the target Zone, never a Global API Key. Add only the reverse proxy's exact IP to the trusted proxy allowlist.

ACME failure never downgrades to public plaintext HTTP. Renewal keeps the last valid certificate until the safety window, then remote HTTPS stops. Fix DNS, ports, or Directory and apply again.

## 11. Operations, logs, and audit

Operations answers what happened, when, who initiated it, and what scope was affected:

| View | Use | Recommended filter |
|---|---|---|
| Activity | Recent user-visible actions | Confirm command admission |
| Logs | Time, level, target, stable error code | Correlation ID, ClientInstance, time window |
| Audit | Actor, scope, reason, before/after revision, result | Trading, approval, configuration, security |
| Health | Provider, queue, storage, runtime | Freshness, lag, retry |

An issue report should include display timezone, Environment, Provider, ClientInstance, stable error code, correlation ID, order/client order ID, and revision. Remove API keys, cookies, and full account identifiers. On macOS, main and Web access logs rotate under `~/Library/Application Support/truefix-studio/logs/`; access logs contain IP and User-Agent data, so minimize retention and sharing.

## 12. Status glossary

| State | Meaning | Correct action |
|---|---|---|
| Loading | A projection is being fetched | Wait or retain existing content |
| Empty | Authoritative query succeeded with no records | Do not treat it as an error |
| Unavailable | Capability, permission, mapping, or service is absent | Repair configuration/permission |
| Stale | Last-good data exceeded freshness | Check as-of; do not trade on an old value |
| Degraded | Some sources or facets failed | Use only explicitly available parts |
| Rejected | Schema, authorization, rules, or RiskGuard denied | Read the stable code and correct the input |
| Reconciling | Comparing projection with Provider authority | Preserve state and wait for confirmation |
| Uncertain | Provider may have accepted; response is unknown | Query recovery only; never resubmit |

Read each state with `source / as-of / revision / stable code`.

## 13. Architecture and data boundaries

The browser is not the authority for instruments, accounts, orders, market data, risk, or AI/Quant. All entry points share canonical application contracts and preserve adapter provenance. The interface does not invent missing data, silently mix providers, or hard-code capabilities from a provider name.

## 14. Troubleshooting

- **Connected but cannot trade:** check Environment, capability, entitlement, account, exact mapping, TradingRules, and freshness.
- **Historical bars but no realtime quote:** Historical and Realtime are independent; check subscription entitlement, source health, and the first Tick.
- **Cannot submit after Review:** a route, account, rule, or field change may have invalidated the token. Review again.
- **Submit timed out:** query with the original client order ID; do not create the same order again.
- **Agent is empty or cannot send:** confirm a saved Agent is enabled and its API Key, model ID, Base URL, and request parameters are valid.
- **Agent tool denied:** check ToolGrant scope, account/instrument, and expiry; submit/cancel/replace require owner approval.
- **Remote Web does not open:** read configured/effective state and `last_error`, then check bind host, ports, A/AAAA, firewall, and TLS; inspect 80, 443, or DNS TXT for the selected challenge.
- **Certificate is untrusted:** confirm production—not staging—Directory, host SAN, client time, and that a proxy is not serving an old certificate.
- **Page shows stale/unavailable:** inspect the affected facet, timestamp, and original error. Last-good data is not necessarily fresh.
