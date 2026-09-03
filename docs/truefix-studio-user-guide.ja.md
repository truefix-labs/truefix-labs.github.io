# TrueFix Studio ユーザーガイド

> 文書バージョン：2026.09。TrueFix Studioはプレリリースソフトウェアです。製品ソースリポジトリは非公開ですが、公開NightlyインストーラーはTrueFix公式GitHub Releasesページで提供しています。本ガイドに非公開ソースや認証情報は含まれません。

## 1. 始める前に

TrueFix StudioはマルチProvider取引ワークステーションです。Desktop、Web、Headless Quant、認可済みAIツールは、同じ銘柄、機能、リスク、執行契約を使用します。機能の可否はProvider、ClientInstance、Environment、Account、Entitlement、正確な銘柄mapping、ランタイムhealth evidenceによって決まり、画面の存在だけでは機能が利用可能とは限りません。

- Live、Paper、Testnet、Demo、Simulatedを区別します。
- 注文ワークフローはまずLive以外で検証します。
- Provider認証情報には必要な機能だけを許可し、チャット、画像、チケットにSecretを公開しません。
- TrueFix Studioは投資助言ではありません。実取引は口座所有者がすべて確認します。

## 2. 初回起動

1. Kernel、Provider、Catalog、取引projection、Intelligence、Riskのreadinessを確認します。
2. 最近のワークスペースを復元するか、安全な初期レイアウトを開きます。銘柄、パネル配置、revisionを復元できます。
3. `unavailable`、`stale`、`degraded`、`rejected`を別の状態として扱います。欠損値は0ではなく、エラーは空の結果ではありません。

### 未署名のmacOSビルド

公式プレリリース版が未署名のためmacOSにブロックされた場合、アプリを`/Applications`へ移動し、Terminalで次を実行します。

```bash
xattr -cr "/Applications/TrueFix Studio.app"
```

TrueFix公式Releaseからダウンロードしたアプリにのみ使用してください。このコマンドは対象アプリバンドルの隔離属性を削除します。

## 3. Providerの設定

**Provider Centre**でProviderDefinitionを選び、ClientInstanceを作成します。

```text
ProviderDefinition
  -> ClientInstance
  -> Environment + typed config
  -> validate and save
  -> connect
  -> capability / entitlement / account / mapping evidence
```

一つのProviderには複数のClientInstanceを作成でき、一つのClientInstanceは複数口座を投影できます。Secretは書き込み専用です。「接続済み」は「取引可能」を意味しないため、capability、entitlement、口座、mapping、環境、TradingRules、health evidenceも確認します。

## 4. 銘柄と市場データ

グローバル検索からcanonical Instrumentを選択します。システムは三つの独立facetを解決します。

| Facet | 内容 | 切替の影響 |
|---|---|---|
| Historical | バーと履歴範囲 | 履歴系列のみ交換 |
| Realtime | Quote、Book、Trade | バーと注文下書きを維持 |
| Trading | ルール、口座、執行経路 | 注文フィールドを再検証 |

Provider、ClientInstance、quality、timestampは常に表示されます。正確なmappingがない場合、似たsymbolから推測せず経路を拒否します。

## 5. 注文とリスク

```text
Order Draft
  -> Exact Route + TradingRules
  -> Backend Review
  -> RiskGuard
  -> Explicit Submit
  -> Acknowledgement / Reconciliation
```

1. Provider、ClientInstance、Account、Environmentを確認します。
2. 解決済みOrderSchemaに従ってOrder Type、TIF、数量、価格、条件フィールドを入力します。
3. 銘柄、方向、価格、数量、費用、ルール、freshnessをReviewします。フィールド変更は以前のreview tokenを無効にします。
4. RiskGuard通過後にユーザーが明示的に送信します。決定論的client order IDと冪等性境界を使用します。
5. 結果不明時は照会とreconcileのみ行い、再送信しません。

Kill Switch解除、ページ更新、ネットワーク再接続で注文が自動再送信されることはありません。

## 6. 口座とポートフォリオ

Portfolioは権威ある取引projectionを読み、Provider、ClientInstance、Account、Environmentで絞り込みます。アプリ注文と外部/不明注文は分離されます。通常の更新はローカルprojectionを読み、権威ある更新だけがProvider reconcileを開始します。

- 一貫したFX revisionなしに異なる通貨を合計しません。
- `partial`または`stale`評価を完全な資産として表示しません。
- Provider切断や環境切替後、以前の口座ドメインは現在の操作に参加しません。

## 7. Intelligence

IntelligenceはObservation、Signal、Composite Index、Evidence、履歴Replayを表示します。Signalはbaseline、deviation、confidence、freshness、revision、sourceを持つ分析結果であり、確定事実でも直接注文でもありません。

## 8. Agent の設定と使い方

Agent は権限を制限された操作アシスタントであり、自律取引ボットではありません。認可ツールで銘柄、市場、ニュース、Signal、口座、Quant 状態を読み取り、取引はレビュー可能な提案としてのみ作成します。利用可能なツールは実行タイムラインで確認します。

### 8.1 モデル設定

1. **設定 → AI → AI trading agents → 追加**を開きます。
2. 表示名、Provider（OpenAI / Anthropic / Google / Custom）、API Key、モデル ID を入力します。
3. 互換カスタムゲートウェイの場合だけ Base URL を指定します。
4. リクエストパラメータは `{"enable_thinking": false}` のような JSON オブジェクトです。不要なら `{}` にします。
5. 有効化して保存します。既存 Agent の API Key を空欄にすると保存済みキーを保持します。

API Key は Desktop のローカル設定にのみ入力し、会話、Web URL、画像、チケットには書きません。生の認証情報はブラウザーへ渡りません。

### 8.2 安全なセッション

1. Desktop、Web Desktop、H5 の下部コマンドバーから Agent を開き、セッションと有効モデルを選びます。
2. 銘柄、市場、期間、ソース、目的を明示します。口座を扱う場合は Environment を指定し、Simulator/Testnet から始めます。
3. `admission → model → tool → approval → final` と Provider、ClientInstance、時刻、freshness、evidence を確認します。
4. 事実、推論、相関を区別し、stale/degraded/拒否なら質問を絞るかソースを修復します。
5. Approval Card の銘柄、方向、数量、口座、環境、期限、証拠を確認します。承認後も Review、RiskGuard、明示送信が必要です。

```text
AAPL の直近20取引日の変動率と出来高を比較し、ソース時刻と不明点を示して。
Paper 口座だけを読み、集中度、未約定注文、損益を要約。取引は開始しないで。
Simulator の指値注文案を作り、route、ルール、リスク、承認カードを先に表示して。
```

任意 Shell、ネイティブプラグイン、Provider SDK への直接アクセスはありません。初版では無人 Live 自動取引は無効です。

## 9. Quant、Replay、Trigger

Quant は固定データ、取引カレンダー、費用、スリッページ、seed、revision で実行・再生します。

```text
Draft → Validate → Historical Replay → Approve → Deploy → Pause / Retire
```

- 正確な canonical Instrument、Provider、ClientInstance、データ種別を指定します。
- Revision は不変入力、リソース上限、出力、evidence cursor を保持します。
- Trigger は結果を永続化してから Agent を起動し、モデル遅延は取引のホットパスを止めません。
- headless Runtime がジョブを所有するため、UI を閉じても停止しません。

## 10. Web Gateway と ACME

### 10.1 ローカル接続

1. **設定 → Web Gateway** でアクセスパスワードを生成し、パスワード管理ソフトに保存します。平文は一度だけ表示されます。
2. Bind Host を `127.0.0.1` または `::1`、HTTP にして有効化します。平文 HTTP は `0.0.0.0` にバインドできません。
3. 表示 URL へログインします。「ログイン状態を保持」は取引権限を増やしません。

### 10.2 リモート HTTPS

1. `studio.example.com` の A/AAAA を Gateway の公開 IP へ向けます。到達しない AAAA は削除します。
2. `public_domains` は DNS 名のみ、`public_base_url` は完全な `https://` URL です。ワイルドカードは不可です。
3. ドメインに一致する PEM または Let's Encrypt を選びます。non-loopback は必ず HTTPS です。

| ACME | 公開条件 | 用途 |
|---|---|---|
| HTTP-01 | 公開 TCP 80 が challenge listener へ到達 | 通常ホスト。challenge パスをローカル 8080 へ転送可能 |
| TLS-ALPN-01 | 公開 TCP 443 が TrueFix へ直達 | TrueFix が 443 を占有、前段で ALPN を終端しない |
| DNS-01 | Cloudflare `DNS:Edit` Token + Zone ID | NAT/リバースプロキシ/80・443を開けない場合 |

まず `https://acme-staging-v02.api.letsencrypt.org/directory` で演習し、Running と renewal を確認してから `https://acme-v02.api.letsencrypt.org/directory` へ切り替えます。Staging 証明書が信頼されないのは正常です。HTTP-01 は `/.well-known/acme-challenge/*` を保持し、DNS-01 は対象 Zone 限定の最小 `DNS:Edit` Token を使います。

ACME 失敗時も公開 HTTP へ降格しません。trusted proxy allowlist には正確なプロキシ IP だけを追加してください。

## 11. 運用、ログ、監査

Operations は、いつ・誰が・何を・どの範囲で行ったかを確認する入口です。

| 表示 | 用途 | 推奨フィルター |
|---|---|---|
| Activity | 最近のユーザー操作 | command 受理の確認 |
| Logs | time、level、target、stable code | correlation ID、ClientInstance、時間 |
| Audit | actor、scope、reason、revision、result | 取引、承認、設定、セキュリティ |
| Health | Provider、queue、storage、runtime | freshness、lag、retry |

問題報告にはタイムゾーン、Environment、Provider、ClientInstance、stable code、correlation ID、order ID、revision を含め、API Key、Cookie、完全な口座番号は削除します。macOS のログは `~/Library/Application Support/truefix-studio/logs/` にあります。

## 12. 状態用語

| 状態 | 意味 | 対応 |
|---|---|---|
| Loading | 投影を取得中 | 待機または既存内容を保持 |
| Empty | 権威クエリ成功、記録なし | エラー扱いしない |
| Unavailable | 機能、権限、mapping、serviceがない | 設定/権限を修復 |
| Stale | last-goodがfreshness超過 | as-ofを確認 |
| Degraded | 一部source/facetが失敗 | 明示的に利用可能な部分だけ使う |
| Rejected | schema、権限、rules、RiskGuardが拒否 | stable codeを確認して修正 |
| Reconciling | Provider権威状態と照合中 | 確認まで状態を保持 |
| Uncertain | Provider受付の可能性、応答不明 | 照会のみ、再送信しない |

`source / as-of / revision / stable code` を一緒に確認します。

## 13. 構成とデータ境界

ブラウザーは銘柄、口座、注文、市場データ、リスク、AI/Quantの権威所有者ではありません。全エントリーポイントはcanonical application contractsを共有し、adapter provenanceを保持します。UIは欠損データを作らず、Providerを暗黙に混在させず、Provider名から機能を決めつけません。

## 14. トラブルシューティング

- **接続済みだが取引できない：** Environment、capability、entitlement、口座、正確なmapping、TradingRules、freshnessを確認します。
- **履歴バーはあるがリアルタイム価格がない：** HistoricalとRealtimeは独立しています。購読権限、source health、最初のTickを確認します。
- **送信がタイムアウトした：** 元のclient order IDで照会し、同じ注文を作成し直しません。
- **Agent が空/送信不可：** 有効な Agent、API Key、モデル ID、Base URL、JSON パラメータを確認します。
- **Agent ツールが拒否：** ToolGrant の範囲と期限を確認します。submit/cancel/replace は owner 承認が必要です。
- **リモート Web が開かない：** configured/effective 状態、`last_error`、bind host、ポート、A/AAAA、Firewall、TLS を確認します。
- **証明書が信頼されない：** production Directory、SAN、端末時刻、プロキシの古い証明書を確認します。
- **stale/unavailable表示：** 影響を受けたfacet、timestamp、元のエラーを確認します。
