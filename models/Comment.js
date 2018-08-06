const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		idRemedy: {
			type: Schema.Types.ObjectId,
			ref: 'Remedy'
		},
		idUser: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		body: {
			type: String,
			required: true
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
);

module.exports = mongoose.model('Comment', commentSchema);
