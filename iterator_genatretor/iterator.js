//  how object run in iterator....

const obj = {
  start: 0,
  stopped: 100,
  step: 5,
};

obj[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stopped;
  const step = this.step;
  console.log(current);
  return {
    next() {
      let currentValue = {
        value: current,
        done: current > stop,
      };

      current += step;

      return currentValue;
    },
  };
};

for (let i of obj) {
  console.log(i);
}
