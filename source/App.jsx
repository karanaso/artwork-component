import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import store from './store/store';

import Layout from './containers/Layout';
import ArtworksContainer from './containers/ArtworksContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Provider store={store}>
        <Layout>
          <Route path="/" component={ArtworksContainer} />
        </Layout>
      </Provider>
    )
  }
}
