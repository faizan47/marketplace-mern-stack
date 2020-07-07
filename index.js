const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
const keys = require('./config/keys');
app.use(bodyParser.json());
app.use(
	cookieSession({
		name: 'session',
		keys: keys.cookieSessionKeys
	})
);

require('./services/mongoose')();
require('./routes/auth')(app);
require('./routes/listings')(app);
require('./routes/favourites')(app);
require('./routes/payment')(app);
require('./routes/conversation')(app);

app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));

app.listen(port, () => console.log('Listening on port 5000'));
