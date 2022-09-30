/*yo = 'Greetings';

let name = 'Joe!'

console.log(yo + ' ' + name);
*/

/*
function sayHello(name) {
    console.log('--------------------');
    console.log('Greetings ' + name + '!');
    console.log('--------------------');
}

sayHello('Joe');
sayHello('Bob');
*/

/*
firstName = 'Olive ';
lastName = 'Skelton'

console.log('Hello ' + firstName + lastName + '!');

*/



function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);