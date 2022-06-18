import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './cairo.css';
import App from './App';
import { StoreProvider } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StoreProvider>
);
