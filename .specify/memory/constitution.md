# TrueFix Labs Knowledge Base Constitution

## Core Principles

### I. Evidence First
Every technical claim must link to a primary provider document, standard, source repository, or reproducible example. Unknown capabilities are labelled instead of inferred.
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### II. Static and Crawlable
Primary meaning, metadata, and structured data must be present in generated HTML. Client-side JavaScript may enhance a page but must not be required to discover its answer.
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### III. Single Source of Truth
Route metadata, source links, related links, broker records, structured data, RSS, and sitemap entries are generated from one content model.
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### IV. Safe Trading Semantics
Content must preserve provider-native identity, explicit account and environment scope, deterministic idempotency, fail-closed risk checks, and durable unknown execution states.
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### V. Small Static Surface
Prefer the existing static site and build pipeline. Do not introduce a CMS, runtime database, or framework migration for content discovery.
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## Additional Constraints

Broker capabilities vary by region, account, product, environment, permission, and entitlement. Every dynamic capability page must show a verification date and official source link. Search visibility never justifies fabricated claims, keyword stuffing, hidden content, or unsupported endorsements.
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## Quality Gates

Run the static build, JSON-LD validation, knowledge-page checks, browser tests, and `git diff --check` before publishing. Generated pages must remain reproducible from source data.
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

The constitution governs new knowledge content and supersedes convenience. Amendments require an update to this file and the AI search strategy documentation.

**Version**: 1.0.0 | **Ratified**: 2026-09-28 | **Last Amended**: 2026-09-28
