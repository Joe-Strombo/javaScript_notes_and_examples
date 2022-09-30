/* let hi = () => { console.log('greetings'); }
hi(); */
/* 
let hi = (name) => { console.log(`greetings ${name}`) };
hi('Zoe');

let add = (a, b) => { return a+ b };
console.log(add(7,3)); */
/* 
let names = ['joe', 'zoe', 'hoe', 'toe' ];
names.map((name) => { console.log('greetings ${name}!') } );
 */
/* 
let names = ['joe', 'zoe', 'hoe', 'toe' ];
let i = 9;
names.map((name) => { i++; console.log('greetings ${name} ${i}!'); } );
 */


let names = ['joe', 'zoe', 'hoe', 'toe' ];
var transformed = names.map(names.map((name) => { return 'greetings ${name}!' } ));
console.log(transformed);