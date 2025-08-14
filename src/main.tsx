import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Dinamik basename belirleme
const getBasename = () => {
  const path = window.location.pathname;
  if (path.includes('/plesk-site-preview/')) {
    return '/plesk-site-preview/enesakmehmet.com.tr';
  }
  return '/';
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}><App /></BrowserRouter>
  </React.StrictMode>
);
