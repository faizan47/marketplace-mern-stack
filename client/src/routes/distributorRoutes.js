import React from 'react';
import { Route } from 'react-router-dom';
import Proposals from '../components/distributor/Proposals';

export default () => (
	<Route path="/proposals">
		<Proposals />
	</Route>
);
