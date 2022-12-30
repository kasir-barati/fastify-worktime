import { join } from 'path';
import fastify from 'fastify';
import fastifyAutoload from '@fastify/autoload';

// const server = fastify({ logger: process.env.something_that_must_be_in_env_file });
// const server = fastify({ logger: fastify.config.something_that_must_be_in_env_file });
const server = fastify({ logger: true });
const HOST = '0.0.0.0';

server.register(fastifyAutoload, {
    dir: join(__dirname, 'plugins'),
});

function main() {
    return server.listen({
        port: Number('3000'),
        // For sake of Docker networking
        host: HOST,
    });
}

main()
    .then((result) => {
        server.log.info(
            { port: '3000', host: HOST, result },
            ' server is up & runing',
        );
    })
    .catch((error) => {
        server.log.error(
            {
                port: '3000',
                host: HOST,
                error: { message: error.message },
            },
            ' server could not start',
        );
    });
