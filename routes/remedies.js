const express = require('express');
const router = express.Router();
const Remedy = require('../models/Remedy');
const User = require('../models/User');
//archivos
const multer = require('multer');
const uploads = multer({ dest: './public/images' });

//RESTful API

//get Remedy
router.get('/', (req, res, next) => {
	// res.send('Remedy')
	Remedy.find()
		.then((remedies) => {
			return res.status(200).json(remedies); //200: The request was fulfilled.
		})
		.catch((e) => next(e));
});

//post new Remedy
router.post(
	'/',
	/* uploads.single('image'),  */ (req, res) => {
		// if(req.file) req.body.image = '/images/' + req.file.filename
		Remedy.create(req.body)
			.then((remedy) => {
				User.findByIdAndUpdate(remedy.idUser, { $push: { remedies: remedy._id } }, { new: true })
					.then((user) => {
						console.log(user);
						return res.status(201).json(remedy);
					})
					.catch((e) => next(e));
			})
			.catch((err) => {
				return res.status(500).json(err);
			});
	}
);

//get one Remedy
router.get('/:id', (req, res) => {
	Remedy.findById(req.params.id)
		.populate('idUser')
		.populate('comments')
		.then((remedy) => {
			if (!remedy) return res.status(404);
			return res.status(200).json(remedy);
		})
		.catch((err) => {
			return res.status(500).json(err);
		});
});

//edit a Remedy
/* 
    this route make an update to the model Remedy, 
    but respect the filed even when they don't come in the update
*/
router.put('/:id', (req, res, next) => {
	Remedy.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((remedy) => {
			return res.status(202).json(remedy);
		})
		.catch((err) => {
			return res.status(404).json(err);
		});
});
//delete a Remedy

router.delete('/:id', (req, res, next) => {
	Remedy.findByIdAndRemove(req.params.id)
		.then((remedy) => {
			res.status(200).json(remedy);
		})
		.catch((e) => {
			res.status(500).json({ message: 'algo falló' });
			next(e);
		});
});

module.exports = router;
