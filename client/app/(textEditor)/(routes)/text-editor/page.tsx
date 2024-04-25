'use client';

import { useSearchParams } from 'next/navigation';
import { Block } from '@/types/textEditor';
import { uid } from '@/lib/utils';
import EditablePage from '../../_components/editablePage';

const TextEditor = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // FIX : 향후 db에서 reactQuery를 활용하여 initialBlocks 불러옵니다.
  const initialBlocks: Block[] = [
    { id: uid(), html: '1', tag: 'h1' },
    { id: uid(), html: '2', tag: 'p' }
  ];

  return (
    <section className="mx-auto my-0 w-2/3">
      <EditablePage initialBlocks={initialBlocks} />
    </section>
  );
};

export default TextEditor;
