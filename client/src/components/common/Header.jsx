import React, { Component, Fragment } from 'react';
import logo from '../../images/bulma-logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import NavButtons from './NavButtons';

class Header extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	renderMenu = () => {
		switch (this.props.user) {
			case '':
				return '';
			case false:
				return (
					<NavButtons cta={{ link: 'signup', text: 'Sign Up' }} lightBtn={{ text: 'Sign In' }} hideSignOut />
				);
			default:
				return this.props.user.role === 'retailer' ? (
					<Fragment>
						<Link to="/myListings" className="navbar-item">
							My Listings
						</Link>
						<Link to="/messages" className="navbar-item">
							Messages
						</Link>
						<Link to="/favourites" className="navbar-item">
							Favourites
						</Link>
						<NavButtons
							cta={{ link: 'CreateListing', text: 'Create an Ad' }}
							lightBtn={{ text: 'Sign Out' }}
						/>
					</Fragment>
				) : (
					<Fragment>
						<Link to="/messages" className="navbar-item">
							Messages
						</Link>
						<Link to="/favourites" className="navbar-item">
							Favourites
						</Link>
						<div className="navbar-item">
							<div className="tags has-addons are-medium">
								<span className="tag">Credits</span>
								<span className="tag is-info">{this.props.user.credits}</span>
							</div>
						</div>
						<NavButtons isModal cta={{ text: 'Add Credits' }} lightBtn={{ text: 'Sign Out' }} />
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
					<div className="navbar-start">
						<Link to="/listings" className="navbar-item">
							Browse Listings
						</Link>
					</div>
					<div className="navbar-end">{this.renderMenu()}</div>
				</div>
			</nav>
		);
	}
}
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { fetchUser })(Header);
