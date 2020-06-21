import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavButtons = props => {
	const onButtonClick = () => {
		props.signOut(props.history);
	};
	return (
		<div className="buttons">
			<Link to="CreateListing" className="button is-primary">
				<strong>Create an Ad</strong>
			</Link>
			<button onClick={onButtonClick} className="button is-light">
				<strong>Sign out</strong>
			</button>
		</div>
	);
};

export default withRouter(NavButtons);
