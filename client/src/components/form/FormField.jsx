import React from 'react';
import { Field } from 'redux-form';

const FormField = ({ fieldAttrs: { name, label, type, placeholder, iconClass } }) => {
	const renderField = input => {
		return (
			<div className="field">
				<label className="label">{label}</label>
				<div className="control has-icons-left ">
					<input className="input" type={type} {...input} placeholder={placeholder} />
					<span className="icon is-small is-left">
						<i className={`fas ${iconClass}`} />
					</span>
				</div>
			</div>
		);
	};
	return <Field name={name} component={renderField} />;
};
export default FormField;
