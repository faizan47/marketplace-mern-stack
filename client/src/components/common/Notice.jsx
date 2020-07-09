import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, message, link, linkText }) => {
	return (
		<div className="content box">
			<h3 className="title is-small has-text-grey">{title}</h3>
			<p className="has-text-grey">{message}</p>
			<Link to={link} className="button is-black">
				{linkText}
			</Link>
		</div>
	);
};
