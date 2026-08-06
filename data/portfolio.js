// ============================================================
//  이 파일만 수정하면 포트폴리오 내용이 바뀝니다.
//  아래 값들을 본인 정보로 채워넣으세요.
// ============================================================

export const profile = {
  name: "홍길동",
  role: "Backend / DevOps Engineer",
  tagline: "서버 개발과 배포 자동화로 안정적인 서비스를 만듭니다.",
  email: "you@example.com",
  github: "https://github.com/your-id",
  blog: "", // 블로그가 있으면 URL, 없으면 빈 문자열
  location: "Seoul, Korea",
};

export const about = [
  "Java·Spring 기반 서버 개발과 CI/CD 파이프라인 구축에 관심이 많은 개발자입니다.",
  "문제를 정의하고, 병목을 측정하고, 개선 결과를 숫자로 증명하는 과정을 좋아합니다.",
];

// 숙련도는 자유롭게 조정하세요 (그룹 이름 + 항목 배열)
export const skills = [
  { group: "Language", items: ["Java", "JavaScript", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "JPA", "REST API"] },
  { group: "Frontend", items: ["Next.js", "React"] },
  { group: "DevOps / Infra", items: ["Docker", "GitHub Actions", "AWS", "Nginx"] },
];

// 프로젝트 — 가장 중요한 섹션. 성과는 숫자로 표현할수록 강합니다.
export const projects = [
  {
    title: "예: 주문 처리 API 서버",
    period: "2025.03 ~ 2025.05",
    summary: "대용량 주문을 처리하는 백엔드 서비스. 팀 4명 중 백엔드/배포 담당.",
    highlights: [
      "Redis 캐싱 도입으로 평균 응답속도 320ms → 90ms 개선",
      "GitHub Actions로 CI/CD 구축, 배포 시간 15분 → 3분 단축",
      "Docker Compose 기반 로컬/스테이징 환경 통일",
    ],
    stack: ["Java", "Spring Boot", "Redis", "Docker", "GitHub Actions"],
    demo: "", // 배포된 데모 URL (있으면)
    repo: "https://github.com/your-id/project-1",
  },
  {
    title: "예: 개인 포트폴리오 사이트",
    period: "2025.06",
    summary: "Next.js로 제작하고 Vercel에 배포한 반응형 포트폴리오.",
    highlights: [
      "컴포넌트 기반으로 구조화, 콘텐츠와 UI 분리",
      "Vercel 자동 배포 파이프라인 연결",
    ],
    stack: ["Next.js", "React", "Vercel"],
    demo: "https://your-portfolio.vercel.app",
    repo: "https://github.com/your-id/portfolio",
  },
];

export const experience = [
  {
    title: "OO 백엔드/DevOps 부트캠프",
    org: "OO 아카데미",
    period: "2025.03 ~ 2025.08 (6개월)",
    points: [
      "Java·Spring 기반 서버 개발, Next.js 프론트엔드, Docker·CI/CD 파이프라인 구축까지 서버 개발·운영 전반 학습",
      "팀 프로젝트로 배포 자동화 환경 구성",
    ],
  },
];
