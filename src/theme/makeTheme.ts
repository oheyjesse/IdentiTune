import { Theme } from 'theme-ui';

const makeTheme = <ExactTheme extends Theme>(theme: ExactTheme): ExactTheme => theme;

export { makeTheme };
