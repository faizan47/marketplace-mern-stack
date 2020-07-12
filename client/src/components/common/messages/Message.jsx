import React from 'react';
import time_ago_in_words from 'time_ago_in_words';
import { Link } from 'react-router-dom';

const Message = ({
	role,

	message: { _id, from, to, _listing: { title, images }, subject, started, unreadByDistributor, unreadByRetailer }
}) => {
	const renderUnread = role => {
		if (role === 'retailer' && unreadByRetailer) {
			return <span className="tag is-danger is-normal">Unread</span>;
		}
		if (role === 'distributor' && unreadByDistributor) {
			return <span className="tag is-danger is-normal">Unread</span>;
		}
	};
	return (
		<div>
			<article className="media py-2">
				<div className="media-left">
					<figure className="image is-64x64">
						<img
							className="is-rounded"
							src={`https://ui-avatars.com/api/?name=${from.company ||
								to.company}&background=3298dc&color=fff&format=svg`}
							alt="user avatar"
						/>
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<Link to={`/messages/${_id}`}>
							<p className="has-text-black">
								<strong>{to.company || from.company}</strong>
								<small className="mx-2">{time_ago_in_words(started)}</small>
								<small>{renderUnread(role)}</small>
								<br />
								<small className="has-greyed-text is-block is-size-6">{title}</small>
								<small className="has-greyed-text is-size-7">{subject}</small>
							</p>
						</Link>
					</div>
				</div>
				<div className="media-right">
					<figure className="image is-64x64">
						<img
							className="is-rounded"
							src={images[0] || 'https://bulma.io/images/placeholders/128x128.png'}
							alt="user avatar"
						/>
					</figure>
				</div>
			</article>
			<hr className="dropdown-divider" />
		</div>
	);
};

export default Message;
