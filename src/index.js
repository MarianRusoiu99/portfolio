import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Curtains } from "react-curtains";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
    <App />
    </Curtains>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
