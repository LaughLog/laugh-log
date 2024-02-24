'use client';

import { useAuth } from '@clerk/nextjs';
import firebase from 'firebase/compat/app';
import Link from 'next/link';

import { Button } from '../ui/button';

const SignOutButton = () => {
  const { signOut } = useAuth();

  // FIX: firbase 버전 문제로 인한 에러 발생
  // firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__.default.auth is not a function
  const signOutAll = async () =>
    await Promise.all([signOut(), firebase.auth().signOut()]);

  return (
    <Button onClick={signOutAll}>
      <Link
        href={{
          pathname: '/'
        }}
      >
        로그아웃
      </Link>
    </Button>
  );
};

export default SignOutButton;
