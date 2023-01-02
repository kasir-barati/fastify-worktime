import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';
import { FastifyInstance } from 'fastify';

const user = z.object({
    name: z.string(),
    email: z.string().email(),
});
const hasPassword = z.object({ password: z.string().min(20) });
const hasId = z.object({ id: z.string().uuid() });

const createUserDto = user.merge(hasPassword);
const createUserReplyDto = user.merge(hasId);

export type CreateUserDto = z.infer<typeof createUserDto>;
export const { schemas: userSchemas, $ref } = buildJsonSchemas(
    {
        createUserDto,
        createUserReplyDto,
    },
    { $id: 'UserSchema' },
);
export function registerUserSchemas(server: FastifyInstance) {
    for (const schema of userSchemas) {
        server.addSchema(schema);
    }
}
