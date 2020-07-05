import React, { Component } from 'react';
import MarkAsFavourite from '../MarkAsFavourite';
import Modal from '../Modal';
import { Facebook, Twitter, Email } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';

class ActionButtons extends Component {
	state = { displayModal: null };

	onExit = () => this.setState({ displayModal: false });

	renderModal = () => {
		const URL = window.location.href;
		if (this.state.displayModal)
			return (
				<Modal onExit={this.onExit} title="Share this listing">
					<Email subject={`Check this out - ${this.props.title}`} url={URL} /> <Facebook url={URL} />
					<Twitter shareText={this.props.description} url={URL} />
				</Modal>
			);
	};
	render() {
		return (
			<div className="level single-listing-buttons-container">
				<span className="level-item">
					<span onClick={() => this.setState({ displayModal: true })} className="cursor icon">
						<i className="fas fa-share-alt fa-2x" />
					</span>
				</span>
				<MarkAsFavourite listingId={this.props.listingId} />
				{this.renderModal()}
			</div>
		);
	}
}

export default ActionButtons;
