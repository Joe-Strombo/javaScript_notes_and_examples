function sayHello(name) {
    return function() {
        console.log('Greetings ' + name + "!");
    }
}

let hiPenny = sayHello('Penny');
let hiOlive = sayHello('Olive');
let hiRiver = sayHello('River');

hiPenny();
hiOlive();
hiRiver();