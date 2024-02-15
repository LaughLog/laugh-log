import { Theme } from '@emotion/react';

import fontCreator from '@utils/fontCreator';

const theme: Theme = {
  color: {
    gray900: '#000',
    gray800: '#3f445c',
    gray700: '#3a7bdf',
    gray600: '#6195e6',
    gray500: '#b4bcc6',
    gray400: '#d0dae3',
    gray300: '#e5e9ed',
    gray200: '#f1f5f8',
    gray100: '#f9f9fa',
    error: '#cd2929',
    success: '#18df8c'
  },
  font: {
    subtitle1: fontCreator('40px', 700),
    subtitle2: fontCreator('32px', 700),
    subtitle3: fontCreator('28px', 700),
    subtitle4: fontCreator('24px', 700),
    subtitle5b: fontCreator('20px', 700),
    subtitle5r: fontCreator('20px', 400),

    body1b: fontCreator('18px', 700),
    body1r: fontCreator('18px', 400),
    body2b: fontCreator('16px', 700),
    body2r: fontCreator('16px', 400),
    body3b: fontCreator('14px', 700, '160%'),
    body3r: fontCreator('14px', 500, '160%'),

    caption1b: fontCreator('12px', 700),
    caption1l: fontCreator('12px', 300),
    caption2b: fontCreator('10px', 700, '160%'),
    caption2r: fontCreator('10px', 400, '160%')
  }
};

export default theme;
