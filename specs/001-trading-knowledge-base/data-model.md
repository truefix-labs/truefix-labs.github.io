# Data Model

## Article

- `route`: canonical route without leading or trailing slash
- `category`: Research, Engineering, or AI Trading
- `title`, `description`, `answer`
- `sections`: ordered heading and HTML body pairs
- `sources`: labelled primary URLs
- `related`: internal route list
- generated fields: canonical, metadata, TechArticle JSON-LD, breadcrumbs, sitemap, RSS entry

## Broker

- `slug`, `name`, `officialDocumentation`
- `markets`, `apiNotes`, `rustSdk`
- generated fields: broker reference page, matrix row, sitemap entry, source links

## Comparison

- `slug`, `title`, `left`, `right`, `officialSources`
- generated comparison table and related architecture links

## Generated artifacts

- Static route directories with `index.html`
- `knowledge.css`
- `sitemap-pages.xml` and category sitemaps
- `sitemap-index.xml`
- comprehensive `sitemap.xml` additions
- `feed.xml`
- `llms.txt`
