'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSeriesByMaker, getModelCards, ModelCard } from '@/lib/apis';

type Props = {
  makers: string[];
};

export default function FiltersPanel(props: Props) {
  const router = useRouter();

  // 서버로부터 받는 상태 - 향후 필요시 분리
  const [series, setSeries] = useState<string[]>([]);
  const [modelCards, setModelCards] = useState<ModelCard[]>([]);
  // UI 상태
  const [selectedMaker, setSelectedMaker] = useState('');

  const onSelectMaker = async (maker: string) => {
    setSelectedMaker(maker);
    // 선택한 제조사가 변경되면 하위데이터 state값을 초기화
    setSeries([]);

    const seriesData = await getSeriesByMaker(maker);
    setSeries(seriesData);
  };

  const onSelectSeries = async (seriesName: string) => {
    const modelCardData = await getModelCards(selectedMaker, seriesName);
    setModelCards(modelCardData);
  };

  const onSelectModel = (slug: string) => {
    router.push(`/editor/${slug}`);
  };

  return (
    <div>
      <ul>
        {props.makers.map((maker) => {
          return (
            <li key={maker}>
              <div>
                <button onClick={() => onSelectMaker(maker)}>{maker}</button>
              </div>
            </li>
          );
        })}
      </ul>
      {series.length !== 0 && (
        <ul>
          {series.map((seriesName) => {
            return (
              <li key={seriesName}>
                <button onClick={() => onSelectSeries(seriesName)}>
                  {seriesName}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <section>
        {modelCards.length !== 0 && (
          <ul>
            {modelCards.map((modelCard) => {
              return (
                <li key={modelCard.slug}>
                  {/* CardItem이 될 것임. 차후 별도 컴포넌트로 분리? */}
                  <button onClick={() => onSelectModel(modelCard.slug)}>
                    {modelCard.slug}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
