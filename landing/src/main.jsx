import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './ui/pages';
import { Redux } from './data/configs';

import './ui/styles/Global.style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Redux}>
        <Routes>
          <Route exact path='*' element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
