'use client';
import { useGLTF } from '@react-three/drei';

type Props = {
  sourceUrl: string;
};

export default function MotorcycleModel({ sourceUrl }: Props) {
  const { scene } = useGLTF(
    `${process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL}/${sourceUrl}`
  );

  return <primitive object={scene} />;
}
