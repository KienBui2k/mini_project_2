import { createStore, combineReducers } from "redux";
import { CartReducer } from "./reducer";


const rootReducer = combineReducers({
    store: CartReducer
    });

export const store = createStore(rootReducer)