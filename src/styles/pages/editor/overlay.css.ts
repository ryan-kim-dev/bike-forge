import { media } from './../../media';
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const editorPage = style({
  position: 'relative',
  width: '100vw',
  height: '100dvh',
  overflow: 'hidden',
  background: vars.color.background,
  color: vars.color.foreground,

  vars: {
    '--panel-w': '360px',
    '--handle-w': '40px',
    '--handle-h': '44px',
    '--handle-out': '24px',

    '--bottom-h': '320px',
  },
});

export const canvasLayer = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
});

/* ---------------- Desktop overlay panels ---------------- */

export const panelBase = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: 'var(--panel-w)',
  background: vars.color.muted,
  borderColor: vars.color.border,
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 200ms ease',
  willChange: 'transform',
  zIndex: 20,

  '@media': {
    [media.down.md]: {
      display: 'none', // 모바일에서는 좌/우 패널 숨김 (하단 패널로 대체)
    },
  },
});

export const panelSurface = style({
  height: '100%',
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const leftPanel = style([
  panelBase,
  {
    left: 0,
    borderRight: `1px solid ${vars.color.border}`,
  },
]);

export const rightPanel = style([
  panelBase,
  {
    right: 0,
    borderLeft: `1px solid ${vars.color.border}`,
  },
]);

export const leftClosed = style({
  transform: 'translateX(calc(-100% + var(--handle-w) + var(--handle-out)))',
});

export const rightClosed = style({
  transform: 'translateX(calc(100% - var(--handle-w) - var(--handle-out)))',
});

export const panelHeader = style({
  padding: `${vars.space?.['3'] ?? '12px'} ${vars.space?.['4'] ?? '16px'}`,
  borderBottom: `1px solid ${vars.color.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
});

export const panelBody = style({
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  padding: `${vars.space?.['3'] ?? '12px'} ${vars.space?.['4'] ?? '16px'}`,
});

/* 돌출 핸들 (PC) */
export const panelHandleBase = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 'var(--handle-w)',
  height: 'var(--handle-h)',

  borderRadius: 12,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
  transition: 'transform 120ms ease, background 120ms ease',
  willChange: 'transform',
});

export const leftHandle = style([
  panelHandleBase,
  {
    right: 'calc(-1 * var(--handle-out))',
  },
]);

export const rightHandle = style([
  panelHandleBase,
  {
    left: 'calc(-1 * var(--handle-out))',
  },
]);

export const handleArrow = style({
  fontSize: 16,
  lineHeight: 1,
  color: vars.color.foreground,
});

/* ---------------- 모바일 bottom panel ---------------- */

export const bottomPanel = style({
  display: 'none',

  '@media': {
    [media.down.md]: {
      display: 'flex',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,

      height: 'var(--bottom-h)',
      flexDirection: 'column',

      background: vars.color.muted,
      borderTop: `1px solid ${vars.color.border}`,
      zIndex: 40,

      transition: 'transform 200ms ease',
      willChange: 'transform',
    },
  },
});

export const bottomClosed = style({
  '@media': {
    [media.down.md]: {
      // 닫혀 있을 때도 “탭/핸들” 높이만 남김
      transform: 'translateY(calc(100% - 44px))',
    },
  },
});

export const bottomHandleRow = style({
  display: 'none',

  '@media': {
    [media.down.md]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 44,
      borderBottom: `1px solid ${vars.color.border}`,
      background: vars.color.background,
    },
  },
});

export const bottomGrabber = style({
  width: 44,
  height: 5,
  borderRadius: 999,
  background: vars.color.border,
  opacity: 0.9,
});

export const bottomTabs = style({
  display: 'none',

  '@media': {
    [media.down.md]: {
      display: 'flex',
      gap: 8,
      padding: '10px 12px',
      borderBottom: `1px solid ${vars.color.border}`,
      background: vars.color.background,
    },
  },
});

export const bottomTab = style({
  flex: 1,
  height: 36,
  borderRadius: 10,
  border: `1px solid ${vars.color.border}`,
  background: 'transparent',
  cursor: 'pointer',
});

export const bottomTabActive = style({
  background: vars.color.background,
});

export const bottomContent = style({
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  padding: 12,
});
