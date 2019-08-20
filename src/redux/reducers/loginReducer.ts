import { LOGIN } from 'redux/actions/actionTypes';
interface stateType {
  token: string;
}
const initialState: stateType = {
  token: ''
};
const getOrderData = (state, action) => {
  return {
    ...state,
    token: action.token
  };
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return getOrderData(state, action);
    default:
      return state;
  }
};
export default orderReducer;
