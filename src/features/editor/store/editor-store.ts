import { create } from 'zustand';
import { createSelectionSlice, SelectionSlice } from './slices/selection.slice';
import { UiSlice, createUiSlice } from './slices/ui.slice';

export type EditorStoreState = SelectionSlice & UiSlice;

export const createEditorStore = () => {
  return create<EditorStoreState>()((...a) => ({
    ...createSelectionSlice(...a),
    ...createUiSlice(...a),
  }));
};

export type EditorStore = ReturnType<typeof createEditorStore>;
