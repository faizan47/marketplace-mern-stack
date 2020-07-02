import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../components/common/SignIn';
import SignUp from '../components/common/SignUp';
import Listings from '../components/common/Listings';
import ListingSingle from '../components/common/ListingSingle';
import Favourites from '../components/common/Favourites';
import Modal from '../components/common/Modal';

export default () => (
	<Fragment>
		<Route path="/signup" component={SignUp} />
		<Route path="/listings" component={Listings} />
		<Route path="/signin" component={SignIn} />
		<Route path="/listing/:listingSlug" component={ListingSingle} />
		<Route path="/favourites" component={Favourites} />
		<Route path="/modal" component={Modal} />
	</Fragment>
);
