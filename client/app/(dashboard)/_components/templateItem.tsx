'use client';

import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { TemplateItemProps } from '@/types/dashboard';
import { addTextEditor } from '@/lib/utils/firebase';
import useAddBoard from '@/hook/queries/useAddBoard';

const TemplateItem = ({
  organizationId,
  type,
  imageUrl
}: TemplateItemProps) => {
  const { mutateAsync: addBoard } = useAddBoard();
  const router = useRouter();

  const clickToGenerateHandler = async () => {
    const docRef = await addBoard(organizationId);
    await addTextEditor(docRef.id, type);
    router.push(`/text-editor?id=${docRef.id}`);
  };

  return (
    <button
      onClick={clickToGenerateHandler}
      className="flex min-h-[148px] min-w-[200px] flex-col justify-center"
    >
      <Image
        src={imageUrl}
        alt="template-image"
        width={200}
        height={120}
        className="mb-1 rounded bg-gray300"
      />
      <div className="flex items-center gap-[4px]">
        <Plus className="min-h-[16px] min-w-[16px] text-gray500" />
        <span className="body2r tracking-tight">{type}</span>
      </div>
    </button>
  );
};

export default TemplateItem;
