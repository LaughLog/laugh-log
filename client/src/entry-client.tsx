import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '@styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
