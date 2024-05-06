import TextHint from '@/components/ui/text-hint';

const FooterText = () => {
  return (
    <section className="flex w-full max-w-[850px] flex-col flex-wrap justify-center desktop:max-w-[1400px] desktop:flex-row desktop:justify-between">
      <div className="flex w-[auto] flex-col pb-6 desktop:w-[50%]">
        <span className=" whitespace-nowrap text-center text-[32px] font-bold tracking-tight tablet:text-[56px] desktop:text-left">
          일은 재밌어야 한다!
          <br />
          회의는 단순한 업무가 아니라
          <br />
          즐거운 협업의 시작입니다.
        </span>
      </div>
      <div className="mt-10 flex w-[650px] w-[auto] justify-between px-14 desktop:w-[50%]">
        <section className="flex w-[50%] translate-x-1/4 flex-col tablet:translate-x-1/2 desktop:translate-x-0">
          <div className="mb-4 font-bold">Contributor</div>
          <TextHint
            text="Go To ovoxiix's Github"
            url="https://github.com/ovoxiix"
          >
            ovoxiix
          </TextHint>
          <TextHint
            text="Go To JitHoon's Github"
            url="https://github.com/JitHoon"
          >
            JitHoon
          </TextHint>
          <TextHint
            text="Go To Bumang-Cyber's Github"
            url="https://github.com/Bumang-Cyber"
          >
            Bumang-Cyber
          </TextHint>
        </section>
        <section className="w-[50%] translate-x-1/4 tablet:translate-x-1/2 desktop:translate-x-0">
          <div className="mb-4 font-bold">Link</div>
          <TextHint
            text="Go To Github"
            url="https://github.com/LaughLog/laugh-log"
          >
            Github
          </TextHint>
        </section>
      </div>
    </section>
  );
};

export default FooterText;
