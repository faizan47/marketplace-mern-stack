import React, { Component, Fragment } from 'react';
import InboxItem from './InboxItem';
import { connect } from 'react-redux';
import { getInbox, fetchUser } from '../../../actions';
import ContentLoader from 'react-content-loader';

class Inbox extends Component {
	componentDidMount() {
		this.props.getInbox();
		this.props.fetchUser();
	}
	renderInbox = () => {
		return this.props.messages.length ? (
			this.props.messages.map(({ _id, from, to, _listing, unreadByDistributor, unreadByRetailer, messages }) => {
				return (
					<InboxItem
						key={_id}
						role={this.props.role}
						conversationData={{
							_id,
							from,
							to,
							_listing: _listing || {},
							unreadByDistributor,
							unreadByRetailer
						}}
						lastMessage={messages[0]}
					/>
				);
			})
		) : (
			<article class="message is-warning">
				<div class="message-body">No messages found! </div>
			</article>
		);
	};

	render() {
		return (
			<Fragment>
				<h1 className="title is-1">Inbox</h1>
				{this.props.messages === null ? <ContentLoader /> : this.renderInbox()}
			</Fragment>
		);
	}
}
const mapStateToProps = ({ messages, user: { role } }) => ({ messages, role });
export default connect(mapStateToProps, { getInbox, fetchUser })(Inbox);
