import React from 'react';
import time_ago_in_words from 'time_ago_in_words';
export default ({ message, time, isDistributor }) => {
	const chatBubbleClass = isDistributor
		? 'bubble-left has-background-light'
		: 'bubble-right has-text-white has-background-primary';

	return (
		<div className={`${chatBubbleClass} chat-bubble my-2 py-2 px-5`}>
			<span>{message}</span>
			<small className="has-text-grey-light is-size-7">{time_ago_in_words(time)}</small>
		</div>
	);
};
