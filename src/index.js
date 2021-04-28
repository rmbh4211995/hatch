import React from 'react';
import { render } from 'react-dom';
import { Reset } from './reset.js';

import App from './app';
const mountNode = document.getElementById('app');

const renderApp = () =>
  render(
    <>
      <Reset />
      <App />
    </>,
    mountNode,
  );

renderApp();
