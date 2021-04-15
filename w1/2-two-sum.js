function twoSum(arr = [], target) {
  if (arr.length < 2) return [];
  // Brute force solution
  let response = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        let sum = arr[i] + arr[j];
        if (sum == target && response.length == 0) {
          response.push(i, j);
          break;
        }
      }
    }
  }

  return response;
}

function twoSumPlus(arr = [], target) {
  if (arr.length < 2) return [];
  // Hash Map Solution
  let hash = {};

  for (let i = 0; i <= arr.length; i++) {
    let current = arr[i];

    let diff = target - current;

    let j = hash[diff];

    if (j != undefined) {
      return [j, i];
    } else {
      hash[current] = i;
    }
  }
}

console.log(twoSum([], 1), '[]');
console.log(twoSum([2, 7, 1, 5], 9), '[0, 1]');
console.log(twoSum([3, -1, 0, 1], 0), '[1, 3]');
console.log('-----------');
console.log(twoSumPlus([], 1), '[]');
console.log(twoSumPlus([2, 7, 1, 5], 9), '[0, 1]');
console.log(twoSumPlus([3, -1, 0, 1], 0), '[1, 3]');
