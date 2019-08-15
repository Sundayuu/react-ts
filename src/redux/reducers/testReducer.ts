import { TEST } from 'redux/actions/actionTypes'
const initialState = {
  orderItems: []
}
const getOrderData = (state, action) => {
  return {
    ...state,
    orderItems: action.data
  }
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return getOrderData(state, action)
    default:
      return state
  }
}
export default orderReducer
