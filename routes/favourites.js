const mongoose = require('mongoose');
const User = mongoose.model('User');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	// app.get('/api/favourites/', requireLogin, async (req, res) => {
	// 	const userId = req.session.userId;
	// 	const { favourites } = await User.findById(userId).select('favourites').populate({ path: 'favourites' }).exec();
	// 	console.log(favourites, 'ALL');
	// 	res.send(favourites);
	// });
	app.post('/api/favourites/', requireLogin, async (req, res) => {
		const userId = req.session.userId;
		const { listingId } = req.body;
		console.log(listingId, 'ADD');
		const { favourites } = await User.findByIdAndUpdate(
			{ _id: userId },
			{ $addToSet: { favourites: listingId } },
			{ new: true, select: 'favourites -_id _user' }
		)
			.populate({ path: 'favourites' })
			.exec();
		console.log(favourites, 'ADD_RESPONSE');

		res.send(favourites);
	});
	app.delete('/api/favourites/:listingId', requireLogin, async (req, res) => {
		const userId = req.session.userId;
		const { listingId } = req.params;
		const { favourites } = await User.findByIdAndUpdate(
			{ _id: userId },
			{ $pull: { favourites: listingId } },
			{ new: true, select: 'favourites' }
		)
			.populate({ path: 'favourites' })
			.exec();
		console.log(favourites, 'DELETE_RESPONSE');

		res.send(favourites);
	});
};
// .sort({ datePosted: -1 })
