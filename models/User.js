const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: String,
	companyName: String,
	email: String,
	password: String,
	role: { type: String, default: 'retailer' },
	favourites: [ { type: Schema.Types.ObjectId, ref: 'Listing', default: [] } ],
	joinDate: Date
});

module.exports = mongoose.model('User', UserSchema);
