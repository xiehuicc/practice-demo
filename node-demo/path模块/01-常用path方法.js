const path = require('path')

const filepath = '/user/why/abc.txt'
console.log(__dirname)
console.log(__filename)
const pathOne = path.resolve(__dirname,'/')
const pathTwo = path.resolve('/one','/two')
const pathSec = path.resolve('/foo/bar', './baz');
const pathSec2 = path.resolve('foo/bar', './baz');  // 前面不加/ path会去找绝对路径
const pathThird = path.resolve('/foo/bar', '/abc.txt');

console.log('pathOne：',pathOne)
console.log('pathTwo：',pathTwo)
console.log('pathSec：',pathSec)
console.log('pathSec2',pathSec2)
console.log('pathThird：',pathThird)

const  filepath1 = path.join('/one','/two')

console.log('filePath1:',filepath1)
console.log('basename:',path.basename(filepath))
console.log('dirname:',path.dirname(filepath))
console.log('extname:',path.extname(filepath))


// pathOne： D:\
// pathTwo： D:\two
// pathSec： D:\foo\bar\baz
// pathSec2 D:\Code\practice-demo\node-demo\path模块\foo\bar\baz
// pathThird： D:\abc.txt
// filePath1: \one\two
// basename: abc.txt
// dirname: /user/why
// extname: .txt