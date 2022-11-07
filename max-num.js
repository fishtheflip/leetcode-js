/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(arr) {
    if (arr.length < 2) return arr[0];
    const arrCurrentNum = []
    let count = 0
    const finalArr = []
  
    for (let [index, item] of arr.entries()) {
		// console.log(item, 'I');
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
	  console.log('FIN', finalArr);
  
    }
	let indexBig = finalArr[0].indexinArr
    for (let i = 0; i <= finalArr.length - 1; i++) {
		let sec = i + 1
		if(finalArr[sec]){
			if(finalArr[i].count < finalArr[sec].count){
				indexBig = finalArr[sec].indexinArr
		}
		// console.log('object');

		}
    }
    return arr[indexBig]
  };
  console.log(majorityElement([1,2,3,3,3,34,22,3,4,2,3,4,3,2,4,3,5,5]))
  console.log(majorityElement([1,3,1,1,4,1,1,5,1,1,6,2,2]))
  console.log(majorityElement([2,2,1,1,1,2,2]))
  
