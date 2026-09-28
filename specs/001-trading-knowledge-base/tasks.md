# Tasks: Trading Engineering Knowledge Base

## Phase 1 — Foundation

- [x] T001 [P] Initialize Spec Kit project integration and project constitution in `.specify/`.
- [x] T002 [P] Audit existing static routes, metadata, crawlers, sitemap, and build scripts in `docs/ai-search-strategy.md`.
- [x] T003 Define the single content model and route taxonomy in `scripts/generate-knowledge-base.mjs`.

## Phase 2 — Crawl and metadata infrastructure

- [x] T004 Add explicit OAI-SearchBot, GPTBot, Claude-SearchBot, Claude-User, Googlebot, and Bingbot rules to `robots.txt`.
- [x] T005 Generate comprehensive and category sitemaps, sitemap index, RSS, and `llms.txt` from generated routes.
- [x] T006 Generate canonical, title, description, Open Graph, Twitter metadata, and JSON-LD for every knowledge page.

## Phase 3 — P0 engineering knowledge

- [x] T007 [P] Generate Rust multi-broker architecture research page.
- [x] T008 [P] Generate trading architecture, broker adapter, OMS, execution, and risk pages.
- [x] T009 [P] Generate instrument master, symbol normalization, order state, reconciliation, and idempotency pages.
- [x] T010 [P] Generate three research pillar pages and internal related-link graph.

## Phase 4 — Broker, comparison, and data surfaces

- [x] T011 [P] Generate technical reference routes for Binance, OKX, Bybit, Interactive Brokers, Futu, Tiger, Longbridge, Alpaca, TradeStation, IG, and Charles Schwab.
- [x] T012 [P] Generate API comparison routes for exchange, broker, and REST/WebSocket/FIX questions.
- [x] T013 Generate the Broker API Matrix from the same broker data used for broker pages.

## Phase 5 — AI trading and discoverability

- [x] T014 [P] Generate AI trading agent architecture, safety, human approval, risk, and permission pages.
- [x] T015 Add Research to shared navigation and localized navigation dictionaries.
- [x] T016 Add `knowledge.css` and static navigation/footer layout for technical pages.

## Phase 6 — Validation

- [x] T017 Add static knowledge-page and discovery-file Playwright checks in `tests/knowledge-base.spec.cjs`.
- [x] T018 Add finite-value protection to the existing homepage canvas animation to keep browser validation deterministic.
- [x] T019 Run build, JSON-LD parsing, route coverage, `npm test`, and `git diff --check`.
- [x] T021 [FR-003] Emit `CollectionPage` and `BreadcrumbList` JSON-LD alongside article, dataset, and organization entities.
- [x] T022 [FR-006][SC-004] Validate that generated knowledge-base internal links resolve to static route files.
- [x] T023 [FR-001..FR-007] Add explicit user stories, functional requirements, success criteria, and edge cases to the feature specification.
- [ ] T020 Publish after user reviews generated content and explicitly authorizes commit/push.

## Traceability

| Requirement | Implementing tasks | Verification |
|---|---|---|
| FR-001 | T003, T007–T014 | T017, T019, T022 |
| FR-002 | T006, T017 | T019 |
| FR-003 | T006, T021 | T019 |
| FR-004 | T004–T005 | T017, T019 |
| FR-005 | T011–T013 | T017, T019 |
| FR-006 | T010, T015–T016, T022 | T017, T022 |
| FR-007 | T015, T018–T019 | T017, T019 |
