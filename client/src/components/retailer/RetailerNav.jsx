import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <>
        <Link to="myListings" className="navbar-item">
            My Listings
        </Link>
        <Link to="messages" className="navbar-item">
            Messages
        </Link>
    </>
);
