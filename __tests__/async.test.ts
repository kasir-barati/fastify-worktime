// Dummy test
const fetchData = () => Promise.resolve('peanut butter');
const raiseError = () => Promise.reject('no peanut butter for you');

test('the data is peanut butter', () => {
    // Return is required since without it we face UnhandledPromiseRejection
    // Be sure to return (or await) the promise - if you omit the return/await statement, your test will complete before the promise returned from fetchData resolves or rejects.
    return fetchData().then((data) => {
        expect(data).toBe('peanut butter');
    });

    // await expect(fetchData()).resolves.toBe('peanut butter');
    // return expect(fetchData()).resolves.toBe('peanut butter');

    // const data = await fetchData();
    // expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await raiseError();
    } catch (e) {
        expect(e).toMatch('no peanut butter for you');
    }

    // await expect(fetchData()).rejects.toMatch('no peanut butter for you');
    // return expect(fetchData()).rejects.toMatch('no peanut butter for you');
    // return fetchData().catch(e => expect(e).toMatch('no peanut butter for you'));
});
