import { createStore, combineReducers } from "redux";
import { CartReducer } from "./reducer";
import reducer_art from "./reducer_cart";

const rootReducer = combineReducers({
    cart:CartReducer,
    productCart:reducer_art
    });

export const store = createStore(rootReducer)