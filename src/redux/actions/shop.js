import { message } from "antd";
import {
  SET_ASSIGNED_ORDERS,
  SET_DRIVERS,
  SET_ORDERS,
  SET_ORDER_TO_MODIFY,
  SET_SHOPS,
} from "./actionTypes";
import instance from "./instance";
import { setLoading } from "./loading";

export const getShops = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await instance.get("stores/");

      dispatch({ type: SET_SHOPS, payload: response.data });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));

      message.error("an error has occured , please try again later");
    }
  };
};

export const getShopOrders = (shopID, assigned) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      let assignedParam = false;
      if (typeof assigned === "boolean") {
        assignedParam = assigned;
      }
      const response = await instance.get(
        `stores/${shopID}/orders/?assigned=${assignedParam}`
      );
      if (assignedParam) {
        dispatch({ type: SET_ASSIGNED_ORDERS, payload: response.data.results });
      } else {
        dispatch({ type: SET_ORDERS, payload: response.data.results });
      }
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));

      message.error("an error has occured , please try again later");
    }
  };
};

export const getStoreDrivers = (shopID) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await instance.get(`stores/${shopID}/drivers/`);

      dispatch({ type: SET_DRIVERS, payload: response.data });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));

      message.error("an error has occured , please try again later");
    }
  };
};

export const assignDriver = (orderId, driver) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      await instance.put(`stores/orders/${orderId}/assign/`, {
        employee_id: driver,
      });
      dispatch(setLoading(false));

      window.location.reload();
    } catch (err) {
      dispatch(setLoading(false));

      message.error("an error has occured , please try again later");
    }
  };
};

export const setOrderToModify = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: SET_ORDER_TO_MODIFY, payload: orderId });
  };
};
