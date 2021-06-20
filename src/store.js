import {createStore} from "redux";
import {rootedReducer} from "./rootReducer";

export const store = createStore(rootedReducer);