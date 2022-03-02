import { combineReducers } from "redux";
// Reducers
import authReducer from "./auth";
import shopsReducer from "./shop";
import driverReducer from "./driver";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  authReducer: authReducer,
  shopsReducer: shopsReducer,
  loadingReducer: loadingReducer,
  driverReducer: driverReducer,
});
export default rootReducer;
