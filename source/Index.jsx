import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Layout from './containers/Layout'
import App from './App';

export const Routes = props => (
  <HashRouter>
    <App />
  </HashRouter>
);

const refreshUI = () => ReactDOM.render(<Routes />, document.getElementById('app'));

if (module.hot) {
  console.log('its hoooooot');
  module.hot.accept();
}

refreshUI();