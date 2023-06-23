import { ADD_PRODUCT, DELETE_PRODUCT, SELECT_PRODUCT, UPDATE_PRODUCT } from "./constant";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}