//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity

//Example 1:

//Input: nums = [1,3,5,6], target = 5
//Output: 2

//Example 2:

//Input: nums = [1,3,5,6], target = 2
//Output: 1

//Example 3:

//Input: nums = [1,3,5,6], target = 7
//Output: 4
const searchInsert = (nums, target) => {
  const findNumber = nums.findIndex((i) => i === target);
  if (findNumber > -1) return findNumber;
  if (findNumber === -1) {
    const arrNew = [];
    let isChecked = false;
    nums.map((i, index) => {
      if (index === nums.length - 1) {
        if (target > i) {
          arrNew.push(i);
          arrNew.push(target);
        }
      }
      if (target < i) {
        if (!isChecked) {
          arrNew.push(target);
          isChecked = true;
        }
      }
      if (index !== arrNew.length - 1) {
        arrNew.push(i);
      }
    });
    return arrNew.findIndex((i) => i === target);
  }
};
