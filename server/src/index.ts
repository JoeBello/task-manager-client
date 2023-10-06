import path from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import apiRoutes from './routes/api.ts'
import authRoutes from './routes/auth.ts'

// TODO - tsconfig paths

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const DIST = path.join(__dirname, '../../client/dist')

const PORT = (process.env.PORT || 3000) as number

const app = Fastify({ logger: true })

app.register(fastifyStatic, { root: DIST })
	.register(authRoutes)
	.register(apiRoutes)
	.after(function (err) {
		if (err) {
			app.log.error(err)
			process.exit(1)
		}
	})
	.listen({ port: PORT })

//github.com/fastify/fastify-auth/blob/7c09dd3a143df26302e2f200dde54ad0324d7da2/test/example.js#L99
// https://www.npmjs.com/package/@fastify/session
// https://www.npmjs.com/package/@fastify/cookie
// TODO
// Rough out log in flow
// deps
// passport
// fastify passport
// fastify session? (express session)
// passport strategy
// initialize middleware - passport/strategy/session
// implement authentication strategy
// authUser - function to access persistence and return user
// serializeUser - attach authenticated user to passport object on session
// deserializeUser - retrieve user from session and attach to request object
// passport.authenticate middleware - implement authentication call in protected routes
// req.isAuthenticated
// req.logout
// review OWASP session management cheat sheet

// Questions
// What do we provide to the client - user object, session id, cookie ?
// Any session configuration required?
// How long do sessions last?
// Where and why to use cookies? (https://www.npmjs.com/package/@fastify/cookie)
// How should Sign Up flow work?
