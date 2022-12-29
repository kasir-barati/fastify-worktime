import { FastifyInstance } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
        config: {
            LOG_LEVEL?:
                | 'error'
                | 'warn'
                | 'info'
                | 'debug'
                | 'verbose'
                | 'fatal';
            NODE_ENV: 'development' | 'production' | 'test';
            PORT: string;
            DATABASE_URL: string;
        };
    }
}
