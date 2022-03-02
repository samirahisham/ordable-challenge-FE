import { SET_DRIVER_ORDERS } from "../actions/actionTypes";

const initialState = {
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRIVER_ORDERS:
      return { ...state, orders: action.payload };

    default:
      return state;
  }
};

export default reducer;
