import handler from 'feathers-errors/handler'
import notFound from 'feathers-errors/not-found'

export default function() {
	// Add your custom middleware here. Remember, that
	// in Express the order matters, `notFound` and
	// the error handler have to go last.
	const app = this

	app.use(notFound())
	app.use(handler())
}
