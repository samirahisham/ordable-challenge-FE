import { message } from "antd";
import { SET_DRIVER_ORDERS } from "./actionTypes";
import instance from "./instance";
import { setLoading } from "./loading";

export const getDriverOrders = (shopID) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await instance.get(`stores/driver/${shopID}/orders/`);

      dispatch({ type: SET_DRIVER_ORDERS, payload: response.data });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));

      message.error("an error has occured , please try again later");
    }
  };
};
