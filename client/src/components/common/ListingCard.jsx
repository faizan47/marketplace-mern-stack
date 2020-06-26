import React from 'react';
import ListingMeta from './ListingMeta';
import { Link } from 'react-router-dom';
import time_ago_in_words from 'time_ago_in_words';

const ListingCard = ({ images, title, category, datePosted, role, listingId, listingSlug }) => {
	const renderImage = (images = []) => {
		return images.length ? images[0] : 'https://bulma.io/images/placeholders/128x128.png';
	};
	const newTo = {
		// param1: listingId,
		pathname: `/listing/${listingSlug}`,
		state: { listingId: listingId }
	};
	return (
		<div className="box">
			<article className="media is-relative">
				<Link to={newTo}>
					<figure className="media-left">
						<p className="image is-128x128">
							<img alt="listing cover" src={renderImage(images)} />
						</p>
					</figure>
				</Link>
				<div className="media-content">
					<Link to={newTo}>
						<div className="content">
							<h3 className="title">{title}</h3>
							<div className="level-left">
								<span className="tag is-info is-light is-medium bottom-absolute">{category}</span>
							</div>
						</div>
					</Link>
				</div>
				<div className="media-right">
					<ListingMeta role={role} listingId={listingId} />
					<div className="level-left bottom-absolute right-absolute">
						<span className="tag is-light">{time_ago_in_words(new Date(datePosted))}</span>
					</div>
				</div>
			</article>
		</div>
	);
};

export default ListingCard;
