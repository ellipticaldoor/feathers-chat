const NeDB = require('nedb')
const path = require('path')

export default function(app) {
	const dbPath = app.get('nedb')
	const Model = new NeDB({
		filename: path.join(dbPath, 'messages.db'),
		autoload: true,
	})

	return Model
}
