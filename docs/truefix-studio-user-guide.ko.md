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

## 8. AI와 Quant

AI Agent는 권한이 부여된 도구로만 분석하고 TradingDecision을 제안합니다. Quant는 고정된 데이터, 캘린더, 비용, 슬리피지, revision 입력으로 실행하거나 재생합니다. 전략 출력에는 evidence, 버전, 만료, 계정, 종목 범위가 포함됩니다. 승인은 의도를 일반 Review 및 RiskGuard 흐름에 넣을 뿐 주문을 제출하지 않습니다.

## 9. 아키텍처와 데이터 경계

브라우저는 종목, 계정, 주문, 시장 데이터, 리스크, AI/Quant의 권위 있는 소유자가 아닙니다. 모든 진입점은 canonical application contracts를 공유하고 adapter provenance를 보존합니다. UI는 누락 데이터를 만들거나 Provider를 몰래 섞거나 Provider 이름으로 기능을 단정하지 않습니다.

## 10. 문제 해결

- **연결되었지만 거래할 수 없음:** Environment, capability, entitlement, 계정, 정확한 매핑, TradingRules, freshness를 확인하세요.
- **과거 바는 있지만 실시간 견적이 없음:** Historical과 Realtime은 독립적입니다. 구독 권한, source health, 첫 Tick을 확인하세요.
- **Review 후 제출할 수 없음:** 경로, 계정, 규칙, 필드 변경으로 token이 무효화되었을 수 있습니다. 다시 Review하세요.
- **제출 시간 초과:** 원래 client order ID로 조회하고 같은 주문을 다시 만들지 마세요.
- **stale/unavailable 표시:** 영향받은 facet, timestamp, 원본 오류를 확인하세요. last-good 데이터가 항상 최신인 것은 아닙니다.
