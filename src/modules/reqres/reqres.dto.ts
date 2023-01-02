/* eslint-disable camelcase */

import { FastifyInstance } from 'fastify';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const user = z.object({
    id: z.number(),
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    avatar: z.string(),
});

const getUsersReplyDto = z.object({
    page: z.number(),
    per_page: z.number(),
    total: z.number(),
    total_pages: z.number(),
    data: z.array(user),
});

export type GetUsersDto = z.infer<typeof getUsersReplyDto>;
export const { schemas: getUsersSchema, $ref } = buildJsonSchemas(
    {
        getUsersReplyDto,
    },
    { $id: 'ReqresSchema' },
);
export function registerGetUsersSchemas(server: FastifyInstance) {
    for (const schema of getUsersSchema) {
        server.addSchema(schema);
    }
}
