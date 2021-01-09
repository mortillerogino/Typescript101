function add(n1: number, n2: number) {
    return  n1 + n2;
}

function printNumber(num: number): void {
    console.log('Result: ' + num);
}

printNumber(add(5, 12));

let combineValues = add;

console.log(combineValues(8,8));