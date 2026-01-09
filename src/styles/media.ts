export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

type BreakpointKey = keyof typeof breakpoints;

const px = (n: number) => `${n}px`;
// max-width는 경계 충돌을 피하려고 0.02px를 뺌
const downPx = (n: number) => `${n - 0.02}px`;

/**
 * up: 모바일 퍼스트
 * down: 데스크탑 퍼스트
 */
export const media = {
  up: {
    sm: `screen and (min-width: ${px(breakpoints.sm)})`,
    md: `screen and (min-width: ${px(breakpoints.md)})`,
    lg: `screen and (min-width: ${px(breakpoints.lg)})`,
    xl: `screen and (min-width: ${px(breakpoints.xl)})`,
  },
  down: {
    sm: `screen and (max-width: ${downPx(breakpoints.sm)})`,
    md: `screen and (max-width: ${downPx(breakpoints.md)})`,
    lg: `screen and (max-width: ${downPx(breakpoints.lg)})`,
    xl: `screen and (max-width: ${downPx(breakpoints.xl)})`,
  },
  between: (min: BreakpointKey, max: BreakpointKey) =>
    `screen and (min-width: ${px(breakpoints[min])}) and (max-width: ${downPx(
      breakpoints[max]
    )})`,
} as const;
