interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <div className="subtitle4 tracking-tight">{children}</div>;
};

export default Subtitle;
