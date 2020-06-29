const mongoose = require('mongoose');
const User = mongoose.model('User');
const { hashPassword, comparePassword } = require('../services/bcrypt');

module.exports = app => {
	app.post('/api/signup', async (req, res) => {
		const { name, company, email, password } = req.body;
		const hashedPassword = await hashPassword(password);
		const isExistingUser = await User.findOne({ email });
		if (!isExistingUser) {
			await new User({
				name,
				company,
				email,
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
		if (!user) res.status(401).send('User not found');
		const isVerified = await comparePassword(user.password, password);
		if (isVerified) {
			req.session.userId = user._id;
			await user.populate('favourites', '-id -__v -_user').execPopulate();
			const { role, favourites } = user;
			res.send({ role, favourites });
		} else {
			res.status(401).send('Invalid email or password.');
		}
	});
	app.get('/api/signout', (req, res) => {
		req.session = null;
		res.redirect('/');
	});
	app.get('/api/current_user', async (req, res) => {
		if (req.session.userId) {
			const { role, favourites } = await User.findById(req.session.userId)
				.populate('favourites', '-id -__v -_user')
				.exec();
			res.send({ role, favourites });
		} else {
			res.send(false);
		}
	});
};
