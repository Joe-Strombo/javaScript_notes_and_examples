/*
let a = sayHello;
a();
a();




function sayHello() {
    console.log('--------------------------');
    console.log('hello!');
    console.log('--------------------------');
}

sayHello('joe');
sayHello('poop');
sayHello('larry');
*/

function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);