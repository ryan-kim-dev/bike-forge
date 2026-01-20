import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';

import { useEditorStore } from '@/features/editor/store/editor-store-provider';
import { buildSceneIndex, type SceneIndex } from '../../scene/build-scene-index';
import { type PartKey } from '../../domain/keys';

type Props = {
  sourceUrl: string;
  onSceneIndexReady?: (index: SceneIndex) => void; // 추가
};

export default function MotorcycleModel({
  sourceUrl,
  onSceneIndexReady,
}: Props) {
  const { scene } = useGLTF(
    `${process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL}/${sourceUrl}`,
  );

  // 1) SceneIndex는 "딱 한 번" 만든다
  const sceneIndex = useMemo(() => buildSceneIndex(scene), [scene]);

  // 2) 상위(Viewer)에 인덱스 전달
  useEffect(() => {
    onSceneIndexReady?.(sceneIndex);
  }, [onSceneIndexReady, sceneIndex]);

  const setHoveredPartKey = useEditorStore((s) => s.setHoveredPartKey);
  const setSelectedPartKey = useEditorStore((s) => s.setSelectedPartKey);

  // hover 이벤트가 매우 자주 오므로 partKey 기준으로 마지막 hover를 기억
  const lastHoverPartKey = useRef<PartKey | null>(null);

  const handleHover = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      const hit = e.intersections?.[0];
      if (!hit) return;

      const partKey = sceneIndex.meshToPart.get(hit.object.uuid) ?? null;

      // partKey가 없으면(=part_가 아닌 메시) 상호작용 대상 아님
      if (!partKey) return;

      if (lastHoverPartKey.current === partKey) return;
      lastHoverPartKey.current = partKey;
      setHoveredPartKey(partKey);
    },
    [sceneIndex, setHoveredPartKey],
  );

  const handleClick = useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      const hit = e.intersections?.[0];
      if (!hit) return;

      const partKey = sceneIndex.meshToPart.get(hit.object.uuid) ?? null;
      if (!partKey) return;

      e.stopPropagation();

      // 선택 시 hover 제거 + 선택 확정
      lastHoverPartKey.current = null;
      setHoveredPartKey(null);
      setSelectedPartKey(partKey);
    },
    [sceneIndex, setHoveredPartKey, setSelectedPartKey],
  );

  const handlePointerOut = useCallback(() => {
    lastHoverPartKey.current = null;
    setHoveredPartKey(null);
  }, [setHoveredPartKey]);

  return (
    <primitive
      object={scene}
      onPointerMove={handleHover}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
}
