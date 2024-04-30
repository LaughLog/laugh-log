import InitSocket from '../../_components/initSocket';

const TextEditor = async () => {
  return (
    <section className="mx-auto my-0 w-2/3">
      <InitSocket>
        <article className="mx-0 my-8 border-l-4 border-solid border-l-[#0f2e53] py-1 pl-2 pr-4">
          <h1 role="img" aria-label="greetings" className="pr-2">
            Hallo! 👋
          </h1>
          <p>
            <span className="rounded-s bg-orange-200 p-0.5">Enter</span> 키를
            통해 새로운 블록을 생성해 보세요.
            <br />
            <span className="rounded-sm bg-orange-200 p-0.5">/</span> 키를 통해
            다양한 블록을 사용해 보세요.
          </p>
        </article>
      </InitSocket>
    </section>
  );
};

export default TextEditor;
