import { createStore } from "redux";
import UserReducers from "./UserReducers";

const store = createStore(UserReducers)
export default store;