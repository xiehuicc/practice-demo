const info = {
  name: 'why',
  friend: {name:'kobe'}
}
// ...进行的是浅拷贝
const obj = {...info, name: 'codewhy'}
console.log(obj) // { name: 'codewhy', friend: { name: 'kobe' } }

obj.friend.name = 'james'
console.log(info) // { name: 'why', friend: { name: 'james' } } 注意：name仍为why，obj中因为有重复的key（name）重新赋值了
