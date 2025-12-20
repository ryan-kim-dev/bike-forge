import Viewer from '@/app/components/viewer';

type EditorParams = {
  maker: string;
  series: string;
  variant: string;
};

export default async function EditorPage({
  params,
}: {
  params: Promise<EditorParams>;
}) {
  const { maker, series, variant } = await params;

  return (
    <div
      style={{
        width: '100dvw',
        height: '100dvh',
      }}
    >
      <Viewer />
      <footer>
        <p>
          This work is based on &quot;Honda Super cub&quot;
          (https://sketchfab.com/3d-models/honda-super-cub-9ce554228fc746c89f6d02b995f43c41)
          by Aleksandr Sagidullin (https://sketchfab.com/jintrim3) licensed
          under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
        </p>
      </footer>
    </div>
  );
}
