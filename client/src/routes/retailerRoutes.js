import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CreateListing from '../components/retailer/CreateListing';
import MyListings from '../components/retailer/MyListings';
import Messages from '../components/retailer/Messages';

export default () => (
	<Fragment>
		<Route path="/createListing">
			<CreateListing />
		</Route>
		<Route path="/myListings">
			<MyListings />
		</Route>
		<Route path="/messages">
			<Messages />
		</Route>
	</Fragment>
);
