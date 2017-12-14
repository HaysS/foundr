const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	// content: {
		// author: String,
		title: String,
		body: String,
		// footer: String,
	// },
	// updated: { 
	// 	type: Date, 
	// 	default: Date.now 
	// },
	// published: Boolean,
})

const Post = mongoose.model('Post', PostSchema);

module.exports = {
	Post: Post,
}