import { createStore, combineReducers } from "redux";
import { CartReducer } from "./reducer";
const rootReducer = combineReducers({
    cart:CartReducer
    });

export const store = createStore(rootReducer)