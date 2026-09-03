# TrueFix Studio 사용자 가이드

> 문서 버전: 2026.09. TrueFix Studio는 출시 전 소프트웨어입니다. 제품 저장소와 설치 파일은 공개되지 않았습니다. 이 가이드는 접근 권한이 있는 테스트 사용자를 위한 것이며 비공개 소스, 자격 증명, 다운로드 링크를 포함하지 않습니다.

## 1. 시작 전

TrueFix Studio는 멀티 Provider 트레이딩 워크스테이션입니다. Desktop, Web, Headless Quant, 권한이 부여된 AI 도구가 동일한 종목, 기능, 리스크, 실행 계약을 사용합니다. 기능 사용 가능 여부는 Provider, ClientInstance, Environment, Account, Entitlement, 정확한 종목 매핑, 런타임 상태 증거에 따라 달라집니다. 화면이 있다는 사실만으로 기능이 사용 가능하다는 뜻은 아닙니다.

- Live, Paper, Testnet, Demo, Simulated 환경을 구분하세요.
- 주문 워크플로는 Live가 아닌 환경에서 먼저 검증하세요.
- 필요한 기능만 Provider 자격 증명에 허용하고 채팅, 스크린샷, 티켓에 Secret을 공개하지 마세요.
- TrueFix Studio는 투자 조언이 아닙니다. 모든 실거래 작업은 계정 소유자가 확인해야 합니다.

## 2. 첫 실행

1. Kernel, Provider, Catalog, 거래 projection, Intelligence, Risk의 readiness를 확인합니다.
2. 최근 워크스페이스를 복구하거나 안전한 기본 레이아웃을 엽니다. 종목, 패널 배치, revision을 복구할 수 있습니다.
3. `unavailable`, `stale`, `degraded`, `rejected`를 서로 다른 상태로 처리합니다. 누락값은 0이 아니며 오류는 빈 결과가 아닙니다.

### 서명되지 않은 macOS 빌드

승인된 출시 전 앱이 아직 서명되지 않아 macOS에서 차단되면 앱을 `/Applications`로 옮긴 후 Terminal에서 다음 명령을 실행하세요.

```bash
xattr -cr "/Applications/TrueFix Studio.app"
```

공식 프로젝트 채널에서 받은 빌드에만 사용하세요. 이 명령은 해당 앱 번들의 격리 속성을 제거합니다.

## 3. Provider 구성

**Provider Centre**에서 ProviderDefinition을 선택하고 ClientInstance를 만듭니다.

```text
ProviderDefinition
  -> ClientInstance
  -> Environment + typed config
  -> validate and save
  -> connect
  -> capability / entitlement / account / mapping evidence
```

한 Provider에는 여러 ClientInstance가 있을 수 있고 한 ClientInstance는 여러 계정을 투영할 수 있습니다. Secret은 쓰기 전용입니다. “연결됨”은 “거래 가능”을 뜻하지 않으므로 capability, entitlement, 계정, 매핑, 환경, TradingRules, 상태 증거도 확인하세요.

## 4. 종목과 시장 데이터

전역 검색에서 canonical Instrument를 선택합니다. 시스템은 세 개의 독립 facet을 해석합니다.

| Facet | 내용 | 전환 영향 |
|---|---|---|
| Historical | 바와 과거 범위 | 과거 시계열만 교체 |
| Realtime | Quote, Book, Trade | 바와 주문 초안을 유지 |
| Trading | 규칙, 계정, 실행 경로 | 주문 필드를 다시 검증 |

Provider, ClientInstance, 품질, timestamp는 항상 표시됩니다. 정확한 매핑이 없으면 비슷한 symbol을 추측하지 않고 경로를 거부합니다.

## 5. 주문과 리스크

```text
Order Draft
  -> Exact Route + TradingRules
  -> Backend Review
  -> RiskGuard
  -> Explicit Submit
  -> Acknowledgement / Reconciliation
```

1. Provider, ClientInstance, Account, Environment를 확인합니다.
2. 해석된 OrderSchema에 따라 Order Type, TIF, 수량, 가격, 조건 필드를 입력합니다.
3. 종목, 방향, 가격, 수량, 비용, 규칙, freshness를 Review합니다. 필드가 바뀌면 기존 review token이 무효화됩니다.
4. RiskGuard 통과 후 사용자가 명시적으로 제출합니다. 결정론적 client order ID와 멱등성 경계를 사용합니다.
5. 결과를 알 수 없으면 조회하고 reconcile하며 다시 제출하지 않습니다.

Kill Switch 복구, 페이지 새로고침, 네트워크 재연결은 주문을 자동으로 다시 제출하지 않습니다.

## 6. 계정과 포트폴리오

Portfolio는 권위 있는 거래 projection을 읽고 Provider, ClientInstance, Account, Environment로 필터링합니다. 앱 주문과 외부/미확인 주문은 분리됩니다. 일반 새로고침은 로컬 projection을 읽고 권위 있는 새로고침만 Provider reconcile을 시작합니다.

- 일관된 FX revision 없이 서로 다른 통화를 합산하지 않습니다.
- `partial` 또는 `stale` 평가는 완전한 자산으로 표시되지 않습니다.
- Provider 연결 해제나 환경 전환 후 이전 계정 도메인은 현재 작업에 참여하지 않습니다.

## 7. Intelligence

Intelligence는 Observation, Signal, Composite Index, Evidence, 과거 Replay를 표시합니다. Signal은 baseline, deviation, confidence, freshness, revision, source가 있는 분석 결과이며 확인된 사실이나 직접 주문이 아닙니다.

## 8. Agent 구성 및 사용

Agent는 권한이 제한된 운영 도우미이며 자율 거래 봇이 아닙니다. 승인된 도구로 종목, 시장, 뉴스, Signal, 계정과 Quant 상태를 읽고 거래는 검토 가능한 제안으로만 만듭니다. 현재 빌드의 실행 타임라인이 도구 가용성의 기준입니다.

### 8.1 모델 구성

1. **설정 → AI → AI trading agents → 추가**를 엽니다.
2. 표시 이름, Provider(OpenAI / Anthropic / Google / Custom), API Key, 모델 ID를 입력합니다.
3. 호환 사용자 지정 게이트웨이일 때만 Base URL을 지정합니다.
4. 요청 매개변수는 `{"enable_thinking": false}` 같은 JSON 객체여야 하며 필요 없으면 `{}`를 사용합니다.
5. 활성화하고 저장합니다. 기존 Agent의 API Key를 비우면 저장된 키를 유지합니다.

API Key는 Desktop 로컬 설정에만 입력하고 대화, Web URL, 이미지, 티켓에는 넣지 마세요. 원본 자격 증명은 브라우저에 전달되지 않습니다.

### 8.2 안전한 세션

1. Desktop, Web Desktop 또는 H5 하단 명령 바에서 Agent를 열고 세션과 활성 모델을 선택합니다.
2. 종목, 시장, 기간, 소스, 목표를 명시합니다. 계정 작업에는 Environment를 쓰고 Simulator/Testnet부터 시작합니다.
3. `admission → model → tool → approval → final`과 Provider, ClientInstance, 시간, freshness, evidence를 확인합니다.
4. 사실, 추론, 상관관계를 구분하고 stale/degraded/거부이면 범위를 좁히거나 소스를 복구합니다.
5. Approval Card의 종목, 방향, 수량, 계정, 환경, 만료, 증거를 확인합니다. 승인 뒤에도 Review, RiskGuard와 명시적 제출이 필요합니다.

```text
AAPL 최근 20거래일의 변동성과 거래량을 비교하고 소스 시간과 불확실한 부분을 표시해 줘.
Paper 계정만 읽고 집중도, 미체결 주문, 손익을 요약해 줘. 거래는 시작하지 마.
Simulator 지정가 주문안을 만들고 route, 규칙, 리스크, 승인 카드를 먼저 보여 줘.
```

임의 Shell, 네이티브 플러그인, Provider SDK 직접 접근은 없습니다. 첫 릴리스에서 무인 Live 자동 거래는 비활성화됩니다.

## 9. Quant, Replay와 Trigger

Quant는 고정 데이터, 거래 달력, 수수료, 슬리피지, seed, revision으로 실행/리플레이됩니다.

```text
Draft → Validate → Historical Replay → Approve → Deploy → Pause / Retire
```

- 정확한 canonical Instrument, Provider, ClientInstance와 데이터 종류를 선택합니다.
- Revision은 불변 입력, 리소스 제한, 출력, evidence cursor를 보존합니다.
- Trigger는 결과를 영속화한 뒤 Agent를 깨우므로 모델 지연이 거래 핫패스를 막지 않습니다.
- headless Runtime이 작업을 소유하므로 UI를 닫아도 중지되지 않습니다.

## 10. Web Gateway와 ACME

### 10.1 로컬 접속

1. **설정 → Web Gateway**에서 접속 비밀번호를 생성해 비밀번호 관리자에 저장합니다. 평문은 한 번만 표시됩니다.
2. Bind Host를 `127.0.0.1` 또는 `::1`, HTTP로 설정해 활성화합니다. 평문 HTTP는 `0.0.0.0`에 바인딩할 수 없습니다.
3. 표시 URL로 로그인합니다. “로그인 유지”는 거래 권한을 늘리지 않습니다.

### 10.2 원격 HTTPS

1. `studio.example.com`의 A/AAAA를 Gateway 공인 IP로 지정합니다. 도달하지 않는 AAAA는 제거합니다.
2. `public_domains`는 DNS 이름만, `public_base_url`은 완전한 `https://` URL을 사용합니다. 와일드카드는 허용되지 않습니다.
3. 도메인과 일치하는 PEM 또는 Let's Encrypt를 선택합니다. non-loopback은 항상 HTTPS여야 합니다.

| ACME | 공개 조건 | 용도 |
|---|---|---|
| HTTP-01 | 공인 TCP 80이 challenge listener에 도달 | 일반 호스트. challenge 경로를 로컬 8080으로 전달 가능 |
| TLS-ALPN-01 | 공인 TCP 443이 TrueFix에 직접 도달 | TrueFix가 443 사용, 앞단에서 ALPN 종료 금지 |
| DNS-01 | Cloudflare `DNS:Edit` Token + Zone ID | NAT/리버스 프록시/80·443 개방 불가 |

먼저 `https://acme-staging-v02.api.letsencrypt.org/directory`로 연습해 Running/renewal을 확인하고 `https://acme-v02.api.letsencrypt.org/directory`로 전환합니다. Staging 인증서가 신뢰되지 않는 것은 정상입니다. HTTP-01은 `/.well-known/acme-challenge/*`를 유지하고 DNS-01은 대상 Zone의 최소 `DNS:Edit` Token을 사용합니다.

ACME 실패 시에도 공용 HTTP로 강등되지 않습니다. trusted proxy allowlist에는 정확한 프록시 IP만 추가하세요.

## 11. 운영, 로그와 감사

Operations는 언제, 누가, 무엇을, 어느 범위에서 수행했는지 확인하는 화면입니다.

| 화면 | 용도 | 권장 필터 |
|---|---|---|
| Activity | 최근 사용자 작업 | command 수락 확인 |
| Logs | time, level, target, stable code | correlation ID, ClientInstance, 시간 |
| Audit | actor, scope, reason, revision, result | 거래, 승인, 설정, 보안 |
| Health | Provider, queue, storage, runtime | freshness, lag, retry |

문제 보고에는 시간대, Environment, Provider, ClientInstance, stable code, correlation ID, order ID와 revision을 포함하고 API Key, Cookie, 전체 계정 번호는 제거하세요. macOS 로그는 `~/Library/Application Support/truefix-studio/logs/`에 있습니다.

## 12. 상태 용어

| 상태 | 의미 | 조치 |
|---|---|---|
| Loading | 투영을 가져오는 중 | 기다리거나 기존 내용 유지 |
| Empty | 권위 쿼리 성공, 레코드 없음 | 오류로 취급하지 않음 |
| Unavailable | 기능, 권한, mapping, service가 없음 | 설정/권한 복구 |
| Stale | last-good이 freshness 초과 | as-of 확인 |
| Degraded | 일부 source/facet 실패 | 명시적으로 가능한 부분만 사용 |
| Rejected | schema, 권한, rules, RiskGuard 거부 | stable code 확인 후 수정 |
| Reconciling | Provider 권위 상태와 대조 중 | 확인까지 상태 유지 |
| Uncertain | Provider 접수 가능, 응답 불명 | 조회만 하고 재제출하지 않음 |

`source / as-of / revision / stable code`를 함께 확인하세요.

## 13. 아키텍처와 데이터 경계

브라우저는 종목, 계정, 주문, 시장 데이터, 리스크, AI/Quant의 권위 있는 소유자가 아닙니다. 모든 진입점은 canonical application contracts를 공유하고 adapter provenance를 보존합니다. UI는 누락 데이터를 만들거나 Provider를 몰래 섞거나 Provider 이름으로 기능을 단정하지 않습니다.

## 14. 문제 해결

- **연결되었지만 거래할 수 없음:** Environment, capability, entitlement, 계정, 정확한 매핑, TradingRules, freshness를 확인하세요.
- **과거 바는 있지만 실시간 견적이 없음:** Historical과 Realtime은 독립적입니다. 구독 권한, source health, 첫 Tick을 확인하세요.
- **제출 시간 초과:** 원래 client order ID로 조회하고 같은 주문을 다시 만들지 마세요.
- **Agent가 비었거나 전송 불가:** 활성 Agent, API Key, 모델 ID, Base URL, JSON 매개변수를 확인하세요.
- **Agent 도구 거부:** ToolGrant 범위와 만료를 확인하세요. submit/cancel/replace는 owner 승인이 필요합니다.
- **원격 Web 접속 불가:** configured/effective 상태, `last_error`, bind host, 포트, A/AAAA, 방화벽, TLS를 확인하세요.
- **인증서 신뢰 오류:** production Directory, SAN, 클라이언트 시간, 프록시의 이전 인증서를 확인하세요.
- **stale/unavailable 표시:** 영향받은 facet, timestamp, 원본 오류를 확인하세요.
