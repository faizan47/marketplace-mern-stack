import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
	renderModal = () => (
		<div onClick={this.props.onExit}>
			<div className={`modal is-active`}>
				<div className="modal-background" />
				<div onClick={e => e.stopPropagation()} className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">{this.props.title}</p>
						<button onClick={this.props.onExit} className="delete" aria-label="close" />
					</header>
					<section className="modal-card-body">{this.props.children}</section>
					{/* <footer className="modal-card-foot">
					<button className="button is-success">Save changes</button>
					<button className="button">Cancel</button>
				</footer> */}
				</div>
			</div>
		</div>
	);
	render() {
		// console.log(this.props);

		return ReactDOM.createPortal(this.renderModal(), document.getElementById('modal'));
	}
}

export default Modal;
