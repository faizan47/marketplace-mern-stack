import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Proposals from '../components/distributor/Proposals';

export default () => (
	<Fragment>
		<Route path="/myProposals">
			<Proposals />
		</Route>
	</Fragment>
);
