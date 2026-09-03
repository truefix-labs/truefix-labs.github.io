# TrueFix Studio — public site

This repository contains the public GitHub Pages site for TrueFix Studio, a multi-provider trading workstation built around explicit market context, review, risk, and auditable execution. It uses static HTML, CSS, and JavaScript with no build dependency.

The product repository is currently private, so this site does not expose private repository or installer links. TrueFix Studio is still pre-release software; a visible interface or Provider SDK is not proof of an end-to-end capability. Runtime evidence remains authoritative.

## Documentation

The website and user guide support Simplified Chinese, Japanese, Korean, and English. The browser language is used on first visit; a manual choice is stored in `localStorage` and reused across the home page and guide.

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

## Deployment

The organization site is published from the default branch with the custom domain <https://truefix-labs.com/>. The `.nojekyll` file keeps static assets unchanged.

The promotional video is generated from repository-owned interface images by `scripts/build-promo-video.sh`. It includes narration, an original ambient score, multilingual captions, and a clearly labeled future Market Twin concept. Motion respects the visitor's reduced-motion preference.
