import { MoveRight } from 'lucide-react';

interface TextHintProps {
  children: React.ReactNode;
  text: React.ReactNode;
  url: string;
}

const TextHint = ({ children, text, url }: TextHintProps) => {
  return (
    <div className="group relative flex w-fit whitespace-nowrap">
      <a
        href={url}
        target="_blank"
        className="mb-[8px] w-fit transition-all hover:bg-coral700 hover:text-white"
      >
        {children}
      </a>
      <div className="relative right-[-8px] hidden h-fit  w-fit gap-[8px] bg-black px-[8px] text-white shadow-sm group-hover:flex">
        → {text}
      </div>
    </div>
  );
};

export default TextHint;
