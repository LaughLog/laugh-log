import type { Config } from 'tailwindcss';

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
      }
    }
  },
  plugins: []
};
export default config;
