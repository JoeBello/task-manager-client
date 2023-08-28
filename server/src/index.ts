import path from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import fastifyAuth from '@fastify/auth'
import fastifyStatic from '@fastify/static'
import { api } from './api/index.ts'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST = path.join(__dirname, '../../client/dist')

const PORT = (process.env.PORT || 3000) as number

const fastify = Fastify({ logger: true })

fastify
	.decorate('authStepOne', function (request, reply, done) {
		console.log('authStepOne')
		done()
	})
	.decorate('authStepTwo', function (request, reply, done) {
		console.log('authStepTwo')
		done()
	})
	.register(fastifyStatic, {
		root: DIST,
		wildcard: false
	})
	.register(fastifyAuth)
	.after(() => {
		fastify.route({
			method: 'GET',
			url: '/test',
			preHandler: fastify.auth([fastify.authStepOne, fastify.authStepTwo], { run: 'all' }),
			handler: function (request, reply) {
				request.log.info('Auth route')
				reply.send({ hello: 'World' })
			}
		})
	})
	.register(api)
	.post('/auth/login', async function (_, reply) {
		console.log('Login')
		reply.send({ username: 'Someone' })
	})
	.post('/auth/logout', async function (_, reply) {
		console.log('Logout')
		reply.send({ message: 'Logged out' })
	})
	.post('/auth/signup', async function (_, reply) {
		console.log('Sign Up')
		reply.send({ username: 'Anyone' })
	})
	.get('/api', async function (_, reply) {
		console.log('API')
		reply.send({ message: 'API' })
	})
	.get('/*', async (_, reply) => {
		return reply.sendFile('index.html')
	})
	.listen({ port: PORT }, (err, address) => {
		if (err) {
			fastify.log.error(err)
			process.exit(1)
		}
		fastify.log.info(`server listening on ${address}`)
	})
