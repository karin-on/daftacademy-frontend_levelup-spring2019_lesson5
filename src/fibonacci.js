const fib = (num, ...args) => {

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
};


module.exports = fib;