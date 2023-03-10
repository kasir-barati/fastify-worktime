// Replace something that you do not have control over it or do not need to control it

function forEach(items: number[], callback: any) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

describe('Moch forEach function', () => {
    // const mockCallback = jest.fn((x) => 42 + x);

    // beforeEach(() => {
    //     forEach([0, 1], mockCallback);
    // });

    let mockCallback: jest.Mock<any, [x: any]>;

    beforeEach(() => {
        mockCallback = jest.fn((x) => 42 + x);
        forEach([0, 1], mockCallback);
    });

    test('The mock function is called twice', () => {
        expect(mockCallback.mock.calls.length).toBe(2);
    });

    test('The first argument of the first call to the function was 0', () => {
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    test('The first argument of the second call to the function was 1', () => {
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    });

    test('The return value of the first call to the function was 42', () => {
        expect(mockCallback.mock.results[0].value).toBe(42);
    });
});

describe("return 10, 'x', true, true", () => {
    const myMock = jest.fn();

    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('x')
        .mockReturnValue(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);
});
