import http from 'http'

const server=http.createServer((req,res)=>{
    res.end('Welcome to Node Js using express')
})

server.listen(3001,()=>{
    console.log('server is listening on port 3001')
})