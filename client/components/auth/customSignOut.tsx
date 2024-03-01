import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

import { Button } from '../ui/button';

const CustomSignOut = () => {
  return (
    <SignOutButton>
      <Button>
        <Link href={'/'}>로그아웃</Link>
      </Button>
    </SignOutButton>
  );
};

export default CustomSignOut;
