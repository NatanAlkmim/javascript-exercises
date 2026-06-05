const repeatString = function(str, num) {
  if (num < 0) {
    return "ERROR";
  }
  return str.repeat(num);
};

console.log(repeatString('hey', 1)) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
