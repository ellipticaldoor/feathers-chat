import { hooks as auth } from 'feathers-authentication'

const { authenticate } = auth
import processMessage from '../../hooks/process-message'
import { populate } from 'feathers-hooks-common'

module.exports = {
	before: {
		all: [authenticate('jwt')],
		find: [],
		get: [],
		create: [processMessage()],
		update: [processMessage()],
		patch: [processMessage()],
		remove: [],
	},

	after: {
		all: [
			populate({
				schema: {
					include: [
						{
							service: 'users',
							nameAs: 'user',
							parentField: 'userId',
							childField: '_id',
						},
					],
				},
			}),
		],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},
}
