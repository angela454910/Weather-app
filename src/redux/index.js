import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// thunk: check dispatchAction. It will stop when dispatch a function instead of object
export const store = createStore(reducers, applyMiddleware(thunk));
