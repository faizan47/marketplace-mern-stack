const mongoose = require('mongoose');
const Listing = mongoose.model('Listing');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.post('/api/listing', requireLogin, async (req, res) => {
		const listing = await new Listing({ ...req.body, _user: req.session.userId, datePosted: Date.now() }).save();
		res.send(listing);
	});
};
