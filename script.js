// String mavjud prototypelar bilan tanishish usuli.
console.dir(String);

const cars = {
  color: "white",
  isBuy: true,
  isArmor: function () {
    console.log("Armor does not available");
  },
};

const bmw = {
  color: "red",
};

// old way to combine two objects into one
// bmw.__proto__ = Car;

//modern way to combine two objects into one
Object.setPrototypeOf(bmw, cars);
bmw.isArmor();
console.log(bmw.isBuy);

//Another modern way to combine two objects into one
const nexia = Object.create(cars);
console.log(nexia.isBuy + nexia.color + nexia.isArmor);
