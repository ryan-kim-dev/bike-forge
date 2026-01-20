import type { StateCreator } from 'zustand';
import type { EditorStoreState } from '../editor-store';

export type UiSlice = {
  inspectorTab: 'part' | 'decal' | 'scene';
  setInspectorTab: (tab: UiSlice['inspectorTab']) => void;
};

export const createUiSlice: StateCreator<EditorStoreState, [], [], UiSlice> = (
  set,
) => ({
  inspectorTab: 'part',
  setInspectorTab: (tab) => set({ inspectorTab: tab }),
});
