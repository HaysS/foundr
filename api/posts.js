const controller = require('../controllers/posts');
const router = require('express').Router();

router.route('/')
	.post(controller.create)

module.exports = router;