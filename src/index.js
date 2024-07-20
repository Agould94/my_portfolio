import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom'
import * as THREE from 'three'

import AppAlt from './AppAlt';
window.THREE = THREE
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
        <Route exact path ="/">
          <Redirect to = "/main">
            </Redirect>
        </Route>
        <Route path = '/main' component = {AppAlt}>
        </Route>
          
        <Route path = "/alt" component = {App}>
          </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
