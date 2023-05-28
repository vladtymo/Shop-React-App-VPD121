import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CounterProvider } from './contexts/counter.context';
import { UsersProvider } from './contexts/users.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <UsersProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </UsersProvider>
  // </React.StrictMode>
);
