import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './Context/CartContext';
import { ProductsContextProvider } from './Context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsContextProvider>
    <CartContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartContextProvider>
  </ProductsContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
