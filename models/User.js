const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	role: { type: String, default: 'retailer' },
	joinDate: Date
});

module.exports = mongoose.model('User', UserSchema);
