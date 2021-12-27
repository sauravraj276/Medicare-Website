const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('dele.txt');
const Server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text'});
    res.end(fileContent);
})
Server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening on port 80")
})