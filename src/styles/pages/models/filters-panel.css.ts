import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';
import { media } from '../../media';

/**
 * FiltersPanel 컨테이너
 * - 전체 패널의 외곽 컨테이너
 */
export const filtersPanelContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['6'],

  // 데스크톱에서 sticky 위치 (스크롤해도 필터 고정)
  '@media': {
    [media.up.lg]: {
      position: 'sticky',
      top: vars.space['4'],
    },
  },
});

/**
 * 각 필터 섹션 (Manufacturer, Series)
 */
export const filterSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['3'],
});

/**
 * 섹션 헤더 (단일 라벨)
 */
export const filterSectionHeader = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.foreground,
  letterSpacing: vars.font.letterSpacing.normal,
  textTransform: 'uppercase',
  opacity: 0.7,
});

/**
 * 섹션 헤더 행 (라벨 + Clear 버튼)
 * Series 섹션에서 사용
 */
export const filterSectionHeaderRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space['2'],
});

/**
 * 필터 버튼 목록
 */
export const filterList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['1'],

  // li태그 기본스타일 제거
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

/**
 * 로딩/에러 메시지 스타일
 */
export const filterStateMessage = style({
  fontSize: vars.font.size.sm,
  color: vars.color.mutedForeground,
  fontStyle: 'italic',
  padding: `${vars.space['2']} ${vars.space['3']}`,
});
