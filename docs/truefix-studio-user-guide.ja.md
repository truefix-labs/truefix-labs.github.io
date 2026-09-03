# TrueFix Studio ユーザーガイド

> 文書バージョン：2026.09。TrueFix Studioはリリース前のソフトウェアです。製品リポジトリとインストーラーは公開されていません。本ガイドはアクセス権を持つテストユーザー向けであり、非公開ソース、認証情報、ダウンロードリンクを含みません。

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

## 8. AIとQuant

AI Agentは認可済みツールだけで分析し、TradingDecisionを提案します。Quantは固定されたデータ、カレンダー、費用、スリッページ、revision入力で実行またはリプレイします。戦略出力にはevidence、バージョン、期限、口座、銘柄範囲が含まれます。承認は意図を通常のReviewとRiskGuardへ入れるだけで、注文を送信しません。

## 9. 構成とデータ境界

ブラウザーは銘柄、口座、注文、市場データ、リスク、AI/Quantの権威所有者ではありません。全エントリーポイントはcanonical application contractsを共有し、adapter provenanceを保持します。UIは欠損データを作らず、Providerを暗黙に混在させず、Provider名から機能を決めつけません。

## 10. トラブルシューティング

- **接続済みだが取引できない：** Environment、capability、entitlement、口座、正確なmapping、TradingRules、freshnessを確認します。
- **履歴バーはあるがリアルタイム価格がない：** HistoricalとRealtimeは独立しています。購読権限、source health、最初のTickを確認します。
- **Review後に送信できない：** 経路、口座、ルール、フィールド変更でtokenが無効になった可能性があります。再度Reviewします。
- **送信がタイムアウトした：** 元のclient order IDで照会し、同じ注文を作成し直しません。
- **stale/unavailable表示：** 影響を受けたfacet、timestamp、元のエラーを確認します。last-goodデータが常に最新とは限りません。
