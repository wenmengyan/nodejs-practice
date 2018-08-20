const fs = require('fs');

fs.stat('./26_stat.js', (err, stats) => {
  /*   if (err) throw err; */
  if (err) {
    console.log('文件不存在');
    return;
  };
  console.log(stats.isFile());/* 判断是否为文件 */
  console.log(stats.isDirectory());/* 判断是否为文件夹 */

  console.log(stats);/* 文件信息 */
})