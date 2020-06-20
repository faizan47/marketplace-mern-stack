import React, { Fragment } from 'react';
import { Field } from 'redux-form';

export default ({ name, selectOptions, iconClass, label }) => {
	const renderSelect = ({ input, meta: { touched, error }, children }) => (
		<Fragment>
			<select {...input}>{children}</select>
			{touched && error && <p className="help is-danger">{error}</p>}
		</Fragment>
	);
	return (
		<div className="field">
			<div className="control has-icons-left">
				<div className="select ">
					<Field name={name} component={renderSelect}>
						<option disabled value="defaultSelect">
							{label}
						</option>
						{selectOptions.map((option, i) => (
							<option key={i} value={option}>
								{option}
							</option>
						))}
					</Field>
				</div>
				<span className="icon is-left">
					<i className={`fas ${iconClass}`} />
				</span>
			</div>
		</div>
	);
};
