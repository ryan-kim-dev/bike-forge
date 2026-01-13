import { EditorStoreState } from '@/stores/editor-store';
import { StateCreator } from 'zustand';

export type PartId = string;

export type SelectionState = {
  hoveredPartId: PartId | null;
  selectedPartId: PartId | null;
};

export type SelectionAction = {
  setHoveredPartId: (id: PartId | null) => void;
  setSelectedPartId: (id: PartId | null) => void;
  clearSelection: () => void;
};

export type SelectionSlice = SelectionState & SelectionAction;

export const createSelectionSlice: StateCreator<
  EditorStoreState,
  [],
  [],
  SelectionSlice
> = (set, get) => ({
  selectedPartId: null,
  hoveredPartId: null,

  setHoveredPartId: (id) => {
    if (get().hoveredPartId === id) return;

    set({
      selectedPartId: id,
    });
  },

  setSelectedPartId: (id) => {
    if (get().selectedPartId === id) return;

    set({
      selectedPartId: id,
    });
  },

  clearSelection: () =>
    set({
      selectedPartId: null,
    }),
});
