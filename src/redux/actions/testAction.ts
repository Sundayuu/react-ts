import { TEST } from './actionTypes'

export const getOrderList = () => async dispatch => {
  const data = {
    test: [
      {
        id: 0,
        data: '222'
      }
    ]
  }
  dispatch({
    type: TEST,
    data: data.test
  })
}
