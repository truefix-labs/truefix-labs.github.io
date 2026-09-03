# TrueFix Studio 使用指南

> 文档版本：2026.09。TrueFix Studio 仍处于首版发布前，产品仓库与安装包暂未公开。本指南面向已获访问权限的测试用户，不包含私有源码、凭据或下载链接。

## 1. 开始之前

TrueFix Studio 是多 Provider 交易工作站。Desktop、Web、Headless Quant 与受权 AI 工具共享同一套标的、能力、风险与执行契约。功能是否可用取决于所选 Provider、ClientInstance、Environment、Account、Entitlement、精确标的映射与运行时健康证据；页面存在不代表某能力已经可用。

- 区分 Live、Paper、Testnet、Demo 与 Simulated 环境。
- 第一次验证订单流程时优先使用非 Live 环境。
- Provider 凭据只授予所需能力，不在聊天、截图或工单中公开 Secret。
- TrueFix Studio 不是投资建议，实盘动作必须由账户所有者核验。

## 2. 首次启动

1. 在工作区首页检查内核、Provider、目录、交易投影、Intelligence 与 Risk readiness。
2. 恢复最近工作区，或打开安全默认布局。工作区可恢复上次标的、面板布局与 revision。
3. 分别处理 `unavailable`、`stale`、`degraded` 与 `rejected`；空值不等于零，错误也不等于空结果。

## 3. 配置 Provider

打开 **Provider Centre**，选择 ProviderDefinition 并新建 ClientInstance：

```text
ProviderDefinition
  -> ClientInstance
  -> Environment + typed config
  -> validate and save
  -> connect
  -> capability / entitlement / account / mapping evidence
```

一个 Provider 可以有多个 ClientInstance；一个 ClientInstance 可以投影多个账户。Secret 可写但不回显原值。“已连接”不等于“可以交易”，仍需检查交易 capability、entitlement、账户、标的映射、环境、TradingRules 与健康证据。

## 4. 标的与行情

在全局搜索中选择 canonical Instrument。系统为三种独立 facet 解析来源：

| Facet | 内容 | 切换影响 |
|---|---|---|
| Historical | K 线与历史范围 | 只替换历史序列 |
| Realtime | Quote、Book、Trade | 不清空 K 线或订单草稿 |
| Trading | 规则、账户与执行路由 | 触发订单字段重新校验 |

每个来源的 Provider、ClientInstance、质量和时间戳应保持可见。缺少精确 mapping 时系统会拒绝路由，不会用相似 symbol 猜测。

## 5. 下单与风控

```text
Order Draft
  -> Exact Route + TradingRules
  -> Backend Review
  -> RiskGuard
  -> Explicit Submit
  -> Acknowledgement / Reconciliation
```

1. 确认 Provider、ClientInstance、Account 与 Environment。
2. 根据实际 OrderSchema 填写 Order Type、TIF、数量、价格和条件字段。
3. Review 标的、方向、价格、数量、费用、规则与新鲜度。字段变化会使旧 review token 失效。
4. RiskGuard 通过后由用户明确提交。提交使用确定性 client order ID 与幂等边界。
5. 超时或结果未知时只执行查询恢复，绝不再次提交。

Kill Switch 恢复、页面刷新或网络重连都不会自动重新提交订单。

## 6. 账户与组合

Portfolio 读取权威交易投影，可按 Provider、ClientInstance、Account 与 Environment 筛选。应用订单和外部/未知订单严格分区。普通页面刷新读取本地投影；手动权威刷新才触发 Provider reconcile。

- 不同币种在缺少一致 FX revision 时不直接相加。
- `partial` 或 `stale` 的估值不会被表达成完整权益。
- Provider 下线或环境切换后，旧账户域不继续参与当前操作。

## 7. Intelligence

Intelligence 展示 Observation、Signal、Composite Index、Evidence 与历史 Replay。Signal 是带 baseline、deviation、confidence、freshness、revision 与来源的分析结果，不是已证实事实，也不会直接创建订单。

## 8. AI 与 Quant

AI Agent 只能通过受权工具分析并提出 TradingDecision；Quant 使用固定数据、日历、费用、滑点和 revision 运行或回放。策略输出必须携带 evidence、版本、期限、账户与标的范围。批准只让意图进入普通 Review / RiskGuard，不表示订单已经提交。

## 9. 数据与架构边界

浏览器不是标的、账户、订单、行情、风险或 AI/Quant 的权威所有者。所有入口共享 canonical application contracts，保留原始 adapter provenance，不补造缺失数据、不跨 Provider 静默混源，也不按 Provider 名称写死能力。

## 10. 故障排查

- **已连接但不能交易**：检查 Environment、capability、entitlement、账户、mapping、TradingRules 与 freshness。
- **有 K 线但无实时报价**：Historical 与 Realtime 独立，检查实时订阅权限、source health 和首个 Tick。
- **Review 后不能提交**：路由、账户、规则或字段变化可能让旧 token 失效，重新 Review。
- **提交超时**：使用原 client order ID 查询恢复，不要创建相同订单。
- **页面 stale/unavailable**：查看受影响 facet、时间戳与原始错误；last-good 数据不表示仍然新鲜。
