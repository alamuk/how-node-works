const EventEmitter = require('events');
const http = require('http');

//
// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }
// const myEmitter = new Sales();
//
// myEmitter.on('newSales', () => {
//   console.log('There is a new sales in the panel');
// });
//
// myEmitter.on('newSales', () => {
//   console.log('Customer name: Shah');
// });
//
// myEmitter.on('newSales', (stock) => {
//   console.log(`there is remain ${stock} stocks`);
// });
// myEmitter.emit('newSales', 9);

////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.url);
  console.log('request is receive');
  res.end('respond is showing');
});

server.on('request', (req, res) => {
  console.log('another request 🤔');
});

server.on('close', () => {
  console.log(' Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('server started');
});
