import { applyMiddleware, combineReducers, createStore } from "redux";
import todoReducer from "./reducer/todo";
import formReducer from "./reducer/form"

import { thunk } from "redux-thunk";

const store=createStore(combineReducers({todoReducer,formReducer}),applyMiddleware(thunk));

export default store