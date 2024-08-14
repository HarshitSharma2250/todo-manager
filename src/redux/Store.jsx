import { legacy_createStore,combineReducers } from "redux";
import { TodoList } from "./Reducer";


const storereducer=combineReducers({TODO:TodoList})
export const store=legacy_createStore(storereducer)