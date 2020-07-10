import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { getConversation } from '../../../actions';
import ChatBubble from './ChatBubble';
// const Conversation = props => {
// 	return <h1 className="title is-1">Chat with XYZ</h1>;
// };

class Conversation extends Component {
	componentDidMount() {
		this.props.getConversation(this.props.match.params.messageId);
	}
	renderChats = () => {
		return this.props.conversation.messages.map(({ message, time }) => (
			<ChatBubble isDistributor={!!this.props.conversation.from.role} time={time} message={message} />
		));
	};

	render() {
		return this.props.conversation ? (
			<nav className="panel">
				<p className="panel-heading">
					{this.props.conversation.from.company || this.props.conversation.to.company}
				</p>
				<div className="chat-container px-3">{this.renderChats()}</div>
				<div className="panel-block">
					<p className="control has-icons-left">
						<input className="input" type="text" placeholder="Enter message" />
						<span className="icon is-left">
							<i className="far fa-keyboard" aria-hidden="true" />
						</span>
						<button className="mt-3 mb-2 button is-light">Send Message</button>
					</p>
				</div>
			</nav>
		) : (
			<ContentLoader />
		);
	}
}
const mapStateToProps = ({ conversation, user: { role } }) => ({ conversation, role });

export default connect(mapStateToProps, { getConversation })(Conversation);
