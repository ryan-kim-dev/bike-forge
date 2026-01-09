import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';
import { media } from '../media';

/**
 * Header - sticky navigation bar
 */
export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: vars.z.header,
  width: '100%',
  borderBottom: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  backdropFilter: 'blur(8px)',
});

/**
 * Header container - content wrapper
 */
export const headerContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1280px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.space['4'],
  paddingRight: vars.space['4'],
  height: '64px',

  '@media': {
    [media.up.md]: {
      paddingLeft: vars.space['6'],
      paddingRight: vars.space['6'],
    },
    [media.up.lg]: {
      paddingLeft: vars.space['8'],
      paddingRight: vars.space['8'],
    },
  },
});

/**
 * Header logo
 */
export const headerLogo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space['2'],
  textDecoration: 'none',
  color: vars.color.foreground,
  fontFamily: vars.font.role.logo,
  fontSize: vars.font.size.xl,
  fontWeight: vars.font.weight.bold,
  transition: 'color 150ms ease',

  selectors: {
    '&:hover': {
      color: vars.color.primary,
    },
  },
});

/**
 * Header logo icon
 */
export const headerLogoIcon = style({
  width: '32px',
  height: '32px',
  fill: 'currentColor',
  transition: 'fill 150ms ease',
});

/**
 * Header navigation
 */
export const headerNav = style({
  display: 'none',
  alignItems: 'center',
  gap: vars.space['6'],

  '@media': {
    [media.up.md]: {
      display: 'flex',
    },
  },
});

/**
 * Header navigation link
 */
export const headerNavLink = style({
  fontFamily: vars.font.role.uiBrand,
  fontSize: vars.font.size.base,
  fontWeight: vars.font.weight.medium,
  color: vars.color.foreground,
  textDecoration: 'none',
  transition: 'color 150ms ease',
  position: 'relative',

  selectors: {
    '&:hover': {
      color: vars.color.primary,
    },
    '&:after': {
      content: '',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '0%',
      height: '2px',
      background: vars.color.primary,
      transition: 'width 200ms ease',
    },
    '&:hover:after': {
      width: '100%',
    },
  },
});

/**
 * Header actions (buttons)
 */
export const headerActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space['2'],
});
