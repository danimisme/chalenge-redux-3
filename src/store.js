import { createStore, combineReducers } from "redux";
import counterReducer from "./features/counter/counterSlice";
import authReducer from "./features/auth/authSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);
export default store;
