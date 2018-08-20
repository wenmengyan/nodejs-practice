const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();
function fn1() {
  console.log('this is a test!');
};

ce.on('test', fn1/* () => {
  console.log('this is a test!');
} */);
function fn2() {
  console.log('test event');
};

ce.once('test', fn2/*  () => {
  console.log('test event');
} */);

setInterval(() => {
  ce.emit('test');
}, 500);

setTimeout(() => {
  /*   ce.removeListener('test', fn2);
    ce.removeListener('test', fn1); */
  ce.removeAllListeners('test');
}, 1500);
