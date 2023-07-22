function removeElement(nums, val) {
  console.log(nums);
  let pointer = 0;
  if (!nums) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}

console.log(removeElement([3, 2, 1, 2, 3], 3));
