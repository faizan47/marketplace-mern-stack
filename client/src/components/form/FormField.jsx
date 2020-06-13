import React from 'react';

const FormField = ({ input, fieldAttrs: { label, type, placeholder, iconClass } }) => {
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
export default FormField;
