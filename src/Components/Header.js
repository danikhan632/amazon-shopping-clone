import React from 'react';
import './css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { ShoppingBasket } from '@material-ui/icons';
import styled from 'styled-components';
import { auth } from '../firebase';

const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;
	color: white;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const history =useHistory();
	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
		
	};

	const handleOrders = () => {
		if (user) {
			history.push("/orders");
		}
		
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					src="http://www.pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
					className="header_logo"
				></img>
			</Link>

			<div className="header_search">
				<input className="header_searchBar" type="text"></input>
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<StyledLink to={!user && '/login'}>
					<div className="header_option" onClick={handleAuth}>
						<span className="header_optionLn1">
							{user
								? 'Hello, ' + user?.email.substr(0, user.email.indexOf('@'))
								: 'Hello, guest'}
						</span>
						<span className="header_optionLn2">
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</StyledLink>
				<div className="header_option" onClick={handleOrders}>
				
					<span className="header_optionLn1">Returns</span>
					<span className="header_optionLn2">& Orders</span>
				</div>
				<div className="header_option">
					<span className="header_optionLn1">Your</span>
					<span className="header_optionLn2">Prime</span>
				</div>
			</div>
			<div className="header_optionBasket">
				<StyledLink to="/checkout">
					<ShoppingCartIcon />
				</StyledLink>
				<span className="header_basketCount">{basket?.length}</span>
			</div>
		</div>
	);
}

export default Header;

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.0.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

firebase login

firebase init

"site": "fakeblock-shopping-project",

firebase deploy --only hosting:fakeblock-shopping-project


*/
