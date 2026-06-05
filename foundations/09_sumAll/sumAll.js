const sumAll = function(...arr) {
  const maior = Math.max(...arr);
  const menor = Math.min(...arr);
  let nums = [];

  for (let i = menor; i <= maior; i++) {
    nums.push(i);
  }
  return nums.reduce((acc, cur) => acc + cur, 0);
};

console.log(sumAll(1, 4)) // returns the sum of 1 + 2 + 3 + 4 which is 10)

// Do not edit below this line
module.exports = sumAll;
