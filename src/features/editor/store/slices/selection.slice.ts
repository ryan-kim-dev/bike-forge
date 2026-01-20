import { EditorStoreState } from '@/features/editor/store/editor-store';
import { StateCreator } from 'zustand';
import { PartKey } from '@/features/editor/domain/keys';

export type PartId = string;

export type SelectionSlice = {
  hoveredPartKey: PartKey | null;
  selectedPartKey: PartKey | null;

  setHoveredPartKey: (key: PartKey | null) => void;
  setSelectedPartKey: (key: PartKey | null) => void;
  clearSelection: () => void;
};

export const createSelectionSlice: StateCreator<
  EditorStoreState,
  [],
  [],
  SelectionSlice
> = (set) => ({
  hoveredPartKey: null,
  selectedPartKey: null,

  setHoveredPartKey: (key: PartKey | null) => {
    set({
      hoveredPartKey: key,
    });
  },

  setSelectedPartKey: (key: PartKey | null) => {
    set({
      selectedPartKey: key,
    });
  },

  clearSelection: () => {
    set({
      hoveredPartKey: null,
      selectedPartKey: null,
    });
  },
});
