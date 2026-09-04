# TrueFix Studio 使用指南

> 文档版本：2026.09。TrueFix Studio 仍处于首版发布前。产品源码仓库仍为私有，公开 Nightly 安装包由 TrueFix 官方 GitHub Releases 页面提供。本指南不包含私有源码或凭据。

## 1. 开始之前

TrueFix Studio 是一个用于市场研究、策略测试和交易前确认的桌面应用。它连接你已经在使用的服务，不托管资金，也不会替代你的券商或交易所。

第一次使用时，建议按这个顺序操作：安装官方版本、打开工作区、连接一项行情或模拟交易服务、搜索一个交易品种，再创建一笔不发送的订单。先使用只读或模拟模式，熟悉后再考虑真实账户。

高级章节会保留产品设置里的英文名称。**Provider（服务商）**指券商、交易所、数据服务或 AI 服务；**ClientInstance（连接实例）**指保存的一套具体连接；**Environment（环境）**指这套连接属于测试还是实盘。

- 区分 Live、Paper、Testnet、Demo 与 Simulated 环境。
- 第一次验证订单流程时优先使用非 Live 环境。
- Provider 凭据只授予所需能力，不在聊天、截图或工单中公开 Secret。
- TrueFix Studio 不是投资建议，实盘动作必须由账户所有者核验。

## 2. 首次启动

1. 在工作区首页检查内核、Provider、目录、交易投影、Intelligence 与 Risk readiness。
2. 恢复最近工作区，或打开安全默认布局。工作区可恢复上次标的、面板布局与 revision。
3. 分别处理 `unavailable`、`stale`、`degraded` 与 `rejected`；空值不等于零，错误也不等于空结果。

### macOS 未签名版本

如果官方预发布版本因尚未签名而被 macOS 拦截，请先把应用移入 `/Applications`，再打开“终端”运行：

```bash
xattr -cr "/Applications/TrueFix Studio.app"
```

仅对从 TrueFix 官方 Release 下载的应用使用该命令。它会移除这个应用包的隔离属性。

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

## 8. 配置与使用 Agent

Agent 是受限操作助手，不是自带账户权限的自动交易机器人。它通过受权工具读取标的、行情、新闻、Signal、账户和 Quant 状态；交易请求只能形成可审核提案。可用工具以当前测试版本的运行时间线为准。

### 8.1 配置模型

1. 打开 **设置 → AI → AI 交易 Agent → 添加**。
2. 填写显示名称、Provider（OpenAI / Anthropic / Google / Custom）、API Key 和模型 ID。
3. 仅在兼容自定义网关时填写 Base URL。
4. 模型请求参数必须是 JSON 对象，例如 `{"enable_thinking": false}`；不需要时保留 `{}`。
5. 启用并保存。编辑已有 Agent 时，API Key 留空表示保留原密钥。

API Key 只写入 Desktop 本地设置，不应放进对话、Web URL、截图或工单。浏览器不会收到 Provider 或模型的原始密钥。

### 8.2 完成一次安全会话

1. 从 Desktop、Web Desktop 或 H5 底部命令栏打开 Agent，新建会话并选择已启用模型。
2. 说明标的、市场、时间范围、数据来源偏好与目标；涉及账户时明确 Environment，优先使用 Simulator/Testnet。
3. 查看 `admission → model → tool → approval → final` 时间线。
4. 核对工具结果的 Provider、ClientInstance、时间戳、freshness 与 evidence，并区分事实、推断和相关性。
5. 遇到交易 Approval Card 时，核对标的、方向、数量、账户、环境、期限和证据。批准后仍需经过 Review、RiskGuard 与明确提交。

示例提问：

```text
比较 AAPL 最近 20 个交易日的波动与成交量，列出来源、时间戳和不能确认的部分。
只读取 Paper 账户，汇总持仓集中度、未成交订单和盈亏，不要发起交易。
在 Simulator 中拟一笔限价单；先展示 route、规则、风险和审批卡，不要替我批准。
```

Agent 没有任意 Shell、原生插件或 Provider SDK 直连权限；首版不允许无人值守的 Live 自动交易。网页或新闻内容里的指令不是操作授权。

## 9. Quant、回放与 Trigger

Quant 使用固定数据、交易日历、费用、滑点、seed 与 revision 运行或回放。Agent 可起草 declarative Trigger，但需要按下面流程执行：

```text
Draft → Validate → Historical Replay → Approve → Deploy → Pause / Retire
```

- 精确选择 canonical Instrument、Provider、ClientInstance 和数据类型。
- Revision 保留不可变输入、资源预算、输出与 evidence cursor；失败的新 Revision 不替换运行版本。
- Trigger 先持久化结果，再唤醒 Agent；模型延迟不会阻塞市场、Quant 与执行热路径。
- headless Runtime 持有任务，关闭 Desktop/Web 不会停止任务。

## 10. Web Gateway 与 ACME

Web Gateway 是 Desktop 进程里的可选入口，启停或重配不会停止 Desktop Kernel 和 Provider 连接。

### 10.1 先验证本机访问

1. 打开 **设置 → Web Gateway**，生成随机访问密码，并立即保存到密码管理器。明文只显示一次；应用保存 Argon2 verifier。
2. Bind Host 使用 `127.0.0.1` 或 `::1`，选择 HTTP 并启用。明文 HTTP 不能绑定 `0.0.0.0`。
3. 打开状态栏给出的 URL 并登录。“保持登录”只延长身份会话，不增加交易权限。

### 10.2 配置远程 HTTPS

1. 将 `studio.example.com` 的 A/AAAA 指向 Gateway 公网地址；IPv6 无法到达时移除错误 AAAA。
2. `public_domains` 只填 DNS 名称，不含协议、端口或路径；`public_base_url` 填完整 `https://` URL。allowlist 不接受通配域名。
3. 使用匹配域名的自有 PEM，或选择 Let's Encrypt 自动证书。所有 non-loopback 访问必须使用 HTTPS。

| ACME 方式 | 公网条件 | 适用情况 |
|---|---|---|
| HTTP-01 | 公网 TCP 80 到 challenge listener | 普通单机；可把 challenge 路径转发到本地 8080 |
| TLS-ALPN-01 | 公网 TCP 443 直接到 TrueFix | TrueFix 独占 443；前置 TLS 终止不能拦截 ALPN |
| DNS-01 | Cloudflare `DNS:Edit` Token + Zone ID | NAT/反向代理/不能开放 80 或 443；Gateway 仍不接受通配域名 |

推荐先用 staging 演练，再切 production：

```text
https://acme-staging-v02.api.letsencrypt.org/directory
  → Apply → Running/renewal 正常 → 浏览器验证
https://acme-v02.api.letsencrypt.org/directory
  → 再次 Apply → 核对颁发者、SAN、到期时间
```

Staging 证书不会被浏览器信任。HTTP-01 必须保留 `/.well-known/acme-challenge/*`；DNS-01 使用目标 Zone 的最小 `DNS:Edit` Token，不使用 Global API Key。trusted proxy allowlist 只加入反向代理的精确 IP。

ACME 失败不会降级到公网明文 HTTP。续期失败会保留最后的有效证书；进入到期安全窗口后停止远程 HTTPS，修复 DNS、端口或 Directory 后再 Apply。

## 11. 运维、日志与审计

Operations 用于回答“什么时候发生了什么、由谁发起、影响到哪里”。不同入口不要混用：

| 入口 | 用途 | 推荐筛选 |
|---|---|---|
| Activity | 最近的用户可见操作 | 确认命令是否被接收 |
| Logs | 时间、level、target、稳定错误码 | correlation ID、ClientInstance、时间窗 |
| Audit | actor、scope、reason、before/after revision、result | 交易、审批、配置与安全追踪 |
| Health | Provider、queue、storage、runtime | freshness、lag、retry |

报告问题时提供显示时区、Environment、Provider、ClientInstance、稳定错误码、correlation ID、order/client order ID 与 revision；删除 API Key、Cookie 和完整账户号。macOS 主日志和 Web 访问日志位于 `~/Library/Application Support/truefix-studio/logs/`，按日期滚动。访问日志含 IP 与 User-Agent，应最小化保存和分享。

## 12. 状态词典

| 状态 | 含义 | 正确动作 |
|---|---|---|
| Loading | 正在获取投影 | 等待或保留已有内容 |
| Empty | 权威查询成功且无记录 | 不要当成错误 |
| Unavailable | 能力、权限、映射或服务不存在 | 修复配置/权限 |
| Stale | 有 last-good 数据但已超 freshness | 查看 as-of，避免依赖旧值交易 |
| Degraded | 部分来源或 facet 失败 | 只使用明确仍可用的部分 |
| Rejected | schema、权限、规则或 RiskGuard 拒绝 | 阅读稳定错误码并修正 |
| Reconciling | 正在与 Provider 权威状态对账 | 保留当前投影等待确认 |
| Uncertain | Provider 可能已接收但响应未知 | 只查询恢复，绝不重新提交 |

每个状态都要连同 `source / as-of / revision / stable code` 一起判断。

## 13. 数据与架构边界

浏览器不是标的、账户、订单、行情、风险或 AI/Quant 的权威所有者。所有入口共享 canonical application contracts，保留原始 adapter provenance，不补造缺失数据、不跨 Provider 静默混源，也不按 Provider 名称写死能力。

## 14. 故障排查

- **已连接但不能交易**：检查 Environment、capability、entitlement、账户、mapping、TradingRules 与 freshness。
- **有 K 线但无实时报价**：Historical 与 Realtime 独立，检查实时订阅权限、source health 和首个 Tick。
- **Review 后不能提交**：路由、账户、规则或字段变化可能让旧 token 失效，重新 Review。
- **提交超时**：使用原 client order ID 查询恢复，不要创建相同订单。
- **Agent 为空或不能发送**：确认至少一个 Agent 已保存并启用，API Key、模型 ID、Base URL 与请求参数有效。
- **Agent 工具被拒绝**：检查 ToolGrant 范围、账户/标的与期限；submit/cancel/replace 必须由 owner 审批。
- **远程 Web 打不开**：先查 configured/effective 状态与 `last_error`，再查 bind host、端口、A/AAAA、防火墙和 TLS；根据 challenge 检查 80、443 或 DNS TXT。
- **证书不受信任**：确认已从 staging 切到 production、域名在 SAN 中、客户端时间正确、代理没有返回旧证书。
- **页面 stale/unavailable**：查看受影响 facet、时间戳与原始错误；last-good 数据不表示仍然新鲜。
