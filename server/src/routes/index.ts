import fp from 'fastify-plugin'

export const routes = fp(function (fastify, _, done) {
	fastify.route({
		method: 'POST',
		url: '/auth/login',
		preHandler: fastify.auth([fastify.verifyPassword], { run: 'all' }),
		handler: function (request, reply) {
			request.log.info('Auth route')
			reply.send({ hello: 'World' })
		}
	})

	fastify.route({
		method: 'POST',
		url: '/auth/logout',
		preHandler: fastify.auth([fastify.verifyPassword], { run: 'all' }),
		handler: function (request, reply) {
			request.log.info('Auth route')
			reply.send({ hello: 'World' })
		}
	})

	fastify.route({
		method: 'POST',
		url: '/auth/signup',
		preHandler: fastify.auth([fastify.verifyPassword], { run: 'all' }),
		handler: function (request, reply) {
			request.log.info('Auth route')
			reply.send({ hello: 'World' })
		}
	})

	fastify.route({
		method: 'GET',
		url: '/hello',
		handler: function (request, reply) {
			request.log.info('Auth route')
			reply.send({ i: 'love you NOT' })
		}
	})

	done()
})
