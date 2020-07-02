import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSectionStyles';
import { connect } from 'react-redux';
import { updateCredits, getClientSecret } from '../../actions';

const CheckoutForm = ({ amount, updateCredits, planName }) => {
	const stripe = useStripe();
	const elements = useElements();
	const handleSubmit = async event => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const result = await stripe.confirmCardPayment(await getClientSecret(amount * 100), {
			payment_method: {
				card: elements.getElement(CardElement)
			}
		});

		if (result.error) {
			// Show error to your customer (e.g., insufficient funds)
			console.log(result.error.message);
		} else {
			// The payment has been processed!
			if (result.paymentIntent.status === 'succeeded') {
				updateCredits(result.paymentIntent.id);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			Currently Selected:{planName}
			<CardSection />
			<button className="button is-primary mt-2" disabled={!stripe}>
				Sign Up to {planName}
			</button>
		</form>
	);
};

export default connect(null, { updateCredits })(CheckoutForm);
