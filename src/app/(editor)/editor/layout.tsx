import { editorRoot, editorHeader } from '@/styles/pages/editor/layout.css';
import { EditorStoreProvider } from '@/features/editor/store/editor-store-provider';

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={editorRoot}>
      <header className={editorHeader}>{/* TODO: EditorTopBar */}</header>
      <EditorStoreProvider>{children}</EditorStoreProvider>
    </div>
  );
}
