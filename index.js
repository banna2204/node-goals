import { createServer } from 'node:http';

const hn = '127.0.0.1';
const port = 3000;

const server = createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('{<h1>Hello</h1>}');
})

server.listen(port, hn,()=>{
    console.log(`Server running at http://${hn}:${port}`);
})