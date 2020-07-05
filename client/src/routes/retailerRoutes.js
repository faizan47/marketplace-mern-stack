import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateListing from '../components/retailer/CreateListing';
import MyListings from '../components/retailer/MyListings';
import Messages from '../components/retailer/Messages';
import EditListing from '../components/retailer/EditListing';

export default () => (
	<Fragment>
		<Switch>
			<Route path="/createListing" component={CreateListing} />
			<Route path="/myListings" component={MyListings} />
			<Route path="/messages" component={Messages} />
			<Route path="/edit/:listingId" component={EditListing} />
		</Switch>
	</Fragment>
);
