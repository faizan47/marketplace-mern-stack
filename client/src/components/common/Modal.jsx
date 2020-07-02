import React, { Component } from 'react';
import AddCredits from '../distributor/AddCredits';

class Modal extends Component {
	render() {
		return (
			<div className="modal is-active">
				<div className="modal-background" />
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Modal title</p>
						<button className="delete" aria-label="close" />
					</header>
					<section className="modal-card-body">
						<AddCredits />
					</section>
					<footer className="modal-card-foot">
						<button className="button is-success">Save changes</button>
						<button className="button">Cancel</button>
					</footer>
				</div>
			</div>
		);
	}
}

export default Modal;
