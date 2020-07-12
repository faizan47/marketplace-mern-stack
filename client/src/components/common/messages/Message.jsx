import React from 'react';
import time_ago_in_words from 'time_ago_in_words';
import { Link } from 'react-router-dom';

const Message = ({ message: { _id, from, to, _listing: { title, images }, subject, started } }) => {
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
								<strong>{to.company || from.company}</strong>{' '}
								<small>{time_ago_in_words(started)}</small>
								<br />
								<small className="has-greyed-text">{subject}</small>
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
