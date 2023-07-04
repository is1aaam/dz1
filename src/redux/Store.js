import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./CounterReducer";
import {todosReducer} from "./ToDosReducer.js";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todosReducer
})

export default  createStore(rootReducer)