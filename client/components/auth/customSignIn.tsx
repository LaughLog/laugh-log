import Link from 'next/link';

import { Button } from '../ui/button';
import { SignInButton } from '@clerk/nextjs';

const CustomSignIn = () => {
  return (
    <SignInButton>
      <Button>
        <Link href={'/dashboard'}>로그인</Link>
      </Button>
    </SignInButton>
  );
};

export default CustomSignIn;
