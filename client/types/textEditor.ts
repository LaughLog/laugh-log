import { Dispatch, SetStateAction } from 'react';

export type Block = {
  id: string;
  html: string;
  tag: string;
};

// EditablePage

export type EditablePageProps = {
  initialBlocks: Block[];
};

export type addBlockHandlerProps = {
  block: Block;
  ref: HTMLInputElement;
};

// EditableBlock

export type EditableBlockProps = {
  block: Block;
  setBlocks: Dispatch<SetStateAction<Block[]>>;
  addBlock: (currentBlock: any) => void;
};
