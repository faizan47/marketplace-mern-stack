const mongoose = require('mongoose');
const User = mongoose.model('User');
const { hashPassword, comparePassword } = require('../services/bcrypt');

module.exports = app => {
	app.post('/api/signup', async (req, res) => {
		const { name, email, password } = req.body;
		const hashedPassword = await hashPassword(password);
		const isExistingUser = await User.findOne({ email });
		if (!isExistingUser) {
			await new User({
				name,
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
			const { role } = user;
			res.send({ role });
		} else {
			res.status(401).send('Invalid email or password.');
		}
	});
	app.get('/api/signout', (req, res) => {
		req.session = null;
		// redirect to be handled in react
		res.redirect('/');
	});
	app.get('/api/current_user', async (req, res) => {
		if (req.session.userId) {
			const { role } = await User.findById(req.session.userId);
			res.send({ role });
		} else {
			res.send(false);
		}
	});
};
