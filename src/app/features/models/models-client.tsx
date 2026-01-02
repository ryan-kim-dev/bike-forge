'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Maker } from '@/lib/apis';
import { useModelCards, useSeriesByMaker } from '@/lib/useQueries';
import FiltersPanel from './filters-panel';
import ModelGrid from './model-grid';

type Props = { makers: Maker[] };

export default function ModelsClient({ makers }: Props) {
  const router = useRouter();

  // UI 상태
  const [selectedMaker, setSelectedMaker] = useState<string | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);

  // 서버 상태
  const seriesQuery = useSeriesByMaker(selectedMaker); // maker 선택 시 series 목록 로드
  const cardsQuery = useModelCards(
    selectedMaker ? { maker: selectedMaker, series: selectedSeries } : null
  ); // maker만 선택돼도 전체 series의 cards 로드, series 선택 시 필터 적용

  const onSelectMaker = (maker: string) => {
    setSelectedMaker(maker);
    setSelectedSeries(null); // maker 바뀌면 필터 리셋 -> 즉시 전체 노출
  };

  const onSelectSeries = (seriesName: string | null) => {
    setSelectedSeries(seriesName); // 필터 적용
  };

  const onSelectModel = (slug: string) => {
    router.push(`/editor/${slug}`);
  };

  const series = useMemo(() => seriesQuery.data ?? [], [seriesQuery.data]);
  const cards = useMemo(() => cardsQuery.data ?? [], [cardsQuery.data]);

  return (
    <div>
      <header>
        <h1>Choose Your Motorcycle</h1>
        <p>Select a model to start customizing in 3D.</p>
      </header>

      <div>
        <aside>
          <FiltersPanel
            makers={makers}
            selectedMaker={selectedMaker}
            onSelectMaker={onSelectMaker}
            series={series}
            seriesState={{
              isLoading: seriesQuery.isLoading,
              isError: seriesQuery.isError,
            }}
            selectedSeries={selectedSeries}
            onSelectSeries={onSelectSeries}
          />
        </aside>

        <main>
          <ModelGrid
            cards={cards}
            isLoading={cardsQuery.isLoading}
            isError={cardsQuery.isError}
            onSelectModel={onSelectModel}
          />
        </main>
      </div>
    </div>
  );
}
