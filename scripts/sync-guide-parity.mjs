import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const changes = {
  'guide/content/en.html': [],
  'guide/content/zh-CN.html': [],
  'guide/content/ja.html': [
    ['<p>Kill Switch解除前にincident、未決注文、Provider状態を確認します。解除しても以前の意図は再生されません。</p>', '<h3 class="guide-subtitle">Kill Switchの使い方</h3><p>Kill Switchはバックエンドのリスク状態です。対象範囲と理由を記録し、対象口座と戦略が新しい操作を作らないことを確認します。解除前にincident、未決注文、Provider状態を確認し、新しい注文は再度Reviewします。解除しても以前の意図は再生されません。</p>'],
    ['<p>報告時は時刻・タイムゾーン・Environment・Provider・ClientInstance・stable code・correlation IDを添え、API Key、Cookie、完全な口座番号を除外します。</p>', '<h3 class="guide-subtitle">問題を報告する前に</h3><ol class="steps compact"><li><span>1</span><div><h3>時刻と環境を記録</h3><p>タイムゾーン、Environment、Provider、ClientInstanceを含めます。</p></div></li><li><span>2</span><div><h3>安定した証拠を保存</h3><p>error code、correlation ID、revision、freshnessを保存し、秘密情報を除きます。</p></div></li><li><span>3</span><div><h3>期待と実際を説明</h3><p>再現手順と、Liveや外部注文への影響を記載します。</p></div></li></ol>']
  ],
  'guide/content/ko.html': [
    ['<p>Kill Switch 해제 전에 incident, 미결 주문, Provider 상태를 확인합니다. 해제해도 이전 의도는 재생되지 않습니다.</p>', '<h3 class="guide-subtitle">Kill Switch 사용 방법</h3><p>Kill Switch는 백엔드 리스크 상태입니다. 범위와 이유를 기록하고 영향받는 계정과 전략이 새 작업을 만들지 않는지 확인하세요. 해제 전에 incident, 미결 주문과 Provider 상태를 처리하고 새 주문을 다시 Review합니다. 해제해도 이전 의도는 재생되지 않습니다.</p>'],
    ['<p>문제 보고에는 시간/시간대, Environment, Provider, ClientInstance, stable code와 correlation ID를 포함하고 API Key, Cookie, 전체 계정 번호는 제외하세요.</p>', '<h3 class="guide-subtitle">문제를 보고하기 전에</h3><ol class="steps compact"><li><span>1</span><div><h3>시간과 환경 기록</h3><p>시간대, Environment, Provider와 ClientInstance를 포함하세요.</p></div></li><li><span>2</span><div><h3>안정적인 증거 저장</h3><p>error code, correlation ID, revision과 freshness를 남기고 비밀 정보는 제외하세요.</p></div></li><li><span>3</span><div><h3>기대 결과와 실제 결과 설명</h3><p>재현 단계와 Live 또는 외부 주문에 미친 영향을 적으세요.</p></div></li></ol>']
  ]
};

for (const [file, replacements] of Object.entries(changes)) {
  const path = join(root, file);
  let content = await readFile(path, 'utf8');
  for (const [before, after] of replacements) {
    if (content.includes(after)) continue;
    if (!content.includes(before)) throw new Error(`Missing expected guide text in ${file}`);
    content = content.replace(before, after);
  }
  content = content.replaceAll('../assets/truefix-mark.png', '../assets/favicon-32.png');
  await writeFile(path, content);
}
