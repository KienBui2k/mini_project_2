
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, selectedProduct } from '../../stores/action';

export default function Cart({ cartStore}) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
  dispatch(deleteProduct(id));
};
  const handleEdit = (product) =>{
      dispatch(selectedProduct(product))
  }
  return (
    <div className="cart__container">
      <h1>Your Cart</h1>
      <table className="table__container">
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
          {cartStore.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                ${parseInt(product.price.replace('$', '')) * product.quantity}
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
