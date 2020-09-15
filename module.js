// Importing people file - run module to run code in people
// Importing - Accessing people in Module

const { people, ages } = require("./people"); //returns an empty object. before exports

console.log(people);
console.log(ages);

const os = require("os");
console.log(os.platform(), os.homedir());
