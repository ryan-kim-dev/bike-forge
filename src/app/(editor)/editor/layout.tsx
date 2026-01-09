import { editorRoot, editorHeader } from '@/styles/pages/editor/layout.css';

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={editorRoot}>
      <header className={editorHeader}>{/* TODO: EditorTopBar */}</header>

      {children}
    </div>
  );
}
