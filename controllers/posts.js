const Post = require("../models/post").Post

exports.create = (req, res, next) => {
	const newPost = new Post();
	newPost.content = req.body.content

	console.log('Creating new post with the following data: ', req.body)

	newPost.save((err) => {
		if(err)
			return next(err);

		res.json({
			message: 'New post created.'
		})
	})
}