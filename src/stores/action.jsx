import { ADD_PRODUCT, DELETE_PRODUCT, SELECT_PRODUCT, UPDATE_PRODUCT } from "./constant";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
export const deleteProduct = (id) => {
    console.log(id);
    return{
        type: DELETE_PRODUCT,
         payload: id
    }
}
export const selectedProduct = (product) => {
    console.log(product);
    return{
        type: SELECT_PRODUCT,
         payload: product
    }
}
export const updateEditProduct = (product) => {
    console.log(product);
    return{
        type: UPDATE_PRODUCT,
         payload: product
    }
}