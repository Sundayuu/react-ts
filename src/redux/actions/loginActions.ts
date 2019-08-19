import { LOGIN } from './actionTypes';

export const getOrderList = () => async dispatch => {
  const data = {
    test: [
      {
        id: 0,
        data: '222'
      }
    ]
  };

  dispatch({
    type: LOGIN,
    data: data.test
  });
};
