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

	app.get('/api/conversation', requireLogin, async (req, res) => {
		try {
			const { userId } = req.session;
			const { role } = await User.findById(userId);
			const getSender = role === 'distributor' ? 'from' : 'to';
			const getRecipient = role === 'distributor' ? 'to' : 'from';
			const conversation = await Conversation.find({ [getSender]: userId })
				.populate(getRecipient, 'company')
				.populate('_listing', 'title images')
				.exec();
			res.send(conversation);
		} catch (error) {
			res.send({ message: 'Something went wrong!' });
		}
	});
};
