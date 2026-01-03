export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const media = {
  sm: `screen and (min-width: ${breakpoints.sm}px)`,
  md: `screen and (min-width: ${breakpoints.md}px)`,
  lg: `screen and (min-width: ${breakpoints.lg}px)`,
  xl: `screen and (min-width: ${breakpoints.xl}px)`,
} as const;
