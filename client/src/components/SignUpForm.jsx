import React from 'react';
import FormField from './form/FormField';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { signUpInputs } from './form/formInputs';

class SignUpForm extends React.Component {
	renderInputs = () => {
		return signUpInputs.map((field) => <FormField key={field.name} field={field} />);
	};
	onSubmit = (e) => {
		console.log(e);
	};
	render() {
		return (
			<section className="section px-0">
				<form className="column is-half" onSubmit={this.props.handleSubmit(this.onSubmit)}>
					{this.renderInputs()}
					<div className="field is-grouped">
						<div className="control">
							<button className="button is-link">Submit</button>
						</div>
						<div className="control">
							<Link to="/" className="button is-link is-light">
								Cancel
							</Link>
						</div>
					</div>
				</form>
			</section>
		);
	}
}
const validate = (values) => {
	const errors = {};
	console.log(values);

	return errors;
};

export default reduxForm({
	form: 'signUp',
	validate
})(SignUpForm);
