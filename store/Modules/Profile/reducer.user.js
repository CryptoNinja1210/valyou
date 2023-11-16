import { fromJS, Map } from "immutable";
import * as user from "./constant.user";

const initialState = fromJS({
  isLoading: false,
  error: Map(),
  data: Map(),
  status: null,
  isAuthenticated: false,
});

function UserReducer(state = initialState, action = {}) {
  const { type, payload, error } = action;
  switch (type) {
    case user.USER: {
      return state
        .set("isLoading", true)
        .set("error", fromJS(error))
        .set("data", fromJS(payload));
    }

    case user.USER_RECIEVED: {
      return state
        .set("isLoading", false)
        .set("isAuthenticated", true)
        .set("error", fromJS(error))
        .set("data", fromJS(payload))
        .set("status", 200);
    }

    case user.USER_ERROR: {
      return state.set("isLoading", false).set("error", fromJS(error));
    }

    case user.END_SUCCESS: {
      return state.set("status", null);
    }
    default:
      return state;
  }
}
export default UserReducer;
