const fs = require('fs');
/* 添加文件夹 */
fs.mkdir('test', err => { });
/* 删除文件夹 */
fs.rmdir('./test', err => { });
