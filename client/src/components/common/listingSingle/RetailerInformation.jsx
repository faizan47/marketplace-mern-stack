import React, { Fragment } from 'react';
import time_ago_in_words from 'time_ago_in_words';

export default ({ user: { company, joinDate } }) => {
	return (
		<Fragment>
			<span className="has-text-grey-dark mb-1">Retailer Information</span>
			<div className="media mt-2">
				<div className="media-left">
					<figure className="image is-48x48">
						<img
							className="is-rounded"
							src={`https://ui-avatars.com/api/?name=${company}&background=3298dc&color=fff&format=svg`}
							alt="retailer"
						/>
					</figure>
				</div>
				<div className="media-content">
					<p className="title is-4">{company}</p>
					<p className="subtitle is-6 has-text-grey">Member since {time_ago_in_words(new Date(joinDate))}</p>
				</div>
			</div>
			<div className="content">
				<button className="button is-primary is-normal is-fullwidth">
					<span className="icon is-small">
						<i className="far fa-envelope" />
					</span>
					<span>Send a quote</span>
				</button>
			</div>
		</Fragment>
	);
};
