import React from 'react';

export default ({ mainImage }) => {
	const sliderImage = mainImage || 'https://bulma.io/images/placeholders/480x320.png';
	return (
		<div className="card-image">
			<figure className="image is-3by2">
				<img className="object-fit-cover" src={sliderImage} alt="main" />
			</figure>
		</div>
	);
};
