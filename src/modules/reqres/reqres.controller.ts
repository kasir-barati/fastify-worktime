import { FastifyReply, FastifyRequest } from 'fastify';
import { getUsersService } from './reqres.service';

export async function getUsersController(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const users = await getUsersService();

    return reply.status(200).send(users);
}
