/* 
  readline是个非常实用的模块。如名字所示，主要用来实现逐行读取，比如读取用户输入，或者读取文件内容。常见使用场景有下面几种，本文会逐一举例说明。

  文件逐行读取：比如说进行日志分析。
  自动完成：比如输入npm，自动提示"help init install"。
  命令行工具：比如npm init这种问答式的脚手架工具。
*/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Please enter a word：', function(answer) {
  console.log('You have entered [%s]', answer.toUpperCase())
  rl.close()
})