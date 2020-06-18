import React from 'react';

export default ({ input, placeholder, label }) => (
	<div className="field">
		<label className="label">{label}</label>
		<div className="control">
			<textarea className="textarea" {...input} placeholder={placeholder} />
		</div>
	</div>
);
