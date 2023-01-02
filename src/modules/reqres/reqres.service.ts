import axios from 'axios';
import { GetUsersDto } from './reqres.dto';

export async function getUsersService() {
    const { data: users } = await axios.get<GetUsersDto>(
        'https://reqres.in/api/users?page=2',
    );

    return users;
}
