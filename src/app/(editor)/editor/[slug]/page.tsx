import { getModelVariants } from '@/lib/apis';
import EditorClient from '@/features/editor/editor-client';

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
  let modelVariantData;
  try {
    modelVariantData = await getModelVariants(slug);
  } catch (err) {
    console.error('Failed to fetch model variant', err);
    return <div>Failed to load model. Please check the URL and try again.</div>;
  }

  return (
    <div>
      <EditorClient sourceUrl={modelVariantData.sourceUrl} />
    </div>
  );
}
