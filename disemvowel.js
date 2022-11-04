function disemvowel(str) {
    const owelArr = ['a', 'o', 'i', 'u', 'e', 'A', 'O', 'I', 'U', 'E']
    const retArr =[]
    for (let char of str){
      if(owelArr.includes(char)){
        continue
      }
      retArr.push(char)
    }
    return retArr.join('');
  }

const disemvowelLite = str => str.replace(/[aeiou]/gi,'');