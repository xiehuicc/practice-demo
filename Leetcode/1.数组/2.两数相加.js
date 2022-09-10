/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 链表包含两项：1. 存储的数据：数据可以是任何有效的数据类型； 2. 指针：到下一节点的指针

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 解题思路：
// 1. 新建一个虚拟节点，
// 2. 将l1，l2链表的和放到虚拟节点后面，并标记是否超过10，超过要进位
// 3.下一次求l1，l2的和要将进位加进去

// ListNode构造器，用于创建链表的每个节点
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
// 生成链表
function generateLinklist(arr) {
    let head = new ListNode(arr[0]), // 初始化第一个节点作为头节点
        curr = head; // curr指针保存当前节点
    for(let i=1; i<arr.length; i++) {
        curr.next = new ListNode(arr[i]); // 创建next节点
        curr = curr.next; // curr后移一位
    }
    return head // 返回头节点
}
var addTwoNumbers = function (l1, l2) {
    let l =  new ListNode(0)
    let cur = l  // 当前指针
    let flag = 0 // 进位标志 0：不进位，1：进位
    let sum = null
    while(flag || l1 || l2) {
        // sum = l1.val + l2.val +flag
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0
        sum = val1 + val2 + flag
        flag = sum >= 10 ? 1 : 0
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        if(l1) {
            l1 = l1.next
        }
        if(l2) {
            l2 = l2.next
        }
    }
    console.log('=======',l.next)
    return l.next // 返回虚拟节点后面的节点

};
const l1 = generateLinklist([2,4,3]);
const l2 = generateLinklist([5,6,4]);
console.log('result',addTwoNumbers(l1,l2))
// @lc code=end

