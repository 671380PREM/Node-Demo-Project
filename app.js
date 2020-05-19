const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();
const path = require('path');
const os = require('os');
const fs = require('fs');
const http = require('http');


// First Program
// function sayHello(name) {
//     console.log(name);
// }
// sayHello('Hello Prashant!');
// End

// Second Program
// console.log(module);
// End

// Third Program
// logger.log('PREM');
// End

// Fourth Program
// console.log(__filename);
// console.log(__dirname);
// End

// Fifth Program
// var pathObj = path.parse(__filename);
// console.log(pathObj);
// End

// Sixth Program
// var totalMemory = os.totalmem();
// var freeMemory= os.freemem();
// console.log(`Total Memory ${totalMemory}`);
// console.log(`Full Memory ${freeMemory}`);
// End

// Seventh Program
// const filesSync = fs.readdirSync('./');
// console.log(filesSync);
// fs.readdir('./', (err, files)=>{
//     if(err) console.log(err);
//     else console.log('Result : ', files)
// });
// End

// Eighth Program

// Register a listener

// logger.on('messageLogged', (arg)=>{
//     console.log('Listener called', arg);
// });

// logger.log('Event example');

// End

// Nineth Program
// const server = http.createServer((req, res)=>{
// if(req.url === '/') {
//     res.write('Hello world');
//     res.end();
// }
// if(req.url === '/api/numbers') {
//     res.write(JSON.stringify([1,2,3,4,5,6,7,8,9,10]));
//     res.end();
// }
// });
// server.on('connection', (socket)=>{
//     console.log('New connection.');
// });
// server.listen(3000);
// console.log('Listening on port 3000.');
// End