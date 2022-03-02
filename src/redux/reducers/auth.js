import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  user: null,
  profile: null,
  emailToResetPassword: "",
  sendingResetPasswordEmail: false,
  resetPasswordEmailSent: false,
  sendingResetPasswordError: false,
  signingIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
