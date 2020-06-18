import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import isEmailValid from '../../utils/isEmailValid';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import Select from './inputs/Select';
import ImageUpload from './inputs/ImageUpload';
import Textarea from './inputs/Textarea';
import Input from './inputs/Input';

class FormTemplate extends React.Component {
	renderInputs = () => {
		return this.props.inputs.map(({ name, type, label, placeholder, iconClass, htmlType, selectOptions }) => {
			switch (type) {
				case 'file':
					return (
						<Field
							key={name}
							type="file"
							multiple={true}
							name={name}
							component={ImageUpload}
							{...{ name }}
						/>
					);
				case 'select':
					return <Select key={name} name={name} selectOptions={selectOptions} iconClass={iconClass} />;
				case 'textarea':
					return (
						<Field key={name} name={name} component={Textarea} {...{ placeholder, label }} type="text" />
					);
				default:
					// console.log(name, 'default');

					return (
						<Field
							key={name}
							name={name}
							type="text"
							component={Input}
							{...{
								htmlType,
								placeholder,
								iconClass,
								label
							}}
						/>
					);
			}
		});
		// htmlType, iconClass, input, placeholder
	};
	onSubmit = values => {
		this.props.onSubmit(values, this.props.history);
	};
	render() {
		return (
			<form className="column is-half px-0" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
				{this.renderInputs()}
				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Sign In</button>
					</div>
					<div className="control">
						<Link to="/" className="button is-link is-light">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		);
	}
}
const validate = (values, { inputs }) => {
	const errors = {};
	inputs.map(({ name, type }) => {
		if (!values[name] && type !== 'file') {
			return (errors[name] = `${capitalizeFirstLetter(name)} is required.`);
		} else if (type === 'email' && !isEmailValid(values[name])) {
			return (errors[name] = 'Invalid email');
		}
		return values[name];
	});
	return errors;
};

export default reduxForm({ validate })(withRouter(FormTemplate));
