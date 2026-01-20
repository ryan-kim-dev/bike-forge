'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

type GeometryOutlineProps = {
  target: THREE.Object3D | null;
  color?: number;
  scale?: number; // 1.02 ~ 1.05 권장
  opacity?: number;
};

export function GeometryOutline({
  target,
  color = 0x00b3ff,
  scale = 1.03,
  opacity = 1.0,
}: GeometryOutlineProps) {
  const outlineMeshes = useMemo(() => {
    if (!target) return [];

    const clones: THREE.Mesh[] = [];

    target.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;

      const outline = obj.clone(false) as THREE.Mesh;

      outline.geometry = obj.geometry;
      outline.material = new THREE.MeshBasicMaterial({
        color,
        side: THREE.BackSide,
        transparent: opacity < 1,
        opacity,
        depthWrite: false,
      });

      outline.scale.multiplyScalar(scale);
      outline.renderOrder = 999; // 항상 위에

      clones.push(outline);
    });

    return clones;
  }, [target, color, scale, opacity]);

  if (!outlineMeshes.length) return null;

  return (
    <group>
      {outlineMeshes.map((mesh) => (
        <primitive key={mesh.uuid} object={mesh} />
      ))}
    </group>
  );
}
