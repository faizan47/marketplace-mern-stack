import React from 'react';

export default ({ panelClass, bids, buttonClass, planName, amount, isPopular, handlePlanData }) => {
	return (
		<div className="column pricing-block is-relative">
			<article className={`panel ${panelClass}`}>
				<p className="panel-heading">
					{planName}
					{isPopular ? <span className="popular-badge tag is-danger">Popular</span> : null}
				</p>
				<span className="panel-block is-size-5">{bids} Bids</span>
				<span className="panel-block is-size-5 has-text-weight-semibold">${amount} / one time</span>
				<button onClick={() => handlePlanData(amount, planName)} className={`button ${buttonClass} my-3`}>
					Make Payment
				</button>
			</article>
		</div>
	);
};
