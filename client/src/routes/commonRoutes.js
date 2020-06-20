import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../components/common/SignIn';
import SignUp from '../components/common/SignUp';

export default () => (
	<Fragment>
		<Route path="/signup">
			<SignUp />
		</Route>
		<Route path="/signin">
			<SignIn />
		</Route>
	</Fragment>
);
