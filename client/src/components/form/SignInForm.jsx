import React from 'react';
import FormField from './FormField';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { signInInputs } from './formInputs';
import { signIn } from '../../actions';
import { connect } from 'react-redux';

class SignInForm extends React.Component {
	renderInputs = () => {
		return signInInputs.map(field => (
			<Field name={field.name} component={FormField} key={field.name} fieldAttrs={field} />
		));
	};

	onSubmit = values => {
		this.props.signIn(values, this.props.history);
	};
	render() {
		return (
			<section className="section">
				<form className="column is-half" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
			</section>
		);
	}
}
const validate = values => {
	const errors = {};
	return errors;
};

export default reduxForm({ form: 'signIn', validate })(connect(null, { signIn })(withRouter(SignInForm)));
