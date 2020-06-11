const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('It works!'));

app.listen(5000, () => console.log('Listening on port 5000'));
