import { join } from 'path';
import fastify from 'fastify';
import fastifyAutoload from '@fastify/autoload';

// const server = fastify({ logger: process.env.something_that_must_be_in_env_file });
// const server = fastify({ logger: fastify.config.something_that_must_be_in_env_file });
const server = fastify({ logger: true });
// For sake of Docker networking
const HOST = '0.0.0.0';

async function main() {
    await server.register(fastifyAutoload, {
        dir: join(__dirname, 'plugins'),
    });

    return server.listen({
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
