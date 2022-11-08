// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

 var majorityElement = function(arr) {
    if (arr.length < 2) return arr[0];
    const arrCurrentNum = []
    let count = 0
    const finalArr = []
  
    for (let [index, item] of arr.entries()) {
      if(arrCurrentNum.includes(item)) {
          count = 0
          continue
      }
      if(index === 0 || !arrCurrentNum.includes(item)){
          arrCurrentNum.push(item)
          count++
      }
      for (let j = index; j < arr.length; j++) {
          if(item === arr[j + 1]) count++
      }
      finalArr.push( { currentNum: item,count: count, indexinArr: index})
      count = 0
  
    }
	let big = finalArr[0].currentNum
	let bigCount = finalArr[0].count
	for (const iterator of finalArr) {
		if(iterator.count > bigCount){
			bigCount = iterator.count
			big = iterator.currentNum
		}
	}
	return big
  };
  console.log(majorityElement([1,2,3,3,3,34,22,3,4,2,3,4,3,2,4,3,5,5]))
  console.log(majorityElement([1,3,1,1,4,1,1,5,1,1,6,2,2]))
  console.log(majorityElement([2,2,1,1,1,2,2]))
  
