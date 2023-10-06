import fp from 'fastify-plugin'

const authRoutes = fp(
	function (fastify, _, done) {
		fastify.route({
			method: 'POST',
			url: '/auth/login',
			handler: function (request, reply) {
				request.log.info('Auth route')
				reply.send({ hello: 'World' })
			}
		})

		fastify.route({
			method: 'POST',
			url: '/auth/logout',
			handler: function (request, reply) {
				request.log.info('Auth route')
				reply.send({ hello: 'World' })
			}
		})

		fastify.route({
			method: 'POST',
			url: '/auth/signup',
			handler: function (request, reply) {
				request.log.info('Auth route')
				reply.send({ hello: 'World' })
			}
		})

		fastify.route({
			method: 'GET',
			url: '/auth/hello',
			handler: function (request, reply) {
				request.log.info('Auth route')
				reply.send({ i: 'love you NOT' })
			}
		})

		done()
	},
	{ name: 'auth-routes' }
)

export default authRoutes
