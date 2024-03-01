interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="h-full w-full">{children}</main>;
};

export default Main;
