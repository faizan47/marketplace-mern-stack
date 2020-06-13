const mongoose = require('mongoose');
const User = mongoose.model('User');
const { hashPassword, comparePassword } = require('../services/bcrypt');

module.exports = app => {
	app.post('/api/signup', async (req, res) => {
		const { name, email, password } = req.body;
		const hashedPassword = await hashPassword(password);
		const isNewUser = await User.findOne({ email });
		console.log(isNewUser, 'response');

		if (!isNewUser) {
			// console.log(isNewUser);
			const user = await new User({
				name,
				email,
				password: hashedPassword,
				joinDate: new Date()
			}).save();
			return res.send(user);
		}
		return res.status(409).send({ message: 'User already registered' });
	});

	app.post('/api/signin', async (req, res) => {
		const { email, role, password } = req.body;
		console.log(req.body);
		const user = await User.findOne({ email });
		const isVerified = await comparePassword(user.password, password);
		if (isVerified) {
			req.session.userId = user._id;
			res.send({ email, role });
		} else {
			res.send('Invalid email or password.');
		}
	});
	app.post('/api/signout', (req, res) => {
		req.session = null;
		// redirect to be handled in react
		res.redirect('/');
	});
};
