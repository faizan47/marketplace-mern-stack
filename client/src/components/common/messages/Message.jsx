import React from 'react';
import time_ago_in_words from 'time_ago_in_words';
import { Link } from 'react-router-dom';
// const a = {
// 	from: '5efe4f29f65a912c04b285eb',
// 	to: {
// 		_id: '5efa5824341e4203e1b829a2',
// 		company: 'Hayes Ray LLC'
// 	},
// 	subject: 'Molestiae fuga Dolo',
// 	_listing: {
// 		images: [],
// 		_id: '5f023e7d3899f83ffd9034e8',
// 		title: 'Tenetur consequuntur'
// 	},
// 	started: '2020-07-08T21:51:21.505Z'
// };
const Message = ({ message: { from, to, _listing: { _id, title, images }, subject, started } }) => {
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
