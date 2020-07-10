import React, { Component, Fragment } from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import { getMessages } from '../../../actions';
import ContentLoader from 'react-content-loader';

class MessageList extends Component {
	componentDidMount() {
		this.props.getMessages();
	}
	renderMessages = () => {
		return this.props.messages.map(({ _id, from, to, _listing, subject, started }) => {
			return <Message message={{ _id, from, to, _listing, subject, started }} />;
		});
	};
	render() {
		return (
			<Fragment>
				<h1 className="title is-1">Messages</h1>

				{this.props.messages.length ? (
					this.renderMessages()
				) : (
					<ContentLoader>
						<rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
						<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
						<rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
					</ContentLoader>
				)}
			</Fragment>
		);
	}
}
const mapStateToProps = ({ messages }) => ({ messages });
export default connect(mapStateToProps, { getMessages })(MessageList);
