'use client';

import { Suspense, useEffect, useState } from 'react';

import { socket } from '@/socket/socket';
import InitBlocks from './initBlocks';
import Loading from '../(routes)/text-editor/loading';
import { InitSocketProps } from '@/types/textEditor';

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
      <Suspense fallback={<Loading />}>
        {isConnected && <InitBlocks />}
      </Suspense>
    </>
  );
};

export default InitSocket;
