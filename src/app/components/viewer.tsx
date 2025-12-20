'use client';
import { Canvas } from '@react-three/fiber';
import { Loader, Environment, OrbitControls } from '@react-three/drei';
import Cub from './cub';
import { Suspense } from 'react';

export default function Viewer() {
  return (
    <>
      <Canvas
        camera={{ fov: 50, near: 0.05, far: 100, position: [1.8, 1.4, 2.2] }}
      >
        <color attach="background" args={['#EDEDED']} />
        <Suspense fallback={null}>
          <OrbitControls target={[0, 0.5, 0]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={2.0} />

          <Environment preset="city" />
          <Cub />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
