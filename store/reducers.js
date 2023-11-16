import { combineReducers } from "redux";
import flags from "./flags";
import users from "./user";
import AuthenticationReducer from "./Modules/Auth/reducer.auth";
import UserReducer from "./Modules/Profile/reducer.user";

const RootReducer = combineReducers({
  flags,
  users,
  Auth: AuthenticationReducer,
  User: UserReducer,
});

export default RootReducer;
