let pattern = /xyz/;
// console.log(pattern);
// console.log(typeof pattern);

let value = 'This is xyz a test.';

// console.log(pattern.test(value));
// this will print out a boolean

console.log(value.replace(pattern, 'just'));

// prints This is just a test.

console.log(value.match(pattern));
var match = value.match(pattern);
console.log(match.index);

