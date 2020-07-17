import React, { Component } from "react";
import { connect } from "react-redux";
import ContentLoader from "react-content-loader";
import { getChatById, fetchUser, sendMessage } from "../../../actions";
import FormTemplate from "../../formComponents/FormTemplate";
import ChatBubble from "./ChatBubble";
import { chatInputs } from "../../../formInputs/common/chatInputs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class Chat extends Component {
    componentDidMount() {
        this.props.getChatById(this.props.match.params.inboxId);
        this.props.fetchUser();
    }
    renderListingHeader = () => {
        return (
            <div className="listing-header box level">
                <div className="level-left px-3 has-text-black">
                    <Link
                        className="has-text-black"
                        to={`/listing/${this.props.conversation._listing._id}`}
                    >
                        {this.props.conversation._listing.title}
                    </Link>
                </div>
                <div className="level-right">
                    <figure className="image is-64x64">
                        <Link
                            to={`/listing/${this.props.conversation._listing._id}`}
                        >
                            <img
                                src={
                                    this.props.conversation._listing
                                        .images[0] ||
                                    "https://bulma.io/images/placeholders/128x128.png"
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
        return this.props.conversation.messages.map(
            ({ _id, message, time, _user: { role } }) => (
                <ChatBubble
                    key={_id}
                    isSentByMe={role === this.props.role}
                    time={time}
                    message={message}
                />
            )
        );
    };
    sendMessage = values => {
        if (!values.message) return toast.warn("Can't send empty message");
        return this.props.sendMessage(values, this.props.match.params.inboxId);
    };
    render() {
        return this.props.conversation ? (
            <nav className="panel chat-panel">
                <div className="panel-heading">
                    <div className="level">
                        <div className="level-left">
                            {this.props.role === "distributor"
                                ? this.props.conversation.to.company
                                : this.props.conversation.from.company}
                        </div>
                        <div className="level-right is-size-7">
                            {this.props.conversation.subject}
                        </div>
                    </div>
                </div>
                {this.renderListingHeader()}
                <div className="chat-container px-3">{this.renderChats()}</div>
                <div className="panel-block" id="chatForm">
                    <div className="control has-icons-left">
                        <FormTemplate
                            resetOnSubmit
                            form="chatForm"
                            onSubmit={values => this.sendMessage(values)}
                            inputs={chatInputs}
                            SubmitBtnText="Send"
                            hideCancel
                        />
                    </div>
                </div>
            </nav>
        ) : (
            <ContentLoader />
        );
    }
}

const mapStateToProps = ({ conversation, user: { role } }) => ({
    conversation,
    role,
});

export default connect(mapStateToProps, {
    getChatById,
    fetchUser,
    sendMessage,
})(Chat);
