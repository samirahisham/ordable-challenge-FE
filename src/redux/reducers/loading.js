import { SET_LOADING } from "../actions/actionTypes";

const initialState = {
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default reducer;
