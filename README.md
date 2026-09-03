# TrueFix Studio — public site

This repository contains the public GitHub Pages site for TrueFix Studio, a multi-provider trading workstation built around explicit market context, review, risk, and auditable execution. It uses static HTML, CSS, and JavaScript with no build dependency.

The product repository is currently private, so this site does not expose private repository or installer links. TrueFix Studio is still pre-release software; a visible interface or Provider SDK is not proof of an end-to-end capability. Runtime evidence remains authoritative.

## Documentation

The website and user guide support English, Simplified Chinese, Korean, and Japanese. The browser language is used on first visit; a manual choice is stored in `localStorage` and reused across the home page and guide.

- [Interactive user guide](https://truefix-labs.github.io/guide/)
- [English](docs/truefix-studio-user-guide.en.md)
- [简体中文](docs/truefix-studio-user-guide.zh-CN.md)
- [한국어](docs/truefix-studio-user-guide.ko.md)
- [日本語](docs/truefix-studio-user-guide.ja.md)

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deployment

The organization site is published from the default branch at <https://truefix-labs.github.io/>. The `.nojekyll` file keeps static assets unchanged.

The promotional video is generated from repository-owned interface images by `scripts/build-promo-video.sh`. Motion respects the visitor's reduced-motion preference.
