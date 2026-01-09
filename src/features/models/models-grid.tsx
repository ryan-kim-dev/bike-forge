import { Button } from '@/components/ui/button';
import type { ModelCard } from '@/lib/apis';
import {
  modelsGridContainer,
  gridStateMessage,
} from '@/styles/pages/models/models-grid.css';
import {
  modelCard,
  modelCardVisual,
  modelCardImage,
  modelCardPlaceholder,
  modelCardContent,
  modelCardName,
  modelCardMeta,
} from '@/styles/ui/model-card.css';

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
  if (isLoading) {
    return <div className={gridStateMessage}>Loading models…</div>;
  }

  if (isError) {
    return <div className={gridStateMessage}>Failed to load models.</div>;
  }

  if (!cards.length) {
    return (
      <div className={gridStateMessage}>No models match your filters.</div>
    );
  }

  return (
    <div className={modelsGridContainer}>
      {cards.map((card) => (
        <article key={card.slug} className={modelCard}>
          {/* Visual Area - 썸네일 또는 placeholder */}
          <div className={modelCardVisual}>
            {card.thumbnailUrl ? (
              // thumbnailUrl이 있으면 실제 이미지 표시
              <img
                src={card.thumbnailUrl}
                alt={card.modelIdentities.canonicalName}
                className={modelCardImage}
              />
            ) : (
              // thumbnailUrl이 없으면 placeholder 표시
              <div className={modelCardPlaceholder}>
                <span>3D Model Preview</span>
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className={modelCardContent}>
            {/* Model Name */}
            <h3 className={modelCardName}>
              {card.modelIdentities.canonicalName}
            </h3>

            {/* Meta Info */}
            <div className={modelCardMeta}>
              {card.modelYear} · {card.market} · {card.trim}
            </div>

            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => onSelectModel(card.slug)}
            >
              Customize
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
