'use client';

import {
  createEditorStore,
  type EditorStore,
  type EditorStoreState,
} from '@/features/editor/store/editor-store';
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useStore } from 'zustand';

const EditorStoreContext = createContext<EditorStore | null>(null);

export type EditorStoreProviderProps = {
  children: ReactNode;
};

export const EditorStoreProvider = ({ children }: EditorStoreProviderProps) => {
  const store = useMemo(() => createEditorStore(), []);

  return (
    <EditorStoreContext.Provider value={store}>
      {children}
    </EditorStoreContext.Provider>
  );
};

export function useEditorStore<T>(selector: (state: EditorStoreState) => T): T {
  const store = useContext(EditorStoreContext);

  if (!store) {
    throw new Error('useEditorStore must be used within EditorStoreProvider');
  }

  return useStore(store, selector);
}
