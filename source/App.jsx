import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import ArtWorksCompomnentReducer from './store/ActionsReducer';
import ActionTypes from './store/ActionTypes';

import Layout from './containers/Layout';
import ArtworksComponent from './containers/ArtworksComponent';

let store = createStore(ArtWorksCompomnentReducer);
window.store=store;

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Provider store={store}>
        <Layout>
          <Route path="/" component={ArtworksComponent} />
        </Layout>
      </Provider>
    )
  }
}
