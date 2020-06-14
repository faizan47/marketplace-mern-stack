import React from 'react';
import { withRouter } from 'react-router-dom';
import { signUpInputs } from '../formInputs';
import { signUp } from '../../../actions';
import { connect } from 'react-redux';
import FormTemplate from '../FormTemplate';

class SignInForm extends React.Component {
	onSubmit = values => {
		this.props.signUp(values, this.props.history);
	};
	render() {
		return (
			<section className="section">
				<h1 className="title">Sign Up</h1>
				<FormTemplate form="signUp" inputs={signUpInputs} onSubmit={this.onSubmit} />
			</section>
		);
	}	
}

export default connect(null, { signUp })(withRouter(SignInForm));
