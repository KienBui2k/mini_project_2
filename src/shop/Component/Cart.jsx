
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, selectedProduct,updateProductQuantity } from '../../stores/action';

export default function Cart({cartStore}) {
  const dispatch = useDispatch();


  const handleQuantityChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      dispatch(updateProductQuantity(productId, newQuantity));
    }
  };



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
               <td className="table__quantity">
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(e, product.id)}
                />
              </td>
              <td>
                ${parseInt(product.price.replace('$', '')) * product.quantity}
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Thanh toán</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
