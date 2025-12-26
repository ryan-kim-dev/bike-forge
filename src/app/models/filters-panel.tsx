'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useModelCards, useSeriesByMaker } from '@/lib/useQueries';
import { Maker } from '@/lib/apis';

type Props = {
  makers: Maker[];
};

export default function FiltersPanel({ makers }: Props) {
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

  const onSelectSeries = (seriesName: string) => {
    setSelectedSeries(seriesName); // 필터 적용
  };

  const onSelectModel = (slug: string) => {
    router.push(`/editor/${slug}`);
  };

  return (
    <div>
      {/* Makers */}
      <ul>
        {makers.map((maker) => (
          <li key={maker}>
            <button onClick={() => onSelectMaker(maker)}>{maker}</button>
          </li>
        ))}
      </ul>

      {/* Series */}
      {selectedMaker && (
        <section>
          {seriesQuery.isLoading && <p>Loading series…</p>}
          {seriesQuery.isError && <p>Failed to load series.</p>}

          {seriesQuery.data && seriesQuery.data.length > 0 && (
            <ul>
              {seriesQuery.data.map((seriesName) => (
                <li key={seriesName}>
                  <button onClick={() => onSelectSeries(seriesName)}>
                    {seriesName}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Model cards */}
      <section>
        {cardsQuery.isLoading && <p>Loading models…</p>}
        {cardsQuery.isError && <p>Failed to load models.</p>}

        {cardsQuery.data && cardsQuery.data.length > 0 && (
          <ul>
            {cardsQuery.data.map((card) => (
              <li key={card.slug}>
                <button onClick={() => onSelectModel(card.slug)}>
                  {card.slug}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
