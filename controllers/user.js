const User = require("../models/user").User

//Get posts ordered by most recently updated first
exports.getUsers = (req, res, next) => {
	console.log('Getting users from database.')
	
	User.find({}, (err, users) => {
		//Sort by last updated date
		users.sort((a, b) => {
			a = new Date(a.created.date);
		    b = new Date(b.created.date);
		    return a>b ? -1 : a<b ? 1 : 0;
		})

		res.send(users);
	})
}

//Create new post
exports.create = (req, res, next) => {
	const newUser = new User();
	newUser.username = req.body.username;
	newUser.password = req.body.password;
	newUser.email = req.body.email;
	newUser.github = req.body.github;

	console.log('Creating new post with the following data: ', req.body)

	newUser.save((err) => {
		if(err)
			return next(err);

		res.json({
			message: 'New user created.'
		})
	})
}