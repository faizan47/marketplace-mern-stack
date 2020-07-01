import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSectionStyles';
import { connect } from 'react-redux';
import { makePayment } from '../../actions';
import axios from 'axios';
const CheckoutForm = props => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async event => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}
		const response = await axios.get('/api/payment');
		const { client_secret } = response.data;

		const result = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: 'Jenny Rosen'
				}
			}
		});

		if (result.error) {
			// Show error to your customer (e.g., insufficient funds)
			console.log(result.error.message);
		} else {
			// The payment has been processed!
			if (result.paymentIntent.status === 'succeeded') {
				console.log(result);

				// Show a success message to your customer
				// There's a risk of the customer closing the window before callback
				// execution. Set up a webhook or plugin to listen for the
				// payment_intent.succeeded event that handles any business critical
				// post-payment actions.
			}
		}
	};
	console.log(props);

	return (
		<form onSubmit={handleSubmit}>
			<CardSection />
			<button className="button is-primary mt-2" disabled={!stripe}>
				Confirm order
			</button>
		</form>
	);
};

export default connect(null, { makePayment })(CheckoutForm);
