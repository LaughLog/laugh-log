'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="subtitle5 mb-10">{'Error: ' + error}</p>
      <Button onClick={() => reset()}>다시 시도</Button>
    </div>
  );
}
