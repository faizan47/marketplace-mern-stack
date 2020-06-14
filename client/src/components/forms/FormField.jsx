import React, { Component } from 'react';

class FormField extends Component {
	render() {
		const { input, fieldAttrs: { label, type, placeholder, iconClass }, meta: { error, touched } } = this.props;
		return (
			<div className="field">
				<label className="label">{label}</label>
				<div className="control has-icons-left ">
					<input className="input" type={type} {...input} placeholder={placeholder} />
					<span className="icon is-small is-left">
						<i className={`fas ${iconClass}`} />
					</span>
				</div>
				<p className="help is-danger has-text-weight-semibold">{touched && error}</p>
			</div>
		);
	}
}
export default FormField;
