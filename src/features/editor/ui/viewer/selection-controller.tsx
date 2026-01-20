import { useEffect, useMemo } from 'react';
import { EffectComposer, Outline } from '@react-three/postprocessing';
import { useThree } from '@react-three/fiber';

import { useEditorStore } from '@/features/editor/store/editor-store-provider';
import { useSceneIndex } from '../../scene/scene-index-context';

export function SelectionController() {
  const sceneIndex = useSceneIndex();
  const invalidate = useThree((s) => s.invalidate);

  const hoveredPartKey = useEditorStore((s) => s.hoveredPartKey);
  const selectedPartKey = useEditorStore((s) => s.selectedPartKey);

  // demand 프레임일 때 selection 변경을 즉시 반영
  useEffect(() => {
    invalidate();
  }, [hoveredPartKey, selectedPartKey, invalidate]);

  const selectedSelection = useMemo(() => {
    if (!sceneIndex || !selectedPartKey) return [];
    return sceneIndex.partMeshes.get(selectedPartKey) ?? [];
  }, [sceneIndex, selectedPartKey]);

  const hoverSelection = useMemo(() => {
    if (!sceneIndex || !hoveredPartKey) return [];
    // 선택이 있으면 hover는 표시하지 않음(권장 룰)
    if (selectedPartKey === hoveredPartKey) return [];
    return sceneIndex.partMeshes.get(hoveredPartKey) ?? [];
  }, [sceneIndex, hoveredPartKey, selectedPartKey]);

  return (
    <EffectComposer autoClear={false}>
      <Outline
        selection={hoverSelection}
        selectionLayer={2}
        visibleEdgeColor={0xffffff}
        hiddenEdgeColor={0xffffff}
        edgeStrength={2.5}
        pulseSpeed={0}
        blur
      />

      <Outline
        selection={selectedSelection}
        selectionLayer={1}
        visibleEdgeColor={0x00b3ff}
        hiddenEdgeColor={0x00b3ff}
        edgeStrength={5.0}
        pulseSpeed={0}
        blur
      />
    </EffectComposer>
  );
}
