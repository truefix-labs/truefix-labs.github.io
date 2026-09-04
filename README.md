# TrueFix Studio — public site

This repository contains the public GitHub Pages site for TrueFix Studio. TrueFix Studio is a desktop app that connects the brokers, exchanges, market-data services, and AI services a user chooses. It brings market research, strategy testing, and trading checks into one place without asking users to move their money to TrueFix. The site uses static HTML, CSS, and JavaScript with no build dependency.

The product source repository is currently private. Public Nightly installers for macOS, Windows, and Linux are linked from the site and distributed through this repository's GitHub Releases. TrueFix Studio is pre-release software. Features vary by connected service, account, permission, and test or live mode.

## Documentation

The website and user guide support Simplified Chinese, Japanese, Korean, and English. The browser language is used on first visit; a manual choice is stored in `localStorage` and reused across the site. Language choices also use indexable locale URLs under `/zh-cn/`, `/ja/`, `/ko/`, and `/en/`.

- [Interactive user guide](https://truefix-labs.com/guide/)
- [简体中文](docs/truefix-studio-user-guide.zh-CN.md)
- [日本語](docs/truefix-studio-user-guide.ja.md)
- [한국어](docs/truefix-studio-user-guide.ko.md)
- [English](docs/truefix-studio-user-guide.en.md)
- [Feedback and community discussions](https://github.com/truefix-labs/truefix-labs.github.io/discussions)

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

After changing a base page or its metadata, regenerate the localized static routes and sitemap:

```bash
node scripts/sync-guide-parity.mjs
node scripts/generate-localized-routes.mjs
```

## Deployment

The organization site is published from the default branch with the custom domain <https://truefix-labs.com/>. The `.nojekyll` file keeps static assets unchanged.

The promotional video is generated from repository-owned interface images by `scripts/build-promo-video.sh`. It includes narration, an original ambient score, multilingual captions, and a clearly labeled future Market Twin concept. Motion respects the visitor's reduced-motion preference.
