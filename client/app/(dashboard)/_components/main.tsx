interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <div className="flex h-full w-full flex-col">{children}</div>;
};

export default Main;
