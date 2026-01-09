import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const partsCardContainer = style({
  padding: vars.space['3'],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.card,
});
