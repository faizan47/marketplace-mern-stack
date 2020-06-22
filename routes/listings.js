const mongoose = require('mongoose');
const Listing = mongoose.model('Listing');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.post('/api/listings', requireLogin, async (req, res) => {
		const listing = await new Listing({ ...req.body, _user: req.session.userId, datePosted: Date.now() }).save();
		res.send(listing);
	});

	app.get('/api/listings', async (req, res) => {
		const listings = await Listing.find({}).select('-_user -quantity').sort({ datePosted: -1 });
		res.send(listings);
	});

	app.get('/api/listings/self', requireLogin, async (req, res) => {
		const userId = req.session.userId;
		const listingsByUserId = await Listing.find({ _user: userId })
			.select('-_user -quantity')
			.sort({ datePosted: -1 });
		res.send(listingsByUserId);
	});

	app.delete('/api/listings/delete/:listingId', requireLogin, async (req, res) => {
		const userId = req.session.userId;

		const listing = await Listing.findOneAndDelete({
			_user: userId,
			_id: req.params.listingId
		});

		res.send(listing._id);
	});
	// app.get('/api/listings/:listingId', requireLogin, async (req, res) => {
	// 	const userId = req.session.userId;

	// 	const listing = await Listing.findOne({
	// 		_user: userId,
	// 		_id: req.params.listingId
	// 	});

	// 	res.send(listing);
	// });
};
