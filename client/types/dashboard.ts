export type StartWithTemplateProps = {
  organizationId: string;
};

export type TemplateItemProps = {
  organizationId: string;
  name: string;
  imageUrl: string;
};

export type TeamBoardProps = {
  organizationId: string;
};

export type EmptyBoardsProps = {
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
  id: string;
  name: string;
  date: string;
};

export type BoardMenuProps = {
  children: React.ReactNode;
  id: string;
  name: string;
};

export type MenuItemProps = {
  boardId: string;
  name: string;
  header: string;
  description: string;
  button: string;
};
