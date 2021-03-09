const { default: fallbackValue } = require('fela-plugin-fallback-value');
const { default: friendlyPseudoClass } = require('fela-plugin-friendly-pseudo-class');
const { default: prefixer } = require('fela-plugin-prefixer');
const { default: unit } = require('fela-plugin-unit');

const plugins = [unit(), prefixer(), fallbackValue(), friendlyPseudoClass()];
const enhancers = [];
let devMode = false;

if (process.env.NODE_ENV !== 'production') {
  devMode = true;
}

module.exports = {
  plugins,
  enhancers,
  devMode,
};
