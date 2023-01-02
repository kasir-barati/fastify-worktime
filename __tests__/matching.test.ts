// Dummy Test
const sum = (n1: number, n2: number) => n1 + n2;
const compileAndroidCode = () => {
    throw new Error('you are using the wrong JDK!');
};

describe('Matching expectations', () => {
    test('sum of 1 and 1', () => {
        // toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual or toStrictEqual instead:
        expect(sum(1, 1)).toBe(2);
        expect(sum(1, 1)).toEqual(2);
    });

    test('object assignment', () => {
        const data: { [x: string]: number } = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    });

    test('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });

    test('n is null, n is defined, n is falsy', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('z is zero, z is defined, z is falsy', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });

    test('4 > 3, 4 >= 3.5, 4 < 5, 4 <= 4.5, 4 === 4', () => {
        const result = sum(2, 2);
        expect(result).toBeGreaterThan(3);
        expect(result).toBeGreaterThanOrEqual(3.5);
        expect(result).toBeLessThan(5);
        expect(result).toBeLessThanOrEqual(4.5);

        // toBe and toEqual are equivalent for numbers
        expect(result).toBe(4);
        expect(result).toEqual(4);
    });

    test('0.1, 0.2 === 0.3', () => {
        const result = sum(0.1, 0.2);
        // expect(result).toBe(0.3); // This won't work because of rounding error
        expect(result).toBeCloseTo(0.3); // This works.
    });

    test('there is no "I" in "team"', () => {
        expect('team').not.toMatch(/I/);
    });

    test('there is a "stop" in "Christoph"', () => {
        expect('Christoph').toMatch(/stop/);
    });

    test('the shopping list has milk on it', () => {
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'milk',
        ];

        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
    });

    test('compiling android goes as expected', () => {
        expect(() => compileAndroidCode()).toThrow();
        expect(() => compileAndroidCode()).toThrow(Error);

        // You can also use a string that must be contained in the error message or a regexp
        expect(() => compileAndroidCode()).toThrow(
            'you are using the wrong JDK',
        );

        // Or you can match an exact error mesage using a regexp like below
        // The following test fails
        // expect(() => compileAndroidCode()).toThrow(
        //     /^you are using the wrong JDK$/,
        // );
        expect(() => compileAndroidCode()).toThrow(
            /^you are using the wrong JDK!$/,
        );
        expect(() => compileAndroidCode()).toThrow(/JDK/);
    });
});
