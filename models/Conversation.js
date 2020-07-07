const mongoose = require('mongoose');
const { Schema } = mongoose;
const MessageSchema = require('./Message');

const ConversationSchema = new Schema({
	from: { type: Schema.Types.ObjectId, ref: 'User' },
	to: { type: Schema.Types.ObjectId, ref: 'User' },
	subject: String,
	messages: [ MessageSchema ],
	_listing: { type: Schema.Types.ObjectId, ref: 'Listing' },
	started: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversation', ConversationSchema);
