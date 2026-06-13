# Java Backend Study

Java와 Spring 백엔드를 **인터랙티브 퀴즈 + 게이미피케이션**으로 매일 조금씩 익히는 학습 사이트입니다.

🌐 **라이브**: https://machu-bot.github.io/java-backend-study/

## 왜 만들었나

백엔드 공부에서 가장 큰 허들은 *지속*입니다. 책을 읽다 멈추고, 강의를 듣다 잠들고, 코드 한 줄 안 치고 일주일이 지나갑니다. 그래서 다음을 직접 만들기로 했습니다.

- **풀면서 배운다** — 매 문제는 클릭 한 번으로 채점, 해설은 즉시 펼쳐짐
- **streak으로 이어간다** — 오늘 한 문제만 풀어도 streak가 이어짐
- **회사 코드를 다룬다** — 면접·리뷰에서 자주 보이는 패턴 위주의 문제
- **개인 블로그 분위기 X** — Vercel / Linear 톤의 다크 모드, sharp & technical

## 기술 스택

- **Astro 5** + **Starlight 0.40** — 정적 사이트 생성
- **TypeScript strict** — `any` 없는 타입
- **Geist Variable** — Vercel과 동일한 모던 산세리프
- **localStorage** — 별도 백엔드 없이 XP/streak/배지를 브라우저에 저장
- **GitHub Pages** — Actions로 자동 배포

## 로컬에서 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 빌드
```

## 컨텐츠 구조

| 트랙 | 상태 | 문제 수 |
|---|---|---|
| Java 기초 | 공개 | 10 (MCQ + 빈칸) |
| 객체지향 | 공개 | 3 (MCQ) |
| Spring Boot | 준비 중 | — |

문제와 해설은 `src/content/questions.ts`에 있습니다. PR로 문제를 추가/수정할 수 있어요.

## 디자인 시스템

- Dark mode 기본, light mode 토글
- 토큰: `src/styles/custom.css`
- 폰트: Geist (variable) — `@fontsource-variable/geist`
- 한 가지 accent: `#2f80ff` (다크) / `#0070f3` (라이트)

## 라이선스

MIT
