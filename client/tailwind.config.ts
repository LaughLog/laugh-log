import type { Config } from 'tailwindcss';

const fontCreator = (fontSize: string, fontWeight: number) => {
  return {
    css: {
      fontSize,
      fontWeight
    }
  };
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      desktop: '1440px',
      laptop: '992px',
      tablet: '768px',
      mobile: '576px'
    },
    extend: {
      colors: {
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
      fontSize: {
        subtitle1: ['40px', { lineHeight: '1.5', fontWeight: 700 }],
        subtitle2: ['32px', { lineHeight: '1.5', fontWeight: 700 }],
        subtitle3: ['28px', { lineHeight: '1.5', fontWeight: 700 }],
        subtitle4: ['24px', { lineHeight: '1.5', fontWeight: 700 }],
        subtitle5: ['20px', { lineHeight: '1.5', fontWeight: 700 }],
        body1b: ['18px', { lineHeight: '1.5', fontWeight: 700 }],
        body1r: ['18px', { lineHeight: '1.5', fontWeight: 400 }],
        body2b: ['16px', { lineHeight: '1.5', fontWeight: 700 }],
        body2r: ['16px', { lineHeight: '1.5', fontWeight: 400 }],
        body3b: ['14px', { lineHeight: '1.6', fontWeight: 700 }],
        body3r: ['14px', { lineHeight: '1.6', fontWeight: 400 }],
        caption1b: ['12px', { lineHeight: '1.6', fontWeight: 700 }],
        caption1r: ['12px', { lineHeight: '1.6', fontWeight: 400 }],
        caption2b: ['10px', { lineHeight: '1.5', fontWeight: 700 }]
      }
    }
  },
  plugins: []
};
export default config;
