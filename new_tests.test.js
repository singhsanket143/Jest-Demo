const search = require('./search');

const arr = [6,5,4,3,2,1];
function prepare() {
    arr.sort();
}

beforeEach(() => {
    prepare();
})

test('if 4 is present or not', () => {
    expect(search(arr, 4)).toBe(true);
})

