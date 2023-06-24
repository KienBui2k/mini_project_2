import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addProduct } from '../../stores/action';

export default function ListProducts({ storeProduct }) {
  const dispatch = useDispatch();



  const formSubmit = (event, product) => {
    event.preventDefault()
      dispatch(addProduct({
        product: product,
        quantity:parseInt(event.target.quantity.value)
      }))
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
          <form className='product__action' onSubmit={(e) => formSubmit(e, product) }>
            <input type='number' name='quantity' defaultValue={1} />
            <button type='submit'>Add To Cart</button>
          </form>
        </div>
      ))}
    </div>
  );
}
