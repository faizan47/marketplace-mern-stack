const mongoose = require('mongoose');
const User = mongoose.model('User');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.get('/api/favourites/', requireLogin, async (req, res) => {
		const userId = req.session.userId;
		const { favourites } = await User.findById(userId)
			.select('favourites -_id')
			.populate({ path: 'favourites' })
			.exec();
		res.send(favourites);
	});

	app.post('/api/favourites/', requireLogin, async (req, res) => {
		const userId = req.session.userId;
		const { listingId } = req.body;
		const user = await User.findByIdAndUpdate(
			{ _id: userId },
			{ $addToSet: { favourites: listingId } },
			{ new: true, select: 'role favourites -_id' }
		);
		res.send(user);
	});
	app.delete('/api/favourites/:listingId', requireLogin, async (req, res) => {
		const userId = req.session.userId;
		const { listingId } = req.params;
		console.log(listingId);

		const user = await User.findByIdAndUpdate(
			{ _id: userId },
			{ $pull: { favourites: listingId } },
			{ new: true, select: 'role favourites -_id' }
		);

		res.send(user);
	});
};
