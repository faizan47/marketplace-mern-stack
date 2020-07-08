const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	message: String,
	time: { type: Date, default: Date.now }
});

module.exports = MessageSchema;
