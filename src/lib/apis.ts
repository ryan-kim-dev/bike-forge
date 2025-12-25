export type Maker = string;

export type Series = string;

export type ModelCard = {
  slug: string;
  thumbnail_url: string | null;
  model_year: number;
  market: string;
  trim: string;
  model_identities: {
    canonical_name: string;
    maker: string;
    series_slug: string;
    model_slug: string;
  };
};

export type VariantDetail = {
  slug: string;
  source_url: string;
  meta_url: string | null;
  thumbnail_url: string | null;
  model_year: number;
  market: string;
  trim: string;
  model_identities: {
    canonical_name: string;
    maker: string;
    series_slug: string;
    model_slug: string;
  };
};

type GetMakers = () => Promise<Maker[]>;
type GetModelCards = (maker: string, series: string) => Promise<ModelCard[]>;
type GetSeriesByMaker = (maker: string) => Promise<Series[]>;
type GetModelVariants = (slug: string) => Promise<VariantDetail>;

const API_BASE = process.env.NEXT_PUBLIC_API_SERVER_URL;

/** 현재 DB에 존재하는 모든 모터사이클 메이커들을 불러오는 함수 */
export const getMakers: GetMakers = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/makers`, {
      cache: 'force-cache',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error(err);
  }
};

/** 선택한 메이커의 시리즈 목록을 불러오는 함수 */
export const getSeriesByMaker: GetSeriesByMaker = async (maker) => {
  try {
    const response = await fetch(`${API_BASE}/api/series?maker=${maker}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error(err);
  }
};

/** 현재 선택된 메이커와 시리즈에 해당하는 모델 정보를 불러오는 함수 */
export const getModelCards: GetModelCards = async (maker, series) => {
  const params = {
    maker,
    series,
  };
  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${API_BASE}/api/models?${queryString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error(err);
  }
};

/** 에디터에서 3d 모델링을 불러오기 위한 함수 */
export const getModelVariants: GetModelVariants = async (slug) => {
  try {
    const response = await fetch(`${API_BASE}/api/variants/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error(err);
  }
};
