// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { LoanProvider } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoanProvider>       {/* wrap context here too if you like */}
        <App />
      </LoanProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
