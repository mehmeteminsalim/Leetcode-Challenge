/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let responseArray = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          responseArray = [i, j];
          break;
        }
      }
    }
  }

  return responseArray;
};
