import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createDefaultStore } from './state';

import { Provider } from 'react-redux';

const store = createDefaultStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
