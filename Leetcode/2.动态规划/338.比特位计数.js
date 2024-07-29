/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const ans = []
  for(let i = 0; i <= n; i++) {
    if(i > n) return
    let binary = i.toString(2)
    if(binary.includes('1')) {
      // 统计二进制 '1'的数量
      let binNum = 0
      for(let j = 0; j < binary.length; j++) {
        if(binary[j] === '1') binNum ++
      }
      ans.push(binNum)
    } else {
      ans.push(0)
    }
  }
  return ans
};
console.log(countBits(5))

// 动态规划解法：
var countBits2 = function(n) {
  const bits = new Array(n+1).fill(0)
  let hightBit = 0
  // for(let i =1; i)
};
// @lc code=end

