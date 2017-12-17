const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	content: {
		author: String,
		title: String,
		body: String,
	},
	updated: { 
		type: Date, 
		default: Date.now 
	},
})

const User = mongoose.model('Post', PostSchema);

module.exports = {
	User: User,
}