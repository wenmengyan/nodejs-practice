const fs = require('fs');
/* 监听文件变化 */
fs.watch('./', {
  recursive: true/* 是否循环，是否递归 */
}, (eventType, filename) => {
  console.log(eventType, filename)
});

