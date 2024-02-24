import Link from 'next/link';

import { Button } from '../ui/button';
import { SignInButton } from '@clerk/nextjs';

const CustomSignInButton = () => {
  return (
    <SignInButton>
      <Button>
        <Link href={'/'}>로그인</Link>
      </Button>
    </SignInButton>
  );
};

export default CustomSignInButton;
