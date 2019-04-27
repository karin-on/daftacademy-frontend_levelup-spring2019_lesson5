const fib = (num, ...args) => {
    // const num = args.shift();

    // try {
    if (!Number.isInteger(num) || num <= 0) {
        throw new Error("A 'num' parameter is not a positive integer. Please provide a proper parameter.");
    }

    switch(num) {
        case 1: return [0];
        case 2: return [0, 1];
    }

    const arr = [0, 1];
    let [a, b] = arr;
    let x = 3;

    while (x++ <= num) {
        arr.push(a + b);
        [a, b] = [b, a + b];
    }

    return arr;

    // } catch(e) {
    //     console.error(e);
    // }
};

// console.log(fib(4.2));
// console.log(fib(-10));
// console.log(fib([6,7]));
// console.log(fib(4));

module.exports = fib;