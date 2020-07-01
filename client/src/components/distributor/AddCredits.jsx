import React from 'react';
import { Component } from 'react';
import PricingBlock from './PricingBlock';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

class AddCredits extends Component {
	render() {
		return (
			<div>
				<div className="columns has-text-centered">
					<PricingBlock panelClass="is-light" planName="Basic" bids="15" cost={15} buttonClass="is-light" />
					<PricingBlock
						panelClass="is-primary"
						planName="Standard"
						bids="30"
						cost={30}
						buttonClass="is-primary"
						isPopular
					/>
					<PricingBlock
						panelClass="is-info"
						planName="Pro"
						bids="50"
						cost={50}
						buttonClass="is-info is-light"
					/>
				</div>
				<Elements stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			</div>
		);
	}
}

export default AddCredits;
