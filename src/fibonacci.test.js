const fib = require('./fibonacci');


// 1) czy istnieje
test('fib exists', () => {
    expect(fib).toBeDefined();
});


// 2) czy jest funkcją
test('fib is a function', () => {
    expect(typeof fib).toEqual('function');
});


// 3) zwracane wartości
test('num equal to 1 gives [0]', () => {
    expect(fib(1)).toEqual([0]);
});

test('num equal to 2 gives [0, 1]', () => {
    expect(fib(2)).toEqual([0, 1]);
});

test('num equal to 4 gives [0, 1, 1, 2]', () => {
    expect(fib(4)).toEqual([0, 1, 1, 2]);
});

test('num equal to 10 gives [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
    expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('args: 3, "str" and {} give [0, 1, 1]', () => {
    expect(fib(3, "str", {})).toEqual([0, 1, 1]);
});


// 4) rzucanie błędem
test('fib throws an error when num equals -1', () => {
    expect(() => { fib(-1) }).toThrow();
});

test('fib throws an error when num equals 0', () => {
    expect(() => { fib(0) }).toThrow("A 'num' parameter is not a positive integer. Please provide a proper parameter.");
});

test('fib throws an error when num is NaN', () => {
    expect(() => { fib(NaN, 2, 3) }).toThrow();
});

test('fib throws an error when num is Infinity', () => {
    expect(() => { fib(Infinity) }).toThrow();
});