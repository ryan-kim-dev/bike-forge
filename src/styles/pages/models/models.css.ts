import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';
import { media } from '../../media';

/**
 * 모바일 - 세로 배치 (필터가 위, 그리드가 아래)
 * 데스크톱 - 가로 배치 (필터 좌측 고정, 그리드 우측)
 */
export const modelsContentLayout = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.space['8'],

  '@media': {
    [media.up.lg]: {
      // 1024px 이상: 사이드바 + 메인 컨텐츠
      gridTemplateColumns: '280px 1fr',
      gap: vars.space['12'],
    },
  },
});
