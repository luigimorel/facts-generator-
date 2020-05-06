const arr = require("./facts/facts.json");

const fact = {};

randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 5) * min);
};

module.exports.getRandomFact = function (fact) {
  const index = randomInteger(0, 100);

  return arr[index].fact;
};

module.exports.getFact = function () {
  const index = randomInteger(0, 100);
  fact = arr[index].fact;
  category = arr[index].category;

  return fact;
};
