// const { authenticate } = require('feathers-authentication').hooks
import { hooks as auth } from 'feathers-authentication'
import { hooks as localAuth } from 'feathers-authentication-local'

import commonHooks from 'feathers-hooks-common'
import gravatar from '../../hooks/gravatar'

const { authenticate } = auth
const { hashPassword } = localAuth

module.exports = {
	before: {
		all: [],
		find: [authenticate('jwt')],
		get: [authenticate('jwt')],
		create: [hashPassword(), gravatar()],
		update: [authenticate('jwt')],
		patch: [authenticate('jwt')],
		remove: [authenticate('jwt')],
	},

	after: {
		all: [
			commonHooks.when(
				hook => hook.params.provider,
				commonHooks.discard('password')
			),
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
