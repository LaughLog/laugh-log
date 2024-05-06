import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import LaughLog from '@/public/laugh-log.svg';

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded bg-coral200">
      <div className="flex w-2/3 items-center justify-between">
        <div className="flex flex-col items-center">
          <h2 className="subtitle1">404 Not Found</h2>
          <p className="body1b">요청하신 페이지를 찾으실 수 없습니다.</p>
          <Button className="mt-10">
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
        </div>
        <Image src={LaughLog} alt="Laugh Log Logo" width={500} />
      </div>
    </div>
  );
}
