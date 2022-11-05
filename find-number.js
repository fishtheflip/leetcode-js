const plusOne = (digits)=> {
    const digitstStrings = digits.map((i)=> '' + i)
    const digitsStringNumber = digitstStrings.join('')
    const digitsSumNumber = BigInt(digitsStringNumber) + BigInt(1)
    const digitsSumString = '' + digitsSumNumber
    const digitsArrSumString = digitsSumString.split('')
    const digitstArrSumNumber = digitsArrSumString.map(i=> i)
    return digitstArrSumNumber
};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
plusOne([1,2,3])
plusOne([9])