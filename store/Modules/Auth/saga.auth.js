import { put, call, takeLatest } from "redux-saga/effects";
import * as auth from "./constant.auth";
import { endPoints } from "../endpoints";
import { postService } from "../../utils/services";

function* SignUpSaga({ payload }) {
  try {
    const newPayload = yield call(
      postService,
      endPoints.SIGNUP,
      payload
    );
    yield put({
      type: auth.SIGN_UP_RECIEVED,
      payload: newPayload,
    });
  } catch (err) {
    yield put({
      type: auth.AUTH_ERROR,
      error: err.response,
    });
  }
}

function* SignInSaga({ payload }) {
  try {
    const newPayload = yield call(postService, endPoints.SIGNIN, payload);

    yield put({
      type: auth.SIGN_IN_RECIEVED,
      payload: newPayload,
    });

  } catch (err) {
    yield put({
      type: auth.AUTH_ERROR,
      error: err.response,
    });
  }
}





function* SignUpWatcher() {
  yield takeLatest(auth.SIGN_UP, SignUpSaga);
}

function* SignInWatcher() {
  yield takeLatest(auth.SIGN_IN, SignInSaga);
}



export const authsaga = [
  SignUpWatcher(),
  SignInWatcher(),
];
