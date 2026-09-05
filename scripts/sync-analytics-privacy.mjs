import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const changes = {
  'privacy/content/zh-CN.html': [
    ['我们不出售个人数据，不投放行为广告，当前官网与应用也未集成第一方产品分析。', '我们不出售个人数据，也不投放行为广告。官网使用 Google Analytics 统计访问情况；应用本身不包含产品分析功能。'],
    ['语言偏好以 <code>truefix.language</code> 保存在浏览器 <code>localStorage</code>。网站不设置广告或分析 Cookie。GitHub Pages 和 Google Fonts 会因提供服务而接收 IP 地址、浏览器请求头、访问 URL 与时间等标准请求信息；下载区域还会从 GitHub 请求公开的 Release 元数据。', '语言偏好以 <code>truefix.language</code> 保存在浏览器 <code>localStorage</code>。Google Analytics 会统计页面访问，并可能处理标识符、大致位置、设备与浏览器信息、来源页面、访问 URL 和时间，也可能设置分析 Cookie。网站不用于个性化广告。GitHub Pages 和 Google Fonts 也会接收标准请求信息；下载区域还会从 GitHub 请求公开的 Release 元数据。'],
    ['<h3>网站基础设施</h3><p>官网托管于 GitHub Pages，并从 Google Fonts 加载字体；GitHub Discussions 与 Releases 链接会进入 GitHub。它们接收的信息受各自隐私政策约束。</p>', '<h3>网站基础设施与访问分析</h3><p>官网托管于 GitHub Pages，从 Google Fonts 加载字体，并使用 Google Analytics。Google 会根据自己的条款和隐私政策处理分析数据。GitHub Discussions 和 Releases 链接会带你前往 GitHub，这些服务按各自隐私政策处理收到的信息。</p>']
    ,['<li>按照<a href="../support/#data-deletion">技术支持页</a>说明删除本地设置、数据库、日志与官网语言偏好。</li>', '<li>按照<a href="../support/#data-deletion">技术支持页</a>说明删除本地设置、数据库、日志与官网语言偏好。</li><li>可以通过浏览器设置限制或清除分析 Cookie，也可以使用 Google 提供的 Analytics 停用工具。</li>']
  ],
  'privacy/content/ja.html': [
    ['個人データの販売、行動広告、現行サイトやアプリへの自社製品分析の組込みは行いません。', '個人データの販売や行動広告は行いません。サイトはGoogle Analyticsで訪問状況を測定しますが、アプリに製品分析機能は含まれません。'],
    ['言語設定はブラウザーの<code>localStorage</code>に<code>truefix.language</code>として保存されます。広告・分析Cookieは設定しません。GitHub PagesとGoogle Fontsは、サービス提供に必要なIPアドレス、ブラウザーヘッダー、URL、時刻等の標準リクエスト情報を受信します。ダウンロード欄はGitHubの公開Releaseメタデータも取得します。', '言語設定はブラウザーの<code>localStorage</code>に<code>truefix.language</code>として保存されます。Google Analyticsはページ表示を測定し、識別子、おおよその地域、端末・ブラウザー情報、参照元、URL、訪問時刻を処理し、分析Cookieを設定する場合があります。広告のパーソナライズには使用しません。GitHub PagesとGoogle Fontsも標準リクエスト情報を受信し、ダウンロード欄はGitHubの公開Releaseメタデータを取得します。'],
    ['<h3>サイト基盤</h3><p>公開サイトはGitHub Pagesでホストされ、Google Fontsを読み込みます。GitHub DiscussionsとReleasesへのリンク先ではGitHubのポリシーが適用されます。</p>', '<h3>サイト基盤とアクセス解析</h3><p>公開サイトはGitHub Pagesでホストされ、Google FontsとGoogle Analyticsを利用します。Googleは自社の規約とプライバシーポリシーに基づいて分析データを処理します。GitHub DiscussionsとReleasesへのリンク先ではGitHubのポリシーが適用されます。</p>']
    ,['<li><a href="../support/#data-deletion">テクニカルサポート</a>の手順でローカル設定、DB、ログ、サイトの言語設定を削除する。</li>', '<li><a href="../support/#data-deletion">テクニカルサポート</a>の手順でローカル設定、DB、ログ、サイトの言語設定を削除する。</li><li>ブラウザー設定で分析Cookieを制限・削除するか、利用可能なGoogle Analyticsオプトアウトツールを使用する。</li>']
  ],
  'privacy/content/ko.html': [
    ['개인정보를 판매하거나 행동 광고를 제공하지 않으며, 현재 웹사이트와 앱에는 자체 제품 분석 기능이 없습니다.', '개인정보를 판매하거나 행동 광고를 제공하지 않습니다. 웹사이트는 Google Analytics로 방문 현황을 측정하지만 앱에는 제품 분석 기능이 없습니다.'],
    ['언어 설정은 브라우저 <code>localStorage</code>의 <code>truefix.language</code>에 저장됩니다. 광고 또는 분석 쿠키를 설정하지 않습니다. GitHub Pages와 Google Fonts는 서비스 제공에 필요한 IP 주소, 브라우저 헤더, URL, 시간 등의 표준 요청 정보를 수신합니다. 다운로드 영역은 GitHub의 공개 Release 메타데이터도 요청합니다.', '언어 설정은 브라우저 <code>localStorage</code>의 <code>truefix.language</code>에 저장됩니다. Google Analytics는 페이지 방문을 측정하며 식별자, 대략적인 위치, 기기와 브라우저 정보, 유입 경로, URL과 방문 시간을 처리하고 분석 쿠키를 설정할 수 있습니다. 광고 개인화에는 사용하지 않습니다. GitHub Pages와 Google Fonts도 표준 요청 정보를 수신하며 다운로드 영역은 GitHub의 공개 Release 메타데이터를 요청합니다.'],
    ['<h3>웹사이트 인프라</h3><p>공개 사이트는 GitHub Pages에서 호스팅되고 Google Fonts를 불러옵니다. GitHub Discussions와 Releases 링크에는 GitHub의 정책이 적용됩니다.</p>', '<h3>웹사이트 인프라와 방문 분석</h3><p>공개 사이트는 GitHub Pages에서 호스팅되고 Google Fonts와 Google Analytics를 사용합니다. Google은 자체 약관과 개인정보 처리방침에 따라 분석 데이터를 처리합니다. GitHub Discussions와 Releases 링크에는 GitHub의 개인정보 처리방침이 적용됩니다.</p>']
    ,['<li><a href="../support/#data-deletion">기술 지원 페이지</a> 안내에 따라 로컬 설정, DB, 로그와 웹사이트 언어 설정을 삭제합니다.</li>', '<li><a href="../support/#data-deletion">기술 지원 페이지</a> 안내에 따라 로컬 설정, DB, 로그와 웹사이트 언어 설정을 삭제합니다.</li><li>브라우저 설정에서 분석 쿠키를 제한하거나 삭제하고, 사용 가능한 Google Analytics 차단 도구를 이용할 수 있습니다.</li>']
  ]
};

for (const [file, replacements] of Object.entries(changes)) {
  const path = join(root, file);
  let content = await readFile(path, 'utf8');
  for (const [before, after] of replacements) {
    if (content.includes(after)) continue;
    if (!content.includes(before)) throw new Error(`Missing expected privacy text in ${file}`);
    content = content.replace(before, after);
  }
  await writeFile(path, content);
}
