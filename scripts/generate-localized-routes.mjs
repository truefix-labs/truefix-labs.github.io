import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://truefix-labs.com';
const analytics = `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BP0Q5CLKGK"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BP0Q5CLKGK');
    </script>`;
const locales = { 'zh-CN': 'zh-cn', ja: 'ja', ko: 'ko', en: 'en' };
const pages = [
  ['', 'index.html'], ['guide', 'guide/index.html'], ['about', 'about/index.html'],
  ['privacy', 'privacy/index.html'], ['support', 'support/index.html'], ['product-film', 'product-film/index.html'],
  ...['elias-navarro','chen-wei','park-min-seo','amara-okafor','sora-kimura','leila-haddad'].map(name => [`about/${name}`, `about/${name}/index.html`])
];

const meta = {
  en: {
    '': ['TrueFix Studio — Research, test, and review trades', 'Connect your existing brokers, exchanges, and market-data services. Research markets, test strategies, and review trades in one desktop app.'],
    guide: ['TrueFix Studio User Guide', 'Install TrueFix Studio, connect a service, use the AI assistant, test strategies, configure browser access, and troubleshoot common problems.'], about: ['TrueFix Studio — About us', 'Why TrueFix connects existing market services, what the project checks, and what remains under the user’s control.'], privacy: ['TrueFix Studio — Privacy Policy', 'What TrueFix Studio stores on your device, what it sends to connected services, and how to delete your data.'], support: ['TrueFix Studio — Technical Support', 'Installation help, connection troubleshooting, data controls, and support contacts for TrueFix Studio.'], 'product-film': ['See what TrueFix Studio does in 36 seconds', 'A short introduction to market research, AI assistance, strategy testing, and checked trading actions in TrueFix Studio.']
  },
  'zh-CN': {
    '': ['TrueFix Studio — 连接账户，研究、测试并确认交易', '连接你已有的券商、交易所和行情服务，在一个桌面应用里研究市场、测试策略并确认交易操作。'], guide: ['TrueFix Studio 使用指南', '了解如何安装、连接服务、使用 AI 助手、测试策略、配置浏览器访问并排查常见问题。'], about: ['TrueFix Studio — 关于我们', '了解 TrueFix 为什么连接现有市场服务、项目持续检查哪些问题，以及哪些事情始终由用户控制。'], privacy: ['TrueFix Studio — 隐私政策', '了解哪些数据保存在设备上、哪些信息会发送给已连接服务，以及如何删除数据。'], support: ['TrueFix Studio — 技术支持', '获取安装、服务连接、故障排查、数据控制和联系支持的帮助。'], 'product-film': ['用 36 秒了解 TrueFix Studio', '用短片了解 TrueFix Studio 如何集中市场研究、AI 辅助、策略测试和交易前检查。']
  },
  ja: {
    '': ['TrueFix Studio — 口座をつないで調査・テスト・取引確認', '利用中の証券会社、取引所、相場データを接続し、一つのデスクトップアプリで市場調査、戦略テスト、取引前確認を行えます。'], guide: ['TrueFix Studio 利用ガイド', 'インストール、サービス接続、AIアシスタント、戦略テスト、ブラウザー接続、問題解決を説明します。'], about: ['TrueFix Studio — 私たちについて', '既存の市場サービスを接続する理由、製品設計で確認すること、利用者が管理する範囲を説明します。'], privacy: ['TrueFix Studio — プライバシーポリシー', '端末に保存する情報、接続先へ送る情報、データの削除方法を説明します。'], support: ['TrueFix Studio — テクニカルサポート', 'インストール、サービス接続、問題解決、データ管理、問い合わせ方法を案内します。'], 'product-film': ['36秒で分かるTrueFix Studio', '市場調査、AI支援、戦略テスト、取引前確認を一つにまとめる仕組みを紹介します。']
  },
  ko: {
    '': ['TrueFix Studio — 계정을 연결해 조사·테스트·거래 확인', '사용 중인 증권사, 거래소와 시세 서비스를 연결해 한 데스크톱 앱에서 시장 조사, 전략 테스트와 거래 전 확인을 할 수 있습니다.'], guide: ['TrueFix Studio 사용 가이드', '설치, 서비스 연결, AI 도우미, 전략 테스트, 브라우저 접속과 일반 문제 해결 방법을 안내합니다.'], about: ['TrueFix Studio — 소개', '기존 시장 서비스를 연결하는 이유, 제품 설계에서 확인하는 질문과 사용자가 통제하는 범위를 설명합니다.'], privacy: ['TrueFix Studio — 개인정보 처리방침', '기기에 저장하는 정보, 연결 서비스로 보내는 정보와 데이터 삭제 방법을 설명합니다.'], support: ['TrueFix Studio — 기술 지원', '설치, 서비스 연결, 문제 해결, 데이터 관리와 지원 문의 방법을 안내합니다.'], 'product-film': ['36초로 보는 TrueFix Studio', '시장 조사, AI 지원, 전략 테스트와 거래 전 확인을 한곳에 모으는 방식을 소개합니다.']
  }
};

function pageMeta(locale, route) {
  if (meta[locale][route]) return meta[locale][route];
  const name = route.split('/').pop().split('-').map(part => part[0].toUpperCase() + part.slice(1)).join(' ');
  const suffix = locale === 'zh-CN' ? 'TrueFix Studio 产品设计视角' : locale === 'ja' ? 'TrueFix Studio 製品設計の視点' : locale === 'ko' ? 'TrueFix Studio 제품 설계 관점' : 'TrueFix Studio design perspective';
  const description = locale === 'zh-CN' ? `了解 ${name} 所代表的产品设计视角，以及它在 TrueFix Studio 中持续检查的问题。` : locale === 'ja' ? `${name}が表す製品設計の視点と、TrueFix Studioで確認する問題を紹介します。` : locale === 'ko' ? `${name}이 나타내는 제품 설계 관점과 TrueFix Studio에서 확인하는 문제를 소개합니다.` : `The product-design perspective represented by ${name} and the questions it checks in TrueFix Studio.`;
  return [`${name} — ${suffix}`, description];
}

function url(route, slug = '') { return `${origin}/${slug ? `${slug}/` : ''}${route ? `${route}/` : ''}`; }
function alternates(route) {
  return [
    `<link rel="alternate" hreflang="x-default" href="${url(route)}" />`,
    ...Object.entries(locales).map(([locale, slug]) => `<link rel="alternate" hreflang="${locale}" href="${url(route, slug)}" />`)
  ].join('\n    ');
}

for (const slug of Object.values(locales)) await rm(join(root, slug), { recursive: true, force: true });

for (const [route, source] of pages) {
  let raw = await readFile(join(root, source), 'utf8');
  if (!raw.includes('G-BP0Q5CLKGK')) raw = raw.replace('</head>', `    ${analytics}\n  </head>`);
  if (!raw.includes('fonts.gstatic.com')) {
    const fonts = '<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&amp;family=Manrope:wght@400;500;600;700;800&amp;family=Noto+Sans+JP:wght@400;500;600;700;800&amp;family=Noto+Sans+KR:wght@400;500;600;700;800&amp;family=Noto+Sans+SC:wght@400;500;600;700;800&amp;display=swap"/>';
    raw = raw.replace('<link rel="stylesheet"', `${fonts}<link rel="stylesheet"`);
  }
  raw = raw.replaceAll(' crossorigin/>', ' crossorigin="anonymous"/>').replaceAll('&family=', '&amp;family=').replaceAll('&display=', '&amp;display=');
  raw = raw.replace('styles.css?v=19', 'styles.css?v=20').replace('about.css?v=4', 'about.css?v=5').replace('guide.css?v=12', 'guide.css?v=13').replace('legal.css?v=4', 'legal.css?v=5').replace('film.css?v=3', 'film.css?v=4').replace('person.css?v=1', 'person.css?v=2');
  if (route.startsWith('about/')) {
    raw = raw.replace('src="../../assets/favicon-32.png" alt=""/>', 'src="../../assets/favicon-32.png" alt="" width="30" height="30"/>');
  }
  const original = raw.replace(/\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+"\s*\/>/g, '');
  const sourceHtml = original.replace(/(<link rel="canonical" href="[^"]+"\s*\/>)/, `$1\n    ${alternates(route)}`);
  await writeFile(join(root, source), sourceHtml);
  for (const [locale, slug] of Object.entries(locales)) {
    const targetUrl = url(route, slug);
    const base = `/${route ? `${route}/` : ''}`;
    const [title, description] = pageMeta(locale, route);
    let html = original
      .replace(/<html lang="[^"]+">/, `<html lang="${locale}">`)
      .replace(/(<meta charset="UTF-8"\s*\/>)/, `$1\n    <base href="${base}" />`)
      .replace(/<link rel="canonical" href="[^"]+"\s*\/>/, `<link rel="canonical" href="${targetUrl}" />\n    ${alternates(route)}`)
      .replace(/(<meta property="og:url" content=")[^"]+("\s*\/?>)/, `$1${targetUrl}$2`)
      .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, `$1${title}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
      .replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/?>)/, `$1${title}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace('</head>', `    <meta property="og:locale" content="${locale.replace('-', '_')}" />\n  </head>`);
    if (route === 'product-film') html = html.replace('"inLanguage": "en"', `"inLanguage": "${locale}"`);
    const target = join(root, slug, route, 'index.html');
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }
}

const entries = pages.flatMap(([route]) => [
  { route, slug: '' }, ...Object.values(locales).map(slug => ({ route, slug }))
]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries.map(({ route, slug }) => `  <url>
    <loc>${url(route, slug)}</loc>
    <lastmod>2026-09-05</lastmod>
    ${Object.entries(locales).map(([locale, altSlug]) => `<xhtml:link rel="alternate" hreflang="${locale}" href="${url(route, altSlug)}" />`).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(route)}" />${route === 'product-film' ? `
    <video:video>
      <video:thumbnail_loc>${origin}/assets/video-poster.jpg</video:thumbnail_loc>
      <video:title>See what TrueFix Studio does in 36 seconds</video:title>
      <video:description>See how TrueFix Studio connects existing market services for research, strategy testing, AI assistance, and checked trading actions.</video:description>
      <video:content_loc>${origin}/assets/truefix-studio-promo.mp4</video:content_loc>
      <video:duration>36</video:duration>
      <video:publication_date>2026-09-04T12:00:00+08:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>` : ''}
  </url>`).join('\n')}
</urlset>
`;
await writeFile(join(root, 'sitemap.xml'), sitemap);
