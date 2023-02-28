// function* genarator() {
//   yield 12;
//   yield [20, 40, 405, 60];
// }
// let y = genarator();
// console.log(y.next());
// console.log(y.next());

// create a range function::::--------

function* range(start = 0, stop = Infinity, step = 1) {
  let number = 0;
  for (let i = 0; i < stop; i += step) {
    number++;
    yield i;
  }
  return number;
}
for (let v of range()) {
  console.log(v);
}

// const rengeFunc = range();
// console.log(rengeFunc.next());
// console.log(rengeFunc.next());

// console.log(rengeFunc.next());
