const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const databaseConfig = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(databaseConfig.url);
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
	console.log('Database connection successful')

	//Include routes
	require('./app/routes')(app, db);

	//Start server
	app.listen(port, () => {
		console.log('Server is live on ' + port);
	})
})
