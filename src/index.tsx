import React from 'react';
import ReactDOM from 'react-dom';
import { RendererProvider } from 'react-fela';

import { renderer } from './fela.config';

import 'reset-css';

import Layout from './components/Layout';
import { BaseTheme } from './common/themes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RendererProvider renderer={renderer}>
      <BaseTheme>
        <Layout />
      </BaseTheme>
    </RendererProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);

function webVitalsProcess(metric: unknown): void {
  // eslint-disable-next-line no-console
  console.log(metric);

  // General POST example
  // const body = JSON.stringify(metric);
  // const url = 'https://example.com/analytics';

  // // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  // if (navigator.sendBeacon) {
  //   navigator.sendBeacon(url, body);
  // } else {
  //   fetch(url, { body, method: 'POST', keepalive: true });
  // }

  // Google analytics example
  // ga('send', 'event', {
  //   eventCategory: 'Web Vitals',
  //   eventAction: name,
  //   eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
  //   eventLabel: id, // id unique to current page load
  //   nonInteraction: true, // avoids affecting bounce rate
  // });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(webVitalsProcess);
