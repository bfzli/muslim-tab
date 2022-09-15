import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import viewReducer from './data/redux/View';
import languageReducer from './data/redux/Language';
import contentReducer from './data/redux/Content';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import { Loader } from './ui/views';

// import './data/constants/i18n';
import './ui/styles/Base.css';

const store = configureStore({
  reducer: {
    view: viewReducer,
    language: languageReducer,
    content: contentReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
