import React from 'react';
import time_ago_in_words from 'time_ago_in_words';
export default ({ message, time, isSentByMe }) => {
	const chatBubbleClass = isSentByMe
		? 'bubble-right has-text-white has-background-primary'
		: 'bubble-left has-background-light';
	return (
		<div className={`${chatBubbleClass} chat-bubble my-2 py-2 px-5`}>
			<span>{message}</span>
			<small className="has-text-grey-light is-size-7">{time_ago_in_words(time)}</small>
		</div>
	);
};
