import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../stores/action';

export default function ListProducts({ storeProduct }) {
  const dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem("listCart")) || [];
  const [productQuantity, setProductQuantity] = useState(storeProduct.map(() => 1));

  const handleChange = (index, event) => {
    const updatedQuantities = [...productQuantity];
    updatedQuantities[index] = parseInt(event.target.value);
    setProductQuantity(updatedQuantities);
  };
const handleSubmit = (product, index) => {
  const quantity = productQuantity[index];

  if (quantity >= 1) {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      const updatedCart = cart.map((item, i) => {
        if (i === existingProductIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });

      localStorage.setItem("listCart", JSON.stringify(updatedCart));
      dispatch(addProduct(updatedCart[existingProductIndex]));
    } else {
      const newProduct = { ...product, quantity: quantity };
      localStorage.setItem("listCart", JSON.stringify([...cart, newProduct]));
      dispatch(addProduct(newProduct));
    }
  }
};

  return (
    <div className='product__main'>
      <h2>List Products</h2>
      {storeProduct.map((product, index) => (
        <div className='product__container' key={product.id}>
          <Card className='product__cart'>
            <Card.Img variant="top" className='product__img' src={product.img} />
            <Card.Body className='product__info'>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.info}
              </Card.Text>
              <p>{product.price}</p>
            </Card.Body>
          </Card>
          <div className='product__action'>
            <input type='number' value={productQuantity[index]} onChange={(e) => handleChange(index, e)} />
            <button type='button' onClick={() => handleSubmit(product, index)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
