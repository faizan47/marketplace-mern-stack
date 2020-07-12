import React, { Fragment } from 'react';

export default ({ placeholder, iconClass, label, input, type, meta }) => {
	// console.log(meta);
	const { touched, error } = meta;
	return (
		<Fragment>
			<div className="field">
				{label ? <label className="label">{label}</label> : null}
				<div className="control has-icons-left">
					<input {...input} className="input" type={type} placeholder={placeholder} />
					<span className="icon is-small is-left">
						<i className={`fas ${iconClass}`} />
					</span>
				</div>
				{touched && error && <p className="help is-danger">{error}</p>}
			</div>
		</Fragment>
	);
};
