import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('hello');
}

function* rootSaga() {
  console.log('Root saga');
  yield all([helloSaga()]);
}

export default rootSaga;
