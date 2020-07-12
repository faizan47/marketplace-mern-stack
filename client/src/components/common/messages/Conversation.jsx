import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { getConversation, sendMessage } from '../../../actions';
import FormTemplate from '../../formComponents/FormTemplate';
import ChatBubble from './ChatBubble';
// import { subscribeToTimer } from '../../../utils/socket';
import { conversationInputs } from './conversationInputs';
import { Link } from 'react-router-dom';

class Conversation extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		timestamp: 'no timestamp yet'
	// 	};
	// 	subscribeToTimer((err, timestamp) =>
	// 		this.setState({
	// 			timestamp
	// 		})
	// 	);
	// }
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

	onSend = values => {
		this.props.sendMessage(values, this.props.match.params.messageId);
	};
	componentDidMount() {
		this.props.getConversation(this.props.match.params.messageId);
	}
	renderChats = () => {
		return this.props.conversation.messages.map(({ message, time, _user: { role } }) => (
			<ChatBubble isSentByMe={role === this.props.role} time={time} message={message} />
		));
	};
	renderHeader = () =>
		this.props.role === 'distributor' ? this.props.conversation.to.company : this.props.conversation.from.company;

	render() {
		return this.props.conversation ? (
			<nav className="panel chat-panel">
				<p className="panel-heading">{this.renderHeader()}</p>
				{this.renderListingHeader()}

				<div className="chat-container px-3">{this.renderChats()}</div>
				<div className="panel-block" id="chatForm">
					<p className="control has-icons-left">
						<FormTemplate
							resetOnSubmit
							form="chatForm"
							onSubmit={this.onSend}
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
