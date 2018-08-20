const EventEmitter = require('events');
class CustomEvent extends EventEmitter {
}
const ce = new EventEmitter();
ce.on('error', (err, time) => {
  console.log(err);
  console.log(time);
});

ce.emit('error', /* 传递参数 */new Error('opps!'), Date.now());