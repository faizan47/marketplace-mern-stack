const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	role: String,
	message: String,
	time: { type: Date, default: Date.now }
});

module.exports = MessageSchema;
