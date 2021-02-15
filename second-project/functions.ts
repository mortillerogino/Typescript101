function addNumbers(n1: number, n2: number) {
    return  n1 + n2;
}

function printNumber(num: number): void {
    console.log('Result: ' + num);
}

printNumber(addNumbers(5, 12));

let combineValues = addNumbers;

console.log(combineValues(8,8));