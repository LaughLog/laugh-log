import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <div className="text-coral800">적용1</div>
      <span className="subtitle1 w-full text-coral800">수정된 텍스트</span>
      <div className="text-subtitle3">적용3</div>
      <Button>프라이머리</Button>
      <Button variant="secondary">세컨더리</Button>
      <Button variant="sidebar" className="w-[100%]">
        초대
      </Button>
    </main>
  );
}
