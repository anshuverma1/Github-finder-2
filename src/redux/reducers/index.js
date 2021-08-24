import { combineReducers } from "redux";
import getUsers from "./apiReducer";

const reducers = combineReducers({ getUsers });

export default reducers;
