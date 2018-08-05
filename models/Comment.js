const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remedySchema = new Schema(
	{
		idUser: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		title: String,
		description: String,
		ingredients: [
			{
				type: String
			}
		],
		comments: [
			{
				type: String
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