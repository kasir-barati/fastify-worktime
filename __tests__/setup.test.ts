// Each test
const isUser = (name: string) => true;
const seedDummyUser = () => Promise.resolve('dummy users inserted');
const clearDummyUser = () => Promise.resolve('dummy users removed');

beforeEach(() => {
    return seedDummyUser();
});

test('Database has John doer', () => {
    expect(isUser('John doer')).toBeTruthy();
});

// Once
const clearDatabase = () => Promise.resolve('db cleared');
const seedDatabaseWithData = () => Promise.resolve('db seeded');
const isCity = (name: string) => true;

beforeAll(() => {
    return seedDatabaseWithData();
});

afterAll(async () => {
    await clearDatabase();
});

test('city database has Tokyo', () => {
    expect(isCity('Tokyo')).toBeTruthy();
});

test('city database has Hong Kong', () => {
    expect(isCity('Hong Kong')).toBeTruthy();
});

// Each test inside the describe
const seedFoodDatabase = () => Promise.resolve('Foods inserted');
const isValidCityFoodPair = (name: string, food: string) => true;
describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return seedFoodDatabase();
    });

    test('Vienna <3 veal', () => {
        expect(
            isValidCityFoodPair('Vienna', 'Wiener Schnitzel'),
        ).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});

afterEach(async () => {
    await clearDummyUser();
});
