import fastify from 'fastify'
import { FastifyAuthFunction } from '@fastify/auth'

declare module 'fastify' {
	export interface FastifyInstance {
		authStepOne: FastifyAuthFunction
		authStepTwo: FastifyAuthFunction
	}
}
