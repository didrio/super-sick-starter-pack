import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Main from './components/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

const renderApp = () => (
  render(<App />, document.getElementById('root'))
);

renderApp();
