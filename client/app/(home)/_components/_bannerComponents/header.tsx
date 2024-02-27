'use client';

import { Button } from '@/components/ui/button';
import useRectOnTop from '@/hook/useRectOnTop';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Header = () => {
  const [hookRef, isOnTop] = useRectOnTop();

  return (
    <main
      ref={hookRef as React.MutableRefObject<null>}
      className={cn(
        'sticky top-0 z-10 flex h-[56px] w-[100%] items-center justify-between px-[24px] tablet:px-[80px] desktop:px-[148px]',
        { 'blur-transparent': isOnTop }
      )}
    >
      <span className="subtitle4">LaughLog</span>
      <div className="flex gap-[16px]">
        {/* <Button variant="secondary">데모</Button> */}
        <Button>
          <Link href="/login">구글 로그인</Link>
        </Button>
      </div>
    </main>
  );
};

export default Header;
