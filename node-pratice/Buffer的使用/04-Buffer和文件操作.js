const fs = require('fs')

const file = fs.readFileSync('./bar.jpg',err => {
    console.log(err)
})
const buffer = Buffer.from(file)
console.log(buffer)


fs.writeFile('./baz.jpg',buffer,err => {
    console.log(err)
})