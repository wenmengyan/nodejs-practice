const fs = require('fs');

/* 读取文件 */
const rs = fs.createReadStream('./30_stream.js');
rs.pipe(process.stdout);/* 读一点给一点（水管） stdout：输出到控制台 */

/* 写入文件 */
const ws = fs.createWriteStream('./text.txt');
const tid = setInterval(() => {
  31——
  const num = parseInt(Math.random() * 10);
  if (num < 8) {
    ws.write(num + '')/* stream只能接受字符串或buffer，所以要转换为字符串 */
  } else {
    clearInterval(tid);
    ws.end();
  }
}, 200);

ws.on('finish', () => {
  console.log('done!');
});