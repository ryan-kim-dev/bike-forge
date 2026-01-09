import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('html', {
  fontSize: vars.font.size.base,
});

globalStyle('body', {
  margin: 0,
  background: vars.color.background,
  color: vars.color.foreground,
  WebkitFontSmoothing: 'antialiased',
  fontFamily: vars.font.family.sans,
  fontVariationSettings: `"wght" ${vars.font.weight.normal}`,
  lineHeight: vars.font.lineHeight.normal,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
