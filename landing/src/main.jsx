import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Privacy } from './ui/pages';

import './ui/styles/Base.css';

const Redirect = () => {
  var whichAgent = function(regexp) {return regexp.test(window.navigator.userAgent)}

  switch (true) {
      case whichAgent(/edg/i): window.location.href = "https://microsoftedge.microsoft.com/addons/detail/muslim-tab-islamic-remi/afgmjcggmedjodhagihcebmjlmcdcnfa"; break;
      case whichAgent(/firefox|fxios/i): window.location.href = "https://addons.mozilla.org/en-US/firefox/addon/mt/"; break;
      // case whichAgent(/safari/i): window.location.href = "https://google.com"; break;
      default: window.location.href = "https://chrome.google.com/webstore/detail/muslim-tab/jjnohnifpemmdnbidcgcojdjfabfocgm"; break;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/privacy' element={<Privacy />} />
        <Route path="/install" element={<Redirect />} />
        <Route path="/rate" element={<Redirect />} />
        <Route exact path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
