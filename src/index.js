import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DelPage from './DelPage';
import UpdatePage from './UpdatePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UpdatePage />
    <DelPage />
  </React.StrictMode>
);
