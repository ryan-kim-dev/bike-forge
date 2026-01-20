import {
  partsPanelContainer,
  partsPanelSection,
  partsPanelSectionTitle,
} from '@/styles/pages/editor/parts-panel.css';
import PartsItemCard from './parts-item-card';

type PartSlot = {
  id: string;
  name: string;
  category: 'body' | 'mechanical' | 'accessories';
  isInstalled: boolean;
};

const MOCK_PARTS: PartSlot[] = [
  {
    id: 'front-fender',
    name: 'Front Fender',
    category: 'body',
    isInstalled: true,
  },
  { id: 'seat', name: 'Seat', category: 'body', isInstalled: true },
  {
    id: 'handlebar',
    name: 'Handlebar',
    category: 'mechanical',
    isInstalled: true,
  },
  {
    id: 'exhaust',
    name: 'Exhaust System',
    category: 'mechanical',
    isInstalled: false,
  },
  {
    id: 'mirrors',
    name: 'Mirrors',
    category: 'accessories',
    isInstalled: true,
  },
];

export default function PartsPanel() {
  const bodyParts = MOCK_PARTS;

  const handlePartClick = (id: string) => {
    // TOOD
    return id;
  };

  return (
    <div className={partsPanelContainer}>
      <section className={partsPanelSection}>
        <h3 className={partsPanelSectionTitle}>Body Parts</h3>
        {bodyParts.map((part) => (
          <PartsItemCard
            key={part.id}
            title={part.name}
            subtitle={part.isInstalled ? 'Installed' : 'Not installed'}
            variant={part.isInstalled ? 'default' : 'disabled'}
            onClick={() => handlePartClick(part.id)}
          />
        ))}
      </section>
    </div>
  );
}
