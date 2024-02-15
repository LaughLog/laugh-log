import { ThemeProvider } from '@emotion/react';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import Canvas from '@components/Canvas/Canvas';
import Toolbar from '@components/Toolbar/Toolbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Canvas />
      <Toolbar />
    </ThemeProvider>
  );
}

export default App;
