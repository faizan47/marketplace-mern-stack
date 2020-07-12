import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import isEmailValid from '../../utils/isEmailValid';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import Select from '../formComponents/Select';
import ImageUpload from '../formComponents/ImageUpload';
import Textarea from '../formComponents/Textarea';
import Input from '../formComponents/Input';
import Radio from './Radio';

class FormTemplate extends React.Component {
	renderInputs = () => {
		return this.props.inputs.map(
			({ name, type, label, placeholder, iconClass, selectOptions, radioValues, helperText }) => {
				switch (type) {
					case 'number':
						return (
							<Field
								key={name}
								name={name}
								component={Input}
								{...{
									type,
									placeholder,
									iconClass,
									label
								}}
							/>
						);
					case 'select':
						return (
							<Select
								key={name}
								name={name}
								selectOptions={selectOptions}
								{...{ label }}
								iconClass={iconClass}
							/>
						);
					case 'radio':
						const radioMarkup = radioValues.map(({ radioValue, message }) => (
							<Field name={name} component={Radio} {...{ name, radioValue, message }} />
						));
						return (
							<div className="field my-4">
								<label className="label">{helperText}</label>
								<div className="control columns"> {radioMarkup}</div>
							</div>
						);

					case 'textarea':
						return (
							<Field
								key={name}
								name={name}
								component={Textarea}
								{...{ placeholder, label }}
								type="text"
							/>
						);
					case 'file':
						return (
							<Field
								key={name}
								type="text"
								multiple={true}
								name={name}
								component={ImageUpload}
								{...{ name, label, defaultImages: this.props.initialValues.images }}
							/>
						);
					default:
						return (
							<Field
								key={name}
								name={name}
								component={Input}
								{...{
									type,
									placeholder,
									iconClass,
									label
								}}
							/>
						);
				}
			}
		);
	};
	onSubmit = values => {
		this.props.onSubmit(values, this.props.history);
		if (this.props.resetOnSubmit) this.props.reset();
	};
	renderCancel = () => {
		if (this.props.hideCancel) return;

		return this.props.onCancel ? (
			<button
				onClick={() => (this.props.onCancel ? this.props.onCancel() : null)}
				className="button is-link is-light"
			>
				Cancel
			</button>
		) : (
			<Link
				onClick={() => (this.props.onCancel ? this.props.onCancel() : null)}
				to={this.props.cancelBtnLink}
				className="button is-link is-light"
			>
				Cancel
			</Link>
		);
	};
	render() {
		return (
			<form className="column is-half px-0" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				{this.renderInputs()}
				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">{this.props.SubmitBtnText}</button>
					</div>
					<div className="control">{this.renderCancel()}</div>
				</div>
			</form>
		);
	}
}
const validate = (values, { inputs }) => {
	const errors = {};

	inputs.map(({ name, type }) => {
		if ((!values[name] && type !== 'file') || values[name] === 'defaultSelect') {
			return (errors[name] = `${capitalizeFirstLetter(name)} is required.`);
		} else if (type === 'email' && !isEmailValid(values[name])) {
			return (errors[name] = 'Invalid email');
		}
		if (name === 'password confirmation' && values[name] !== values.password) {
			return (errors[name] = 'Passwords must match');
		}
		return values[name];
	});
	return errors;
};

export default reduxForm({
	validate
})(withRouter(FormTemplate));
