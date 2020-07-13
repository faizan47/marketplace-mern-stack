import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../components/common/SignIn';
import SignUp from '../components/common/SignUp';
import Listings from '../components/common/listing/Listings';
import ListingSingle from '../components/common/listingSingle/ListingSingle';
import Favourites from '../components/common/Favourites';
import Inbox from '../components/common/messages/Inbox';
import Chat from '../components/common/messages/Chat';

export default () => (
	<Fragment>
		<Route path="/signup" component={SignUp} />
		<Route path="/listings" component={Listings} />
		<Route path="/signin" component={SignIn} />
		<Route path="/listing/:listingId" component={ListingSingle} />
		<Route path="/favourites" component={Favourites} />
		<Route path="/inbox/:inboxId" component={Chat} />
		<Route exact path="/inbox" component={Inbox} />
	</Fragment>
);
