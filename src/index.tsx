import React from 'react';
import ReactDOM from 'react-dom/client';
import CountdownApp from './components/CountdownApp/CountdownApp';
import { AppProvider } from './Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <CountdownApp />
    </AppProvider>
  </React.StrictMode>
);
