import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import Main from './components/Main';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

const renderApp = () => (
  render(<App />, document.getElementById('root'))
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/Main', renderApp)
}

renderApp();