import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { signInInputs } from '../../formInputs/common/signInInputs';
import { signIn } from '../../actions';
import { connect } from 'react-redux';
import FormTemplate from '../formComponents/FormTemplate';

class SignInForm extends React.Component {
	onSubmit = values => {
		this.props.signIn(values, this.props.history);
	};
	render() {
		return (
			<Fragment>
				<h1 className="title is-1">Sign In</h1>
				<FormTemplate
					SubmitBtnText="Sign In"
					cancelBtnLink="/"
					form="signIn"
					inputs={signInInputs}
					onSubmit={this.onSubmit}
				/>
			</Fragment>
		);
	}
}

export default connect(null, { signIn })(withRouter(SignInForm));
