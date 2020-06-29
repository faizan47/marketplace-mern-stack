import React from 'react';
import './radioStyle.css';

export default ({ radioValue, message, input }) => (
	<div className="column my-1">
		<label className="box radio-box cursor">
			<input className="radio-input-hidden" {...input} type="radio" value={radioValue.toLowerCase()} />
			<div className="content has-text-left radio-box-content">
				<h4 className="is-title is-small">{radioValue}</h4>
				<p className="is-size-6">{message}</p>
			</div>
		</label>
	</div>
);
