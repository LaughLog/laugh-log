import TextHint from '@/components/ui/text-hint';

const FooterText = () => {
  return (
    <section className="flex w-full max-w-[850px] flex-col flex-wrap justify-center desktop:max-w-[1400px] desktop:flex-row desktop:justify-between">
      <div className="flex w-[auto] flex-col pb-[24px] desktop:w-[50%]">
        <span className="text-center text-[32px] font-bold tracking-tight tablet:text-[56px] desktop:text-left">
          일은 재밌어야 한다!
          <br />
          회의는 단순한 업무가 아닙니다.
          <br />
          즐거운 협업의 시작입니다.
        </span>
      </div>
      <div className="flex w-[650px] w-[auto] justify-between px-[56px] desktop:w-[50%]">
        <section className="flex w-[50%] flex-col">
          <div className="mb-[16px] font-bold">Contributor</div>
          <TextHint text="Go To ovoxiix's Github">
            <a
              href="https://github.com/ovoxiix"
              target="_blank"
              className="mb-[8px] w-fit transition-all hover:bg-coral700 hover:text-white"
            >
              ovoxiix
            </a>
          </TextHint>
          <TextHint text="Go To JitHoon's Github">
            <a
              href="https://github.com/JitHoon"
              target="_blank"
              className="mb-[8px] w-fit transition-all hover:bg-coral700 hover:text-white"
            >
              JitHoon
            </a>
          </TextHint>
          <TextHint text="Go To Bumang-Cyber's Github">
            <a
              href="https://github.com/Bumang-Cyber"
              target="_blank"
              className="mb-[8px] w-fit transition-all hover:bg-coral700 hover:text-white"
            >
              Bumang-Cyber
            </a>
          </TextHint>
        </section>
        <section className="w-[50%]">
          <div className="mb-[16px] font-bold">Link</div>
          <TextHint text="Go To Github">
            <a
              href="https://github.com/LaughLog/laugh-log"
              className="mb-[8px] w-fit transition-all hover:bg-coral700 hover:text-white"
              target="_blank"
            >
              Github
            </a>
          </TextHint>
        </section>
      </div>
    </section>
  );
};

export default FooterText;
