const express = require('express');
const app = express();
const path = require('path');

const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
	console.log('listening on port 3000');
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	// spreading our data (args)
	data
		? res.render('subreddit', { subreddit, ...data })
		: res.render('notfound', { subreddit });
	// using ternary operator
});
