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

/*
export const Container = styled.div`
    width: 121px;
    height: 121px;
    background-color: #e3f330;

    position: absolute;
    top: -20px;

    clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 0 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

  .fold {
      width: 20%;
      height: 20%;
      background-color: #fbffcb;

      position: absolute;
      top: 0;
      right: 0;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04);
  }

    &:hover {
      background-color: #edfd3a;
    }
`;
*/
