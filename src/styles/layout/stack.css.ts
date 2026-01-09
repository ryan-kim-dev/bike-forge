import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';

/**
 * Stack recipe for flexbox layouts
 *
 * Usage:
 *   stack({ direction: 'column', gap: '4' })
 *   stack({ direction: 'row', align: 'center', justify: 'between' })
 */
export const stack = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },

    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },

    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },

    gap: {
      '0': {
        gap: vars.space['0'],
      },
      '1': {
        gap: vars.space['1'],
      },
      '2': {
        gap: vars.space['2'],
      },
      '3': {
        gap: vars.space['3'],
      },
      '4': {
        gap: vars.space['4'],
      },
      '6': {
        gap: vars.space['6'],
      },
      '8': {
        gap: vars.space['8'],
      },
      '12': {
        gap: vars.space['12'],
      },
      '16': {
        gap: vars.space['16'],
      },
    },

    wrap: {
      true: {
        flexWrap: 'wrap',
      },
      false: {
        flexWrap: 'nowrap',
      },
    },
  },

  defaultVariants: {
    direction: 'column',
    gap: '4',
  },
});
