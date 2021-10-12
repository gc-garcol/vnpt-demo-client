import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "rx-store/Store"
import App from './App';

const reduxApp = (
  <Provider store={ store } >
    <App/>
  </Provider>
);

ReactDOM.render(
  reduxApp,
  document.getElementById('root')
);