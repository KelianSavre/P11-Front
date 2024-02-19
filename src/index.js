import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './middlewares/Router'
import StoreProvider from './middlewares/StoreProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StoreProvider>
        <Router />
      </StoreProvider>
  </React.StrictMode>
);

