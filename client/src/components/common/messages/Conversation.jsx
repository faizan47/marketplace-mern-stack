import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { getConversation, sendMessage } from '../../../actions';
import FormTemplate from '../../formComponents/FormTemplate';
import ChatBubble from './ChatBubble';
import { conversationInputs } from './conversationInputs';
import { Link } from 'react-router-dom';

class Conversation extends Component {
	componentDidMount() {
		this.props.getConversation(this.props.match.params.messageId);
	}
	renderListingHeader = () => {
		return (
			<div className="listing-header box level">
				<div className="level-left px-3 has-text-black">
					<Link className="has-text-black" to={`/listing/${this.props.conversation._listing._id}`}>
						{this.props.conversation._listing.title}
					</Link>
				</div>
				<div className="level-right">
					<figure className="image is-64x64">
						<Link to={`/listing/${this.props.conversation._listing._id}`}>
							<img
								src={
									this.props.conversation._listing.images[0] ||
									'https://bulma.io/images/placeholders/128x128.png'
								}
								alt="listing header"
							/>
						</Link>
					</figure>
				</div>
			</div>
		);
	};
	renderChats = () => {
		return this.props.conversation.messages.map(({ message, time, _user: { role } }) => (
			<ChatBubble isSentByMe={role === this.props.role} time={time} message={message} />
		));
	};
	render() {
		return this.props.conversation ? (
			<nav className="panel chat-panel">
				<div className="panel-heading">
					<div className="level">
						<div className="level-left">
							{this.props.role === 'distributor' ? (
								this.props.conversation.to.company
							) : (
								this.props.conversation.from.company
							)}
						</div>
						<div className="level-right is-size-7">{this.props.conversation.subject}</div>
					</div>
				</div>
				{this.renderListingHeader()}
				<div className="chat-container px-3">{this.renderChats()}</div>
				<div className="panel-block" id="chatForm">
					<p className="control has-icons-left">
						<FormTemplate
							resetOnSubmit
							form="chatForm"
							onSubmit={values => this.props.sendMessage(values, this.props.match.params.messageId)}
							inputs={conversationInputs}
							SubmitBtnText="Send"
							hideCancel
						/>
					</p>
				</div>
			</nav>
		) : (
			<ContentLoader />
		);
	}
}

const mapStateToProps = ({ conversation, user: { role } }) => ({ conversation, role });

export default connect(mapStateToProps, { getConversation, sendMessage })(Conversation);
