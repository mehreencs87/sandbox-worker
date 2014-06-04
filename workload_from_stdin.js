var EventEmitter = require('events').EventEmitter;
var me = module.exports = new EventEmitter();

var workload = '';

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk) {
    workload += chunk;
  }
});



process.stdin.on('end', function() {
  var split = workload.split('---');

  // console.log('this is the workload--->');
  // console.log('var f = ' + split[0]);
  // console.log('<=======');

  eval('var f = ' + split[0]);

  var args = JSON.parse(split[1]);
  me.emit('workload', {
    f: f,
    args: args
  });
});