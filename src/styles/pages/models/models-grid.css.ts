import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { media } from '@/styles/media';

// 1. Grid Container
export const modelsGridContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr', // 모바일: 1열
  gap: vars.space['6'], // 24px 간격

  '@media': {
    [media.up.md]: {
      gridTemplateColumns: 'repeat(2, 1fr)', // 태블릿: 2열
    },
    [media.up.lg]: {
      gridTemplateColumns: 'repeat(3, 1fr)', // 데스크톱: 3열
    },
  },
});

// 2. State Messages (loading, error, empty)
export const gridStateMessage = style({
  padding: vars.space['12'],
  textAlign: 'center',
  fontSize: vars.font.size.base,
  color: vars.color.mutedForeground,
});
