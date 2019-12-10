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
        } else if(method === 'POST' && path === '/echo') {
            socket.end(createResponse({
                body: 'post',
                status: '200',
                contentType: 'text/plain'
            }));
        } else if(method === 'GET' && path === '/red') {
            socket.end(createResponse({
                body: '<h1>Red</h1>',
                status: '200',
                contentType: 'text/plain'
            }));
        } else if(method === 'GET' && path === '/green') {
            socket.end(createResponse({
                body: '<h1>Green</h1>',
                status: '200',
                contentType: 'text/plain'
            }));
        } else if(method === 'GET' && path === '/blue') {
            socket.end(createResponse({
                body: '<h1>Blue</h1>',
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
