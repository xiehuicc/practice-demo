/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let num = nums1.concat(nums2)
  console.log(num)
  for(let i = 0; i<= num.length; i ++) {
    for(let j = i+1; j<=num.length; j++) {
      if(num[i] > num[j]) {
        let k = num[j]
        num[j] = num[i]
        num[i] = k
      }
    }
  }
  console.log(num)
  let length = num.length
  console.log(length)
  let middleNum = null
  if(length % 2 === 0) {
    middleNum =  (num[parseInt(length/2) -1] + num[parseInt(length/2)])/2
  } else {
    middleNum = num[parseInt(length/2)]
  }
  return middleNum
};

console.log('result',findMedianSortedArrays([1,3],[2,4]))
// @lc code=end

