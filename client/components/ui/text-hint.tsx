import { MoveRight } from 'lucide-react';

interface TextHintProps {
  children: React.ReactNode;
  text: React.ReactNode;
}

const TextHint = ({ children, text }: TextHintProps) => {
  return (
    <div className="group relative flex w-fit whitespace-nowrap">
      {children}
      <div className="relative right-[-8px] hidden h-fit  w-fit gap-[8px] bg-black px-[8px] text-white shadow-sm group-hover:flex">
        → {text}
      </div>
    </div>
  );
};

export default TextHint;
