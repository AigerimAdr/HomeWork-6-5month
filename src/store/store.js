import { createStore, combineReducers, applyMiddleware } from "redux";
import { goodsReducer } from "./goodsReducer";
import thunk from "redux-thunk"; 

const rootReducer = combineReducers({
  goods: goodsReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
);