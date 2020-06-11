const bcrypt = require('bcrypt');
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function checkUser(username, password) {
	//... fetch user from a db etc.

	const match = await bcrypt.compare(password, user.passwordHash);

	if (match) {
		//login
	}

	//...
}
