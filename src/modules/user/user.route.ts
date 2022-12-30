import { FastifyInstance } from 'fastify';
import { registerUserController } from './user.controller';
import { $ref } from './user.dto';

export default async function userRoutes(server: FastifyInstance) {
    server.post(
        '/',
        {
            schema: {
                body: $ref('createUserDto'),
                response: {
                    201: $ref('createUserReplyDto'),
                },
            },
        },
        registerUserController,
    );
}
