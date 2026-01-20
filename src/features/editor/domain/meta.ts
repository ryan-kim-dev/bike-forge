import { type PartKey, type AnchorKey } from './keys';

export type Capability = {
  isSelectable: boolean;
  canMaterial: boolean;
  canDecal: boolean;
  canReplace: boolean;
  canTransform: boolean;
};

export type PartMetaDTO = {
  key: PartKey; // "seat"
  displayName: string;
  category: string; // UI 그룹핑용
  sortOrder: number;
  anchorKey?: AnchorKey; // 교체/부착 기준 (없을 수 있음)
  capabilities: Capability;
};

export type AnchorOptionDTO = {
  optionKey: string; // DB option_key
  displayName: string;
  assetUrl: string; // R2 URL or signed URL
};

export type AnchorMetaDTO = {
  key: AnchorKey; // "rear_rack"
  anchorType: 'replace' | 'attach' | 'decal' | 'transform' | 'generic';
  options: AnchorOptionDTO[];
};

export type MetaDTO = {
  variantId: string;
  parts: PartMetaDTO[];
  anchors: AnchorMetaDTO[];
};
