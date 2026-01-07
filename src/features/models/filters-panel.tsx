import type { Maker } from '@/lib/apis';
import { Button } from '@/components/ui/button';
import { text } from '@/styles/ui/typography.css';
import { filterButton } from '@/styles/ui/filter-button.css';
import {
  filtersPanelContainer,
  filterSection,
  filterSectionHeader,
  filterSectionHeaderRow,
  filterList,
  filterStateMessage,
} from '@/styles/pages/models/filters-panel.css';

type Props = {
  makers: Maker[];
  selectedMaker: string | null;
  onSelectMaker: (maker: string) => void;

  series: string[];
  seriesState: { isLoading: boolean; isError: boolean };
  selectedSeries: string | null;
  onSelectSeries: (seriesName: string | null) => void;
};

export default function FiltersPanel({
  makers,
  selectedMaker,
  onSelectMaker,
  series,
  seriesState,
  selectedSeries,
  onSelectSeries,
}: Props) {
  return (
    <div className={filtersPanelContainer}>
      {/* 모델 검색 필터 패널영역 타이틀 */}
      <h2 className={text({ variant: 'h3' })}>Filters</h2>

      {/* 제조사 섹션 */}
      <section className={filterSection}>
        <div className={filterSectionHeader}>Manufacturer</div>
        <ul className={filterList}>
          {makers.map((maker) => {
            const isActive = maker === selectedMaker;
            return (
              <li key={maker}>
                <button
                  type="button"
                  className={filterButton({ active: isActive })}
                  onClick={() => onSelectMaker(maker)}
                >
                  {maker}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 시리즈 섹션 - 선택된 제조사가 존재할 경우만 visible */}
      {selectedMaker && (
        <section className={filterSection}>
          <div className={filterSectionHeaderRow}>
            <div className={filterSectionHeader}>Series</div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onSelectSeries(null)}
              disabled={!selectedSeries}
            >
              Clear
            </Button>
          </div>

          {seriesState.isLoading && (
            <p className={filterStateMessage}>Loading series…</p>
          )}
          {seriesState.isError && (
            <p className={filterStateMessage}>Failed to load series.</p>
          )}

          {!seriesState.isLoading && !seriesState.isError && (
            <ul className={filterList}>
              {series.map((name) => {
                const isActive = name === selectedSeries;
                return (
                  <li key={name}>
                    <button
                      type="button"
                      className={filterButton({ active: isActive })}
                      onClick={() => onSelectSeries(name)}
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
