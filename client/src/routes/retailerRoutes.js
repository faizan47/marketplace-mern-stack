import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CreateListing from '../components/retailer/CreateListing';
import MyListings from '../components/retailer/MyListings';
import Messages from '../components/retailer/Messages';
import EditListing from '../components/retailer/EditListing';

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
		<Route path="/edit/:listingId">
			<EditListing />
		</Route>
	</Fragment>
);
