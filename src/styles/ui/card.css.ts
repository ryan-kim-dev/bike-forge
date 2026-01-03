import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';

/**
 * Card recipe for content containers
 *
 * Usage:
 *   card()
 *   card({ padding: 'lg', interactive: true })
 */
export const card = recipe({
  base: {
    borderRadius: vars.radius.lg,
    border: `1px solid ${vars.color.border}`,
    background: vars.color.card,
  },

  variants: {
    padding: {
      none: {
        padding: '0',
      },
      sm: {
        padding: vars.space['4'],
      },
      md: {
        padding: vars.space['6'],
      },
      lg: {
        padding: vars.space['8'],
      },
    },

    interactive: {
      true: {
        cursor: 'pointer',
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        selectors: {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },

  defaultVariants: {
    padding: 'md',
  },
});

/**
 * Hero visual placeholder recipe
 */
export const heroVisual = recipe({
  base: {
    width: '100%',
    aspectRatio: '16 / 9',
    borderRadius: vars.radius.lg,
    border: `2px dashed ${vars.color.border}`,
    background: vars.color.muted,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  variants: {
    size: {
      default: {},
      large: {
        maxWidth: '1000px',
      },
    },
  },

  defaultVariants: {
    size: 'default',
  },
});

/**
 * Hero content (left side) recipe
 */
export const heroContent = recipe({
  base: {
    flex: '1',
    minWidth: '0',
  },

  variants: {},
});

/**
 * Hero visual container (right side) recipe
 */
export const heroVisualContainer = recipe({
  base: {
    flex: '1',
    minWidth: '0',
  },

  variants: {},
});

/**
 * Feature card recipe
 */
export const featureCard = recipe({
  base: {
    flex: '1',
    minWidth: '250px',
    padding: vars.space['6'],
    borderRadius: vars.radius.lg,
    border: `1px solid ${vars.color.border}`,
    background: vars.color.card,
  },

  variants: {
    variant: {
      default: {},
      highlighted: {
        borderColor: vars.color.primary,
        background: `color-mix(in srgb, ${vars.color.primary} 5%, ${vars.color.card})`,
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});
