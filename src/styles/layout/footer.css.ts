import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';
import { media } from '../media';

/**
 * Footer
 */
export const footer = style({
  width: '100%',
  borderTop: `1px solid ${vars.color.border}`,
  background: vars.color.card,
  marginTop: vars.space['16'],
});

/**
 * Footer container
 */
export const footerContainer = style({
  width: '100%',
  maxWidth: '1280px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.space['4'],
  paddingRight: vars.space['4'],
  paddingTop: vars.space['12'],
  paddingBottom: vars.space['8'],

  '@media': {
    [media.md]: {
      paddingLeft: vars.space['6'],
      paddingRight: vars.space['6'],
    },
    [media.lg]: {
      paddingLeft: vars.space['8'],
      paddingRight: vars.space['8'],
    },
  },
});

/**
 * Footer top section
 */
export const footerTop = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.space['8'],
  marginBottom: vars.space['12'],

  '@media': {
    [media.md]: {
      gridTemplateColumns: '2fr 3fr',
      gap: vars.space['12'],
    },
  },
});

/**
 * Footer brand section
 */
export const footerBrand = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['4'],
});

/**
 * Footer description
 */
export const footerDescription = style({
  fontFamily: vars.font.role.body,
  fontSize: vars.font.size.base,
  color: vars.color.mutedForeground,
  lineHeight: vars.font.lineHeight.relaxed,
  maxWidth: '320px',
});

/**
 * Footer links container
 */
export const footerLinks = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space['8'],

  '@media': {
    [media.md]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

/**
 * Footer link group
 */
export const footerLinkGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['3'],
});

/**
 * Footer link group title
 */
export const footerLinkTitle = style({
  fontFamily: vars.font.role.uiBrand,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.foreground,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: vars.space['1'],
});

/**
 * Footer link
 */
export const footerLink = style({
  fontFamily: vars.font.role.body,
  fontSize: vars.font.size.base,
  color: vars.color.mutedForeground,
  textDecoration: 'none',
  transition: 'color 150ms ease',

  selectors: {
    '&:hover': {
      color: vars.color.primary,
    },
  },
});

/**
 * Footer bottom section
 */
export const footerBottom = style({
  paddingTop: vars.space['8'],
  borderTop: `1px solid ${vars.color.border}`,
});

/**
 * Footer copyright
 */
export const footerCopyright = style({
  fontFamily: vars.font.role.body,
  fontSize: vars.font.size.sm,
  color: vars.color.mutedForeground,
  textAlign: 'center',

  '@media': {
    [media.md]: {
      textAlign: 'left',
    },
  },
});
