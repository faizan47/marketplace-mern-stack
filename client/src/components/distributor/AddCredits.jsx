import React from 'react';
import { Component } from 'react';
import PricingBlock from './PricingBlock';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

class AddCredits extends Component {
	state = { showPaymentForm: false, amount: null };
	handlePlanData = amount => {
		this.setState({ showPaymentForm: true, amount });
	};
	render() {
		return (
			<div>
				<div className="columns has-text-centered">
					<PricingBlock
						handlePlanData={this.handlePlanData}
						panelClass="is-light"
						planName="Basic"
						bids="15"
						amount={15}
						buttonClass="is-light"
					/>
					<PricingBlock
						handlePlanData={this.handlePlanData}
						panelClass="is-primary"
						planName="Standard"
						bids="30"
						amount={30}
						buttonClass="is-primary"
						isPopular
					/>
					<PricingBlock
						handlePlanData={this.handlePlanData}
						panelClass="is-info"
						planName="Pro"
						bids="50"
						amount={50}
						buttonClass="is-info is-light"
					/>
				</div>
				{this.state.showPaymentForm ? (
					<Elements stripe={stripePromise}>
						<CheckoutForm amount={this.state.amount} />
					</Elements>
				) : null}
			</div>
		);
	}
}

export default AddCredits;
