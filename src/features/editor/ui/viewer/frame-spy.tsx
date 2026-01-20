import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export function FrameSpy() {
  const frames = useRef(0);

  useFrame(() => {
    frames.current += 1;
  });

  useEffect(() => {
    const id = window.setInterval(() => {
      console.log('[FrameSpy] frames/sec:', frames.current);
      frames.current = 0;
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  return null;
}
