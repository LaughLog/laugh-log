import '@emotion/react';
import { theme } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      gray900: string;
      gray800: string;
      gray700: string;
      gray600: string;
      gray500: string;
      gray400: string;
      gray300: string;
      gray200: string;
      gray100: string;
      error: string;
      success: string;
    };
    font: {
      subtitle1: SerializedStyles;
      subtitle2: SerializedStyles;
      subtitle3: SerializedStyles;
      subtitle4: SerializedStyles;
      subtitle5b: SerializedStyles;
      subtitle5r: SerializedStyles;

      body1b: SerializedStyles;
      body1r: SerializedStyles;
      body2b: SerializedStyles;
      body2r: SerializedStyles;
      body3b: SerializedStyles;
      body3r: SerializedStyles;

      caption1b: SerializedStyles;
      caption1l: SerializedStyles;
      caption2b: SerializedStyles;
      caption2r: SerializedStyles;
    };
    shadow: SerializedStyles;
  }
}
