import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import CreateListing from "../components/retailer/CreateListing";
import MyListings from "../components/retailer/MyListings";
import EditListing from "../components/retailer/EditListing";

export default () => (
    <Fragment>
        <Switch>
            <Route path="/createListing" component={CreateListing} />
            <Route path="/myListings" component={MyListings} />
            <Route path="/edit/:listingId" component={EditListing} />
        </Switch>
    </Fragment>
);
