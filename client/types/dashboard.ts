export type StartWithTemplateProps = {
  organizationId: string;
};

export type TemplateItemProps = {
  organizationId: string;
  type: string;
  imageUrl: string;
};

export type TeamBoardProps = {
  organizationId: string;
};

export type EmptyBoardsProps = {
  organizationId: string;
  onClick: () => void;
};

export type BoardListType = {
  id: string;
  name: string;
  date: string;
}[];

export type BoardListProps = {
  boardList: BoardListType;
};

export type BoardItemProps = {
  boardId: string;
  boardName: string;
  date: string;
};

export type BoardMenuProps = {
  children: React.ReactNode;
  boardId: string;
  boardName: string;
};

export type MenuItemProps = {
  boardId: string;
  boardName: string;
  header: string;
  description: string;
  button: string;
};
