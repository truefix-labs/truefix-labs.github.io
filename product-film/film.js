const STORAGE_KEY = 'truefix.language';
const SUPPORTED_LANGUAGES = ['zh-CN', 'ja', 'ko', 'en'];

const copy = {
  en: {
    metaTitle: 'TrueFix Studio — Product Film',
    metaDescription: 'Watch the 36-second TrueFix Studio product film about evidence, risk boundaries, authorized AI, quantitative automation, and the future Market Twin concept.',
    skip: 'Skip to the film', guide: 'User guide', home: 'Back home', eyebrow: 'TRUEFIX STUDIO / PRODUCT FILM',
    title: 'See the decision chain.<br />Keep every boundary visible.',
    lede: 'A 36-second introduction to evidence-linked markets, human-controlled automation, and the future Market Twin concept.',
    fallback: 'Your browser cannot play this video.', caption: 'English narration · Original ambient score · Multilingual captions',
    aboutLabel: 'ABOUT THE FILM', aboutTitle: 'One auditable flow, from context to action.',
    aboutCopy: 'The film introduces TrueFix Studio as a multi-provider workstation where signals retain their sources, AI and quantitative systems operate inside explicit authority, and risk remains visible before capital moves.',
    publishedLabel: 'PUBLISHED', durationLabel: 'DURATION', conceptLabel: 'FUTURE CONCEPT', transcriptEyebrow: 'ACCESSIBLE TRANSCRIPT', transcriptTitle: 'Narration transcript',
    transcriptLead: 'The complete spoken narration is provided below so the film remains understandable without audio.',
    line1: 'Markets move faster than disconnected tools.',
    line2: 'TrueFix Studio brings context, evidence, strategy, risk, and execution into one auditable flow.',
    line3: 'Every signal stays linked to its source.',
    line4: 'Artificial intelligence and quantitative systems operate within clear, human-controlled boundaries.',
    line5: 'Next comes Market Twin: a future concept that compares liquidity, slippage, and risk before capital moves.',
    line6: 'TrueFix Studio. Clarity for every decision. Certainty for every action.'
  },
  'zh-CN': {
    metaTitle: 'TrueFix Studio — 产品宣传片',
    metaDescription: '观看 36 秒 TrueFix Studio 宣传片，了解证据、风险边界、受权 AI、量化自动化与未来 Market Twin 概念。',
    skip: '跳到宣传片', guide: '使用指南', home: '返回首页', eyebrow: 'TRUEFIX STUDIO / 产品宣传片',
    title: '看见决策链。<br />让每一道边界清晰可见。',
    lede: '用 36 秒了解证据相连的市场、由人控制的自动化，以及未来 Market Twin 概念。',
    fallback: '当前浏览器无法播放此视频。', caption: '英文旁白 · 原创氛围配乐 · 多语言字幕',
    aboutLabel: '关于宣传片', aboutTitle: '从上下文到行动，一条可审计流程。',
    aboutCopy: '宣传片介绍 TrueFix Studio 如何作为多 Provider 工作站，让信号始终保留来源，让 AI 与量化系统在明确授权内运行，并在资金行动前保持风险可见。',
    publishedLabel: '发布日期', durationLabel: '时长', conceptLabel: '未来概念', transcriptEyebrow: '无障碍文字稿', transcriptTitle: '旁白文字稿',
    transcriptLead: '下方提供完整旁白文字，让用户在没有声音的情况下也能理解宣传片。',
    line1: '市场变化的速度，远快于彼此割裂的工具。',
    line2: 'TrueFix Studio 将上下文、证据、策略、风险与执行汇入同一条可审计流程。',
    line3: '每一个信号都始终链接到它的来源。',
    line4: '人工智能与量化系统在清晰、由人控制的边界内运行。',
    line5: '下一步是 Market Twin：在资金行动前比较流动性、滑点与风险的未来概念。',
    line6: 'TrueFix Studio。让每个决策更清晰，让每个行动更确定。'
  },
  ja: {
    metaTitle: 'TrueFix Studio — 製品映像',
    metaDescription: 'TrueFix Studioの36秒の製品映像。証拠、リスク境界、認可済みAI、クオンツ自動化、未来のMarket Twin構想を紹介します。',
    skip: '映像へ移動', guide: '利用ガイド', home: 'ホームへ戻る', eyebrow: 'TRUEFIX STUDIO / 製品映像',
    title: '意思決定の流れを見せる。<br />すべての境界を可視化する。',
    lede: '証拠につながる市場、人が制御する自動化、未来のMarket Twin構想を36秒で紹介します。',
    fallback: 'このブラウザーでは動画を再生できません。', caption: '英語ナレーション · オリジナル環境音楽 · 多言語字幕',
    aboutLabel: '映像について', aboutTitle: 'コンテキストから行動まで、一つの監査可能なフロー。',
    aboutCopy: 'TrueFix Studioは、シグナルが情報源を保持し、AIとクオンツシステムが明示的な権限内で動作し、資本が動く前にリスクを可視化するマルチプロバイダーワークステーションです。',
    publishedLabel: '公開日', durationLabel: '再生時間', conceptLabel: '未来構想', transcriptEyebrow: 'アクセシブルな文字起こし', transcriptTitle: 'ナレーション全文',
    transcriptLead: '音声なしでも内容を理解できるよう、ナレーション全文を掲載しています。',
    line1: '市場は、分断されたツールより速く動きます。',
    line2: 'TrueFix Studioは、コンテキスト、証拠、戦略、リスク、執行を一つの監査可能なフローに統合します。',
    line3: 'すべてのシグナルは、その情報源と常につながっています。',
    line4: 'AIとクオンツシステムは、明確で人が管理する境界内で動作します。',
    line5: '次はMarket Twin。資本が動く前に流動性、スリッページ、リスクを比較する未来構想です。',
    line6: 'TrueFix Studio。すべての判断に明快さを。すべての行動に確実さを。'
  },
  ko: {
    metaTitle: 'TrueFix Studio — 제품 영상',
    metaDescription: '증거, 리스크 경계, 권한이 부여된 AI, 퀀트 자동화, 미래 Market Twin 개념을 소개하는 36초 TrueFix Studio 제품 영상입니다.',
    skip: '영상으로 이동', guide: '사용 가이드', home: '홈으로', eyebrow: 'TRUEFIX STUDIO / 제품 영상',
    title: '의사결정 흐름을 보여 주고.<br />모든 경계를 명확히 합니다.',
    lede: '증거로 연결된 시장, 사람이 통제하는 자동화, 미래 Market Twin 개념을 36초로 소개합니다.',
    fallback: '브라우저에서 이 동영상을 재생할 수 없습니다.', caption: '영어 내레이션 · 오리지널 앰비언트 음악 · 다국어 자막',
    aboutLabel: '영상 소개', aboutTitle: '컨텍스트에서 행동까지, 하나의 감사 가능한 흐름.',
    aboutCopy: 'TrueFix Studio는 신호가 출처를 유지하고, AI와 퀀트 시스템이 명시적 권한 안에서 작동하며, 자본이 움직이기 전에 리스크를 보여 주는 멀티 Provider 워크스테이션입니다.',
    publishedLabel: '공개일', durationLabel: '재생 시간', conceptLabel: '미래 개념', transcriptEyebrow: '접근 가능한 스크립트', transcriptTitle: '내레이션 전문',
    transcriptLead: '소리 없이도 영상을 이해할 수 있도록 전체 내레이션을 제공합니다.',
    line1: '시장은 서로 단절된 도구보다 빠르게 움직입니다.',
    line2: 'TrueFix Studio는 컨텍스트, 증거, 전략, 리스크, 실행을 하나의 감사 가능한 흐름으로 연결합니다.',
    line3: '모든 신호는 언제나 원본 소스와 연결됩니다.',
    line4: '인공지능과 퀀트 시스템은 명확하고 사람이 통제하는 경계 안에서 작동합니다.',
    line5: '다음은 Market Twin입니다. 자본이 움직이기 전에 유동성, 슬리피지, 리스크를 비교하는 미래 개념입니다.',
    line6: 'TrueFix Studio. 모든 결정에는 명확함을, 모든 행동에는 확실함을.'
  }
};

function normalizeLanguage(language) {
  const value = String(language || '').toLowerCase();
  if (value.startsWith('zh')) return 'zh-CN';
  if (value.startsWith('ja')) return 'ja';
  if (value.startsWith('ko')) return 'ko';
  if (value.startsWith('en')) return 'en';
  return null;
}

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch { /* Use browser preference. */ }
  const languages = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const language of languages) {
    const normalized = normalizeLanguage(language);
    if (normalized) return normalized;
  }
  return 'en';
}

function applyLanguage(language, persist = false) {
  const locale = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
  const dictionary = copy[locale];
  document.documentElement.lang = locale;
  document.title = dictionary.metaTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = dictionary.metaDescription;
  document.querySelectorAll('[data-copy]').forEach((element) => {
    const value = dictionary[element.dataset.copy];
    if (!value) return;
    if (element.dataset.copy === 'title') element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === locale));
  });
  const film = document.querySelector('[data-film]');
  Array.from(film?.textTracks || []).forEach((track) => {
    track.mode = normalizeLanguage(track.language) === locale ? 'showing' : 'disabled';
  });
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Keep the choice for this page only. */ }
  }
}

applyLanguage(detectLanguage());
document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language, true));
});
