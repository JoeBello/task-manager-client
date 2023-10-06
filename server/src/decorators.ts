import fp from 'fastify-plugin'

export const decorators = fp(function (fastify, _, done) {
	fastify.decorate('verifyPassword', function (request, reply, done) {
		console.log('verifyPassword')
		done()
	})

	done()
})
