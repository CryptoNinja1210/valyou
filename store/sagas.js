import { all } from "redux-saga/effects";
import { authsaga } from "./Modules/Auth/saga.auth";
import { usersaga } from "./Modules/Profile/saga.user";

export default function* rootSagas() {
  try {
    yield all([
      ...authsaga,
      ...usersaga,
    ]);
  } catch (err) {
    return new Error(err);
  }
}
