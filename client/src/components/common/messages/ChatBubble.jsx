import React from 'react';
import time_ago_in_words from 'time_ago_in_words';
export default ({ message, time, isDistributor }) => {
	const chatBubbleClass = isDistributor
		? 'bubble-left has-background-light'
		: 'bubble-right has-text-white has-background-primary';

	return (
		<div>
			<div className={`chat-bubble my-2 pr-2 px-2 ${chatBubbleClass}`}>{message}</div>
			<small className="has-text-grey-light is-size-7">{time_ago_in_words(time)}</small>
		</div>
	);
};
