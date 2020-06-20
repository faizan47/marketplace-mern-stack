import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../components/common/SignIn';
import SignUp from '../components/common/SignUp';
import Header from '../components/common/Header';

export default () => (
	<Fragment>
		<Route path="/">
			<Header />
		</Route>
		<Route path="/signup">
			<SignUp />
		</Route>
		<Route path="/signin">
			<SignIn />
		</Route>
	</Fragment>
);
