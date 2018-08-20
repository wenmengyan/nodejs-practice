const fs = require('fs');


/* 添加文件 */
const content = Buffer.from('this is a test.');
fs.writeFile('./text', content/* 'This is a test', 'utf8' *//* {
  encoding: 'utf8'
} */, err => {
    if (err) throw err;

    console.log('done!');
  });


/* 文件重命名 */
fs.rename('./text', 'text.txt', err => {
  if (err) throw err;
  console.log('done!');
});



/* 删除文件 */
fs.unlink('./text.txt', err => {
  if (err) throw err;
  console.log('done!');
});