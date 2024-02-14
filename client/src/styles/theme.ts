import { css, SerializedStyles } from '@emotion/react';

const fontCreator = (
  fontSize: string,
  fontWeight: number,
  lineHeight: string
): SerializedStyles => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

export const theme = {
  color: {
    coral800: '#EB4F27',
    coral700: '#ED774D',
    coral600: '#F1A187',
    coral500: '#F2BEAD',
    coral400: '#FFD7CA',
    coral300: '#FFE6DE',
    coral200: '#FFF3EF',
    coral100: '#FFFAF8',
    gray900: '#121212',
    gray800: '#414447',
    gray700: '#5C656C',
    gray600: '#9199A4',
    gray500: '#B4BCC6',
    gray400: '#D0DAE3',
    gray300: '#E5E9ED',
    gray200: '#F1F5F8',
    gray100: '#F9F9FA',
    error: '#BD2222',
    success: '#0CBC72'
  },
  font: {
    subtitle1: fontCreator('40px', 700, '150%'),
    subtitle2: fontCreator('32px', 700, '150%'),
    subtitle3: fontCreator('28px', 700, '150%'),
    subtitle4: fontCreator('24px', 700, '150%'),
    subtitle5b: fontCreator('20px', 700, '150%'),
    subtitle5r: fontCreator('20px', 400, '150%'),

    body1b: fontCreator('18px', 700, '150%'),
    body1r: fontCreator('18px', 400, '150%'),
    body2b: fontCreator('16px', 700, '150%'),
    body2r: fontCreator('16px', 400, '150%'),
    body3b: fontCreator('14px', 700, '160%'),
    body3r: fontCreator('14px', 500, '160%'),

    caption1b: fontCreator('12px', 700, '150%'),
    caption1l: fontCreator('12px', 300, '150%'),
    caption2b: fontCreator('10px', 700, '160%'),
    caption2r: fontCreator('10px', 400, '160%')
  },
  shadow: css`
    box-shadow: 0px 2px 24px 0 rgba(0, 0, 0, 0.06);
  `
};

// export type fontKeys = keyof typeof theme.font;
// export type ColorKeys = keyof typeof theme.color;
