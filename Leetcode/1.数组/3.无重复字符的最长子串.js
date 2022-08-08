/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let maxLength = 1;
 for(let i =0; i<= s.length -1; i ++) {
  let subString = s[i]
  if(!subString.includes(s[i+1])) {
    subString += s[i+1]
  } else {
    if(subString.length > maxLength) {
      maxLength = subString.length
    }
    
    console.log('s2',i,subString);
    s2 = s.split(subString)[1]
    if(!s2) return maxLength
    if(s2.length >= subString.length) {
      lengthOfLongestSubstring(s2)
    }
    
  }
 }
 return maxLength
};
console.log(lengthOfLongestSubstring('pwwkew'))
// @lc code=end

