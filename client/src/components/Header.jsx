import React, { Component, Fragment } from 'react';
import logo from './images/bulma-logo.png';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, signOut } from '../actions';

class Header extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	renderMenu = () => {
		switch (this.props.auth) {
			case null:
				return '';
			case !!this.props.auth:
				return (
					<Fragment>
						<Link to="signup" className="button is-primary">
							<strong>Sign up</strong>
						</Link>
						<Link to="signin" className="button is-light">
							Sign in
						</Link>
					</Fragment>
				);
			default:
				return (
					<Fragment>
						<Link to="CreateListing" className="button is-primary">
							<strong>Create an Ad</strong>
						</Link>
						<button onClick={() => this.props.signOut(this.props.history)} className="button">
							<strong>Sign out</strong>
						</button>
					</Fragment>
				);
		}
	};
	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/">
						<img src={logo} alt="logo" />
					</Link>
					<span
						role="button"
						className="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</span>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">{this.renderMenu()}</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, { fetchUser, signOut })(withRouter(Header));
