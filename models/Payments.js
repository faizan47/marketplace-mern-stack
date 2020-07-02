const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaymentSchema = new Schema({
	paymentId: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Payment', PaymentSchema);
