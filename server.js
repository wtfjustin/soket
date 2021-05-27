'use strict';
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')


io.on('connection',(socket)=>{
    console.log('connecting');
    socket.on('sendChatToServer',(message)=> {
        console.log(message);
    });

    socket.on('sendChatToServer', (message) => {
        console.log(message);

        // io.sockets.emit('sendChatToClient', message);
        socket.broadcast.emit('sendChatToClient', message);
    });


    socket.on('disconnect', (socket) => {
        console.log('Disconnect');
    });
})

server.listen(process.env.PORT || 3000,()=>{
    console.log('server is running');
})