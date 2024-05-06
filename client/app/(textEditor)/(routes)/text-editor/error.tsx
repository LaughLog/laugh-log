'use client';

import { FallbackProps } from 'react-error-boundary';

import { Button } from '@/components/ui/button';

const BlockFetchError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="mx-0 my-auto flex h-[400px] w-full flex-col items-center justify-center">
      <p className="subtitle5 my-10">{'Error: ' + error}</p>
      <Button onClick={resetErrorBoundary}>다시 시도</Button>
    </div>
  );
};

export default BlockFetchError;
