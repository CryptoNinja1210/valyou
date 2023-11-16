import * as user from './constant.user'

export const UserDetail = payload => {
  return {
    type: user.USER,
    payload: payload,
  };
};

export const userError = err => {
  return {
    type: user.USER_ERROR,
    payload: err,
  };
};

export const ClearStatus = payload => {
  return {
    type: user.END_SUCCESS,
    payload: payload,
  };
};