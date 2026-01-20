import { type Object3D, type Mesh, Object3DEventMap, Group } from 'three';
import {
  type PartKey,
  type AnchorKey,
  parsePartKeyFromName,
  parseAnchorKeyFromName,
} from '../domain/keys';

export type SceneIndex = {
  partMeshes: Map<PartKey, Mesh[]>;
  anchors: Map<AnchorKey, Object3D>;
  meshToPart: Map<Object3D['uuid'], PartKey>;
  interactiveMeshes: Mesh[];
};

export function buildSceneIndex(
  modelRoot: Group<Object3DEventMap> | Object3D,
): SceneIndex {
  const partMeshes = new Map<PartKey, Mesh[]>();
  const anchors = new Map<AnchorKey, Object3D>();
  const meshToPart = new Map<Object3D['uuid'], PartKey>();
  const interactiveMeshes: Mesh[] = [];

  modelRoot.traverse((object) => {
    const anchorKey = parseAnchorKeyFromName(object.name);
    if (anchorKey) anchors.set(anchorKey, object);

    if ((object as Mesh).isMesh) {
      const mesh = object as Mesh;
      const partKey = parsePartKeyFromName(mesh.name);

      if (partKey) {
        const arr = partMeshes.get(partKey) ?? [];
        arr.push(mesh);
        partMeshes.set(partKey, arr);
        meshToPart.set(mesh.uuid, partKey);
        interactiveMeshes.push(mesh);
      }
    }
  });

  return { partMeshes, anchors, meshToPart, interactiveMeshes };
}
