import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Зміни тут
import App from './components/App';

import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
