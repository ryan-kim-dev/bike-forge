'use client';
import { useGLTF } from '@react-three/drei';

export default function Cub() {
  const { scene } = useGLTF('/models/scene.gltf');

  return <primitive object={scene} />;
}
