const fact = require("./index.js");

/**
 *@params {} void
 * returns {fact}
 */
const fetchFact = fact.getFact();

/**
 * Log the fact to the console
 */
console.log("***********************************\n\n");
console.log(fetchFact.category);
console.log("****************\n");

console.log(fetchFact.fact);
console.log("****************\n\n");
