import type { Maker } from '@/lib/apis';

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
    <div>
      <h2>Filters</h2>

      <section>
        <div>Manufacturer</div>
        <ul>
          {makers.map((maker) => {
            // TODO: 조건부 스타일링
            // const active = maker === selectedMaker;
            return (
              <li key={maker}>
                <button type="button" onClick={() => onSelectMaker(maker)}>
                  {maker}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {selectedMaker && (
        <section>
          <div>
            <div>Series</div>
            <button
              type="button"
              onClick={() => onSelectSeries(null)}
              disabled={!selectedSeries}
            >
              Clear
            </button>
          </div>

          {seriesState.isLoading && <p>Loading series…</p>}
          {seriesState.isError && <p>Failed to load series.</p>}

          {!seriesState.isLoading && !seriesState.isError && (
            <ul>
              {series.map((name) => {
                // TODO: 조건부 스타일링
                // const active = name === selectedSeries;
                return (
                  <li key={name}>
                    <button type="button" onClick={() => onSelectSeries(name)}>
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
