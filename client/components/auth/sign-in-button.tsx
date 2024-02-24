import Link from 'next/link';

import { Button } from '../ui/button';

const SignInButton = () => {
  return (
    <Button>
      <Link
        href={{
          pathname: '/sign-in'
        }}
      >
        로그인
      </Link>
    </Button>
  );
};

export default SignInButton;
