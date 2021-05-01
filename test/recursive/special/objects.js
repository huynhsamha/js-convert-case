const jsConvert = require('../../../index');

function Car() {
  this.id = Date.now();
}

function Car2() {
  this.id = Date.now();
}

const Types = [Date, Car, Car2, RegExp];
// const Types = [Car, Car2];
// const Types = [];
// const Types = null;
// const Types = [Car, Car2, new Date()];
console.log(Types);

const car = new Car();
console.log(Car.prototype);
console.log(Car2.prototype);
console.log(car);
console.log(car instanceof Car); // true
console.log(car instanceof Car2); // false
console.log(car instanceof Object); // true


const obj = {
  Id: Date.now(),
  DateObject: new Date()
};

try {
  const ret = jsConvert.camelKeys(obj, { recursive: false, recursiveInArray: false, keepTypesOnRecursion: Types });
  console.log(ret);
  Object.keys(ret).forEach((k) => {
    console.log(typeof ret[k]);
  });
} catch (ex) {
  console.log(ex);
}

try {
  const ret = jsConvert.camelKeys(obj, { recursive: true, recursiveInArray: true, keepTypesOnRecursion: Types });
  console.log(ret);
  Object.keys(ret).forEach((k) => {
    console.log(typeof ret[k]);
  });
} catch (ex) {
  console.log(ex);
}
