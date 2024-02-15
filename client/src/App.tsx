import { ThemeProvider } from '@emotion/react';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import Canvas from '@components/Canvas/Canvas';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Canvas />
    </ThemeProvider>
  );
}

export default App;
