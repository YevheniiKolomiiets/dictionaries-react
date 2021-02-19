import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpService from './services/HttpService';
import { Provider } from 'react-redux';
import store from './store';

HttpService.setupInterceptors();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
