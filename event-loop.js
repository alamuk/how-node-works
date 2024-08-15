const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;
// these are not inside the event loop
setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('--------------- 1 ');
  //   event loop inside a callback function
  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);

  setImmediate(() => console.log('immediate 2 finished first'));
  process.nextTick(() => console.log('Process.next Tick'));

  crypto.pbkdf2('passwords', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Passwords encrypted');
  });
  crypto.pbkdf2('passwords', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Passwords encrypted');
  });
  crypto.pbkdf2('passwords', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Passwords encrypted');
  });
  crypto.pbkdf2Sync('passwords', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Passwords encrypted');
  });
});

console.log(`Hello from 'top-level' code`);
