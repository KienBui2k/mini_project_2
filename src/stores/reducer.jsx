 import { ADD_PRODUCT, DELETE_PRODUCT, SELECT_PRODUCT, UPDATE_PRODUCT } from "./constant";
 
 const initState = [
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
            id:3,
            quantity: 1,
            img: '../images/iphone-14-pro-max-den-thumb-600x600.webp',
            name: 'iphone-14-pro-max',
            price:'$658',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias consectetur recusandae aliquam eveniet fugiat officiis dolor totam.'
        },
 ]

 export const CartReducer = (state = initState, action ) => {
    switch(action.type)
    {
        case  ADD_PRODUCT:
            return [...state,[...action.payload]]
        default: 
            return state;
    }
}