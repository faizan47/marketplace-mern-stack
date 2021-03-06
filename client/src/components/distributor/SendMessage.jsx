import React from 'react';
import { Component } from 'react';
import Modal from '../common/Modal';
import FormTemplate from '../formComponents/FormTemplate';
import sendMessageInputs from '../../formInputs/distributor/sendMessageInputs';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { initializeConversation } from '../../actions';
import { Link } from 'react-router-dom';
class sendMessage extends Component {
    state = { displayModal: null };
    modalLogic = () => {
        if (!this.props.user) {
            return toast.warn('Only authorised users can perform that action!');
        } else if (this.props.user.role === 'distributor' && this.props.user.credits) {
            return this.setState({ displayModal: true });
        } else {
            return this.props.user.role === 'retailer'
                ? toast.warn('Only distributors can contact retailers!')
                : toast.warn(
                      'Insufficient credits. Please add credits in your account to contact this retailer.'
                  );
        }
    };
    onSubmit = (values, history) => {
        this.props.initializeConversation({ listingId: this.props.listingId, ...values }, history);
    };
    renderModal = () => {
        if (this.state.displayModal)
            return (
                <Modal
                    onModalExit={() => this.setState({ displayModal: false })}
                    title="Contact retailer"
                >
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
    renderAlreadyContactedMessage = () => {
        return (
            <article className="message is-success">
                <div className="message-body">
                    <p className="has-text-centered">
                        You have already contacted this retailer!{' '}
                        <Link to="/inbox">Go to inbox</Link>
                    </p>
                </div>
            </article>
        );
    };
    render() {
        if (this.props.user && this.props.user.connectedListings.includes(this.props.listingId))
            return this.renderAlreadyContactedMessage();
        return (
            <>
                {this.renderModal()}
                <button
                    onClick={this.modalLogic}
                    className="button is-primary is-normal is-fullwidth"
                >
                    <span className="icon is-small">
                        <i className="far fa-envelope" />
                    </span>
                    <span>Contact Retailer</span>
                </button>
            </>
        );
    }
}
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, { initializeConversation })(sendMessage);
