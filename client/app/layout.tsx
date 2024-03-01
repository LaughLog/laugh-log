import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import './globals.css';
import ReactQueryProvider from '@/provider/react-query-provider';

export const metadata: Metadata = {
  title: 'Laugh Log : 웃음으로 가득한 회의록',
  description:
    '회의는 단순한 업무가 아닙니다. 회의는 즐거운 협업의 시작입니다. Laugh Log으로 회의를 더욱 생생하게 기록하세요!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
