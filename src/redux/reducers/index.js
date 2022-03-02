import { combineReducers } from "redux";
// Reducers
import authReducer from "./auth";
import shopsReducer from "./shop";
import driverReducer from "./driver";

const rootReducer = combineReducers({
  authReducer: authReducer,
  shopsReducer: shopsReducer,
  driverReducer: driverReducer,
});
export default rootReducer;
