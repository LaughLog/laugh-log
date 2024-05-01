import { Dispatch, SetStateAction, KeyboardEvent } from 'react';

export type Block = {
  id: string;
  content: string;
  tag: string;
};

// InitSocket

export type InitSocketProps = { children: React.ReactNode };

// EditablePage

export type EditablePageProps = {
  initialBlocks: Block[];
  boardId: string;
};

// EditableBlock

export type EditableBlockProps = {
  blockId: string;
  blockContent: string;
  blockTag: string;
  setBlocks: Dispatch<SetStateAction<Block[]>>;
};

export type AddBlocksHandler = (
  id: string,
  previousHtml: string,
  newBlock: {
    id: string;
    content: string;
    tag: string;
  }
) => void;

export type DeleteBlocksHandler = (
  deleteBlockId: string,
  previousBlockId: string,
  newContent: string
) => void;

export type BlockContentHandler = (id: string, value: string) => void;

export type ChangeTagHandler = (id: string, tag: string) => void;

export type KeyEventHandler = (e: KeyboardEvent<HTMLInputElement>) => void;

export type MenuSelectionHandler = (selectedTag: string) => void;

// SelectMenu

export type SelectMenuProps = {
  id: string;
  setContent: Dispatch<SetStateAction<string>>;
  onClose: () => void;
};

export type MenuKeyDownHandler = (e: globalThis.KeyboardEvent) => void;
