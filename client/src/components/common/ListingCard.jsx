import React from 'react';
import ListingMeta from './ListingMeta';

const ListingCard = ({ images, title, category, datePosted, role, listingId }) => {
	const renderImage = (images = []) => {
		return images.length ? images[0] : 'https://bulma.io/images/placeholders/128x128.png';
	};

	return (
		<div className="box">
			<article className="media is-relative">
				<figure className="media-left">
					<p className="image is-128x128">
						<img src={renderImage(images)} />
					</p>
				</figure>
				<div className="media-content">
					<div className="content">
						<h3 className="title">{title}</h3>
						<div className="level-left">
							<span className="tag is-info is-light is-medium bottom-absolute">{category}</span>
						</div>
					</div>
				</div>
				<div className="media-right">
					<ListingMeta role={role} listingId={listingId} />
					<div className="level-left bottom-absolute right-absolute">
						<span className="tag is-light">Posted on {new Date(datePosted).toLocaleDateString()}</span>
					</div>
				</div>
			</article>
		</div>
	);
};

export default ListingCard;
