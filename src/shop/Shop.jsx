import React from 'react'
import ListProducts from './Component/ListProducts'
import { useSelector } from 'react-redux'
import Cart from './Component/Cart';

export default function Shop() {
    const storeProduct = useSelector((state) => state.cart)
  return (
    <>
        <ListProducts storeProduct={storeProduct}></ListProducts>
        <Cart></Cart>
    </>
  )
}
