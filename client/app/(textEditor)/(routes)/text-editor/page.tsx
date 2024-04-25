import EditablePage from '../../_components/editablePage';

const TextEditor = () => {
  return (
    <section className="mx-auto my-0 w-2/3">
      <EditablePage>
        <article className="mx-0 my-8 border-l-4 border-solid border-l-[#0f2e53] py-1 pl-2 pr-4">
          <h1 role="img" aria-label="greetings" className="pr-2">
            Hallo! 👋
          </h1>
          <p>
            <span className="rounded-s bg-orange-200 p-0.5">Enter</span> 키를
            통해 새로운 블록을 생성해 보세요.{' '}
            <span className="rounded-sm bg-orange-200 p-0.5">/</span> 기능은
            향후 추가될 예정입니다.
          </p>
        </article>
      </EditablePage>
    </section>
  );
};

export default TextEditor;
