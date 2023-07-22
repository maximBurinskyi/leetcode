console.log(30);
function removeDuplicates(nums) {
  console.log(nums);
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l++;
    }
  }
  return l;
}

console.log(removeDuplicates([1, 1, 2]));
