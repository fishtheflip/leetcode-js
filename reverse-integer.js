// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21


var reverse = function(x) {
    if(x < 0){
        const strNum = x * -1 + ''
        const numArr = strNum.split('').reverse().join('')
        return numArr * -1 < -2147483650 ? 0: numArr * -1
    }
    if(x > 0){
        const strNum = x + ''
        const numStr = strNum.split('').reverse().join('')
        return numStr > 2147483650 ? 0 : numStr
    } 
    if(x === 0) return 0
};