const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

module.exports = () => {
	mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, err => {
		if (err) {
			console.log(err);
		} else {
			console.log('Successfully connected to the database');
		}
	});
	require('../models/User');
	require('../models/Listing');
	// require('../models/Payments');
};
