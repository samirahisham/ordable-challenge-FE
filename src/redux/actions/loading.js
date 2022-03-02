import { SET_LOADING } from "./actionTypes";

export const setLoading = (loading) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: loading });
  };
};
