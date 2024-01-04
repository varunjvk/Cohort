/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s1 = str.toLowerCase()
  let res = ""
  for (let i = 0; i < s1.length; i++){
    let ith = s1[i].charCodeAt(0)
    if (ith >= 97 && ith <= 122) {
      res+=s1[i]
    }
  }
  let j = res.length - 1
  for (let i = 0; i < res.length / 2; i++){
    if (res[i] != res[j]) return false
    j--
  }
  return true;
}

module.exports = isPalindrome;
