import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, takeLatest, delay, put } from '@redux-saga/core/effects';

import { incrementAsyncSaga, incrementAsyncSagaSuccess } from './counterSlice';

function* handleIncrementAsyncSaga(action: PayloadAction<number>) {
  // delay 2s
  yield delay(2000);

  // dispatch action success
  yield put(incrementAsyncSagaSuccess(action.payload));
}

export default function* counterSaga() {
  // createAction api get type when toString()
  yield takeEvery(incrementAsyncSaga.toString(), handleIncrementAsyncSaga);
  //   yield takeLatest(incrementAsyncSaga.toString(), handleIncrementAsyncSaga);
}
