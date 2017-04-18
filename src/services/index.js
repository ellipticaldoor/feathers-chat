import users from './users/users.service.js'

import messages from './messages/messages.service.js'

export default function() {
	const app = this

	app.configure(users)
	app.configure(messages)
}
