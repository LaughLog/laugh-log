import { Plus } from 'lucide-react';
import Image from 'next/image';

interface TemplateItemProps {
  name: string;
  imageUrl: string;
}

const TemplateItem = ({ name, imageUrl }: TemplateItemProps) => {
  return (
    <main className="flex h-[148px] w-[200px] flex-col justify-center">
      <Image
        src={imageUrl}
        alt="template-image"
        width={200}
        height={120}
        className="mb-1 rounded bg-gray300"
      />
      <div className="flex items-center gap-[4px]">
        <Plus className="h-[16px] w-[16px] text-gray500" />
        <span className="body2r tracking-tight">{name}</span>
      </div>
    </main>
  );
};

export default TemplateItem;
