const Post = require("../models/post").Post

exports.create = (req, res, next) => {
	console.log(req)
	const newPost = new Post(req.body);

	console.log('Creating new post')

	newPost.save((err) => {
		if(err)
			return next(err);

		res.json({
			message: 'New post created.'
		})
	})
}