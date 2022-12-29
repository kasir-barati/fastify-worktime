import { FastifyInstance } from 'fastify';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import fastifyPlugin from 'fastify-plugin';

const schema = {
    type: 'object',
    required: ['PORT', 'NODE_ENV', 'DATABASE_URL'],
    properties: {
        LOG_LEVEL: {
            enum: [
                'error',
                'warn',
                'info',
                'debug',
                'verbose',
                'fatal',
            ],
        },
        PORT: {
            type: 'string',
            default: '3000',
        },
        NODE_ENV: {
            enum: ['development', 'production', 'test'],
        },
        DATABASE_URL: {
            type: 'string',
        },
    },
};
const options: FastifyEnvOptions = {
    schema,
    dotenv: true,
};

export default fastifyPlugin(async (server: FastifyInstance) => {
    server.register(fastifyEnv, options).ready((err) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }

        server.log.info(server.config);
    });
});
