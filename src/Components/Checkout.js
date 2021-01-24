import React from "react";
import "./css/Checkout.css";
import "./Subtotal";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket, user},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <Link to="https://www.oceanbank.com/creditcard/">
          <img
            className="checkout_ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
        </Link>
        <div className="checkout_title">
          <h2>{user ? ('Hello, '+user?.email.substr(0,user.email.indexOf('@'))) : 'Hello, guest'}</h2>
          <h2>Your Shopping Basket</h2>
        </div>
        <div className='checkout_items'>
        {basket.map(item => (
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={false}
        />
        ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />

      </div>
    </div>
  );
}

export default Checkout;
