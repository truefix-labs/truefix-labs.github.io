# AI Search and Trading Engineering Content Strategy

## Goal

TrueFix Labs is presented as a Trading Engineering Knowledge Base and Open Source Trading Infrastructure Portal. The target is useful, verifiable retrieval for questions about Rust trading systems, broker APIs, instruments, OMS, execution, risk, reconciliation, FIX, and AI trading agents.

## Stage status

| Stage | Done | Pending | Evidence | Validation |
| --- | --- | --- | --- | --- |
| Repository audit | Yes | None | `specs/001-trading-knowledge-base/research.md` | Existing build and routes inspected |
| Crawler and metadata infrastructure | Yes | Deployment | `robots.txt`, generated metadata, sitemap files | JSON-LD parse and route checks |
| P0 engineering content | Yes | Editorial review and future expansion | 11 engineering pages, 3 pillar pages, and the supplied financial instrument domain model | Static HTML checks |
| Broker and comparison content | Yes | Official capability verification per provider | 11 broker pages, 7 comparisons, matrix | Matrix and sitemap checks |
| AI trading content | Yes | Editorial review and future expansion | 5 AI trading pages | Static HTML checks |
| Publishing | Pending | User-authorized commit and push | Working tree only | No remote changes made |

## URL taxonomy

- `/research/` — pillar guides and cross-topic research.
- `/engineering/` — architecture and production engineering notes.
- `/brokers/` — conservative broker and exchange API references.
- `/compare/` — structured API and transport comparisons.
- `/ai-trading/` — agent safety, permissions, approval, and audit.
- `/data/` — generated capability matrices and datasets.

## Single source of truth

`scripts/generate-knowledge-base.mjs` owns route metadata, article content, related links, broker records, source links, JSON-LD, RSS, `llms.txt`, and category sitemap generation. The generated HTML is committed with its source. Do not hand-edit generated knowledge pages. The financial instrument domain model is based on the supplied TrueFix design memo dated 2026-09-17 and is labeled as such in the page sources.

## Page contract

Every knowledge page contains a direct answer, descriptive title and description, canonical URL, Open Graph metadata, visible H1, static article body, sources, verification date, related links, and JSON-LD. Technical articles use `TechArticle`; broker data uses `Dataset`; indexes use `CollectionPage`; all knowledge routes include `BreadcrumbList` and Organization context.

## Crawler policy

`robots.txt` explicitly allows `OAI-SearchBot`, `GPTBot`, `Claude-SearchBot`, `Claude-User`, `Googlebot`, and `Bingbot`, and points to both the comprehensive sitemap and sitemap index. This policy allows public retrieval and model training. Change GPTBot to `Disallow: /` only if the project later chooses to opt out of training while retaining search eligibility.

## Publishing workflow

1. Update the content data in `scripts/generate-knowledge-base.mjs`.
2. Add primary sources and a verification date.
3. Add related links in both directions where a concept depends on another concept.
4. Run `npm run build`.
5. Run `npm test` and `git diff --check`.
6. Inspect the final HTML with `curl` and validate JSON-LD.
7. Review provider claims before publishing. Use `Unknown` or `Not verified` instead of inferring capabilities.

## Retrieval quality rules

- Answer the query in the first paragraph.
- Explain trade-offs and failure modes, not just definitions.
- Preserve provider-native identifiers alongside canonical identities.
- Distinguish internal state, provider state, and reconciled state.
- Keep analysis permission separate from execution permission.
- Link to official provider documentation, standards, source code, or reproducible examples.
- Do not claim rankings, benchmarks, endorsements, or unsupported provider capabilities.

## Verification checklist

- `curl -L https://truefix-labs.com/engineering/order-management-system/` contains title, description, H1, article answer, canonical, sources, and JSON-LD.
- Every P0 route is in `sitemap.xml` and `sitemap-pages.xml`.
- `sitemap-index.xml`, `feed.xml`, `llms.txt`, and `robots.txt` are reachable.
- No knowledge page depends on JavaScript to reveal its main text.
- `npm run build` and `npm test` pass.
