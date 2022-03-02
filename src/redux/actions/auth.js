import { message } from "antd";
import { SET_CURRENT_USER } from "./actionTypes";
import instance from "./instance";
import jwt_decode from "jwt-decode";
import { setLoading } from "./loading";
const setCurrentUser = (token) => {
  return async (dispatch) => {
    let user;
    if (token) {
      localStorage.setItem("token", token);
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      user = jwt_decode(token);
    } else {
      localStorage.removeItem("token");
      delete instance.defaults.headers.common["Authorization"];
      user = null;
    }
    dispatch({ type: SET_CURRENT_USER, payload: user });
  };
};
export const login = (userData) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/user/login/", {
        email: userData.email.toLowerCase(),
        password: userData.password,
      });
      dispatch(setCurrentUser(response.data.access));
    } catch (error) {
      message.error("an error has occured");
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(setCurrentUser());
  };
};

export const checkForExpiredToken = () => {
  const token = localStorage.getItem("token");

  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;

    user = jwt_decode(token);
    if (user.exp >= currentTimeInSeconds) {
      return setCurrentUser(token);
    }
  }
  return logout();
};
