import { LOGIN } from './actionTypes';

export const loginAction = params => async dispatch => {
  dispatch({
    type: LOGIN,
    token: params.token
  });
};
