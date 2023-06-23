import React, { useState } from 'react'
import ListProducts from './Component/ListProducts'
import { useSelector } from 'react-redux'
import Cart from './Component/Cart';

export default function Shop() {
    const storeProduct = useSelector((state) => state.cart)
    const [CartStore, setCartStore] = useState(useSelector((state => state.productCart))) 
  return (
    <>
        <ListProducts storeProduct={storeProduct} setCartStore={setCartStore}></ListProducts>
        <Cart CartStore={CartStore} setCartStore={setCartStore}></Cart>
    </>
  )
}
