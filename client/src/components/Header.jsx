import React, { Component } from 'react';
import logo from './images/bulma-logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/">
						<img src={logo} alt="logo" />
					</Link>
					<a
						role="button"
						className="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<Link to="signup" className="button is-primary">
									<strong>Sign up</strong>
								</Link>
								<a className="button is-light">Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
