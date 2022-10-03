// import { pxToRem } from './utils';
export const baseFontSize = 16;

export function pxToRem(px: number) {
  return px / baseFontSize + 'rem';
}

export const zIndex = {
  nav: 10,
};

export const colors = {
  text: '#2c3e50',
  textDark: 'black',
  mainColor: '#121a3e',
  logo: '#fc0',
  menuActive: '#ff0',
};

export const gap = {
  small: '5px',
  original: '8px',
  general: '16px',
  section: '24px',
};

export const radius = {
  general: '5px',
};

export const fontSize = {
  original: pxToRem(16),
  regular: pxToRem(18),
  medium: pxToRem(22),
  logo: pxToRem(26),
  menuLarge: pxToRem(38),
};

export const width = {
  mobile: '320px',
  tablet: '600px',
  desktop: '768px',
  headerMax: '1090px',
  maximum: '1470px',
};

export const media = {
  tablet: `@media (min-width: ${width.tablet})`,
  desktop: `@media (min-width: ${width.desktop})`,
  maxWidth: `@media (min-width: ${width.maximum})`,
};
