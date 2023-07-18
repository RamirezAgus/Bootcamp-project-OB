import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';  // Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; //Bootstrap icons
// Importante: Los estilos propios deben ir debajo de bootstrap para que no los pise.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import { BrowserRouter } from 'react-router-dom';
import AppRoutingFinal from './AppRoutingFinal';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { onServiceWorkerUpdate } from '@3m1/service-worker-updater';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
     {/*<BrowserRouter>
      <AppRoutingOne/>
      <AppRoutingFinal/>
    </BrowserRouter>*/}
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: onServiceWorkerUpdate
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
