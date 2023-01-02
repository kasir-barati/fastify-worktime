import { FastifyInstance } from 'fastify';
import { $ref } from './reqres.dto';
import { getUsersController } from './reqres.controller';

export default async function reqresRoutes(server: FastifyInstance) {
    server.get(
        '/users',
        {
            schema: {
                response: { 200: $ref('getUsersReplyDto') },
            },
        },
        getUsersController,
    );
}
