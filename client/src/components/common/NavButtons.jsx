import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import Modal from './Modal';
import PricingTable from '../distributor/PricingTable';

class NavButtons extends Component {
    state = { showModal: false };
    onSignOut = () => {
        this.props.signOut(this.props.history);
    };
    onModalExit = () => this.setState({ showModal: false });
    showModal = () => {
        if (this.state.showModal)
            return (
                <Modal onModalExit={this.onModalExit} title="Add Credits">
                    <PricingTable onModalExit={this.onModalExit} />
                </Modal>
            );
    };
    renderCta = () => {
        if (this.props.isModal) {
            return (
                <button
                    onClick={() => {
                        this.setState({ showModal: true });
                    }}
                    className="button is-primary"
                >
                    <strong>{this.props.cta.text}</strong>
                </button>
            );
        } else {
            return (
                <Link to={this.props.cta.link} className="button is-primary">
                    <strong>{this.props.cta.text}</strong>
                </Link>
            );
        }
    };
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
                    {this.showModal()}
                </div>
            </div>
        );
    }
}

export default connect(null, { signOut })(withRouter(NavButtons));
