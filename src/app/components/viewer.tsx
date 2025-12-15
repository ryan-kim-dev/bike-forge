'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Cub from './cub';

export default function Viewer() {
  return (
    <Canvas camera={{ fov: 50, near: 0.05, far: 100, position: [0, 1.2, 3.2] }}>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2.0} />

      <Environment preset="city" />
      <Cub />
    </Canvas>
  );
}
