'use client';

import TextEditor from '@/app/(workplace)/(text-editor)/(routes)/text-editor';
import Whiteboard from '@/app/(workplace)/(whiteboard)/(routes)/whiteboard';
import { useState } from 'react';

const Page = () => {
  // (지금은 useState로 했지만) 전역상태 텍스트에디터 on/off state로 header와 교류
  const [isTextEditorOn, setIsTextEditorOn] = useState(false);

  return (
    <main className="h-screen w-screen">
      <Whiteboard />
      {isTextEditorOn && <TextEditor />}
    </main>
  );
};

export default Page;
