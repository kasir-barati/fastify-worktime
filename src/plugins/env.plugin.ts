import { JSONSchemaType } from 'ajv';
import { EnvSchemaData } from 'env-schema';
import { FastifyInstance } from 'fastify';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import fastifyPlugin from 'fastify-plugin';

const schema: Omit<JSONSchemaType<EnvSchemaData>, 'required'> = {
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
    confKey: 'config', // Optional, default: 'config'
    schema,
    dotenv: true,
};

export default fastifyPlugin<FastifyEnvOptions>(
    async (server: FastifyInstance) => {
        await server.register(fastifyEnv, options);
    },
);
