import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import './globals.css';
import ReactQueryProvider from '@/provider/react-query-provider';

export const metadata: Metadata = {
  title: 'Laugh Log : 웃음으로 가득한 회의록',
  description:
    '회의는 단순한 업무가 아닙니다. 회의는 즐거운 협업의 시작입니다. Laugh Log으로 회의를 더욱 생생하게 기록하세요!',
  keywords: '회의, 텍스트에디터, 노션, 기록, 회의록',
  openGraph: {
    title: 'Laugh Log : 웃음으로 가득한 회의록',
    description: 'Laugh Log으로 회의를 더욱 생생하게 기록하세요!',
    images: '/public/tomato-sticker.svg',
    type: 'website'
  },
  twitter: {
    title: 'Laugh Log : 웃음으로 가득한 회의록',
    description: 'Laugh Log으로 회의를 더욱 생생하게 기록하세요!',
    card: 'summary'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ClerkProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
