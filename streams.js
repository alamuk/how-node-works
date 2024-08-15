const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //// solution : 1
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //// solution : 2 /// back pressure
  // const readable = fs.createReadStream('test-file.txt');
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('file not found');
  // });
  //// solution: 3 // final
  const readableStream = fs.createReadStream('test-file.txt');
  readableStream.pipe(res);
  // here we need a readStream to read the data
  // then we use in to write through writeable destination which is respond.
  /// readableSource.pipe(writeableDestination)
});
///
server.listen(8000, '127.0.0.1', () => {
  console.log('listening....');
});
