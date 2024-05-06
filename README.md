<p align="center">
  <img src="https://github.com/LaughLog/laugh-log/assets/101972330/9f064909-561a-4596-9e3d-b128782859d1" width="400">
</p>

# Lagh Log : 실시간 텍스트 에디터 편집 App [Lagh Log →](https://laugh-log.vercel.app/)

## Contributor (R&R)

- @JitHoon (최지훈)

  1. 텍스트 에디터 페이지
  2. 텍스트 에디터 CRUD
  3. 실시간 텍스트 에디터 편집 기능 (Socket)
  4. 비동기 요청 컴포넌트 관리 및 UX 개선 (Tanstack-Query)
  5. 성능 최적화 (Lighthouse(70 -> 99))
  6. Socket Backend server Deploy (S3)
  7. Client CI/CD (Vercel)

- @ovoxiix (한은지)

  1. 대시보드 페이지
  2. 팀 CRUD (Firestore, Clerk)

- @Bumang-Cyber (정범환)

  1. 랜딩 페이지
  2. [Figma](https://www.figma.com/file/XEjq8zLQXhePf9d2x7WFPN/LaughLog?type=design&node-id=0-1&mode=design&t=UEYVIhHWxxBHBdYQ-0)
  3. 디자인 시스템 (Tailwind)

## Tech Requirment (Tech Stack)

### Frontend

- TypeScript
- Next.js 13 (create-next-app)
- React 18
- Socket.io-client
- Tailwindcss, Radix UI
- ESLint, Prettier
- Vercel, Github Actions
- Clerk (회원 인증 및 관리)

### Backend

- Node.js
- Express
- Socket.io
- AWS S3

## Main Page Images & Learning Points

### 랜딩 페이지

- Lighthouse 성능 최적화 (최초 로드 속도 개선) [자세히 보기 →]()

![랜딩페이지](https://github.com/LaughLog/laugh-log/assets/101972330/20ea4c00-68f9-4972-9a24-94fd8f77ebf1)

### 실시간 텍스트 에디터 페이지

- Next.js Server Component로 한 페이지에서 다양한 렌더링 전략 구현 [자세히 보기 →]()

- 디바운싱(debouncing)를 활용한 실시간 서버 요청 최적화 [자세히 보기 →]()

- Block 단위의 텍스트 에디터 실시간(socket) 상태 관리 [자세히 보기 →]()

- AWS S3 백엔드 https 배포 [자세히 보기 →]()

![텍스트에디터페이지](https://github.com/LaughLog/laugh-log/assets/101972330/ef604f43-b1e4-418e-86fe-f608328cdef4)

### 대시보드 페이지

- Tanstack-Query를 활용한 서버 상태 관리 및 UX 개선[자세히 보기 →]()

![대시보드페이지](https://github.com/LaughLog/laugh-log/assets/101972330/fba598b2-8280-460f-9c15-ee9bfbd3dacf)

## Other Page Images

### 로그인 페이지

![로그인페이지](https://github.com/LaughLog/laugh-log/assets/101972330/37a19427-277a-4a70-a0c2-cd92f55aa821)

## Script

### client

```
$ npm run build
$ npm run dev
```

- .env 파일이 필요합니다. (담당자: @JitHoon)

### Server

```
$ npm run server
```

![footer](https://github.com/LaughLog/laugh-log/assets/101972330/1fa180a2-9bb2-425c-9fde-7bf8871848b2)
