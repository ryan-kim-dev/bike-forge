'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { type SceneIndex } from './build-scene-index';

type SceneIndexContextValue = {
  sceneIndex: SceneIndex | null;
  setSceneIndex: (index: SceneIndex) => void;
};

const SceneIndexContext = createContext<SceneIndexContextValue | null>(null);

type Props = {
  children: ReactNode;
};

export function SceneIndexProvider({ children }: Props) {
  const [sceneIndex, setSceneIndexState] = useState<SceneIndex | null>(null);

  const setSceneIndex = useCallback((index: SceneIndex) => {
    setSceneIndexState(index);
  }, []);

  return (
    <SceneIndexContext.Provider value={{ sceneIndex, setSceneIndex }}>
      {children}
    </SceneIndexContext.Provider>
  );
}

export function useSceneIndex(): SceneIndex | null {
  const context = useContext(SceneIndexContext);
  if (!context) {
    throw new Error('useSceneIndex must be used within SceneIndexProvider');
  }
  return context.sceneIndex;
}

export function useSetSceneIndex(): (index: SceneIndex) => void {
  const context = useContext(SceneIndexContext);
  if (!context) {
    throw new Error('useSetSceneIndex must be used within SceneIndexProvider');
  }
  return context.setSceneIndex;
}
