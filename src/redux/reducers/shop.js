import {
  SET_ORDERS,
  SET_SHOPS,
  SET_DRIVERS,
  SET_ASSIGNED_ORDERS,
  SET_ORDER_TO_MODIFY,
} from "../actions/actionTypes";

const initialState = {
  shops: [],
  orders: [],
  assginedOrders: [],
  drivers: [],
  orderToModify: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOPS:
      return { ...state, shops: action.payload };
    case SET_ORDERS:
      return { ...state, orders: action.payload };
    case SET_DRIVERS:
      return { ...state, drivers: action.payload };
    case SET_ASSIGNED_ORDERS:
      return { ...state, assginedOrders: action.payload };
    case SET_ORDER_TO_MODIFY:
      return { ...state, orderToModify: action.payload };
    default:
      return state;
  }
};

export default reducer;
