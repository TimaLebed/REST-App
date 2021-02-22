const { rejects } = require('assert')
const fs = require('fs')
const { request } = require('http')
const { resolve } = require('path')

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', error => {
    if (error) {
      console.log(error)
    }
  })
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = ''

      req.on('data', chunk => {
        body += chunk.toString()
      })

      req.on('end', () => {
        resolve(body)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  writeDataToFile,
  getPostData,
}