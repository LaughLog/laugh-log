const PostIt = () => {
  return (
    <section className="flex h-full w-[152px] shrink-0 justify-center border-r border-gray400 bg-gray100 bg-white">
      <div className="post-it absolute top-[-20px] flex h-[121px] w-[121px] cursor-pointer items-center justify-center bg-[#e3f330] hover:bg-[#edfd3a]">
        <div className="absolute right-0 top-0 h-1/5 w-1/5 bg-[#fbffcb] shadow-md" />
      </div>
    </section>
  );
};

export default PostIt;
