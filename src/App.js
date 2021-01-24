import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';
import Orders from './Components/Orders';
import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe(
	'pk_test_51HoYmBA60IdK1J4IpLRivlxnMcFCnhnIksVpybSvUP0AaZxEcal8WNptPeTwzbUmG2V06aFYDEa9x6BGsWjVs67V00uqfCrY4s'
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log('The user is > ', authUser);
			if (authUser) {
				//logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				//logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
				<Route path="/orders">
					<Header />
					<Orders />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/Login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
