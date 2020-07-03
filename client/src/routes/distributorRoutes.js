import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Proposals from '../components/distributor/Proposals';
import AddCredits from '../components/distributor/PricingTable';
import Modal from '../components/common/Modal';

export default () => (
	<Fragment>
		<Route path="/myProposals">
			<Proposals />
		</Route>
		{/* <Route path="/addCredits">
			<Modal title="Add Credits">
				<AddCredits />
			</Modal>
		</Route> */}
	</Fragment>
);
