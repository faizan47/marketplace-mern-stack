const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const Listing = mongoose.model('Listing');
const Conversation = mongoose.model('Conversation');

module.exports = app => {
	app.post('/api/conversation', requireLogin, requireCredits, async (req, res) => {
		const { subject, message, listingId } = req.body;
		const { userId } = req.session;
		const listing = await Listing.findById(listingId);
		const conversation = await new Conversation({
			from: userId,
			subject,
			_listing: listingId,
			messages: message
		});
		// console.log(subject, message);
		res.send('Success');
	});
};
// const a = {
// 	from: { type: Schema.Types.ObjectId, ref: 'User' },
// 	to: { type: Schema.Types.ObjectId, ref: 'User' },
// 	subject: String,
// 	messages: [ MessageSchema ],
// 	_listing: { type: Schema.Types.ObjectId, ref: 'Listing' }
// };
