import path from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import fastifyAuth from '@fastify/auth'
import fastifyStatic from '@fastify/static'
import { routes } from './routes/index.ts'
import { decorators } from './decorators.ts'
// import { api } from './routes/api/index.ts'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST = path.join(__dirname, '../../client/dist')

const PORT = (process.env.PORT || 3000) as number

//github.com/fastify/fastify-auth/blob/7c09dd3a143df26302e2f200dde54ad0324d7da2/test/example.js#L99
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

// const app = fastify({logger: true})

const fastify = Fastify({ logger: true })

fastify.register(fastifyStatic, {
	root: DIST,
	wildcard: false
})

fastify.register(fastifyAuth)
fastify.register(routes)
// fastify.register(decorators)
// fastify.register(api, { prefix: '/api' })
fastify.after((err) => console.log({ err }))
fastify.register(decorators)

// fastify.decorate('verifyPassword', function (request, reply, done) {
// 	console.log('verifyPassword')
// 	done()
// })

// function routes() {
// 	fastify.route({
// 		method: 'POST',
// 		url: '/auth/login',
// 		preHandler: fastify.auth([fastify.verifyPassword], { run: 'all' }),
// 		handler: function (request, reply) {
// 			request.log.info('Auth route')
// 			reply.send({ hello: 'World' })
// 		}
// 	})

// 	fastify.route({
// 		method: 'POST',
// 		url: '/auth/logout',
// 		preHandler: fastify.auth([fastify.verifyPassword], { run: 'all' }),
// 		handler: function (request, reply) {
// 			request.log.info('Auth route')
// 			reply.send({ hello: 'World' })
// 		}
// 	})

// 	fastify.route({
// 		method: 'POST',
// 		url: '/auth/signup',
// 		preHandler: fastify.auth([fastify.verifyPassword], { run: 'all' }),
// 		handler: function (request, reply) {
// 			request.log.info('Auth route')
// 			reply.send({ hello: 'World' })
// 		}
// 	})

// 	fastify.route({
// 		method: 'GET',
// 		url: '/hello',
// 		handler: function (request, reply) {
// 			request.log.info('Auth route')
// 			reply.send({ i: 'love you' })
// 		}
// 	})

// 	return fastify
// }

fastify.listen({ port: PORT }, (err, address) => {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	fastify.log.info(`server listening on ${address}`)
})
