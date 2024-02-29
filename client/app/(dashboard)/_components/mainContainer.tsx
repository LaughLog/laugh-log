interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <div className="h-full w-full">{children}</div>;
};

export default Main;
