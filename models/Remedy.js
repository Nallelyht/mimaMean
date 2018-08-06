const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remedySchema = new Schema(
	{
		idUser: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		ingredients: [
			{
				type: String,
				required: true
			}
		],
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment'
			}
		]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
);

module.exports = mongoose.model('Remedy', remedySchema);
