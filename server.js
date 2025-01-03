const http = require('http')

const server=http.createServer((req,res)=>{
    res.end('Welcome to Node Js')
})

server.listen(3000,()=>{
    console.log('server is listening on port 3000')
})