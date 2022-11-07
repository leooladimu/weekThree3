/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


function range(start, end) {
  if (end <= start) {
    return [];
  }
  return [start, ...range(start + 1, end)]
}

// let results = [];
// if(start >= end) {
//   return results;
// }
// 
// results.push(start);
// return results.concat(range(start + 1, end));

  // if (end <= start) {
  //   return [];
// 
//   } else {
//     let recursiveStep = start + 1
//     let nums = range(recursiveStep, end);
//     console.log(nums);    
//     nums.unshift(start);
//     return nums;
//   }
// }

console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}