// if not browser env, then require node.js's util. otherwise just use window's
const TextEncoder = (typeof window === 'undefined') ? require('util').TextEncoder : window.TextEncoder

const crypto = require('crypto')

const encryptSig = function (appKey, timeStamp, randomNum) {
  let keyBytes = getBytesByStr(appKey)
  let timestampBytes = getBytesByInt64LE(timeStamp)
  let numberBytes = getBytesByInt64LE(randomNum)
  let concatBuffer = new Uint8Array(keyBytes.length + 16)
  concatBuffer.set(keyBytes)
  concatBuffer.set(timestampBytes, keyBytes.length)
  concatBuffer.set(numberBytes, keyBytes.length + 8)
  let sha1 = crypto.createHash('SHA1')
  sha1.update(concatBuffer)
  let sigResult = sha1.digest('hex')
  return sigResult
}

const getBytesByStr = function (str) {
  // always utf-8
  let encoder = new TextEncoder()
  let strBuffer = encoder.encode(str)
  return strBuffer
}

const getBytesByInt64LE = function (number) {
  let w = 4294967296
  let high = ((number / w) & 0xffffffff)
  let low = number % w
  // transfer to LE
  let numberLEArray = new Uint8Array(8)
  numberLEArray[0] = low & 0xff
  numberLEArray[1] = low >> 8 & 0xff
  numberLEArray[2] = low >> 16 & 0xff
  numberLEArray[3] = low >> 24 & 0xff
  numberLEArray[4] = high & 0xff
  numberLEArray[5] = high >> 8 & 0xff
  numberLEArray[6] = high >> 16 & 0xff
  numberLEArray[7] = high >> 24 & 0xff
  return numberLEArray
}

let loginTimestamp = new Date().getTime()
let loginNum = Math.round(Math.random() * 100000)
console.log(loginTimestamp, loginNum,new Date(loginTimestamp))
let appKey = '9vDOsbgOKJ4i' // change it to your own app key
let sig = encryptSig(appKey, loginTimestamp, loginNum)
console.log(appKey,sig)

