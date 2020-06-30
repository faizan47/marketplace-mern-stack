import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Proposals from '../components/distributor/Proposals';
import AddCredits from '../components/distributor/AddCredits';

export default () => (
	<Fragment>
		<Route path="/myProposals">
			<Proposals />
		</Route>
		<Route path="/addCredits">
			<AddCredits />
		</Route>
	</Fragment>
);
