import { useMemo } from 'react';
import { EffectComposer, Outline } from '@react-three/postprocessing';

import { useEditorStore } from '@/providers/editor-store-provider';
// import { GeometryOutline } from './geometry-outline';

export function SelectionController() {
  const hovered = useEditorStore((s) => s.hovered);
  const selected = useEditorStore((s) => s.selected);

  const hoverSelection = useMemo(() => (hovered ? [hovered] : []), [hovered]);

  const selectedSelection = useMemo(
    () => (selected ? [selected] : []),
    [selected]
  );

  // hover와 selected의 name이 다른지 확인
  const shouldShowHover =
    (hoverSelection.length > 0 && selectedSelection.length === 0) ||
    (hoverSelection.length > 0 &&
      selectedSelection.length > 0 &&
      hoverSelection[0].name !== selectedSelection[0].name);

  //   return (
  //     <>
  //       {shouldShowHover ? (
  //         <GeometryOutline target={hovered} color={0xffffff} scale={1.02} />
  //       ) : (
  //         <></>
  //       )}

  //       {/* 선택 아웃라인 */}
  //       <GeometryOutline target={selected} color={0x00b3ff} scale={1.035} />
  //     </>
  //   );
  return (
    <EffectComposer autoClear={false}>
      {shouldShowHover ? (
        <Outline
          selection={hoverSelection}
          visibleEdgeColor={0xffffff}
          hiddenEdgeColor={0xffffff}
          edgeStrength={2.5}
          pulseSpeed={0}
          blur
        />
      ) : (
        <></>
      )}

      <Outline
        selection={selectedSelection}
        visibleEdgeColor={0x00b3ff}
        hiddenEdgeColor={0x00b3ff}
        edgeStrength={5.0}
        pulseSpeed={0}
        blur
      />
    </EffectComposer>
  );
}
