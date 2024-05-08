<p align="center">
  <img src="https://github.com/LaughLog/laugh-log/assets/101972330/9f064909-561a-4596-9e3d-b128782859d1" width="400">
  <h1>
   Laugh Log : 실시간 텍스트 에디터 편집 App
  </h1>
  <p>
  Laugh Log는 팀원을 초대하여 실시간으로 텍스트 에디텨 편집이 가능한 앱입니다.
  <a href='https://laugh-log.vercel.app/'>
   Laugh Log →
  </a>
  </p>
</p>

## Troubleshooting

- [Next 환경 변수 설정 시, prefix로 NEXT*PUBLIC* 은 언제 붙여야 하는가?](https://github.com/LaughLog/laugh-log/wiki/Next-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95-%EC%8B%9C,-prefix%EB%A1%9C-NEXT_PUBLIC_-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EB%B6%99%EC%97%AC%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80%3F)

## Contributor (R&R)

@JitHoon (최지훈)

1. 텍스트 에디터 페이지
2. 텍스트 에디터 CRUD
3. 실시간 텍스트 에디터 편집 기능 (Socket)
4. 비동기 요청 컴포넌트 관리 및 UX 개선 (Tanstack-Query)
5. 성능 최적화 (Lighthouse(70 -> 99))
6. Socket Backend server Deploy (EC2)
7. Client CI/CD (Vercel)

@ovoxiix (한은지)

1. 대시보드 페이지
2. 팀 CRUD (Firestore, Clerk)

@Bumang-Cyber (정범환)

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
- AWS EC2

## Main Page Images & Learning Points

### 랜딩 페이지

- Lighthouse 성능 최적화 (최초 로드 속도 개선)

![랜딩페이지](https://github.com/LaughLog/laugh-log/assets/101972330/20ea4c00-68f9-4972-9a24-94fd8f77ebf1)

### 실시간 텍스트 에디터 페이지

- Next.js Server Component로 한 페이지에서 다양한 렌더링 전략 구현

- 디바운싱(debouncing)를 활용한 실시간 서버 요청 최적화

- Block 단위의 텍스트 에디터 실시간(socket) 상태 관리

- AWS EC2 백엔드 https 배포

![텍스트에디터페이지](https://github.com/LaughLog/laugh-log/assets/101972330/ef604f43-b1e4-418e-86fe-f608328cdef4)

### 대시보드 페이지

- Tanstack-Query를 활용한 서버 상태 관리 및 UX 개선

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
