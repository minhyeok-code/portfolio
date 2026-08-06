# 포트폴리오 (Next.js)

Next.js로 만든 개인 포트폴리오 사이트입니다. 내용은 `data/portfolio.js` 파일 하나만 수정하면 바뀝니다.

## 1. 내용 채우기

`data/portfolio.js` 를 열어 본인 정보로 수정하세요.
- `profile` : 이름, 직무, 연락처, GitHub 링크
- `about` : 자기소개 문장
- `skills` : 기술 스택 (그룹별)
- `projects` : 프로젝트 (가장 중요 — 성과는 숫자로!)
- `experience` : 교육/경력

UI나 색상을 바꾸려면 `app/globals.css` 상단의 `:root` 변수(색상 등)를 수정하면 됩니다.

## 2. 로컬에서 실행

Node.js 18 이상이 필요합니다. ([nodejs.org](https://nodejs.org) 에서 설치)

```bash
npm install      # 최초 1회, 패키지 설치
npm run dev      # 개발 서버 실행
```

브라우저에서 http://localhost:3000 접속하면 됩니다. 파일을 저장하면 자동 새로고침됩니다.

## 3. GitHub에 올리기

```bash
git init
git add .
git commit -m "portfolio init"
git branch -M main
git remote add origin https://github.com/본인아이디/저장소명.git
git push -u origin main
```

## 4. Vercel 배포 (git push 자동 배포)

1. https://vercel.com 접속 → GitHub 계정으로 로그인
2. **Add New → Project** → 방금 올린 저장소 선택
3. 설정은 건드릴 필요 없이 그대로 **Deploy** 클릭

배포가 끝나면 `프로젝트명.vercel.app` 주소가 발급됩니다.
이후부터는 **`git push` 만 하면 자동으로 재배포**됩니다.

```bash
git add .
git commit -m "update"
git push
```

## 폴더 구조

```
data/portfolio.js   ← 내용은 여기서만 수정
app/page.js         ← 섹션 순서
app/globals.css     ← 스타일/색상
components/         ← 각 섹션 컴포넌트
```
