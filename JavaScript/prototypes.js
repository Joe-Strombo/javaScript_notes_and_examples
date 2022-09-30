let originalCar = {
    make: "mazda",
    model: "Cx9",
    year: 2013,
};

let newCar = Object.create(originalCar);

console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make);
console.log(newCar.whatever);


console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));