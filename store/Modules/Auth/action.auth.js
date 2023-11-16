import * as auth from './constant.auth'

export const SignUp = payload => {
  return {
    type: auth.SIGN_UP,
    payload: payload,
  };
};

export const SignIn = payload => {
  return {
    type: auth.SIGN_IN,
    payload: payload,
  };
};

export const authError = err => {
  return {
    type: auth.AUTH_ERROR,
    payload: err,
  };
};

export const ClearStatus = payload => {
  return {
    type: auth.END_SUCCESS,
    payload: payload,
  };
};