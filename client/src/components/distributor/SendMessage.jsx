import React, { Fragment } from 'react';
import { Component } from 'react';
import Modal from '../common/Modal';
import FormTemplate from '../formComponents/FormTemplate';
import sendMessageInputs from '../../formInputs/distributor/sendMessageInputs';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createMessage } from '../../actions';

class sendMessage extends Component {
	state = { displayModal: null };
	onModalExit = () => this.setState({ displayModal: false });
	modalLogic = () => {
		if (!this.props.user) {
			return toast.warn('Only authorised users can perform that action!');
		} else if (this.props.user.role === 'distributor' && this.props.user.credits) {
			return this.setState({ displayModal: true });
		} else {
			return this.props.user.role === 'retailer'
				? toast.warn('Only distributors can contact retailers!')
				: toast.warn('Insufficient credits. Please add credits in your account to contact this retailer.');
		}
	};
	onSubmit = values => {
		this.props.createMessage({ listingId: this.props.listingId, ...values });
	};
	renderModal = () => {
		if (this.state.displayModal)
			return (
				<Modal onModalExit={this.onModalExit} title="Contact retailer">
					<FormTemplate
						inputs={sendMessageInputs}
						onSubmit={this.onSubmit}
						form="sendMessage"
						SubmitBtnText="Send"
						onCancel={this.onModalExit}
					/>
				</Modal>
			);
	};
	render() {
		return (
			<Fragment>
				{this.renderModal()}
				<button onClick={this.modalLogic} className="button is-primary is-normal is-fullwidth">
					<span className="icon is-small">
						<i className="far fa-envelope" />
					</span>
					<span>Send a quote</span>
				</button>
			</Fragment>
		);
	}
}
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, { createMessage })(sendMessage);
