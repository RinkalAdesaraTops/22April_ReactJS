import { applyMiddleware, createStore } from "redux";
import Apireducers from "./Apireducers";
import { thunk } from "redux-thunk";

const store = createStore(Apireducers,applyMiddleware(thunk));


export default store;