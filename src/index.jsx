import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import contentReducer from './data/redux/Content';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './ui/styles/Base.css';

const store = configureStore({
  reducer: { content: contentReducer },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
