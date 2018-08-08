const express = require('express');
const router = express.Router();
const Remedy = require('../models/Remedy');
const User = require('../models/User');
const Comment = require('../models/Comment');
//archivos
const multer = require('multer');
const uploads = multer({ dest: './public/images' });

//RESTful API

//get Comment
router.get('/', (req, res, next) => {
	// res.send('Comment')
	Comment.find()
		.then((comments) => {
			return res.status(200).json(comments); //200: The request was fulfilled.
		})
		.catch((e) => next(e));
});

//post new Comment
router.post(
	'/', (req, res) => {
		Comment.create(req.body)
			.then((comment) => {
				Remedy.findByIdAndUpdate(comment.idRemedy, { $push: { comments: comment._id } }, { new: true })
					.then((remedy) => {
						console.log(remedy);
						return res.status(201).json(comment);
					})
					.catch((e) => next(e));
			})
			.catch((err) => {
				return res.status(500).json(err);
			});
	}
);

//get one Comment
router.get('/:id', (req, res) => {
	Comment.findById(req.params.id)
		.populate('idUser')
		.then((comment) => {
			if (!comment) return res.status(404);
			return res.status(200).json(comment);
		})
		.catch((err) => {
			return res.status(500).json(err);
		});
});

//edit a comment
/* 
    this route make an update to the model comment, 
    but respect the filed even when they don't come in the update
*/
router.put('/:id', (req, res, next) => {
	Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((comment) => {
			return res.status(202).json(comment);
		})
		.catch((err) => {
			return res.status(404).json(err);
		});
});
//delete a Comment

router.delete('/:id', (req, res, next) => {
	Comment.findByIdAndRemove(req.params.id)
		.then((comment) => {
			res.status(200).json(comment);
		})
		.catch((e) => {
			res.status(500).json({ message: 'algo falló' });
			next(e);
		});
});

module.exports = router;