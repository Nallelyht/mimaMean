const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const multer = require('multer');
const upload = multer({ dest: './public/assets' });

function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		console.log(req.user);
		return next();
	} else {
		res.json({ message: 'no tienes permiso' });
	}
}

router.get('/logout', (req, res, next) => {
	req.logout();
	res.send('cerrado ??? ');
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    const newUser = {};
    newUser.id = req.user._id;
	newUser.username = req.user.username;
	newUser.email = req.user.email;
	newUser.remedies = req.user.remedies;
	res.json(newUser);
});

router.post('/signup', (req, res, next) => {
	User.register(req.body, req.body.password)
		.then((user) => {
            const newUser = {};
            newUser.id = user._id;
			newUser.username = user.username;
			newUser.email = user.email;
			newUser.remedies = user.remedies;
			res.json(newUser);
		})
		.catch((err) => {
			return res.status(500).json(err);
		});
});

module.exports = router;
