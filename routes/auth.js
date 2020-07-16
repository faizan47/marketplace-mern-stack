const mongoose = require('mongoose');
const User = mongoose.model('User');
const { hashPassword, comparePassword } = require('../services/bcrypt');
const getUnreadCount = require('../utils/getUnreadCount');

module.exports = app => {
	app.post('/api/signup', async (req, res) => {
		const { name, company, email, password, role } = req.body;
		const hashedPassword = await hashPassword(password);
		const isExistingUser = await User.findOne({ email });
		if (!isExistingUser) {
			await new User({
				name,
				company,
				email,
				role,
				password: hashedPassword,
				joinDate: new Date()
			}).save();
			return res.send('Success!');
		}
		return res.status(409).send({ message: 'User already registered' });
	});

	app.post('/api/signin', async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) return res.status(401).send({ message: 'User not found' });

		const isVerified = await comparePassword(user.password, password);
		if (isVerified) {
			req.session.userId = user._id;
			await user.populate('favourites', '-id -__v -_user').execPopulate();
			const { role, favourites, credits, connectedListings } = user;
			const unreadCount = await getUnreadCount(role, req.session.userId);
			return res.send({ role, favourites, credits, unreadCount, connectedListings });
		}
		return res.status(401).send({ message: 'Invalid password.' });
	});
	app.get('/api/signout', (req, res) => {
		req.session = null;
		res.redirect('/');
	});
	app.get('/api/current_user', async (req, res) => {
		const { userId } = req.session;
		if (userId) {
			const { role, favourites, credits, connectedListings } = await User.findById(userId)
				.populate('favourites', '-id -__v -_user')
				.exec();
			const unreadCount = await getUnreadCount(role, userId);
			return res.send({ role, favourites, credits, unreadCount, connectedListings });
		}
		return res.send(false);
	});
};
