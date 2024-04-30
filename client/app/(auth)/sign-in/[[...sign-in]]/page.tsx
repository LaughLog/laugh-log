import { SignIn as SignInClerk } from '@clerk/nextjs';
import Image from 'next/image';
import SignInBg from '/public/sign-in-welcome.svg';

import './sign-in.css';

// FIX: 접속 시 로딩 및 로그인 버튼 클릭 이후 로딩 처리 필요
const SignIn = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-evenly bg-signIn bg-cover">
      <div className="mx-[20px] w-[270px] flex-col flex-wrap text-center">
        <span className="text-[35px] font-bold">
          어서오세요
          <br />
          Laugh Log에
          <br />
          접속합니다.
        </span>
        <div className="h-[100px]">
          <SignInClerk />
        </div>
      </div>
      <Image src={SignInBg} alt="Sign In Background" height={600} width={720} />
    </div>
  );
};

export default SignIn;
