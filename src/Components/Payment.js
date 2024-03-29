import React, { Component, useState, useEffect } from 'react';
import './css/Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from '../firebase.js';

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [disabled, setDisabled] = useState(true);
	let [clientSecret, setClientSecret] = useState('');


	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`
			});
			setClientSecret(response.data.clientSecret);
		}
		getClientSecret();
	}, [basket])

	console.log('the secret is >>: ', clientSecret);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);
		
		let payload = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement)
				}
			}).then(({ paymentIntent }) => {
					db
					.collection('users')
					.doc(user?.uid)
					.collection('orders')
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created
					})


				setSucceeded(true);
				setError(null);
				setProcessing(false);
				dispatch({
					type: 'EMPTY_BASKET'
				})
				history.replace('/orders');
			});
			
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};

	return (
		<div className="payment">
			<div className="payment_container">
				<h1>
					Checkout(
					<Link
						style={{ textDecoration: 'none', color: 'black' }}
						to="/checkout"
					>
						{basket?.length} items
					</Link>
					)
				</h1>

				<div className="payment_section">
					<div className="payment_address">
						<h3>Delivery Address</h3>
						<p>{user?.email}</p>
						<p>123 ReactJS Lane</p>
						<p>Atlanta, Georgia</p>
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment_items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
						<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order Total: {value}</h3>
										</>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeperator={true}
									prefix={'$'}
								/>
					</div>
					<div className="payment_details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment_priceContainer">
								
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
