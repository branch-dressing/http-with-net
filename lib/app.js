const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
    socket.on('data', data => {
        const { method, path } = parseRequest(data.toString());
        if(method === 'GET' && path === '/') {
            socket.end(createResponse({
                body: 'hi',
                status: '200',
                contentType: 'text/plain'
            }));
        } else {
            socket.end(createResponse({ 
                body: 'Not Found', 
                status: '404 Not Found', 
                contentType: 'text/plain' 
            }));
        }
    });
});

module.exports = app;
