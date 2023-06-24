 import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT_QUANTITY } from "./constant";
 
 const listProducts = [
        {
            id:1,
            quantity: 1,
            img: '../images/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.webp',
            name: 'Laptop Dell-xps-17-9710-i7',
            price:'$758',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias consectetur recusandae aliquam eveniet fugiat officiis dolor totam.'
        },
        {
            id:2,
            quantity: 1,
            img: '../images/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.webp',
            name: 'bluetooth-airpods-pro',
            price:'$358',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias consectetur recusandae aliquam eveniet fugiat officiis dolor totam.'
        },
        {
            id:3,
            quantity: 1,
            img: '../images/Galaxy-S22-Ultra-Burgundy-600x600.webp',
            name: 'Galaxy-S22-Ultra',
            price:'$558',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias consectetur recusandae aliquam eveniet fugiat officiis dolor totam.'
        },
        {
            id:4,
            quantity: 1,
            img: '../images/iphone-14-pro-max-den-thumb-600x600.webp',
            name: 'iphone-14-pro-max',
            price:'$658',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias consectetur recusandae aliquam eveniet fugiat officiis dolor totam.'
        },
 ]

 const initState = {
    products:listProducts,
    cart:[]
 }

 export const CartReducer = (state = initState, action ) => {
    switch(action.type)
    {
        case  ADD_PRODUCT:
            let temState = [...state.cart]
            let check = temState.find((product) => product.id === action.payload.product.id)
            if(!check){
                temState.push({...action.payload.product, quantity: action.payload.quantity})
                localStorage.setItem("listCart", JSON.stringify(temState))
                return{
                    ...state,
                    cart: temState
                }
            }else{
                temState.map((product) => {
                    if(product.id == action.payload.product.id ){
                       return product.quantity += action.payload.quantity;
                    }
                    else{
                        return product
                    } 
                    }               
                )
                 localStorage.setItem("listCart", JSON.stringify(temState))
                 return {
                    ...state,
                    cart : temState
                 }
            }
        case DELETE_PRODUCT:
            localStorage.setItem("listCart", JSON.stringify(state.cart.filter((product)=> product.id !==action.payload )))
            return {
                ...state,
                cart: state.cart.filter((product)=> product.id !==action.payload )
            }


        case UPDATE_PRODUCT_QUANTITY:
            const { productId, newQuantity } = action.payload;
            const updatedCart = state.cart.map((product) => {
             if (product.id === productId) {
             const updatedProduct = { ...product, quantity: newQuantity };
                updatedProduct.total = parseInt(updatedProduct.price.replace('$', '')) * newQuantity;
             return updatedProduct;
            }
        return product;

        });
        localStorage.setItem("listCart", JSON.stringify(updatedCart));
        return {
             ...state,
            cart: updatedCart,
        };
             default: 
            return {
                ...state,
                cart: JSON.parse(localStorage.getItem("listCart"))||[]
            };
    }
}