import { useEditorStore } from '@/providers/editor-store-provider';
import { useGLTF } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { useCallback, useRef } from 'react';

type Props = {
  sourceUrl: string;
};

export default function MotorcycleModel({ sourceUrl }: Props) {
  const { scene } = useGLTF(
    `${process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL}/${sourceUrl}`
  );

  const setHovered = useEditorStore((s) => s.setHovered);
  const setSelected = useEditorStore((s) => s.setSelected);
  const setSelectedPartId = useEditorStore((s) => s.setSelectedPartId);
  // const selectedPartId = useEditorStore((s) => s.selectedPartId);

  // const clearSelection = useEditorStore((s) => s.clearSelection);

  // hover 이벤트가 매우 자주 오므로 uuid로 마지막 hover를 기억하고 "변경시에만" setHovered
  const lastHoverUuid = useRef<string | null>(null);

  const handleHover = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      const hit = e.intersections?.[0];
      if (!hit) return;
      const target = hit.object;

      // 파트 쪼개기 하지 못한 잔여 메시는 호버, 선택 방지
      if (target.name.includes('static')) return;

      // 동일 mesh면 스킵
      if (lastHoverUuid.current === target.uuid) return;

      lastHoverUuid.current = target.uuid;
      setHovered(target);
    },
    [setHovered]
  );

  const handleClick = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      const hit = e.intersections?.[0];
      if (!hit) return;

      const target = hit.object;
      if (target.name.includes('static')) return;

      // 선택 확정 시 이벤트 전파 차단
      e.stopPropagation();

      // 선택 시 hover 완전히 클리어
      lastHoverUuid.current = null;
      setHovered(null);
      setSelected(target);
      setSelectedPartId(target.uuid);
    },
    [setHovered, setSelected, setSelectedPartId]
  );

  const handlePointerOut = useCallback(() => {
    lastHoverUuid.current = null;
    setHovered(null);
  }, [setHovered]);

  return (
    <primitive
      object={scene}
      onPointerOver={handleHover}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
}
