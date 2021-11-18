import { createStore, applyMiddleware, compose } from "redux";
import rootreducer from "./reducers";
import reduxImmutableStatevariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose; // add support for redux dev tools
  return createStore(
    rootreducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStatevariant()))
  );
}
