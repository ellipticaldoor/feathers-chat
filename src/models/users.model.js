const NeDB = require('nedb')
const path = require('path')

export default function(app) {
	const dbPath = app.get('nedb')
	const Model = new NeDB({
		filename: path.join(dbPath, 'users.db'),
		autoload: true,
	})

	Model.ensureIndex({ fieldName: 'email', unique: true })

	return Model
}
