import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/**
 * Model Card Styles
 * - Card는 <article> 태그로 semantic HTML 준수
 * - 내부에 Customize <Button>만 클릭 가능
 */

/**
 * Card Container (article)
 */
export const modelCard = style({
  display: 'flex',
  flexDirection: 'column',

  // Visual
  //   backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',

  transition: 'all 0.2s ease-in-out',

  ':hover': {
    // 살짝 들어올림 효과, hover 시 부드러운 그림자
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    borderColor: vars.color.primary,
  },

  ':focus-within': {
    borderColor: vars.color.primary,
    outline: `2px solid ${vars.color.ring}`,
    outlineOffset: 2,
  },
});

/**
 * Visual Area (16:9 비율 썸네일)
 */
export const modelCardVisual = style({
  position: 'relative',
  width: '100%',
  paddingBottom: '56.25%',
  backgroundColor: vars.color.muted,
  overflow: 'hidden',
});

/**
 * Visual - 실제 이미지 (thumbnailUrl이 있을 때)
 */
export const modelCardImage = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  // 이유: 16:9 비율 유지하며 이미지 채움
});

/**
 * Visual - Placeholder (thumbnailUrl이 없을 때)
 */
export const modelCardPlaceholder = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: vars.font.size.sm,
  color: vars.color.mutedForeground,
  fontFamily: vars.font.role.body,
});

/**
 * Content Area
 */
export const modelCardContent = style({
  padding: vars.space['4'],

  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['3'],
  flex: 1, // Content가 남은 공간 차지 (Customize 버튼을 하단으로 밀기)
});

/**
 * Model Name
 */
export const modelCardName = style({
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.foreground,
  fontFamily: vars.font.role.uiBrand,
  lineHeight: vars.font.lineHeight.tight,
});

/**
 * Meta Info (year · market · trim)
 */
export const modelCardMeta = style({
  fontSize: vars.font.size.sm,
  color: vars.color.mutedForeground,
  fontFamily: vars.font.role.body,
  lineHeight: vars.font.lineHeight.normal,
});

/**
 * CTA Button Wrapper
 * - full-width Button을 담는 컨테이너
 */
export const modelCardCta = style({
  // 카드 하단으로 버튼을 밀어냄 (flex: 1과 함께 작동)
  marginTop: 'auto',
  width: '100%',
});
