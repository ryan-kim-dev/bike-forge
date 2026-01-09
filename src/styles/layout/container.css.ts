import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';
import { media } from '../media';

/**
 * Container recipe with size options
 *
 * Usage:
 *   container()                    // default size
 *   container({ size: 'wide' })
 *   container({ size: 'full' })
 */
export const container = recipe({
  base: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: vars.space['4'],
    paddingRight: vars.space['4'],
    '@media': {
      [media.up.md]: {
        paddingLeft: vars.space['6'],
        paddingRight: vars.space['6'],
      },
      [media.up.lg]: {
        paddingLeft: vars.space['8'],
        paddingRight: vars.space['8'],
      },
    },
  },

  variants: {
    size: {
      default: {
        maxWidth: '1120px',
      },
      wide: {
        maxWidth: '1280px',
      },
      full: {
        maxWidth: '100%',
      },
    },
  },

  defaultVariants: {
    size: 'default',
  },
});
