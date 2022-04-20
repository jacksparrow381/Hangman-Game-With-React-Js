import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Components/HangMan-Reducers";
import { fetchWordsSaga } from "./Saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(fetchWordsSaga);

export default store;
