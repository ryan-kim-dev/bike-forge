import { style } from '@vanilla-extract/css';
import { media } from '../media';
import { vars } from '../theme.css';

/**
 * Hero section responsive layout
 * Mobile (< 768px): column (stacked)
 * Desktop (≥ 768px): row (side-by-side)
 */
export const heroLayout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space['8'],

  '@media': {
    [media.up.md]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: vars.space['12'],
    },
  },
});

/**
 * Hero content - responsive alignment
 * Mobile: center aligned
 * Desktop: left aligned
 */
export const heroContentResponsive = style({
  flex: '1',
  minWidth: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space['6'],

  '@media': {
    [media.up.md]: {
      alignItems: 'flex-start',
    },
  },
});

/**
 * Hero visual container - responsive
 * Mobile: full width
 * Desktop: flex-based width
 */
export const heroVisualResponsive = style({
  flex: '1',
  minWidth: '0',
  width: '100%',

  '@media': {
    [media.up.md]: {
      width: 'auto',
    },
  },
});
