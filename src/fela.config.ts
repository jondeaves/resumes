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
    height: 100%;
    page-break-after: always;
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
    font-weight: 600;
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
    ${fontSizeStr(theme, 'delta')}
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-bottom: ${theme.spacing.xsmall};
    text-transform: uppercase;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;

    ${fontSizeStr(theme, 'delta')}
  }

  ul {
    list-style: inherit;
    margin-left: ${theme.spacing.large};
  }

  li {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: ${theme.typography.sizes.delta};
    line-height: 150%;
  }

  small {
    font-size: 14px;
  }

  strong {
    font-weight: 600;
  }

  @media print {
    a,
    abbr {
      text-decoration: none;
    }
  }
`);
