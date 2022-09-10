/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // let array = ['0']
  let array = []
  if(s.length === 1) return s
  for(let i = 0; i<= s.length; i++) {
    let maxString = s[i]
    for(let j =i+1; j<= s.length;j++) {
      if(!s[j]) continue;
      if(s[i] === s[j]) {
        maxString = maxString + s[j]
        // if(array[0].length <= maxString.length) {
        //   array.shift()
          // array.push(maxString)
        // }
        array.push(maxString)
      } else {
        // console.log(s[j])
        maxString = maxString +s[j]
        console.log(maxString)
      }
    }
  }
  console.log('arr',array)
  if(array.length ===0) return s[0]
  if(array.length === 1) return array[0]
  let maxStr = '1'
  // 从数组中找出最长字符串
  for(let i = 0; i<= array.length; i++) {
    for(let j =i+1; j<= array.length;j++) {
      if(!array[j]) continue
      // console.log(maxStr)
      // if(array[i].length >= array[j].length && array[j].length > maxStr.length)  {

      //   maxStr = array[i]
      // } 
    }
  }x
 return maxStr
};

console.log('result==',longestPalindrome('abcba'))
// @lc code=end

