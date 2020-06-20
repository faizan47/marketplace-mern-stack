const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListingSchema = new Schema({
	title: String,
	quantity: Number,
	description: String,
	category: String,
	images: { type: [ String ], default: undefined },
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	datePosted: Date
});

module.exports = mongoose.model('Listing', ListingSchema);
