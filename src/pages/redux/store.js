import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

import homeReducer from "../home/redux/homeReducer";
import detailsPostReducer from "../details/redux/detailsReducer";

const store = createStore(
  combineReducers({
    posts: homeReducer,
    detailsPost: detailsPostReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
