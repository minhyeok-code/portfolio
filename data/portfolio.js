// ============================================================
//  이 파일만 수정하면 포트폴리오 내용이 바뀝니다.
//  아래 값들을 본인 정보로 채워넣으세요.
// ============================================================

export const profile = {
  name: "최민혁",
  role: "Backend Engineer",
  tagline: "서버 개발과 배포 자동화로 안정적인 서비스를 만듭니다.",
  email: "96edum@gmail.com",
  github: "https://github.com/minhyeok-code",
  blog: "", // 블로그가 있으면 URL, 없으면 빈 문자열
  location: "Seoul, Korea",
};

export const about = [
  "JJava·Spring 기반 서버 개발에 관심이 많은 개발자입니다.",
  "무엇을 왜 만드는지 기획하고 구조를 설계하는 단계를 가장 즐기며, 그 설계를 실제 기능과 성능으로 구현해 숫자로 증명하는 것까지 이어갑니다.",
];

// 숙련도(티어)별로 정리했습니다.
//  - group : 숙련도 이름 (Strong / Knowledgeable / Familiar)
//  - note  : 티어 설명 (선택)
//  - items : 각 티어 안에서 언어 → 프레임워크 → DB 순으로 정렬
//  ※ Strong 에 적은 건 면접에서 깊게 물어봅니다. 자신 있는 것만 넣으세요.
export const skills = [
  {
    group: "Strong",
    items: ["Java", "Spring Boot", "MySQL"],
  },
  {
    group: "Knowledgeable",
    items: ["Next.js",  "Docker", "GitHub Actions", "AWS", "Redis",],
  },

];

// 프로젝트 — 가장 중요한 섹션. 성과는 숫자로 표현할수록 강합니다.

export const projects = [
  {
  title: "거상인 — 거상 유저 간 아이템 거래 + DPS 계산 플랫폼",
  period: "2025.04 ~ 2025.08",
  summary:
    "게임 '거상'의 아이템 거래와 덱 DPS 계산을 한 곳에서. 기획·설계·개발·운영 배포·부하 검증까지 1인 단독 진행.",
  role: "1인 개발 (기획 · 백엔드 · 프론트 · 인프라/배포)",
  highlights: [
    "거래 확정 동시 요청의 Lost Update를 규명 — 비관적 락·상태 전이 가드로 중복 확정을 차단하고, 읽음처리 트랜잭션이 확정 상태를 덮어쓰던 경합은 @DynamicUpdate로 분리 해결",
    "거래 자동완료를 cron 대신 Redis TTL keyspace notification으로 구현하고, 재시작 시 이벤트 유실에 대비해 DB 폴링 fallback으로 이중화",
    "외부 계수 데이터의 신뢰성 문제를 확인 후 인게임 실측으로 스킬 계수를 역산·검증해 DPS 계산기 정확도 확보",
    "자체 구축한 Prometheus·Grafana 관측 스택으로 부하 병목을 진단 — N+1로 인한 HikariCP 커넥션 풀 고갈을 정적 카탈로그 캐싱으로 해결해 DPS p95 30초 → 843ms(로컬)·가성비 계산 API p95 2.85초 → 5.26ms(운영 400 VU)·실패율 0% 달성",
    "부하 테스트를 결함 발견 도구로 활용 — 운영 배포·부하 중 잠복 버그 3건(UNIQUE 제약 부재+시딩 경합으로 인한 기동 실패, FK 고아 데이터로 인한 500, 미캐싱 지연)을 조기 발견해 Flyway 마이그레이션·방어적 fetch join·캐싱으로 해결",
    "무중단 블루-그린 배포 파이프라인(GitHub Actions) 구성 — 서버 로컬 드리프트로 인한 배포 중단을 개선하고 운영 서버 직접 수정을 배제한 변경 원칙 확립",
  ],
  stack: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "Nginx", "GitHub Actions", "Prometheus", "Grafana", "k6", "Micrometer"],
  demo: "https://gersangin.app",
  repo: "https://github.com/minhyeok-code/gersang-trade",
  }, 

  {
    title: "거상 이미지 수집·가공 자동화 도구",
    period: "2025.08 ~ 2025.08",
    summary:
      "게임 도감 아이템 및 용병 1,577종의 이미지를 손으로 편집하던 작업을, 캡처–배경제거–DB매칭까지 자동화한 Python 반자동 파이프라인으로 대체해 수작업을 사실상 0으로 줄인 도구. 1인 개발.",
    role: "1인 개발 (설계 · 구현)",
    highlights: [
      "게임 무간섭 설계: 입력을 전혀 주입하지 않고 게임 스크린샷(F12) 파일을 watchdog로 감지해 사후 처리만 수행",
      "flood fill 방식 배경 제거로 아이템 내부의 어두운 부분은 보존하고 배경만 투명화, 보이는 픽셀 기준 중앙정렬로 위치 편차 해결",
      "OCR은 후보를 좁히는 힌트로만 쓰고 사용자가 목록에서 선택 → {id}.png로 저장, 고유 id 저장으로 DB 매칭 무결성 확보",
      "강화(+5/+10) 아이템을 이름 그룹으로 묶어 동일 이미지 전파, 1,755행을 1,577회 캡처로 축소",
    ],
    stack: ["Python", "Pillow", "watchdog", "EasyOCR", "Tkinter"],
    demo: "",
    repo: "https://github.com/minhyeok-code/gersang-image-tools",
  },
  {
    title: "부동산 실거래 데이터와 생활 인프라 정보를 통합해 검색/분석/매물 관리/구독 기능을 제공하는 플랫폼",
    period: "2026.01~2026.02",
    role: "Backend & Frontend (JWT 인증 · 마이페이지 · 전월세 데이터 파이프라인 · UI/UX)",
    summary:
      "Spring Boot 백엔드와 Next.js 프론트로 구성한 팀 프로젝트. 국토부 전월세 실거래 OpenAPI를 배치로 수집·정제·적재하고, 지도 기반 조회 서비스와 JWT 인증·마이페이지를 담당.",
    highlights: [
      "국토부 전월세 실거래 OpenAPI(XML)를 WebClient로 호출하고, Spring Batch(Reader·Processor·Writer)로 정제·적재하는 파이프라인 구축 — 시군구×계약월 순회, ExecutionContext 커서로 중단 지점부터 재시작 지원",
      "Processor에서 문자열 정규화·숫자 파싱·갱신요구권(O/X 등) tri-state 변환·지역/필수값 필터링으로 원천 데이터 정제, chunk 100 + faultTolerant(retry 3회·backoff·skip)로 대량 백필 안정화",
      "JdbcTemplate 기반 bulk INSERT IGNORE와 유니크 제약(uk_trade_rent_dedup)으로 중복 거래 자동 제거, 적재 후 월평균 재계산 연동",
      "QueryDSL로 조회 서비스 구현 — 지도 마커/줌 레벨 격자 클러스터, 아파트별 최근 거래 5건, 기간별 그래프 점 데이터, 평형별 보증금/월세 상세",
      "JWT 인증 구현 — Access/Refresh 토큰 발급(JJWT), Refresh 토큰은 Redis에 TTL로 저장, OncePerRequestFilter로 인증 처리 및 Google OAuth 연동",
      "마이페이지(정보 조회/수정, 비밀번호 변경, 알림 설정) 및 담당 화면 UI/UX 구현",
    ],
    stack: [
      "Spring Boot", "Spring Batch", "Spring Security", "JWT", "JPA", "QueryDSL",
      "MySQL", "Redis", "WebClient(WebFlux)", "Next.js", "React", "Tailwind CSS",
    ],
    demo: "",
    repo: "https://github.com/minhyeok-code/home-data-zip",
},
{
    title: "실시간 동기화 상영 기능을 핵심으로 하는 스트리밍 플랫폼",
    period: "2025.12~2026.01",
    summary: "여러 사용자가 같은 콘텐츠를 서버 기준으로 동기화해 함께 시청하는 실시간 극장형 스트리밍 플랫폼. 팀 프로젝트에서 상영 스케줄·실시간 극장(재생 동기화·채팅) 파트를 담당.",
    highlights: [
      "재생 위치를 서버 기준으로 계산하고 서버 시각을 함께 내려, 클라이언트가 네트워크 지연을 보정해 동기화되도록 설계 (positionMs = serverTime − startAt)",
      "10초 주기 스케줄러로 상영 상태(대기/상영중/종료)를 자동 전환하되, 상태가 실제로 바뀐 스케줄만 WebSocket으로 push해 불필요한 브로드캐스트 제거",
      "STOMP 채널 인터셉터 + JWT로 WebSocket 핸드셰이크에 인증을 적용하고, 실시간 채팅을 STOMP 기반으로 구현",
    ],
    stack: ["Spring Boot", "WebSocket", "STOMP", "JPA"],
    demo: "",
    repo: "https://github.com/minhyeok-code/cinema",
},
];

export const experience = [
  {
    title: "백엔드 : Java 부트캠프",
    org: "멋쟁이 사자처럼",
    period: "2025.08 ~ 2026.02 (6개월)",
    points: [
      "Java·Spring 기반 서버 개발, Next.js 프론트엔드, Docker·CI/CD 파이프라인 구축까지 서버 개발·운영 전반 학습",
      "팀 프로젝트로 배포 자동화 환경 구성",
    ],
  },
];
