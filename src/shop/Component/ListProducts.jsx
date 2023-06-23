
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../stores/action';
export default function ListProducts({storeProduct}) {
    const dispatch= useDispatch();
  const [productQuantity, setProductQuantity] = useState(storeProduct.map(() => 1));
    const listProductsLocal = JSON.parse(localStorage.getItem("listCart")) || [];
  const handleChange = (index, event) => {
    const updatedQuantities = [...productQuantity];
    updatedQuantities[index] = parseInt(event.target.value);
    setProductQuantity(updatedQuantities);
  };
    const handleSubmit = (product) => {
        dispatch(addProduct(product))
        listProductsLocal.push(product)
        localStorage.setItem("listCart", JSON.stringify(listProductsLocal))
  };
        

  return (
        <div className='product__main'>
            <h2>List Products</h2>
        {storeProduct.map((product, index) => ( 
            
            <div className='product__container'> 
                <Card className='product__cart'>
                     <Card.Img variant="top" className='product__img' src={product.img}/>
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
                    
                    <button type='button' onClick={() => handleSubmit(product)}>Add To Cart</button>
                </div>
            </div>
        ))}
    </div>

  );
}