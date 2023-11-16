import { put, call, takeLatest } from "redux-saga/effects";
import * as user from "./constant.user";
import { endPoints } from "../endpoints";
import { getService } from "../../utils/services";

function* UserSaga() {
  try {
    const newPayload = yield call(
      getService,
      endPoints.USER,
    );
    yield put({
      type: user.USER_RECIEVED,
      payload: newPayload,
    });
  } catch (err) {
    yield put({
      type: user.USER_ERROR,
      error: err.response,
    });
  }
}

function* UserWatcher() {
  yield takeLatest(user.USER, UserSaga);
}

export const usersaga = [UserWatcher()];
