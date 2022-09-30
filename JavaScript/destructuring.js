let a, b, c, d, e;

let names = [ 'david', 'eddie', 'alex', 'michael', 'sammy'];

[a, b, c, e, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/*prints 
david
eddie 
alex 
sammy 
michael
*/

let others;

[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others);

/*prints 
david 
eddie 
['alex', 'michael', 'sammy']
*/


let year, model;
({year, model} = {
    make: 'bmw',
    model: 'omgwhyisthisguyobsessedwithbeemerswtf',
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);

/* prints 
2010
omgwhyisthisguyobsessedwithbeemerswtf
*/