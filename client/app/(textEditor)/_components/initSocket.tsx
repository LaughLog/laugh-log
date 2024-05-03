'use client';

import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { socket } from '@/socket/socket';
import InitBlocks from './initBlocks';
import Loading from '../(routes)/text-editor/loading';
import { InitSocketProps } from '@/types/textEditor';
import ErrorFallback from './blockFetchError';

const InitSocket = ({ children }: InitSocketProps) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      socket.connect();
      setIsConnected(true);
    }
  }, []);

  return (
    <>
      {children}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          {isConnected && <InitBlocks />}
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default InitSocket;
