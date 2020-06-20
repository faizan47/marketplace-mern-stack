import React, { Fragment } from 'react';

export default ({ placeholder, iconClass, label, input, type, meta: { touched, error } }) => {
	return (
		<Fragment>
			<div className="field">
				<label className="label">{label}</label>
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
