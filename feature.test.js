const sum = require('./sum');
const lib = require('./async');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2+2).toBe(4);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toStrictEqual({one: 1, two: 2});
});

test('contradiction', () => {
    expect(4+4).not.toBe(5);
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).toBeFalsy();
    expect(z).not.toBeTruthy();
})

test('two plus two', () => {
    const val = sum(2,2);
    expect(val).toBeGreaterThan(3);
    expect(val).toBeLessThan(5);
    expect(val).toBeLessThanOrEqual(4.5);

    // both toBe and toEqual works same to same for numbers

    expect(val).toBe(4);
    expect(val).toEqual(4);
})

const shoppingList = ['butter', 'paper', 'pen', 'milk', 'bag'];

test('the shopping list has milk in it', () => {
    expect(shoppingList).toContain('milk');
})

test('the data is relevel', () => {
    function cb(data) {
        expect(data).toBe('relevel');
    }

    lib.fetch(cb);
});

test('the data is relevel in promise', () => {
    return lib.fetchPromise().then(data => {
        expect(data).toBe('relevel');
    })
})

test('the data is relevel in promise', () => {
    return expect(lib.fetchPromise()).resolves.toBe('relevel');
})

test('the data is relevel in promise', async () => {
    const data = await lib.fetchPromise();
    expect(data).toBe('relevel');
})