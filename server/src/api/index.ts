import fp from 'fastify-plugin'

export const api = fp(
	function (fastify, _, done) {
		fastify
			.get('/api/hello', () => {
				return { hello: 'world' }
			})
			.get('/api/goodbye', () => {
				return { goodbye: 'world' }
			})
			.get('/api/*', () => {
				return '404'
			})

		done()
	},
	{ name: 'api' }
)
