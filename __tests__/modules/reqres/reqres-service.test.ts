/* eslint-disable camelcase */

import axios from 'axios';
import { getUsersService } from '../../../src/modules/reqres/reqres.service';

const user = {
    id: 7,
    email: 'kasir.barati@gmail.com',
    first_name: 'Kasir',
    last_name: 'Barati',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
};
const getUsersMockReply = {
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [user],
    support: {
        url: 'https://reqres.in/#support-heading',
        text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
    },
};

jest.mock('axios');
const mockedAxios = jest.mocked(axios);
mockedAxios.get.mockResolvedValue({ data: getUsersMockReply });

describe('Test reqres service functions', () => {
    test('Get users service works appropriately', async () => {
        const result = await getUsersService();

        expect(result).toEqual(getUsersMockReply);
    });
});
