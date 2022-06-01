const Express = require('express');
const database = require('./database');

const app = Express();

app.get('/home', (req, res) => {
	res.send(JSON.stringify(database.home));
});

app.get('/stats', (req, res) => {
	res.send(JSON.stringify(database.stats));
});

app.get('/location', (req, res) => {
	res.send(JSON.stringify(database.location));
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
