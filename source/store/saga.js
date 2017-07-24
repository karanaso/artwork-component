import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga';
import axios from 'axios';

import ActionTypes from './ActionTypes';

const url = 'https://jsonplaceholder.typicode.com';

function* acknoweldgeAsync() {
  const path = '/posts/1';
  try {
    const response = yield axios.get(`${url}${path}`);
    console.log('got response',response);
    //now call put

  } catch (e) {
    console.log('error',e);
    // call put with error
  }
}

function* unAcknoweldgeAsync() {
  const path = '/posts/1';
  try {
    const response = yield axios.get(`${url}${path}`);
    console.log('got response',response);
    //now call put

  } catch (e) {
    console.log('error',e);
    //call put with error
  }
}

export function* acknoweldge(action) {
  yield takeEvery( ActionTypes.ACKNOWLEDGED, acknoweldgeAsync);
}

export function* unacknowledge(action) {
  yield takeEvery( ActionTypes.UNACKNOWLEDGED, unAcknoweldgeAsync);
}
export default function* ArtworksSaga() {
  yield [
    acknoweldge(),
    unacknowledge()
  ]
}