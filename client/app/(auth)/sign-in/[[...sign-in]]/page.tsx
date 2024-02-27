import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

import './sign-in.css';

// FIX: 접속 시 로딩 및 로그인 버튼 클릭 이후 로딩 처리 필요
const Page = () => {
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
        <SignIn />
      </div>
      <Image src="/sign-in-welcome.svg" alt="Logo" height={600} width={720} />
    </div>
  );
};

export default Page;
