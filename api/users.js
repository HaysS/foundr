const controller = require('../controllers/user');
const router = require('express').Router();

router.route('/')
	.get(controller.getUsers)
	.post(controller.create)

module.exports = router;