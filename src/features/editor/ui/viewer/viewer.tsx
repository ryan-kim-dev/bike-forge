'use client';
import { Canvas } from '@react-three/fiber';
import { Loader, Environment, OrbitControls, Bvh } from '@react-three/drei';
import Motorcycle from './motorcycle';
import { Suspense } from 'react';
import { viewerCanvas } from '@/styles/pages/editor/viewer.css';
import { SelectionController } from './selection-controller';
import { useEditorStore } from '@/features/editor/store/editor-store-provider';
import { useSetSceneIndex } from '../../scene/scene-index-context';

type Props = {
  sourceUrl: string;
};

export default function Viewer(props: Props) {
  const clearSelection = useEditorStore((s) => s.clearSelection);
  const setSceneIndex = useSetSceneIndex();

  return (
    <div className={viewerCanvas}>
      <Canvas
        dpr={1}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
        }}
        frameloop="demand"
        camera={{ fov: 50, near: 0.05, far: 100, position: [1.8, 1.4, 2.2] }}
        onPointerMissed={() => clearSelection()}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <OrbitControls target={[0, 0.5, 0]} enableDamping={false} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={2.0} />

          <Environment preset="city" />
          <Bvh>
            <Motorcycle
              sourceUrl={props.sourceUrl}
              onSceneIndexReady={setSceneIndex}
            />
          </Bvh>

          <SelectionController />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
