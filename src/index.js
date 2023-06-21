import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/app/App';
import Client from './client/client';

const client = new Client();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App client={client}/>
  </React.StrictMode>
);
