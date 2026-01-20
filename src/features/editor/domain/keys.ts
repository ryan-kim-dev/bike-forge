import { type Object3D } from 'three';

export type PartKey = string & { readonly brand: 'PartKey' };
export type AnchorKey = string & { readonly brand: 'AnchorKey' };

export const isPartNodeName = (name: Object3D['name']): boolean =>
  name.startsWith('part_');
export const isAnchorNodeName = (name: Object3D['name']): boolean =>
  name.startsWith('anchor_');

export const parsePartKeyFromName = (
  name: Object3D['name'],
): PartKey | null => {
  if (!name.startsWith('part_')) return null;
  const key = name.slice('part_'.length);
  if (!key) return null;
  return key as PartKey;
};

export const parseAnchorKeyFromName = (
  name: Object3D['name'],
): AnchorKey | null => {
  if (!name.startsWith('anchor_')) return null;
  const key = name.slice('anchor_'.length);
  if (!key) return null;
  return key as AnchorKey;
};
