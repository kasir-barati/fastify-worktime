import { join } from 'path';
import fastify from 'fastify';
import fastifyAutoload from '@fastify/autoload';
import userRoutes from './modules/user/user.route';
import { registerUserSchemas } from './modules/user/user.dto';
import { registerGetUsersSchemas } from './modules/reqres/reqres.dto';
import reqresRoutes from './modules/reqres/reqres.route';

// const server = fastify({ logger: process.env.something_that_must_be_in_env_file });
// const server = fastify({ logger: fastify.config.something_that_must_be_in_env_file });
const server = fastify({ logger: true });
// For sake of Docker networking
const HOST = '0.0.0.0';

async function main() {
    await server.register(fastifyAutoload, {
        dir: join(__dirname, 'plugins'),
        // FIXME: It did not work, global prefix
        // prefix: '/api',
    });

    registerGetUsersSchemas(server);
    registerUserSchemas(server);

    server
        .register(userRoutes, { prefix: '/api/users' })
        .register(reqresRoutes, { prefix: '/api/reqres' })
        .listen({
            port: Number(server.config.PORT),
            host: HOST,
        });
}

main()
    .then((result) => {
        server.log.info(
            { port: server.config.PORT, host: HOST, result },
            ' server is up & runing',
        );
    })
    .catch((error) => {
        server.log.error(
            {
                port: server.config.PORT,
                host: HOST,
                error: { message: error.message },
            },
            ' server could not start',
        );
    });
