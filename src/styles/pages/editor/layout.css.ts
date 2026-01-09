import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const editorRoot = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: vars.color.background,
});

export const editorHeader = style({
  height: 56,
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${vars.space['4']}`,
  borderBottom: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  zIndex: 100,
});

// export const topBar = style({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   height: TOPBAR_H,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: `0 ${vars.space?.['4'] ?? '16px'}`,
//   borderBottom: `1px solid ${vars.color.border}`,
//   background: vars.color.background,
//   zIndex: 30,

//   '@media': {
//     [media.down.md]: {
//       // 모바일에서는 상단바를 조금 더 “툴바”처럼 간단히
//       padding: `0 ${vars.space?.['3'] ?? '12px'}`,
//     },
//   },
// });
