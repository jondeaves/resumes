import { createRenderer, TEnhancer, TPlugin } from 'fela';
import fallbackValue from 'fela-plugin-fallback-value';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import prefixer from 'fela-plugin-prefixer';
import unit from 'fela-plugin-unit';

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
