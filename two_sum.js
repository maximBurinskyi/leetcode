function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j > 0; j--) {
      if (nums[i] + nums[j] === target && i != j) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([1, 3, 4, 2], 6));
