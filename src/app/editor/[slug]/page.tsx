import Viewer from '@/app/components/viewer';
import { getModelVariants } from '@/lib/apis';

type EditorParams = {
  slug: string;
};

export default async function EditorPage({
  params,
}: {
  params: Promise<EditorParams>;
}) {
  const { slug } = await params;

  // TODO: topbar 구현시 breadcrumb을 그리기 위한 path 구성하기
  const modelVariantData = await getModelVariants(slug);

  return (
    <div
      style={{
        width: '100dvw',
        height: '100dvh',
      }}
    >
      <Viewer sourceUrl={modelVariantData.source_url} />
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
