const http = require('http');
const hostName= '127.0.0.1';
const port=3000;
const server = http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello')
});
server.listen(port,hostName, ()=> {
    console.log(`server running at http://${hostName}:${port}`)
});