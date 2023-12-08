import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
  orangeA,
} from "@radix-ui/colors";

// 기존 색상과 새로운 색상 유형 추가
export type Colors = typeof colors.light & typeof colors.dark & typeof colors.gangwon;

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
  gangwon: {
    gangwonOrange:'#dd5828',
    gangwonYellow:'#fdb813',
    gangwonGreen: '#006058',
    gangwonBlack:'#00302b',

  },
};
