const express = require('express');
const app = express();
const PORT = 3050;
const path = require('path');
const logger = require('morgan');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`${PORT} points to Ravenclaw`)
})