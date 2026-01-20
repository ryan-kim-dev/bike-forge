import { type MetaDTO } from './meta';
import { type SceneIndex } from '../scene/build-scene-index';
import { type PartKey, type AnchorKey } from './keys';

export type SceneIndexValidationReport = {
  missingParts: PartKey[];
  missingAnchors: AnchorKey[];
  orphanParts: PartKey[];
  orphanAnchors: AnchorKey[];
  partsWithMissingAnchor: PartKey[];
};

export function validateSceneIndex(
  meta: MetaDTO,
  index: SceneIndex,
): SceneIndexValidationReport {
  const partKeysFromMeta = new Set(meta.parts.map((p) => p.key));
  const anchorKeysFromMeta = new Set(meta.anchors.map((a) => a.key));

  const partKeysFromScene = new Set(index.partMeshes.keys());
  const anchorKeysFromScene = new Set(index.anchors.keys());

  const missingParts = [...partKeysFromMeta].filter(
    (k) => !partKeysFromScene.has(k),
  );
  const missingAnchors = [...anchorKeysFromMeta].filter(
    (k) => !anchorKeysFromScene.has(k),
  );

  const orphanParts = [...partKeysFromScene].filter(
    (k) => !partKeysFromScene.has(k),
  );

  const orphanAnchors = [...anchorKeysFromScene].filter(
    (k) => !anchorKeysFromMeta.has(k),
  );

  const partsWithMissingAnchor = meta.parts
    .filter((p) => p.capabilities.canReplace)
    .filter((p) => !p.anchorKey || !index.anchors.has(p.anchorKey))
    .map((p) => p.key);

  return {
    missingParts,
    missingAnchors,
    orphanParts,
    orphanAnchors,
    partsWithMissingAnchor,
  };
}
