import { fromJS, Map } from "immutable";
import * as auth from "./constant.auth";

const initialState = fromJS({
  isLoading: false,
  error: Map(),
  data: Map(),
  status: null,
  isAuthenticated: false,
});


function AuthenticationReducer(state = initialState, action = {}) {
    const { type, payload, error } = action;
    switch (type) {
  
      case auth.SIGN_UP: {
        return state
          .set("isLoading", true)
          .set("error", fromJS(error))
          .set("data", fromJS(payload));
      }
  
      case auth.SIGN_UP_RECIEVED:
        {
          return state
            .set("isLoading", false)
            .set("isAuthenticated", true)
            .set("error", fromJS(error))
            .set("data", fromJS(payload))
            .set("status", 200);
        }
  
    
  
      case auth.SIGN_IN:
        {
          return state
            .set("isLoading", true)
            .set("error", fromJS(error))
            .set("data", fromJS(payload));
        }
  
      case auth.SIGN_IN_RECIEVED:
        {
          return state
            .set("isLoading", false)
            .set("isAuthenticated", true)
            .set("error", fromJS(error))
            .set("data", fromJS(payload))
            .set("status", 200);
        }
  
   
  
  
      case auth.AUTH_ERROR:
        {
          return state.set("isLoading", false).set("error", fromJS(error));
        }
   
      case auth.END_SUCCESS:
        {
          return state.set("status", null)
        }
      default:
        return state;
    }
  };
  export default AuthenticationReducer;
  