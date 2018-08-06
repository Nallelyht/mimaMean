const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const userSchema = new require('mongoose').Schema(
	{
		username: {
			type: String,
			required: true
		},
		photoURL: String,
		email: {
			type: String,
			required: true
		},
		role: {
			type: String,
			enum: [ 'USER', 'ADMIN' ],
			default: 'USER'
		},
		remedies: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Remedy'
			}
		],
		status: Boolean
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
);

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = require('mongoose').model('User', userSchema);
