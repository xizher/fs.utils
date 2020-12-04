const fs = require('fs')

/**
 * 读取文件
 * @param {String} path 文件路径
 * @param {Object} options 配置项
 * @param {String} options.encoding 编码格式
 * @param {String} options.flag 文件系统支持
 * @returns {Promise<Buffer>} 读取结果
 */
function readFileAsync (path, { encoding = 'utf8', flag = 'r' } = {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding, flag }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

/**
 * 写入文件
 * @param {String} path 文件路径
 * @param {String} content 写入内容
 * @param {Object} options 配置项
 * @param {String} options.encoding 编码格式
 * @param {Number} options.mode 编码格式
 * @param {String} options.flag 文件系统支持
 * @returns {Promise<void>} 读取结果
 */
function writeFileAsync (path, content, { encoding = 'utf8', flag = 'w', mode = 0o666 } = {}) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, String(content), { encoding, flag, mode }, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  readFileAsync, writeFileAsync
}
