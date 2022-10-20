/* 
  这里我们实现一个简单的自动完成功能，当用户输入npm时，按tab键，自动提示用户可选的子命令，如help、init、install。

  输入np，按下tab：自动补全为npm
  输入npm in，按下tab：自动提示可选子命令 init、install
  输入npm inst，按下tab：自动补全为 npm install
*/

const readline = require('readline')
const fs = require('fs')

function completer(line) {
  const command = 'npm'
  const subCommands = ['help','init','install']

  // 输入为空，或者为npm的一部分，则tab补全为npm
  if(line.length < command.length) {
    return [command.indexOf(line) !== -1 ? [command]: [], line ]
  }
    // 输入 npm，tab提示 help init install
    // 输入 npm in，tab提示 init install
  let hits = subCommands.filter(function(subCommand){ 
    const lineTrippedCommand = line.replace(command, '').trim();
    return lineTrippedCommand && subCommand.indexOf( lineTrippedCommand ) === 0;
  })

  if(hits.length === 1){
      hits = hits.map(function(hit){
          return [command, hit].join(' ');
      });
  }

  return [hits.length ? hits : subCommands, line];
}

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
completer: completer
});

rl.prompt();