'use client';

import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { TemplateItemProps } from '@/types/dashboard';
import { addBoard, addTextEditor } from '@/lib/utils/firebase';

const TemplateItem = ({
  organizationId,
  type,
  imageUrl
}: TemplateItemProps) => {
  const router = useRouter();

  const clickToGenerateHandler = async () => {
    const boardId = await addBoard(organizationId);
    await addTextEditor(boardId, type);
    router.push(`/text-editor?id=${boardId}`);
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
