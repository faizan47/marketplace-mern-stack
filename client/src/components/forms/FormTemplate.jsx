import React from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import isEmailValid from '../../utils/isEmailValid';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

class FormTemplate extends React.Component {
	renderInputs = () => {
		return this.props.inputs.map(field => (
			<Field name={field.name} component={FormField} key={field.name} fieldAttrs={field} />
		));
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
		if (!values[name]) {
			return (errors[name] = `${capitalizeFirstLetter(name)} is required.`);
		} else if (type === 'email' && !isEmailValid(values[name])) {
			return (errors[name] = 'Invalid email');
		}
		return values[name];
	});
	return errors;
};

export default reduxForm({ validate })(withRouter(FormTemplate));
