import users from './users/users.service.js'

import messages from './messages/messages.service.js'

module.exports = function() {
	const app = this

	app.configure(users)
	app.configure(messages)
}
