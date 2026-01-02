import { getMakers } from '@/lib/apis';
import ModelsClient from '../features/models/models-client';

export default async function ModelsPage() {
  let makers;
  try {
    makers = await getMakers();
  } catch (err) {
    console.error('Failed to fetch makers:', err);
    return <div>Failed to load makers. Please try again later.</div>;
  }
  if (!makers) {
    return <div>No makers available.</div>;
  }

  return (
    <div>
      <ModelsClient makers={makers} />
    </div>
  );
}
