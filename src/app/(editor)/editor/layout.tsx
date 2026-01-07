import {
  editorRoot,
  editorHeader,
  editorBody,
  leftPanel,
  viewerPanel,
  rightPanel,
} from '@/styles/pages/editor/layout.css';

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={editorRoot}>
      <header className={editorHeader}>{/* TODO: EditorTopBar */}</header>

      <div className={editorBody}>
        <aside className={leftPanel}></aside>
        <main className={viewerPanel}>{children}</main>
        <aside className={rightPanel}></aside>
      </div>
    </div>
  );
}
