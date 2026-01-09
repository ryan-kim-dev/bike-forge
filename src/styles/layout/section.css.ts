import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';
import { media } from '../media';

export const section = style({
  paddingTop: vars.space['12'],
  paddingBottom: vars.space['12'],
  '@media': {
    [media.up.md]: {
      paddingTop: vars.space['16'],
      paddingBottom: vars.space['16'],
    },
    [media.up.lg]: {
      paddingTop: '80px',
      paddingBottom: '80px',
    },
  },
});

export const sectionTight = style({
  paddingTop: vars.space['8'],
  paddingBottom: vars.space['8'],
  '@media': {
    [media.up.md]: {
      paddingTop: vars.space['12'],
      paddingBottom: vars.space['12'],
    },
    [media.up.lg]: {
      paddingTop: vars.space['16'],
      paddingBottom: vars.space['16'],
    },
  },
});

export const sectionLoose = style({
  paddingTop: vars.space['16'],
  paddingBottom: vars.space['16'],
  '@media': {
    [media.up.md]: {
      paddingTop: '80px',
      paddingBottom: '80px',
    },
    [media.up.lg]: {
      paddingTop: '112px',
      paddingBottom: '112px',
    },
  },
});
