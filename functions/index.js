const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51HoYmBA60IdK1J4I97TDnPU1YXamvumAELYShElW3JCWzQGpXy0bz0fBXLnMne74F9I4WRjwHP0nByQDwzDmCiQV00DFVbaWAY'
)

//API

//app config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('pay requets recived: ', total);

	
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});
	
	response.status(201).send({
		clientSecret: paymentIntent.client_secret
	})
});

exports.api = functions.https.onRequest(app);
