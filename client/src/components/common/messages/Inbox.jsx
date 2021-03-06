import React, { Component } from 'react';
import InboxItem from './InboxItem';
import { connect } from 'react-redux';
import { getInbox, fetchUser } from '../../../actions';
import ContentLoader from 'react-content-loader';

class Inbox extends Component {
    componentDidMount() {
        this.props.getInbox();
        if (this.props.user) this.props.fetchUser();
    }
    renderInbox = () => {
        return this.props.messages.length ? (
            this.props.messages.map(
                ({
                    _id,
                    from,
                    to,
                    _listing,
                    unreadByDistributor,
                    unreadByRetailer,
                    messages,
                    active
                }) => {
                    console.log(active);
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
                            active={active}
                            lastMessage={messages[0]}
                        />
                    );
                }
            )
        ) : (
            <article class="message is-warning">
                <div class="message-body">No messages found! </div>
            </article>
        );
    };

    render() {
        return (
            <>
                <h1 className="title is-1">Inbox</h1>
                {this.props.messages === null ? <ContentLoader /> : this.renderInbox()}
            </>
        );
    }
}
const mapStateToProps = ({ messages, user: { role } }) => ({ messages, role });
export default connect(mapStateToProps, { getInbox, fetchUser })(Inbox);
