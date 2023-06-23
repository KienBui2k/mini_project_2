import React from 'react'
import { useSelector } from 'react-redux';
export default function Cart() {
  const {cartProducts} = useSelector(state => state.filter(product => product.quantity > 0)); 
  return (
    <div className='cart__container'>
       <h1>Your Cart</h1>
       <table className='table__container'>
         <thead>
           <tr>
             <th>STT</th>
             <th>Name</th>
             <th>Price</th>
             <th>Quantity</th>
             <th>Total</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
           {cartProducts.map((product, index) => (
             <tr key={product.id}>
               <td>{index + 1}</td>
               <td>{product.name}</td>
               <td>{product.price}</td>
               <td>{product.quantity}</td>
               <td>{product.price * product.quantity}</td>
               <td>
                 <button>Edit</button>
                 <button>Delete</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
    </div>
  )
}
