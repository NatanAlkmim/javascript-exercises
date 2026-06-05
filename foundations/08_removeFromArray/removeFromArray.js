const removeFromArray = function(arr, ...args) {
  return arr.filter(num => !args.includes(num))
};

console.log(removeFromArray([1, 2, 3, 4], 2, 3)) // should remove 3 and return [1,2,4]))

// Do not edit below this line
module.exports = removeFromArray;
