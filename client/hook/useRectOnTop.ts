'use client';

import { useEffect, useRef, useState } from 'react';

const useRectOnTop = () => {
  const hookRef = useRef(null);
  const [isOnTop, setIsOnTop] = useState(false);

  useEffect(() => {
    if (!hookRef.current) return;

    const target = hookRef.current as HTMLElement;

    const handleScroll = () => {
      const rect = target.getBoundingClientRect();
      if (rect.top <= 0) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [hookRef.current]);

  return [hookRef, isOnTop];
};

export default useRectOnTop;
