const fib = require('./fibonacci');


// 1) czy istnieje
test('fib exists', () => {
    expect(fib).toBeDefined();
});


// 2) czy jest funkcją
test('fib is a function', () => {
    expect(typeof fib).toEqual('function');
});


// 3) czy funkcja zwraca tablicę
test('fib returns an array', () => {
    expect(Array.isArray(fib(5))).toBeTruthy();
});


// 4) zwracane wartości
test.each`
    num   | expected
    ${1}  | ${[0]}
    ${2}  | ${[0, 1]}
    ${3}  | ${[0, 1, 1]}
    ${4}  | ${[0, 1, 1, 2]}
    ${10} | ${[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]}
`('num equal to $num gives $expected', ({num, expected}) => {
    expect(fib(num)).toEqual(expected);
});

test('args: 3, "str" and {} give [0, 1, 1]', () => {
    expect(fib(3, "str", {})).toEqual([0, 1, 1]);
});


// test.each`
//     num   |   args   | expected
//     ${1}  |  ${[]}   | ${[0]}
//     ${2}  |  ${[]}   | ${[0, 1]}
//     ${4}  |  ${[]}   | ${[0, 1, 1, 2]}
//     ${10} |  ${[]}   | ${[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]}
//     ${3}  | ${['str', {}]} | ${[0, 1, 1]}
// `('params: $num and $args give(s) $expected', ({num, args, expected}) => {
//     expect(fib(num, ...args)).toEqual(expected);
// });



// 5) rzucanie błędem
test('fib throws an error when num equals -1', () => {
    expect(() => fib(-1)).toThrow();
});

test('fib throws an error when num equals 0', () => {
    expect(() => fib(0)).toThrow("A 'num' parameter is not a positive integer. Please provide a proper parameter.");
});

test('fib throws an error when num equals 10.9854', () => {
    expect(() => fib(10.9854)).toThrow("A 'num' parameter is not a positive integer. Please provide a proper parameter.");
});

test('fib throws an error when num is NaN', () => {
    expect(() => fib(NaN, 2, 3)).toThrow();
});

test('fib throws an error when num is Infinity', () => {
    expect(() => fib(Infinity)).toThrow();
});