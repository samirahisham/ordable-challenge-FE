import { message } from "antd";
import { SET_DRIVER_ORDERS } from "./actionTypes";
import instance from "./instance";

export const getDriverOrders = (shopID) => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`stores/driver/${shopID}/orders/`);

      dispatch({ type: SET_DRIVER_ORDERS, payload: response.data });
    } catch (err) {
      message.error("an error has occured , please try again later");
    }
  };
};
