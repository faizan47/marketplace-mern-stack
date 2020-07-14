const { stripeSecretKey } = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(stripeSecretKey);
const mongoose = require('mongoose');
const User = mongoose.model('User');
const getUnreadCount = require('../utils/getUnreadCount');

module.exports = app => {
	app.post('/api/stripeSecret', requireLogin, async (req, res) => {
		const { amount } = req.body;
		const { userId } = req.session;
		const { email, role } = await User.findById(userId);
		if (role === 'distributor') {
			const { client_secret } = await stripe.paymentIntents.create({
				amount,
				currency: 'usd',
				description: 'Credits for contacting retailers',
				receipt_email: email,
				metadata: { userId, creditsAdded: false, amount }
			});
			return res.send(client_secret);
		}
		return res.status(401).send({ message: 'Only distributors can perform that action.' });
	});

	app.post('/api/updateCredits', requireLogin, async (req, res) => {
		const { userId } = req.session;
		const { metadata } = await stripe.paymentIntents.retrieve(req.body.paymentId);
		if (metadata.userId === userId && metadata.creditsAdded === 'false') {
			const { role, favourites, credits } = await User.findByIdAndUpdate(
				{ _id: userId },
				{
					$inc: { credits: metadata.amount / 100 }
				},
				{ new: true }
			);
			await stripe.paymentIntents.update(req.body.paymentId, {
				metadata: { creditsAdded: true }
			});
			const unreadCount = await getUnreadCount(role, userId);
			return res.send({ role, favourites, credits, unreadCount });
		}
		return res.status(409).send({ message: 'The request is invalid, or the request is already consumed.' });
	});
};
