import type { ModelCard } from '@/lib/apis';

type Props = {
  cards: ModelCard[];
  isLoading: boolean;
  isError: boolean;
  onSelectModel: (slug: string) => void;
};

export default function ModelsGrid({
  cards,
  isLoading,
  isError,
  onSelectModel,
}: Props) {
  if (isLoading) return <p>Loading models…</p>;
  if (isError) return <p>Failed to load models.</p>;

  if (!cards.length) {
    return <div>No models match your filters.</div>;
  }

  return (
    <div>
      {cards.map((card) => (
        <button
          key={card.slug}
          type="button"
          onClick={() => onSelectModel(card.slug)}
        >
          <div>{card.modelIdentities.canonicalName}</div>
          <div>
            {card.modelYear} · {card.market} · {card.trim}
          </div>
          <div>Customize</div>
        </button>
      ))}
    </div>
  );
}
