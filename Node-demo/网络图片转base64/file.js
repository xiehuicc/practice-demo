const https = require('https')
const http = require('http')

// 下载网络图片，返回base64
async function downloadNetImg (url, option = {
  retType: 'base64' // 'buf'
}) {
	let buffer = []
	let size = 0
	return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const options = {
      rejectUnauthorized: false,
    }
		client.get(url, options, response => {
			response.on('data', chunk => {
				buffer.push(chunk)
				size += chunk.length
			})
			response.on('end', err => {
        if (err) reject(err)
        if (option.retType === 'base64') {
          let data = Buffer.concat(buffer, size).toString('base64')
          resolve(data)
        }
        if (option.retType === 'buf') {
          let data = Buffer.concat(buffer, size)
          resolve(data)
        }
			})
		})
	})
}
async function getBase64(){
  let base64 = await downloadNetImg('https://scpic.chinaz.net/files/pic/pic9/202207/apic42128.jpg')
  console.log('=============','data:image/jpg;base64,'+ base64);
}

getBase64()