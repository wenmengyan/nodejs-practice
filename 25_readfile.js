const fs = require('fs');

fs.readFile('./25_readfile.js', 'utf8', (err, data) => {
  if (err) throw err;/* 抛出错误 */

  console.log(data)
});/* 异步操作 */

const data = fs.readFileSync('./01_run.js', 'utf8');/* 同步操作*/
console.log(data);

/* ./读取当前所有文件的名字，../读取上一层所有文件的名字 */
fs.readdir('../'/* './' */, (err, files) => {
  if (err) throw err;
  console.log(files);
});
