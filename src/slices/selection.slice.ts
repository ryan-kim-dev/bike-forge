import { EditorStoreState } from '@/stores/editor-store';
import { StateCreator } from 'zustand';
import { type Object3D } from 'three';

export type PartId = string;

export type SelectionSlice = {
  hovered: Object3D | null;
  selected: Object3D | null;
  selectedPartId: PartId | null;

  clearSelection: () => void;
  setHovered: (o: Object3D | null) => void;
  setSelected: (o: Object3D | null) => void;
  setSelectedPartId: (id: PartId) => void;
};

export const createSelectionSlice: StateCreator<
  EditorStoreState,
  [],
  [],
  SelectionSlice
> = (set, get) => ({
  selectedPartId: null,
  hovered: null,
  selected: null,

  clearSelection: () =>
    set({
      selectedPartId: null,
      hovered: null,
      selected: null,
    }),

  setHovered: (o) => {
    if (get().hovered === o) return;
    set({ hovered: o });
  },

  setSelected: (o) => {
    if (get().selected === o) return;
    set({ selected: o });
  },

  setSelectedPartId: (id) => set({ selectedPartId: id }),
});
