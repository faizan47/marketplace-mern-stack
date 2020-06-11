const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');
require('./models/User');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
	if (err) {
		console.log(err);
	} else {
		console.log('Successfully connected to the database');
	}
});
app.get('/', (req, res) => res.send('It works!'));

app.listen(port, () => console.log('Listening on port 5000'));
