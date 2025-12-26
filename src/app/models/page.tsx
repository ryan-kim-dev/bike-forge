import { getMakers } from '@/lib/apis';
import FiltersPanel from './filters-panel';

export default async function ModelsPage() {
  const makers = await getMakers();
  if (!makers) {
    return <div>문제가 발생했습니다</div>;
  }

  return (
    <div>
      <FiltersPanel makers={makers} />
    </div>
  );
}
