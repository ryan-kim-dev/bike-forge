import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';

/**
 * Filter button recipe for FiltersPanel
 *
 * 체크박스 스타일의 필터 옵션 버튼
 * - 왼쪽에 체크박스 아이콘 표시
 * - active 상태에 따라 체크박스가 체크됨
 */
export const filterButton = recipe({
  base: {
    // Layout
    display: 'flex',
    alignItems: 'center',
    gap: vars.space['2'],

    width: '100%',
    textAlign: 'left',

    // Spacing
    padding: `${vars.space['2']} ${vars.space['3']}`,

    // Typography
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.normal,
    fontFamily: vars.font.role.body,

    // Visual
    borderRadius: vars.radius.md,
    border: '1px solid transparent',
    transition: 'background-color 0.15s ease-in-out',

    cursor: 'pointer',

    // Reset button styles
    background: 'none',
    color: vars.color.foreground,
    outline: 'none',

    // Hover state
    ':hover': {
      backgroundColor: vars.color.muted,
    },

    // Focus state (accessibility)
    ':focus-visible': {
      outline: `2px solid ${vars.color.ring}`,
      outlineOffset: '2px',
    },

    // Pseudo-element for checkbox
    '::before': {
      // 긴 텍스트에도 체크박스 크기 유지
      content: '""',
      flexShrink: 0,

      width: '16px',
      height: '16px',

      borderRadius: vars.radius.sm,
      border: `2px solid ${vars.color.border}`,
      transition: 'all 0.15s ease-in-out',
    },
  },

  variants: {
    active: {
      true: {
        // 선택된 항목 - 텍스트 강조
        fontWeight: vars.font.weight.semibold,

        // Checkbox checked state
        '::before': {
          backgroundColor: vars.color.primary,
          borderColor: vars.color.primary,

          // Checkmark icon (✓)
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M10.28 2.28 3.989 8.575 1.695 6.28A1 1 0 0 0 .28 7.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28 2.28z'/%3E%3C/svg%3E")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '10px',
        },
      },
      false: {
        // 미선택 상태 - 기본 스타일
        fontWeight: vars.font.weight.normal,

        '::before': {
          // 빈 체크박스
          backgroundColor: 'transparent',
        },
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
