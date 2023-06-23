
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../stores/action';

export default function Cart({ CartStore, setCartStore}) {
  const dispatch = useDispatch();
  const DuplicateProducts = (cartItems) => {
    const mergedCartItems = [];

    cartItems.forEach((product) => {
      const existingProduct = mergedCartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        mergedCartItems.push({ ...product });
      }
    });
    return mergedCartItems;
  };

  const newCartStore = DuplicateProducts(CartStore);
  
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    const updateDeleteNew = JSON.parse(localStorage.getItem('listCart'))
    setCartStore(updateDeleteNew)
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
          {newCartStore.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                ${parseInt(product.price.replace('$', '')) * product.quantity}
              </td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
