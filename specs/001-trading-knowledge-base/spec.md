# Trading Engineering Knowledge Base

## Intent

Turn the static TrueFix Labs site into a crawlable technical knowledge base for trading infrastructure, broker APIs, market data, execution, risk, Rust systems, and AI trading agents. The content must be useful on its own and must not depend on client-side JavaScript for its primary meaning.

## Requirements

- Generate one canonical static HTML page for each knowledge route.
- Keep article metadata, related links, sources, and sitemap entries in one content manifest.
- Include direct answers, production trade-offs, failure modes, examples, sources, and verification dates.
- Publish research, engineering, broker, comparison, data, and AI trading indexes.
- Generate `TechArticle`, `CollectionPage`, `Dataset`, `Organization`, and `BreadcrumbList` JSON-LD where applicable.
- Keep broker facts conservative and label unknown or unverified fields instead of inventing capabilities.
- Generate an RSS feed, `llms.txt`, category sitemaps, and a sitemap index while preserving the existing comprehensive sitemap.
- Allow OAI-SearchBot, GPTBot, Claude-SearchBot, Claude-User, Googlebot, and Bingbot according to the repository crawler policy.
- Preserve existing localized product pages and existing browser tests.

## User stories and acceptance scenarios

### US1 — Find authoritative trading engineering guidance

As an engineer evaluating a trading system, I can enter through Research and navigate to architecture, broker, execution, risk, data, and AI trading topics.

**Acceptance scenarios**

- Given a visitor opens `/research/`, when the page is loaded without JavaScript, then the page exposes the major topic groups and links to pillar guides.
- Given a visitor opens a P0 article, when the HTML is fetched directly, then the answer, headings, examples, related links, sources, and verification date are present.

### US2 — Let search and answer systems retrieve individual facts

As a crawler or retrieval system, I can identify one canonical URL, page purpose, organization, breadcrumbs, article type, sources, and update date for each page.

**Acceptance scenarios**

- Given any knowledge route, when its source HTML is inspected, then title, description, canonical, Open Graph, JSON-LD, H1, and visible body content are present.
- Given a collection route, when its JSON-LD is parsed, then it contains `CollectionPage` and `BreadcrumbList` entities.

### US3 — Compare provider capabilities safely

As an engineer choosing a broker or exchange, I can compare providers and see unknown or unverified fields without invented claims.

**Acceptance scenarios**

- Given a broker or comparison page, when a capability is not verified, then the page labels it as unknown or directs the reader to official documentation.
- Given the broker matrix, when a row is updated, then broker pages, table output, JSON-LD, RSS, and sitemaps continue to come from the same manifest.

### US4 — Preserve the existing product site

As an existing TrueFix visitor, I can still use localized product pages and the homepage after the knowledge base is generated.

**Acceptance scenarios**

- Given the existing browser suite, when `npm test` runs, then all existing and knowledge-base checks pass.
- Given the static build, when generated routes are written, then no unrelated product route is removed or made dependent on client-side rendering.

## Functional requirements

- **FR-001:** The build MUST generate one static HTML document for every route in the knowledge-base manifest.
- **FR-002:** Every knowledge document MUST expose unique title, description, canonical, Open Graph, Twitter, H1, visible answer, sources, and last-verified metadata.
- **FR-003:** The build MUST emit `TechArticle` for technical articles, `CollectionPage` for indexes and pillars, `Dataset` for the broker matrix, `BreadcrumbList` for every knowledge route, and a standalone `Organization` entity for TrueFix Labs.
- **FR-004:** The crawler surface MUST include explicit policy for OAI-SearchBot, GPTBot, Claude-SearchBot, Claude-User, Googlebot, and Bingbot, plus comprehensive and category sitemaps.
- **FR-005:** Broker and comparison content MUST preserve provider-native identifiers and label unverified capabilities rather than infer them.
- **FR-006:** Related links MUST connect the architecture, instrument, OMS, risk, execution, reconciliation, broker, comparison, data, and AI trading surfaces.
- **FR-007:** The build MUST preserve localized product pages and pass the existing browser test suite.

## Success criteria

- **SC-001:** `npm run build` completes and reports all generated knowledge routes and category sitemaps.
- **SC-002:** Every P0 route is present in `sitemap.xml` and has at least one incoming internal link.
- **SC-003:** A direct HTML fetch of a P0 route contains the title, canonical, H1, answer, JSON-LD, and sources without executing JavaScript.
- **SC-004:** `npm test` passes, JSON-LD parses, internal knowledge links resolve, and `git diff --check` is clean.
- **SC-005:** The generated discovery files include RSS, `llms.txt`, sitemap index, category sitemaps, and the crawler policy.

## Edge cases

- A provider timeout after submission MUST remain an explicit `Unknown` outcome until reconciliation; it must not trigger a blind duplicate order recommendation.
- A route with a trailing slash, query string, or alternate host MUST still publish one canonical URL.
- A collection or pillar route MUST use collection schema even when it contains article cards.
- Missing, stale, or region-specific broker capabilities MUST remain marked for verification.

## Acceptance checks

- `npm run build` generates the knowledge pages and all sitemap artifacts.
- Every knowledge page has a title, description, canonical, Open Graph metadata, H1, visible body, sources, and valid JSON-LD.
- Every required P0 route exists in the sitemap and has at least one incoming internal link.
- `curl` of a knowledge page contains the article answer without running JavaScript.
- `npm test` passes and `git diff --check` is clean.
