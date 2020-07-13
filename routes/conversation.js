const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Listing = mongoose.model('Listing');
const Conversation = mongoose.model('Conversation');
const User = mongoose.model('User');

module.exports = app => {
	// create first conversation
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
	//get conversation list
	app.get('/api/conversation', requireLogin, async (req, res) => {
		try {
			const { userId } = req.session;
			const { role } = await User.findById(userId);
			const getSender = role === 'distributor' ? 'from' : 'to';
			const getRecipient = role === 'distributor' ? 'to' : 'from';
			const conversation = await Conversation.find({ [getSender]: userId }, { messages: { $slice: -1 } })
				.sort([ [ 'messages.time', -1 ] ])
				.populate(getRecipient, 'company')
				.populate('_listing', 'title images')
				.exec();
			res.send(conversation);
		} catch (error) {
			console.log(error);

			res.status(401).send({ message: 'Something went wrong!' });
		}
	});
	//get single conversation
	app.get('/api/conversation/:conversationId', requireLogin, async (req, res) => {
		try {
			const { userId } = req.session;
			const { role } = await User.findById(userId);
			const getSender = role === 'distributor' ? 'from' : 'to';
			const getRecipient = role === 'distributor' ? 'to' : 'from';
			const isUnreadFlag = role === 'distributor' ? 'unreadByDistributor' : 'unreadByRetailer';
			const conversation = await Conversation.findOneAndUpdate(
				{
					[getSender]: userId,
					_id: req.params.conversationId
				},
				{ [isUnreadFlag]: 'false' },
				{ new: true }
			)
				.populate(getRecipient, 'company role')
				.populate('messages._user', 'role')
				.populate('_listing', 'title images')
				.exec();
			res.send(conversation);
		} catch (error) {
			res.status(401).send({ message: 'Something went wrong!' });
		}
	});
	// reply to a conversation
	app.post('/api/conversation/:conversationId', requireLogin, async (req, res) => {
		try {
			const { userId } = req.session;
			const { message } = req.body.values;
			const { role } = await User.findById(userId);
			const data = { _user: userId, message };
			const isUnreadFlag = role === 'retailer' ? 'unreadByDistributor' : 'unreadByRetailer';
			const getSender = role === 'distributor' ? 'from' : 'to';
			const conversation = await Conversation.findOneAndUpdate(
				{
					_id: req.params.conversationId,
					[getSender]: userId
				},
				{
					$push: { messages: data },
					[isUnreadFlag]: 'true'
				},
				{ new: true }
			)
				.populate('_listing', 'title images')
				.populate('messages._user', 'role')
				.exec();
			res.send(conversation);
		} catch (error) {
			res.status(401).send({ message: 'Something went wrong!' });
		}
	});
};
