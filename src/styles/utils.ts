import { baseFontSize } from './theme';

export const pxToRem = (px: number) => {
  return px / baseFontSize + 'rem';
};
