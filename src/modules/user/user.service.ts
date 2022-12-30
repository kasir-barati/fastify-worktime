import { hash } from 'argon2';
import { prisma } from '../../utils/prisma.util';
import { CreateUserDto } from './user.dto';

export async function createUserService(
    createUserDto: CreateUserDto,
) {
    return prisma.user.create({
        data: {
            name: createUserDto.name,
            email: createUserDto.email,
            password: await hash(createUserDto.password),
        },
    });
}
