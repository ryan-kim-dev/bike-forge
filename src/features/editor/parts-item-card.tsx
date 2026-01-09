import { partsCardContainer } from '@/styles/pages/editor/parts-item-card.css';

export type PartsItemCardProps = {
  title: string;
  subtitle?: string;
  thumbnailUrl?: string;
  variant?: 'default' | 'active' | 'disabled';
  onClick?: () => void;
  className?: string;
};

export default function PartsItemCard({
  title,
  subtitle,
  thumbnailUrl,
  variant,
  onClick,
  className,
}: PartsItemCardProps) {
  return (
    <div className={partsCardContainer}>
      <div></div>
    </div>
  );
}
