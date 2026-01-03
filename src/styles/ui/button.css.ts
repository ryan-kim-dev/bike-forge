import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';

const focusRing = `0 0 0 3px ${vars.color.ring}`;

/**
 * Button recipe with variant and size options
 *
 * Usage:
 *   button({ variant: 'primary', size: 'md' })
 *   button({ variant: 'ghost', size: 'lg' })
 */
export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space['2'],

    fontFamily: vars.font.role.uiBrand,
    fontWeight: vars.font.weight.semibold,
    letterSpacing: vars.font.letterSpacing.normal,
    lineHeight: vars.font.lineHeight.tight,

    border: `1px solid ${vars.color.border}`,
    background: vars.color.card,
    color: vars.color.cardForeground,

    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    whiteSpace: 'nowrap',

    transition:
      'transform 120ms ease, background 120ms ease, border-color 120ms ease, box-shadow 120ms ease',

    selectors: {
      '&:hover': {
        transform: 'translateY(-1px)',
      },
      '&:active': {
        transform: 'translateY(0px)',
      },
      '&:focus-visible': {
        outline: 'none',
        boxShadow: focusRing,
      },
      '&:disabled': {
        opacity: 0.55,
        cursor: 'not-allowed',
        transform: 'none',
      },
    },
  },

  variants: {
    variant: {
      primary: {
        background: vars.color.primary,
        color: vars.color.primaryForeground,
        borderColor: 'transparent',
        selectors: {
          '&:hover': {
            background: vars.color.primary,
          },
        },
      },
      secondary: {
        background: vars.color.accent,
        color: vars.color.accentForeground,
        borderColor: 'transparent',
      },
      ghost: {
        background: 'transparent',
        color: vars.color.foreground,
        borderColor: 'transparent',
        selectors: {
          '&:hover': {
            background: vars.color.accent,
          },
        },
      },
    },

    size: {
      sm: {
        height: '34px',
        paddingLeft: vars.space['3'],
        paddingRight: vars.space['3'],
        fontSize: vars.font.size.sm,
        borderRadius: vars.radius.sm,
      },
      md: {
        height: '40px',
        paddingLeft: vars.space['4'],
        paddingRight: vars.space['4'],
        fontSize: vars.font.size.base,
        borderRadius: vars.radius.md,
      },
      lg: {
        height: '46px',
        paddingLeft: vars.space['6'],
        paddingRight: vars.space['6'],
        fontSize: vars.font.size.lg,
        borderRadius: vars.radius.lg,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
