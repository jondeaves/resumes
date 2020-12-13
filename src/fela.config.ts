import { createRenderer, TEnhancer, TPlugin } from 'fela';
import fallbackValue from 'fela-plugin-fallback-value';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import prefixer from 'fela-plugin-prefixer';
import unit from 'fela-plugin-unit';

import theme from './common/themes/common';
import { fontSizeStr } from './common/helpers';

const plugins: TPlugin[] = [unit(), prefixer(), fallbackValue(), friendlyPseudoClass()];
const enhancers: TEnhancer[] = [];
let devMode = false;

if (process.env.NODE_ENV !== 'production') {
  devMode = true;
}

export const config = {
  plugins,
  enhancers,
  devMode,
};

export const renderer = createRenderer(config);

renderer.renderStatic(`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  html,
  body,
  #root {
    background-color: ${theme.color.tertiary};
    font-size: 10px;
    height: 100vh;
  }

  *,
  ul,
  li {
    box-sizing: border-box;
    color: ${theme.color.primary};
    font-family: 'Roboto', sans-serif;
    ${fontSizeStr(theme, 'gamma')}
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    line-height: 125%;
  }

  h1 {
    ${fontSizeStr(theme, 'giga')}
    letter-spacing: 0.6rem;
    margin-bottom: 16px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }

  h1::after {
    border-bottom: 2px solid ${theme.color.tertiary};
    bottom: -6px;
    content: ' ';
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 120px;
  }

  h2 {
    ${fontSizeStr(theme, 'delta')}
    letter-spacing: 0.1rem;
    text-align: center;
    text-transform: uppercase;
  }

  h3 {
    ${fontSizeStr(theme, 'epsilon')}
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-bottom: ${theme.spacing.xsmall};
    text-transform: uppercase;
  }

  p,
  li {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;

    ${fontSizeStr(theme, 'delta')}
  }

  ul {
    margin-bottom: ${theme.spacing.medium};
  }

  li {
    ${fontSizeStr(theme, 'epsilon')}
    margin-bottom: ${theme.spacing.xsmall};
  }
`);
