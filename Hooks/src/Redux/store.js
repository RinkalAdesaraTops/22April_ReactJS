import { createStore } from "redux";
import CounterReducer from "./Reducers/CounterReducer";

const store = createStore(CounterReducer)

export default store;