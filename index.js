// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of flavors.
const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i];
  flavors.push(flavor);
}

/**
 * @param {flavors[]} flavors an array of integers
 * @returns {order} the object
 */

function getOrder(flavors) {
  const order = {};
  // Iterate through the array of flavors to create the order object
  for (let i = 0; i < flavors.length; i++) {
    if (order[flavors[i]]) {
      order[flavors[i]] = order[flavors[i]] + 1;
    } else {
      order[flavors[i]] = 1;
    }
  }
  return order;
}

console.table(getOrder(flavors));
