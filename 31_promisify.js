const fs = require('fs');
/* 将异步改为类似同步的书写 */
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

/* 读取文件1 */
read('./31_promisify.js').then(data => {
  console.log(data.toString())
}).catch(ex => {
  console.log(ex); /* catch：若出错，则抛出异常提示 */
});

/* 读取文件2 */
async function test() {
  try {
    const content = await read('./31_promisify.js');
    console.log(content.toString());
  } catch (ex) {
    console.log(ex);
  }
}

test();
