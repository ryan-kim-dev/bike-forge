'use client';
import { useGLTF } from '@react-three/drei';

export default function Cub() {
  const { scene } = useGLTF(
    `${process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL}/models/maker/honda/series/super-cub/c70/gen-1/1968/jp/standard/runtime/cub-transformed.gltf`
  );

  return <primitive object={scene} />;
}
