'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';

import useRectOnTop from '@/hook/useRectOnTop';
import { cn } from '@/lib/utils';
import CustomSignIn from '@/components/auth/customSignIn';
import CustomSignOut from '@/components/auth/customSignOut';

const Header = () => {
  const [hookRef, isOnTop] = useRectOnTop();

  return (
    <main
      ref={hookRef as React.MutableRefObject<null>}
      className={cn(
        'sticky top-0 z-10 flex h-14 w-[100%] items-center justify-between px-6 tablet:px-20 desktop:px-[148px]',
        { 'blur-transparent': isOnTop }
      )}
    >
      <span className="subtitle4">LaughLog</span>
      <div className="flex gap-4">
        <SignedIn>
          <CustomSignOut />
        </SignedIn>
        <SignedOut>
          <CustomSignIn />
        </SignedOut>
      </div>
    </main>
  );
};

export default Header;
