import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartContextProvider } from './components/context/CartContextProvider';
import { createRoot } from 'react-dom/client'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CartContextProvider>
    <App />
  </CartContextProvider>
  </React.StrictMode>
);
