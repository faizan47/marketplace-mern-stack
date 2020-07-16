import React, { Fragment } from 'react';

export default props => {
	const { placeholder, iconClass, label, input, type, meta } = props;
	const { touched, error } = meta;
	if (placeholder === 'mySecretPassword') console.log(props);

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
