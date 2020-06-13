import React from 'react';
import { Field } from 'redux-form';

const FormField = ({ label, type, placeholder, iconClass }) => {
	console.log(label, type, placeholder, iconClass);

	return (
		<div className="field">
			<label className="label">{label}</label>
			<div className="control has-icons-left ">
				<Field name="email" component="input" type={type} className="input" placeholder={placeholder} />
				<span className="icon is-small is-left">
					<i className={`fas ${iconClass}`} />
				</span>
			</div>
		</div>
	);
};
export default FormField;
