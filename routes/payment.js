const { stripeSecretKey } = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(stripeSecretKey);

module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			source: req.body.id,
			description: '5 email credits for $5'
		});
		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	});
};
