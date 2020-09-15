// Running node === node <filename>
// Global Object && methods, i.e setTimeout && setInterval
// __dirname === file directory without file
//  __filename === file directory with file

// const name = "green";

// const age = 17;

// console.log(name);

// const doubleAge = (age) => {
//   console.log(age * 2);
// };

// doubleAge(age);

// Global Object

setTimeout(() => {
  console.log("You just logged Timeout!");
  clearInterval(interval);
}, 4000);

const interval = setInterval(() => {
  console.log("You just logged Interval!");
}, 1000);

console.log(__dirname);
console.log(__filename);
