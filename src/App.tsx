import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Root } from 'pages/Root';
import { defaultTheme } from 'theme/defaultTheme';

const App = (): React.ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Root />
    </ThemeProvider>
  );
};

export default App;
