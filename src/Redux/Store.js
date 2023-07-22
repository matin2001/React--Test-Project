import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { Token } from "./Reducer";

const reducer = combineReducers({Token});
const middleWare = [thunk];
const initialState = {Token: localStorage.getItem("token")};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
