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
};

export type DeleteBlockHandlerProps = {
  id: string;
  previousBlock: HTMLInputElement;
};

// EditableBlock

export type EditableBlockProps = {
  block: Block;
  addBlock: (currentBlock: AddBlockHandlerProps) => void;
  deleteBlock: (currentBlock: DeleteBlockHandlerProps) => void;
};
