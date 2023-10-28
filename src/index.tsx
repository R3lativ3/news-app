import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, AuthorizationParams } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';   // ADD THIS LINE ?

const e =  createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const ea: AuthorizationParams = {
  redirect_uri: window.location.origin,
  audience: ''
}

const onRedirectCallback = (appState:any) => {
  e.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-2elrfwmynotc1ef0.us.auth0.com'
      clientId='Imo8vKufRITJb6j8M4wcrO3Ki1BTDIPO'
      onRedirectCallback={onRedirectCallback}
      authorizationParams={ea}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
