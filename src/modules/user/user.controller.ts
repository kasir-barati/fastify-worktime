import { FastifyReply, FastifyRequest } from 'fastify';

import { CreateUserDto } from './user.dto';
import { createUserService } from './user.service';

export async function registerUserController(
    request: FastifyRequest<{
        Body: CreateUserDto;
    }>,
    reply: FastifyReply,
) {
    const user = await createUserService(request.body);

    return reply.status(201).send(user);
}
