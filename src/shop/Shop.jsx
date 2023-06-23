import React, { useState } from 'react'
import ListProducts from './Component/ListProducts'
import { useSelector } from 'react-redux'
import Cart from './Component/Cart';

export default function Shop() {
    const store = useSelector((state) => state.store)
  return (
    <>
        <ListProducts storeProduct={store.products}></ListProducts>
        <Cart cartStore={store.cart}></Cart>
    </>
  )
}
