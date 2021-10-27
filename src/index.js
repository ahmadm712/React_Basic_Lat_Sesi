import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/2710/sesi2/components/AppR';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers'

const store = createStore(counterApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
