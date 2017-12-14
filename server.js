const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const databaseConfig = require('./config/db');

const app = express();

const port = 8000;

//Connect to mongoDB database
mongoose.connect(databaseConfig.url);
const db = mongoose.connection;

//Bind mongoose errors to console for easy viewing
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Include routes
const api = require('./api/index.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

//Connect to db and start server once done
db.once('open', () => {
	console.log('Database connection successful')

	//Start server
	app.listen(port, () => {
		console.log('Server is live on ' + port);
	})
})
