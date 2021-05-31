import {} from 'styled-components';
import { defaultTheme } from 'theme/defaultTheme';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
