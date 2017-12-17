const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	github: String,
	created: { 
		type: Date, 
		default: Date.now 
	},
})

const User = mongoose.model('User', UserSchema);

module.exports = {
	User: User,
}