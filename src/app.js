import path from 'path'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import feathers from 'feathers'
import configuration from 'feathers-configuration'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'
import socketio from 'feathers-socketio'

import middleware from './middleware'
import services from './services'
import appHooks from './app.hooks'
import authentication from './authentication'

const app = feathers()

// Load app configuration
app.configure(configuration(path.join(__dirname, '..')))

// Enable CORS, security, compression and body parsing
app.use(cors())
app.use(helmet())
app.use(compress())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set up Plugins and providers
app.configure(hooks())
app.configure(rest())
app.configure(socketio())

app.configure(authentication)

// Set up our services (see `services/index.js`)
app.configure(services)

// Configure middleware (see `middleware/index.js`) - always has to be last
app.configure(middleware)
app.hooks(appHooks)

export default app
