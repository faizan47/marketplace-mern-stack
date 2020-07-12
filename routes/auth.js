const mongoose = require('mongoose');
const User = mongoose.model('User');
const Conversation = mongoose.model('Conversation');
const { hashPassword, comparePassword } = require('../services/bcrypt');

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
			const { role, favourites, credits } = user;
			return res.send({ role, favourites, credits });
		} else {
			res.status(401).send({ message: 'Invalid password.' });
		}
	});
	app.get('/api/signout', (req, res) => {
		req.session = null;
		res.redirect('/');
	});
	app.get('/api/current_user', async (req, res) => {
		if (req.session.userId) {
			const { role, favourites, credits } = await User.findById(req.session.userId)
				.populate('favourites', '-id -__v -_user')
				.exec();
			const getSender = role === 'distributor' ? 'from' : 'to';
			let unreadCount = 0;
			const conversations = await Conversation.find({ [getSender]: req.session.userId });
			conversations.forEach(({ unreadByDistributor, unreadByRetailer }) => {
				if (role === 'distributor' && unreadByDistributor === 'true') {
					unreadCount++;
				}
				if (role === 'retailer' && unreadByRetailer === 'true') {
					unreadCount++;
				}
			});
			res.send({ role, favourites, credits, unreadCount });
		} else {
			res.send(false);
		}
	});
};
