import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

class NavButtons extends Component {
	onSignOut = () => {
		this.props.signOut(this.props.history);
	};

	renderCta = () => (
		<Link to={this.props.cta.link} className="button is-primary">
			<strong>{this.props.cta.text}</strong>
		</Link>
	);
	renderLightButton = () =>
		this.props.hideSignOut ? (
			<Link to="/signin" className="button is-light">
				{this.props.lightBtn.text}
			</Link>
		) : (
			<button onClick={this.onSignOut} className="button is-light">
				<strong>{this.props.lightBtn.text}</strong>
			</button>
		);

	render() {
		return (
			<div className="navbar-item">
				<div className="buttons">
					{this.renderCta()}
					{this.renderLightButton()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, { signOut })(withRouter(NavButtons));
