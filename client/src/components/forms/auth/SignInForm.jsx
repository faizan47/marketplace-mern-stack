import React from 'react';
import { withRouter } from 'react-router-dom';
import { signInInputs } from './authFormInputs';
import { signIn } from '../../../actions';
import { connect } from 'react-redux';
import FormTemplate from '../FormTemplate';

class SignInForm extends React.Component {
	onSubmit = (values) => {
		this.props.signIn(values, this.props.history);
	};
	render() {
		return (
			<section className="section">
				<h1 className="title">Sign In</h1>
				<FormTemplate form="signIn" inputs={signInInputs} onSubmit={this.onSubmit} />
			</section>
		);
	}
}

export default connect(null, { signIn })(withRouter(SignInForm));
