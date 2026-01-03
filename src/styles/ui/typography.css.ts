import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';

/**
 * Text recipe with variant options for different text styles
 *
 * Usage:
 *   text({ variant: 'h1' })
 *   text({ variant: 'body', muted: true })
 *   text({ variant: 'caption' })
 */
export const text = recipe({
  base: {
    margin: 0,
    color: vars.color.foreground,
    fontFamily: vars.font.role.body,
    fontSize: vars.font.size.base,
    lineHeight: vars.font.lineHeight.normal,
    letterSpacing: vars.font.letterSpacing.normal,
  },

  variants: {
    variant: {
      body: {
        fontFamily: vars.font.role.body,
        fontSize: vars.font.size.base,
        lineHeight: vars.font.lineHeight.normal,
        letterSpacing: vars.font.letterSpacing.normal,
      },
      ui: {
        // UI 타이틀/버튼 라벨 등에 쓰기 좋은 "중립적인 UI 폰트"
        fontFamily: vars.font.role.uiBrand,
        fontSize: vars.font.size.base,
        lineHeight: vars.font.lineHeight.normal,
        letterSpacing: vars.font.letterSpacing.normal,
      },
      caption: {
        fontFamily: vars.font.role.body,
        fontSize: vars.font.size.sm,
        lineHeight: vars.font.lineHeight.normal,
        color: vars.color.mutedForeground,
      },
      label: {
        fontFamily: vars.font.role.uiBrand,
        fontSize: vars.font.size.sm,
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
        fontWeight: vars.font.weight.medium,
      },
      h1: {
        fontFamily: vars.font.role.uiBrand,
        fontSize: vars.font.size['4xl'],
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
        fontWeight: vars.font.weight.bold,
      },
      h2: {
        fontFamily: vars.font.role.uiBrand,
        fontSize: vars.font.size['2xl'],
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
        fontWeight: vars.font.weight.semibold,
      },
      h3: {
        fontFamily: vars.font.role.uiBrand,
        fontSize: vars.font.size.xl,
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
        fontWeight: vars.font.weight.semibold,
      },
      logo: {
        // 로고 텍스트 전용
        fontFamily: vars.font.role.logo,
        fontSize: vars.font.size.xl,
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
        fontWeight: vars.font.weight.bold,
      },
    },

    muted: {
      true: {
        color: vars.color.mutedForeground,
      },
    },
  },

  defaultVariants: {
    variant: 'body',
  },
});
