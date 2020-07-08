const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const Listing = mongoose.model('Listing');
const Conversation = mongoose.model('Conversation');
const User = mongoose.model('User');

module.exports = app => {
	app.post('/api/conversation', requireLogin, requireCredits, async (req, res) => {
		const { subject, message, listingId } = req.body;
		const { userId } = req.session;
		const { _user } = await Listing.findById(listingId);
		await new Conversation({
			from: userId,
			to: _user,
			subject,
			_listing: listingId,
			messages: [ { _user: userId, message } ]
		}).save();

		const { role, favourites, credits } = await User.findOneAndUpdate(
			{ _id: userId },
			{
				$inc: {
					credits: -1
				}
			},
			{ new: true }
		)
			.populate('favourites', '-id -__v -_user')
			.exec();

		return res.send({ role, favourites, credits });
	});
};
