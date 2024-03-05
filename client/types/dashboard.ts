export type TeamBoardProps = {
  organizationId: string;
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
};
