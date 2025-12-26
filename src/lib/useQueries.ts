import { useQuery } from '@tanstack/react-query';
import { getModelCards, getSeriesByMaker, ModelCard, Series } from '@/lib/apis';

export type ModelCardsKeyParams = {
  maker: string;
  series: string | null; // null인 경우: 해당 메이커의 전체 시리즈를 요청하기 위함
};

/**
 * 캐시 키 관리
 *
 * 불필요한 리페치/캐시 충동 방지를 위해 '캐시 단위 = 데이터 단위'로 맞춘다.
 * makers는 maker 목록이라는 하나의 데이터셋
 * series는 maker가 바뀌면 완전히 다른 데이터셋
 * modelCards는 maker/series 조합이 바뀌면 다른 결과셋
 * variant는 slug가 바뀌면 다른 단일 리소스
 *
 * 향후 부분 무효화 시 아래처럼
 * 특정 maker의 series만 다시 가져오기: invalidateQueries({ queryKey: ['series', maker] })
 * 모든 series를 한 번에 무효화: invalidateQueries({ queryKey: ['series'] }) (prefix 매칭)
 *
 * 향후 모델카드 필터가 늘어날 경우 확장 시
 * ['modelCards', { maker, series, year, country, sort, q }]
 */

/** 키값의 형태를 통일하고 일관성있게 undefined/null 기본값 처리를 위해 키를 만드는 책임을 통일시키기 위한 쿼리키 생성 팩토리함수 */
export const queryKeysFactory = {
  series: (maker: string) => ['series', maker] as const,
  modelCards: ({ maker, series }: ModelCardsKeyParams) =>
    ['modelCards', { maker, series: series ?? null }] as const,
  variant: (slug: string) => ['variant', slug] as const,
};

export function useSeriesByMaker(maker: string | null) {
  return useQuery<Series[], Error>({
    queryKey: maker ? queryKeysFactory.series(maker) : ['series', 'none'],
    queryFn: () => getSeriesByMaker(maker!),
    enabled: maker !== null,
  });
}

export function useModelCards(params: ModelCardsKeyParams | null) {
  return useQuery<ModelCard[], Error>({
    queryKey: params ? queryKeysFactory.modelCards(params) : ['modelCards'],
    queryFn: () => getModelCards(params!.maker, params!.series),
    enabled: params !== null,
  });
}
