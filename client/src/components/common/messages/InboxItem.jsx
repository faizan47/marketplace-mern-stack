import React from 'react';
import time_ago_in_words from 'time_ago_in_words';
import { Link } from 'react-router-dom';

const InboxItem = ({
	role,
	lastMessage: { message, time },
	conversationData: { _id, from, to, _listing: { title }, unreadByDistributor, unreadByRetailer }
}) => {
	let isBold = 'has-text-weight-normal has-text-grey-dark';
	const renderUnreadTag = role => {
		if (role === 'retailer' && unreadByRetailer === 'true') {
			isBold = 'has-text-weight-semibold has-text-black-ter';
			return <span className="tag is-danger is-normal">Unread</span>;
		}
		if (role === 'distributor' && unreadByDistributor === 'true') {
			isBold = 'has-text-weight-semibold';
			return <span className="tag is-danger is-normal">Unread</span>;
		}
	};
	const renderReadStatus = () => {
		if (role === 'distributor' && unreadByRetailer === 'false' && unreadByDistributor === 'false') {
			return (
				<span title="Read" className="icon has-text-success">
					<i className="fas fa-lg fa-check-square" />
				</span>
			);
		}
		if (role === 'retailer' && unreadByDistributor === 'false' && unreadByRetailer === 'false') {
			return (
				<span title="Read" className="icon has-text-success">
					<i className="fas fa-lg fa-check-square" />
				</span>
			);
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
						<Link to={`/inbox/${_id}`}>
							<p className="has-text-black">
								<span className="is-size-6 has-text-grey">{to.company || from.company}</span>
								<small className="mx-2 has-text-grey">{time_ago_in_words(time)}</small>
								<small>{renderUnreadTag(role)}</small>
								<br />
								<small className={`is-block is-size-5 ${isBold}`}>{message}</small>
								<small className="has-text-grey-light is-size-7">About: {title}</small>
							</p>
						</Link>
					</div>
				</div>
				<div className="media-right">{renderReadStatus()}</div>
			</article>
			<hr className="dropdown-divider" />
		</div>
	);
};

export default InboxItem;
