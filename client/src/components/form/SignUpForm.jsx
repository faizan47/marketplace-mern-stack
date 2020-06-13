import React from 'react';
import FormField from './FormField';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { signUpInputs } from './formInputs';
import { signUp } from '../../actions';
import { connect } from 'react-redux';

class SignUpForm extends React.Component {
	renderInputs = () => {
		return signUpInputs.map(field => <FormField key={field.name} fieldAttrs={field} />);
	};
	onSubmit = values => {
		console.log(values);

		// this.props.signUp(values);
	};
	render() {
		return (
			<section className="section">
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
const validate = values => {
	console.log(values);

	const errors = {};
	console.log(values);

	return errors;
};
const mapStateToProps = state => {
	// console.log(state);

	return {};
};

export default reduxForm({ form: 'signUp' })(connect(mapStateToProps, { signUp })(SignUpForm));
