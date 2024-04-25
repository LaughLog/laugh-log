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

export type AddBlockHandlerProps = {
  id: string;
  ref: HTMLInputElement | null;
  previousHtml: string;
  newHtml: string;
};

export type DeleteBlockHandlerProps = {
  id: string;
  previousBlock: HTMLInputElement;
  content: string;
};

// EditableBlock

export type EditableBlockProps = {
  block: Block;
  addBlock: (currentBlock: AddBlockHandlerProps) => void;
  deleteBlock: (currentBlock: DeleteBlockHandlerProps) => void;
  setBlocks: Dispatch<SetStateAction<Block[]>>;
};
