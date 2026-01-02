'use client';
import dynamic from 'next/dynamic';

// viewer는 editor 섬에서만 불러온다
const Viewer = dynamic(() => import('./viewer/viewer'), { ssr: false });

type Props = {
  sourceUrl: string;
};

export default function EditorClient({ sourceUrl }: Props) {
  return (
    <div
      style={{
        width: '100dvw',
        height: '100dvh',
      }}
    >
      <Viewer sourceUrl={sourceUrl} />
    </div>
  );
}
