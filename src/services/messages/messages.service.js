// Initializes the `messages` service on path `/messages`
import createService from 'feathers-nedb'
import createModel from '../../models/messages.model'
import hooks from './messages.hooks'
import filters from './messages.filters'

module.exports = function() {
	const app = this
	const Model = createModel(app)
	const paginate = app.get('paginate')

	const options = {
		name: 'messages',
		Model,
		paginate,
	}

	// Initialize our service with any options it requires
	app.use('/messages', createService(options))

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('messages')

	service.hooks(hooks)

	if (service.filter) service.filter(filters)
}
