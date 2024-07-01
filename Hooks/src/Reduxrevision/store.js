import { createStore } from "redux";
import CounterReducers from "./CounterReducers";

const store = createStore(CounterReducers);


export default store;