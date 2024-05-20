const EventEmitter = require('events')
const http = require('http')

class Sales extends EventEmitter {
    constructor(){
        super();
    }
}

const emitter = new Sales()

emitter.on('newSale', () => {
    console.log('There was a new sale')
    console.log('Customer name: Vivvian')
})

emitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock`)
})

emitter.emit('newSale', 9)

/////////////////////////

const server = http.createServer()
server.on('request', (req, res) => {
    console.log('Request received.')
    console.log(req.url)
    res.end('Request Received')
})

server.on('request', (req, res) => {
    console.log('Another Request.')
})

server.on('close', () => {
    console.log('Server closed')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...')
})