const { stripeSecretKey } = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(stripeSecretKey);

module.exports = app => {
	app.get('/api/payment', requireLogin, async (req, res) => {
		// const { client_secret } = req.body;
		const intent = await stripe.paymentIntents.create({
			amount: 500,
			currency: 'usd',
			// source: req.body.id,
			description: '5 email credits for $5'
		});
		res.json({ client_secret: intent.client_secret });
		// console.log(data);

		// res.json({ client_secret: intent.client_secret });
		// console.log(client_secret, 'client_secret');

		// const { role, favourites, credits } = await User.findById(req.session.userId)
		// 	.populate('favourites', '-id -__v -_user')
		// 	.exec();
		// res.send({ role, favourites, credits });
	});
};
