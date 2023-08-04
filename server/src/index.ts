import path from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST = path.join(__dirname, '../../client/dist')

const PORT = (process.env.PORT || 3000) as number

const fastify = Fastify({ logger: true })

fastify
	.register(fastifyStatic, {
		root: DIST,
		wildcard: false
	})
	.get('/api', async (_, reply) => {
		console.log('PING')
		return reply.send({ hello: 'world' })
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
