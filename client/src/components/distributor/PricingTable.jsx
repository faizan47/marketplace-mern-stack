import React from 'react';
import { Component } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PricingBlock from './PricingBlock';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

class PricingTable extends Component {
	state = { showCheckoutForm: false, amount: null };
	handlePlanData = (amount, planName) => {
		this.setState({ showCheckoutForm: true, amount, planName, showModal: false });
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
				{this.state.showCheckoutForm ? (
					<Elements stripe={stripePromise}>
						<CheckoutForm amount={this.state.amount} planName={this.state.planName} />
					</Elements>
				) : null}
			</div>
		);
	}
}

export default PricingTable;
