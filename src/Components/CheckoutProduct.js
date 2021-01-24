import React from "react";
import "./css/CheckoutProduct.css";
import {useStateValue} from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton}) {
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct_image" 
        src={image} alt="" />

        <div className='checkoutProduct_info'>
              <div className='checkoutProduct_title'>
                  <p>{title}</p>
              </div>
              <div className='checkoutProduct_price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </div>
              <div className="checkoutProduct_rating">
                  {Array(rating)
                  .fill()
                  .map((_,i) => (
                      <p>⭐</p>
                  ))}
                  </div>
                  {!hideButton && (
                    <button onClick={removeFromBasket}>Remove Item</button>
                  )}
        </div>
        
    </div>
  );
}

export default CheckoutProduct;
