// the for of loop work is iterable object, array, map, string, set etc..

// Array
let data = [10, 20, 30, 50, 10];
let sumofArray = 0;
for (let i of data) {
  sumofArray += i;
}
console.log(sumofArray);

// with object:

let objData = {
  x: 200,
  y: 101,
  z: 120,
};
let keyofObject = " ";
let sumofObject = 0;

for (let i of Object.values(objData)) {
  sumofObject += i;
}
console.log(sumofObject);

for (let i of Object.keys(objData)) {
  keyofObject += i;
}
console.log(keyofObject);

// USing string
let string = "RG@Ragib";
for (let i of string) {
  console.log(i);
}
